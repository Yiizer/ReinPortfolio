import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 — Page Not Found",
  description: "The requested route does not exist.",
};

export default function NotFound() {
  return (
    <div className="relative min-h-[80vh] flex items-center justify-center px-6 py-24">
      <div className="max-w-md w-full text-center space-y-6 p-8 sm:p-10 rounded-xl bg-surface border border-border">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
          404 / Missing Route
        </span>

        <div className="space-y-2">
          <h1 className="font-serif text-4xl sm:text-5xl text-text-main font-normal">
            Page Not Found
          </h1>
          <p className="text-text-muted text-sm leading-relaxed">
            The requested page does not exist or has been relocated.
          </p>
        </div>

        <div className="pt-2 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-accent text-white hover:bg-accent-hover font-mono text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            <span>&larr; Return Home</span>
          </Link>
          <Link
            href="/works"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded bg-primary border border-border hover:border-accent text-text-muted hover:text-accent font-mono text-xs uppercase tracking-wider transition-colors"
          >
            <span>All Works &rarr;</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
