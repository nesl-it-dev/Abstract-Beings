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
      title: "NFT Licensing",
      description: "Exclusive rights for NFT holders to monetize their assets.",
    },
    {
      title: "Supporting Holder Brands and Businesses",
      description:
        "We assist holders in building and promoting their own brands.",
    },
    {
      title: "Focus on IP & Brand Building",
      description: "Helping you expand your brand beyond the NFT space.",
    },
    {
      title: "Exclusive Release",
      description: "Get early access to new content and special drops.",
    },
    {
      title: "Community Rewards",
      description:
        "Earn rewards and incentives for being an active community member.",
    },
    {
      title: "Customized Being Development",
      description: "Personalize and develop your unique Abstract Being.",
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
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/holders.png"
          layout="fill"
          alt="Abstract Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-center text-white">
        <h1 className="text-[64px] font-semibold">What Awaits Holders</h1>
        <h2 className="text-[52px] text-green-400 font-semibold mt-2">
          Key Utilities For Abstract Beings
        </h2>

        {/* Utility Boxes */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {utilities.map((item, index) => (
            <div
              key={index}
              className="px-4 py-2 bg-gray-700 text-white text-sm font-semibold rounded-lg shadow-md border border-gray-500 hover:bg-gray-600 transition duration-300 cursor-pointer"
              onClick={() => openModal(item)}
            >
              {item.title}
            </div>
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
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 backdrop-blur-sm z-50"
          >
            <div className="relative  text-white max-w-lg w-full p-6 rounded-lg shadow-lg overflow-hidden">
              {/* Modal Background Image */}
              <div className="absolute inset-0">
                <Image
                  src="/modal_bg.png" // Change to your desired modal background image
                  layout="fill"
                  alt="Modal Background"
                  className="w-full h-full object-cover"
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
