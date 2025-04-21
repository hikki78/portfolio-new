// Shared projects data
import { Music, Scale, Gamepad2, Code2, Bot, Brain } from "lucide-react";

export const projects = [
  {
    title: "Mixie",
    description: "A powerful music player application with features like playlist management, equalizer, and offline support.",
    github: "https://github.com/hikki78/mixie.git",
    live: "https://mixie.vercel.app",
    icon: Music,
    tech: ["Next.js", "TypeScript", "TailwindCSS", "Web Audio API"]
  },
  {
    title: "Verdict",
    description: "AI-powered legal document analysis tool that helps understand and summarize legal documents.",
    github: "https://github.com/hikki78/verdict.git",
    video: "https://youtube.com/watch?v=demo",
    icon: Scale,
    tech: ["Python", "FastAPI", "React", "NLP"]
  },
  {
    title: "Pokemon Impact",
    description: "A modern Pokemon-inspired game with unique mechanics and real-time battles.",
    github: "https://github.com/hikki78/pokemon-impact.git",
    live: "https://pokemon-impact.vercel.app",
    icon: Gamepad2,
    tech: ["Unity", "C#", "WebGL", "Firebase"]
  },
  {
    title: "Flabbergasted",
    description: "Modern UI component library with neobrutalist design system and dark mode support.",
    github: "https://github.com/hikki78/flabbergasted",
    live: "https://flabbergasted.vercel.app",
    icon: Code2,
    tech: ["React", "TypeScript", "Tailwind", "Framer Motion"]
  },
  {
    title: "AI Chatbot",
    description: "Advanced chatbot powered by machine learning for natural conversations.",
    github: "https://github.com/hikki78/ai-chatbot",
    live: "https://ai-chatbot-demo.vercel.app",
    icon: Bot,
    tech: ["Python", "TensorFlow", "React", "WebSocket"]
  },
  {
    title: "Neural Net Visualizer",
    description: "Interactive tool for visualizing neural network architectures and training.",
    github: "https://github.com/hikki78/neural-viz",
    live: "https://neural-viz.vercel.app",
    icon: Brain,
    tech: ["D3.js", "React", "TypeScript", "Python"]
  }
] as const;