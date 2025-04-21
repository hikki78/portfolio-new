"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const technologies = [
  { name: "Next.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" },
  { name: "Rust", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-plain.svg" },
  { name: "Node.js", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original.svg" },
];

export function TechStack() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-6">
      {technologies.map((tech, index) => (
        <motion.div
          key={tech.name}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center gap-2"
        >
          <div className="relative h-12 w-12 sm:h-16 sm:w-16">
            <Image
              src={tech.icon}
              alt={tech.name}
              width={64}
              height={64}
              className="object-contain"
            />
          </div>
          <span className="text-xs sm:text-sm font-medium text-center">{tech.name}</span>
        </motion.div>
      ))}
    </div>
  );
}