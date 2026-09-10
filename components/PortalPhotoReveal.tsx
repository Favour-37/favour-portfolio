"use client";
import { motion } from "framer-motion";

const SPARKLES = [
  { top: "8%", left: "12%", delay: 0.05, size: 6 },
  { top: "15%", left: "85%", delay: 0.15, size: 4 },
  { top: "80%", left: "90%", delay: 0.25, size: 5 },
  { top: "88%", left: "10%", delay: 0.1, size: 4 },
  { top: "50%", left: "-3%", delay: 0.3, size: 5 },
  { top: "45%", left: "103%", delay: 0.2, size: 6 },
];

export default function PortalPhotoReveal({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative w-full h-full">
      {/* Photo, revealed through an expanding circular portal */}
      <motion.div
        initial={{ clipPath: "circle(0% at 50% 50%)" }}
        whileInView={{ clipPath: "circle(150% at 50% 50%)" }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        {children}
      </motion.div>

      {/* Glowing portal-edge ring, expands and dissolves */}
      <motion.div
        initial={{ scale: 0.3, opacity: 0.9 }}
        whileInView={{ scale: 1.05, opacity: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 rounded-full pointer-events-none"
        style={{
          border: "2px solid rgba(129,140,248,0.9)",
          boxShadow: "0 0 30px 4px rgba(124,58,237,0.6)",
        }}
      />

      {/* Scan-line sweep, reading the image into being */}
      <motion.div
        initial={{ top: "-10%", opacity: 0 }}
        whileInView={{ top: "110%", opacity: [0, 1, 1, 0] }}
        viewport={{ once: true }}
        transition={{ duration: 1.1, ease: "easeInOut" }}
        className="absolute left-0 w-full h-[6%] pointer-events-none"
        style={{
          background: "linear-gradient(180deg, transparent, rgba(147,197,253,0.65), transparent)",
        }}
      />

      {/* Magic sparkle glints */}
      {SPARKLES.map((s, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: [0, 1, 0], scale: [0, 1.3, 0.8] }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 + s.delay }}
          className="absolute rounded-full pointer-events-none"
          style={{
            top: s.top,
            left: s.left,
            width: s.size,
            height: s.size,
            background: "radial-gradient(circle, #fff 0%, #a78bfa 60%, transparent 100%)",
            boxShadow: "0 0 8px 2px rgba(167,139,250,0.8)",
          }}
        />
      ))}
    </div>
  );
}