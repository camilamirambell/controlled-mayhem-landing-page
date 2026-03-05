"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const products = [
  {
    icon: "⚖️",
    name: "Kodus Legal",
    description:
      "AI para profesionales del derecho. 3M+ documentos legales. Búsqueda semántica que entiende contexto, no keywords.",
    accent: "from-cyan-400 to-blue-500",
  },
  {
    icon: "🔮",
    name: "Hecate",
    description:
      "CI/CD intelligence. Detects flaky tests, analyzes failures, suggests fixes. Your pipeline, smarter.",
    accent: "from-purple-400 to-pink-500",
  },
  {
    icon: "🏗️",
    name: "Cimenta",
    description:
      "Construction intelligence. From blueprints to budgets, AI that understands building.",
    accent: "from-amber-400 to-orange-500",
  },
];

export default function Products() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      // Parallax background element
      if (parallaxRef.current) {
        gsap.to(parallaxRef.current, {
          y: -100,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      // Cards sliding in alternating from left/right
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        const fromX = i % 2 === 0 ? -80 : 80;

        gsap.fromTo(
          card,
          { opacity: 0, x: fromX },
          {
            opacity: 1,
            x: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 50%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="products"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#0a0a0a] py-24 sm:py-32"
    >
      {/* Parallax background decoration */}
      <div
        ref={parallaxRef}
        className="pointer-events-none absolute -right-32 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/[0.03] blur-[80px]"
      />

      <div className="mx-auto max-w-5xl px-6">
        <div className="mb-16 text-center sm:mb-20">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-cyan-400">
            What We Build
          </p>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">
            Flagship Products
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {products.map((product, i) => (
            <div
              key={product.name}
              ref={(el) => {
                cardsRef.current[i] = el;
              }}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 transition-colors hover:border-white/[0.12] hover:bg-white/[0.04] sm:p-10"
            >
              <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/[0.05] text-3xl">
                  {product.icon}
                </div>
                <div>
                  <h3
                    className={`mb-3 bg-gradient-to-r ${product.accent} bg-clip-text text-2xl font-bold text-transparent`}
                  >
                    {product.name}
                  </h3>
                  <p className="max-w-lg text-base leading-relaxed text-white/50">
                    {product.description}
                  </p>
                </div>
              </div>

              {/* Hover glow */}
              <div
                className={`pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-r ${product.accent} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-[0.05]`}
              />
            </div>
          ))}
        </div>

        {/* Footer tagline */}
        <div className="mt-20 text-center">
          <p className="text-sm text-white/30">
            Hacemos AI que funciona.
          </p>
        </div>
      </div>
    </section>
  );
}
