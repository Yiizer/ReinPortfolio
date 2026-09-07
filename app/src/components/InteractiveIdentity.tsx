"use client";

import { useState, useRef, useSyncExternalStore, type MouseEvent } from "react";
import Image from "next/image";
import ScrambleText from "@/components/ScrambleText";

function subscribeClock(callback: () => void) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function getPHTimeSnapshot(): string {
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

type DisciplineKey = "fullstack" | "cpe" | "simulation";

const DISCIPLINE_DATA: Record<
  DisciplineKey,
  { label: string; badge: string; description: string; tools: string[] }
> = {
  fullstack: {
    label: "Fullstack Systems",
    badge: "WEB & TRANSACTIONAL",
    description:
      "Designing responsive frontend interfaces in React & Next.js paired with resilient PostgreSQL relational backends, clean REST endpoints, and sub-pixel motion craft.",
    tools: ["Next.js 16", "TypeScript", "PostgreSQL", "Tailwind v4", "REST APIs"],
  },
  cpe: {
    label: "Computer Engineering",
    badge: "HARDWARE & SYSTEMS",
    description:
      "Applying low-level engineering fundamentals — understanding memory layouts, CPU cycles, microarchitecture, and microcontroller logic circuits like the ATmega328P.",
    tools: ["Microcontrollers", "C / C++", "Digital Logic", "Circuits", "Assembly"],
  },
  simulation: {
    label: "3D & Simulation",
    badge: "SPATIAL & REALTIME",
    description:
      "Building interactive simulations and augmented reality experiences in Unity 3D with C#, custom physics loops, and real-time sensor integration.",
    tools: ["Unity 3D", "C#", "Android AR", "Game Physics", "3D Modeling"],
  },
};

export default function InteractiveIdentity() {
  // 3D Tilt & Specular state
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [activeDiscipline, setActiveDiscipline] = useState<DisciplineKey>("fullstack");

  // Hydration-safe real live Philippine clock
  const phTime = useSyncExternalStore(
    subscribeClock,
    getPHTimeSnapshot,
    getServerClockSnapshot
  );

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -12;
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

  const currentDisc = DISCIPLINE_DATA[activeDiscipline];

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
            {/* Visual Portrait */}
            <div className="absolute inset-0 z-10">
              <Image
                src="/profile.jpg"
                alt="Rein Gavino"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/25 pointer-events-none" />
            </div>

            {/* Specular Light Reflection Sheen (Follows Mouse) */}
            <div
              className="absolute inset-0 pointer-events-none z-20 transition-opacity duration-300"
              style={{
                background: `radial-gradient(circle 240px at ${glare.x}% ${glare.y}%, rgba(255,255,255,${glare.opacity}), transparent 75%)`,
              }}
            />

            {/* Bottom Floating Badge: Real Live Philippine Time & Location */}
            <div
              className="absolute bottom-4 left-4 right-4 z-30 transition-transform duration-200"
              style={{ transform: isHovered ? "translateZ(26px)" : "translateZ(0px)" }}
            >
              <div className="bg-primary/90 backdrop-blur-md px-4 py-2.5 rounded-xl border border-border/90 shadow-xl flex items-center justify-between text-xs font-mono">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                  </span>
                  <span className="text-text-main font-medium">Philippines (PH)</span>
                </div>
                <div className="text-text-muted font-mono tracking-wider tabular-nums text-[11px]">
                  {phTime}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle Micro-Interaction Hint */}
        <div className="mt-3 flex items-center gap-2 text-text-dim text-[11px] font-mono">
          <span className="text-accent">&uarr;&darr;</span>
          <span>3D perspective hover &bull; Live PH clock</span>
        </div>
      </div>

      {/* RIGHT COLUMN: Authentic Conversational Bio & Interactive Discipline Focus */}
      <div className="md:col-span-7 space-y-6 order-1 md:order-2">
        <div className="space-y-1">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
            <ScrambleText text="CHAPTER 01 // IDENTITY" />
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-main font-normal tracking-tight leading-[1.05]">
          Curiosity through code.
        </h1>

        <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed font-sans">
          <p>
            I&apos;m a 4th-year Computer Engineering student based in the Philippines. I build fullstack web applications, operational tools, and interactive simulations.
          </p>

          <p>
            Rather than staying locked into one corner of software, I enjoy connecting all the parts &mdash; designing clean interfaces, building reliable transactional backends, and working with hardware circuits and game engines.
          </p>
        </div>

        {/* Interactive Discipline Focus Selector */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center justify-between font-mono text-xs text-text-dim border-b border-border/60 pb-2">
            <span>EXPLORE DISCIPLINES</span>
            <span className="text-accent text-[10px] uppercase font-semibold">
              {currentDisc.badge}
            </span>
          </div>

          <div className="flex flex-wrap gap-2">
            {(Object.keys(DISCIPLINE_DATA) as DisciplineKey[]).map((key) => {
              const d = DISCIPLINE_DATA[key];
              const isSelected = activeDiscipline === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveDiscipline(key)}
                  onMouseEnter={() => setActiveDiscipline(key)}
                  className={`px-3.5 py-1.5 rounded-lg font-mono text-xs transition-all duration-200 cursor-pointer border ${
                    isSelected
                      ? "bg-accent text-white border-accent shadow-md shadow-accent/20 font-semibold"
                      : "bg-surface border-border text-text-muted hover:text-text-main hover:border-accent/40"
                  }`}
                >
                  {d.label}
                </button>
              );
            })}
          </div>

          {/* Interactive Discipline Insight Box */}
          <div className="p-4 rounded-xl bg-surface/80 border border-border/90 space-y-3 text-xs transition-all duration-200">
            <p className="text-text-muted leading-relaxed font-sans">
              {currentDisc.description}
            </p>
            <div className="flex flex-wrap gap-1.5 pt-1 border-t border-border/50">
              {currentDisc.tools.map((tool) => (
                <span
                  key={tool}
                  className="font-mono text-[11px] text-text-main bg-primary px-2.5 py-0.5 rounded border border-border"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Stat Grid */}
        <div className="pt-4 border-t border-border/80 flex flex-wrap items-center gap-8 font-mono text-xs text-text-muted">
          <div>
            <span className="text-text-dim block text-[11px]">Degree</span>
            <span className="text-text-main font-medium">BS Computer Engineering</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div>
            <span className="text-text-dim block text-[11px]">Station</span>
            <span className="text-text-main font-medium">Philippines</span>
          </div>
          <div className="h-6 w-px bg-border" />
          <div>
            <span className="text-text-dim block text-[11px]">Status</span>
            <span className="text-text-main font-medium">Open for 2026 Roles</span>
          </div>
        </div>
      </div>
    </div>
  );
}
