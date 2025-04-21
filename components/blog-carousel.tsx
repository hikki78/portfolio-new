"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, Book } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Sample blog data - replace with your actual Medium blog posts
const blogPosts = [
  {
    title: "Understanding Modern Web Development",
    description: "A deep dive into the latest web development trends and best practices...",
    date: "Mar 15, 2024",
    link: "https://medium.com/@HikkiScript/understanding-modern-web-development",
    readTime: "5 min read"
  },
  {
    title: "The Future of TypeScript",
    description: "Exploring upcoming features and improvements in TypeScript...",
    date: "Mar 10, 2024",
    link: "https://medium.com/@HikkiScript/future-of-typescript",
    readTime: "7 min read"
  },
  {
    title: "Building with Next.js 14",
    description: "A comprehensive guide to the new features in Next.js 14...",
    date: "Mar 5, 2024",
    link: "https://medium.com/@HikkiScript/nextjs-14-guide",
    readTime: "6 min read"
  },
  // Add more blog posts here
];

export function BlogCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: 'start',
    slidesToScroll: 1,
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  useEffect(() => {
    if (emblaApi) {
      const autoplay = setInterval(() => {
        emblaApi.scrollNext();
      }, 5000);

      return () => clearInterval(autoplay);
    }
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex-[0_0_100%] min-w-0 px-4 md:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <Link href={post.link} target="_blank" rel="noopener noreferrer">
                <div className="group h-full rounded-xl border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Book className="h-4 w-4" />
                    <span className="text-sm">{post.date}</span>
                    <span className="text-sm">·</span>
                    <span className="text-sm">{post.readTime}</span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {post.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      
      <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          className="h-8 w-8 rounded-full"
        >
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          className="h-8 w-8 rounded-full"
        >
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}