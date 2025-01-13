"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Button from "@/components/button/button";
import { FaDiscord } from "react-icons/fa";

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
      ref={ref}
      className="relative text-black py-16 px-6 md:px-16 lg:px-24 flex flex-col md:flex-row items-center min-h-screen"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/abstract.png"
          alt="Background Image"
          layout="fill"
          className="w-full h-full object-cover object-bottom"
        />
      </div>

      {/* Content Box */}
      <div className="relative z-10 md:w-1/2 p-6 text-left">
        <h2 className="text-3xl md:text-[42px] font-semibold mb-4">
          Why{" "}
          <span className="text-[52px] font-bold text-black">Abstract?</span>
        </h2>
        <p className="text-black text-lg leading-relaxed font-medium">
          The Abstract Chain is not just another L2—it&apos;s a revolutionary
          chain designed with the consumer at its heart. Built to deliver
          seamless user experiences, Abstract Chain combines cutting-edge
          technology with unparalleled scalability, low transaction fees, and
          robust security. Its focus on fostering real-world applications and
          dynamic communities makes it the perfect home for the Abstractions
          project.
        </p>
        <p className="text-black text-lg leading-relaxed mt-4 font-medium">
          Launching Abstractions on the Abstract Chain ensures that our
          community enjoys a fast, eco-friendly, and user-centric blockchain
          experience. The chain&apos;s innovative ecosystem aligns perfectly
          with the project&apos;s vision of empowering holders, building
          intellectual property, and creating immersive digital experiences.
        </p>
        <div className="mt-3">
          <Button
            text="Discord"
            iconComponent={<FaDiscord className="text-3xl" />}
            width={180}
          />
        </div>
      </div>

      {/* Floating Character Image */}
      <motion.div
        className="relative z-10 md:w-1/2 flex items-center justify-center h-full"
        initial={{ rotateY: 180, opacity: 0 }}
        animate={controls}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Image
          src="/ghost_3.png"
          alt="Abstract Chain Character"
          width={500}
          height={500}
        />
      </motion.div>
    </section>
  );
};

export default AbstractSection;
