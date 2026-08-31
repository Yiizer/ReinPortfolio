"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("INITIALIZING");
  const [isLoaded, setIsLoaded] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsLoaded(true);
      setIsVisible(false);
      return;
    }

    const startTime = performance.now();
    const duration = 1400; // 1.4s smooth load experience

    const updateProgress = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const rawProgress = Math.min(100, Math.floor((elapsed / duration) * 100));

      setProgress(rawProgress);

      if (rawProgress < 30) {
        setStatus("INITIALIZING");
      } else if (rawProgress < 65) {
        setStatus("LOADING ASSETS");
      } else if (rawProgress < 95) {
        setStatus("CONFIGURING INTERFACE");
      } else {
        setStatus("READY");
      }

      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      } else {
        setProgress(100);
        setStatus("READY");
        setTimeout(() => {
          setIsLoaded(true);
          setTimeout(() => {
            setIsVisible(false);
          }, 700); // match fade transition duration
        }, 150);
      }
    };

    const animId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animId);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-ink transition-all duration-700 ease-out select-none ${
        isLoaded ? "opacity-0 scale-[1.02] pointer-events-none" : "opacity-100 scale-100"
      }`}
      aria-hidden={isLoaded}
    >
      {/* Background Technical Repeating Dot Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* Ambient Accent Glow */}
      <div
        className="pointer-events-none absolute h-80 w-80 rounded-full blur-3xl opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.45) 0%, rgba(9,9,11,0) 70%)",
        }}
        aria-hidden="true"
      />

      {/* Central Content */}
      <div className="relative z-10 flex flex-col items-center space-y-6 max-w-xs w-full px-6">
        {/* Monogram Badge */}
        <div className="relative flex items-center justify-center w-16 h-16 rounded-2xl bg-surface/90 border border-border-line shadow-2xl shadow-accent/15">
          <div className="absolute inset-0 rounded-2xl bg-accent/10 blur-sm pointer-events-none" />
          
          <span className="font-mono text-xl font-bold tracking-tighter text-white z-10">
            R<span className="text-accent">.</span>
          </span>

          {/* Technical Corner Brackets */}
          <span className="absolute top-1 left-1.5 text-[9px] font-mono text-zinc-600 leading-none">┌</span>
          <span className="absolute top-1 right-1.5 text-[9px] font-mono text-zinc-600 leading-none">┐</span>
          <span className="absolute bottom-1 left-1.5 text-[9px] font-mono text-zinc-600 leading-none">└</span>
          <span className="absolute bottom-1 right-1.5 text-[9px] font-mono text-zinc-600 leading-none">┘</span>
        </div>

        {/* Brand Name & Subtitle */}
        <div className="text-center space-y-1">
          <h1 className="font-mono text-xs tracking-[0.25em] font-semibold text-zinc-200 uppercase">
            REIN GAVINO
          </h1>
          <p className="font-mono text-[10px] tracking-widest text-zinc-500 uppercase">
            FULLSTACK DEVELOPER
          </p>
        </div>

        {/* Progress Bar & Telemetry Status */}
        <div className="w-full space-y-2 pt-2">
          <div className="relative h-1 w-full overflow-hidden rounded-full bg-surface border border-border-line">
            <div
              className="h-full bg-gradient-to-r from-accent/50 via-accent to-accent-hover transition-[width] duration-75 ease-out shadow-[0_0_12px_rgba(6,182,212,0.8)]"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between font-mono text-[10px] text-zinc-400">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-zinc-400">{status}</span>
            </div>
            <span className="text-accent font-semibold">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

