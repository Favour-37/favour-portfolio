"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionTemplate, Variants } from "framer-motion";

interface StoryStep {
  n: string;
  t: string;
  d: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const } },
};

// Same four stops as PageTransition/IntroSplash's GRADIENT — keeps this
// effect visually tied to the site's transition identity.
const THEME_STOPS = [0, 0.35, 0.65, 1];
const THEME_COLORS = ["#ef233c", "#2563eb", "#7c3aed", "#f5b301"];

export default function ScrollStoryLine({ steps }: { steps: StoryStep[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
    layoutEffect: false,
  });
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const orbTop = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const orbOpacity = useTransform(scrollYProgress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);
  const orbColor = useTransform(scrollYProgress, THEME_STOPS, THEME_COLORS);
  const orbShadow = useMotionTemplate`0 0 12px 3px ${orbColor}`;

  return (
    <div ref={ref} className="relative space-y-12">
      <svg
        className="absolute left-3 sm:left-5 top-2 bottom-2 w-4 -translate-x-1/2 hidden sm:block overflow-visible"
      >
        <defs>
          <linearGradient id="storyLineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={THEME_COLORS[0]} />
            <stop offset="35%" stopColor={THEME_COLORS[1]} />
            <stop offset="65%" stopColor={THEME_COLORS[2]} />
            <stop offset="100%" stopColor={THEME_COLORS[3]} />
          </linearGradient>
          <filter id="storyLineGlow" x="-100%" y="-20%" width="300%" height="140%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <line x1="50%" y1="0" x2="50%" y2="100%" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
        <motion.line
          x1="50%" y1="0" x2="50%" y2="100%"
          stroke="url(#storyLineGradient)"
          strokeWidth="2"
          style={{ pathLength }}
          filter="url(#storyLineGlow)"
        />
      </svg>

      {/* Pulse-orb riding the head of the drawn line, color shifting with scroll position */}
      <motion.div
        style={{ top: orbTop, opacity: orbOpacity }}
        className="absolute left-3 sm:left-5 -translate-x-1/2 -translate-y-1/2 hidden sm:block pointer-events-none"
      >
        <motion.div
          animate={{ scale: [1, 1.6, 1] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ backgroundColor: orbColor, boxShadow: orbShadow }}
          className="w-2.5 h-2.5 rounded-full"
        />
      </motion.div>

      {steps.map((item) => (
        <motion.div
          key={item.n}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
          className="relative flex gap-6 sm:gap-10"
        >
          <span className="text-sm font-mono text-gray-600 pt-1 shrink-0 block w-6 sm:w-10">
            {item.n}
          </span>
          <div>
            <h3 className="text-xl font-semibold mb-2">{item.t}</h3>
            <p className="text-gray-400 leading-relaxed max-w-lg">{item.d}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}