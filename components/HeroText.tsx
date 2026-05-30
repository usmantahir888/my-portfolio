"use client";

import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.05,
    },
  }),
};

export default function HeroText() {
  const title = "NOVA";
  const subtitle = "Digital Sculpture Studio";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.h1
        initial="hidden"
        animate="visible"
        className="text-7xl md:text-9xl font-bold mb-6 bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] bg-clip-text text-transparent"
      >
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            custom={index}
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="text-xl md:text-2xl text-gray-400 mb-8"
      >
        {subtitle.split("").map((char, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 + index * 0.02, duration: 0.4 }}
            className="inline-block"
          >
            {char === " " ? "\u00A0" : char}
          </motion.span>
        ))}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <button className="px-8 py-3 bg-[#6c47ff] rounded-full hover:bg-[#5a3ce0] transition-all hover:scale-105">
          Explore Our Work
        </button>
      </motion.div>

      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white/50 rounded-full mt-2 animate-bounce" />
        </div>
      </motion.div>
    </div>
  );
}