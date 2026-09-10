"use client";
import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

export function useParallax(speed: number): { ref: React.RefObject<HTMLDivElement | null>; y: MotionValue<string> } {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const range = 20 * speed;
  const y = useTransform(scrollYProgress, [0, 1], [`-${range}%`, `${range}%`]);
  return { ref, y };
}