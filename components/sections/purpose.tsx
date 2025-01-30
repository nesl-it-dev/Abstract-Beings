"use client";

import { PURPOSE_CONTENT } from "@/utils/constants";
import Image from "next/image";

const Purpose = () => {
  return (
    <div
      id="section_5"
      className="relative w-full min-h-screen flex items-center justify-center text-center px-6 sm:px-10 md:px-16  xl:px-32 mt-[-5%] z-[-10]"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Purpose.png"
          alt="Background"
          fill
          quality={100}
          className="object-cover object-bottom"
          loading="eager"
        />
      </div>

      {/* Content */}
      <div className="relative z-10  p-6 sm:p-8 md:p-12 lg:p-16 rounded-lg max-w-3xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          The Portal’s <span className="text-black md:text-5xl">Purpose</span>
        </h2>
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
          {PURPOSE_CONTENT.content1}
        </p>
        <p className="text-black text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mt-4">
          {PURPOSE_CONTENT.content2}
        </p>
      </div>
    </div>
  );
};

export default Purpose;
