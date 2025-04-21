"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Brain, Rocket, Heart } from "lucide-react";

const features = [
  { 
    icon: Code2, 
    title: "Development", 
    desc: "Building modern web applications",
    color: "text-blue-500"
  },
  { 
    icon: Brain, 
    title: "Problem Solving", 
    desc: "Creating efficient solutions",
    color: "text-purple-500"
  },
  { 
    icon: Rocket, 
    title: "Innovation", 
    desc: "Exploring new technologies",
    color: "text-green-500"
  },
  { 
    icon: Heart, 
    title: "Open Source", 
    desc: "Contributing to community",
    color: "text-pink-500"
  }
];

const iconAnimation = {
  initial: { scale: 0.5, opacity: 0 },
  animate: { 
    scale: 1, 
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.2,
    rotate: [0, -10, 10, -10, 0],
    transition: {
      duration: 0.5,
      ease: "easeInOut"
    }
  }
};

export function AboutPreview() {
  return (
    <section className="py-8 md:py-12">
      <h2 className="mb-6 md:mb-8 text-center text-2xl md:text-3xl font-bold px-4">About Me</h2>
      <div className="grid gap-8 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 px-4"
        >
          <div className="flex justify-center md:justify-start">
            <motion.div
              className="h-24 w-24 md:h-32 md:w-32 overflow-hidden rounded-full border-4 border-primary/10 shadow-xl"
              whileHover={{ scale: 1.05, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <Image
                src="https://avatars.githubusercontent.com/u/hikki78"
                alt="Megh"
                width={128}
                height={128}
                className="object-cover"
              />
            </motion.div>
          </div>
          <p className="text-center md:text-left text-sm md:text-base text-muted-foreground">
            Hey there! 👋 I&apos;m a passionate software developer from India with a love for creating elegant solutions to complex problems.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link href="/about">
              <Button variant="outline" className="group">
                Learn More About Me
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 px-4"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="rounded-lg border bg-card p-4 shadow-sm"
            >
              <motion.div
                initial="initial"
                animate="animate"
                whileHover="hover"
                variants={iconAnimation}
                className={`mb-2 ${feature.color}`}
              >
                <feature.icon className="h-6 w-6" />
              </motion.div>
              <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs text-muted-foreground">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}