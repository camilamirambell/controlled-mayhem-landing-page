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
    headline: "AI-powered legal research for Costa Rica and LATAM.",
    body: "Kodus brings semantic search to 3M+ legal documents from Costa Rica — SCIJ, PGR, TSE and more. Lawyers find relevant jurisprudence in seconds, not hours. Smart Cases keep research organized.",
    stack: ["Next.js", "Supabase", "Python", "Railway"],
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

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-[#070710] py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <motion.h2
          className="mb-16 text-3xl font-bold text-white sm:text-5xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured work
        </motion.h2>

        <div className="flex flex-col gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.number}
              className="group relative rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-colors hover:border-white/20 sm:p-10"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="mb-6 flex items-start justify-between">
                <span className="font-mono text-sm font-bold text-[#C8FF00]">
                  {project.number}
                </span>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/40">
                  {project.tag}
                </span>
              </div>

              <h3 className="mb-4 text-xl font-bold text-white sm:text-2xl">
                {project.headline}
              </h3>

              <p className="mb-6 max-w-2xl text-sm leading-relaxed text-white/50">
                {project.body}
              </p>

              <div className="mb-6 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-white/[0.08] px-3 py-1 text-xs text-white/50"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#"
                className="text-sm text-white/30 transition-colors hover:text-[#C8FF00]"
              >
                View case study →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
