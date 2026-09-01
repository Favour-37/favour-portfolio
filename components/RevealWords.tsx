"use client";
import { motion } from "framer-motion";

export default function RevealWords({ text, className }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <span className={className}>
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.5, delay: i * 0.07, ease: [0.23, 1, 0.32, 1] }}
          className="inline-block mr-[0.28em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  );
}