"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tools = [
  {
    name: "Delegate",
    tagline: "The MCP proxy hub that makes your AI tools actually work together.",
    description:
      "Delegate sits between your AI assistant and your tools. It routes tool calls intelligently, reducing token usage by up to 88%. Connect Gmail, Slack, Figma, Linear, and more — one URL, one key.",
    status: "Coming Soon",
  },
  {
    name: "TaskHive",
    tagline: "Task management built for humans and agents working together.",
    description:
      "TaskHive is a Kanban board with a twist: AI agents can read it, update it, and work tasks autonomously while you watch. Built for teams where the dev is sometimes a Claude instance.",
    status: "Coming Soon",
  },
  {
    name: "MegaBrain",
    tagline: "Semantic memory layer for your AI stack.",
    description:
      "MegaBrain connects to your Obsidian vault (or any notes) and exposes a search + retrieval API for AI agents. Your Claude actually remembers things — across sessions, across tools.",
    status: "Coming Soon",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function OpenSourcePage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Early access email:", email);
    setSubmitted(true);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-[#070710] pt-[57px]">

      {/* Hero area */}
      <div className="relative overflow-hidden border-b border-white/[0.06] py-24 sm:py-32">
        {/* Ghost watermark */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-mono text-[clamp(8rem,22vw,18rem)] font-medium leading-none text-white/[0.025]"
          aria-hidden="true"
        >
          OS
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-6 flex items-center gap-4">
              <div className="h-[1px] w-8 bg-[#C8FF00]" />
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
                Open source
              </span>
            </div>
            <h1 className="text-[clamp(2.8rem,8vw,7rem)] font-black leading-[0.95] tracking-tight text-white">
              Open source.{" "}
              <span className="text-white/40">Hosted.</span>{" "}
              Yours.
            </h1>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-[1.75] text-white/45">
              We built these tools for ourselves. They work in production. Now we&apos;re opening them up.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tools */}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="mb-24 flex flex-col gap-0">
          {tools.map((tool, i) => (
            <motion.div
              key={tool.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative border-t border-white/[0.07] py-14"
            >
              {/* Hover accent */}
              <div className="absolute top-0 left-0 w-0 h-[1px] bg-[#C8FF00] transition-all duration-500 group-hover:w-full" />

              <div className="grid gap-8 sm:grid-cols-[1fr_1fr_auto] sm:gap-12 sm:items-start">
                {/* Name + tagline */}
                <div className="flex flex-col gap-2">
                  <h2 className="text-2xl font-bold text-white sm:text-3xl">
                    {tool.name}
                  </h2>
                  <p className="text-base font-medium leading-snug text-white/55">
                    &ldquo;{tool.tagline}&rdquo;
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-[1.8] text-white/40">
                  {tool.description}
                </p>

                {/* Status */}
                <div className="shrink-0 self-start">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#C8FF00] border border-[#C8FF00]/25 px-3 py-1.5 whitespace-nowrap">
                    {tool.status}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.07]" />
        </div>

        {/* Email capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden border border-white/[0.08] bg-white/[0.02] p-10 sm:p-14"
        >
          {/* Subtle lime glow corner */}
          <div
            className="pointer-events-none absolute -bottom-10 -right-10 h-[200px] w-[200px] rounded-full blur-[80px]"
            style={{ background: "rgba(200,255,0,0.07)" }}
          />

          <div className="relative grid gap-10 sm:grid-cols-[1fr_auto] sm:items-end">
            <div>
              <h2 className="mb-3 text-3xl font-black tracking-tight text-white sm:text-4xl">
                Get early access
              </h2>
              <p className="max-w-sm text-sm leading-relaxed text-white/40">
                We&apos;ll ping you when we launch. No spam.
              </p>
            </div>

            {submitted ? (
              <div className="flex items-center gap-3">
                <div className="h-[1px] w-6 bg-[#C8FF00]" />
                <p className="font-mono text-sm text-[#C8FF00]">
                  You&apos;re on the list. We&apos;ll be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-0 min-w-[320px]">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 border border-white/10 border-r-0 bg-white/[0.04] px-5 py-3.5 font-mono text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[#C8FF00]/40"
                />
                <button
                  type="submit"
                  className="shrink-0 border border-[#C8FF00] bg-[#C8FF00] px-6 py-3.5 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-all hover:bg-transparent hover:text-[#C8FF00]"
                >
                  Notify me
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
