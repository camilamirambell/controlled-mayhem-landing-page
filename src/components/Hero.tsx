"use client";

import { motion } from "framer-motion";

const floatingShapes = [
  { size: 120, x: "10%", y: "20%", delay: 0, duration: 6 },
  { size: 80, x: "80%", y: "15%", delay: 1, duration: 8 },
  { size: 60, x: "70%", y: "70%", delay: 2, duration: 7 },
  { size: 100, x: "20%", y: "75%", delay: 0.5, duration: 9 },
  { size: 40, x: "50%", y: "40%", delay: 1.5, duration: 5 },
];

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
  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Floating geometric shapes */}
      {floatingShapes.map((shape, i) => (
        <motion.div
          key={i}
          className="pointer-events-none absolute rounded-full border border-white/[0.04]"
          style={{
            width: shape.size,
            height: shape.size,
            left: shape.x,
            top: shape.y,
          }}
          animate={{
            y: [0, -20, 0, 20, 0],
            x: [0, 10, 0, -10, 0],
            scale: [1, 1.05, 1, 0.95, 1],
          }}
          transition={{
            duration: shape.duration,
            repeat: Infinity,
            delay: shape.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Gradient orbs */}
      <div className="pointer-events-none absolute left-1/4 top-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.07] blur-[100px]" />
      <div className="pointer-events-none absolute bottom-1/4 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-blue-500/[0.05] blur-[100px]" />

      <motion.div
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
        variants={container}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          variants={fadeUp}
          className="mb-6 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400"
        >
          Research &amp; Development Studio — Costa Rica
        </motion.p>

        <motion.h1
          variants={fadeUp}
          className="mb-8 text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl md:text-8xl"
        >
          Controlled
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Mayhem
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-4 max-w-2xl text-lg text-white/60 sm:text-xl md:text-2xl"
        >
          AI that works. Not AI that impresses.
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="mx-auto mb-12 max-w-xl text-base text-white/40"
        >
          We build specialized AI products — from legal platforms to
          construction tools — and help companies implement AI that actually gets
          used.
        </motion.p>

        <motion.div variants={fadeUp}>
          <motion.button
            onClick={scrollToProducts}
            className="group relative inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            See What We Build
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-y-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </motion.div>

        {/* Values */}
        <motion.div
          variants={fadeUp}
          className="mt-20 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs uppercase tracking-[0.2em] text-white/25"
        >
          <span>Funciona &gt; Impresiona</span>
          <span className="hidden sm:inline">·</span>
          <span>Específico &gt; Genérico</span>
          <span className="hidden sm:inline">·</span>
          <span>Autonomía &gt; Dependencia</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
