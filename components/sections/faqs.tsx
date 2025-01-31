"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { faqs } from "@/utils/constants";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      id="section_9"
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-3"
    >
      {/* Title */}
      <h1 className="text-3xl font-bold text-center text-black mb-8">
        Your Questions Answered
      </h1>

      {/* FAQ List */}
      <div className="max-w-3xl w-full space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-[#464C4A] text-white rounded-lg shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left px-4 py-1 flex justify-between items-center font-semibold text-lg"
            >
              <span>{faq.question}</span>
              <motion.span
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg"
              >
                ▼
              </motion.span>
            </button>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: openIndex === index ? "auto" : 0,
                opacity: openIndex === index ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden bg-white text-black px-4 py-1 text-sm"
            >
              {faq.answer}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
