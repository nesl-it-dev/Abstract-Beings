"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { useEffect, useState } from "react";
import { DISABLE_SOUND, PROJECT_NAME, TOGGLE_SOUND } from "@/utils/constants";
import { useAudio } from "@/utils/audio_context";

const Hero = () => {
  const [scrollAmount, setScrollAmount] = useState(0);
  const { isPlaying, playAudio, stopAudio } = useAudio();

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerOpacity =
    scrollAmount < 5 ? 1 : Math.max(1 - (scrollAmount - 5) / 100, 0);

  return (
    <div
      id="section_1"
      className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden border-b border-black"
    >
      {/* Header */}
      <header
        className={`fixed w-full p-4 flex justify-end items-center text-white z-50 transition-all duration-500 md:px-8 lg:px-12 xl:px-16 ${
          scrollAmount > 50 ? "top-5" : "top-0"
        }`}
        style={{ opacity: headerOpacity }}
      >
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
          <a href={"https://x.com/Abstract_Beings"} target="_blank">
            <BsTwitter className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 cursor-pointer hover:text-peach" />
          </a>
          <a href={"https://discord.gg/XRPj2PxwXs"} target="_blank">
            <BsDiscord className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 cursor-pointer hover:text-peach" />
          </a>
        </div>
      </header>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero_new.png"
          fill
          alt="Jungle Background"
          className="object-cover object-bottom"
          loading="eager"
          priority
          quality={80}
        />
      </div>

      {/* Main Content */}
      <div className="relative top-[12%] md:top-[18%] lg:top-[12%] text-center text-white px-4">
        <h1 className="text-5xl mb-3">WELCOME TO</h1>
        <h1 className="text-6xl">{PROJECT_NAME}</h1>
      </div>

      {/* Animated Character Image */}
      <motion.div
        className="relative top-[15%] md:top-[20%] lg:top-[22%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Image
          src="/ghost_1.png"
          width={250}
          height={250}
          alt="Character"
          className="w-24 sm:w-32 md:w-40 lg:w-48 xl:w-[250px]"
          loading="eager"
        />
      </motion.div>

      {/* Enable Sound Button */}
      <div
        className="absolute bottom-10 md:bottom-16 lg:bottom-20 right-5 md:right-10 lg:right-14 bg-transparent text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-md  hover:text-peach cursor-pointer"
        onClick={isPlaying ? stopAudio : playAudio}
      >
        {isPlaying ? DISABLE_SOUND : TOGGLE_SOUND}
      </div>
    </div>
  );
};

export default Hero;
