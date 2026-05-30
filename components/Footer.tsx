"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © 2024 Asnan. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-[#6c47ff] transition-colors"
            >
              LinkedIn
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-[#ff4d8c] transition-colors"
            >
              Twitter
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-[#4dffb8] transition-colors"
            >
              GitHub
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.1 }}
              href="#"
              className="text-gray-400 hover:text-[#6c47ff] transition-colors"
            >
              Behance
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
}