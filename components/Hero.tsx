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
      className="min-h-screen flex items-center pt-[100px] bg-[#0a0a0c] relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Matrix/Grid Elements for Premium Look */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-xs font-bold tracking-[0.25em] text-[#6c47ff] uppercase bg-[#6c47ff]/10 px-3 py-1 rounded-sm border border-[#6c47ff]/20">
                Available For Work
              </span>
            </motion.div>

            {/* Main Title Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight mb-4"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
                Muhammad Usman Tahir
              </span>
            </motion.h1>

            {/* Profession / Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <h2 className="text-xl md:text-2xl text-gray-300 font-medium tracking-tight">
                Mobile App Specialist &{" "}
                <span className="bg-gradient-to-r from-[#4dffb8] to-cyan-400 bg-clip-text text-transparent font-bold">
                  Graphic Designer
                </span>
              </h2>
            </motion.div>

            {/* Description Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 mb-6 text-sm md:text-base leading-relaxed max-w-lg font-normal"
            >
              Engineering premium cross-platform software deployments alongside interactive vector branding systems. Specializing in high-fidelity interface layouts and optimized native layers.
            </motion.p>

            {/* Premium Synchronized Skill Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-semibold rounded-md border border-cyan-500/20">React</span>
              <span className="px-3 py-1 bg-blue-500/10 text-blue-400 text-xs font-semibold rounded-md border border-blue-500/20">React Native CLI</span>
              <span className="px-3 py-1 bg-emerald-500/10 text-emerald-400 text-xs font-semibold rounded-md border border-emerald-500/20">Graphic Design</span>
              <span className="px-3 py-1 bg-orange-500/10 text-orange-400 text-xs font-semibold rounded-md border border-orange-500/20">Figma UI/UX</span>
              <span className="px-3 py-1 bg-purple-500/10 text-purple-400 text-xs font-semibold rounded-md border border-purple-500/20">Next.js</span>
              <span className="px-3 py-1 bg-indigo-500/10 text-indigo-400 text-xs font-semibold rounded-md border border-indigo-500/20">TypeScript</span>
            </motion.div>

            {/* Professional Clean Matrix Metrics (Stats) - Updated to Years Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-8 mb-8 border-t border-white/[0.04] pt-6"
            >
              <div>
                <div className="text-2xl font-black text-white tracking-tight">50+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-0.5">Deployments</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white tracking-tight">30+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-0.5">Global Clients</div>
              </div>
              <div>
                <div className="text-2xl font-black text-white tracking-tight">3+</div>
                <div className="text-xs text-gray-500 font-medium uppercase tracking-widest mt-0.5">Years Experience</div>
              </div>
            </motion.div>

            {/* Interactive Functional CTA Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
              className="flex gap-4 flex-wrap"
            >
              <motion.button
                onClick={() => scrollToSection("service")}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 0 25px rgba(108, 71, 255, 0.4)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-6 py-3 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-xl font-bold text-xs tracking-wider uppercase text-white cursor-pointer transition-all"
              >
                Explore Capabilities
              </motion.button>

              <motion.button
                onClick={() => scrollToSection("contact")}
                whileHover={{ 
                  scale: 1.03,
                  backgroundColor: "rgba(108, 71, 255, 0.12)",
                  borderColor: "rgba(108, 71, 255, 1)"
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
                className="px-6 py-3 border border-white/[0.1] rounded-xl font-bold text-xs tracking-wider uppercase text-white cursor-pointer transition-all flex items-center gap-2"
              >
                <svg className="w-4 h-4 text-[#6c47ff]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Get in Touch
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Content Column: Image Wrapper with High-End Glowing Accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
          >
            {/* Main Interactive Round Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-white/[0.08] shadow-2xl bg-[#111115]">
              {/* Complex Vector Radial Border Rings for Tech Aesthetic */}
              <div className="absolute inset-0 rounded-full ring-1 ring-inset ring-white/[0.1] z-20 pointer-events-none" />
              <div className="absolute inset-0 rounded-full ring-2 ring-[#6c47ff]/30 ring-offset-0 ring-offset-transparent pointer-events-none" />
              <div className="absolute inset-0 rounded-full ring-4 ring-[#ff4d8c]/15 pointer-events-none" />
              
              <img
                src="/my pic.jpeg"
                alt="Muhammad Usman Tahir"
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
              />
            </div>

            {/* High-Definition Cyber Ambient Glow Clusters */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#6c47ff]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#ff4d8c]/10 rounded-full blur-3xl animate-pulse pointer-events-none" />
            <div className="absolute top-1/3 -right-8 w-24 h-24 bg-[#4dffb8]/10 rounded-full blur-2xl animate-pulse pointer-events-none" />
            
            {/* Dynamic Floating Badges instead of basic blocks */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 left-2 bg-[#111115]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-cyan-400 border border-cyan-500/20 shadow-lg"
            >
              Native Engineer
            </motion.div>
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              className="absolute -bottom-4 right-2 bg-[#111115]/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest text-emerald-400 border border-emerald-500/20 shadow-lg"
            >
              Creative Designer
            </motion.div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}