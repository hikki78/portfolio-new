"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Github, ExternalLink, Play } from "lucide-react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  github: string;
  live?: string;
  video?: string;
  icon: LucideIcon;
  tech: readonly string[];
  index: number;
}

const iconAnimation = {
  initial: { scale: 0.5, opacity: 0, rotate: -180 },
  animate: { 
    scale: 1, 
    opacity: 1, 
    rotate: 0,
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

export function ProjectCard({
  title,
  description,
  github,
  live,
  video,
  icon: Icon,
  tech,
  index,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="w-full h-full"
    >
      <Card className="group relative overflow-hidden neo-brutalist bg-card hover:bg-accent/5 h-full">
        <div className="p-6">
          <div className="mb-4 flex items-center space-x-3">
            <motion.div
              initial="initial"
              animate="animate"
              whileHover="hover"
              variants={iconAnimation}
              className="rounded-full bg-primary/10 p-2"
            >
              <Icon className="h-6 w-6 text-primary" />
            </motion.div>
            <h3 className="text-xl font-semibold gradient-text">{title}</h3>
          </div>
          <p className="mb-4 text-sm text-muted-foreground">{description}</p>
          <div className="mb-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <motion.span
                key={t}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
              >
                {t}
              </motion.span>
            ))}
          </div>
          <div className="flex space-x-4">
            <Link 
              href={github} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <motion.div
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
              >
                <Github className="h-5 w-5" />
              </motion.div>
            </Link>
            {live && (
              <Link 
                href={live} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                >
                  <ExternalLink className="h-5 w-5" />
                </motion.div>
              </Link>
            )}
            {video && (
              <Link 
                href={video} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background hover:bg-accent hover:text-accent-foreground"
                >
                  <Play className="h-5 w-5" />
                </motion.div>
              </Link>
            )}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className="absolute inset-0 bg-gradient-to-t from-background/80 to-background/0"
        />
      </Card>
    </motion.div>
  );
}