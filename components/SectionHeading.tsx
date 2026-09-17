"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
};

export default function SectionHeading({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const ref = useRef<HTMLHeadingElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px 0px" });

  return (
    <motion.h2
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`title-underline ${inView ? "in-view" : ""} ${className}`}
    >
      {children}
    </motion.h2>
  );
}