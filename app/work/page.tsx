"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

const LOGO_URL =
  "https://res.cloudinary.com/dxiefklmt/image/upload/v1774102552/Dominion_Outreach_ft0cc0.png";

export default function WorkIndex() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-24">
      <motion.h1 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="text-4xl font-bold mb-4">
        Work
      </motion.h1>
      <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
        className="text-gray-400 mb-14">
        A few things I&apos;ve built. More coming as they&apos;re ready to show.
      </motion.p>

      <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
        <Link href="/work/dominion-outreach" className="panel block rounded-2xl p-8 group">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-10 rounded-full overflow-hidden relative shrink-0 shadow-[0_0_12px_rgba(52,130,246,0.5)] ring-1 ring-blue-400/40">
              <Image src={LOGO_URL} alt="Dominion Outreach" fill className="object-cover scale-[1.1]" />
            </div>
            <span className="text-xs text-gray-500 font-mono">Case study</span>
          </div>
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-400 transition-colors">
            Dominion Outreach
          </h3>
          <p className="text-gray-400 leading-relaxed">
            Digital infrastructure for a discipleship ministry — bridging the gap after someone says yes to Jesus.
          </p>
        </Link>
      </motion.div>
    </div>
  );
}