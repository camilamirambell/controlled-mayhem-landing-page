"use client";

import { motion } from "framer-motion";

const columns = [
  {
    number: "01",
    title: "Client Products",
    body: "We partner with companies to design and build AI-native products — from architecture to deployment. No generic integrations. Real systems.",
    badge: null,
  },
  {
    number: "02",
    title: "Internal Tools",
    body: "We build the tools we wish existed: an MCP proxy hub, a human-agent task manager, a semantic memory layer. Then we ship them.",
    badge: null,
  },
  {
    number: "03",
    title: "Open Source",
    body: "We're releasing our internal stack as open-source projects with hosted tiers. If you want early access, leave your email.",
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
    <section className="bg-[#070710] py-28 sm:py-36">
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
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              What we do
            </span>
          </div>
          <div className="hr-line flex-1 max-w-[480px]" />
        </motion.div>

        {/* Services list — editorial layout */}
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
                  <span className="font-mono text-4xl font-medium leading-none text-[#C8FF00] sm:text-5xl">
                    {col.number}
                  </span>
                </div>

                {/* Title */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
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
                  <p className="text-[0.9rem] leading-[1.75] text-white/45">
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
