"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ContactForm() {
  const [isSent, setIsSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSent(true);
    setTimeout(() => setIsSent(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-black/30 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Let's{" "}
          <span className="bg-gradient-to-r from-[#6c47ff] to-[#4dffb8] bg-clip-text text-transparent">
            Create
          </span>{" "}
          Together
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="space-y-6"
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#6c47ff] outline-none transition-colors"
              required
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#6c47ff] outline-none transition-colors"
              required
            />
          </div>
          <div>
            <textarea
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={5}
              className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-xl focus:border-[#6c47ff] outline-none transition-colors resize-none"
              required
            />
          </div>
          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-4 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-xl font-semibold relative overflow-hidden group"
          >
            <span className="relative z-10">Send Message</span>
            <motion.div
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.5 }}
            />
          </motion.button>
        </motion.form>

        <AnimatePresence>
          {isSent && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed bottom-8 right-8 bg-[#6c47ff] text-white px-6 py-3 rounded-full shadow-lg"
            >
              Message sent! 🚀
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}