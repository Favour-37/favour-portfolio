"use client";
import { motion } from "framer-motion";
import { useParallax } from "@/hooks/useParallax";

export default function ParallaxLayer({
  children,
  speed = 1,
}: {
  children: React.ReactNode;
  speed?: number;
}) {
  const { ref, y } = useParallax(speed);
  return (
    <div ref={ref}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}