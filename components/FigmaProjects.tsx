"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
    id: number;
    title: string;
    shortDesc: string;
    fullDesc: string;
    tech: string[];
    videoUrl: string;
    thumbnail: string;
    liveDemo?: string;
    github?: string;
    keyFeatures?: string[];
}

const projects: Project[] = [
    // {
    //     id: 1,
    //     title: "Mobile Banking App UI",
    //     shortDesc: "Complete UI/UX design for a modern banking application.",
    //     fullDesc: "A comprehensive mobile banking app design featuring account management, money transfers, bill payments, transaction history, and investment tracking.",
    //     tech: ["Figma", "Auto Layout", "Components", "Prototyping", "Design System"],
    //     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    //     thumbnail: "/projects/figma-banking.jpg",
    //     liveDemo: "#",
    //     github: "#",
    //     keyFeatures: [
    //         "Design System: Complete component library with variants and tokens",
    //         "Dark Mode: Full dark theme with proper contrast ratios",
    //         "Interactive Prototype: Clickable prototype with micro-interactions",
    //         "Biometric Auth: Face ID and fingerprint authentication screens",
    //         "Transaction Charts: Data visualization for spending analytics",
    //         "Responsive Design: Adapts to different screen sizes",
    //         "Accessibility: WCAG 2.1 compliant color contrast",
    //         "Developer Handoff: Ready-to-use design specs and assets"
    //     ]
    // },
    // {
    //     id: 2,
    //     title: "E-commerce Website UI",
    //     shortDesc: "Modern e-commerce design with product showcases and cart.",
    //     fullDesc: "A complete e-commerce website design featuring product listings, detailed product pages, shopping cart, checkout flow, and user account dashboard.",
    //     tech: ["Figma", "Wireframing", "User Flow", "Mockups", "Prototyping"],
    //     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    //     thumbnail: "/projects/figma-ecommerce.jpg",
    //     liveDemo: "#",
    //     github: "#",
    //     keyFeatures: [
    //         "Homepage Design: Hero sections, featured products, promotions",
    //         "Product Grid: Filterable and sortable product listing",
    //         "Product Details: Gallery, variants, reviews, and recommendations",
    //         "Shopping Cart: Cart sidebar with quantity updates",
    //         "Checkout Flow: Multi-step checkout with order summary",
    //         "User Dashboard: Order history, addresses, and profile management",
    //         "Mobile Responsive: Designs for desktop, tablet, and mobile",
    //         "Interactive Elements: Hover states and loading animations"
    //     ]
    // }
];

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
                <div className="relative aspect-video bg-black/50 overflow-hidden rounded-l-2xl">
                    <iframe
                        src={project.videoUrl}
                        title={project.title}
                        className="w-full h-full"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
                <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                        {project.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech, idx) => (
                            <span key={idx} className="px-2 py-1 bg-[#6c47ff]/20 text-[#6c47ff] text-xs rounded-full border border-[#6c47ff]/30">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="text-gray-400 text-sm mb-4">{project.shortDesc}</p>
                    <motion.button
                        onClick={() => setIsExpanded(!isExpanded)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="text-[#6c47ff] hover:text-[#ff4d8c] text-sm font-semibold flex items-center gap-1 transition-colors"
                    >
                        {isExpanded ? "Read Less ▲" : "Read More ▼"}
                    </motion.button>
                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-4 pt-4 border-t border-white/10"
                            >
                                <p className="text-gray-300 text-sm leading-relaxed mb-4">{project.fullDesc}</p>
                                {project.keyFeatures && (
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
                                <div className="flex gap-4 mt-4">
                                    {project.liveDemo && project.liveDemo !== "#" && (
                                        <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-lg text-xs font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                                            View Design 🔗
                                        </a>
                                    )}
                                    {project.github && project.github !== "#" && (
                                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-[#6c47ff] rounded-lg text-xs font-semibold hover:bg-[#6c47ff]/10 transition-all">
                                            GitHub 📂
                                        </a>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}

export default function FigmaProjects() {
    return (
        <section className="min-h-screen py-20 pt-[100px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block mb-4">
                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#6c47ff]/20 to-[#ff4d8c]/20 text-[#6c47ff] text-xs font-semibold border border-[#6c47ff]/30">
                            Figma Design
                        </span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        Figma{" "}
                        <span className="bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Explore my UI/UX designs created in Figma for web and mobile applications.
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