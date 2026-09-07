"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
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

      // 1. Card fades and scales in smoothly (0.5s)
      tl.fromTo(
        cardRef.current,
        { opacity: 0, y: 16, scale: 0.97 },
        { opacity: 1, y: 0, scale: 1, duration: 0.5, ease: "power2.out" }
      )
        // 2. Progress counter counts from 0 to 100 over 3.2s
        .to(
          { val: 0 },
          {
            val: 100,
            duration: 3.2,
            ease: "power2.inOut",
            onUpdate: function () {
              setProgress(Math.round(this.targets()[0].val));
            },
          },
          "-=0.1"
        )
        // 3. Red signature line draws across in sync with counter (3.2s)
        .fromTo(
          lineRef.current,
          { scaleX: 0 },
          { scaleX: 1, duration: 3.2, ease: "power2.inOut" },
          "<"
        )
        // 4. Hold at 100% / Ready state for 0.6s
        .to({}, { duration: 0.6 })
        // 5. Elegant curtain exit sliding up into the ceiling (0.7s)
        .to(containerRef.current, {
          yPercent: -100,
          duration: 0.7,
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
      {/* Editorial Loading Card */}
      <div
        ref={cardRef}
        className="w-full max-w-sm rounded-2xl bg-[#0f0f13] border border-white/10 p-7 sm:p-8 shadow-2xl shadow-black/90 space-y-6"
      >
        {/* Card Header: Live telemetry beacon + counter */}
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-zinc-400 border-b border-white/5 pb-3">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>SYS.INIT // 2026</span>
          </div>
          <span className="text-[#e63946] font-semibold tabular-nums">
            {progress}%
          </span>
        </div>

        {/* Card Center: Clean Developer Brand Lockup */}
        <div className="space-y-1.5 text-left">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-800 flex items-center justify-center shrink-0">
              <svg viewBox="0 0 32 32" className="w-5 h-5 text-white" fill="currentColor">
                <path fillRule="evenodd" clipRule="evenodd" d="M 7.5 6.5 H 17.5 C 21.5 6.5 24.5 9.2 24.5 12.5 C 24.5 15.3 22.8 17.3 19.8 18 L 25 25.5 H 19.6 L 15 18.2 H 12 V 25.5 H 7.5 V 6.5 Z M 12 10.5 H 17.2 C 18.8 10.5 20 11.3 20 12.5 C 20 13.7 18.8 14.5 17.2 14.5 H 12 V 10.5 Z" />
              </svg>
            </div>
            <span className="font-sans font-semibold text-2xl sm:text-3xl text-white tracking-tight">
              Rein Gavino
            </span>
          </div>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-400 pl-12">
            Systems &amp; Reactive Interfaces
          </p>
        </div>

        {/* Card Footer: Synchronized Signal Red Progress Bar */}
        <div className="space-y-2 pt-1">
          <div className="w-full h-[2px] bg-zinc-800/80 rounded-full overflow-hidden">
            <div
              ref={lineRef}
              className="w-full h-full bg-[#e63946] origin-left rounded-full"
              style={{ transform: "scaleX(0)" }}
            />
          </div>
          <div className="flex items-center justify-between font-mono text-[9px] uppercase tracking-wider text-zinc-400">
            <span>Manila, PH</span>
            <button
              type="button"
              onClick={handleSkip}
              className="hover:text-white transition-colors cursor-pointer"
            >
              {progress === 100 ? "Ready" : "Skip \u2192"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
