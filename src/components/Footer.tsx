import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#070710]">
      <div className="hr-line" />
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2.5">
              <div className="relative h-4 w-4 shrink-0">
                <div className="absolute inset-0 rounded-[2px] border border-[#C8FF00]/60" />
                <div className="absolute left-[3px] top-[3px] h-full w-full rounded-[2px] border border-white/25 bg-[#C8FF00]/[0.08]" />
              </div>
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50">
                Controlled Mayhem
              </span>
            </div>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20 italic">
              Building with AI, not around it.
            </p>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {[
              { label: "Work", href: "/work" },
              { label: "Open Source", href: "/open-source" },
              { label: "About", href: "/about" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white/60"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://github.com/controlled-mayhem"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-white/30 transition-colors hover:text-white/60"
            >
              GitHub ↗
            </a>
          </nav>
        </div>

        <div className="mt-10 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div className="h-[1px] w-8 bg-[#C8FF00]/50" />
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-white/20">
            © 2026 Controlled Mayhem AI Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
