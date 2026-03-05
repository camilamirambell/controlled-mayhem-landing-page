"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  duration = 2,
}: {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    if (!ref.current) return;

    const trigger = ScrollTrigger.create({
      trigger: ref.current,
      start: "top 85%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: end,
          duration,
          ease: "power2.out",
          onUpdate: () => setCount(Math.round(obj.val)),
        });
      },
    });

    return () => {
      trigger.kill();
    };
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

const stats = [
  { end: 7, suffix: "", label: "Active Products" },
  { end: 3, suffix: "M+", label: "Legal Documents Processed" },
  { end: 1, prefix: "", suffix: "", label: "Costa Rica → Global", isText: true },
];

export default function Stats() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
        },
      }
    );
  }, []);

  return (
    <section className="relative bg-[#0a0a0a] py-20">
      <div className="absolute inset-0 border-y border-white/[0.06]" />
      <div
        ref={containerRef}
        className="relative mx-auto grid max-w-5xl grid-cols-1 gap-8 px-6 sm:grid-cols-3"
      >
        {stats.map((stat, i) => (
          <div key={i} className="text-center">
            <div className="mb-2 text-4xl font-bold text-white sm:text-5xl">
              {stat.isText ? (
                <span className="text-2xl sm:text-3xl">Costa Rica → Global</span>
              ) : (
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  <AnimatedCounter
                    end={stat.end}
                    suffix={stat.suffix}
                    prefix={stat.prefix}
                  />
                </span>
              )}
            </div>
            {!stat.isText && (
              <p className="text-sm uppercase tracking-[0.15em] text-white/40">
                {stat.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
