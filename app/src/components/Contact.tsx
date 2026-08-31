"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SOCIALS = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "ReadCV",
    url: "https://read.cv",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M4.5 2A2.5 2.5 0 002 4.5v15A2.5 2.5 0 004.5 22h15a2.5 2.5 0 002.5-2.5v-15A2.5 2.5 0 0019.5 2h-15zM7 7h10v1.5H7V7zm0 4h10v1.5H7V11zm0 4h6v1.5H7V15z" />
      </svg>
    ),
  },
];

interface ContactProps {
  forceForm?: boolean;
}

export default function Contact({ forceForm }: ContactProps) {
  const pathname = usePathname();
  const isContactPage = forceForm ?? pathname === "/contact";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#contact-form") {
      const timer = setTimeout(() => {
        const formEl = document.getElementById("contact-form");
        if (formEl) {
          formEl.scrollIntoView({ behavior: "smooth", block: "start" });
          const nameInput = document.getElementById("contact-name");
          nameInput?.focus({ preventScroll: true });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [pathname]);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("reingabrielgavino1723@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailSubject = encodeURIComponent(
      subject.trim() ? subject.trim() : `Project Inquiry from ${name}`
    );
    const mailBody = encodeURIComponent(
      `Hi Rein,\n\n${message}\n\n---\nFrom: ${name}\nEmail: ${email}`
    );
    window.location.href = `mailto:reingabrielgavino1723@gmail.com?subject=${mailSubject}&body=${mailBody}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-2xl bg-surface/60 border border-border-line relative overflow-hidden shadow-2xl">
          {/* Subtle accent glow */}
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-20"
            style={{
              background:
                "radial-gradient(circle, rgba(6,182,212,0.3) 0%, rgba(9,9,11,0) 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            {isContactPage ? (
              <div id="contact-form" className="space-y-8 scroll-mt-24 sm:scroll-mt-32">
                <div className="space-y-4 max-w-2xl">
                  <span className="font-mono text-xs text-zinc-300 tracking-wider uppercase block font-semibold">
                    [ Connect &amp; Collaborate ]
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-medium leading-tight">
                    Have a project in mind?
                  </h2>

                  <p className="font-sans text-muted text-base sm:text-lg leading-relaxed">
                    Whether it&apos;s a website, web app, or a larger software system, I&apos;m always open to discussing ideas and figuring out how to bring them to life.
                  </p>
                </div>

                {/* Contact Form on /contact page */}
                <div className="space-y-6 pt-2">
                  {/* Direct email quick copy banner */}
                  <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl bg-ink/80 border border-border-line text-xs font-mono">
                    <div className="flex items-center gap-2 text-zinc-300">
                      <span className="text-zinc-500">Direct Email:</span>
                      <span className="text-zinc-200 font-semibold select-all">reingabrielgavino1723@gmail.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={handleCopyEmail}
                        className="px-3 py-1 rounded bg-surface border border-border-line hover:border-accent/40 text-zinc-300 hover:text-accent transition-colors cursor-pointer text-[11px]"
                      >
                        {copied ? "✓ Copied" : "Copy Email"}
                      </button>
                      <a
                        href="mailto:reingabrielgavino1723@gmail.com"
                        className="px-3 py-1 rounded bg-accent/10 border border-accent/30 text-accent hover:bg-accent hover:text-zinc-950 transition-all font-medium text-[11px]"
                      >
                        Open in Mail App ↗
                      </a>
                    </div>
                  </div>

                  {submitted ? (
                    <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-zinc-200 space-y-3 animate-in fade-in duration-300">
                      <div className="flex items-center gap-2.5 text-emerald-400 font-mono text-sm font-semibold">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                        <span>Opening your email client...</span>
                      </div>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        Your default mail application is launching with your pre-filled inquiry. If it doesn&apos;t open automatically, you can send your message directly to{" "}
                        <a href="mailto:reingabrielgavino1723@gmail.com" className="text-accent underline font-medium">
                          reingabrielgavino1723@gmail.com
                        </a>.
                      </p>
                      <button
                        type="button"
                        onClick={() => setSubmitted(false)}
                        className="font-mono text-xs text-accent hover:underline pt-1 cursor-pointer inline-block"
                      >
                        ← Send another message / edit form
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-1.5">
                          <label htmlFor="contact-name" className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                            Your Name <span className="text-accent">*</span>
                          </label>
                          <input
                            id="contact-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Jane Doe"
                            className="w-full rounded-lg bg-ink/80 border border-border-line px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all"
                          />
                        </div>

                        <div className="space-y-1.5">
                          <label htmlFor="contact-email" className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                            Email Address <span className="text-accent">*</span>
                          </label>
                          <input
                            id="contact-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="jane@example.com"
                            className="w-full rounded-lg bg-ink/80 border border-border-line px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-subject" className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                          Subject / Project Scope
                        </label>
                        <input
                          id="contact-subject"
                          type="text"
                          value={subject}
                          onChange={(e) => setSubject(e.target.value)}
                          placeholder="POS System / E-Commerce / Fullstack Contract / Consultation"
                          className="w-full rounded-lg bg-ink/80 border border-border-line px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label htmlFor="contact-message" className="font-mono text-xs text-zinc-400 uppercase tracking-wider block">
                          Message <span className="text-accent">*</span>
                        </label>
                        <textarea
                          id="contact-message"
                          required
                          rows={4}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Tell me about your project goals, scope, or timeline..."
                          className="w-full rounded-lg bg-ink/80 border border-border-line px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-600 outline-none focus:border-accent focus:ring-1 focus:ring-accent/40 transition-all resize-y min-h-[110px]"
                        />
                      </div>

                      <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center px-7 py-3.5 rounded-lg bg-accent text-zinc-950 hover:bg-accent-hover font-semibold text-sm transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-[0.98] cursor-pointer"
                        >
                          <span>Send Message</span>
                          <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </button>

                        <span className="font-mono text-[11px] text-zinc-500 hidden sm:inline-block">
                          Dispatches directly via email
                        </span>
                      </div>
                    </form>
                  )}
                </div>
              </div>
            ) : (
              /* CTA Banner on other pages -> Split layout (Text Left, Buttons Right) */
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
                <div className="space-y-4 max-w-xl">
                  <span className="font-mono text-xs text-zinc-300 tracking-wider uppercase block font-semibold">
                    [ Connect &amp; Collaborate ]
                  </span>

                  <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-medium leading-tight">
                    Have a project in mind?
                  </h2>

                  <p className="font-sans text-muted text-base sm:text-lg leading-relaxed">
                    Whether it&apos;s a website, web app, or a larger software system, I&apos;m always open to discussing ideas and figuring out how to bring them to life.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row md:flex-col items-stretch sm:items-center md:items-end gap-3.5 shrink-0">
                  <Link
                    href="/contact#contact-form"
                    className="group inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-accent text-zinc-950 hover:bg-accent-hover font-semibold text-sm transition-all duration-200 shadow-lg shadow-accent/20 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)] active:scale-[0.98] cursor-pointer w-full sm:w-auto"
                  >
                    <span>Get in Touch</span>
                    <svg
                      className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>

                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="group font-mono text-xs text-zinc-400 hover:text-accent transition-all px-4 py-3 rounded-md border border-border-line hover:border-accent/40 bg-surface/40 hover:bg-surface/70 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98] w-full sm:w-auto"
                    title="Click to copy email address"
                  >
                    {copied ? (
                      <span className="text-accent font-medium flex items-center gap-1.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        Copied to clipboard!
                      </span>
                    ) : (
                      <>
                        <span>reingabrielgavino1723@gmail.com</span>
                        <svg
                          className="w-3.5 h-3.5 text-zinc-500 group-hover:text-accent transition-colors"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Footer info & socials */}
        <div className="mt-16 pt-8 border-t border-border-line flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <p className="text-zinc-300 font-medium">&copy; REIN</p>

          <p className="text-zinc-500">Manila, PH</p>

          <div className="flex items-center gap-2">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="group relative flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-accent hover:bg-surface/80 border border-transparent hover:border-zinc-700/60 transition-all duration-200 cursor-pointer"
              >
                <div className="transition-transform duration-200 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_rgba(6,182,212,0.5)]">
                  {s.icon}
                </div>

                {/* Floating Tooltip with short name */}
                <span className="pointer-events-none absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-surface/95 border border-zinc-700/80 px-2 py-0.5 font-mono text-[10px] text-zinc-200 opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 whitespace-nowrap shadow-xl shadow-black/50 z-20">
                  {s.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

