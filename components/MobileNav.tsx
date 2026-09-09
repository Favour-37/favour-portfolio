"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
  const closeMenu = () => setOpen(false);
  window.addEventListener("app-navigate", closeMenu);
  return () => window.removeEventListener("app-navigate", closeMenu);
}, []);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        className="w-12 h-12 flex flex-col items-center justify-center gap-2 relative z-[70]"
      >
        <motion.span
          animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
          className="w-7 h-[2px] bg-white block"
        />
        <motion.span
          animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
          className="w-7 h-[2px] bg-white block"
        />
      </button>

      <AnimatePresence>
        {open && (
          <>
            {/* Scrim behind the dropdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setOpen(false)}
              style={{ backgroundColor: "rgba(5, 9, 15, 0.7)" }}
              className="fixed inset-0 z-[60]"
            />

            {/* Dropdown panel */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
              style={{ backgroundColor: "#0d1b2b" }}
              className="fixed top-[76px] left-4 right-4 z-[65] rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
            >
              {links.map((l, i) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className={`block px-6 py-4 text-lg font-medium hover:bg-white/5 hover:text-blue-400 transition-colors ${
                    i !== links.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}