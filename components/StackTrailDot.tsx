"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";

export default function StackTrailDot() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 85%", "end 40%"],
    layoutEffect: false,
  });
  const left = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  const color = useTransform(scrollYProgress, [0, 1], ["#ef233c", "#f5b301"]);
  const shadow = useMotionTemplate`0 0 8px 2px ${color}`;

  return (
    <div ref={ref} className="relative h-2 mt-6 hidden sm:block">
      <motion.div
        style={{ left, opacity, backgroundColor: color, boxShadow: shadow }}
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full"
      />
    </div>
  );
}