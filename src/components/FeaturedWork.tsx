"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    number: "01",
    name: "Kodus Legal",
    slug: "kodus-legal",
    url: "koduslegal.com",
    tag: "Client Product",
    headline: "3 million legal documents. One search bar that actually understands the question.",
    body: "Semantic search across the full SCIJ, PGR, TSE, and Nexus PJ databases. Smart Cases keep research organized by matter. Document generation handles contracts, powers of attorney, and corporate minutes.",
    stack: ["Next.js", "Supabase", "Python", "Railway"],
    accent: "#C8FF00",
  },
  {
    number: "02",
    name: "Cimenta",
    slug: "cimenta",
    url: "cimenta.ai",
    tag: "Client Product",
    headline: "From blueprint to bill of materials in minutes, not days.",
    body: "Reads architectural blueprints with AI and extracts quantities, materials, and cost estimates across structural, electrical, and MEP disciplines. A residential project that took 2-3 days now takes under 10 minutes.",
    stack: ["Python", "FastAPI", "Gemini", "Next.js", "Firebase", "Railway"],
    accent: "#C8FF00",
  },
  {
    number: "03",
    name: "Hecate",
    slug: "hecate",
    url: "hecate.controlledmayhem.com",
    tag: "Internal Tool",
    headline: "Your .env files, encrypted before they leave your machine.",
    body: "CLI + web dashboard for sharing environment variables with zero-knowledge encryption. The server never sees your secrets. Push, pull, diff, rollback. Free for small teams, $19/mo flat for Pro.",
    stack: ["Next.js", "Supabase", "Vercel", "AES-256-GCM"],
    accent: "#C8FF00",
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [4, -4]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-4, 4]), {
    stiffness: 300,
    damping: 30,
  });

  function handleMouse(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="group relative"
    >
      <div className="relative overflow-hidden border border-white/[0.08] bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#C8FF00]/30 hover:bg-white/[0.04] sm:p-10">
        {/* Top accent line — grows on hover */}
        <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#C8FF00] transition-all duration-500 group-hover:w-full" />

        {/* Left accent bar */}
        <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#C8FF00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Corner glow */}
        <div
          className="pointer-events-none absolute -top-20 -left-20 h-40 w-40 rounded-full opacity-0 blur-[60px] transition-opacity duration-500 group-hover:opacity-100"
          style={{ background: `${project.accent}15` }}
        />

        {/* Giant decorative number */}
        <div
          className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 select-none leading-none text-white/[0.03] transition-all duration-500 group-hover:text-white/[0.06] group-hover:translate-x-2"
          style={{
            fontFamily: "var(--font-display), Georgia, serif",
            fontSize: "clamp(8rem, 16vw, 14rem)",
            fontStyle: "italic",
          }}
          aria-hidden="true"
        >
          {project.number}
        </div>

        <div className="relative z-10">
          {/* Top row — tag */}
          <div className="mb-5 flex items-start justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/35 border border-white/[0.08] px-3 py-1">
              {project.tag}
            </span>
          </div>

          {/* Product name — big */}
          <div className="mb-4 flex flex-wrap items-baseline gap-4">
            <h3
              className="text-3xl text-white sm:text-4xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {project.name}
            </h3>
            <a
              href={`https://${project.url}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] tracking-[0.05em] text-[#C8FF00]/60 transition-colors hover:text-[#C8FF00]"
            >
              {project.url} ↗
            </a>
          </div>

          {/* Headline as subtitle */}
          <p
            className="mb-5 max-w-xl text-base leading-snug text-white/70 sm:text-lg"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {project.headline}
          </p>

          {/* Body */}
          <p className="mb-7 max-w-2xl text-sm leading-[1.8] text-white/55">
            {project.body}
          </p>

          {/* Stack badges */}
          {project.stack.length > 0 && (
            <div className="mb-7 flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/35 border border-white/[0.08] px-3 py-1 transition-colors duration-300 group-hover:border-[#C8FF00]/15 group-hover:text-white/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}

          {/* CTA */}
          <a
            href={`/work/${project.slug}`}
            className="group/link inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-white/30 transition-colors hover:text-[#C8FF00]"
          >
            View case study
            <span className="transition-transform group-hover/link:translate-x-1.5">
              →
            </span>
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturedWork() {
  return (
    <section id="work" className="bg-background py-28 sm:py-36">
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
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
