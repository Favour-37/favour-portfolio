"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ROWS = 4;
const GRADIENT = "linear-gradient(120deg, #ef233c 0%, #2563eb 35%, #7c3aed 65%, #f5b301 100%)";

export default function IntroSplash() {
  const [phase, setPhase] = useState<"logo" | "grid" | "done">("logo");
  const [cols, setCols] = useState(14);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setCols(isDesktop ? 14 : 7);
  }, []);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("grid"), 900);
    const t2 = setTimeout(() => setPhase("done"), 900 + (cols - 1) * 20 + 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [cols]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none">
      <AnimatePresence>
        {phase === "logo" && (
          <motion.div
            key="logo"
            initial={{ opacity: 0, y: -30, scale: 1.08 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: "#0a1928" }}
          >
            <span className="text-2xl font-semibold tracking-wide text-white">
              Favour Baraka
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {phase === "grid" && (
        <div className="absolute inset-0 flex flex-col">
          {Array.from({ length: ROWS }).map((_, row) => (
            <div key={row} className="flex flex-1">
              {Array.from({ length: cols }).map((_, col) => (
                <motion.div
                  key={col}
                  initial={{ scaleX: 1 }}
                  animate={{ scaleX: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: col * 0.02,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  style={{
                    transformOrigin: row % 2 === 0 ? "left" : "right",
                    backgroundImage: GRADIENT,
                    backgroundSize: `${cols * 100}% ${ROWS * 100}%`,
                    backgroundPosition: `${(col / (cols - 1)) * 100}% ${(row / (ROWS - 1)) * 100}%`,
                  }}
                  className="flex-1 h-full"
                />
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}