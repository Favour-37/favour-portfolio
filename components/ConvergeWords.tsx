"use client";
import { motion } from "framer-motion";

const DIRECTIONS = [
  { x: -50, y: 0 },
  { x: 50, y: 0 },
  { x: 0, y: 50 },
];

export default function ConvergeWords({
  text,
  className,
  baseDelay = 0,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
}) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => {
        const dir = DIRECTIONS[i % DIRECTIONS.length];
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, x: dir.x, y: dir.y }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{
              duration: 0.7,
              delay: baseDelay + i * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="inline-block mr-[0.28em]"
          >
            {word}
          </motion.span>
        );
      })}
    </span>
  );
}