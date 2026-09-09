"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const ROWS = 4;
const GRADIENT = "linear-gradient(120deg, #ef233c 0%, #2563eb 35%, #7c3aed 65%, #f5b301 100%)";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isFirst = useRef(true);
  const [showShutter, setShowShutter] = useState(false);
  const [cols, setCols] = useState(14);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setCols(isDesktop ? 14 : 7);
  }, []);

  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }
    setShowShutter(true);
    const maxDelay = (cols - 1) * 0.025;
    const totalMs = (0.55 + maxDelay) * 1000 + 100;
    const t = setTimeout(() => setShowShutter(false), totalMs);
    return () => clearTimeout(t);
  }, [pathname, cols]);

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>

      {showShutter && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
          {Array.from({ length: ROWS }).map((_, row) => (
            <div key={row} className="flex flex-1">
              {Array.from({ length: cols }).map((_, col) => (
                <motion.div
                  key={col}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: [0, 1, 1, 0] }}
                  transition={{
                    duration: 0.55,
                    delay: col * 0.025,
                    times: [0, 0.4, 0.6, 1],
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
    </>
  );
}