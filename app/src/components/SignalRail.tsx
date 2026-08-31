"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "Intro" },
  { id: "work", label: "Work" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function SignalRail() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: 0.1 }
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const activeIndex = SECTIONS.findIndex((s) => s.id === active);

  return (
    <nav
      aria-label="Table of contents"
      className="hidden md:flex fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 flex-col items-start justify-center select-none z-40"
    >
      <div className="relative flex h-56 flex-col items-start justify-between">
        {/* Continuous Track Line: connects from center of first dot to center of last dot */}
        <div className="absolute left-2.5 top-2.5 bottom-2.5 w-px -translate-x-1/2 bg-border-line" />

        {SECTIONS.map((section, i) => {
          const isActive = i === activeIndex;
          return (
            <button
              key={section.id}
              type="button"
              onClick={() =>
                document
                  .getElementById(section.id)
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative z-10 flex items-center gap-3 cursor-pointer py-1.5 outline-none focus-visible:ring-2 focus-visible:ring-coral/60 transition-transform active:scale-95 text-left"
              aria-label={`Scroll to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              {/* Dot Container (w-5 = 20px, centered at 10px) */}
              <div className="relative flex items-center justify-center w-5 h-5 shrink-0">
                {isActive && (
                  <span className="absolute w-5 h-5 rounded-full bg-accent/30 animate-ping pointer-events-none" />
                )}
                <span
                  className={`relative z-10 rounded-full border transition-all duration-200 ${
                    isActive
                      ? "w-2.5 h-2.5 border-accent bg-accent shadow-[0_0_12px_rgba(41,184,166,0.85)]"
                      : "w-2 h-2 border-border-line bg-ink group-hover:border-zinc-400 group-hover:bg-zinc-800 group-hover:scale-125"
                  }`}
                />
              </div>

              {/* Section Label */}
              <span
                className={`whitespace-nowrap font-mono text-[11px] tracking-wide transition-all duration-200 ${
                  isActive
                    ? "text-accent opacity-100 translate-x-0 font-semibold"
                    : "text-muted opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-zinc-200"
                }`}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}