"use client";

import { motion } from "framer-motion";
import { ProjectCard } from '@/components/project-card';
import { projects } from '@/lib/projects';

const featuredProjects = projects.slice(0, 4); // Only show first 4 projects

export function ProjectGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {featuredProjects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`
            ${index === 0 ? 'md:col-span-2' : ''}
            ${index === 3 ? 'md:col-span-2' : ''}
          `}
        >
          <ProjectCard {...project} index={index} />
        </motion.div>
      ))}
    </div>
  );
}