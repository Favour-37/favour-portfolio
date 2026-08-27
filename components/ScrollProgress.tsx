"use client";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 80, damping: 24, mass: 0.3 });

  return (
    <div className="fixed left-6 top-24 bottom-24 w-px bg-white/5 hidden lg:block z-40">
      <motion.div
        style={{ scaleY, transformOrigin: "top" }}
        className="w-full h-full bg-gradient-to-b from-blue-400 to-purple-400"
      />
    </div>
  );
}