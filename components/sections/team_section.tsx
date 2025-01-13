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
  const [isHovered, setIsHovered] = useState(false);
  return (
    <section
      className="relative py-20 bg-cover bg-center w-full min-h-screen h-full"
      style={{ backgroundImage: "url('/section_bg.png')", objectFit: "cover" }}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-black mb-10">
          Meet The Dreamers
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="relative p-6 rounded-lg shadow-lg bg-cover bg-center text-white flex flex-col items-center transition-all h-[300px]"
              style={{
                backgroundImage: `url(${member.bg})`,
                width: "100%",
                display: "flex",
              }}
              layout
              whileHover={{
                width: "150%", // Expands smoothly
                alignItems: "flex-start", // Moves content left on hover
                paddingLeft: "20px",
              }}
              transition={{
                duration: 0.1, // Fast & consistent timing
                ease: "linear", // No acceleration, pure smoothness
              }}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              {/* Motion div for smooth fade-in image */}
              <motion.div
                initial={{ opacity: 0 }} // Start invisible
                animate={{ opacity: 1 }} // Fully visible instantly
                whileHover={{ opacity: 1 }} // Stays visible
                transition={{ duration: 0.25, ease: "linear" }} // Consistent fade-in
                className="flex justify-start w-full object-bottom"
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={isHovered ? 200 : 150}
                  height={150}
                />
              </motion.div>

              <h3 className="text-xl font-semibold mt-4 text-left w-full">
                {member.name}
              </h3>
              <p className="text-sm text-gray-300 text-left w-full">
                {member.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
