"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Shuffle } from "lucide-react";

type Operation = {
  operator: string;
  calculate: (a: number, b: number) => number;
  symbol: string;
};

const operations: Operation[] = [
  { operator: "add", calculate: (a, b) => a + b, symbol: "+" },
  { operator: "subtract", calculate: (a, b) => a - b, symbol: "-" },
  { operator: "multiply", calculate: (a, b) => a * b, symbol: "×" },
];

export function Captcha({ onVerify }: { onVerify: (verified: boolean) => void }) {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [operation, setOperation] = useState<Operation>(operations[0]);
  const [userAnswer, setUserAnswer] = useState("");
  const [error, setError] = useState(false);
  const [verified, setVerified] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const generateNewNumbers = () => {
    // Adjust number ranges based on operation
    let n1, n2;
    const randomOp = operations[Math.floor(Math.random() * operations.length)];
    
    switch (randomOp.operator) {
      case "multiply":
        n1 = Math.floor(Math.random() * 10) + 1; // 1-10
        n2 = Math.floor(Math.random() * 5) + 1;  // 1-5
        break;
      case "subtract":
        n1 = Math.floor(Math.random() * 20) + 10; // 10-29
        n2 = Math.floor(Math.random() * 10) + 1;  // 1-10
        break;
      default: // addition
        n1 = Math.floor(Math.random() * 20) + 1; // 1-20
        n2 = Math.floor(Math.random() * 20) + 1; // 1-20
    }
    
    setNum1(n1);
    setNum2(n2);
    setOperation(randomOp);
    setUserAnswer("");
    setError(false);
  };

  useEffect(() => {
    generateNewNumbers();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctAnswer = operation.calculate(num1, num2);
    
    if (parseInt(userAnswer) === correctAnswer) {
      setVerified(true);
      onVerify(true);
    } else {
      setError(true);
      setAttempts(prev => prev + 1);
      if (attempts >= 2) {
        // After 3 failed attempts, generate a new problem
        setAttempts(0);
        generateNewNumbers();
      }
      onVerify(false);
    }
  };

  if (verified) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-lg border bg-card p-6 text-card-foreground shadow-sm"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">Please solve this CAPTCHA to view the email address</p>
          <motion.div
            key={`${num1}${operation.symbol}${num2}`}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="mt-4 flex items-center justify-center space-x-3 text-2xl font-bold"
          >
            <span>{num1}</span>
            <span className="text-primary">{operation.symbol}</span>
            <span>{num2}</span>
            <span>=</span>
            <span>?</span>
          </motion.div>
        </div>
        <div className="flex space-x-2">
          <Input
            type="number"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer"
            className={error ? "border-red-500" : ""}
            required
          />
          <Button type="submit">Verify</Button>
          <Button 
            type="button" 
            variant="outline" 
            onClick={generateNewNumbers}
            title="Get new problem"
          >
            <Shuffle className="h-4 w-4" />
          </Button>
        </div>
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-red-500"
          >
            Incorrect answer. {3 - attempts} attempts remaining before a new problem.
          </motion.p>
        )}
      </form>
    </motion.div>
  );
}