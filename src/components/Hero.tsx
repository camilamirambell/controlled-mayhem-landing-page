"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" as const },
  },
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[calc(100vh-57px)] items-center overflow-hidden bg-background">

      {/* Decorative ghost "CM" watermark */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="pointer-events-none absolute right-[-2vw] top-1/2 -translate-y-1/2 select-none font-sans text-[clamp(16rem,38vw,32rem)] font-black leading-none tracking-tighter text-white/[0.022]"
        aria-hidden="true"
      >
        CM
      </motion.div>

      {/* Subtle structural grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Diagonal lime accent line */}
        <div
          className="absolute"
          style={{
            width: "1px",
            height: "420px",
            background: "linear-gradient(180deg, transparent, #C8FF00 40%, rgba(200,255,0,0.4) 70%, transparent)",
            transform: "rotate(-22deg)",
            top: "8%",
            left: "62%",
            opacity: 0.25,
          }}
        />
        {/* Horizontal grid line — upper */}
        <div
          className="absolute left-0 right-0"
          style={{
            top: "30%",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 20%, rgba(255,255,255,0.04) 80%, transparent 100%)",
          }}
        />
      </div>

      <motion.div
        className="relative z-10 mx-auto w-full max-w-6xl px-6 py-32"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp} className="mb-8 flex items-center gap-4">
          <div className="h-[1px] w-12 bg-[#C8FF00]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
            AI Product Studio · Costa Rica
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={fadeUp}
          className="mb-10 text-[clamp(4.5rem,13vw,10.5rem)] leading-[0.92] tracking-[-0.02em] text-white"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          AI that{" "}
          <span className="relative inline-block italic">
            ships.
            <span
              className="absolute -bottom-2 left-0 h-[4px] w-full"
              style={{
                background: "linear-gradient(90deg, #C8FF00, rgba(200,255,0,0.3))",
              }}
            />
          </span>
        </motion.h1>

        {/* Separator */}
        <motion.div variants={fadeUp} className="hr-line mb-10 max-w-[400px]" />

        {/* Subtext + CTA */}
        <motion.div variants={fadeUp} className="flex flex-col gap-10 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-md text-[1.05rem] leading-[1.65] text-white/65">
            We build AI products that run in production — for clients who need them
            and as open-source tools for the ecosystem. From Costa Rica to everywhere.
          </p>

          <div className="flex flex-col items-start gap-4 sm:items-end">
            <motion.button
              onClick={scrollToWork}
              className="group inline-flex items-center gap-3 rounded-none border border-[#C8FF00] bg-[#C8FF00] px-7 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-all hover:bg-transparent hover:text-[#C8FF00]"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 500, damping: 25 }}
            >
              See our work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </motion.button>

            <a
              href="#open-source"
              className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
            >
              Open source ↓
            </a>
          </div>
        </motion.div>

        {/* Bottom stats row */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/[0.06] pt-8"
        >
          {[
            { label: "Products in production", value: "06" },
            { label: "Going open source", value: "04" },
            { label: "Hallucinations tolerated", value: "00" },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="font-mono text-2xl font-medium text-white/80">
                {stat.value}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/30">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
