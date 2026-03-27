"use client";

import { motion } from "framer-motion";

const caseStudies = [
  {
    number: "01",
    tag: "Internal Product",
    client: "Controlled Mayhem AI Studio",
    headline: "From blueprint to bill of materials in minutes.",
    problem:
      "Construction projects in Costa Rica run over budget because nobody has a reliable way to turn architectural blueprints into accurate material quantities. The process is manual, slow, and error-prone.",
    solution:
      "Cimenta is a web app that reads construction blueprints (PDFs) using Gemini AI and extracts a full Bill of Materials — quantities, materials, and cost estimates. It handles multiple disciplines: structural, architectural, electrical, MEP, sanitary. It also parses supplier invoices to compare quoted prices against market rates.",
    detail:
      "The extraction pipeline runs two passes per discipline: a catalog pass that identifies element types, and a counting pass that fills in quantities. This two-pass architecture reduced hallucinations significantly vs. single-pass approaches.",
    outcome:
      "A residential construction project that previously required 2–3 days of manual takeoff can now generate a full BOM in under 10 minutes.",
    stack: ["Python", "FastAPI", "Google Gemini", "Next.js", "Firebase", "Railway"],
    draft: false,
  },
  {
    number: "02",
    tag: "Internal Tool",
    client: "Controlled Mayhem AI Studio",
    headline: "Zero-knowledge secrets management, without the enterprise price tag.",
    problem:
      "Managing environment variables across multiple projects and team members is either insecure (Slack messages, shared .env files) or expensive (Vault, AWS Secrets Manager). Small teams need something better.",
    solution:
      "Hecate is a zero-knowledge encrypted environment variable manager. Secrets are encrypted on the client before they ever reach the server — we never see your values. Teams can share secrets safely, with per-environment organization and access controls.",
    detail: null,
    outcome:
      "CM's entire product portfolio (7 projects) now uses Hecate for secrets management. Zero leaked credentials since launch.",
    stack: ["Next.js", "Supabase", "Vercel", "AES-256 client-side encryption"],
    draft: false,
  },
  {
    number: "03",
    tag: "Client Product",
    client: "Confidential",
    headline: "AI-powered operations for a franchised education network.",
    problem:
      "A national tutoring franchise with hundreds of locations needed to modernize their operations tech stack — scheduling, reporting, and communication — without disrupting day-to-day operations.",
    solution: null,
    detail: null,
    outcome: null,
    stack: [],
    draft: true,
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
    <main className="min-h-screen bg-[#070710] pt-[57px]">
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
            <h1 className="text-[clamp(3.5rem,10vw,8rem)] font-black leading-[0.92] tracking-tight text-white">
              Work
            </h1>
            <p className="mt-6 max-w-lg text-[0.95rem] leading-[1.75] text-white/45">
              Products we&apos;ve built for clients and for ourselves. Real problems, real systems.
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
              className={`relative border-t border-white/[0.07] py-16 ${cs.draft ? "opacity-40" : ""}`}
            >
              {/* Case study header */}
              <div className="mb-12 grid grid-cols-[80px_1fr] items-start gap-6 sm:grid-cols-[120px_1fr]">
                {/* Large number */}
                <span className="font-mono text-5xl font-medium leading-none text-[#C8FF00] sm:text-6xl">
                  {cs.number}
                </span>

                <div className="flex flex-col gap-3">
                  <div className="flex flex-wrap items-center gap-2">
                    {cs.draft && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25 border border-white/[0.08] px-2.5 py-1 italic">
                        Draft
                      </span>
                    )}
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 border border-white/[0.08] px-2.5 py-1">
                      {cs.tag}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/25">
                      Client: {cs.client}
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                    {cs.headline}
                  </h2>
                </div>
              </div>

              {/* Content grid */}
              {!cs.draft && (
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
                          <p className="text-sm leading-[1.8] text-white/55">
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
              )}
            </motion.article>
          ))}

          {/* Final border */}
          <div className="border-t border-white/[0.07]" />
        </div>
      </div>
    </main>
  );
}
