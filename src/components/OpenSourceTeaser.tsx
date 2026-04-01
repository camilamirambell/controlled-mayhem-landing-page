"use client";

import { motion } from "framer-motion";

const products = [
  {
    name: "Delegate",
    description: "MCP proxy hub. One URL connects your AI to 33+ APIs. Saves 88% on tokens with smart routing.",
    status: "Coming Soon",
  },
  {
    name: "TaskHive",
    description: "Kanban for humans + REST API for agents. Your Claude picks up tickets, writes code, opens PRs.",
    status: "Coming Soon",
  },
  {
    name: "Hecate",
    description: "CLI + dashboard for .env sharing with zero-knowledge encryption. The server never sees your secrets.",
    status: "Coming Soon",
  },
  {
    name: "MegaBrain",
    description: "Semantic memory layer. Connects your notes to AI agents so they actually remember context.",
    status: "Coming Soon",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function OpenSourceTeaser() {
  return (
    <section
      id="open-source"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, #111827 0%, #0f1623 50%, #0d1420 100%)",
      }}
    >
      {/* Subtle background texture shift */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(200,255,0,0.04) 0%, transparent 70%)",
        }}
      />

      {/* Top separator */}
      <div className="absolute top-0 left-6 right-6 mx-auto max-w-6xl">
        <div className="hr-line" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#C8FF00]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55">
              Open source
            </span>
          </div>
          <h2
            className="text-4xl leading-tight tracking-tight text-white sm:text-6xl"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            We&apos;re going <span className="italic">open.</span>
          </h2>
          <p className="mt-4 max-w-md text-[0.95rem] leading-[1.7] text-white/60">
            Four tools we built for ourselves, now becoming open-source with hosted tiers. Same code we run in production.
          </p>
        </motion.div>

        {/* Product list */}
        <div className="mb-20 flex flex-col">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.06] transition-colors group-hover:bg-[#C8FF00]/20" />

              <div className="flex items-center justify-between gap-6 py-8">
                <div className="flex flex-col gap-1.5">
                  <h3
                    className="text-xl text-white group-hover:text-white transition-colors sm:text-2xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/55">{product.description}</p>
                </div>
                <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.18em] text-[#C8FF00] border border-[#C8FF00]/25 px-3 py-1.5">
                  {product.status}
                </span>
              </div>

              {i === products.length - 1 && (
                <div className="h-[1px] bg-white/[0.06]" />
              )}
            </motion.div>
          ))}
        </div>

        {/* Scroll hint to countdown */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-3"
        >
          <div className="h-[1px] w-6 bg-[#C8FF00]/30" />
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/20">
            Keep scrolling ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
