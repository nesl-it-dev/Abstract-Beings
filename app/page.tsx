"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LOADING_TEXT } from "@/utils/constants";

const Page = () => {
  const [progress, setProgress] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const nextProgress = prevProgress + 10;

        if (nextProgress >= 100) {
          clearInterval(interval);
          return 100;
        }

        return nextProgress;
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      setTimeout(() => {
        router.push("/entering_jungle");
      }, 500);
    }
  }, [progress]);

  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <video
        autoPlay
        muted
        loop
        className="absolute w-full h-full object-cover lg:object-[50%_20%] xl:object-[0%_15%] 2xl:object-[0%_20%]"
      >
        <source src="/new-loading_3.mp4" type="video/mp4" />
      </video>

      {/* Progress Bar */}
      <div className="absolute bottom-16 w-3/4 left-1/2 transform -translate-x-1/2 bg-gray-800 rounded-full h-2">
        <motion.div
          className="bg-green-500 h-2 rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "linear" }}
        />
      </div>

      {/* Progress Text */}
      <div className="absolute right-[-40%] bottom-[8%] w-full text-center text-white z-20">
        <p className="text-sm">{progress}%</p>
      </div>
      <div className="absolute bottom-20 w-full text-center text-white z-20">
        <h1 className="text-xl font-bold">{LOADING_TEXT}</h1>
      </div>
    </div>
  );
};

export default Page;
