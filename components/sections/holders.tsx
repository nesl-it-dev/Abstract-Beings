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
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 text-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/holders.png"
          layout="fill"
          objectFit="cover"
          alt="Abstract Background"
          className="w-full h-full"
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
