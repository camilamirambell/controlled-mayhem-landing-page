"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const caseStudies = [
  {
    number: "01",
    tag: "Client Product",
    name: "Kodus Legal",
    slug: "kodus-legal",
    url: "koduslegal.com",
    headline: "3 million legal documents. One search bar that understands the question.",
    problem:
      "Lawyers in Costa Rica waste hours searching for relevant case law, regulations, and official publications across disconnected government databases. Existing tools like LEXIUS offer keyword search at best — no semantic understanding, no context, no accumulated research.",
    solution:
      "Kodus Legal is an AI platform with semantic search over 3M+ legal documents from SCIJ, PGR, TSE, and Nexus PJ. Smart Cases organize research by matter with timeline tracking and accumulated context. The platform also generates legal documents — contracts, powers of attorney, corporate minutes — and monitors the Gaceta for relevant publications.",
    detail:
      "The search engine uses embeddings over the full CR legal corpus, not keyword matching. This means a lawyer can ask a natural language question and get relevant precedents, even when the exact terminology differs across decades of case law.",
    outcome:
      "The only legal AI product in Costa Rica with complete government database coverage and real semantic search. Pricing from free to $89/user/mo positions it against LEXIUS ($10, no AI) and CoCounsel ($225, no CR data).",
    stack: ["Next.js", "Supabase", "Python", "Railway"],
    draft: false,
  },
  {
    number: "02",
    tag: "Client Product",
    name: "Cimenta",
    slug: "cimenta",
    url: "cimenta.ai",
    headline: "From blueprint to bill of materials in minutes, not days.",
    problem:
      "Construction projects in Costa Rica run over budget because material takeoffs are manual, slow, and error-prone. Nobody has a reliable way to turn architectural blueprints into accurate quantities.",
    solution:
      "Cimenta reads construction blueprints with Gemini AI and extracts a full Bill of Materials — quantities, materials, and cost estimates. It handles structural, architectural, electrical, MEP, and sanitary disciplines. It also parses supplier invoices to compare quoted prices against market rates.",
    detail:
      "The extraction pipeline runs two passes per discipline: a catalog pass that identifies element types, and a counting pass that fills in quantities. This two-pass architecture reduced hallucinations significantly vs. single-pass approaches.",
    outcome:
      "A residential project that required 2-3 days of manual takeoff now generates a full BOM in under 10 minutes.",
    stack: ["Python", "FastAPI", "Google Gemini", "Next.js", "Firebase", "Railway"],
    draft: false,
  },
  {
    number: "03",
    tag: "Internal Tool",
    name: "Hecate",
    slug: "hecate",
    url: "hecate.controlledmayhem.com",
    headline: "Your .env files, encrypted before they leave your machine.",
    problem:
      "Managing environment variables across multiple projects and team members is either insecure (Slack messages, shared .env files) or expensive (Vault, AWS Secrets Manager). Small teams deserve something better.",
    solution:
      "Hecate is a CLI + web dashboard for sharing .env files with zero-knowledge encryption. Secrets are encrypted client-side with AES-256-GCM using a DEK/KEK model before they reach the server. Teams push, pull, diff, and rollback environment files with full revision history.",
    detail: null,
    outcome:
      "CM's entire portfolio (7 projects) uses Hecate for secrets management. Zero leaked credentials since launch. Open-core: free for 1 project, $19/mo flat for Pro.",
    stack: ["Next.js", "Supabase", "Vercel", "AES-256-GCM"],
    draft: false,
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

export default function WorkPage() {
  return (
    <main className="min-h-screen bg-background pt-[57px]">
      {/* Hero area */}
      <div className="relative overflow-hidden border-b border-white/[0.06] py-24 sm:py-32">
        {/* Ghost number watermark */}
        <div
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 select-none font-mono text-[clamp(10rem,28vw,22rem)] font-medium leading-none text-white/[0.025]"
          aria-hidden="true"
        >
          W
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
                Case studies
              </span>
            </div>
            <h1
              className="text-[clamp(3.5rem,10vw,8rem)] leading-[0.92] tracking-tight text-white"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              <span className="italic">Work</span>
            </h1>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-[1.75] text-white/60">
              Products we&apos;ve built for clients and for ourselves. Every one runs in production.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Case studies */}
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-28">
        <div className="flex flex-col gap-0">
          {caseStudies.map((cs, i) => (
            <motion.article
              key={cs.number}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative border-t border-white/[0.07] py-16"
            >
              {/* Case study header */}
              <div className="mb-12 grid grid-cols-[80px_1fr] items-start gap-6 sm:grid-cols-[120px_1fr]">
                {/* Large number */}
                <span
                  className="text-5xl leading-none text-[#C8FF00] italic sm:text-6xl"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {cs.number}
                </span>

                <div className="flex flex-col gap-4">
                  {/* Product name — big and clear */}
                  <div className="flex flex-wrap items-baseline gap-4">
                    <Link href={`/work/${cs.slug}`}>
                      <h2
                        className="text-4xl text-white transition-colors hover:text-[#C8FF00] sm:text-5xl"
                        style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                      >
                        {cs.name}
                      </h2>
                    </Link>
                    <a
                      href={`https://${cs.url}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-[12px] tracking-[0.05em] text-[#C8FF00]/70 transition-colors hover:text-[#C8FF00]"
                    >
                      {cs.url} ↗
                    </a>
                  </div>

                  {/* Tag */}
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/40 border border-white/[0.08] px-2.5 py-1 w-fit">
                    {cs.tag}
                  </span>

                  {/* Headline */}
                  <p className="text-lg leading-snug text-white/70 sm:text-xl max-w-2xl">
                    {cs.headline}
                  </p>
                </div>
              </div>

              {/* Content grid */}
              <div className="ml-[80px] sm:ml-[120px]">
                  <div className="grid gap-0 sm:grid-cols-2">
                    {[
                      { label: "Problem", content: cs.problem },
                      { label: "What we built", content: cs.solution },
                      cs.detail ? { label: "Technical detail", content: cs.detail } : null,
                      cs.outcome ? { label: "Outcome", content: cs.outcome } : null,
                    ]
                      .filter(Boolean)
                      .map((item) => (
                        <div
                          key={item!.label}
                          className="border-t border-white/[0.06] py-8 pr-8"
                        >
                          <h3 className="mb-3 font-mono text-[10px] uppercase tracking-[0.22em] text-[#C8FF00]/70">
                            {item!.label}
                          </h3>
                          <p className="text-sm leading-[1.8] text-white/65">
                            {item!.content}
                          </p>
                        </div>
                      ))}
                  </div>

                  {/* Stack */}
                  {cs.stack.length > 0 && (
                    <div className="mt-8 flex flex-wrap gap-2 border-t border-white/[0.06] pt-8">
                      {cs.stack.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/35 border border-white/[0.07] px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
            </motion.article>
          ))}

          {/* Final border */}
          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </main>
  );
}
