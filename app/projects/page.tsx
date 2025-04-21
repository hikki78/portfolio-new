"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/terminal";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

const iconAnimation = {
  initial: { scale: 0.5, rotate: -180, opacity: 0 },
  animate: { 
    scale: 1, 
    rotate: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  hover: {
    scale: 1.2,
    rotate: 360,
    transition: {
      duration: 0.8,
      ease: "easeInOut"
    }
  }
};

export default function Projects() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Terminal Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-3xl"
      >
        <Terminal />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-center text-lg text-muted-foreground"
        >
          ✨ Here&apos;s a glimpse into my digital workshop, where ideas come to life ✨
        </motion.p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-auto max-w-6xl"
      >
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}