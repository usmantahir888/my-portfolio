"use client";

import { motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const projects = [
  {
    title: "Give All You Need - Full Stack E-Commerce Platform",
    category: "Full Stack Development",
    description: "Complete MERN stack e-commerce website with premium UI, responsive design, product variants, shopping cart, user authentication, and admin panel for inventory management.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Zustand", "JWT", "Vercel", "Render"],
    icon: "🛍️",
    gradient: "from-purple-500 to-pink-500",
    images: [
      "https://placehold.co/600x400/6c47ff/white?text=E-Commerce+Home",
      "https://placehold.co/600x400/ff4d8c/white?text=Product+Page",
      "https://placehold.co/600x400/4dffb8/black?text=Shopping+Cart",
      "https://placehold.co/600x400/ffaa4d/white?text=Admin+Panel",
    ],
  },
  {
    title: "StudioFlow - Creative Agency",
    category: "Webflow Design",
    description: "Modern Webflow site with stunning animations and portfolio showcase",
    technologies: ["Webflow", "Figma", "Tailwind CSS", "GSAP", "Adobe XD"],
    icon: "🎨",
    gradient: "from-blue-500 to-cyan-500",
    images: [
      "https://placehold.co/600x400/3b82f6/white?text=Homepage+Design",
      "https://placehold.co/600x400/06b6d4/white?text=Portfolio+Page",
      "https://placehold.co/600x400/0ea5e9/white?text=Services+Section",
    ],
  },
  {
    title: "HealthPlus - Mobile App",
    category: "UI/UX Design",
    description: "User-friendly mobile app design for healthcare services",
    technologies: ["Figma", "Adobe XD", "Prototyping", "User Research", "Wireframing"],
    icon: "📱",
    gradient: "from-green-500 to-emerald-500",
    images: [
      "https://placehold.co/600x400/22c55e/white?text=Login+Screen",
      "https://placehold.co/600x400/10b981/white?text=Dashboard",
      "https://placehold.co/600x400/14b8a6/white?text=Appointment+Booking",
    ],
  },
];

function ImageCarousel({ images, interval = 2000 }: { images: string[]; interval?: number }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length <= 1) return;
    
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  return (
    <div className="relative w-full h-full">
      {images.map((image, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0 }}
          animate={{ opacity: currentIndex === idx ? 1 : 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 w-full h-full"
        >
          <img
            src={image}
            alt={`Slide ${idx + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      ))}
      
      {/* Image indicators/dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? 'bg-white w-3' 
                  : 'bg-white/50 hover:bg-white/80'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const ref = useRef(null);

  return (
    <section id="blog" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              My Portfolio
            </span>
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Some of my best work showcasing my skills and expertise
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="group cursor-pointer bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-[#6c47ff] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20"
            >
              {/* Image Carousel Section - Changes every 2 seconds */}
              <div className={`relative h-56 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                <ImageCarousel images={project.images} interval={2000} />
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                
                {/* Icon overlay on image */}
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-3 right-3 text-4xl filter drop-shadow-2xl opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {project.icon}
                </motion.div>
              </div>
              
              <div className="p-6">
                {/* Category Badge */}
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="text-[#6c47ff] text-xs font-semibold mb-2 inline-block px-2 py-1 rounded-full bg-[#6c47ff]/10 border border-[#6c47ff]/20"
                >
                  {project.category}
                </motion.p>
                
                {/* Title */}
                <h3 className="text-xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-[#6c47ff] group-hover:to-[#ff4d8c] group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 line-clamp-2">
                  {project.title}
                </h3>
                
                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed mb-4 group-hover:text-gray-300 transition-colors duration-300 line-clamp-2">
                  {project.description}
                </p>
                
                {/* Technologies Section */}
                <div className="mb-2">
                  <p className="text-gray-500 text-xs mb-2 flex items-center gap-1">
                    <span className="w-1 h-1 bg-[#6c47ff] rounded-full"></span>
                    Tech Stack:
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIdx) => (
                      <motion.span
                        key={techIdx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 + techIdx * 0.03 }}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-2 py-1 bg-[#6c47ff]/10 text-[#6c47ff] text-[10px] rounded-full border border-[#6c47ff]/20 hover:bg-[#6c47ff]/20 hover:border-[#6c47ff]/40 transition-all duration-200"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                {/* View Project Link */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  className="mt-4 pt-3 border-t border-white/10"
                >
                  <a 
                    href={`/services/${project.category.toLowerCase().includes('full') ? 'full-stack' : project.category.toLowerCase().includes('webflow') ? 'shopify' : 'figma'}`}
                    className="text-[#6c47ff] text-xs font-semibold flex items-center gap-1 hover:gap-2 transition-all duration-300 group/link"
                  >
                    View Project Details 
                    <span className="group-hover/link:translate-x-1 transition-transform duration-300">→</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}