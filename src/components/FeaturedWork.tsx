"use client";

import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    tag: "Client Product",
    headline: "From blueprint to bill of materials in minutes.",
    body: "Construction projects in Costa Rica run over budget because nobody has a reliable way to turn architectural blueprints into accurate material quantities. Cimenta uses Gemini AI to extract a full Bill of Materials — quantities, materials, and cost estimates — in under 10 minutes.",
    stack: ["Python", "FastAPI", "Gemini", "Next.js", "Firebase", "Railway"],
  },
  {
    number: "02",
    tag: "Internal Tool",
    headline: "Zero-knowledge secrets management, without the enterprise price tag.",
    body: "Hecate is a zero-knowledge encrypted environment variable manager. Secrets are encrypted on the client before they ever reach the server — we never see your values.",
    stack: ["Next.js", "Supabase", "Vercel", "AES-256"],
  },
  {
    number: "03",
    tag: "Client Product",
    headline: "AI-powered operations for a franchised education network.",
    body: "A national tutoring franchise with hundreds of locations needed to modernize their operations tech stack — scheduling, reporting, and communication — without disrupting day-to-day operations.",
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

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#070710] py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <motion.div
          className="mb-20 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="h-[1px] w-8 bg-[#C8FF00]" />
          <span className="font-mono text-[11px] uppercase tracking-[0.28em] text-white/40">
            Featured work
          </span>
        </motion.div>

        <div className="flex flex-col gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              className="group relative overflow-hidden rounded-none border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-300 hover:border-[#C8FF00]/25 hover:bg-white/[0.035] sm:p-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              {/* Top accent line — appears on hover */}
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-[#C8FF00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              {/* Giant decorative number */}
              <div
                className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none font-mono text-[clamp(6rem,14vw,11rem)] font-medium leading-none text-white/[0.028]"
                aria-hidden="true"
              >
                {project.number}
              </div>

              <div className="relative z-10">
                {/* Top row */}
                <div className="mb-6 flex items-start justify-between gap-4">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C8FF00]">
                    {project.number}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/30 border border-white/[0.08] px-3 py-1">
                    {project.tag}
                  </span>
                </div>

                {/* Headline */}
                <h3
                  className={`mb-5 max-w-xl text-xl font-bold leading-tight text-white sm:text-2xl ${
                    "draft" in project && project.draft ? "opacity-40" : ""
                  }`}
                >
                  {project.headline}
                </h3>

                {/* Body */}
                {(!("draft" in project) || !project.draft) && (
                  <p className="mb-7 max-w-2xl text-sm leading-[1.8] text-white/45">
                    {project.body}
                  </p>
                )}

                {/* Stack badges */}
                {project.stack.length > 0 && (
                  <div className="mb-7 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/35 border border-white/[0.08] px-3 py-1"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* CTA */}
                {"draft" in project && project.draft ? (
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/20 italic">
                    Case study coming soon
                  </span>
                ) : (
                  <a
                    href="#"
                    className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-[#C8FF00]"
                  >
                    View case study
                    <span className="transition-transform group-hover/link:translate-x-1.5">→</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
