"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TechTags from "@/components/TechTags";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

const LOGO_URL =
  "https://res.cloudinary.com/ziskvgfg/image/upload/v1789141708/ChatGPT_Image_Sep_11_2026_10_41_37_AM.png";

export default function GloryDomeCaseStudy() {
  return (
    <div className="relative max-w-3xl mx-auto px-6 py-24 overflow-hidden">
      <div className="glow glow-blue w-[400px] h-[400px] top-0 right-0 opacity-70"
        style={{ background: "radial-gradient(circle, rgba(245,179,1,0.14) 0%, transparent 70%)" }} />

      <Link href="/work" className="relative text-sm text-blue-400 hover:underline">
        ← Work
      </Link>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative flex items-center gap-5 mt-8 mb-3">
        <div className="w-14 h-14 rounded-full overflow-hidden relative shrink-0 bg-white shadow-[0_0_16px_rgba(52,130,246,0.5)] ring-1 ring-blue-400/40">
          <Image
            src={LOGO_URL}
            alt="Glory Dome Construction"
            fill
            sizes="56px"
            className="object-cover scale-[1.6] object-[50%_20%]"
          />
        </div>
        <h1 className="text-4xl font-bold">Glory Dome Construction</h1>
      </motion.div>

      <p className="relative text-gray-400 mb-1 ml-[76px]">
        Building with purpose. All for God’s glory.
      </p>
      <p className="relative text-sm text-amber-400/80 font-mono mb-6 ml-[76px]">
        In progress
      </p>

      <div className="relative ml-[76px] mb-14">
        <TechTags tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Cloudflare"]} />
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-6">
        <h2 className="text-xl font-semibold mb-4">Who they are</h2>
        <p className="text-gray-300 leading-relaxed">
          Glory Dome Construction Limited is a Nairobi-based company that supplies the materials,
          machinery and workmanship that keep projects moving. It covers materials supply,
          machinery rental, civil works, steel fabrication, container conversions, and building
          from the ground up, from private roads and car yards to full headquarters buildings.
          Its catchphrase is “All for God’s glory”, and Jesus is at the centre of how the
          company works.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-6">
        <h2 className="text-xl font-semibold mb-4">Why the website had to say that first</h2>
        <p className="text-gray-300 leading-relaxed">
          A visitor has about thirty seconds to decide whether to trust a construction company.
          Glory Dome is not a normal contractor, and the site had to say so before anything else.
          The hero leads with the faith, then makes it plain this is a construction company. A
          different NIV verse greets visitors each day, chosen so the same verse never lands on
          the same date every year.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-10">
        <h2 className="text-xl font-semibold mb-4">What I built</h2>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>
            A multi-page site: Home, About, Services, Projects, Leadership, Careers, News,
            Testimonials and Contact. Services covers ten categories, each with a photo gallery.
          </li>
          <li>
            Project pages with a drag-to-reveal before/after slider, showing a building going from
            cleared bush to finished structure.
          </li>
          <li>
            A blueprint look throughout: fine drafting lines that frame each section, and a truck
            that hauls a branded panel across the screen between pages.
          </li>
          <li>
            Real client reviews, and maps that load only when a visitor taps them, so nothing is
            sent to Google until they choose.
          </li>
          <li>
            A privacy policy, SEO basics, and a launch switch that keeps the site hidden from
            search engines until the day it goes live. It runs on Cloudflare.
          </li>
        </ul>
      </motion.div>
    </div>
  );
}