"use client";

import Link from "next/link";
import WorkList from "@/components/WorkList";
import Contact from "@/components/Contact";
import FloatingNav from "@/components/FloatingNav";
import { ALL_PROJECTS } from "@/data/projects";

export default function WorksPage() {
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

      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24">
        {/* Navigation & Header */}
        <div className="space-y-6 border-b border-border-line pb-12">
          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-mono text-xs text-zinc-400 hover:text-accent transition-colors"
          >
            <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
            <span>Back to Home</span>
          </Link>

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="w-6 sm:w-8 h-px bg-accent inline-block" />
              <span className="font-mono text-xs tracking-[0.16em] text-accent uppercase font-semibold">
                PROJECTS &mdash; 2026
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight">
              My Works &amp; Systems
            </h1>

            <p className="text-muted text-base max-w-2xl leading-relaxed">
              A comprehensive showcase of production applications, e-commerce platforms,
              augmented reality simulations, and client software solutions.
            </p>
          </div>
        </div>

        {/* Full Works List with All 4 Projects */}
        <WorkList
          projects={ALL_PROJECTS}
          showViewAllLink={false}
          sectionTitle="[ ALL PROJECTS ]"
          sectionId="all-works"
        />

        {/* Footer */}
        <Contact />
      </main>
    </div>
  );
}
