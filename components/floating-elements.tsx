"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function FloatingElements() {
  const { theme } = useTheme();
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  
  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, []);
  
  const colors = [
    "bg-primary/10",
    "bg-blue-500/10",
    "bg-purple-500/10",
    "bg-pink-500/10",
    "bg-yellow-500/10",
    "bg-green-500/10"
  ];
  
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className={`absolute h-64 w-64 rounded-full ${colors[i]} blur-3xl`}
          initial={{ x: Math.random() * dimensions.width, y: Math.random() * dimensions.height }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
          }}
          transition={{
            duration: 10 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
      <div className="absolute inset-0 bg-background/80 backdrop-blur-[100px]" />
    </div>
  );
}