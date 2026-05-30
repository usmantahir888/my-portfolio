"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Update active item based on current path
  useEffect(() => {
    if (pathname === "/") {
      // On home page, check which section is visible
      const sections = ["home", "about", "service", "blog", "contact"];
      const scrollPosition = window.scrollY + 100;
      
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
      // On services pages, set active to "Service"
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
      // If already on home page, just scroll to top
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      return;
    }
    
    if (pathname !== "/") {
      // If not on home page, let Link handle navigation
      return;
    }
    
    // On home page, prevent default and scroll smoothly
    e.preventDefault();
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/80 backdrop-blur-lg py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] bg-clip-text text-transparent cursor-pointer"
            >
              Asnan
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href, item.section)}
                className="relative group"
              >
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className={`
                    px-3 py-2 font-medium transition-all duration-300 cursor-pointer
                    ${activeItem === item.name 
                      ? "text-white" 
                      : "text-gray-400 group-hover:text-white"
                    }
                  `}
                >
                  {item.name}
                </motion.span>
                
                {/* Neon Glow Effect on Hover */}
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="absolute inset-0 bg-[#6c47ff] blur-xl rounded-full -z-10" />
                  <span className="absolute inset-0 bg-[#ff4d8c] blur-xl rounded-full -z-10" />
                </span>
                
                {/* Active Indicator */}
                {activeItem === item.name && pathname === "/" && (
                  <motion.div
                    layoutId="active"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] rounded-full"
                    transition={{ type: "spring", bounce: 0.3 }}
                  />
                )}
                
                {/* Hover underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#6c47ff] via-[#ff4d8c] to-[#4dffb8] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Link>
            ))}
          </div>

          {/* Hire Me Button */}
          <Link href="/#contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block relative group px-6 py-2 rounded-full font-semibold text-white overflow-hidden"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] rounded-full" />
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="absolute inset-0 bg-[#6c47ff] blur-xl rounded-full" />
                <span className="absolute inset-0 bg-[#ff4d8c] blur-xl rounded-full" />
              </span>
              <span className="relative z-10">Hire Me</span>
            </motion.button>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 bg-black/90 backdrop-blur-lg rounded-lg"
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-white/5 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link href="/#contact">
              <button className="w-full mt-2 px-4 py-2 bg-gradient-to-r from-[#6c47ff] to-[#ff4d8c] text-white font-semibold rounded-lg">
                Hire Me
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}