"use client";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

const contacts = [
  {
    label: "Email",
    sub: "favourbaraka1@gmail.com",
    href: "mailto:favourbaraka1@gmail.com",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    sub: "Message me directly",
    href: "https://wa.me/254726023145",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.87 9.87 0 004.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2zm0 18.15h-.01a8.23 8.23 0 01-4.2-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.2 8.2 0 01-1.26-4.38c0-4.54 3.7-8.24 8.26-8.24 2.2 0 4.27.86 5.83 2.42a8.18 8.18 0 012.42 5.83c0 4.55-3.7 8.24-8.25 8.24zm4.52-6.17c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.17.25-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.39-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05s.88 2.38 1 2.54c.12.17 1.73 2.64 4.2 3.7.59.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.08.14-1.18-.06-.11-.23-.17-.48-.29z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    sub: "in/favour-baraka",
    href: "https://www.linkedin.com/in/favour-baraka-a27490408/",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.45 20.45h-3.56v-5.58c0-1.33-.02-3.04-1.85-3.04-1.86 0-2.15 1.45-2.15 2.94v5.68H9.34V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.38-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
      </svg>
    ),
  },
  {
    label: "X",
    sub: "@favour35049",
    href: "https://x.com/favour35049",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.22-6.82-5.97 6.82H1.66l7.73-8.83L1.25 2.25h6.83l4.72 6.24 5.44-6.24zm-1.16 17.52h1.83L7.02 4.13H5.06l12.02 15.64z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    sub: "github.com/Favour-37",
    href: "https://github.com/Favour-37",
    external: true,
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="glow glow-purple w-[450px] h-[450px] top-0 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-3xl mx-auto px-6 py-24 text-center">
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="text-sm text-blue-400 font-mono mb-4">
          Contact
        </motion.p>

        <motion.h1 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="text-4xl sm:text-5xl font-bold mb-6">
          Let&apos;s talk.
        </motion.h1>

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="text-gray-400 mb-16 max-w-md mx-auto leading-relaxed">
          Whatever it&apos;s about — a project, a question, or just to say hello — reach out through
          any of these.
        </motion.p>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
          {contacts.map((c) => (
           <a 
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="panel rounded-2xl p-6 flex flex-col gap-4"
            >
              <span className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400">
                {c.icon}
              </span>
              <div>
                <p className="font-medium">{c.label}</p>
                <p className="text-sm text-gray-500 mt-1 break-all">{c.sub}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </div>
  );
}