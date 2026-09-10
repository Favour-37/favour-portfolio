"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PhotoReveal({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const onReady = () => setReady(true);
    window.addEventListener("page-transition-done", onReady);
    // Safety net only — covers dev/hot-reload edge cases where the event never dispatches.
    const fallback = setTimeout(() => setReady(true), 2500);
    return () => {
      window.removeEventListener("page-transition-done", onReady);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={ready ? { opacity: 1 } : {}}
      transition={{ duration: 0.9, delay, ease: [0.23, 1, 0.32, 1] }}
      className="absolute inset-0"
    >
      {children}
    </motion.div>
  );
}