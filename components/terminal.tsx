"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, Shuffle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

const commands = {
  "fetch megh info": `Name: Megh
Role: Software Developer
Location: India
Skills: Full-stack Development, System Design, Cloud Architecture
Languages: TypeScript, Rust, Python, Go
Interests: Open Source, DevOps, Blockchain`,
  "fetch projects": `Current Projects:
- Mixie: A powerful music player application
- Verdict: Legal document analysis tool
- Pokemon Impact: Modern Pokemon-inspired game
- StakeItUp: Blockchain staking platform`,
  "fetch contact": `Email: business.megh.me@gmail.com
Twitter: @HikkiScript
GitHub: @hikki78
Website: hikki.me`,
  help: "Available commands: fetch megh info, fetch projects, fetch contact, help, clear",
  clear: "clear",
};

export function Terminal() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState<string[]>(["Welcome! Type 'help' to see available commands"]);
  const [showCursor, setShowCursor] = useState(true);
  const { theme } = useTheme();

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const handleCommand = (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    const newOutput = [...output, `$ ${command}`];

    if (command === "clear") {
      setOutput([]);
    } else {
      const response = commands[command as keyof typeof commands];
      if (response) {
        setOutput([...newOutput, response]);
      } else {
        setOutput([...newOutput, "Command not found. Type 'help' for available commands"]);
      }
    }
    setInput("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleCommand(input);
    }
  };

  return (
    <motion.div
      className="relative w-full"
      whileHover={{ scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="relative overflow-hidden rounded-xl border-2 bg-card p-4 font-mono text-sm shadow-xl neo-brutalist">
        {/* Terminal Header */}
        <div className="mb-4 flex items-center justify-between border-b pb-2">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded-full bg-[#FF90E8] neo-brutalist-pink"></div>
            <div className="h-3 w-3 rounded-full bg-[#FFF500] neo-brutalist-yellow"></div>
            <div className="h-3 w-3 rounded-full bg-[#8FFF90] neo-brutalist-green"></div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleCommand("clear")}
              className="h-6 w-6 rounded-full hover:bg-accent"
              title="Clear terminal"
            >
              <Shuffle className="h-3 w-3 text-primary" />
            </Button>
            <TerminalIcon className="h-4 w-4 text-primary" />
          </div>
        </div>

        {/* Terminal Content */}
        <div className="h-48 overflow-y-auto scrollbar-hide terminal-text">
          {output.map((line, index) => (
            <div key={index} className="mb-1 whitespace-pre-wrap">
              {line.startsWith('$') ? (
                <span className="text-primary">{line}</span>
              ) : (
                line
              )}
            </div>
          ))}
          <div className="flex items-center">
            <span className="mr-2 text-primary">$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="flex-1 bg-transparent font-mono text-sm outline-none"
              spellCheck="false"
              placeholder="Type a command..."
            />
            {showCursor && (
              <span className="animate-pulse text-primary">▊</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}