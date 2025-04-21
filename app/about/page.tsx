"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Code2, Brain, Rocket, Heart, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <div className="container relative mx-auto px-6 py-12">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -right-1/4 top-3/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Main Content */}
      <motion.div
        variants={staggerChildren}
        initial="initial"
        animate="animate"
        className="space-y-16"
      >
        {/* Hero Section */}
        <motion.section variants={fadeInUp} className="text-center">
          <motion.div
            className="mx-auto mb-8 h-32 w-32 overflow-hidden rounded-full border-4 border-primary/10 shadow-xl"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src="https://avatars.githubusercontent.com/u/hikki78"
              alt="Megh"
              width={128}
              height={128}
              className="object-cover"
            />
          </motion.div>
          <motion.h1 
            className="bg-gradient-to-r from-foreground to-foreground/60 bg-clip-text text-4xl font-bold text-transparent md:text-5xl"
            variants={fadeInUp}
          >
            About Me
          </motion.h1>
        </motion.section>

        {/* Bio Section */}
        <motion.section 
          variants={fadeInUp}
          className="mx-auto max-w-3xl space-y-8"
        >
          <motion.div
            className="rounded-xl border bg-card p-8 shadow-lg"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="space-y-6">
              <p className="leading-relaxed text-muted-foreground">
                Hey there! 👋 I&apos;m Megh, a passionate software developer from India with a love for creating elegant solutions to complex problems. My journey in tech started with a simple &quot;Hello, World!&quot; program, and since then, I&apos;ve been on an exciting adventure exploring various technologies and frameworks.
              </p>
              <p className="leading-relaxed text-muted-foreground">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community. I believe in the power of technology to make the world a better place, one line of code at a time.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* What I Do Section */}
        <motion.section variants={fadeInUp} className="space-y-8">
          <h2 className="text-center text-3xl font-bold">What I Do</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Code2, title: "Development", desc: "Building modern web applications with cutting-edge technologies" },
              { icon: Brain, title: "Problem Solving", desc: "Creating efficient solutions to complex technical challenges" },
              { icon: Rocket, title: "Innovation", desc: "Exploring new technologies and pushing boundaries" },
              { icon: Heart, title: "Open Source", desc: "Contributing to and maintaining open source projects" }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="rounded-xl border bg-card p-6 shadow-lg"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <item.icon className="mb-4 h-8 w-8 text-primary" />
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Current Focus */}
        <motion.section 
          variants={fadeInUp}
          className="mx-auto max-w-3xl rounded-xl border bg-card p-8 shadow-lg"
        >
          <h2 className="mb-6 text-center text-3xl font-bold">Current Focus</h2>
          <div className="space-y-4">
            <p className="text-center leading-relaxed text-muted-foreground">
              Currently, I&apos;m diving deep into system design and distributed systems while building scalable web applications. I&apos;m also exploring Rust for performance-critical applications and contributing to various open-source projects.
            </p>
            <div className="flex justify-center space-x-4">
              <Coffee className="h-6 w-6 text-primary" />
              <span className="text-sm text-muted-foreground">
                Fueled by coffee and curiosity
              </span>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}