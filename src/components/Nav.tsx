"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Work", href: "/work" },
  { label: "Open Source", href: "/open-source" },
  { label: "About", href: "/about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-[18px]">
        {/* Brand mark */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          {/* Logomark: two overlapping squares */}
          <div className="relative h-5 w-5 shrink-0">
            <div className="absolute inset-0 rounded-[3px] border border-[#C8FF00]/70" />
            <div className="absolute left-[4px] top-[4px] h-full w-full rounded-[3px] border border-white/30 bg-[#C8FF00]/10" />
          </div>
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-white/80">
            Controlled Mayhem
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-white/35 hover:text-white/70"
                }`}
              >
                {isActive && (
                  <span className="absolute bottom-0 left-3.5 right-3.5 h-[1px] bg-[#C8FF00]" />
                )}
                {link.label}
              </Link>
            );
          })}
          <a
            href="https://github.com/controlled-mayhem"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.12em] text-white/35 transition-colors hover:text-white/70"
          >
            GitHub ↗
          </a>
        </nav>
      </div>
      {/* Bottom separator */}
      <div className="hr-line" />
    </header>
  );
}
