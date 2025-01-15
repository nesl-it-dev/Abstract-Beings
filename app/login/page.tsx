"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { PASSWORD, PROJECT_NAME, TOGGLE_SOUND } from "@/utils/constants";

export default function Page() {
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setCorrectPassword] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  const [currentTime, setCurrentTime] = useState(0);
  const correctPassword = PASSWORD;

  const handleLogin = () => {
    if (password !== correctPassword) {
      setError(true);
    } else {
      setError(false);
      setCorrectPassword(true);
    }
  };

  useEffect(() => {
    if (isCorrectPassword) {
      if (currentTime >= 5) {
        router.push("/landing");
      }

      return () => {};
    }
  }, [isCorrectPassword, router, currentTime]);

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Video */}

        {isCorrectPassword && (
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
            onTimeUpdate={(e: any) => setCurrentTime(e.target.currentTime)}
          >
            <source src="/wormhole.mp4" type="video/mp4" />
          </video>
        )}

        {!isCorrectPassword && (
          <video
            autoPlay
            loop
            muted
            className="absolute w-full h-full object-cover"
          >
            <source src="/vortex.mp4" type="video/mp4" />
          </video>
        )}

        {/* Overlay */}
        <div className="absolute w-full h-full bg-black bg-opacity-50 flex items-center justify-center px-4">
          <div className="text-center text-white space-y-4 max-w-[600px]">
            {/* Top-left Positioned Title */}
            <h1 className="absolute top-4 left-4 text-4xl font-bold">
              {PROJECT_NAME}
            </h1>

            {/* Bottom-right Positioned Ghost Image */}

            {!isCorrectPassword && (
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-4 right-4"
              >
                <img src="/ghost_1.png" alt="Ghost" className="w-56 h-56" />
              </motion.div>
            )}

            {/* Enable Sound Button */}
            <div className="absolute bottom-10 md:bottom-16 right-5 md:right-10 text-white text-lg md:text-2xl lg:text-3xl font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-md  hover:text-peach cursor-pointer">
              {TOGGLE_SOUND}
            </div>

            {/* Password Input Box */}

            {!isCorrectPassword && (
              <div className=" p-6 ">
                <Image
                  src="/password_enter.png"
                  width={600}
                  height={600}
                  alt="Title"
                  className="w-60 md:w-96 lg:w-[500px] mx-auto"
                  loading="eager"
                />
                <div className="flex flex-col justify-center items-center">
                  <input
                    type="text"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-[400px] px-6 py-3 text-3xl  rounded-lg outline-none  text-black bg-green-100 bg-opacity-35 mt-12"
                  />
                  {error && (
                    <p className="text-red-500 mt-2">Oops! Wrong password.</p>
                  )}
                  <Button text="Enter" className="mt-6" onClick={handleLogin} />
                  <p className="text-3xl text-white mt-2 w-full">
                    PW: ABSTRACT.BEING
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
