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
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Header */}
      <header
        className={`fixed w-full p-4 flex justify-between items-center text-white z-50 transition-all duration-500 ${
          scrollAmount > 50 ? "top-5" : "top-0"
        }`}
        style={{ opacity: headerOpacity }} // Opacity reduces as user scrolls down
      >
        <h1 className="text-6xl font-semibold">Abstract Being</h1>
        <div className="flex space-x-8">
          <BsTwitter className="w-14 h-14 cursor-pointer hover:text-peach" />
          <BsDiscord className="w-14 h-14 cursor-pointer hover:text-peach" />
          <FaTelegramPlane className="w-14 h-14 cursor-pointer hover:text-peach" />
        </div>
      </header>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero_img_1920.png"
          layout="fill"
          alt="Jungle Background"
          className="w-full h-full object-fill"
        />
      </div>

      {/* Main Content */}
      <div className="relative top-[5%] text-center text-white">
        <Image src="/title.png" width={500} height={500} alt="Title" />
      </div>

      {/* Animated Character Image */}
      <motion.div
        className="relative top-[7%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Image src="/ghost_1.png" width={250} height={250} alt="Character" />
      </motion.div>

      {/* Enable Sound Button */}
      <div className="absolute bottom-20 right-10 text-white text-3xl font-semibold px-4 py-2 rounded-md shadow-lg hover:text-peach cursor-pointer">
        Enable Sound
      </div>
    </div>
  );
};

export default Hero;
