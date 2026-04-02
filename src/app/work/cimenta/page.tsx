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
      "Construction projects in Costa Rica consistently run over budget. A major reason: material takeoffs are done manually. Someone sits down with a PDF of architectural blueprints and counts elements by hand — beams, columns, rebar, pipes, electrical outlets. It takes 2–3 days for a residential project. Errors compound into cost overruns.",
  },
  {
    label: "Why It Matters",
    content:
      "The construction industry in Costa Rica relies on manual processes for quantity estimation. There are no local tools that can read a blueprint and extract materials automatically. International BIM tools are expensive and require training that most local firms don't have. The gap between what's drawn and what's quoted is where budgets break.",
  },
  {
    label: "What We Built",
    content:
      "Cimenta is a web app that reads construction blueprints (PDFs) using Google Gemini and extracts a full Bill of Materials — element types, quantities, materials, and cost estimates. It handles multiple disciplines: structural, architectural, electrical, MEP, and sanitary. It also parses supplier invoices to compare quoted prices against extracted quantities.",
  },
  {
    label: "Two-Pass Extraction",
    content:
      "The AI pipeline runs two passes per discipline. First, a catalog pass identifies all element types present in the plans (e.g., 'W10x33 steel beams', '3/4\" PVC pipes'). Second, a counting pass fills in quantities for each cataloged element. This two-pass architecture reduced hallucinations significantly compared to single-pass approaches where the model tries to identify and count simultaneously.",
  },
  {
    label: "Multi-Discipline Support",
    content:
      "A real construction project has structural plans, architectural floor plans, electrical diagrams, MEP layouts, and sanitary plans. Cimenta processes each discipline separately with specialized extraction prompts. The final BOM aggregates across all disciplines into a single Excel export that a contractor can hand to suppliers.",
  },
  {
    label: "Invoice Comparison",
    content:
      "Beyond extraction, Cimenta parses supplier invoices and cross-references quoted materials against the BOM. This catches discrepancies — missing items, quantity mismatches, substitutions — before they become change orders on site.",
  },
  {
    label: "Technical Architecture",
    content:
      "Python + FastAPI backend with Google Gemini for document understanding. Next.js frontend for uploading plans and reviewing extracted BOMs. Firebase for storage and auth. Deployed on Railway. The extraction pipeline processes multi-page PDF blueprints with page classification (identifying which pages are structural vs. electrical vs. architectural) before running discipline-specific extraction.",
  },
];

const details = [
  { label: "Client", value: "Controlled Mayhem (internal)" },
  { label: "Market", value: "Costa Rica — construction" },
  { label: "Role", value: "Full product build" },
  { label: "Stack", value: "Python · FastAPI · Gemini · Next.js · Firebase · Railway" },
];

export default function CimentaCaseStudy() {
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
          02
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
              <span className="italic">Cimenta</span>
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://cimenta.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.05em] text-[#C8FF00]/70 transition-colors hover:text-[#C8FF00]"
              >
                cimenta.ai ↗
              </a>
            </div>

            <p
              className="mt-8 max-w-2xl text-xl leading-snug text-white/70 sm:text-2xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              From blueprint to bill of materials in minutes, not days.
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
