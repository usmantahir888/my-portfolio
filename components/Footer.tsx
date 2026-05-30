"use client";

import { motion } from "framer-motion";

export default function Footer() {
  // Current production operational timestamp
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/muhammad-usman-tahir-a6221b2a1/",
      hoverColor: "hover:text-[#6c47ff] hover:border-[#6c47ff]/30",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923313360030",
      hoverColor: "hover:text-[#25D366] hover:border-[#25D366]/30",
    },
    {
      name: "GitHub",
      url: "https://github.com/usmantahir888",
      hoverColor: "hover:text-[#4dffb8] hover:border-[#4dffb8]/30",
    },
    {
      name: "Behance",
      url: "https://www.behance.net/malikusman46",
      hoverColor: "hover:text-[#ff4d8c] hover:border-[#ff4d8c]/30",
    },
  ];

  return (
    <footer className="bg-[#0a0a0c] border-t border-white/[0.04] py-10 relative overflow-hidden px-6 lg:px-8">
      {/* Structural Visual Separation Mesh */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 relative z-10">
        
        {/* Copyright Metadata System Block */}
        <div className="flex items-center gap-2.5 order-2 sm:order-1">
          <span className="w-1 h-1 rounded-full bg-gray-600" />
          <p className="text-gray-500 text-[11px] font-bold tracking-widest uppercase">
            © {currentYear} MUHAMMAD USMAN TAHIR. ALL RIGHTS RESERVED.
          </p>
        </div>
        
        {/* High-Spec Actionable Link Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3 order-1 sm:order-2">
          {socialLinks.map((link, idx) => (
            <motion.a
              key={idx}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              className={`px-3 py-1 bg-white/[0.01] border border-white/[0.03] rounded-md text-[11px] font-bold text-gray-400 tracking-wider uppercase transition-all duration-300 ${link.hoverColor}`}
            >
              {link.name}
            </motion.a>
          ))}
        </div>

      </div>
    </footer>
  );
}