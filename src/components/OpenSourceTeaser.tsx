"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const products = [
  {
    name: "Delegate",
    description: "The MCP proxy hub that makes your AI tools actually work together.",
    status: "Coming Soon",
  },
  {
    name: "TaskHive",
    description: "Task management built for humans and agents working together.",
    status: "Coming Soon",
  },
  {
    name: "MegaBrain",
    description: "Semantic memory layer for your AI stack.",
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
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access email:", email);
    setEmail("");
  };

  return (
    <section
      id="open-source"
      className="relative overflow-hidden py-28 sm:py-36"
      style={{
        background:
          "linear-gradient(180deg, #070710 0%, #07090f 50%, #060810 100%)",
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
            <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
              Open source
            </span>
          </div>
          <h2 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-6xl">
            We&apos;re going open.
          </h2>
          <p className="mt-4 max-w-md text-[0.95rem] leading-[1.7] text-white/45">
            Three of our internal tools are getting open-sourced with hosted tiers.
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
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors sm:text-xl">
                    {product.name}
                  </h3>
                  <p className="text-sm leading-relaxed text-white/40">{product.description}</p>
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

        {/* Email capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"
        >
          <div className="max-w-sm">
            <p className="mb-1 text-sm font-semibold text-white">
              Get early access
            </p>
            <p className="font-mono text-[11px] uppercase tracking-[0.14em] text-white/30">
              No spam. Just a ping when we launch.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex w-full max-w-md gap-0"
          >
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="flex-1 border border-white/10 border-r-0 bg-white/[0.04] px-5 py-3.5 font-mono text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[#C8FF00]/40 focus:bg-white/[0.06]"
            />
            <button
              type="submit"
              className="shrink-0 border border-[#C8FF00] bg-[#C8FF00] px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-all hover:bg-transparent hover:text-[#C8FF00]"
            >
              Get early access
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
