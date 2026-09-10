"use client";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const ROWS = 4;
const GRADIENT = "linear-gradient(120deg, #ef233c 0%, #2563eb 35%, #7c3aed 65%, #f5b301 100%)";

const COVER_DURATION = 0.45;
const REVEAL_DURATION = 0.45;
const STAGGER_STEP = 0.02;
const HOLD_DURATION = 0.55;

type Phase = "idle" | "cover" | "hold" | "reveal";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [phase, setPhase] = useState<Phase>("idle");
  const [cols, setCols] = useState(14);
  const pendingHref = useRef<string | null>(null);
  const prevPhase = useRef<Phase>("idle");

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 768px)").matches;
    setCols(isDesktop ? 14 : 7);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const anchor = (e.target as HTMLElement)?.closest("a");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href || !href.startsWith("/") || anchor.target === "_blank") return;
      if (href === pathname) return;

      e.preventDefault();
      e.stopPropagation();
      pendingHref.current = href;
      setPhase("cover");
      window.dispatchEvent(new CustomEvent("app-navigate"));
    };
    document.addEventListener("click", handleClick, true);
    return () => document.removeEventListener("click", handleClick, true);
  }, [pathname]);

  useEffect(() => {
    if (phase !== "cover") return;
    const maxStagger = (cols - 1) * STAGGER_STEP;
    const t = setTimeout(() => {
      if (pendingHref.current) {
        router.push(pendingHref.current);
        pendingHref.current = null;
      }
      setPhase("hold");
    }, (COVER_DURATION + maxStagger) * 1000);
    return () => clearTimeout(t);
  }, [phase, cols, router]);

  useEffect(() => {
    if (phase !== "hold") return;
    const t = setTimeout(() => setPhase("reveal"), HOLD_DURATION * 1000);
    return () => clearTimeout(t);
  }, [phase]);

  useEffect(() => {
    if (phase !== "reveal") return;
    const maxStagger = (cols - 1) * STAGGER_STEP;
    const t = setTimeout(() => setPhase("idle"), (REVEAL_DURATION + maxStagger) * 1000);
    return () => clearTimeout(t);
  }, [phase, cols]);

  // Fires only when a real cover→hold→reveal cycle just finished —
  // not on first mount, so it never fires ahead of IntroSplash on load.
  useEffect(() => {
    if (prevPhase.current !== "idle" && phase === "idle") {
      window.dispatchEvent(new CustomEvent("page-transition-done"));
    }
    prevPhase.current = phase;
  }, [phase]);

  const overlayVisible = phase !== "idle";
  const tileScale = phase === "reveal" ? 0 : 1;

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

      {overlayVisible && (
        <div className="fixed inset-0 z-[100] pointer-events-none flex flex-col">
          {Array.from({ length: ROWS }).map((_, row) => (
            <div key={row} className="flex flex-1">
              {Array.from({ length: cols }).map((_, col) => (
                <motion.div
                  key={col}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: tileScale }}
                  transition={{
                    duration: phase === "reveal" ? REVEAL_DURATION : COVER_DURATION,
                    delay: col * STAGGER_STEP,
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
              transition={{ duration: 0.2 }}
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
      )}
    </>
  );
}