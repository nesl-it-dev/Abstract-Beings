"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Holders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    description: "",
  });

  const utilities = [
    {
      title: "The Shattering Of The Balance",
      description: `For countless eons, the Abstract thrived, powered by the collective imagination of the worlds it touched. The Abstract Beings roamed freely, maintaining harmony and crafting new dimensions from the threads of thought. But harmony is fragile, and even the Abstract could not escape the ambitions of those who sought to control it.
`,
    },
    {
      title: "NFT Licensing",
      description: `Abstract Beings holders will gain full commercial rights to their NFTs, enabling them to license their characters for branding, merchandise, storytelling, or creative collaborations. Build your own empire with the ‘Beings’ as your cornerstone`,
    },
    {
      title: "Supporting Holder Brands and Businesses",
      description: `Abstract Being is more than an NFT—it’s a partner in growth. Whether you're an 
entrepreneur, artist, founder or visionary, we’re here to help you leverage your NFT to
create impactful personal or business brands`,
    },
    {
      title: "Focus on IP and Brand Building",
      description: `Each Abstract Being is a unique identity waiting to be developed into a global intellectual property. We provide the tools and resources for holders to bring their Being’s story to life—whether it’s through art, media, or partnerships`,
    },
    {
      title: "Exclusive [Redacted] Release (Late Q1)",
      description: `A never-done-before, groundbreaking opportunity awaits holders, transcending the boundaries of Abstract. More will be revealed as we step into the later stages of Q1. Stay tuned`,
    },
    {
      title: "Community Rewards",
      description: `Holders of Abstract Beings will enjoy exclusive perks and rewards, including allocations, whitelists, etc. and access to ecosystem events, and community-driven opportunities. Together, we’ll build a thriving network that redefines what it means to
be part of an NFT project`,
    },
    {
      title: "Customized Being Development",
      description: `Holders will be able to work with the team to personalize traits or create derivative works of their NFT, deepening the connection between holder and their Being`,
    },
  ];

  const openModal = (item: any) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/holders.png"
          layout="fill"
          objectFit="cover"
          alt="Abstract Background"
          className="w-full h-full object-bottom"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="text-white">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">
          What Awaits Holders
        </h1>
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-green-400 font-semibold mt-2">
          Key Utilities For Abstract Beings
        </h2>

        {/* Utility Boxes Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {utilities.map((item, index) => (
            // <div
            //   key={index}
            //   className="relative px-6 py-4 bg-gray-700 bg-opacity-80 text-white text-sm sm:text-base font-semibold shadow-md border border-gray-500 hover:bg-gray-600 transition duration-300 cursor-pointer"
            //   onClick={() => openModal(item)}
            //   style={{
            //     clipPath: "polygon(4% 5%, 96% 0%, 95% 95%, 2% 100%)",
            //     borderRadius: "20px", // Slightly increased for a smoother look
            //     backdropFilter: "blur(20px)", // Enhances background transparency effect
            //   }}
            // >
            //   <span className="relative">{item.title}</span>
            // </div>
            <button
              key={index}
              className="bg-darkGray text-white bg-opacity-80 px-6 py-2 rounded-lg border border-gray-500 shadow-lg font-semibold hover:bg-gray-600 transition duration-300"
              onClick={() => openModal(item)}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>

      {/* Animated Modal with Background Image */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50 p-4"
          >
            <div className="relative text-white max-w-lg w-full p-6 sm:p-8 rounded-lg shadow-lg overflow-hidden">
              {/* Modal Background Image */}
              <div className="absolute inset-0 -z-10">
                <Image
                  src="/modal_bg.png"
                  layout="fill"
                  objectFit="cover"
                  alt="Modal Background"
                  className="w-full h-full"
                  loading="eager"
                />
              </div>

              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-gray-400 hover:text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-4">
                  {modalContent.title}
                </h2>
                <p className="text-gray-300">{modalContent.description}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Holders;
