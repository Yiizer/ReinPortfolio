import type { Metadata } from "next";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrambleText from "@/components/ScrambleText";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Rein Gavino for fullstack web applications, contract work, and engineering inquiries.",
};

export default function ContactPage() {
  return (
    <div className="relative min-h-screen pt-24 sm:pt-28 pb-16">
      <main className="max-w-5xl mx-auto px-6 sm:px-8 space-y-12">
        <header className="space-y-4 max-w-2xl border-b border-border pb-10">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              <ScrambleText text="DIRECT INQUIRIES // 2026" />
            </span>
          </div>
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-text-main font-normal tracking-tight">
            Get in touch.
          </h1>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed">
            Available for full-time opportunities, engineering contracts, and technical consulting. Submit a message below or email directly.
          </p>
        </header>

        <Contact />
      </main>

      <div className="mt-24">
        <Footer />
      </div>
    </div>
  );
}
