import type { Metadata } from "next";
import Link from "next/link";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Rein Gavino for web applications, fullstack contracts, and software engineering inquiries.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen">
      <main className="relative z-10 w-full max-w-5xl mx-auto px-6 sm:px-8 pt-16 sm:pt-24">
        {/* Navigation & Header */}
        <div className="space-y-6 border-b border-border-line pb-12 mb-12">
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
                INQUIRIES &mdash; CONTACT
              </span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium tracking-tight">
              Let&apos;s Build Together
            </h1>

            <p className="text-muted text-lg max-w-2xl leading-relaxed">
              Available for full-time opportunities, engineering contracts, and creative collaborations.
            </p>
          </div>
        </div>

        {/* Contact Module */}
        <Contact />
      </main>
    </div>
  );
}
