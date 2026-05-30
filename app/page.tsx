"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const NeonBackground = dynamic(() => import("@/components/NeonBackground"), { ssr: false });

export default function Home() {
  return (
    <>
      <NeonBackground />
      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}