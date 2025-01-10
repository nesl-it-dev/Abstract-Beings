"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    name: "Leah",
    title: "The Portal Artisan",
    description:
      "Leah is the creative genius behind the design of Abstract Beings. An excellent 3D artist with an eye for detail and a knack for bringing concepts to life.",
    image: "/team_1.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Zaki",
    title: "The Portal Master",
    description:
      "Zaki is the master of the portals, ensuring seamless transitions between dimensions and realities.",
    image: "/team_2.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Masnoon",
    title: "The Dream Weaver",
    description:
      "Masnoon weaves dreams into the digital space, shaping immersive experiences for everyone.",
    image: "/team_3.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Malik",
    title: "The Code Keeper",
    description:
      "Malik is the keeper of the code, crafting robust and elegant solutions that power the experience.",
    image: "/team_4.png",
    bg: "/card_bg_1.png",
  },
];

export default function TeamSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center px-6 sm:px-12"
      style={{
        backgroundImage: "url('/section_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-center text-4xl font-bold text-black mb-8 sm:mb-12">
        Meet The Dreamers
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl w-full justify-items-center">
        {teamMembers.map((member, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className={`relative text-center rounded-lg bg-cover bg-center shadow-lg flex flex-col sm:flex-row items-center cursor-pointer transition-all duration-500 overflow-hidden`}
              style={{
                backgroundImage: `url('${member.bg}')`,
                width: isExpanded ? "100%" : "100%",
                maxWidth: isExpanded ? "650px" : "280px",
                height: "400px",
                zIndex: isExpanded ? 10 : 1,
                padding: "20px",
                borderRadius: "15px",
              }}
              layout
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <motion.div
                className="flex justify-center items-center"
                layout
                style={{
                  width: "100%",
                  height: "100%",
                  transition: "width 0.5s ease-in-out",
                }}
              >
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.title}`}
                  width={isExpanded ? 380 : 280}
                  height={isExpanded ? 460 : 340}
                  className="rounded-md object-cover"
                />
              </motion.div>
              {isExpanded && (
                <motion.div
                  className="ml-4 text-left px-4 flex flex-col justify-center"
                  layout
                >
                  <h3 className="text-lg font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-700">{member.title}</p>
                  <motion.p
                    className="mt-2 text-sm text-gray-600"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {member.description}
                  </motion.p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
