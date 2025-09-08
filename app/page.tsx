"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Terminal } from "@/components/terminal";
import { TechStack } from "@/components/tech-stack";
import { ProjectGrid } from "@/components/project-grid";
import { ContactSection } from "@/components/contact-section";
import { SocialIcons } from "@/components/social-icons";
import { AboutPreview } from "@/components/about-preview";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Hero Section with Terminal */}
      <section className="flex flex-col items-center py-6 md:py-12 lg:py-24">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mb-8 md:mb-12 px-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            data-text="Hey, I'm Megh"
            className="glitch bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-3xl font-bold leading-tight tracking-tighter text-transparent sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[1.2]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            style={{ letterSpacing: '0.02em', paddingBottom: '0.1em' }}
          >
            Hey, I&apos;m Megh
          </motion.h1>
          <motion.p
            className="text-base text-muted-foreground sm:text-lg md:text-xl max-w-2xl px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I make and tinker with software and tech related stuffs :D
          </motion.p>
          
          <SocialIcons className="mt-6 md:mt-8" />
        </motion.div>

        <motion.div
          className="w-full max-w-3xl px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Terminal />
        </motion.div>
      </section>

      <AboutPreview />

      <section className="py-8 md:py-12">
        <h2 className="mb-6 md:mb-8 text-center text-2xl md:text-3xl font-bold px-4">Featured Projects</h2>
        <div className="px-4">
          <ProjectGrid />
        </div>
        <div className="mt-8 md:mt-12 text-center px-4">
          <Link href="/projects">
            <Button variant="outline" className="group w-full sm:w-auto">
              View More Projects
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
              >
                →
              </motion.span>
            </Button>
          </Link>
        </div>
      </section>

      <ContactSection />

      {/* Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-grid-neutral-100/25 dark:bg-grid-neutral-900/20 bg-[size:var(--grid-size)_var(--grid-size)] [--grid-size:24px] sm:[--grid-size:32px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]" />
        <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
        <motion.div
          className="absolute left-1/4 top-1/4 h-48 w-48 md:h-64 md:w-64 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute right-1/4 top-3/4 h-48 w-48 md:h-64 md:w-64 rounded-full bg-blue-500/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </div>
  );
}