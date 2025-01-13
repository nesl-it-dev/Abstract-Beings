"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    name: "Leah",
    title: "The Portal Artisan",
    subtitle: "The hands that shape the Abstract.",
    description:
      "Leah is the creative genius behind the design of Abstract Beings. An excellent 3D artist with an eye for detail and a knack for bringing concepts to life, she has created the unique and mystical aesthetic that defines the Abstract realm. From glowing crowns to ethereal traits, every Being carries her signature touch of artistry and storytelling.",
    image: "/team_1.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Zaki",
    title: "The Portal Master",
    subtitle: "Seamless transitions between dimensions.",
    description:
      "Zaki ensures seamless transitions between dimensions and realities, making the impossible possible.",
    image: "/team_2.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Masnoon",
    title: "The Dream Weaver",
    subtitle: "Weaving dreams into the digital space.",
    description:
      "Masnoon shapes immersive experiences for everyone, turning imagination into reality.",
    image: "/team_3.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Malik",
    title: "The Code Keeper",
    subtitle: "The architect of robust solutions.",
    description:
      "Malik crafts robust and elegant solutions that power the experience, ensuring stability and innovation.",
    image: "/team_4.png",
    bg: "/card_bg_1.png",
  },
];

export default function TeamSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-12 py-12"
      style={{
        backgroundImage: "url('/section_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-center text-4xl font-bold text-black mb-8 sm:mb-12">
        Meet The Dreamers
      </h2>

      {/* Flex container that keeps items in one row */}
      <div className="flex flex-nowrap gap-6 overflow-x-auto max-w-full">
        {teamMembers.map((member, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className="relative flex items-center rounded-lg shadow-lg overflow-hidden transition-all duration-500 cursor-pointer"
              style={{
                width: isExpanded ? "700px" : "280px", // 700px on hover, 280px initially
                height: "350px",
                backgroundImage: `url(${member.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <div className="w-[320px] h-[350px]">
                <div
                  className="relative flex-shrink-0 p-4"
                  style={{
                    width: "280px",
                    height: "350px",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.title}`}
                    width={280}
                    height={350}
                    className={`rounded-md object-cover transition-all duration-500 ease-in-out ${
                      isExpanded ? "opacity-0" : "opacity-100"
                    }`}
                  />

                  {/* Secondary image with fade-in effect when expanded */}
                  <div
                    className={`absolute top-0 left-0 w-full h-full rounded-md transition-opacity duration-500 ease-in-out ${
                      isExpanded ? "opacity-100" : "opacity-0"
                    }`}
                    style={{
                      backgroundImage: `url(${member.image})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                    }}
                  />

                  {/* Member Name and Title (visible when not expanded) */}
                  <div
                    className={`absolute bottom-0 left-0 w-full p-4 text-center text-black transition-opacity duration-500 ${
                      isExpanded ? "opacity-0" : "opacity-100"
                    }`}
                  >
                    <h1>{member.name}</h1>
                    <h2>{member.title}</h2>
                  </div>
                </div>
              </div>

              {/* Expanded member details */}
              {isExpanded && (
                <motion.div
                  className="p-6 text-left overflow-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-black">
                    {member.name} - {member.title}
                  </h3>
                  <p className="text-lg font-medium text-green-600 mt-2">
                    {/* {member.subtitle} */}
                  </p>
                  <p className="text-sm text-gray-700 mt-4">
                    {member.description}
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
