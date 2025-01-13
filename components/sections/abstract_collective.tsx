"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/button/button";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const AbstractCollective = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-start  text-white p-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/collective_new.png"
          layout="fill"
          alt="Abstract Background"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Floating Ghost Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }} // Floating effect
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-5 xl:top-40 xl:right-40"
      >
        <Image
          src="/ghost_1.png" // Replace with your actual image path
          alt="Floating Ghost"
          width={450}
          height={450}
          objectFit="contain"
        />
      </motion.div>

      <div className="max-w-5xl text-white p-9 mt-[20%]">
        <h1 className="text-3xl xl:text-5xl font-bold mb-6">
          Join <span className="text-white">The Abstract Collective</span>
        </h1>
        <p className="text-lg text-gray-300 mb-6">
          ABSTRACT BEINGS IS MORE THAN AN NFT—IT’S A COMMUNITY OF DREAMERS AND
          CREATORS. CONNECT WITH US, SHARE IDEAS, AND SHAPE THE ABSTRACT STORY
          TOGETHER.
        </p>

        {/* Social Buttons - Aligned */}
        <div className="flex space-x-4">
          <Button
            text="Twitter"
            iconComponent={<BsTwitter className="text-3xl" />}
          />
          <Button
            text="Discord"
            iconComponent={<BsDiscord className="text-3xl" />}
          />
        </div>
      </div>
    </div>
  );
};

export default AbstractCollective;
