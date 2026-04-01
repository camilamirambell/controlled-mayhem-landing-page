"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const tools = [
  {
    name: "Delegate",
    tagline: "One MCP URL. 33+ APIs. 88% fewer tokens.",
    description:
      "Delegate sits between your AI agent and your tools — Gmail, Slack, Figma, Linear, Stripe, and more. Smart routing means your agent only loads the schemas it needs, cutting token usage by 88%. You connect once; your agent gets everything.",
    status: "Coming Soon",
  },
  {
    name: "TaskHive",
    tagline: "Kanban for humans. REST API for agents. Same board.",
    description:
      "TaskHive is task management where your AI agents are first-class participants. They claim tickets, write code, open PRs, and report back. Includes an autonomous daemon that runs a PM, Dev, and QA pipeline — Claude instances reviewing each other's work.",
    status: "Coming Soon",
  },
  {
    name: "Hecate",
    tagline: "Share .env files without trusting the server.",
    description:
      "Zero-knowledge secrets management for teams. Your .env is encrypted on your machine before it ever leaves — the server stores blobs it can't read. Push, pull, diff, rollback, invite teammates. AES-256-GCM with a DEK/KEK model.",
    status: "Coming Soon",
  },
  {
    name: "MegaBrain",
    tagline: "Give your AI agents a memory that persists.",
    description:
      "MegaBrain connects to your Obsidian vault and exposes semantic search + retrieval via MCP. Your AI agents can search your notes by meaning, not keywords — and remember context across sessions and tools.",
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
    <main className="min-h-screen bg-background pt-[57px]">

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
              <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/55">
                Open source
              </span>
            </div>
            <h1
              className="text-[clamp(2.8rem,8vw,7rem)] leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Open source.{" "}
              <span className="text-white/55 italic">Hosted.</span>{" "}
              Yours.
            </h1>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-[1.75] text-white/60">
              We built these tools because we needed them. They run our own infrastructure. Now we&apos;re releasing them with hosted tiers so you don&apos;t have to deploy anything.
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
                  <h2
                    className="text-2xl text-white sm:text-3xl"
                    style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                  >
                    {tool.name}
                  </h2>
                  <p className="text-base font-medium leading-snug text-white/55">
                    &ldquo;{tool.tagline}&rdquo;
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm leading-[1.8] text-white/55">
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
              <p className="max-w-sm text-sm leading-relaxed text-white/55">
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
