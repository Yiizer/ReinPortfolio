import type { Metadata } from "next";
import WorkList from "@/components/WorkList";
import Footer from "@/components/Footer";
import { ALL_PROJECTS } from "@/data/projects";
import ScrambleText from "@/components/ScrambleText";

export const metadata: Metadata = {
  title: "Works",
  description:
    "Production web applications, internal tools, and engineering projects built by Rein Gavino.",
};

export default function WorksPage() {
  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16">
      <main className="max-w-5xl mx-auto px-6 sm:px-8 space-y-16">
        {/* Page Header */}
        <header className="space-y-4 max-w-2xl border-b border-border pb-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              <ScrambleText text="SELECTED WORK // 2026" />
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-text-main font-normal tracking-tight">
            Projects &amp; Systems
          </h1>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            A catalog of internal enterprise tools, restaurant ordering platforms, engineering thesis prototypes, and production applications.
          </p>
        </header>

        {/* Project Grid */}
        <WorkList projects={ALL_PROJECTS} />
      </main>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
