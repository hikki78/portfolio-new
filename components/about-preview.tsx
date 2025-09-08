"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Camera, Palette, Wrench, BookOpen, HardDrive, Video } from "lucide-react";
import { TechStack } from "@/components/tech-stack";

const features = [
  { 
    icon: Code2, 
    title: "Development & Design", 
    desc: "Building modern web applications",
    color: "text-blue-500"
  },
  { 
    icon: Camera, 
    title: "Photography & Videography", 
    desc: "Capturing moments and stories",
    color: "text-purple-500"
  },
  { 
    icon: HardDrive, 
    title: "Tech & Hardware", 
    desc: "Exploring cutting-edge technology",
    color: "text-green-500"
  },
  { 
    icon: BookOpen, 
    title: "Researching & Blogging", 
    desc: "Sharing knowledge and insights",
    color: "text-amber-500"
  }
];

const otherExpertise = [
  { name: "Photoshop", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/photoshop/photoshop-plain.svg" },
  { name: "Lightroom", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b6/Adobe_Photoshop_Lightroom_CC_logo.svg" },
  { name: "Excel", icon: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg" },
  { name: "Final Cut Pro", icon: "https://upload.wikimedia.org/wikipedia/en/9/9f/2015_Final_Cut_Pro_Logo.png" },
  { name: "Figma", icon: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg" },
  { name: "& others", icon: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NCA2NCIgZmlsbD0iIzY0NzQ4QiI+PHBhdGggZD0iTTMyIDJDMTUuNDMzIDIgMiAxNS40MzMgMiAzMnMxMy40MzMgMzAgMzAgMzAgMzAtMTMuNDMzIDMwLTMwUzQ4LjU2NyAyIDMyIDJ6bTAgNTRDMTYuNTM2IDU2IDQgNDMuNDY0IDQgMjhTMTYuNTM2IDAgMzIgMHMyOCAxMi41MzYgMjggMjgtMTIuNTM2IDI4LTI4IDI4eiIvPjxwYXRoIGQ9Ik0zMiAxNmE0IDQgMCAxIDAgMCA4IDQgNCAwIDAgMCAwLTh6bTAgMTJhNCA0IDAgMSAwIDAgOCA0IDQgMCAwIDAgMC04em0wIDEyYTQgNCAwIDEgMCAwIDggNCA0IDAgMCAwIDAtOHoiLz48L3N2Zz4=" },
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
      
      {/* Part 1: Photo on left, about text on right */}
      <div className="grid gap-8 md:grid-cols-2 items-center mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center px-4"
        >
          <motion.div
            className="h-32 w-32 md:h-48 md:w-48 overflow-hidden rounded-full border-4 border-primary/10 shadow-xl"
            whileHover={{ scale: 1.05, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Image
              src="/profile-photo.jpg"
              alt="Megh"
              width={192}
              height={192}
              className="object-cover"
            />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4 px-4"
        >
          <p className="text-sm md:text-base text-muted-foreground">
            Hey there! 👋 I&apos;m a passionate software developer from India with a love for creating elegant solutions to complex problems.
          </p>
          <div className="flex">
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
      </div>
      
      {/* Part 2: Tech Stack Section */}
      <div className="mb-10">
        <h3 className="mb-4 text-center text-xl md:text-2xl font-semibold px-4">Tech Stack I Use:</h3>
        <div className="px-4 scale-90 transform origin-top">
          <TechStack />
        </div>
      </div>
      
      {/* Part 3: Skills and Other Expertise */}
      <div className="grid gap-4 md:grid-cols-2 items-start">
        {/* Left side - My Interests */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="px-4"
        >
          <h3 className="text-sm font-semibold mb-2">My Interests</h3>
          <div className="grid grid-cols-2 gap-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="rounded-lg border bg-card p-2 shadow-sm flex items-start gap-1.5"
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  variants={iconAnimation}
                  className={`${feature.color} flex-shrink-0 mt-0.5`}
                >
                  <feature.icon className="h-3.5 w-3.5" />
                </motion.div>
                <div>
                  <h3 className="text-[11px] font-semibold leading-tight">{feature.title}</h3>
                  <p className="text-[9px] text-muted-foreground leading-tight">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Right side - Other Expertise */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="px-4"
        >
          <h3 className="text-sm font-semibold mb-2">Other Expertise</h3>
          <div className="grid grid-cols-3 gap-2">
            {otherExpertise.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col items-center gap-1.5"
              >
                <div className="relative h-5 w-5 mb-1">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="object-contain"
                  />
                </div>
                <span className="text-[10px] font-semibold text-center">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}