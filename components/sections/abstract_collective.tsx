"use client";

import Button from "@/components/button/button";
import { PROJECT_NAME } from "@/utils/constants";
import { motion } from "framer-motion";
import Image from "next/image";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const AbstractCollective = () => {
  return (
    <div
      id="section_10"
      className="relative w-full min-h-screen flex flex-col items-start  text-white p-6"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/collective_new.png"
          layout="fill"
          alt="Abstract Background"
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />
      </div>

      {/* Floating Ghost Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-10 right-5 xl:top-40 xl:right-40"
      >
        <Image
          src="/ghost_1.png"
          alt="Floating Ghost"
          width={450}
          height={450}
          objectFit="contain"
          loading="eager"
        />
      </motion.div>

      <div className="max-w-5xl text-white p-9 mt-[20%]">
        <h1 className="text-3xl xl:text-5xl font-bold mb-6">
          Join <span className="text-white">The {PROJECT_NAME}</span>
        </h1>
        <p className="text-lg text-white mb-6">
          ABSTRACT BEINGS IS MORE THAN AN NFT—IT&apos;S A COMMUNITY OF DREAMERS
          AND CREATORS. CONNECT WITH US, SHARE IDEAS, AND SHAPE THE ABSTRACT
          STORY TOGETHER.
        </p>

        {/* Social Buttons */}
        <div className="flex space-x-4">
          <Button
            text="Twitter"
            iconComponent={<BsTwitter className="text-3xl" />}
            onClick={() =>
              window.open("https://x.com/Abstract_Beings", "__blank")
            }
          />
          <Button
            text="Discord"
            iconComponent={<BsDiscord className="text-3xl" />}
            onClick={() =>
              window.open("https://discord.gg/XRPj2PxwXs", "__blank")
            }
          />
        </div>
      </div>
    </div>
  );
};

export default AbstractCollective;
