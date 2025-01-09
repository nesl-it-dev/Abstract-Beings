import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What are Abstract Beings?",
    answer:
      "Abstract Beings are entities born from the Abstract Portal, a cosmic gateway where imagination shapes reality. These beings represent fragments of creativity and emotion, waiting for humans to bond with them and uncover their stories.",
  },
  {
    question: "What is the lore behind Abstract Beings?",
    answer:
      "Abstract Beings exist as a bridge between realms, manifesting through human creativity. Their stories unfold as they connect with their holders.",
  },
  {
    question: "What is the Abstract Portal?",
    answer:
      "The Abstract Portal is the gateway that connects the mortal realm with the realm of Abstract Beings. It holds the key to infinite possibilities.",
  },
  {
    question: "What is the Supply, Mint Price & Date?",
    answer:
      "Details regarding the minting process, pricing, and supply will be revealed soon.",
  },
  {
    question: "What utilities do Abstract Beings offer?",
    answer:
      "They grant access to exclusive rewards, brand-building support, and other benefits.",
  },
  {
    question: "Are there rewards for holding Abstract Beings long-term?",
    answer:
      "Yes, long-term holders will receive exclusive perks, rewards, and priority access to future releases.",
  },
  {
    question:
      "How will Abstract Beings help holders grow their brands or businesses?",
    answer:
      "Abstract Beings offer a platform for creative collaboration, brand-building, and business growth by connecting with a network of like-minded individuals.",
  },
  {
    question: "Will there be workshops or brainstorming sessions for holders?",
    answer:
      "Yes, we plan to hold interactive workshops, brainstorming sessions, and collaborative events for holders to enhance their creative journey.",
  },
  {
    question: "What does it mean to be a Chosen One or Summoned?",
    answer:
      "Being a 'Chosen One' or 'Summoned' means you have been selected to take part in an exclusive Abstract Beings event or storyline.",
  },
  {
    question: "Who designed the Abstract Beings?",
    answer:
      "The Abstract Beings were created by a team of visionary artists and storytellers passionate about blending art, technology, and imagination.",
  },
  {
    question: "How do I mint an Abstract Being?",
    answer:
      "Details on the minting process will be shared soon. Stay tuned for updates on how to get your Abstract Being.",
  },
  {
    question: "How can I be part of the Abstract Beings journey?",
    answer:
      "Join the Abstract Beings community, engage with our events, and follow our roadmap to immerse yourself in the journey.",
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
      <div className="absolute bottom-4 left-4">
        <Image
          src="/ghost_4.png" // Replace with actual image path
          alt="Abstract Beings Character"
          width={100}
          height={100}
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default FAQ;
