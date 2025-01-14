"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What are Abstract Beings?",
    answer:
      "Abstract Beings are NFTs born from the Abstract Portal—a cosmic gateway that transforms imagination into unique entities. These Beings are not just collectibles; they’re tools for creativity, branding, and empowerment.",
  },
  {
    question: "What is the lore behind Abstract Beings?",
    answer: `Abstract Beings are entities born from the Abstract Portal, a cosmic
gateway where imagination shapes reality. These beings represent fragments of creativity and emotion, waiting for humans to bond with them and uncover their stories`,
  },
  {
    question: "What is the Abstract Portal?",
    answer: `Abstract Beings are entities born from the Abstract Portal, a cosmic
gateway where imagination shapes reality. These beings represent fragments of creativity and emotion, waiting for humans to bond with them and uncover their stories`,
  },
  {
    question: "What is the Supply, Mint Price & Date?",
    answer: "Supply – 3K; Price – TBD; Date – TBD",
  },
  {
    question: "What utilities do Abstract Beings offer?",
    answer: `Abstract Beings holders enjoy: \n
. NFT Licensing: Full commercial rights to use your NFT for branding, merchandise, or creative projects. \n
. Personal and Business Growth: Guidance on turning your NFT into a recognizable brand or business asset. \n
. Community Rewards: Exclusive perks, collaborations, and a supportive network. \n
. Revenue from *Redacted*: Coming Soon`,
  },
  {
    question: "Are there rewards for holding Abstract Beings long-term?",
    answer: `Yes! Long-term holders will gain access to exclusive collaboration rewards, partnership rewards, and community-driven benefits that grow with the ecosystem. Additionally, revenue from *redacted* will be shared amongst the holders on per project basis`,
  },
  {
    question:
      "How will Abstract Beings help holders grow their brands or businesses?",
    answer: `We aim to provide guidance and opportunities for holders to leverage their NFTs as assets for branding, storytelling, merchandise, etc. Whether you’re a creator, entrepreneur, builder, founder or dreamer, we’re here to help you use Abstract Beings to build your vision.`,
  },
  {
    question: "Will there be workshops or brainstorming sessions for holders?",
    answer:
      "Yes! We’ll host virtual sessions focused on helping holders identify how their Abstract Being can be leveraged for personal and professional growth. These sessions will cover branding, storytelling, and escaping the traditional 9-5 structure.",
  },
  {
    question: "What does it mean to be a Chosen One or Summoned?",
    answer: `The role of ‘Chosen Ones’ will be given to our OG supporters who play a vital role in shaping the project from the start.
Summoned’ role will be given to whitelist members for a guaranteed mint of Abstract Beings`,
  },
  {
    question: "Who designed the Abstract Beings?",
    answer: `The Abstract Beings are crafted by our Portal Artisan (Leah), a visionary artist specializing in minimalist and mystical 3D art. Her designs bring the Abstract realm to life`,
  },
  {
    question: "How do I mint an Abstract Being?",
    answer: `The minting process will be simple and user-friendly. Detailed instructions will be shared closer to the mint date. Stay tuned on Discord and Twitter for updates`,
  },
  {
    question: "How can I be part of the Abstract Beings journey?",
    answer:
      "Join our community on Discord and Twitter, where you’ll connect with like-minded individuals, brainstorm ideas, and collaborate on creative and entrepreneurial ventures",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-3">
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

      {/* Bottom Left Image */}
      {/* <div className="absolute bottom-4 left-4">
        <Image
          src="/ghost_4.png" // Replace with actual image path
          alt="Abstract Beings Character"
          width={300}
          height={300}
          objectFit="contain"
          loading="eager"
          className=""
        />
      </div> */}
    </div>
  );
};

export default FAQ;
