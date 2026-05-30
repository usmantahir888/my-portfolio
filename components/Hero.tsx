"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.section
      id="home"
      className="min-h-screen flex items-center pt-[100px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-2"
            >
              <span className="text-[#6c47ff] font-medium text-xs uppercase tracking-wide">
                Welcome to My Portfolio
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
            >
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Asnan Ali
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-3"
            >
              <h2 className="text-lg md:text-xl text-gray-300 font-normal">
                Full-Stack Developer specializing in{" "}
                <span className="text-[#6c47ff] font-medium">React & React Native</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mb-4 text-sm leading-relaxed max-w-lg"
            >
              I build high-performance web and mobile applications using React, React Native, 
              and Shopify. With expertise in Figma design, I create seamless user experiences 
              from concept to deployment.
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-1.5 mb-4"
            >
              <span className="px-2.5 py-0.5 bg-[#6c47ff]/20 text-[#6c47ff] text-[11px] rounded-full border border-[#6c47ff]/30">React</span>
              <span className="px-2.5 py-0.5 bg-[#ff4d8c]/20 text-[#ff4d8c] text-[11px] rounded-full border border-[#ff4d8c]/30">React Native</span>
              <span className="px-2.5 py-0.5 bg-[#4dffb8]/20 text-[#4dffb8] text-[11px] rounded-full border border-[#4dffb8]/30">Shopify</span>
              <span className="px-2.5 py-0.5 bg-[#ffaa4d]/20 text-[#ffaa4d] text-[11px] rounded-full border border-[#ffaa4d]/30">Figma</span>
              <span className="px-2.5 py-0.5 bg-purple-500/20 text-purple-400 text-[11px] rounded-full border border-purple-500/30">Next.js</span>
              <span className="px-2.5 py-0.5 bg-blue-500/20 text-blue-400 text-[11px] rounded-full border border-blue-500/30">TypeScript</span>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-5 mb-5"
            >
              <div>
                <div className="text-xl font-bold text-white">50+</div>
                <div className="text-[10px] text-gray-500">Projects</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">30+</div>
                <div className="text-[10px] text-gray-500">Happy Clients</div>
              </div>
              <div>
                <div className="text-xl font-bold text-white">2+</div>
                <div className="text-[10px] text-gray-500">Years Exp</div>
              </div>
            </motion.div>

            {/* Buttons with Pop-up Effects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex gap-3 flex-wrap"
            >
              <motion.button
                onClick={() => scrollToSection("blog")}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(108, 71, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-5 py-2 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-full font-medium text-xs text-white cursor-pointer hover:shadow-lg hover:shadow-purple-500/50 transition-all"
              >
                View My Work
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ 
                  scale: 1.1,
                  boxShadow: "0 0 20px rgba(108, 71, 255, 0.5)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="px-5 py-2 border border-[#6c47ff] rounded-full font-medium text-xs text-white cursor-pointer hover:bg-[#6c47ff]/10 transition-all flex items-center gap-1.5"
              >
                <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Contact Me
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content - Your Picture with Glow Only Inside Circle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Image Container with Border Glow */}
            <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden shadow-xl">
              {/* Inner Glow Effect - Only on the circle border */}
              <div className="absolute inset-0 rounded-full ring-2 ring-[#6c47ff]/40 ring-offset-0 ring-offset-transparent" />
              <div className="absolute inset-0 rounded-full ring-4 ring-[#ff4d8c]/20 ring-offset-0 ring-offset-transparent" />
              <div className="absolute inset-0 rounded-full ring-8 ring-[#4dffb8]/10 ring-offset-0 ring-offset-transparent" />
              
              <img
                src="/abcc.png"
                alt="Asnan Ali"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Decorative neon circles around */}
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-[#6c47ff] rounded-full opacity-15 blur-2xl animate-pulse" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-[#ff4d8c] rounded-full opacity-15 blur-2xl animate-pulse" />
            <div className="absolute top-1/2 -right-6 w-14 h-14 bg-[#4dffb8] rounded-full opacity-15 blur-xl animate-pulse" />
            
            {/* Floating skill badges */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-8 left-4 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#6c47ff] border border-[#6c47ff]/30"
            >
              React Expert
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.5, repeat: Infinity, delay: 0.5 }}
              className="absolute -bottom-8 right-4 bg-black/80 backdrop-blur-sm px-2.5 py-1 rounded-full text-[10px] font-semibold text-[#ff4d8c] border border-[#ff4d8c]/30"
            >
              Shopify Pro
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}