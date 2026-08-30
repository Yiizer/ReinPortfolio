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
    name: "X / Twitter",
    url: "https://x.com",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
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

export default function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="p-8 sm:p-12 rounded-xl bg-surface/60 border border-border-line relative overflow-hidden">
          {/* Subtle accent glow */}
          <div
            className="pointer-events-none absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-15"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.2) 0%, rgba(9,9,11,0) 70%)",
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 space-y-6 max-w-2xl">
            <span className="font-mono text-xs text-zinc-300 tracking-wider uppercase block font-semibold">
              [ Connect &amp; Collaborate ]
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl text-zinc-100 font-medium leading-tight">
              Have a project in mind, or want to talk systems and design?
            </h2>

            <p className="font-sans text-muted text-base sm:text-lg leading-relaxed">
              I am always open to discussing new opportunities, consulting on
              design systems, and collaborating on high-ambition software products.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center justify-center px-6 py-3.5 rounded-md bg-zinc-100 border border-zinc-200 text-zinc-950 hover:bg-white font-medium text-sm transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.35)]"
              >
                <span>hello@example.com</span>
                <svg
                  className="ml-2 w-4 h-4"
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
              </a>
            </div>
          </div>
        </div>

        {/* Footer info & socials */}
        <div className="mt-16 pt-8 border-t border-border-line flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-muted">
          <p className="text-zinc-300 font-medium">&copy; REIN</p>

          <p className="text-zinc-500">Manila, PH</p>

          <div className="flex items-center gap-5">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                aria-label={s.name}
                className="text-zinc-400 hover:text-white transition-colors p-1 hover:scale-110"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

