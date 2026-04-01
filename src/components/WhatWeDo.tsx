"use client";

import { motion } from "framer-motion";

const columns = [
  {
    number: "01",
    title: "Client Products",
    body: "Your lawyers search 3M+ legal documents with AI. Your contractors extract material lists from blueprints in minutes. We build the product, deploy it, and stay until it works.",
    badge: null,
  },
  {
    number: "02",
    title: "Internal Tools",
    body: "We needed an MCP proxy that cuts token usage by 88%. A task board where Claude picks up tickets autonomously. A secrets manager with real zero-knowledge encryption. So we built them.",
    badge: null,
  },
  {
    number: "03",
    title: "Open Source",
    body: "Four of our internal tools are becoming open-source projects with hosted tiers. Same code we run in production.",
    badge: "Coming soon",
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

export default function WhatWeDo() {
  return (
    <section className="bg-background py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          className="mb-20 flex items-end justify-between gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#C8FF00]" />
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/50">
              What we do
            </span>
          </div>
          <div className="hr-line flex-1 max-w-[480px]" />
        </motion.div>

        {/* Services list */}
        <div className="flex flex-col">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative"
            >
              {/* Top border — lime on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/[0.07] transition-colors group-hover:bg-[#C8FF00]/30" />

              <div className="grid grid-cols-[80px_1fr] gap-8 py-10 sm:grid-cols-[120px_1fr_1fr] sm:gap-12">
                {/* Large number */}
                <div className="flex flex-col justify-start pt-1">
                  <span
                    className="text-4xl leading-none text-[#C8FF00] sm:text-5xl italic transition-transform duration-300 group-hover:translate-x-1"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {col.number}
                  </span>
                </div>

                {/* Title */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <h3
                      className="text-xl text-white sm:text-2xl"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      {col.title}
                    </h3>
                    {col.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-[#C8FF00]">
                        {col.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Body */}
                <div className="col-start-2 sm:col-start-3 flex items-center">
                  <p className="text-[0.9rem] leading-[1.75] text-white/60">
                    {col.body}
                  </p>
                </div>
              </div>

              {/* Bottom border on last item */}
              {i === columns.length - 1 && (
                <div className="h-[1px] bg-white/[0.07]" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
