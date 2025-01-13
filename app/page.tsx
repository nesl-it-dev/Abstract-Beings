"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    let currentProgress = 0;
    let interval: any;

    const startProgress = () => {
      interval = setInterval(() => {
        // Simulate random stopping
        const increment = Math.random() < 0.3 ? 0 : 5; // 30% chance to stop
        currentProgress += increment;

        if (currentProgress >= 100) {
          clearInterval(interval);
          currentProgress = 100;
        }

        setProgress(currentProgress);
      }, 150); // Adjust for smooth animation (3 sec total)

      // Simulate random stop at some point
      setTimeout(() => {
        clearInterval(interval);
        setTimeout(startProgress, 500); // Pause for 0.5s then resume
      }, Math.random() * 2000 + 500); // Randomly stop between 0.5s and 2.5s
    };

    startProgress();
  }, []);

  useEffect(() => {
    if (progress === 100) {
      router.push("/entering_jungle");
    }
  }, [progress]);

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      {/* Full-screen background image */}
      <Image
        src="/entering_1.png" // Background Image
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0 object-bottom"
        loading="eager"
      />

      {/* Floating Casper */}
      <motion.div
        className="absolute bottom-24 left-[40%] transform -translate-x-[40%] z-10"
        initial={{ y: -10 }}
        animate={{ y: 10 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
      >
        <Image
          src="/casper_firelight.png" // Casper Image
          alt="Casper"
          width={300} // Adjusted for better alignment
          height={300}
          quality={100}
          loading="eager"
        />
      </motion.div>

      {/* Progress Bar */}
      <div className="absolute bottom-16 w-3/4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full h-2">
        <motion.div
          className="bg-green-500 h-2 rounded-full"
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Progress Text */}
      <div className="absolute right-[-40%] bottom-[8%] w-full text-center text-white z-20">
        <p className="text-sm">{progress}%</p>
      </div>
      <div className="absolute bottom-20 w-full text-center text-white z-20">
        <h1 className="text-xl font-bold">Entering The Abstract Jungle...</h1>
      </div>
    </div>
  );
};

export default Page;
