"use client";

import { useState, useRef, useSyncExternalStore, MouseEvent } from "react";
import Image from "next/image";

type ViewMode = "narrative" | "architecture";
type CardMode = "visual" | "blueprint";

function subscribeClock(callback: () => void) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function getManilaTimeSnapshot(): string {
  try {
    return new Intl.DateTimeFormat("en-US", {
      timeZone: "Asia/Manila",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    }).format(new Date());
  } catch {
    return "--:--:--";
  }
}

function getServerClockSnapshot(): string {
  return "--:--:--";
}

export default function InteractiveIdentity() {
  const [viewMode, setViewMode] = useState<ViewMode>("narrative");
  const [cardMode, setCardMode] = useState<CardMode>("visual");
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  // 3D Tilt & Specular state
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);

  // Ping Manila telemetry
  const [pingState, setPingState] = useState<"idle" | "pinging" | "success">("idle");
  const [pingLatency, setPingLatency] = useState(14);

  // Live Manila Time with useSyncExternalStore (hydration-safe, zero effect cascade)
  const manilaTime = useSyncExternalStore(
    subscribeClock,
    getManilaTimeSnapshot,
    getServerClockSnapshot
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12; // max 12 deg
    const rotY = ((x - centerX) / centerX) * 12;

    setRotateX(rotX);
    setRotateY(rotY);

    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    setGlare({ x: glareX, y: glareY, opacity: 0.28 });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
    setGlare((prev) => ({ ...prev, opacity: 0 }));
  };

  const handlePing = () => {
    if (pingState === "pinging") return;
    setPingState("pinging");
    setTimeout(() => {
      setPingLatency(Math.floor(10 + Math.random() * 8));
      setPingState("success");
      setTimeout(() => setPingState("idle"), 3500);
    }, 450);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-start">
      {/* LEFT COLUMN: 3D Holographic Interactive Card */}
      <div className="md:col-span-5 order-2 md:order-1 flex flex-col items-center">
        <div className="w-full max-w-sm" style={{ perspective: "1100px" }}>
          <div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden border border-border bg-surface shadow-2xl transition-transform duration-200 ease-out select-none cursor-crosshair group"
            style={{
              transform: isHovered
                ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
                : "rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
              transformStyle: "preserve-3d",
            }}
          >
            {/* Ambient Corner Sci-Fi / Engineering Reticles */}
            <div className="absolute top-3 left-3 z-30 font-mono text-[9px] text-text-dim/60 pointer-events-none flex items-center gap-1">
              <span className="text-accent">+</span> 14.5995°N
            </div>
            <div className="absolute top-3 right-3 z-30 font-mono text-[9px] text-text-dim/60 pointer-events-none flex items-center gap-1">
              120.9842°E <span className="text-accent">+</span>
            </div>

            {/* CARD MODE 1: VISUAL PORTRAIT */}
            {cardMode === "visual" && (
              <div className="absolute inset-0 z-10 transition-opacity duration-300">
                <Image
                  src="/profile.jpg"
                  alt="Rein Gavino"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  priority
                />
                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />
              </div>
            )}

            {/* CARD MODE 2: BLUEPRINT / X-RAY SCHEMATIC */}
            {cardMode === "blueprint" && (
              <div className="absolute inset-0 z-10 bg-[#070b11] p-6 flex flex-col justify-between text-emerald-400 font-mono text-xs overflow-hidden transition-opacity duration-300">
                {/* Blueprint Background Grid & Scanlines */}
                <div
                  className="absolute inset-0 opacity-15 pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(#059669 1px, transparent 1px), linear-gradient(90deg, #059669 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.4)_50%)] bg-[length:100%_4px] pointer-events-none opacity-40 animate-pulse" />

                {/* Blueprint Telemetry Header */}
                <div className="relative z-10 space-y-2 border-b border-emerald-500/30 pb-3">
                  <div className="flex items-center justify-between text-[10px] tracking-wider uppercase text-emerald-500">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      SCHEMA // REIN_GAVINO
                    </span>
                    <span>REV 4.2</span>
                  </div>
                  <div className="text-emerald-300 font-bold text-sm tracking-tight font-mono">
                    SYS.DISCIPLINE: COMP_ENG
                  </div>
                </div>

                {/* Animated Logic Waveform / Telemetry */}
                <div className="relative z-10 space-y-3 my-auto py-2">
                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-emerald-500">
                      <span>HARDWARE CORES</span>
                      <span>100% ACTIVE</span>
                    </div>
                    <div className="h-1.5 w-full bg-emerald-950 rounded-full overflow-hidden border border-emerald-500/40">
                      <div className="h-full bg-emerald-400 w-4/5 animate-pulse" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex justify-between text-[10px] text-emerald-500">
                      <span>FULLSTACK RUNTIME</span>
                      <span>OPTIMAL</span>
                    </div>
                    <div className="h-1.5 w-full bg-emerald-950 rounded-full overflow-hidden border border-emerald-500/40">
                      <div className="h-full bg-emerald-400 w-11/12" />
                    </div>
                  </div>

                  {/* Micro Terminal Trace */}
                  <div className="bg-black/50 p-2.5 rounded border border-emerald-500/20 text-[10px] space-y-0.5 text-emerald-300/80">
                    <div>&gt; target = &quot;Manila, PH&quot;</div>
                    <div>&gt; mode = &quot;Hardware_Simulation &amp; Web&quot;</div>
                    <div>&gt; latency = &lt;16ms (60 FPS)</div>
                    <div>&gt; status = 200 OK (RESILIENT)</div>
                  </div>
                </div>

                {/* Blueprint Footer */}
                <div className="relative z-10 pt-2 border-t border-emerald-500/30 flex items-center justify-between text-[10px] text-emerald-500">
                  <span>LAT: 14.5995°N</span>
                  <span>LNG: 120.9842°E</span>
                </div>
              </div>
            )}

            {/* Specular Light Reflection Sheen (Follows Mouse) */}
            <div
              className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 240px at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 75%)`,
              }}
            />

            {/* Floating 3D Badge: Mode Switcher (Visual vs Blueprint) */}
            <div
              className="absolute top-4 right-4 z-30 transition-transform duration-200"
              style={{ transform: isHovered ? "translateZ(32px)" : "translateZ(0px)" }}
            >
              <div className="flex items-center bg-black/75 backdrop-blur-md p-1 rounded-lg border border-border shadow-lg">
                <button
                  type="button"
                  onClick={() => setCardMode("visual")}
                  className={`px-2 py-1 text-[10px] font-mono rounded transition-colors cursor-pointer ${
                    cardMode === "visual"
                      ? "bg-accent text-white font-bold"
                      : "text-text-muted hover:text-text-main"
                  }`}
                >
                  Visual
                </button>
                <button
                  type="button"
                  onClick={() => setCardMode("blueprint")}
                  className={`px-2 py-1 text-[10px] font-mono rounded transition-colors flex items-center gap-1 cursor-pointer ${
                    cardMode === "blueprint"
                      ? "bg-emerald-600 text-white font-bold"
                      : "text-text-muted hover:text-emerald-400"
                  }`}
                >
                  <span className="w-1 h-1 rounded-full bg-emerald-400" />
                  X-Ray
                </button>
              </div>
            </div>

            {/* Floating 3D Badge: Status & Live Manila Station */}
            <div
              className="absolute bottom-4 left-4 right-4 z-30 transition-transform duration-200"
              style={{ transform: isHovered ? "translateZ(26px)" : "translateZ(0px)" }}
            >
              <div className="bg-primary/90 backdrop-blur-md px-3.5 py-2 rounded-xl border border-border/90 shadow-xl font-mono text-xs flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-text-main font-medium">Rein Gavino</span>
                  <span className="text-text-dim text-[11px] hidden sm:inline">&bull; Manila</span>
                </div>
                <div className="text-[11px] text-text-muted font-mono">
                  {manilaTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Micro Interaction Tip */}
        <div className="mt-3 flex items-center gap-2 text-text-dim text-[11px] font-mono">
          <span className="text-accent">&uarr;&darr;</span>
          <span>3D perspective hover &bull; Switch between Visual &amp; X-Ray</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Interactive Bio / System Architecture Showcase */}
      <div className="md:col-span-7 space-y-6 order-1 md:order-2">
        {/* Header with Mode Switcher */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-4">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
              Chapter 01 / Identity
            </span>
            <div className="font-mono text-[11px] text-text-dim">
              CpE SENIOR &bull; FULLSTACK ENGINEER
            </div>
          </div>

          {/* Interactive Mode Switcher Tabs */}
          <div className="flex items-center bg-surface border border-border p-1 rounded-lg self-start sm:self-auto shadow-sm">
            <button
              type="button"
              onClick={() => setViewMode("narrative")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 cursor-pointer ${
                viewMode === "narrative"
                  ? "bg-primary text-text-main font-semibold shadow-sm border border-border"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              01 Narrative
            </button>
            <button
              type="button"
              onClick={() => setViewMode("architecture")}
              className={`px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                viewMode === "architecture"
                  ? "bg-accent text-white font-semibold shadow-sm"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white/70" />
              02 Architecture
            </button>
          </div>
        </div>

        {/* VIEW 1: NARRATIVE WITH INTERACTIVE KEYWORDS */}
        {viewMode === "narrative" && (
          <div className="space-y-6 transition-all duration-300">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-main font-normal tracking-tight leading-[1.02]">
              Curiosity through code.
            </h1>

            <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
              <p>
                I&apos;m a 4th-year{" "}
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip("cpe")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(activeTooltip === "cpe" ? null : "cpe")}
                  className="text-text-main font-medium underline decoration-accent/40 hover:decoration-accent underline-offset-4 cursor-pointer transition-colors bg-accent/5 px-1 py-0.5 rounded"
                >
                  Computer Engineering student
                </button>{" "}
                based in Manila, working as a{" "}
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip("fullstack")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(activeTooltip === "fullstack" ? null : "fullstack")}
                  className="text-text-main font-medium underline decoration-accent/40 hover:decoration-accent underline-offset-4 cursor-pointer transition-colors bg-accent/5 px-1 py-0.5 rounded"
                >
                  fullstack developer
                </button>{" "}
                with a passion for pragmatic, resilient software.
              </p>

              <p>
                Rather than specializing narrowly before understanding the broader craft, I enjoy
                connecting all the layers:{" "}
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip("interfaces")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(activeTooltip === "interfaces" ? null : "interfaces")}
                  className="text-text-main font-medium underline decoration-accent/40 hover:decoration-accent underline-offset-4 cursor-pointer transition-colors bg-accent/5 px-1 py-0.5 rounded"
                >
                  clean interfaces
                </button>
                ,{" "}
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip("backends")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(activeTooltip === "backends" ? null : "backends")}
                  className="text-text-main font-medium underline decoration-accent/40 hover:decoration-accent underline-offset-4 cursor-pointer transition-colors bg-accent/5 px-1 py-0.5 rounded"
                >
                  reliable transactional backends
                </button>
                ,{" "}
                <button
                  type="button"
                  onMouseEnter={() => setActiveTooltip("hardware")}
                  onMouseLeave={() => setActiveTooltip(null)}
                  onClick={() => setActiveTooltip(activeTooltip === "hardware" ? null : "hardware")}
                  className="text-text-main font-medium underline decoration-accent/40 hover:decoration-accent underline-offset-4 cursor-pointer transition-colors bg-accent/5 px-1 py-0.5 rounded"
                >
                  hardware simulation
                </button>
                , and the real people who use them.
              </p>
            </div>

            {/* Interactive Keyword Inspector Callout */}
            <div className="min-h-14 flex items-center">
              {activeTooltip === "cpe" && (
                <div className="w-full p-3 rounded-xl bg-surface border border-accent/40 text-xs font-mono text-text-main flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Computer Engineering: Digital Logic &bull; Microarchitecture &bull; Embedded Systems</span>
                  </div>
                  <span className="text-text-dim text-[10px]">THESIS YEAR</span>
                </div>
              )}

              {activeTooltip === "fullstack" && (
                <div className="w-full p-3 rounded-xl bg-surface border border-accent/40 text-xs font-mono text-text-main flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Fullstack Craft: React 19 &bull; Next.js &bull; TypeScript &bull; PostgreSQL &bull; APIs</span>
                  </div>
                  <span className="text-text-dim text-[10px]">PRODUCTION READY</span>
                </div>
              )}

              {activeTooltip === "interfaces" && (
                <div className="w-full p-3 rounded-xl bg-surface border border-accent/40 text-xs font-mono text-text-main flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Interfaces: Sub-pixel craft &bull; GSAP Motion &bull; Accessible &bull; Fluid 60 FPS</span>
                  </div>
                  <span className="text-text-dim text-[10px]">FRONTEND ART</span>
                </div>
              )}

              {activeTooltip === "backends" && (
                <div className="w-full p-3 rounded-xl bg-surface border border-accent/40 text-xs font-mono text-text-main flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Transactional Systems: ACID compliance &bull; Scalable Relational Schemas &bull; Security</span>
                  </div>
                  <span className="text-text-dim text-[10px]">INFRASTRUCTURE</span>
                </div>
              )}

              {activeTooltip === "hardware" && (
                <div className="w-full p-3 rounded-xl bg-surface border border-accent/40 text-xs font-mono text-text-main flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span>Hardware: Unity 3D &bull; C# &bull; Arduino / Microcontrollers &bull; Logic Circuits</span>
                  </div>
                  <span className="text-text-dim text-[10px]">PHYSICAL + DIGITAL</span>
                </div>
              )}

              {!activeTooltip && (
                <div className="w-full p-3 rounded-xl bg-surface/50 border border-dashed border-border/70 text-xs font-mono text-text-dim flex items-center gap-2">
                  <span className="text-accent">&rarr;</span>
                  <span>Hover or tap highlighted phrases above to inspect engineering details</span>
                </div>
              )}
            </div>
          </div>
        )}

        {/* VIEW 2: ARCHITECTURE SPEC SHEET */}
        {viewMode === "architecture" && (
          <div className="space-y-5 transition-all duration-300">
            <div className="space-y-1">
              <h2 className="font-serif text-3xl sm:text-4xl text-text-main font-normal tracking-tight">
                From Silicon to Screen.
              </h2>
              <p className="text-text-muted text-sm font-sans">
                How my Computer Engineering foundation shapes how I write production software:
              </p>
            </div>

            {/* 3-Tier Layered Interactive Architecture Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors space-y-2">
                <span className="font-mono text-[10px] text-accent uppercase font-bold block">
                  LAYER 01 // FRONTEND
                </span>
                <div className="text-text-main font-medium text-sm">Motion &amp; Craft</div>
                <p className="text-text-muted text-xs leading-relaxed">
                  Sub-pixel alignment, smooth Lenis/GSAP scroll physics, responsive fluid layouts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors space-y-2">
                <span className="font-mono text-[10px] text-accent uppercase font-bold block">
                  LAYER 02 // SYSTEMS
                </span>
                <div className="text-text-main font-medium text-sm">Resilient Backends</div>
                <p className="text-text-muted text-xs leading-relaxed">
                  Transactional integrity, idempotent APIs, relational design, and secure auth models.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-surface border border-border hover:border-accent transition-colors space-y-2">
                <span className="font-mono text-[10px] text-accent uppercase font-bold block">
                  LAYER 03 // HARDWARE
                </span>
                <div className="text-text-main font-medium text-sm">CpE Foundations</div>
                <p className="text-text-muted text-xs leading-relaxed">
                  Understanding CPU cycles, memory boundaries, digital logic, and microcontroller I/O.
                </p>
              </div>
            </div>

            {/* Terminal Invariants Box */}
            <div className="p-4 rounded-xl bg-primary border border-border font-mono text-xs space-y-2">
              <div className="text-text-dim text-[10px] uppercase tracking-wider flex items-center justify-between border-b border-border pb-1.5">
                <span>SYSTEM_INVARIANTS</span>
                <span className="text-emerald-400">PASSED</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-text-muted text-[11px]">
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">&bull;</span>
                  <span>Zero unhandled rejections</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">&bull;</span>
                  <span>Accessible keyboard nav</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">&bull;</span>
                  <span>Graceful offline resilience</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="text-accent">&bull;</span>
                  <span>Pragmatism over overengineering</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* METADATA TELEMETRY FOOTER & PING ACTION */}
        <div className="pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-6 text-text-dim">
            <div>
              <span className="text-text-muted block font-medium">Status</span>
              <span className="text-text-main">4th Year CpE Student</span>
            </div>
            <div className="h-6 w-px bg-border" />
            <div>
              <span className="text-text-muted block font-medium">Focus</span>
              <span className="text-text-main">Fullstack &amp; Systems</span>
            </div>
          </div>

          {/* Interactive Ping Manila Station Button */}
          <button
            type="button"
            onClick={handlePing}
            disabled={pingState === "pinging"}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface hover:border-accent transition-colors cursor-pointer text-text-muted hover:text-text-main group"
          >
            <span
              className={`w-2 h-2 rounded-full transition-colors ${
                pingState === "pinging"
                  ? "bg-amber-400 animate-spin"
                  : pingState === "success"
                  ? "bg-emerald-400"
                  : "bg-accent group-hover:bg-accent-hover"
              }`}
            />
            <span>
              {pingState === "pinging"
                ? "Pinging Node..."
                : pingState === "success"
                ? `Node Manila: ${pingLatency}ms (OK)`
                : "Ping Manila Node"}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
