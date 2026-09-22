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
    className="object-cover scale-[1.6] object-[50%_20%]"
  />
</div>
        <h1 className="text-4xl font-bold">Glory Dome Construction</h1>
      </motion.div>

      <p className="relative text-gray-400 mb-1 ml-[76px]">
        Materials supply, machinery rental, and civil works — built on excellence and faith.
      </p>
      <p className="relative text-sm text-amber-400/80 font-mono mb-6 ml-[76px]">
        In progress
      </p>

      <div className="relative ml-[76px] mb-14">
        <TechTags tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]} />
      </div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-6">
        <h3 className="text-xl font-semibold mb-4">Who they are</h3>
        <p className="text-gray-300 leading-relaxed">
          Glory Dome Construction Ltd is a first-class supplier of construction materials and
          machinery, serving both bulk and light works — from road construction to residential and
          commercial building. The company specializes in materials such as ballast and sandstone,
          and supplies ready-mix concrete for projects across Kenya.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-6">
        <h3 className="text-xl font-semibold mb-4">What they supply</h3>
        <p className="text-gray-300 leading-relaxed mb-3">
          <span className="text-white font-medium">Materials:</span> Gravel, cement, hardcore, VSI,
          river sand, boulders, backfilling, and landscaping materials.
        </p>
        <p className="text-gray-300 leading-relaxed">
          <span className="text-white font-medium">Machinery rental:</span> Excavators, backhoes,
          rollers, graders, compactor machines, drilling machines, tipper trucks, and hacking
          services.
        </p>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="relative panel rounded-2xl p-8 mb-10">
        <h3 className="text-xl font-semibold mb-4">What they build</h3>
        <ul className="space-y-2 text-gray-300 list-disc list-inside">
          <li>Private roads and parking areas.</li>
          <li>Showrooms and warehouses.</li>
          <li>Carwash facilities.</li>
        </ul>
      </motion.div>
    </div>
  );
}