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
    //     title: "E-Commerce Mobile App",
    //     shortDesc: "Full-featured mobile e-commerce app for iOS and Android.",
    //     fullDesc: "A complete mobile e-commerce application built with React Native. Features include user authentication, product browsing, shopping cart, payment integration, and order tracking. Supports both iOS and Android platforms with native-like performance.",
    //     tech: ["React Native", "Redux Toolkit", "Node.js", "MongoDB", "Stripe"],
    //     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    //     thumbnail: "/projects/rn-ecommerce.jpg",
    //     liveDemo: "#",
    //     github: "#",
    //     keyFeatures: [
    //         "Cross-Platform: Works on both iOS and Android devices",
    //         "User Authentication: Login/Signup with JWT tokens",
    //         "Product Catalog: Browse products with categories and filters",
    //         "Shopping Cart: Add/remove items, update quantities",
    //         "Payment Integration: Stripe and PayPal support",
    //         "Order Tracking: Real-time order status updates",
    //         "Push Notifications: Order updates and promotions",
    //         "Offline Support: Browse products without internet connection"
    //     ]
    // },
    // {
    //     id: 2,
    //     title: "Social Media App",
    //     shortDesc: "Complete social media platform with posts, stories, and chat.",
    //     fullDesc: "A feature-rich social media application allowing users to share posts, stories, send messages, and connect with friends. Includes real-time chat, push notifications, image uploads, and user profiles.",
    //     tech: ["React Native", "Firebase", "Socket.io", "Redux", "Expo"],
    //     videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    //     thumbnail: "/projects/rn-social.jpg",
    //     liveDemo: "#",
    //     github: "#",
    //     keyFeatures: [
    //         "User Profiles: Customizable profiles with photos and bio",
    //         "News Feed: Scroll through friends' posts and updates",
    //         "Stories: 24-hour disappearing photo/video stories",
    //         "Real-time Chat: Instant messaging with typing indicators",
    //         "Push Notifications: Get notified for messages and likes",
    //         "Image Sharing: Upload photos and videos from gallery/camera",
    //         "Comments & Likes: Engage with posts through reactions",
    //         "Follow System: Follow/unfollow users and see their content"
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
                                            Live Demo 🔗
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

export default function ReactNativeProjects() {
    return (
        <section className="min-h-screen py-20 pt-[100px]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="inline-block mb-4">
                        <span className="px-4 py-1 rounded-full bg-gradient-to-r from-[#6c47ff]/20 to-[#ff4d8c]/20 text-[#6c47ff] text-xs font-semibold border border-[#6c47ff]/30">
                            React Native Development
                        </span>
                    </motion.div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        React Native{" "}
                        <span className="bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h1>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        Explore my mobile applications built with React Native for iOS and Android platforms.
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