# Controlled Mayhem — Landing Page

## What is this

Marketing website for **Controlled Mayhem AI Studio** — Andrea's AI product studio based in Costa Rica. The site showcases the studio's products, client work, and open-source tools.

## Stack

- **Framework**: Next.js 16.1 (App Router) + React 19 + TypeScript
- **Styling**: Tailwind CSS 4 + custom CSS variables
- **Animations**: GSAP + Framer Motion + Lenis (smooth scroll)
- **Flow diagrams**: @xyflow/react (ecosystem visualization)
- **Deploy**: TBD

## Design system — "Void Electric"

Shared aesthetic across the CM ecosystem (Delegate, theHive, etc.):

- **Background**: `#070710` (near-black)
- **Foreground**: `#ededed` (off-white)
- **Accent**: `#C8FF00` (lime/electric green)
- **Display font**: Syne (400–800)
- **Mono font**: DM Mono (300–500)
- **Texture**: Noise overlay on body (`opacity: 0.035`)
- **Selection**: Lime on dark

When adding new sections or pages, follow this palette strictly. No grays lighter than `#999`. Use accent sparingly — for CTAs, highlights, and interactive states.

## Project structure

```
src/
├── app/
│   ├── layout.tsx          Root layout (Nav + Footer wrap all pages)
│   ├── page.tsx            Homepage (Hero, WhatWeDo, FeaturedWork, OpenSourceTeaser)
│   ├── globals.css         Design tokens + base styles
│   ├── work/page.tsx       Work/portfolio page
│   ├── open-source/page.tsx  Open source showcase
│   └── about/page.tsx      About page
├── components/
│   ├── Nav.tsx             Top navigation
│   ├── Hero.tsx            Homepage hero section
│   ├── WhatWeDo.tsx        Services overview
│   ├── FeaturedWork.tsx    Case studies / portfolio
│   ├── OpenSourceTeaser.tsx  Open source section
│   ├── Products.tsx        Product cards
│   ├── Stats.tsx           Stats/metrics display
│   ├── EcosystemFlow.tsx   Interactive ecosystem diagram (xyflow)
│   ├── SmoothScroll.tsx    Lenis smooth scroll wrapper
│   └── Footer.tsx          Site footer
```

## Commands

```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run lint     # ESLint
```

## The CM ecosystem — products to showcase

### Core connected products

1. **Delegate** — Cloud-native MCP proxy hub. Agents connect to 33+ APIs (Gmail, Slack, Stripe, etc.) without touching credentials. Smart routing saves 88% tokens. Railway + Supabase. In production.

2. **TaskHive** — Real-time task management for human-agent collaboration. Kanban UI for humans + REST API for AI agents. Autonomous daemon spawns Claude pipelines (PM → Dev → QA). Next.js + Supabase on Railway.

3. **theHive** (Hive Mission Control) — Electron desktop app. Visual cockpit where AI agents appear as bees in a hexagonal hive. Not automation theater — real cockpit for directing agent work. Integrates with TaskHive.

4. **Hecate** — CLI + web dashboard for sharing `.env` files with zero-knowledge encryption (DEK/KEK, AES-256-GCM). Server never sees secrets. Open-core: Free / Pro $19/mo. Next.js + Supabase on Vercel.

5. **Orion** — Self-hosted personal AI assistant. Web UI + Telegram/Slack/Discord bots. Multi-model chat (Claude, OpenAI, Groq, Google, Ollama). Connects to Delegate as MCP client. Single Docker container.

6. **Inner Circle** — AI advisory board platform. 8 archetypal advisors (The Heart, The Challenger, The Skeptic, etc.) deliberate on decisions with structured debate. Produces session minutes with verdict, consensus, blind spots. Next.js + Gemini 2.0 Flash.

### Client work

7. **Kodus Legal** — AI platform for lawyers in Costa Rica / LATAM. Semantic search over 3M+ legal documents (SCIJ, PGR, TSE, Nexus PJ). Smart Cases, document generation, Gaceta alerts, risk analysis. Only product with complete CR legal data + semantic search. Next.js 16 + Supabase + Python on Railway. Alpha Q1 2026. Pricing: Free → $89/user/mo.

### Independent products

8. **Cimenta** — BOM extraction from architectural blueprints using AI (Gemini). 3-stage pipeline. Costa Rican construction market.

9. **Swarkstrike** — AI red-teaming platform. Layered agents (L1/L2/L3). TypeScript Turborepo monorepo.

### Ecosystem connections

```
Orion ──MCP client──▶ Delegate ◀──catalog── TaskHive
                                               ▲
theHive ───Electron cockpit───────────────────┘
Hecate ──manages .env for all──▶ *
Inner Circle ──MCP──▶ Delegate + Megabrain
```

## Content guidelines

- Tone: confident, technical, slightly irreverent. "AI that ships." not "leveraging AI solutions"
- No corporate buzzwords. Say what things actually do.
- Costa Rica is part of the identity — mention it naturally, don't hide it
- The studio builds its own tools AND ships for clients — both matter equally
- Void Electric aesthetic = dark, minimal, precise. Not flashy gradients or hero illustrations.
