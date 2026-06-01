"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    tag: "WEB CORE",
    title: "React Development",
    description: "Architecting high-performance, interactive enterprise web architectures using concurrent rendering and optimized state management.",
    color: "from-cyan-500 via-blue-500 to-indigo-600",
    glowColor: "rgba(6, 182, 212, 0.15)",
    link: "/services/react",
  },
  {
    tag: "MOBILE NATIVE",
    title: "React Native CLI",
    description: "Developing cross-platform iOS and Android deployments with high-fidelity custom UI layouts and optimized native bridge bridges.",
    color: "from-blue-500 via-indigo-500 to-purple-600",
    glowColor: "rgba(59, 130, 246, 0.15)",
    link: "/services/react-native",
  },
  {
    tag: "BRANDING",
    title: "Graphic Design",
    description: "Crafting modern vector assets, digital marketplace visuals, cohesive identity designs, and high-impact platform covers.",
    color: "from-emerald-400 via-teal-500 to-cyan-600",
    glowColor: "rgba(52, 211, 153, 0.15)",
    link: "/services/graphic-design",
  },
  {
    tag: "INTERFACE",
    title: "Figma UI/UX Systems",
    description: "Designing advanced component libraries, interactive high-fidelity user journeys, and robust scalable design tokens.",
    color: "from-orange-500 via-red-500 to-pink-600",
    glowColor: "rgba(249, 115, 22, 0.15)",
    link: "/services/figma",
  },
  {
    tag: "POST PRODUCTION",
    title: "Video Editing",
    description: "Simple video editor with hands-on experience on CapCut and InShot.",
    color: "from-purple-500 via-pink-500 to-rose-600",
    glowColor: "rgba(168, 85, 247, 0.15)",
    link: "/services/video-editing",
  },
  {
    tag: "FULL REAP",
    title: "Full-Stack Engineering",
    description: "Integrating powerful Python backends and structured Firebase/Firestore data layers with pixel-perfect client presentation.",
    color: "from-teal-400 via-emerald-500 to-green-600",
    glowColor: "rgba(45, 212, 191, 0.15)",
    link: "/services/full-stack",
  },
];

export default function Services() {
  const ref = useRef(null);

  return (
    <section id="service" className="py-24 bg-[#0a0a0c] relative overflow-hidden">
      {/* Premium subtle mesh grid elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <span className="text-xs font-bold tracking-[0.25em] text-[#6c47ff] uppercase bg-[#6c47ff]/10 px-4 py-1.5 rounded-sm border border-[#6c47ff]/20">
            Expertise Matrix
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-6 mb-4">
            Professional{" "}
            <span className="bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto font-medium">
            Engineered solutions bridging high-end design aesthetics with modular software architectures.
          </p>
        </motion.div>

        {/* Bento/Modern Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -4 }}
                style={{
                  '--glow-color': service.glowColor
                } as React.CSSProperties}
                className="relative h-full bg-[#111115] border border-white/[0.06] hover:border-white/[0.15] rounded-xl p-8 transition-all duration-300 overflow-hidden flex flex-col justify-between group-hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]"
              >
                {/* Ambient Soft Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-screen"
                  style={{
                    background: `radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), var(--glow-color), transparent 40%)`
                  }}
                />

                <div className="w-full">
                  {/* Service Functional Tag */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-[10px] font-bold tracking-widest text-transparent bg-gradient-to-r ${service.color} bg-clip-text uppercase`}>
                      {service.tag}
                    </span>
                    
                    {/* Minimal Technical Line Accent */}
                    <div className="w-12 h-[1px] bg-white/[0.08] group-hover:w-20 transition-all duration-500" />
                  </div>
                  
                  {/* Service Title */}
                  <h3 className="text-xl font-bold text-white tracking-tight mb-3 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  {/* Service Description */}
                  <p className="text-gray-400 text-sm font-normal leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Subtle Linear Edge Gradient */}
                <div className={`absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r ${service.color} scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}