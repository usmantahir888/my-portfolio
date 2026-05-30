"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Sphere, Box, Torus, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

// Main 3D object that rotates and follows mouse
function FloatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (meshRef.current) {
      // Rotate on its own
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.z += 0.007;
      
      // Follow mouse slightly
      meshRef.current.position.x = mouseX * 0.3;
      meshRef.current.position.y = -mouseY * 0.2;
    }
  });

  return (
    <group>
      {/* Main geometric shape */}
      <Sphere ref={meshRef} args={[1.5, 64, 64]} scale={[1.2, 1.2, 1.2]}>
        <MeshDistortMaterial
          color="#6c47ff"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
          emissive="#2a0a5e"
          emissiveIntensity={0.5}
        />
      </Sphere>
      
      {/* Orbiting rings */}
      <Torus args={[2, 0.05, 64, 200]} rotation={[Math.PI / 2, 0, 0]}>
        <meshStandardMaterial color="#ff4d8c" emissive="#ff1a66" emissiveIntensity={0.3} />
      </Torus>
      
      <Torus args={[2.3, 0.03, 64, 200]} rotation={[Math.PI / 3, 0, 0]}>
        <meshStandardMaterial color="#4dffb8" emissive="#1affaa" emissiveIntensity={0.2} />
      </Torus>
      
      {/* Small floating particles */}
      {[...Array(50)].map((_, i) => (
        <Box
          key={i}
          args={[0.05, 0.05, 0.05]}
          position={[
            Math.sin(i) * 3,
            Math.cos(i * 2) * 3,
            Math.sin(i * 1.5) * 3,
          ]}
        >
          <meshStandardMaterial color="#ffffff" emissive="#6c47ff" emissiveIntensity={0.5} />
        </Box>
      ))}
    </group>
  );
}

// Camera that follows mouse
function MouseFollower() {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      setMouseX((event.clientX / window.innerWidth) * 2 - 1);
      setMouseY((event.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(({ camera }) => {
    if (camera) {
      camera.position.x += (mouseX * 0.5 - camera.position.x) * 0.05;
      camera.position.y += (-mouseY * 0.3 - camera.position.y) * 0.05;
      camera.lookAt(0, 0, 0);
    }
  });

  return null;
}

export default function Scene3D() {
  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        style={{ background: "black" }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#6c47ff" />
        <FloatingShape />
        <MouseFollower />
      </Canvas>
    </div>
  );
}