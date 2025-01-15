import Image from "next/image";
import { motion } from "framer-motion";
import { PROJECT_NAME, TOGGLE_SOUND } from "@/utils/constants";

const HeroTest = () => {
  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero_forest.png"
          layout="fill"
          alt="Jungle Background"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>

      {/* Wrap Image (Placing it at the bottom) */}
      <div className="absolute bottom-[-75px] left-0 w-full pointer-events-none">
        <Image
          src="/wraps.png"
          layout="intrinsic"
          width={1920} // Adjust based on actual image size
          height={400} // Adjust height if needed
          alt="Jungle Wrap"
          //   className="mix-blend-overlay"
          loading="eager"
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 w-full p-4 flex justify-between items-center text-white z-50">
        <h1 className="text-xl font-bold">{PROJECT_NAME}</h1>
        <div className="flex space-x-4">
          <Image src="/twitter-icon.png" width={24} height={24} alt="Twitter" />
          <Image src="/discord-icon.png" width={24} height={24} alt="Discord" />
        </div>
      </header>

      {/* Main Content */}
      <div className="relative z-10 text-center text-white top-[5%]">
        <Image src="/title.png" width={500} height={500} alt="Title" />
      </div>

      {/* Animated Character Image */}
      <motion.div
        className="relative top-[20%]"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
      >
        <Image src="/ghost_1.png" width={200} height={200} alt="Character" />
      </motion.div>

      {/* Enable Sound Button */}
      <button className="absolute bottom-40 right-10 text-white text-3xl font-semibold px-4 py-2 rounded-md">
        {TOGGLE_SOUND}
      </button>
    </div>
  );
};

export default HeroTest;
