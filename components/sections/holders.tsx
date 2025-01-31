"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { utilities } from "@/utils/constants";

const Holders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  const openModal = (item: any) => {
    setModalContent(item);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const newUtilities = [
    [
      { id: 0, title: utilities[0].title },
      { id: 1, title: utilities[1].title },
    ],
    [
      { id: 2, title: utilities[2].title },
      { id: 3, title: utilities[3].title },
      { id: 4, title: utilities[4].title },
    ],
  ];

  return (
    <div
      id="holder"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 sm:px-10 md:px-16 lg:px-20 text-center"
    >
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
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-lightGreen font-semibold mt-14">
          Key Utilities For Abstract Beings
        </h2>

        {/* Utility Boxes Grid */}
        <div className="flex flex-col gap-8 mt-14">
          {newUtilities.map((elem, index) => {
            return (
              <div
                key={index}
                className="flex justify-center items-center gap-4"
              >
                {elem.map((innerElem, innerIndex) => {
                  return (
                    <div key={innerIndex} className="flex">
                      <button
                        key={index}
                        className="bg-darkGray text-white bg-opacity-80 px-6 py-2 rounded-lg border border-gray-500 shadow-lg font-semibold hover:text-peach transition duration-300"
                        onClick={() => openModal(utilities[innerElem.id])}
                      >
                        {innerElem.title}
                      </button>
                    </div>
                  );
                })}
              </div>
            );
          })}
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
            <div className="relative text-white max-w-2xl h-54 min-h-64 w-full p-6 sm:p-8 rounded-lg shadow-lg overflow-hidden">
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
                className="absolute top-3 right-3 text-white hover:text-white text-2xl"
                onClick={closeModal}
              >
                &times;
              </button>

              {/* Modal Content */}
              <div className="relative z-10 flex flex-col gap-4">
                <h2 className="text-2xl font-semibold text-white">
                  {modalContent.title}
                </h2>
                {modalContent.subtitle.length > 1 && (
                  <p className="text-xl text-lightGreen">
                    {modalContent.subtitle}
                  </p>
                )}
                {modalContent.description.split("\\n").map((line, index) => (
                  <p key={index} className="text-white text-sm mt-2">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Holders;
