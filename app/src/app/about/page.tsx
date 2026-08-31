"use client";

import Link from "next/link";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";

export default function AboutPage() {
  return (
    <div className="relative min-h-screen bg-ink text-zinc-100 selection:bg-white/20 selection:text-white">
      {/* Top Floating Glass Monogram/Nav */}
      <FloatingNav />

      {/* Background Layer 1: Ambient Luminous Silver/Cyan Light Pools */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="animate-ambient-1 absolute -top-20 left-[15%] h-[600px] w-[600px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(6,182,212,0.2) 0%, rgba(212,212,216,0.1) 45%, rgba(9,9,11,0) 70%)",
          }}
        />
        <div
          className="animate-ambient-2 absolute top-[35%] right-[6%] h-[560px] w-[560px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(228,228,231,0.25) 0%, rgba(6,182,212,0.1) 50%, rgba(9,9,11,0) 70%)",
          }}
        />
        <div
          className="animate-ambient-3 absolute bottom-[10%] left-[18%] h-[540px] w-[540px] rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(212,212,216,0.1) 45%, rgba(9,9,11,0) 70%)",
          }}
        />
      </div>

      {/* Background Layer 2: Technical Repeating Dot Grid Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24 space-y-20">
        {/* Navigation & Header */}
        <div className="space-y-6 border-b border-border-line pb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-accent transition-colors"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </Link>

          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="w-6 sm:w-8 h-px bg-accent inline-block" />
              <span className="font-mono text-xs tracking-[0.16em] text-accent uppercase font-semibold">
                BIOGRAPHY &mdash; REIN GAVINO
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight">
              Fullstack Developer &amp; System Architect
            </h1>

            <p className="text-muted text-lg max-w-3xl leading-relaxed">
              Passionate about creating clean, resilient digital products. I combine solid backend engineering with fluid, responsive user interfaces to deliver exceptional software experiences.
            </p>
          </div>
        </div>

        {/* Narrative Bio & Principles */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4 space-y-4">
            <p className="font-mono text-xs tracking-widest text-accent uppercase">
              [ BACKGROUND ]
            </p>
            <h2 className="font-serif text-2xl text-white font-medium">
              Bridging engineering rigor with intuitive user experiences.
            </h2>
          </div>

          <div className="md:col-span-8 space-y-6 text-zinc-300 text-sm leading-relaxed">
            <p>
              Based in Manila, Philippines, I specialize in architecting fullstack web applications, real-time POS systems, and interactive 3D simulations. My focus is on writing maintainable code, optimizing database performance, and designing intuitive interfaces.
            </p>
            <p>
              Whether engineering transactional inventory systems for live retail counters or developing interactive 3D simulations, I believe great software is born at the intersection of precision, performance, and attention to detail.
            </p>
          </div>
        </div>

        {/* Technical Stack Section */}
        <TechStack />

        {/* Footer Contact */}
        <Contact />
      </main>
    </div>
  );
}
