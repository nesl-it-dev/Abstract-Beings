"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/button/button";
import { FaDiscord } from "react-icons/fa";
import { WHY_ABSTRACT } from "@/utils/constants";

const AbstractSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({ rotateY: 0, opacity: 1 });
    } else {
      controls.start({ rotateY: 180, opacity: 0 });
    }
  }, [isInView, controls]);

  return (
    <section
      id="section_3"
      ref={ref}
      className="relative text-black py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center min-h-screen"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/abstract.png"
          alt="Background Image"
          fill
          className="w-full h-full object-cover object-bottom"
          loading="eager"
        />
      </div>

      {/* Content Box */}
      <div className="flex flex-col max-w-[840px] gap-3">
        <h2 className="relative z-10 text-3xl md:text-[42px] lg:text-5xl font-semibold mb-4">
          Why{" "}
          <span className="text-[42px] lg:text-[52px] font-bold text-black">
            Abstract?
          </span>
        </h2>
        <div className="relative z-10 md:w-[70%] p-6 text-left space-y-4 max-h-[480px] overflow-y-auto scroll-container">
          <p className="text-black text-lg md:text-xl leading-relaxed font-medium">
            {WHY_ABSTRACT.content1}
          </p>
          <p className="text-black text-lg md:text-xl leading-relaxed mt-4 font-medium">
            {WHY_ABSTRACT.content2}
          </p>
          <p className="text-black text-lg md:text-xl leading-relaxed mt-4 font-medium">
            {WHY_ABSTRACT.content3}
          </p>
          <ul className="list-disc list-inside text-black text-lg md:text-xl leading-relaxed mt-4 font-medium">
            <li>{WHY_ABSTRACT.content4.one}</li>
            <li>{WHY_ABSTRACT.content4.two}</li>
            <li>{WHY_ABSTRACT.content4.three}</li>
          </ul>
          <p className="text-black text-lg md:text-xl leading-relaxed mt-4 font-medium">
            {WHY_ABSTRACT.content5}
          </p>
        </div>
        <div className="mt-4 self-start">
          <Button
            text="Discord"
            iconComponent={<FaDiscord className="text-3xl" />}
            width={180}
          />
        </div>
      </div>

      {/* Floating Character Image */}
      <motion.div
        className="relative z-10 md:w-1/2 flex items-center justify-center h-full mt-8 md:mt-0"
        initial={{ rotateY: 180, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src="/ghost_3.png"
          alt="Abstract Chain Character"
          width={600}
          height={600}
          className="w-3/4 md:w-full lg:max-w-[500px]"
          loading="eager"
        />
      </motion.div>
    </section>
  );
};

export default AbstractSection;
