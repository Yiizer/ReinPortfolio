"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import Magnetic from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | null>(null);

  const handleSkip = () => {
    if (timelineRef.current) {
      timelineRef.current.progress(1);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Respect reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const isDev = process.env.NODE_ENV === "development";
    // In production, show once per session; in dev, allow viewing on refresh
    const alreadyShown =
      !isDev &&
      typeof window !== "undefined" &&
      sessionStorage.getItem("rein_intro_shown") === "1";

    if (prefersReducedMotion || alreadyShown) {
      requestAnimationFrame(() => setIsVisible(false));
      return;
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          sessionStorage.setItem("rein_intro_shown", "1");
          setIsVisible(false);
        },
      });
      timelineRef.current = tl;

      // 1. Ambient glow breathes in and card fades up smoothly
      tl.fromTo(
        glowRef.current,
        { opacity: 0, scale: 0.8 },
        { opacity: 0.6, scale: 1.1, duration: 0.8, ease: "power2.out" }
      )
        .fromTo(
          cardRef.current,
          { opacity: 0, y: 16, scale: 0.96 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" },
          "-=0.6"
        )
        // 2. Red signature line draws across over 2.0s with spring momentum
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 2.0, ease: "power3.inOut" }
        )
        // 3. Short hold (0.25s)
        .to({}, { duration: 0.25 })
        // 4. Elegant curtain exit sliding up into the ceiling (0.6s)
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.6,
          ease: "power3.inOut",
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#070709] text-white select-none overflow-hidden px-6"
    >
      {/* Subtle Ambient Radial Backlight Glow */}
      <div
        ref={glowRef}
        className="absolute w-96 h-96 rounded-full pointer-events-none opacity-0 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(230, 57, 70, 0.22) 0%, rgba(230, 57, 70, 0.05) 50%, transparent 75%)",
        }}
      />

      {/* Loading Card */}
      <div
        ref={cardRef}
        className="relative z-10 w-full max-w-sm rounded-2xl bg-[#0f0f13]/95 backdrop-blur-xl border border-white/10 p-7 sm:p-8 shadow-2xl shadow-black/90 space-y-6"
      >
        {/* Name & Subtitle */}
        <div className="space-y-2 text-left">
          <div className="flex items-center justify-between">
            <h1 className="font-serif text-3xl sm:text-4xl text-white tracking-tight font-normal bg-gradient-to-r from-white via-zinc-100 to-zinc-300 bg-clip-text">
              Rein Gavino
            </h1>
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-zinc-400">
            <ScrambleText text="DEVELOPER • PH" />
          </p>
        </div>

        {/* Progress Line */}
        <div className="space-y-3 pt-2">
          <div className="w-full h-[2px] bg-zinc-800/80 rounded-full overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-full bg-[#e63946] origin-left rounded-full shadow-[0_0_8px_#e63946]"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-zinc-400">
            <span>Philippines (PH)</span>
            <Magnetic strength={0.25}>
              <button
                type="button"
                onClick={handleSkip}
                className="hover:text-white transition-colors cursor-pointer py-0.5 px-1.5 rounded hover:bg-white/5"
              >
                <ScrambleText text="Skip →" />
              </button>
            </Magnetic>
          </div>
        </div>
      </div>
    </div>
  );
}
