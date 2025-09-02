"use client";

import { motion } from "framer-motion";
import { Terminal } from "@/components/terminal";
import { ContactSection } from "@/components/contact-section";
import { Github, Twitter, Youtube, Instagram, Calendar, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const contactCards = [
  {
    title: "GitHub",
    icon: Github,
    value: "@hikki78",
    link: "https://github.com/hikki78",
    color: "bg-[#333]/10 dark:bg-[#333]/20",
    textColor: "text-[#333] dark:text-white"
  },
  {
    title: "Twitter",
    icon: Twitter,
    value: "@hikki78",
    link: "https://x.com/hikki_78",
    color: "bg-blue-500/10 dark:bg-blue-500/20",
    textColor: "text-blue-500 dark:text-blue-400"
  },
  {
    title: "YouTube",
    icon: Youtube,
    value: "@Hikki78",
    link: "https://www.youtube.com/@hikki_78",
    color: "bg-red-500/10 dark:bg-red-500/20",
    textColor: "text-red-500 dark:text-red-400"
  },
  {
    title: "Instagram",
    icon: Instagram,
    value: "@hikki_78",
    link: "https://www.instagram.com/hikki_78/",
    color: "bg-pink-500/10 dark:bg-pink-500/20",
    textColor: "text-pink-500 dark:text-pink-400"
  },
  {
    title: "Cal.com",
    icon: Calendar,
    value: "Schedule a call",
    link: "https://cal.com/hikki78/quick-meet",
    color: "bg-blue-500/10 dark:bg-blue-500/20",
    textColor: "text-blue-500 dark:text-blue-400"
  },
  {
    title: "Location",
    icon: MapPin,
    value: "India",
    color: "bg-green-500/10 dark:bg-green-500/20",
    textColor: "text-green-500 dark:text-green-400"
  }
];

export default function Contact() {
  return (
    <div className="container mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      {/* Terminal Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto mb-12 max-w-3xl"
      >
        <Terminal />
      </motion.div>

      {/* Bento Grid Contact Cards */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mx-auto mb-16 max-w-4xl"
      >
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contactCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-xl ${card.color} p-6 transition-all hover:shadow-lg`}
            >
              {card.link ? (
                <Link href={card.link} target="_blank" rel="noopener noreferrer" className="block">
                  <CardContent card={card} />
                </Link>
              ) : (
                <CardContent card={card} />
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Contact Form Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mx-auto max-w-4xl"
      >
        <ContactSection />
      </motion.div>

      {/* Background Elements */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-primary/5 blur-3xl"
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
          className="absolute right-1/4 top-3/4 h-64 w-64 rounded-full bg-blue-500/5 blur-3xl"
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

function CardContent({ card }: { card: typeof contactCards[0] }) {
  const Icon = card.icon;
  return (
    <div className="relative z-10">
      <Icon className={`mb-3 h-8 w-8 ${card.textColor}`} />
      <h3 className="mb-2 font-semibold">{card.title}</h3>
      <p className={`text-sm ${card.textColor}`}>{card.value}</p>
      {card.link && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent to-transparent opacity-0 transition-opacity group-hover:from-primary/5 group-hover:to-transparent group-hover:opacity-100" />
      )}
    </div>
  );
}