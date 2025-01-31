"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/button/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { DISABLE_SOUND, PASSWORD, TOGGLE_SOUND } from "@/utils/constants";
import { useAudio } from "@/utils/audio_context";

export default function Home() {
  const [password, setPassword] = useState("");
  const [isCorrectPassword, setCorrectPassword] = useState(false);
  const [enterPortal, setEnterPortal] = useState(false);
  const [error, setError] = useState(false);
  const [videoPlay, setVideoPlay] = useState(false);
  const router = useRouter();
  const correctPassword = PASSWORD;
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const { isPlaying, playAudio, stopAudio } = useAudio();

  const handleLogin = () => {
    if (password !== correctPassword) {
      setError(true);
    } else {
      setError(false);
      setCorrectPassword(true);
    }
  };

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
        setVideoPlay(true);
      } else {
        videoRef.current.pause();
        setVideoPlay(false);
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
          preload="auto"
          poster="/vortex.png"
          className="absolute w-full hidden lg:block h-full object-cover object-center"
        >
          <source src="/vortex_new.mp4" type="video/mp4" />
        </video>
        <Image
          width={500}
          height={100}
          alt="Not Found"
          src={"/Image_To_Show.webp"}
          quality={30}
          className="lg:hidden absolute w-full h-full object-cover object-center"
        />
        <div className="absolute w-full h-full bg-black z-[100] bg-opacity-70 flex items-center justify-center lg:hidden">
          <h2 className="text-2xl md:text-4xl text-white text-center font-orbitron font-bold">
            Switch to Desktop
          </h2>
        </div>

        {!videoPlay && (
          <>
            <div className="absolute 2xl:top-[11.5%] 2xl:left-[24%]  xl:top-[1.8%]  xl:left-[27%] xl:w-[200px] xl:h-[50px] top-[14%] left-[20%] w-[145px] h-[35px] mr-10">
              <h2 className="text-4xl 2xl:text-5xl text-white hidden lg:block">
                ABSTRACT
              </h2>
            </div>
            <div className="absolute 2xl:top-[11.5%] 2xl:right-[34.2%]  xl:top-[2%] xl:right-[32%] xl:w-[200px] xl:h-[60px] top-[14%] right-[30%] w-[150px] h-[35px]">
              <h2 className="text-4xl  2xl:text-5xl text-white hidden lg:block">
                BEINGS
              </h2>
            </div>
          </>
        )}

        {/* Overlay */}
        <div className="absolute hidden lg:flex w-full h-full  items-center justify-center px-4">
          {!enterPortal && (
            <div className="flex flex-col gap-10 justify-center items-center">
              <Button
                text="Enter the Abstract"
                onClick={() => setEnterPortal(true)}
                height={180}
                width={250}
                className="xl:mt-32"
              />
            </div>
          )}
          <>
            <motion.div
              initial={{ y: 0 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="absolute bottom-4 right-4"
            >
              <img src="/ghost_1.png" alt="Ghost" className="w-56 h-56" />
            </motion.div>

            <div
              className="absolute bottom-10 md:bottom-16 right-5 md:right-10 text-white text-lg md:text-2xl lg:text-3xl font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-md  hover:text-peach cursor-pointer"
              onClick={isPlaying ? stopAudio : playAudio}
            >
              {isPlaying ? DISABLE_SOUND : TOGGLE_SOUND}
            </div>
          </>

          {enterPortal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="text-center text-white space-y-4 max-w-[600px]"
            >
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
                    placeholder="empty"
                  />
                  <div className="flex flex-col justify-center items-center">
                    <input
                      type="text"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-[400px] xl:px-6 xl:py-3 text-xl rounded-lg outline-none text-black bg-green-100 bg-opacity-35 mt-12"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleLogin();
                        }
                      }}
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
                      PW: {PASSWORD}
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
