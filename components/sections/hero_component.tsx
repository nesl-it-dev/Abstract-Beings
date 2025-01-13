"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { FaTelegramPlane } from "react-icons/fa";
import { useEffect, useState } from "react";

const Hero = () => {
  const [scrollAmount, setScrollAmount] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollAmount(window.scrollY); // Track scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate opacity based on scroll amount
  const headerOpacity =
    scrollAmount < 5 ? 1 : Math.max(1 - (scrollAmount - 5) / 100, 0);

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden border-b border-black">
      {/* Header */}
      <header
        className={`fixed w-full p-4 flex justify-between items-center text-white z-50 transition-all duration-500 md:px-8 lg:px-12 xl:px-16 ${
          scrollAmount > 50 ? "top-5" : "top-0"
        }`}
        style={{ opacity: headerOpacity }}
      >
        <h1 className="text-xl sm:text-3xl md:text-4xl xl:text-5xl font-semibold">
          Abstract Being
        </h1>
        <div className="flex space-x-4 sm:space-x-6 lg:space-x-8">
          <BsTwitter className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 cursor-pointer hover:text-peach" />
          <BsDiscord className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 cursor-pointer hover:text-peach" />
          <FaTelegramPlane className="w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12 cursor-pointer hover:text-peach" />
        </div>
      </header>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <Image
          src="/hero_new.png"
          fill
          alt="Jungle Background"
          className="object-cover object-bottom"
        />
      </div>

      {/* Main Content */}
      <div className="relative top-[12%] md:top-[18%] lg:top-[20%] text-center text-white px-4">
        <Image
          src="/title.png"
          width={500}
          height={500}
          alt="Title"
          className="w-52 sm:w-60 md:w-72 lg:w-80 xl:w-[500px]"
        />
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
        />
      </motion.div>

      {/* Enable Sound Button */}
      <div className="absolute bottom-10 md:bottom-16 lg:bottom-20 right-5 md:right-10 lg:right-14 bg-transparent text-white text-base sm:text-lg md:text-2xl lg:text-3xl font-semibold px-3 py-2 md:px-4 md:py-2.5 rounded-md shadow-lg hover:text-peach cursor-pointer">
        Enable Sound
      </div>
    </div>
  );
};

export default Hero;
