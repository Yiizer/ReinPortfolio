"use client";

import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section
      id="teaser"
      className="min-h-[75vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-28 border-t border-border scroll-mt-20 select-none"
    >
      <div className="space-y-8">
        {/* Section Tag */}
        <span className="font-mono text-xs uppercase tracking-widest text-text-dim block">
          About
        </span>

        {/* Heading */}
        <div className="space-y-4 max-w-3xl">
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-text-main">
            Engineering software systems with pragmatic craft.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed font-sans max-w-2xl">
            I&apos;m a 4th-year Computer Engineering student in Manila. My work spans fullstack web applications, operational retail tools, relational database systems, and interactive simulations in Unity.
          </p>
        </div>

        {/* Technical Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-xl bg-surface border border-border/70 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
              01 / Architecture
            </span>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              Next.js, TypeScript, PostgreSQL, and structured REST APIs built for data integrity and speed.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface border border-border/70 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
              02 / Operations
            </span>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              Production ordering systems and POS workflows handling concurrent tables, tickets, and payments.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-surface border border-border/70 space-y-2">
            <span className="font-mono text-xs uppercase tracking-wider text-accent font-semibold block">
              03 / Hardware &amp; 3D
            </span>
            <p className="text-xs text-text-muted leading-relaxed font-sans">
              Unity 3D simulations, Android augmented reality, and embedded microcontroller circuits.
            </p>
          </div>
        </div>

        {/* CTA Link */}
        <div className="pt-2">
          <Link
            href="/about"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-main hover:text-accent transition-colors group"
          >
            <span>Read full story &amp; timeline</span>
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
