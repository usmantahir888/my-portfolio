"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

const services = [
  {
    icon: "⚛️",
    title: "React Development",
    description: "Building fast, interactive, and scalable web applications with React.js",
    color: "from-cyan-400 to-blue-500",
    bgColor: "bg-cyan-500/10",
    borderColor: "border-cyan-500/30",
    glowColor: "shadow-cyan-500/50",
    link: "/services/react",
  },
  {
    icon: "📱",
    title: "React Native",
    description: "Cross-platform mobile apps for iOS and Android using React Native",
    color: "from-blue-400 to-indigo-500",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    glowColor: "shadow-blue-500/50",
    link: "/services/react-native",
  },
  {
    icon: "🛍️",
    title: "Shopify Development",
    description: "Custom Shopify stores, theme development, and app integration",
    color: "from-green-400 to-emerald-500",
    bgColor: "bg-green-500/10",
    borderColor: "border-green-500/30",
    glowColor: "shadow-green-500/50",
    link: "/services/shopify",
  },
  {
    icon: "🎨",
    title: "Figma Design",
    description: "Beautiful UI/UX designs, prototypes, and design systems in Figma",
    color: "from-orange-400 to-red-500",
    bgColor: "bg-orange-500/10",
    borderColor: "border-orange-500/30",
    glowColor: "shadow-orange-500/50",
    link: "/services/figma",
  },
  {
    icon: "⚡",
    title: "Performance Optimization",
    description: "Lightning-fast websites with optimized code and best practices",
    color: "from-purple-400 to-pink-500",
    bgColor: "bg-purple-500/10",
    borderColor: "border-purple-500/30",
    glowColor: "shadow-purple-500/50",
    link: "/services/performance",
  },
  {
    icon: "🚀",
    title: "Full-Stack Development",
    description: "End-to-end development from database to deployment",
    color: "from-teal-400 to-green-500",
    bgColor: "bg-teal-500/10",
    borderColor: "border-teal-500/30",
    glowColor: "shadow-teal-500/50",
    link: "/services/full-stack",
  },
];

export default function Services() {
  const ref = useRef(null);

  return (
    <section id="service" className="py-20 relative overflow-hidden">
      {/* Background animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-pink-900/5" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#6c47ff]/20 to-[#ff4d8c]/20 text-[#6c47ff] text-xs font-semibold border border-[#6c47ff]/30">
              What I Offer
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            My{" "}
            <span className="bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] bg-clip-text text-transparent animate-gradient">
              Services
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Transforming ideas into exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={service.link} key={index} className="block">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -8,
                  transition: { type: "spring", stiffness: 300 }
                }}
                className={`group relative bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-sm rounded-2xl p-6 border ${service.borderColor} hover:border-opacity-100 transition-all duration-300 cursor-pointer overflow-hidden`}
              >
                {/* Animated background on hover */}
                <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                {/* Glow effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500`} />
                
                {/* Icon Container with Animation */}
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className={`relative w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-3xl mb-5 shadow-lg ${service.glowColor} group-hover:shadow-2xl transition-all duration-300`}
                >
                  <span className="filter drop-shadow-lg">{service.icon}</span>
                </motion.div>
                
                {/* Title with gradient on hover */}
                <h3 className={`text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r ${service.color} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                  {service.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
                
                {/* Animated underline on hover */}
                <motion.div
                  className={`h-0.5 bg-gradient-to-r ${service.color} rounded-full mt-4`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
                
                {/* Arrow icon that appears on hover */}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileHover={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 right-6"
                >
                  <svg className="w-5 h-5 text-white/50 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </motion.div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}