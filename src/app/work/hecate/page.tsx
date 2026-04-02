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
      "Managing environment variables across multiple projects and team members is either insecure or expensive. Small teams share .env files over Slack, copy-paste secrets in DMs, or commit them to private repos. Enterprise tools like HashiCorp Vault or AWS Secrets Manager are powerful but complex and costly. There's nothing in between — simple, secure, and affordable.",
  },
  {
    label: "Why We Built It",
    content:
      "Controlled Mayhem runs 7+ projects across multiple deploy targets (Railway, Vercel, Supabase, Firebase). Every project has API keys, OAuth secrets, database URLs, and encryption keys. We needed a way to share these across the team without trusting a third-party server with the actual values. So we built Hecate.",
  },
  {
    label: "Zero-Knowledge Architecture",
    content:
      "Hecate uses a DEK/KEK encryption model. Your passphrase never leaves your machine — it's used to derive a Key Encryption Key (KEK) via PBKDF2 with 300,000 iterations. The KEK wraps a randomly generated Data Encryption Key (DEK). The DEK encrypts your .env file with AES-256-GCM. The server stores the encrypted blob, the wrapped DEK, and a salt. It never sees your passphrase, the unwrapped DEK, or any secret values.",
  },
  {
    label: "CLI Workflow",
    content:
      "The core workflow is three commands. `hecate init` creates a project with E2E encryption and generates a recovery key. `hecate push` encrypts your .env locally and uploads the blob. `hecate pull` downloads and decrypts. Beyond that: `hecate diff` compares local vs. remote (with secrets masked), `hecate history` lists revisions, `hecate rollback` restores a previous version. Team commands handle invites, linking, and multi-project management.",
  },
  {
    label: "Passphrase Design",
    content:
      "Changing your passphrase doesn't re-encrypt any data. It only re-wraps the DEK with a new KEK derived from the new passphrase. The DEK itself doesn't change, so all encrypted blobs remain valid. A recovery key (random 256 bits) provides a backup path to unwrap the DEK if the passphrase is lost.",
  },
  {
    label: "Web Dashboard",
    content:
      "The web UI handles everything the CLI doesn't need to touch directly — project and organization management, team invitations, revision history with diffs, an environment variable editor, and environment comparison (dev vs. staging vs. prod). Auth is Supabase SSR with email and OAuth.",
  },
  {
    label: "Template System",
    content:
      "`hecate env init` scaffolds a .env from a `.env.example.tpl` template. `hecate env validate` checks your .env against the template to catch missing or extra variables. `hecate env diff` compares two environment files. This prevents the \"works on my machine\" problem where someone's .env is missing a key that got added last week.",
  },
  {
    label: "Technical Architecture",
    content:
      "Monorepo with three packages: CLI (TypeScript, zero external deps), Web (Next.js 16, React 19, Tailwind 4), and Supabase (Deno Edge Functions, PostgreSQL). The CLI does all crypto locally using Node.js built-in crypto. Edge Functions handle auth, rate limiting, and blob storage. RLS policies enforce access control at the database level.",
  },
];

const details = [
  { label: "Type", value: "Internal tool (open-core)" },
  { label: "Status", value: "Production — used across CM portfolio" },
  { label: "Pricing", value: "Free (1 project, 3 members) / Pro $19/mo flat" },
  { label: "Stack", value: "Node.js · Next.js 16 · Supabase · Vercel" },
];

export default function HecateCaseStudy() {
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
          03
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
                Internal Tool
              </span>
            </div>

            <h1
              className="text-[clamp(3rem,8vw,6rem)] leading-[0.95] tracking-tight text-white"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              <span className="italic">Hecate</span>
            </h1>

            <div className="mt-4 flex items-center gap-4">
              <a
                href="https://hecate.controlledmayhem.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-[12px] tracking-[0.05em] text-[#C8FF00]/70 transition-colors hover:text-[#C8FF00]"
              >
                hecate.controlledmayhem.com ↗
              </a>
            </div>

            <p
              className="mt-8 max-w-2xl text-xl leading-snug text-white/70 sm:text-2xl"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Your .env files, encrypted before they leave your machine.
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

        {/* Encryption diagram */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 border border-white/[0.08] bg-white/[0.02] p-8 sm:p-12"
        >
          <h2
            className="mb-8 text-2xl text-white sm:text-3xl"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            How the encryption works
          </h2>
          <pre className="overflow-x-auto font-mono text-[12px] leading-[1.8] text-white/55">
{`Your machine:

  Passphrase ──PBKDF2 (300k iter)──▶ KEK (Key Encryption Key)
                                          │
                                          ├── wraps ──▶ DEK (stored encrypted)
                                          │
  DEK ──AES-256-GCM──▶ encrypted .env    │
                                          │
  Recovery Key (random 256 bits) ────────▶ also wraps DEK (backup)

Server stores:
  • Salt (for PBKDF2)
  • DEK encrypted by KEK
  • DEK encrypted by Recovery Key
  • Encrypted .env blobs
  ✗ NEVER: passphrase, plaintext DEK, plaintext secrets`}
          </pre>
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
            vs. the alternatives
          </h2>
          <div className="grid gap-4 sm:grid-cols-4">
            {[
              { name: "Doppler", price: "$6/user/mo", gap: "Not zero-knowledge. Server sees your secrets." },
              { name: "Infisical", price: "$8/user/mo", gap: "Open-source but complex. More than most teams need." },
              { name: "Vault", price: "Enterprise", gap: "Powerful but heavy. Overkill for .env files." },
              { name: "Hecate", price: "Free / $19 flat", gap: "CLI-first. Zero-knowledge. Simple. Open-core." },
            ].map((c) => (
              <div
                key={c.name}
                className={`border p-6 ${c.name === "Hecate" ? "border-[#C8FF00]/30 bg-[#C8FF00]/[0.03]" : "border-white/[0.08] bg-white/[0.02]"}`}
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
