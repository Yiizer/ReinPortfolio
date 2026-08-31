"use client";

import Link from "next/link";
import Image from "next/image";
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
              Fullstack Developer
            </h1>

            <p className="text-muted text-lg max-w-3xl leading-relaxed">
              I create websites of all scales, web applications, and software systems — bringing together the interface, functionality, backend, and database behind them.
            </p>
          </div>
        </div>

        {/* Narrative Bio & Portrait Photo */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Portrait Photo & Metadata */}
          <div className="md:col-span-5 space-y-4">
            <div className="relative group/photo">
              {/* Subtle background glow on hover */}
              <div
                className="pointer-events-none absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover/photo:opacity-100"
                aria-hidden="true"
              />
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border border-border-line bg-surface/70 shadow-2xl transition-all duration-300 group-hover/photo:border-accent/40 group-hover/photo:shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <Image
                  src="/profile.jpg"
                  alt="Rein Gavino"
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-center transition-transform duration-500 group-hover/photo:scale-[1.02]"
                  priority
                />
                {/* Subtle bottom vignette gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-85 pointer-events-none" />
                <div className="absolute bottom-4 inset-x-4 flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-200 font-medium">Rein Gavino</span>
                  </div>
                  <span className="text-accent bg-surface/90 border border-border-line px-2 py-0.5 rounded text-[10px] shadow-sm">
                     PH
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Contact & Info Card */}
            <div className="p-4 rounded-xl bg-surface/50 border border-border-line space-y-3 font-mono text-xs shadow-sm">
              <div className="space-y-1">
                <span className="text-zinc-500 text-[11px] uppercase tracking-wider block">Direct Email</span>
                <Link
                  href="/contact"
                  className="text-accent hover:underline hover:text-accent-hover transition-colors font-medium break-all block"
                >
                  reingabrielgavino1723@gmail.com &rarr;
                </Link>
              </div>
              <div className="flex items-center justify-between text-zinc-400 border-t border-border-line/60 pt-2.5">
                <span className="text-zinc-500 text-[11px]">Specialization</span>
                <span className="text-zinc-200">Fullstack &amp; Web Applications </span>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative Bio */}
          <div className="md:col-span-7 space-y-6">
            <div className="space-y-3">
              <p className="font-mono text-xs tracking-widest text-accent uppercase font-semibold">
                [ BACKGROUND &amp; PHILOSOPHY ]
              </p>
              <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium leading-snug">
                Building the system, not just the screen.
              </h2>
            </div>

            <div className="space-y-5 text-zinc-300 text-sm sm:text-base leading-relaxed">
              <p>
                I'm currently a 4th year Computer Engineering student and fullstack developer focused on building practical, reliable software.
              </p>
              <p>
                I've worked on POS and ordering systems, business websites, CRUD applications, and database-driven platforms, handling everything from frontend development and API integration to authentication, backend logic, and database design.
              </p>
              <p>
                I enjoy understanding how a system works as a whole — not just how it looks, but how its data, logic, and users connect behind the interface.

I'm continuously building, learning, and refining how I approach software development.
              </p>
            </div>
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
