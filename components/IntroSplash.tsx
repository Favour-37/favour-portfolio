"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ROWS = 4;
const GRADIENT = "linear-gradient(120deg, #ef233c 0%, #2563eb 35%, #7c3aed 65%, #f5b301 100%)";

const HOLD_DURATION = 0.9;
const REVEAL_DURATION = 0.45;
const STAGGER_STEP = 0.02;

type Phase = "hold" | "reveal" | "done";

export default function IntroSplash() {
  const [phase, setPhase] = useState<Phase>("hold");
  const [cols, setCols] = useState(14);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setCols(isDesktop ? 14 : 7);
  }, []);

  useEffect(() => {
    const maxStagger = (cols - 1) * STAGGER_STEP;
    const t1 = setTimeout(() => setPhase("reveal"), HOLD_DURATION * 1000);
    const t2 = setTimeout(
      () => setPhase("done"),
      (HOLD_DURATION + REVEAL_DURATION + maxStagger) * 1000
    );
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [cols]);

  if (phase === "done") return null;

  return (
    <div className="fixed inset-0 z-[200] pointer-events-none flex flex-col">
      {Array.from({ length: ROWS }).map((_, row) => (
        <div key={row} className="flex flex-1">
          {Array.from({ length: cols }).map((_, col) => (
            <motion.div
              key={col}
              initial={{ scaleX: 1 }}
              animate={{ scaleX: phase === "reveal" ? 0 : 1 }}
              transition={{
                duration: REVEAL_DURATION,
                delay: phase === "reveal" ? col * STAGGER_STEP : 0,
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

      {phase === "hold" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img
            src="https://res.cloudinary.com/dxiefklmt/image/upload/w_192,h_192,c_fill,f_png/v1787844672/FB_favicon_pyhjsg.png"
            alt="Favour Baraka"
            className="w-16 h-16 rounded-full"
          />
        </motion.div>
      )}
    </div>
  );
}