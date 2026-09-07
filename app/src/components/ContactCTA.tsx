"use client";

import { useState } from "react";
import Link from "next/link";
import Magnetic from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";

export default function ContactCTA() {
  const [copied, setCopied] = useState(false);
  const email = "reingabrielgavino1723@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact-cta"
      className="min-h-[75vh] flex flex-col justify-center max-w-5xl mx-auto px-6 py-28 border-t border-border scroll-mt-20 select-none"
    >
      <div className="space-y-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
            <ScrambleText text="CONNECT // 2026" />
          </span>
        </div>

        {/* Heading */}
        <div className="space-y-3 max-w-2xl">
          <h2 className="text-3xl sm:text-5xl font-serif tracking-tight text-text-main">
            Get in touch.
          </h2>
          <p className="text-text-muted text-base sm:text-lg leading-relaxed font-sans">
            Available for software engineering roles, contracts, or just a friendly chat.
          </p>
        </div>

        {/* Contact Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-border/80 shadow-xl space-y-6 max-w-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/60 pb-6">
            <div className="space-y-1">
              <span className="font-mono text-[11px] uppercase tracking-wider text-text-dim block">
                Direct Email
              </span>
              <span className="font-mono text-sm sm:text-base text-text-main font-medium select-text">
                {email}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <Magnetic strength={0.25}>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="px-4 py-2 rounded-lg bg-primary border border-border hover:border-accent text-text-main font-mono text-xs transition-colors cursor-pointer"
                >
                  <ScrambleText text={copied ? "Copied!" : "Copy Email"} />
                </button>
              </Magnetic>

              <Magnetic strength={0.25}>
                <a
                  href={`mailto:${email}`}
                  className="px-4 py-2 rounded-lg bg-accent text-white hover:bg-accent-hover font-mono text-xs font-semibold transition-colors shadow-md shadow-accent/20 block"
                >
                  <ScrambleText text="Open Mail →" />
                </a>
              </Magnetic>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono text-xs text-text-muted">
            <div className="flex items-center gap-2">
              <span>Philippines</span>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/contact"
                className="text-text-main hover:text-accent transition-colors"
              >
                Send a message &rarr;
              </Link>
              <span>&bull;</span>
              <a
                href="https://github.com/rein-gavino"
                target="_blank"
                rel="noreferrer"
                className="text-text-main hover:text-accent transition-colors"
              >
                GitHub
              </a>
              <span>&bull;</span>
              <a
                href="https://linkedin.com/in/rein-gavino"
                target="_blank"
                rel="noreferrer"
                className="text-text-main hover:text-accent transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
