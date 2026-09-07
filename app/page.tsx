"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Magnetic from "@/components/Magnetic";
import RevealWords from "@/components/RevealWords";
import ParallaxGlow from "@/components/ParallaxGlow";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

export default function Home() {
  return (
    <div className="relative">
      <ParallaxGlow className="glow-blue w-[500px] h-[500px] -top-40 -left-20" />
      <ParallaxGlow className="glow-purple w-[400px] h-[400px] top-20 right-0" />

      {/* HERO */}
      <section className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-sm text-blue-400 font-mono mb-6">
            Nairobi, Kenya
          </motion.p>

          <h1 className="text-5xl sm:text-6xl font-bold leading-[1.12] mb-8">
            <RevealWords text="I build things that" />
            <br />
            <RevealWords
              text="hold up under real use."
              className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
            />
          </h1>

          <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="text-lg text-gray-400 max-w-md leading-relaxed mb-10">
            Favour Baraka — full-stack developer and founder, building digital platforms with care and precision.
          </motion.p>

          <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
            className="flex flex-wrap gap-4">
            <Magnetic>
              <Link href="/work" className="btn-pill px-7 py-3 bg-blue-600 hover:bg-blue-500 text-sm font-medium inline-block">
                See my work
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="/about" className="btn-pill panel px-7 py-3 text-sm font-medium inline-block">
                About me
              </Link>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
          className="relative flex items-center justify-center"
        >
          <div className="orbit-wrap relative w-64 sm:w-72 md:w-80 h-64 sm:h-72 md:h-80">
            <div className="absolute inset-6 rounded-[2rem] overflow-hidden panel">
              <motion.div
                initial={{ scale: 1.15, filter: "blur(12px)" }}
                whileInView={{ scale: 1, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src="https://res.cloudinary.com/dxiefklmt/image/upload/v1787825099/WhatsApp_Image_2026-08-27_at_11.24.00_h3ckml.jpg"
                  alt="Favour Baraka"
                  fill
                  sizes="320px"
                  className="object-cover"
                  priority
                />
              </motion.div>
              <div className="absolute inset-0 z-10 flex">
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ y: "0%" }}
                    whileInView={{ y: i % 2 === 0 ? "-100%" : "100%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.15 + i * 0.08, ease: [0.76, 0, 0.24, 1] }}
                    className="flex-1 bg-gradient-to-br from-blue-600 to-purple-600"
                  />
                ))}
              </div>
            </div>
            <span className="orbit-item orbit-1 text-xs font-mono px-3 py-1.5 rounded-full panel">Engineer</span>
            <span className="orbit-item orbit-2 text-xs font-mono px-3 py-1.5 rounded-full panel">Founder</span>
            <span className="orbit-item orbit-3 text-xs font-mono px-3 py-1.5 rounded-full panel">President</span>
          </div>
        </motion.div>
      </section>

      {/* Scroll cue */}
      <div className="flex justify-center pb-16">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-1.5 rounded-full bg-white/50" />
        </motion.div>
      </div>

      {/* RECENT WORK */}
      <section className="relative max-w-4xl mx-auto px-6 pb-28">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="title-underline text-2xl font-semibold mb-10">
          Recent work
        </motion.h2>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Link href="/work/dominion-outreach" className="panel block rounded-2xl p-8 group">
            <span className="text-xs text-gray-500 font-mono">Case study</span>
            <h3 className="text-2xl font-semibold mt-3 mb-3 group-hover:text-blue-400 transition-colors">
              Dominion Outreach
            </h3>
            <p className="text-gray-400 leading-relaxed">
              A free discipleship platform helping new believers find their footing after saying yes to Jesus.
            </p>
          </Link>
        </motion.div>
      </section>

      {/* WHAT I BUILD */}
<section className="relative max-w-4xl mx-auto px-6 pb-28">
  <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
    className="title-underline text-2xl font-semibold mb-6">
    What I build
  </motion.h2>

  <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
    className="panel rounded-2xl p-8">
    <p className="text-gray-400 leading-relaxed mb-5 max-w-lg">
      Websites and digital platforms designed around what you actually need.
    </p>

    <div className="flex flex-wrap gap-x-3 gap-y-2 text-sm text-gray-500 font-mono mb-6">
      {["Business websites", "Portfolios", "E-commerce", "Booking systems", "Custom web applications"].map((item, i, arr) => (
        <span key={item} className="flex items-center gap-3">
          <span className="hover:text-gray-300 transition-colors">{item}</span>
          {i < arr.length - 1 && <span className="text-gray-700">·</span>}
        </span>
      ))}
    </div>

    <p className="text-gray-400 leading-relaxed mb-6 max-w-lg">
      From a simple online presence to a complex platform, I can help turn the idea into something real.
    </p>

    <Magnetic>
      <Link href="/contact" className="text-blue-400 text-sm font-medium hover:underline w-fit inline-flex items-center gap-1">
        Have something in mind? → Let&apos;s talk
      </Link>
    </Magnetic>
  </motion.div>
</section>

      {/* HOW I BUILD */}
      <section className="relative max-w-4xl mx-auto px-6 pb-28">
        <motion.h2 initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="title-underline text-2xl font-semibold mb-14">
          How I build
        </motion.h2>

        <div className="space-y-12">
          {[
            {
              n: "01",
              t: "Simple first.",
              d: "Everything starts as the smallest version that actually works, then earns its complexity.",
            },
            {
              n: "02",
              t: "No dead ends.",
              d: "If a user hits a wall, that's a bug — whether or not it throws an error.",
            },
            {
              n: "03",
              t: "Ship it, then watch it.",
              d: "Code that works on my machine isn't done. Code that survives real traffic is.",
            },
          ].map((item) => (
            <motion.div key={item.n} initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
              className="flex gap-6 sm:gap-10">
              <span className="text-sm font-mono text-gray-600 pt-1 shrink-0">{item.n}</span>
              <div>
                <h3 className="text-xl font-semibold mb-2">{item.t}</h3>
                <p className="text-gray-400 leading-relaxed max-w-lg">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* STACK */}
      <section className="relative max-w-4xl mx-auto px-6 pb-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-gray-500 font-mono border-t border-white/5 pt-10">
          {["TypeScript", "React", "Next.js", "NestJS", "Rust", "PostgreSQL", "Supabase"].map((tech, i, arr) => (
            <span key={tech} className="flex items-center gap-3">
              <span className="hover:text-gray-300 transition-colors">{tech}</span>
              {i < arr.length - 1 && <span className="text-gray-700">·</span>}
            </span>
          ))}
        </motion.div>
      </section>

      {/* BEYOND THE CODE */}
      <section className="relative max-w-4xl mx-auto px-6 pb-28">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="panel rounded-2xl overflow-hidden grid sm:grid-cols-5">
          <div className="sm:col-span-2 relative h-56 sm:h-auto">
            <Image
              src="https://res.cloudinary.com/dxiefklmt/image/upload/v1787825099/WhatsApp_Image_2026-08-27_at_11.33.46_h9mqxx.jpg"
              alt="Favour preaching"
              fill
              sizes="(max-width: 640px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
          <div className="sm:col-span-3 p-10 flex flex-col justify-center">
            <h2 className="text-xl font-semibold mb-4">Beyond the code</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              I&apos;m also the President of Dominion Outreach, a discipleship ministry helping young
              believers find their footing after saying yes to Jesus — online and on the street.
            </p>
            <Link href="/about" className="text-blue-400 text-sm font-medium hover:underline w-fit">
              More about me →
            </Link>
          </div>
        </motion.div>
      </section>

      {/* CLOSING */}
      <section className="relative max-w-4xl mx-auto px-6 pb-28 text-center">
        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="text-gray-400 mb-4">
          Building something? Or just want to say hello.
        </motion.p>
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}>
          <Link href="/contact" className="text-2xl font-semibold text-white hover:text-blue-400 transition-colors">
            Get in touch →
          </Link>
        </motion.div>
      </section>
    </div>
  );
}