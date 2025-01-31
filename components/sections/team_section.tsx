"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { teamMembers } from "@/utils/constants";

export default function TeamSection() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section
      id="section_8"
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
