"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setCorrectPassword] = useState(false);
  const [enterPortal, setEnterPortal] = useState(false);
  const [error, setError] = useState(false);
  const router = useRouter();
  // const [currentTime, setCurrentTime] = useState(0);
  const correctPassword = "ABSTRACT.BEING";
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleLogin = () => {
    if (password !== correctPassword) {
      setError(true);
    } else {
      setError(false);
      setCorrectPassword(true);
    }
  };

  // useEffect(() => {
  //   if (isCorrectPassword) {
  //     if (currentTime >= 5) {
  //       router.push("/landing");
  //     }
  //   }
  // }, [isCorrectPassword, router, currentTime]);

  useEffect(() => {
    let id: any = null;
    if (isCorrectPassword) {
      id = setTimeout(() => {
        router.push("/landing");
      }, 7000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [isCorrectPassword]);

  useEffect(() => {
    if (videoRef.current) {
      if (isCorrectPassword) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  }, [isCorrectPassword]);

  return (
    <>
      <div className="relative w-full h-screen flex items-center justify-center">
        {/* Background Video */}
        <video
          ref={videoRef}
          muted
          className="absolute w-full h-full object-cover object-center"
          // onTimeUpdate={(e: any) => setCurrentTime(e.target.currentTime)}
        >
          <source src="/vortex_new.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute w-full h-full  flex items-center justify-center px-4">
          {!enterPortal && (
            <div className="flex flex-col gap-10 justify-center items-center">
              <Image
                src="/abstract_beign.png"
                width={600}
                height={600}
                alt="Title"
                className="w-60 md:w-96 lg:w-[300px] mx-auto"
                loading="eager"
                priority
                quality={50}
              />
              <Button
                text="Enter the portal"
                onClick={() => setEnterPortal(true)}
              />
            </div>
          )}

          {enterPortal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-center text-white space-y-4 max-w-[600px]"
            >
              {/* Top-left Positioned Title */}
              <h1 className="absolute top-4 left-4 text-4xl font-bold">
                Abstract Being
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
                Enable Sound
              </div>

              {/* Password Input Box */}
              {!isCorrectPassword && (
                <div className="p-6">
                  <Image
                    src="/password_enter.png"
                    width={600}
                    height={600}
                    alt="Title"
                    className="w-60 md:w-96 lg:w-[300px] mx-auto"
                    loading="eager"
                    priority
                    quality={50}
                  />
                  <div className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-[400px] xl:px-6 xl:py-3 text-xl rounded-lg outline-none text-black bg-green-100 bg-opacity-35 mt-12"
                    />
                    {error && (
                      <p className="text-red-500 mt-2">Oops! Wrong password.</p>
                    )}
                    <Button
                      text="Enter"
                      className="mt-6"
                      onClick={handleLogin}
                    />
                    <p className="text-3xl text-white mt-2 w-full">
                      PW: ABSTRACT.BEING
                    </p>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
}
