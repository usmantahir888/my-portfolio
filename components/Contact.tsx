"use client";

import { motion, AnimatePresence } from "framer-motion";
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
          message: 'Secure transmission complete. Project payload received successfully.' 
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus({ 
          type: 'error', 
          message: data.error || 'Server rejected transmission parameters. Please try again.' 
        });
      }
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Network link failure. Verify client interface connection.' 
      });
    } finally {
      setLoading(false);
      setTimeout(() => setStatus(null), 6000);
    }
  };

  return (
    <section id="contact" className="py-28 bg-[#0a0a0c] relative overflow-hidden px-6 lg:px-8">
      {/* Background Engineering Grids */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:32px_32px]" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-[#ff4d8c]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Component Header Block */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#ff4d8c] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] text-gray-400 uppercase">
              Project Initiation Portal
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight text-white mt-4 mb-4">
            Let's Build{" "}
            <span className="bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] bg-clip-text text-transparent">
              Together.
            </span>
          </h2>
          <p className="text-gray-500 text-sm max-w-lg mx-auto font-medium leading-relaxed">
            Have an application prototype, asset identity design, or enterprise development framework to execute? Secure a briefing session now.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 items-start">
          
          {/* Engineering Metadata Block */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-2 space-y-4"
          >
            <h3 className="text-xs font-bold tracking-wider text-gray-400 uppercase mb-6 pl-1">
              Direct Communication Nodes
            </h3>

            {/* Email Module Block */}
            <div className="flex items-center gap-4 p-5 bg-[#111115] border border-white/[0.04] rounded-xl group transition-all duration-300 hover:border-white/[0.1]">
              <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-400 group-hover:text-white transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Secure Mailing</p>
                <a href="mailto:musmantahir539@gmail.com" className="text-sm font-bold text-white hover:text-[#6c47ff] transition-colors duration-200 block mt-0.5">
                  musmantahir539@gmail.com
                </a>
              </div>
            </div>

            {/* Telephony & WhatsApp Block Module */}
            <div className="flex items-center gap-4 p-5 bg-[#111115] border border-white/[0.04] rounded-xl group transition-all duration-300 hover:border-white/[0.1]">
              <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-400 group-hover:text-emerald-400 transition-colors duration-300">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Voice / Wire Link</p>
                <a href="https://wa.me/923313360030" target="_blank" rel="noreferrer" className="text-sm font-bold text-white hover:text-emerald-400 transition-colors duration-200 block mt-0.5">
                  +92 331 3360030
                </a>
              </div>
            </div>

            {/* Geographical Base Core Module */}
            <div className="flex items-center gap-4 p-5 bg-[#111115] border border-white/[0.04] rounded-xl transition-all duration-300">
              <div className="w-10 h-10 rounded-lg bg-white/[0.02] border border-white/[0.05] flex items-center justify-center text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Deployment HQ</p>
                <p className="text-sm font-bold text-white block mt-0.5">Islamabad, Pakistan</p>
              </div>
            </div>
          </motion.div>

          {/* Core Interactive Transmission Form Layout */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:col-span-3 bg-[#111115] border border-white/[0.04] rounded-xl p-6 md:p-8 relative"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 pl-1">Identity Parameter</label>
                  <input
                    type="text"
                    placeholder="e.g. Alexander Mitchell"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/[0.05] rounded-lg focus:border-[#6c47ff]/60 focus:ring-1 focus:ring-[#6c47ff]/20 outline-none transition-all text-sm text-white font-medium"
                    required
                    disabled={loading}
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 pl-1">Communications Relay</label>
                  <input
                    type="email"
                    placeholder="e.g. alex@enterprise.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/[0.05] rounded-lg focus:border-[#6c47ff]/60 focus:ring-1 focus:ring-[#6c47ff]/20 outline-none transition-all text-sm text-white font-medium"
                    required
                    disabled={loading}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold tracking-wider uppercase text-gray-500 pl-1">Brief Description / Payload</label>
                <textarea
                  placeholder="Outline project operational scopes, performance matrix targets, and target timelines..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 bg-[#0a0a0c] border border-white/[0.05] rounded-lg focus:border-[#6c47ff]/60 focus:ring-1 focus:ring-[#6c47ff]/20 outline-none transition-all resize-none text-sm text-white font-medium leading-relaxed"
                  required
                  disabled={loading}
                />
              </div>

              {/* Server Response Feedback Widget */}
              <AnimatePresence mode="wait">
                {status && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className={`p-3.5 rounded-lg border text-xs font-bold tracking-wide ${
                      status.type === 'success' 
                        ? 'bg-emerald-500/5 border-emerald-500/20 text-emerald-400' 
                        : 'bg-rose-500/5 border-rose-500/20 text-rose-400'
                    }`}
                  >
                    {status.message}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Dynamic Action Trigger Button */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? { scale: 1.01 } : {}}
                whileTap={!loading ? { scale: 0.99 } : {}}
                className={`w-full py-3.5 rounded-lg font-bold text-xs tracking-widest uppercase text-white transition-all overflow-hidden relative ${
                  loading ? 'bg-white/10 text-gray-500 cursor-not-allowed' : 'bg-[#16161d] border border-white/[0.08] hover:border-[#6c47ff]/40 shadow-md'
                }`}
              >
                {!loading && <div className="absolute inset-0 bg-gradient-to-r from-[#6c47ff]/5 to-[#ff4d8c]/5 opacity-100" />}
                <span className="relative z-10">
                  {loading ? 'Executing Uplink...' : 'Transmit Project Brief'}
                </span>
              </motion.button>
              
            </form>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}