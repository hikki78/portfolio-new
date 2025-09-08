"use client";

import { Github, Twitter, Youtube, Instagram, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function SocialIcons({ className = "" }: { className?: string }) {
  return (
    <motion.div 
      className={`flex flex-wrap items-center justify-center gap-4 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <Link href="https://github.com/hikki78" target="_blank" rel="noopener noreferrer">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-12 w-12 border-2 bg-background/50 backdrop-blur hover:bg-accent hover:text-accent-foreground"
        >
          <Github className="h-6 w-6" />
        </Button>
      </Link>
      <Link href="https://bento.me/HikkiScript" target="_blank" rel="noopener noreferrer">
        <Button 
          variant="outline" 
          size="icon" 
          className="h-12 w-12 border-2 bg-background/50 backdrop-blur hover:bg-accent hover:text-accent-foreground"
        >
          <div className="h-6 w-6 relative">
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-6 w-6">
              <path d="M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3ZM8 7H16V11H8V7ZM8 13H16V17H8V13Z" />
            </svg>
          </div>
        </Button>
      </Link>
    </motion.div>
  );
}