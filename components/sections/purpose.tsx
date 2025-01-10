"use client";

import Image from "next/image";

const Purpose = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center text-center px-6 sm:px-10 md:px-16 lg:px-20">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Purpose.png"
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="w-full h-full"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 bg-opacity-90 p-6 sm:p-8 md:p-12 rounded-lg max-w-3xl">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">
          The Portal’s <span className="text-black text-4xl">Purpose</span>
        </h2>
        <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed">
          No one knows who or what created the Abstract Portal, only that it has
          always existed. It is both a gate and a sentinel, balancing the
          threads of countless worlds. From its glowing core, energy flows,
          giving birth to the Abstract Beings. These beings are more than mere
          creatures; they are manifestations of thought, shadows of ideas, and
          echoes of emotions that mortals and other entities once imagined.
        </p>
        <p className="text-black text-sm sm:text-lg md:text-xl leading-relaxed mt-4">
          Each Abstract Being is shaped by the raw energy of the portal and the
          stories whispered into its realm. Some are serene and luminous,
          embodying hope and clarity. Others are chaotic and fractured,
          reflections of conflict and despair. Together, they are the guardians
          and keepers of balance in the Abstract, maintaining the fragile
          equilibrium between order and entropy.
        </p>
      </div>
    </div>
  );
};

export default Purpose;
