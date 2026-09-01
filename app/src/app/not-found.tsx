import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested route does not exist.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6 py-24">
      {/* Background Ambient Glow */}
      <div
        className="pointer-events-none absolute h-96 w-96 rounded-full blur-3xl opacity-20"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.4) 0%, rgba(9,9,11,0) 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-md w-full text-center space-y-6 p-8 rounded-2xl bg-surface/60 border border-border-line shadow-2xl">
        {/* Terminal Header Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border-line font-mono text-xs text-accent">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          <span>HTTP 404 // ROUTE_NOT_FOUND</span>
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-4xl sm:text-5xl text-white font-medium">
            Lost in Circuit
          </h1>
          <p className="font-sans text-muted text-sm sm:text-base leading-relaxed">
            The page or signal you are looking for has been moved, relocated, or does not exist on this server.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-accent text-zinc-950 hover:bg-accent-hover font-semibold text-xs font-mono transition-all duration-200 shadow-md shadow-accent/20 cursor-pointer w-full sm:w-auto"
          >
            ← Return to Home
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-lg bg-surface border border-border-line hover:border-accent/40 text-zinc-300 hover:text-accent font-mono text-xs transition-colors cursor-pointer w-full sm:w-auto"
          >
            View Projects ↗
          </Link>
        </div>
      </div>
    </div>
  );
}
