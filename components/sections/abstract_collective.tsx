import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../button/button";
import { BsDiscord, BsTwitter } from "react-icons/bs";

const AbstractCollective = () => {
  return (
    <div className="relative w-full min-h-screen flex flex-col items-start justify-end text-white p-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/forest_5.png"
          layout="fill"
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Floating Ghost Image */}
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [0, -15, 0] }} // Floating effect
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-40 right-40"
      >
        <Image
          src="/ghost_1.png" // Replace with your actual image path
          alt="Floating Ghost"
          width={250}
          height={250}
          objectFit="contain"
        />
      </motion.div>

      <div className="max-w-5xl text-white p-9">
        <h1 className="text-5xl font-bold mb-6">
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
