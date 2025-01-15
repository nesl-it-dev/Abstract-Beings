// Install dependencies: npm install framer-motion

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { LOADING_TEXT } from "@/utils/constants";

export default function AbstractJungle() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: any) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative w-screen h-screen bg-cover bg-center"
      style={{ backgroundImage: "url(/path-to-your-background-image.jpg)" }}
    >
      {/* Casper Ghost Animation */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute inset-0 flex items-center justify-center"
      >
        <Image
          src="/path-to-casper-ghost.png"
          alt="Casper Ghost"
          width={150}
          height={150}
          loading="eager"
        />
      </motion.div>

      {/* Fireflies */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-yellow-500 opacity-50"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            filter: `blur(2px)`,
          }}
          animate={{
            opacity: [0.5, 1, 0.5],
            scale: mousePosition.x ? [1, 1.5, 1] : 1,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "mirror",
          }}
        ></motion.div>
      ))}

      {/* Progress Bar */}
      <div className="absolute bottom-10 left-0 w-full px-10">
        <div className="relative w-full h-2 bg-gray-700 rounded">
          <motion.div
            className="h-2 rounded bg-green-500"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 10 }}
          ></motion.div>
        </div>
      </div>

      {/* Text */}
      <div className="absolute bottom-20 w-full text-center text-white text-2xl font-bold">
        {LOADING_TEXT}
      </div>
    </div>
  );
}
