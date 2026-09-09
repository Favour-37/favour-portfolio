"use client";
import { motion } from "framer-motion";

function getOffset(i: number) {
  const angle = (i * 137.5 * Math.PI) / 180;
  const radius = 60;
  return {
    x: Math.round(Math.cos(angle) * radius),
    y: Math.round(Math.sin(angle) * radius * 0.6),
    rotate: (i % 2 === 0 ? 1 : -1) * (8 + (i % 3) * 4),
  };
}

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
    <>
      {words.map((word, i) => {
        const { x, y, rotate } = getOffset(i);
        return (
          <motion.span
            key={i}
            initial={{ opacity: 0, x, y, rotate, scale: 0.7 }}
            animate={{ opacity: 1, x: 0, y: 0, rotate: 0, scale: 1 }}
            transition={{
              opacity: { duration: 0.5, delay: baseDelay + i * 0.09 },
              x: { type: "spring", stiffness: 120, damping: 14, delay: baseDelay + i * 0.09 },
              y: { type: "spring", stiffness: 120, damping: 14, delay: baseDelay + i * 0.09 },
              rotate: { type: "spring", stiffness: 100, damping: 12, delay: baseDelay + i * 0.09 },
              scale: { type: "spring", stiffness: 140, damping: 13, delay: baseDelay + i * 0.09 },
            }}
            className={`inline-block mr-[0.28em] ${className ?? ""}`}
            style={{ willChange: "transform, opacity" }}
          >
            {word}
          </motion.span>
        );
      })}
    </>
  );
}