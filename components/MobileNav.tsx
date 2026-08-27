"use client";
import { useState } from "react";
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

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="w-10 h-10 flex flex-col items-center justify-center gap-1.5"
      >
        <span className="w-6 h-px bg-white" />
        <span className="w-6 h-px bg-white" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-[#0a1928]/98 backdrop-blur-xl flex flex-col"
          >
            <div className="flex justify-end p-6">
              <button
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="w-10 h-10 flex items-center justify-center text-2xl"
              >
                ×
              </button>
            </div>
            <nav className="flex-1 flex flex-col items-center justify-center gap-8">
              {links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <Link
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="text-3xl font-semibold hover:text-blue-400 transition-colors"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}