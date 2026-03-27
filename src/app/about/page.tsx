"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#070710] pt-[57px]">

      {/* Hero / large quote area */}
      <div className="relative overflow-hidden border-b border-white/[0.06] py-24 sm:py-40">
        {/* Decorative grid lines */}
        <div className="pointer-events-none absolute inset-0">
          <div
            className="absolute left-1/2 top-0 bottom-0 w-[1px]"
            style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.03) 30%, rgba(255,255,255,0.03) 70%, transparent)" }}
          />
          <div
            className="absolute left-0 right-0"
            style={{
              top: "50%",
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.03) 20%, rgba(255,255,255,0.03) 80%, transparent)",
            }}
          />
          {/* Lime diagonal line */}
          <div
            className="absolute"
            style={{
              width: "1px",
              height: "300px",
              background: "linear-gradient(180deg, transparent, #C8FF00 50%, transparent)",
              transform: "rotate(-30deg)",
              top: "15%",
              right: "15%",
              opacity: 0.15,
            }}
          />
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <div className="mb-8 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#C8FF00]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
                About
              </span>
            </div>

            {/* Big quote line */}
            <h1 className="text-[clamp(2.2rem,6vw,5rem)] font-black leading-[1.05] tracking-tight text-white">
              We make AI{" "}
              <span className="relative inline-block text-[#C8FF00]">
                actually useful.
              </span>
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Body text */}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="grid gap-16 sm:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mb-6 text-[1.05rem] leading-[1.8] text-white/65">
              We&apos;re a small studio obsessed with making AI actually useful. We build
              production-grade products for clients, and we build tools for ourselves
              that we end up shipping publicly. Everything we make is designed to solve
              real problems, not demo problems.
            </p>

            <p className="text-[1.05rem] leading-[1.8] text-white/65">
              Based in Costa Rica. Working everywhere.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-between"
          >
            {/* Principles */}
            <div className="flex flex-col gap-0">
              {[
                { n: "01", text: "Ship real systems, not prototypes." },
                { n: "02", text: "Build with AI, not around it." },
                { n: "03", text: "If it works for us, it'll work for you." },
              ].map((item) => (
                <div key={item.n} className="border-t border-white/[0.07] py-5 flex items-start gap-5">
                  <span className="font-mono text-xs text-[#C8FF00] shrink-0 mt-0.5">
                    {item.n}
                  </span>
                  <p className="text-sm leading-relaxed text-white/45">{item.text}</p>
                </div>
              ))}
              <div className="border-t border-white/[0.07]" />
            </div>

            <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-white/25 italic">
              More coming soon.
            </p>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
