"use client";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

export default function ParallaxImage({
  children,
  speed = 1,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const { ref, y } = useParallax(speed);
  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-[-12%]">
        {children}
      </motion.div>
    </div>
  );
}