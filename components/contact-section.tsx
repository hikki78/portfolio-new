"use client";

import { useState } from "react";
import Link from "next/link";
import { Twitter, Youtube, Instagram, Calendar, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Captcha } from "@/components/captcha";

export function ContactSection() {
  const [isVerified, setIsVerified] = useState(false);
  const email = "business.megh.me@gmail.com";

  return (
    <section className="py-12">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-8 text-3xl font-bold">Get in Touch</h2>
        <div className="space-y-8">
          <div className="flex flex-col items-center justify-center space-y-6">
            <p className="text-lg">
              📫 Contact me at{" "}
              {isVerified ? (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <Link href={`mailto:${email}`} className="text-primary hover:underline">
                    {email}
                  </Link>
                </motion.span>
              ) : (
                <span className="text-muted-foreground">[Complete CAPTCHA to view email]</span>
              )}
            </p>
            <AnimatePresence>
              {!isVerified && (
                <motion.div
                  className="w-full max-w-md"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                >
                  <Captcha onVerify={setIsVerified} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="https://x.com/HikkiScript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md bg-black px-4 py-2 text-white hover:bg-black/80 transition-colors"
              >
                <Twitter className="h-4 w-4" />
                <span>X</span>
              </Link>
              <Link
                href="https://youtube.com/@HikkiScript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md bg-red-600 px-4 py-2 text-white hover:bg-red-700 transition-colors"
              >
                <Youtube className="h-4 w-4" />
                <span>YouTube</span>
              </Link>
              <Link
                href="https://instagram.com/HikkiScript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-white hover:from-purple-600 hover:to-pink-600 transition-colors"
              >
                <Instagram className="h-4 w-4" />
                <span>Instagram</span>
              </Link>
              <Link
                href="https://cal.com/HikkiScript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
              >
                <Calendar className="h-4 w-4" />
                <span>Schedule a Call</span>
              </Link>
              <Link
                href="https://bento.me/HikkiScript"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 rounded-md bg-purple-600 px-4 py-2 text-white hover:bg-purple-700 transition-colors"
              >
                <div className="h-4 w-4 relative">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
                    <path d="M18 3H6C4.34315 3 3 4.34315 3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3ZM8 7H16V11H8V7ZM8 13H16V17H8V13Z" />
                  </svg>
                </div>
                <span>Bento</span>
              </Link>
            </div>
            <p>
              ⚙ You can find my all socials{" "}
              <Link
                href="https://hikki.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                here
              </Link>
            </p>
          </div>

          <div className="mt-8">
            <img
              src="https://i.imgur.com/dBaSKWF.gif"
              height="20"
              width="100%"
              alt="divider"
            />
          </div>
        </div>
      </div>
    </section>
  );
}