"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ethereal Being",
    category: "Digital Sculpture",
    color: "from-purple-500 to-pink-500",
    image: "https://placehold.co/600x400/2a2a2a/6c47ff?text=Project+1",
  },
  {
    title: "Neural Dreams",
    category: "AI Art Installation",
    color: "from-blue-500 to-cyan-500",
    image: "https://placehold.co/600x400/2a2a2a/ff4d8c?text=Project+2",
  },
  {
    title: "Cosmic Echoes",
    category: "Generative Art",
    color: "from-green-500 to-emerald-500",
    image: "https://placehold.co/600x400/2a2a2a/4dffb8?text=Project+3",
  },
];

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="project-card group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-0 left-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold">{project.title}</h3>
          <p className="text-gray-300">{project.category}</p>
        </div>
      </div>
      <div className="mt-4">
        <span className={`text-sm bg-gradient-to-r ${project.color} bg-clip-text text-transparent font-semibold`}>
          Featured Work
        </span>
      </div>
    </motion.div>
  );
}

export default function ProjectCards() {
  return (
    <div className="min-h-screen bg-black/50 backdrop-blur-sm py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          Featured{" "}
          <span className="bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}