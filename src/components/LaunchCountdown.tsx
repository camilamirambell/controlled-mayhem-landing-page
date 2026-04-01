"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

export default function LaunchCountdown() {
  const [email, setEmail] = useState("");
  const [launched, setLaunched] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end end"],
  });

  // Map scroll progress to countdown phases
  const countdownNumber = useTransform(scrollYProgress, [0.1, 0.3, 0.45, 0.6, 0.75, 0.88], [5, 4, 3, 2, 1, 0]);
  const countdownOpacity = useTransform(scrollYProgress, [0.05, 0.15, 0.9, 1], [0, 1, 1, 1]);
  const ctaOpacity = useTransform(scrollYProgress, [0.82, 0.92], [0, 1]);
  const ctaY = useTransform(scrollYProgress, [0.82, 0.92], [40, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLaunched(true);
    console.log("Launch email:", email);
    setEmail("");
  };

  return (
    <section
      ref={sectionRef}
      className="relative bg-background"
      style={{ height: "300vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Subtle radial glow that intensifies */}
        <motion.div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: useTransform(scrollYProgress, [0.1, 0.88], [0, 0.15]),
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(200,255,0,0.2) 0%, transparent 70%)",
          }}
        />

        {/* Countdown number */}
        {!launched && (
          <motion.div
            className="relative flex items-center justify-center"
            style={{ opacity: countdownOpacity }}
          >
            <motion.span
              className="text-center text-white/30 select-none"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(12rem, 35vw, 28rem)",
                fontStyle: "italic",
                lineHeight: 1,
                textShadow: "0 0 80px rgba(200,255,0,0.15)",
              }}
            >
              <CountdownDisplay value={countdownNumber} />
            </motion.span>
          </motion.div>
        )}

        {/* "AI that ships." reminder text */}
        <motion.p
          className="absolute top-[15%] font-mono text-[11px] uppercase tracking-[0.28em] text-white/20"
          style={{
            opacity: useTransform(scrollYProgress, [0.15, 0.25, 0.85, 0.92], [0, 1, 1, 0]),
          }}
        >
          AI that ships.
        </motion.p>

        {/* CTA area — appears after countdown hits 0 */}
        <motion.div
          className="absolute flex flex-col items-center gap-8"
          style={{ opacity: ctaOpacity, y: ctaY }}
        >
          {launched ? (
            /* Post-launch state */
            <div className="flex flex-col items-center gap-6">
              {/* Rocket animation */}
              <motion.div
                initial={{ y: 0, opacity: 1 }}
                animate={{ y: -600, opacity: 0 }}
                transition={{
                  duration: 2,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="text-6xl"
              >
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  className="rotate-[-30deg]"
                >
                  <path
                    d="M24 4L28 16L40 12L32 24L44 28L32 32L36 44L24 36L12 44L16 32L4 28L16 24L8 12L20 16L24 4Z"
                    fill="#C8FF00"
                  />
                </svg>
              </motion.div>

              {/* Particle trail */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute rounded-full bg-[#C8FF00]"
                  style={{
                    width: 4 - i * 0.3,
                    height: 4 - i * 0.3,
                  }}
                  initial={{
                    y: 0,
                    x: (Math.random() - 0.5) * 30,
                    opacity: 0.8,
                    scale: 1,
                  }}
                  animate={{
                    y: [0, 100 + i * 40],
                    opacity: [0.8, 0],
                    scale: [1, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: 0.1 + i * 0.08,
                    ease: "easeOut",
                  }}
                />
              ))}

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="font-mono text-sm text-[#C8FF00]"
              >
                You&apos;re on the launchpad. We&apos;ll be in touch.
              </motion.p>
            </div>
          ) : (
            /* Pre-launch CTA */
            <>
              <h2
                className="text-center text-5xl tracking-tight text-white sm:text-7xl"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                Ready to <span className="italic text-[#C8FF00]">launch?</span>
              </h2>
              <p className="max-w-sm text-center text-sm leading-relaxed text-white/55">
                Drop your email. We&apos;ll ping you when our tools go live.
              </p>

              <form
                onSubmit={handleSubmit}
                className="flex w-full max-w-md gap-0"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="flex-1 border border-white/10 border-r-0 bg-white/[0.04] px-5 py-4 font-mono text-sm text-white placeholder-white/25 outline-none transition-colors focus:border-[#C8FF00]/40 focus:bg-white/[0.06]"
                />
                <button
                  type="submit"
                  className="group shrink-0 border border-[#C8FF00] bg-[#C8FF00] px-8 py-4 font-mono text-[11px] font-medium uppercase tracking-[0.18em] text-black transition-all hover:bg-transparent hover:text-[#C8FF00]"
                >
                  Launch
                  <span className="ml-2 inline-block transition-transform group-hover:-translate-y-0.5">
                    &#x2197;
                  </span>
                </button>
              </form>

              <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-white/20">
                No spam. Just a ping when we ship.
              </p>
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}

/* Helper component to display the countdown number from a MotionValue */
function CountdownDisplay({ value }: { value: MotionValue<number> }) {
  const [display, setDisplay] = useState(5);

  useEffect(() => {
    const unsubscribe = value.on("change", (v: number) => {
      const rounded = Math.round(v);
      if (rounded >= 0 && rounded <= 5) {
        setDisplay(rounded);
      }
    });
    return unsubscribe;
  }, [value]);

  if (display === 0) return null;

  return <>{display}</>;
}
