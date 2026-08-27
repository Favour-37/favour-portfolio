"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="glow glow-blue w-[450px] h-[450px] -top-32 right-0" />

      <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-24 grid md:grid-cols-5 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="md:col-span-2"
        >
          <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden panel">
            <Image
              src="https://res.cloudinary.com/dxiefklmt/image/upload/v1787825099/WhatsApp_Image_2026-08-27_at_11.24.00_h3ckml.jpg"
              alt="Favour Baraka"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="md:col-span-3">
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-sm text-blue-400 font-mono mb-4">
            About
          </motion.p>

          <motion.h1 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-4xl sm:text-5xl font-bold leading-[1.15] mb-8">
            Favour Baraka
          </motion.h1>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-gray-500 font-mono mb-8 pb-8 border-b border-white/5">
            <span>Engineer</span>
            <span className="text-gray-700">·</span>
            <span>Founder, Pneubah</span>
            <span className="text-gray-700">·</span>
            <span>President, Dominion Outreach</span>
          </motion.div>

          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-lg text-gray-300 leading-relaxed">
            {/* PLACEHOLDER — needs your real words */}
            Write your own paragraph here — who you are, how you got into engineering, and how
            Dominion Outreach fits into your life. A few honest sentences is enough; I'll shape the
            phrasing, not the substance.
          </motion.p>
        </div>
      </section>

      <section className="relative max-w-3xl mx-auto px-6 pb-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="panel rounded-2xl p-10">
          <p className="text-gray-400 leading-relaxed mb-6">
            Curious what I&apos;ve actually built, or want to talk about a project?
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/work" className="btn-pill px-7 py-3 bg-blue-600 hover:bg-blue-500 text-sm font-medium">
              See my work
            </Link>
            <Link href="/contact" className="btn-pill panel px-7 py-3 text-sm font-medium">
              Get in touch
            </Link>
          </div>
        </motion.div>
      </section>
    </div>
  );
}