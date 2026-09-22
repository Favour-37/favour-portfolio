"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import TechTags from "@/components/TechTags";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

const DOMINION_LOGO =
  "https://res.cloudinary.com/dxiefklmt/image/upload/v1774102552/Dominion_Outreach_ft0cc0.png";
const GLORY_DOME_LOGO =
  "https://res.cloudinary.com/ziskvgfg/image/upload/v1789141708/ChatGPT_Image_Sep_11_2026_10_41_37_AM.png";

export default function WorkIndex() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24 space-y-8">
      <motion.h1 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="text-4xl font-bold mb-4">
        Work
      </motion.h1>
      <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="text-gray-400 mb-6">
        A few things I&apos;ve built. More coming as they&apos;re ready to show.
      </motion.p>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <Link href="/work/dominion-outreach" className="panel block rounded-2xl p-8 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 shadow-[0_0_12px_rgba(52,130,246,0.5)] ring-1 ring-blue-400/40">
              <Image src={DOMINION_LOGO} alt="Dominion Outreach" fill className="object-cover scale-[1.1]" />
            </div>
            <span className="text-xs text-gray-500 font-mono">Case study</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
            Dominion Outreach
          </h3>
          <p className="text-gray-400 leading-relaxed mb-5">
            Digital infrastructure for a discipleship ministry — bridging the gap after someone says yes to Jesus.
          </p>
          <TechTags tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]} />
        </Link>
      </motion.div>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <Link href="/work/glory-dome" className="panel block rounded-2xl p-8 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 bg-white shadow-[0_0_12px_rgba(52,130,246,0.5)] ring-1 ring-blue-400/40">
  <Image
    src={GLORY_DOME_LOGO}
    alt="Glory Dome Construction"
    fill
    className="object-cover scale-[1.6] object-[50%_20%]"
  />
</div>
            <span className="text-xs text-gray-500 font-mono">Case study</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
            Glory Dome Construction
          </h3>
          <p className="text-gray-400 leading-relaxed mb-5">
            Materials supply, machinery rental, and civil works for a Nairobi-based construction company.
          </p>
          <TechTags tags={["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]} />
        </Link>
      </motion.div>
    </div>
  );
}