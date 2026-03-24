"use client";

import { motion } from "framer-motion";

const columns = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
      </svg>
    ),
    title: "Client Products",
    body: "We partner with companies to design and build AI-native products — from architecture to deployment. No generic integrations. Real systems.",
    badge: null,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" />
      </svg>
    ),
    title: "Internal Tools",
    body: "We build the tools we wish existed: an MCP proxy hub, a human-agent task manager, a semantic memory layer. Then we ship them.",
    badge: null,
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    title: "Open Source",
    body: "We're releasing our internal stack as open-source projects with hosted tiers. If you want early access, leave your email.",
    badge: "Coming soon",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export default function WhatWeDo() {
  return (
    <section className="bg-[#070710] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-16 text-3xl font-bold text-white sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          What we do
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {columns.map((col, i) => (
            <motion.div
              key={col.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-[#C8FF00]/30"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg bg-white/[0.06] text-white/60">
                {col.icon}
              </div>

              <div className="mb-3 flex items-center gap-3">
                <h3 className="text-lg font-semibold text-white">{col.title}</h3>
                {col.badge && (
                  <span className="rounded-full bg-[#C8FF00]/10 px-2.5 py-0.5 text-xs font-medium text-[#C8FF00]">
                    {col.badge}
                  </span>
                )}
              </div>

              <p className="text-sm leading-relaxed text-white/50">{col.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
