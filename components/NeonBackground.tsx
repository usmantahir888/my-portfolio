"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  type: "square" | "circle";
  opacity: number;
  glowIntensity: number;
}

export default function NeonBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Neon colors
    const colors = [
      { main: "#6c47ff", glow: "rgba(108, 71, 255, 0.5)" },  // Purple
      { main: "#ff4d8c", glow: "rgba(255, 77, 140, 0.5)" },  // Pink
      { main: "#4dffb8", glow: "rgba(77, 255, 184, 0.5)" },  // Mint
      { main: "#ffaa4d", glow: "rgba(255, 170, 77, 0.5)" },  // Orange
      { main: "#4d9fff", glow: "rgba(77, 159, 255, 0.5)" },  // Blue
    ];

    // Create particles
    const particles: Particle[] = [];
    const particleCount = 80;

    for (let i = 0; i < particleCount; i++) {
      const colorScheme = colors[Math.floor(Math.random() * colors.length)];
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2, // 2-6px
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        color: colorScheme.main,
        type: Math.random() > 0.5 ? "square" : "circle",
        opacity: Math.random() * 0.5 + 0.3,
        glowIntensity: Math.random() * 0.8 + 0.2,
      });
    }

    // Mouse interaction variables
    let mouseX = canvas.width / 2;
    let mouseY = canvas.height / 2;
    let mouseRadius = 150;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    let animationId: number;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Dark gradient background
      const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
      gradient.addColorStop(0, "#0a0a0a");
      gradient.addColorStop(1, "#000000");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw particles
      particles.forEach((particle) => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off edges with some padding
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
          particle.x = Math.max(0, Math.min(canvas.width, particle.x));
        }
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
          particle.y = Math.max(0, Math.min(canvas.height, particle.y));
        }

        // Calculate distance from mouse
        const dx = particle.x - mouseX;
        const dy = particle.y - mouseY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Mouse repulsion effect
        if (distance < mouseRadius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouseRadius - distance) / mouseRadius;
          const pushX = Math.cos(angle) * force * 2;
          const pushY = Math.sin(angle) * force * 2;
          particle.x += pushX;
          particle.y += pushY;
        }

        // Set shadow for neon glow
        ctx.shadowBlur = 15 * particle.glowIntensity;
        ctx.shadowColor = particle.color;
        
        // Set opacity
        ctx.globalAlpha = particle.opacity;
        
        // Draw particle based on type
        ctx.fillStyle = particle.color;
        
        if (particle.type === "square") {
          ctx.fillRect(particle.x - particle.size / 2, particle.y - particle.size / 2, particle.size, particle.size);
        } else {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size / 2, 0, Math.PI * 2);
          ctx.fill();
        }
      });

      // Reset shadow and opacity
      ctx.shadowBlur = 0;
      ctx.globalAlpha = 1;

      // Draw connecting lines between nearby particles
      ctx.globalAlpha = 0.15;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            
            // Gradient line based on particle colors
            const gradient = ctx.createLinearGradient(
              particles[i].x, particles[i].y,
              particles[j].x, particles[j].y
            );
            gradient.addColorStop(0, particles[i].color);
            gradient.addColorStop(1, particles[j].color);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }
      
      ctx.globalAlpha = 1;
      animationId = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10"
      style={{ background: "black" }}
    />
  );
}