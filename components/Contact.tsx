"use client";

import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
    const ref = useRef(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus({ 
                    type: 'success', 
                    message: '✅ Message sent successfully! I will get back to you soon.' 
                });
                // Clear form
                setFormData({ name: "", email: "", message: "" });
            } else {
                setStatus({ 
                    type: 'error', 
                    message: data.error || '❌ Failed to send message. Please try again.' 
                });
            }
        } catch (error) {
            setStatus({ 
                type: 'error', 
                message: '❌ Network error. Please check your connection and try again.' 
            });
        } finally {
            setLoading(false);
            // Clear status after 5 seconds
            setTimeout(() => setStatus(null), 5000);
        }
    };

    return (
        <section id="contact" className="py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let's{" "}
                        <span className="bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] bg-clip-text text-transparent">
                            Work
                        </span>{" "}
                        Together
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Have a project in mind? Let's discuss how I can help you
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                    📧
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Email</p>
                                    <p className="font-semibold">malikali07070707@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                                <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                                        <path d="M12.032 2.00195C6.044 1.98795 1.092 6.91395 1.078 12.9019C1.072 14.9819 1.687 17.0089 2.851 18.7309L2.016 22.0009L5.369 21.1869C7.026 22.2219 8.966 22.7849 10.955 22.7919H10.966C16.952 22.7919 21.92 17.8559 21.933 11.8649C21.939 8.99495 20.775 6.31495 18.686 4.28395C16.6 2.25395 13.888 1.12695 11.015 1.13195L12.032 2.00195Z" fill="white"/>
                                        <path d="M17.538 14.93C17.337 14.545 16.563 14.171 16.139 14.064C15.716 13.957 15.392 13.982 15.069 14.367C14.746 14.752 13.927 15.607 13.644 15.922C13.361 16.237 13.078 16.267 12.655 16.16C12.232 16.053 10.954 15.676 9.446 14.352C8.268 13.329 7.466 12.074 7.183 11.689C6.9 11.304 7.158 11.09 7.421 10.828C7.654 10.596 7.937 10.244 8.19 9.937C8.443 9.63 8.521 9.404 8.66 9.068C8.799 8.732 8.731 8.433 8.62 8.326C8.509 8.219 7.724 6.851 7.383 6.202C7.052 5.573 6.72 5.679 6.472 5.672C6.233 5.665 5.972 5.661 5.722 5.661C5.472 5.661 5.059 5.754 4.714 6.128C4.369 6.502 3.475 7.346 3.475 9.064C3.475 10.782 4.713 12.451 4.88 12.68C5.047 12.909 7.455 16.588 11.05 18.079C11.741 18.357 12.283 18.525 12.713 18.648C13.408 18.864 14.034 18.833 14.527 18.771C15.08 18.702 16.239 17.941 16.505 17.11C16.771 16.279 16.771 15.567 16.66 15.38C16.549 15.193 15.739 15.315 15.538 14.93Z" fill="#25D366"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">WhatsApp</p>
                                    <p className="font-semibold">+92 313 0552971</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-all duration-300 group">
                                <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                                    📍
                                </div>
                                <div>
                                    <p className="text-sm text-gray-400">Location</p>
                                    <p className="font-semibold">Islamabad, Pakistan</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.form
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        onSubmit={handleSubmit}
                        className="space-y-6"
                    >
                        <div>
                            <input
                                type="text"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#6c47ff] outline-none transition-colors text-white"
                                required
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#6c47ff] outline-none transition-colors text-white"
                                required
                                disabled={loading}
                            />
                        </div>
                        <div>
                            <textarea
                                placeholder="Your Message"
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                rows={5}
                                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#6c47ff] outline-none transition-colors resize-none text-white"
                                required
                                disabled={loading}
                            />
                        </div>

                        {/* Status Message */}
                        {status && (
                            <div className={`p-4 rounded-xl ${
                                status.type === 'success' 
                                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' 
                                    : 'bg-red-500/20 border border-red-500/50 text-red-400'
                            }`}>
                                {status.message}
                            </div>
                        )}

                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full py-4 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-xl font-semibold text-white transition-all hover:shadow-lg hover:shadow-purple-500/50 hover:scale-[1.02] active:scale-[0.98] ${
                                loading ? 'opacity-50 cursor-not-allowed' : ''
                            }`}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}