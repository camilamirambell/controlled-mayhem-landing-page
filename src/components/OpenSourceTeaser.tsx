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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as const },
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
    <section id="open-source" className="bg-[#070710] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-5xl">
            We&apos;re going open.
          </h2>
          <p className="max-w-xl text-lg text-white/50">
            Three of our internal tools are getting open-sourced with hosted tiers.
          </p>
        </motion.div>

        <div className="mb-16 flex flex-col gap-4">
          {products.map((product, i) => (
            <motion.div
              key={product.name}
              className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div>
                <h3 className="mb-1 text-lg font-semibold text-white">{product.name}</h3>
                <p className="text-sm text-white/50">{product.description}</p>
              </div>
              <span className="shrink-0 self-start rounded-full border border-[#C8FF00]/20 bg-[#C8FF00]/10 px-3 py-1 text-xs font-medium text-[#C8FF00]">
                {product.status}
              </span>
            </motion.div>
          ))}
        </div>

        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            className="flex-1 rounded-full border border-white/10 bg-white/[0.05] px-6 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-[#C8FF00]/30"
          />
          <button
            type="submit"
            className="rounded-full bg-[#C8FF00] px-8 py-3 text-sm font-semibold text-black transition-opacity hover:opacity-90"
          >
            Get early access
          </button>
        </motion.form>

        <p className="mt-4 text-xs text-white/30">
          No spam. Just a ping when we launch.
        </p>
      </div>
    </section>
  );
}
