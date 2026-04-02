"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

const sections = [
  {
    label: "The Problem",
    content:
      "Lawyers in Costa Rica spend hours digging through disconnected government databases — SCIJ, PGR, TSE, Nexus PJ — looking for relevant case law, regulations, and official publications. The existing tools are keyword-based. You have to know exactly what you're looking for to find it. There's no semantic understanding, no accumulated context, and no way to organize research across cases.",
  },
  {
    label: "Why It Matters",
    content:
      "Legal research in Costa Rica is stuck in the 90s. The only local competitor, LEXIUS, charges $10/month for basic keyword search with no AI. International tools like CoCounsel cost $225/month and have zero Costa Rican legal data. There's no product that combines complete CR government database coverage with real semantic search.",
  },
  {
    label: "What We Built",
    content:
      "Kodus Legal is an AI platform purpose-built for Costa Rican lawyers. It indexes 3M+ legal documents from every major government source — SCIJ (legislation and case law), PGR (attorney general opinions), TSE (electoral law), and Nexus PJ (judicial records). The search engine uses embeddings over the full corpus, so a lawyer can ask a natural-language question and get relevant precedents even when the exact legal terminology differs across decades of case law.",
  },
  {
    label: "Smart Cases",
    content:
      "Each legal matter gets its own workspace — a Smart Case. Research accumulates over time with timeline tracking, so you can pick up where you left off and see the full history of what you've found. Documents generated inside a case stay connected to the research that informed them.",
  },
  {
    label: "Document Generation",
    content:
      "Kodus generates legal documents directly from research context — contracts, powers of attorney, corporate minutes, and more. The AI drafts are grounded in the actual legal framework the lawyer has been researching, not generic templates.",
  },
  {
    label: "Gaceta Monitoring",
    content:
      "The platform monitors Costa Rica's official gazette (La Gaceta) and alerts lawyers when new publications are relevant to their cases or areas of practice. No more manually checking for regulatory changes.",
  },
  {
    label: "Technical Architecture",
    content:
      "Next.js 16 frontend with a Python backend handling embeddings, search, and document generation. Supabase for auth and data. Deployed on Railway. The embedding pipeline processes the full CR legal corpus — 3M+ documents across multiple government databases — with incremental updates as new documents are published.",
  },
];

const details = [
  { label: "Client", value: "Daniel (CM partner project)" },
  { label: "Timeline", value: "Alpha — Q1 2026" },
  { label: "Role", value: "Full product build" },
  { label: "Stack", value: "Next.js 16 · Supabase · Python · Railway" },
];

const pricing = [
  { tier: "Gratis", price: "$0", detail: "1 Smart Case" },
  { tier: "Esencial", price: "$29/mo", detail: "5 Smart Cases" },
  { tier: "Profesional", price: "$49/mo", detail: "Ilimitado" },
  { tier: "Despacho", price: "$89/user/mo", detail: "Team features" },
];

export default function KodusLegalCaseStudy() {
  return (
    <main className="min-h-screen bg-background pt-[57px]">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-white/[0.06] py-24 sm:py-32">
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none leading-none text-white/[0.02]"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(10rem, 28vw, 22rem)",
            fontStyle: "italic",
          }}
          aria-hidden="true"
        >
          01
        </div>

        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 flex items-center gap-4">
              <Link
                href="/work"
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-[#C8FF00]"
              >
                ← Work
              </Link>
              <span className="text-white/15">|</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 border border-white/[0.08] px-2.5 py-1">
                Client Product
              </span>
            </div>

            <h1
              className="text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Kodus <span className="italic">Legal</span>
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://koduslegal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.05em] text-[#C8FF00]/70 transition-colors hover:text-[#C8FF00]"
              >
                koduslegal.com ↗
              </a>
            </div>

            <p
              className="mt-8 max-w-2xl text-xl leading-snug text-white/70 sm:text-2xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              3 million legal documents. One search bar that actually understands the question.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Details bar */}
      <div className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
            {details.map((d) => (
              <div key={d.label}>
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.22em] text-[#C8FF00]/60">
                  {d.label}
                </p>
                <p className="text-sm text-white/70">{d.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content sections */}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-0">
          {sections.map((section, i) => (
            <motion.div
              key={section.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="grid gap-6 border-t border-white/[0.06] py-12 sm:grid-cols-[240px_1fr] sm:gap-16"
            >
              <h2 className="font-mono text-[11px] uppercase tracking-[0.22em] text-[#C8FF00]/70 pt-1">
                {section.label}
              </h2>
              <p className="text-[0.95rem] leading-[1.85] text-white/65">
                {section.content}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-white/[0.06]" />
        </div>

        {/* Pricing */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2
            className="mb-10 text-2xl text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Pricing
          </h2>
          <div className="grid gap-4 sm:grid-cols-4">
            {pricing.map((p) => (
              <div
                key={p.tier}
                className="border border-white/[0.08] bg-white/[0.02] p-6 transition-colors hover:border-[#C8FF00]/20"
              >
                <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.15em] text-[#C8FF00]/60">
                  {p.tier}
                </p>
                <p
                  className="text-2xl text-white"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {p.price}
                </p>
                <p className="mt-2 text-sm text-white/45">{p.detail}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Competitive landscape */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2
            className="mb-10 text-2xl text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Competitive Landscape
          </h2>
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { name: "LEXIUS CR", price: "$10/mo", gap: "Keyword search only. No AI, no semantic understanding, no Smart Cases." },
              { name: "CoCounsel", price: "$225/mo", gap: "US-focused. Zero Costa Rican legal data." },
              { name: "Kodus Legal", price: "From $0", gap: "Complete CR database coverage + semantic search + document generation." },
            ].map((c) => (
              <div
                key={c.name}
                className={`border p-6 ${c.name === "Kodus Legal" ? "border-[#C8FF00]/30 bg-[#C8FF00]/[0.03]" : "border-white/[0.08] bg-white/[0.02]"}`}
              >
                <div className="mb-3 flex items-baseline justify-between">
                  <p className="font-semibold text-white">{c.name}</p>
                  <p className="font-mono text-[11px] text-white/40">{c.price}</p>
                </div>
                <p className="text-sm leading-relaxed text-white/50">{c.gap}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Back link */}
        <div className="mt-20 border-t border-white/[0.06] pt-10">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-[#C8FF00]"
          >
            <span className="transition-transform group-hover:-translate-x-1">←</span>
            All work
          </Link>
        </div>
      </div>
    </main>
  );
}
