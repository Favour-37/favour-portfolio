"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ParallaxGlow from "@/components/ParallaxGlow";
import ParallaxLayer from "@/components/ParallaxLayer";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

const LOGO_URL =
  "https://res.cloudinary.com/dxiefklmt/image/upload/v1774102552/Dominion_Outreach_ft0cc0.png";

export default function DominionCaseStudy() {
  return (
    <div className="relative max-w-3xl mx-auto px-6 py-24 overflow-hidden">
      <ParallaxLayer speed={0.3}>
        <div className="pointer-events-none absolute -top-20 -right-32 w-[420px] h-[420px] opacity-[0.05] blur-sm">
          <Image src={LOGO_URL} alt="" fill className="object-contain" />
        </div>
      </ParallaxLayer>
      <ParallaxGlow className="glow-purple w-[400px] h-[400px] top-0 right-0" />

      <Link href="/work" className="relative text-sm text-blue-400 hover:underline">
        ← Work
      </Link>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative flex items-center gap-5 mt-8 mb-3">
        <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 shadow-[0_0_16px_rgba(52,130,246,0.5)] ring-1 ring-blue-400/40">
          <Image src={LOGO_URL} alt="Dominion Outreach" fill className="object-cover scale-[1.1]" />
        </div>
        <h1 className="text-4xl font-bold">Dominion Outreach</h1>
      </motion.div>

      <p className="relative text-gray-400 mb-14 ml-[76px]">
        Digital infrastructure for a discipleship ministry.
      </p>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-6">
        <h3 className="text-xl font-semibold mb-4">Why it exists</h3>
        <p className="text-gray-300 leading-relaxed">
          Saying yes to Jesus is not the destination, it is the beginning. Dominion Outreach exists to
          help bridge the gap between that first yes and a life of real discipleship, providing free
          platforms to help young and growing believers know the Saviour and enjoy the journey with
          others alongside them.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-6">
        <h3 className="text-xl font-semibold mb-4">Mission &amp; vision</h3>
        <p className="text-gray-300 leading-relaxed mb-3">
          <span className="text-white font-medium">Mission:</span> Helping believers, a step at a
          time, in partnership with the Holy Spirit, toward intimacy with the Father.
        </p>
        <p className="text-gray-300 leading-relaxed">
          <span className="text-white font-medium">Vision:</span> To raise a generation that seeks
          the face of the Father and witnesses Jesus enthroned in the hearts of His children.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-10">
        <h3 className="text-xl font-semibold mb-4">What I built</h3>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>A lightweight, fast-loading site accessible on any connection, anywhere.</li>
          <li>Mobile-first layout, since most visitors arrive from a phone during outreach.</li>
          <li>A calm, focused dark theme so the message stays the point, not the interface.</li>
        </ul>
      </motion.div>

      <a href="https://dominionoutreach.vercel.app/" target="_blank" rel="noopener noreferrer"
        className="relative btn-pill inline-block px-7 py-3 bg-blue-600 hover:bg-blue-500 text-sm font-medium">
        Visit the live site
      </a>
    </div>
  );
}