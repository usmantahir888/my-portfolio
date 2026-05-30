"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: number;
    title: string;
    shortDesc: string;
    fullDesc: string;
    tech: string[];
    images: string[];
    liveDemo?: string;
    github?: string;
    keyFeatures?: string[];
}

const projects: Project[] = [
    {
        id: 1,
        title: "Complete E-Commerce Platform",
        shortDesc: "Full-stack e-commerce solution with admin panel and JWT integration.",
        fullDesc: "A complete, production-ready full-stack e-commerce web application that delivers a seamless online shopping experience. The platform features dedicated sections for Men, Women, and Kids collections, along with specialized pages for New Arrivals and Sale items. Built with modern web technologies, this application demonstrates expertise in both frontend and backend development, featuring a beautiful, responsive UI, secure authentication, and robust shopping cart functionality.",
        tech: ["React", "Node.js", "Express.js", "MongoDB", "Stripe", "Redux Toolkit"],
        images: [
            "/images/thumb.jpg",
            "/images/img-1.jpg",
            "/images/img-2.jpg",
            "/images/img-3.jpg",
            "/images/img-4.jpg",
            "/images/img-5.jpg",
            "/images/img-6.jpg",
            "/images/img-7.jpg",
            "/images/img-8.jpg",
        ],
        liveDemo: "https://e-commerce-project-one-eta.vercel.app/",
        github: "https://github.com/Asnan0987/E-commerce-Project-",
        keyFeatures: [
            "👤 User Features",
            "Product Browsing: Browse products by categories (Men, Women, Kids)",
            "Advanced Filtering: Filter by category, search by name/description",
            "Sorting Options: Sort by newest, price low-to-high, price high-to-low",
            "Shopping Cart: Add/remove items, update quantities, persistent storage",
            "Wishlist Ready: Architecture supports wishlist functionality",
            "User Authentication: Secure login/signup with JWT tokens",
            "Order Placement: Complete checkout process with order confirmation",
            "",
            "🎨 Premium UI/UX",
            "Responsive Design: Flawless experience on all devices (320px - 1920px+)",
            "Category Banners: Premium hero sections with gradient overlays",
            "Floating Particles: Interactive particle animations on Men's page",
            "Toast Notifications: Real-time feedback for user actions",
            "Smooth Animations: Hover effects, fade-ins, and transitions",
            "Mobile-Optimized: Collapsible filters, touch-friendly buttons",
            "",
            "🛡️ Admin Features",
            "Product Management: Add, edit, delete products",
            "Variant Support: Add product variants (size, color, price)",
            "Inventory Control: Manage stock quantities",
            "Featured Products: Mark products as featured or new arrivals"
        ]
    },
];

// Image Carousel Component
function ImageCarousel({ images, interval = 3000 }: { images: string[]; interval?: number }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length <= 1) return;
        
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        return () => clearInterval(timer);
    }, [images, interval]);

    return (
        <div className="relative w-full h-full min-h-[300px] bg-black/50">
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
                        className="w-full h-full object-contain"
                    />
                </motion.div>
            ))}
            
            {/* Image indicators/dots */}
            {images.length > 1 && (
                <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`transition-all duration-300 rounded-full ${
                                currentIndex === idx 
                                    ? 'w-2 h-2 bg-white' 
                                    : 'w-1.5 h-1.5 bg-white/50 hover:bg-white/80'
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

function ProjectCard({ project }: { project: Project }) {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-[#6c47ff]/50 transition-all duration-300"
        >
            <div className="grid md:grid-cols-2 gap-6">
                {/* Image Carousel Section */}
                <div className="relative bg-black/50 overflow-hidden rounded-l-2xl min-h-[300px]">
                    <ImageCarousel images={project.images} interval={3000} />
                </div>

                {/* Content Section */}
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, idx) => (
                            <span
                                key={idx}
                                className="px-2 py-1 bg-[#6c47ff]/20 text-[#6c47ff] text-xs rounded-full border border-[#6c47ff]/30"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    <p className="text-gray-400 text-sm mb-4">
                        {project.shortDesc}
                    </p>

                    {/* Read More Button - Stays at top */}
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-[#6c47ff] hover:text-[#ff4d8c] text-sm font-semibold flex items-center gap-1 transition-colors mb-4"
                    >
                        {isExpanded ? "Read Less ▲" : "Read More ▼"}
                    </motion.button>

                    {/* Expandable Dropdown Content - Expands downward */}
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0, y: -20 }}
                                animate={{ opacity: 1, height: "auto", y: 0 }}
                                exit={{ opacity: 0, height: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 border-t border-white/10">
                                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                                        {project.fullDesc}
                                    </p>
                                    
                                    {/* Key Features Section */}
                                    {project.keyFeatures && project.keyFeatures.length > 0 && (
                                        <div className="mb-4">
                                            <h4 className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                                                <span className="w-1 h-4 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-full"></span>
                                                Key Features:
                                            </h4>
                                            <ul className="space-y-1.5">
                                                {project.keyFeatures.map((feature, idx) => (
                                                    <li key={idx} className="text-gray-400 text-xs flex items-start gap-2">
                                                        <span className="text-[#6c47ff] mt-0.5">▹</span>
                                                        <span>{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                    
                                    {/* Live Demo and GitHub Buttons */}
                                    <div className="flex gap-4 mt-4">
                                        {project.liveDemo && (
                                            <a
                                                href={project.liveDemo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-lg text-xs font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                                            >
                                                Live Demo 🔗
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="px-4 py-2 border border-[#6c47ff] rounded-lg text-xs font-semibold hover:bg-[#6c47ff]/10 transition-all"
                                            >
                                                GitHub 📂
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

export default function FullStackProjects() {
    return (
        <section className="min-h-screen py-20 pt-[100px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block mb-4">
                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#6c47ff]/20 to-[#ff4d8c]/20 text-[#6c47ff] text-xs font-semibold border border-[#6c47ff]/30">
                            Full-Stack Development
                        </span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Full-Stack{" "}
                        <span className="bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Explore my complete full-stack applications from frontend to backend and database.
                    </p>
                </motion.div>

                <div className="space-y-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>

                <motion.div className="text-center mt-12">
                    <a href="/">
                        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="px-6 py-3 border border-[#6c47ff] rounded-full text-sm font-semibold hover:bg-[#6c47ff]/10 transition-all">
                            ← Back to Home
                        </motion.button>
                    </a>
                </motion.div>
            </div>
        </section>
    );
}