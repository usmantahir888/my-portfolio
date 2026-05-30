"use client";

import { motion } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const skills = [
    { name: "React", level: 95, color: "from-cyan-500 to-blue-500" },
    { name: "React Native", level: 90, color: "from-blue-500 to-indigo-500" },
    { name: "Graphic Design", level: 88, color: "from-green-500 to-emerald-500" },
    { name: "Figma", level: 92, color: "from-orange-500 to-red-500" },
  ];

  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About{" "}
            <span className="bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <p className="text-gray-400 text-sm max-w-2xl mx-auto">
            Passionate Mobile Developer & Graphic Designer with 2+ years of experience
          </p>
        </motion.div>

        {/* Two Column Content Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column: Biography & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">Who am I?</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-3">
              I'm <strong>Muhammad Usman Tahir</strong>, a passionate Mobile Developer and Graphic Designer with over 3+ years of experience in creating beautiful, user-centric interfaces and highly functional applications.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">
              My approach combines creative design instincts with strong technical expertise to deliver solutions that perform exceptionally well. I specialize in React, React Native, and high-fidelity Graphic Design.
            </p>
            
            {/* Stats Bullet Points */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-[#6c47ff] rounded-full" />
                <span className="text-gray-300">50+ Projects Completed</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-[#ff4d8c] rounded-full" />
                <span className="text-gray-300">30+ Happy Clients</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <div className="w-1.5 h-1.5 bg-[#4dffb8] rounded-full" />
                <span className="text-gray-300">15+ Design Awards</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Animated Skills Bars */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-xl font-semibold mb-4">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  {/* Skill Label and Percentage */}
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-300 text-sm">{skill.name}</span>
                    <span className="text-[#6c47ff] text-sm">{skill.level}%</span>
                  </div>
                  {/* Progress Bar Container */}
                  <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                    {/* Animated Progress Bar Fill */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}