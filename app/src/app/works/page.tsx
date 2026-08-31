import Link from "next/link";
import WorkList from "@/components/WorkList";
import Contact from "@/components/Contact";
import { ALL_PROJECTS } from "@/data/projects";

export default function WorksPage() {
  return (
    <div className="relative min-h-screen">
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
