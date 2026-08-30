"use client";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.23, 1, 0.32, 1] } },
};

export default function AboutPage() {
  return (
    <div className="relative">
      <div className="glow glow-blue w-[450px] h-[450px] -top-32 right-0" />

      <section className="relative max-w-5xl mx-auto px-6 pt-16 pb-20 grid md:grid-cols-5 gap-14 items-center">
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
            I&apos;m a full-stack developer, builder, and lifelong learner. I love technology because
            I love building — taking an idea that exists only in your mind, breaking it down, and
            eventually watching it become something real that people can use.
          </motion.p>
        </div>
      </section>

      <section className="relative max-w-3xl mx-auto px-6 pb-8">
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="panel rounded-2xl p-10 mb-8">
          <h2 className="text-xl font-semibold mb-4">How I build</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            My work centers on TypeScript, JavaScript, React, Next.js, Tailwind CSS, NestJS, Rust,
            PostgreSQL, and Supabase. But beyond the tools, I&apos;m interested in understanding how
            things work, solving difficult problems, and learning from people who are better than me.
          </p>
          <p className="text-gray-300 leading-relaxed">
            I&apos;m currently studying Microprocessor Technology and Instrumentation, which has given
            me an appreciation for technology from both the software and systems side. Outside class
            and development work, I&apos;m usually learning something new, studying great products and
            developers, or building something just to see if I can.
          </p>
        </motion.div>

        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="panel rounded-2xl p-10 mb-8">
          <h2 className="text-xl font-semibold mb-4">Why it matters</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Technology isn&apos;t the most important part of who I am. I love Jesus, and my faith
            shapes how I see my life, my work, and the things I build. I&apos;m passionate about
            helping people know Christ and grow in their relationship with Him — which is a big part
            of why I founded and serve as President of Dominion Outreach, a discipleship ministry
            helping young believers find their footing after saying yes to Jesus, online and on the
            street.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Building, for me, isn&apos;t just about writing code. It&apos;s about stewardship,
            service, and impact — using what I have, learning what I don&apos;t know, and becoming
            better so I can build things that genuinely matter.
          </p>
        </motion.div>

        <motion.p initial="hidden" whileInView="show" viewport={{ once: true }} variants={fadeUp}
          className="text-center text-gray-400 italic mb-16">
          I&apos;m still learning. Still building. Still growing.
          <br />
          And by God&apos;s grace, I&apos;m just getting started.
        </motion.p>
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