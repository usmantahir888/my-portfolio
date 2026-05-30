"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sync active navigation items accurately matching page view thresholds
  useEffect(() => {
    if (pathname === "/") {
      const sections = ["home", "about", "service", "blog", "contact"];
      const scrollPosition = window.scrollY + 120;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveItem(section.charAt(0).toUpperCase() + section.slice(1));
            break;
          }
        }
      }
    } else if (pathname.startsWith("/services/")) {
      setActiveItem("Service");
    } else {
      setActiveItem("");
    }
  }, [pathname]);

  const navItems = [
    { name: "Home", href: "/", section: "home" },
    { name: "About", href: "/#about", section: "about" },
    { name: "Service", href: "/#service", section: "service" },
    { name: "Blog", href: "/#blog", section: "blog" },
    { name: "Contact", href: "/#contact", section: "contact" },
  ];

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string, section: string) => {
    if (href === "/") {
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    
    if (pathname !== "/") {
      return;
    }
    
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-[#0a0a0c]/80 backdrop-blur-xl py-4 border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.4)]" 
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Elite Premium Structured Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-xl font-black tracking-tighter text-white cursor-pointer flex items-center gap-1 group"
            >
              <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                Usman
              </span>
              <span className="text-[#6c47ff] font-extrabold group-hover:text-[#ff4d8c] transition-colors duration-300">.</span>
            </motion.div>
          </Link>

          {/* Desktop Matrix Navigation Layout */}
          <div className="hidden md:flex items-center space-x-1 bg-white/[0.02] border border-white/[0.04] rounded-full p-1.5 backdrop-blur-md">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.section)}
                className="relative px-4 py-2 text-xs font-bold tracking-wider uppercase transition-all duration-300 rounded-full"
              >
                <span className={`relative z-10 transition-colors duration-300 ${
                  activeItem === item.name 
                    ? "text-white" 
                    : "text-gray-500 hover:text-white"
                }`}>
                  {item.name}
                </span>
                
                {/* Clean Pill Active Element Instead of standard Underlines */}
                {activeItem === item.name && (
                  <motion.div
                    layoutId="navbar-active-pill"
                    className="absolute inset-0 bg-white/[0.05] border border-white/[0.08] rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Functional Clean Action Trigger CTA */}
          <div className="hidden md:block">
            <Link href="/#contact">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative px-5 py-2 rounded-xl font-bold text-[10px] tracking-widest uppercase text-white overflow-hidden bg-[#111115] border border-white/[0.08] hover:border-[#6c47ff]/40 transition-all duration-300 shadow-md group"
              >
                {/* Internal Glow Node */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#6c47ff]/10 to-[#ff4d8c]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative z-10">Initiate Brief</span>
              </motion.button>
            </Link>
          </div>

          {/* Mobile Technical Menu Action Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Clean Context-Aware Mobile Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden mt-4 p-3 bg-[#111115] border border-white/[0.06] rounded-xl shadow-xl flex flex-col gap-1 backdrop-blur-xl"
            >
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block px-4 py-2.5 rounded-lg text-xs font-bold tracking-wide uppercase transition-colors ${
                    activeItem === item.name
                      ? "text-white bg-white/[0.04]"
                      : "text-gray-400 hover:text-white hover:bg-white/[0.02]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="h-[1px] bg-white/[0.04] my-2" />
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)}>
                <button className="w-full px-4 py-3 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] text-white text-xs font-bold tracking-widest uppercase rounded-lg shadow-lg">
                  Initiate Brief
                </button>
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}