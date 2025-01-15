"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECT_NAME } from "@/utils/constants";

const Holders = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    subtitle: "",
    description: "",
  });

  const utilities = [
    {
      title: "NFT Licensing",
      subtitle: "Empower your creativity",
      description: `Abstract Beings holders will gain full commercial rights to their NFTs, enabling them to license their characters for branding, merchandise, storytelling, or creative collaborations. Build your own empire with the ‘Beings’ as your cornerstone`,
    },
    {
      title: "IP and Brand Building",
      subtitle: "Every Being has a story to tell",
      description: `Each ${PROJECT_NAME} is a unique identity waiting to be developed into a global intellectual property. We provide the tools and resources for holders to bring their Being’s story to life—whether it’s through art, media, or partnerships`,
    },
    {
      title: "Beings Hub",
      subtitle: "",
      description: `The Beings Hub is a central platform for holders to 
explore, create, and connect. It offers a personalized dashboard to track 
NFTs, tools for IP development and exclusive lore integration. Holders 
can also network with the community, participate in events, and access 
brand-building resources—all in one seamless, intuitive space designed to
unlock the full potential of their Abstract Beings.`,
    },
    //     {
    //       title: "The Shattering Of The Balance",
    //       subtitle: "",
    //       description: `For countless eons, the Abstract thrived, powered by the collective imagination of the worlds it touched. The Abstract Beings roamed freely, maintaining harmony and crafting new dimensions from the threads of thought. But harmony is fragile, and even the Abstract could not escape the ambitions of those who sought to control it. \\n One fateful moment shattered everything. A powerful force—greedy, relentless, and unseen—pierced the Abstract Portal, seeking to harness its boundless energy. The portal fractured, spilling its essence into countless realities. The Abstract Beings, once unified and harmonious, began to fragment. Their forms destabilized, their purpose clouded.  \\n As the portal’s energy unraveled, its influence spilled into the mortal realms, bringing strange
    // phenomena. People began experiencing vivid dreams, visions of places they could not
    // explain, and glimpses of shadowy figures in the corners of their eyes. The veil between the Abstract and the mortal plane grew thin.`,
    //     },

    {
      title: "Supporting Holder Brands and Businesses",
      subtitle: "Your vision, our support",
      description: `${PROJECT_NAME} is more than an NFT—it’s a partner in growth. Whether you're an 
entrepreneur, artist, founder or visionary, we’re here to help you leverage your NFT to
create impactful personal or business brands`,
    },

    // {
    //   title: "Exclusive [Redacted] Release (Late Q1)",
    //   subtitle: "The Portal is expanding",
    //   description: `A never-done-before, groundbreaking opportunity awaits holders, transcending the boundaries of Abstract. More will be revealed as we step into the later stages of Q1. Stay tuned`,
    // },
    {
      title: "Community Rewards",
      subtitle: "Grow together, thrive together",
      description: `Holders of Abstract Beings will enjoy exclusive perks and rewards, including allocations, whitelists, etc. and access to ecosystem events, and community-driven opportunities. Together, we’ll build a thriving network that redefines what it means to
be part of an NFT project`,
    },
    // {
    //   title: "Customized Being Development",
    //   subtitle: "Forge a deeper bond with your Being",
    //   description: `Holders will be able to work with the team to personalize traits or create derivative works of their NFT, deepening the connection between holder and their Being`,
    // },
  ];

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
    [
      // { id: 5, title: utilities[5].title },
      // { id: 6, title: utilities[6].title },
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
