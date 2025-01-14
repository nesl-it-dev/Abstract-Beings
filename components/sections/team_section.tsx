"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

const teamMembers = [
  {
    name: "Leah",
    title: "The Portal Artisan",
    subtitle: "The hands that shape the Abstract.",
    description: `Leah is the creative genius behind the design of Abstract Beings. An excellent 3D artist with an eye for detail and a knack for bringing concepts to life, she has created the unique and mystical aesthetic that defines the Abstract realm. From glowing crowns to ethereal traits, every
Being carries her signature touch of artistry and storytelling.`,
    image: "/team_1.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Zaki",
    title: "The Portal Master",
    subtitle: "The mind behind the magic",
    description: `Zaki is the driving force behind Abstract Beings, weaving together its captivating lore & intricate mechanics. Abstract Beings is a result of his
passion, commitment and experience in Crypto, NFTs & Web3 as a whole. A strong leader with a passion for storytelling & a vision to create a bridge between imagination and technology, Zaki has crafted a universe where creativity knows no bounds. As the founder, he ensures that every element of the Abstract Portal & its Beings stays true to its mystical essence, & the project stays on track for achieving future goals`,
    image: "/team_2.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Masnoon",
    title: "The Dream Weaver",
    subtitle: "The weaver of dreams into reality.",
    description:
      "Masnoon is a seasoned professional with a proven track record of building successful brands and businesses in Web2. His deep passion for Web3 innovation has led him to join Abstract Beings as a partner, bringing his expertise in growth and strategy to the project in order to help holders build their own brands and businesses. With a knack for turning ideas into thriving ecosystems, He plays a pivotal role in shaping the Abstract Portal into a gateway for creators and dreamers. His vision and experience ensure that Abstract Beings evolves into a cornerstone of the Web3 space",
    image: "/team_3.png",
    bg: "/card_bg_1.png",
  },
  {
    name: "Malik",
    title: "The Code Keeper",
    subtitle: "The builder of bridges between worlds.",
    description:
      "Malik is the Lead Dev of Abstract Beings, ensuring the project runs seamlessly on the Abstract Chain with the help of his team of developers. With years of experience in blockchain development, Malik has worked on several successful projects, including big names like Azuki, bringing unparalleled expertise to the team. He is responsible for crafting smart contracts, integrating innovative utilities, and maintaining a robust ecosystem for the Abstract Portal",
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

      <div className="flex flex-nowrap gap-6 overflow-x-auto max-w-full">
        {teamMembers.map((member, index) => {
          const isExpanded = expandedIndex === index;

          return (
            <motion.div
              key={index}
              className={`relative flex items-center  rounded-lg shadow-lg overflow-hidden transition-all duration-500 cursor-pointer  h-[280px] w-[280px] xl:h-[350px] ${
                isExpanded && "sm:w-[1200px]"
              }`}
              style={{
                backgroundImage: `url(${member.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              onMouseEnter={() => setExpandedIndex(index)}
              onMouseLeave={() => setExpandedIndex(null)}
            >
              <div className="w-[320px] h-[350px]">
                <div className="relative flex-shrink-0 p-4 w-[220px] h-[320px] xl:w-[280px] xl:h-[350px]">
                  <div className="relative mt-[34px] xl:mt-[0px] w-[180px] h-[200px] xl:w-[250px] xl:h-[250px]">
                    <Image
                      src={member.image}
                      alt={`${member.name} - ${member.title}`}
                      layout="fill"
                      className={`rounded-md object-cover transition-all duration-500 ease-in-out  ${
                        isExpanded ? "opacity-0" : "opacity-100"
                      }`}
                      loading="eager"
                    />
                  </div>

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
                  className="p-6 text-left overflow-auto xl:h-[360px]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-black">
                    {member.name} - {member.title}
                  </h3>
                  <p className="text-lg font-medium text-teal mt-1">
                    {member.subtitle}
                  </p>
                  <p className="text-sm text-black mt-2">
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
