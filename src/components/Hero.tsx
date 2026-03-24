"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function Hero() {
  const scrollToWork = () => {
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#070710]">
      {/* Subtle radial lime glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C8FF00]/[0.06] blur-[200px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-white/40"
        >
          AI Research &amp; Development Studio · Costa Rica
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mb-8 text-7xl font-black leading-none tracking-tight text-white sm:text-8xl md:text-9xl"
        >
          AI that ships.
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-12 max-w-2xl text-lg text-white/60 sm:text-xl"
        >
          We build AI-powered products for clients and tools for the ecosystem.
          Based in Costa Rica. Deployed everywhere.
        </motion.p>

        <motion.div variants={fadeUp} className="flex items-center justify-center gap-6">
          <motion.button
            onClick={scrollToWork}
            className="inline-flex items-center rounded-full bg-[#C8FF00] px-8 py-4 text-sm font-semibold text-black transition-opacity hover:opacity-90"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            See our work
          </motion.button>

          <a
            href="#open-source"
            className="text-sm text-white/40 transition-colors hover:text-white/60"
          >
            Open source →
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
