"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Magnetic from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";

gsap.registerPlugin(ScrollTrigger);

export default function AboutTeaser() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cards = cardsRef.current?.querySelectorAll(".teaser-card");
      if (cards && cards.length > 0) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              once: true,
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="teaser"
      ref={sectionRef}
      className="min-h-[75vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-28 border-t border-border scroll-mt-20 select-none"
    >
      <div className="space-y-10">
        {/* Section Tag */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            <ScrambleText text="DISCIPLINES // CRAFT" />
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-text-main">
            Curiosity turned into production software.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            I&apos;m a 4th-year Computer Engineering student in Manila. Rather than staying inside one lane, I build across the entire stack &mdash; from fluid frontends and ACID-compliant backends to live restaurant POS workflows and hardware simulations.
          </p>
        </div>

        {/* Technical Overview Cards with Visual Icons & Hover Glow */}
        <div ref={cardsRef} className="grid grid-cols-1 sm:grid-cols-3 gap-5 pt-2">
          {/* Card 1: Web Development */}
          <div className="teaser-card group p-6 rounded-2xl bg-gradient-to-b from-surface to-surface-elevated/70 border border-border hover:border-accent/60 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-primary/80 border border-border group-hover:border-accent/40 flex items-center justify-center text-text-main group-hover:text-accent transition-colors">
                {/* Code / Terminal SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-3 3 3 3m8-6l3 3-3 3m-7 3l2-12" />
                </svg>
              </div>
              <span className="font-mono text-[11px] text-text-dim group-hover:text-accent font-semibold transition-colors">
                01
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-main font-semibold group-hover:text-accent transition-colors">
                Web Development
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                Next.js, TypeScript, PostgreSQL, and structured REST APIs built for sub-pixel craft, data integrity, and speed.
              </p>
            </div>
            {/* Subtle bottom decorative indicator */}
            <div className="pt-2 flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
              <span className="text-accent">&bull;</span>
              <span>Next.js &bull; TypeScript &bull; Postgres</span>
            </div>
          </div>

          {/* Card 2: Operations */}
          <div className="teaser-card group p-6 rounded-2xl bg-gradient-to-b from-surface to-surface-elevated/70 border border-border hover:border-accent/60 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-primary/80 border border-border group-hover:border-accent/40 flex items-center justify-center text-text-main group-hover:text-accent transition-colors">
                {/* Workflow / Layers SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <span className="font-mono text-[11px] text-text-dim group-hover:text-accent font-semibold transition-colors">
                02
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-main font-semibold group-hover:text-accent transition-colors">
                Operations &amp; POS
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                Production ordering systems and multi-terminal workflows synchronizing concurrent table states, kitchen tickets, and payments.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
              <span className="text-accent">&bull;</span>
              <span>Live Queues &bull; POS &bull; Realtime</span>
            </div>
          </div>

          {/* Card 3: Hardware & 3D */}
          <div className="teaser-card group p-6 rounded-2xl bg-gradient-to-b from-surface to-surface-elevated/70 border border-border hover:border-accent/60 hover:shadow-xl hover:shadow-black/20 hover:-translate-y-1.5 transition-all duration-300 space-y-4 relative overflow-hidden">
            <div className="flex items-center justify-between">
              <div className="w-10 h-10 rounded-xl bg-primary/80 border border-border group-hover:border-accent/40 flex items-center justify-center text-text-main group-hover:text-accent transition-colors">
                {/* Chip / 3D Spatial SVG */}
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M3 9h2m-2 6h2m14-6h2m-2 6h2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              </div>
              <span className="font-mono text-[11px] text-text-dim group-hover:text-accent font-semibold transition-colors">
                03
              </span>
            </div>
            <div className="space-y-2">
              <h3 className="font-mono text-sm uppercase tracking-wider text-text-main font-semibold group-hover:text-accent transition-colors">
                Hardware &amp; 3D
              </h3>
              <p className="text-xs text-text-muted leading-relaxed font-sans">
                Unity 3D simulations, Android augmented reality, and ATmega328P microcontroller circuit telemetry rooted in Computer Engineering.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-1.5 font-mono text-[10px] text-text-dim">
              <span className="text-accent">&bull;</span>
              <span>Unity 3D &bull; AR &bull; Microcontrollers</span>
            </div>
          </div>
        </div>

        {/* CTA Link */}
        <div className="pt-2">
          <Magnetic strength={0.25}>
            <Link
              href="/about"
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-lg bg-surface border border-border hover:border-accent font-mono text-xs uppercase tracking-wider text-text-main hover:text-accent transition-colors group"
            >
              <ScrambleText text="Read journey & story" />
              <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
            </Link>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
