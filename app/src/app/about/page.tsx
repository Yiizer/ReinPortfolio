"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SignalRail from "@/components/SignalRail";
import Footer from "@/components/Footer";
import InteractiveIdentity from "@/components/InteractiveIdentity";
import Magnetic from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ROADMAP_MILESTONES = [
  {
    phase: "01",
    year: "2017",
    age: "Age 13",
    timeframe: "2017",
    stage: "The Spark",
    title: "At 13 years old, I tried Unity",
    narrative:
      "My initial spark for programming began with video games. Driven by curiosity about how virtual physics and game loops worked under the hood, I opened Unity and followed YouTube tutorials — piecing together basic player controllers, sprite movement, and rudimentary C# scripts.",
    tools: ["Unity 3D", "C#", "Game Physics", "Sprite Animation"],
    highlight: "Discovered the thrill of making virtual worlds react to code.",
  },
  {
    phase: "02",
    year: "2022",
    age: "University",
    timeframe: "2022",
    stage: "The Discipline",
    title: "Computer Engineering at University",
    narrative:
      "Entering university for Computer Engineering bridged raw creative curiosity with rigorous engineering fundamentals. Game scripts evolved into object-oriented architectural patterns, algorithms, discrete mathematics, and digital logic circuits.",
    tools: ["CpE Core", "OOP", "Data Structures", "Microcontrollers", "C++"],
    highlight: "Bridging software architecture with hardware principles.",
  },
  {
    phase: "03",
    year: "2024",
    age: "Production",
    timeframe: "2024",
    stage: "The Execution",
    title: "Operational POS & Live Systems",
    narrative:
      "Building software that businesses rely on in the wild. Architected the Coffee Shop POS handling live ticket queues during peak rush hours, and Salo sa Antipolo synchronizing table states across cashiers and waiters with zero data loss.",
    tools: ["Next.js", "PostgreSQL", "Prisma ORM", "Real-Time APIs", "POS Workflows"],
    highlight: "Mission-critical reliability & concurrent human workflows.",
  },
  {
    phase: "04",
    year: "2026",
    age: "Present",
    timeframe: "2026",
    stage: "The Present",
    title: "Building Across the Stack",
    narrative:
      "Comfortable writing TypeScript and relational SQL in the morning, optimizing database queries, inspecting Unity shaders or hardware circuits in the afternoon, and shipping reliable code by evening.",
    tools: ["Fullstack Web", "Relational Databases", "Hardware & Simulation", "Open to Work"],
    highlight: "Always learning, always building.",
  },
];

const STACK_GROUPS = [
  {
    category: "Frontend & Interfaces",
    description: "Developing responsive, performant user interfaces with high layout fidelity and clean component architectures.",
    tools: ["Next.js", "React", "TypeScript", "Tailwind CSS", "HTML5 & CSS3"],
  },
  {
    category: "Backend & Systems",
    description: "Designing database schemas, transactional order flows, authentication, and structured APIs.",
    tools: ["Node.js", "PostgreSQL", "Prisma ORM", "Firebase", "REST APIs"],
  },
  {
    category: "Creative & Hardware Engineering",
    description: "Building interactive experiences beyond conventional web browsers, from Android AR to microcontroller circuits.",
    tools: ["Unity 3D", "C#", "AR Foundation", "Vuforia Engine", "Android SDK", "Arduino"],
  },
  {
    category: "Tooling & Infrastructure",
    description: "Modern workflows for version control, project deployment, and daily development.",
    tools: ["Git & GitHub", "VS Code", "Vercel", "npm / Node"],
  },
];

export default function AboutPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const storyPinnedRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const lineProgressRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const mm = gsap.matchMedia(containerRef);

    // Desktop: Pinned Scroll-Lock Theater
    mm.add("(min-width: 768px)", () => {
      const section = storyPinnedRef.current;
      if (!section) return;

      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      if (cards.length === 0) return;

      // Initial card states
      gsap.set(cards[0], { opacity: 1, y: 0, scale: 1, zIndex: 10, visibility: "visible" });
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], { opacity: 0, y: 40, scale: 0.95, zIndex: 10 - i, visibility: "visible" });
      }

      const totalSteps = cards.length;

      // Pinned scrub timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          id: "roadmap-pin",
          trigger: section,
          start: "top top",
          end: "+=2600",
          pin: true,
          scrub: 0.7,
          anticipatePin: 1,
          onUpdate: (self) => {
            if (lineProgressRef.current) {
              lineProgressRef.current.style.transform = `scaleX(${Math.min(1, Math.max(0.04, self.progress))})`;
            }
            const step = Math.min(
              totalSteps - 1,
              Math.floor(self.progress * totalSteps)
            );
            setActiveIdx(step);
          },
        },
      });

      // Staged card transitions
      tl.to(cards[0], { opacity: 0, y: -35, scale: 0.95, duration: 0.7, ease: "power2.inOut" }, 0.7)
        .to(cards[1], { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.inOut" }, 0.7)
        .to(cards[1], { opacity: 0, y: -35, scale: 0.95, duration: 0.7, ease: "power2.inOut" }, 1.8)
        .to(cards[2], { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.inOut" }, 1.8)
        .to(cards[2], { opacity: 0, y: -35, scale: 0.95, duration: 0.7, ease: "power2.inOut" }, 2.9)
        .to(cards[3], { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.inOut" }, 2.9);


      // Stack groups entrance
      if (stackRef.current?.children) {
        gsap.fromTo(
          Array.from(stackRef.current.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stackRef.current,
              start: "top 85%",
              once: true,
            },
            clearProps: "opacity,transform",
          }
        );
      }
    });

    // Mobile: Vertical continuous reveal timeline
    mm.add("(max-width: 767px)", () => {
      const cards = cardsRef.current.filter(Boolean) as HTMLDivElement[];
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            },
          }
        );
      });
    });

    return () => mm.revert();
  }, []);

  const jumpToMilestone = (idx: number) => {
    const section = storyPinnedRef.current;
    if (!section) return;

    const st = ScrollTrigger.getById("roadmap-pin");
    if (st) {
      const targetProgress = (idx + 0.15) / ROADMAP_MILESTONES.length;
      const targetY = st.start + (st.end - st.start) * targetProgress;
      const win =
        typeof window !== "undefined"
          ? (window as unknown as { __lenis?: { scrollTo: (target: number) => void } })
          : null;
      if (win?.__lenis) {
        win.__lenis.scrollTo(targetY);
      } else {
        window.scrollTo({ top: targetY, behavior: "smooth" });
      }
    }
  };

  return (
    <div ref={containerRef} className="relative min-h-screen pt-20 sm:pt-24 pb-16">
      <SignalRail />

      <main className="max-w-5xl mx-auto px-6 sm:px-8 space-y-24 md:space-y-32">
        {/* Identity & Introduction */}
        <section id="ch-intro" className="pt-8 sm:pt-12 scroll-mt-28">
          <InteractiveIdentity />
        </section>

        {/* Chapter 2: Centered Pinned Scroll-Lock Roadmap Timeline */}
        <section
          id="ch-story"
          ref={storyPinnedRef}
          className="scroll-mt-28 border-t border-border pt-12 select-none"
        >
          <div className="md:h-[90vh] md:max-h-[860px] flex flex-col justify-center max-w-4xl mx-auto">
            {/* Header: Centered & Clean */}
            <div className="text-center space-y-3 pb-8">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
                My Journey
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-text-main font-normal tracking-tight">
                From Age 13 to Production Systems.
              </h2>
              <p className="text-text-muted text-xs sm:text-sm max-w-md mx-auto font-sans">
                Key milestones, turning points, and real-world software projects.
              </p>
            </div>

            {/* Horizontal Milestone Tracker Bar */}
            <div className="relative pb-8 max-w-2xl mx-auto w-full hidden md:block">
              {/* Background Connecting Line */}
              <div className="absolute top-3.5 left-6 right-6 h-px bg-border -z-0">
                {/* Progress Fill Line */}
                <div
                  ref={lineProgressRef}
                  className="h-full bg-accent origin-left transition-transform duration-75"
                  style={{ transform: "scaleX(0.04)" }}
                />
              </div>

              {/* 4 Milestone Step Nodes */}
              <div className="relative z-10 flex items-center justify-between">
                {ROADMAP_MILESTONES.map((m, idx) => {
                  const isActive = activeIdx === idx;
                  const isPast = activeIdx > idx;
                  return (
                    <button
                      key={m.phase}
                      type="button"
                      onClick={() => jumpToMilestone(idx)}
                      className="group flex flex-col items-center gap-2 cursor-pointer outline-none"
                    >
                      <div
                        className={`w-7 h-7 rounded-full flex items-center justify-center transition-all duration-200 ${
                          isActive
                            ? "bg-accent text-white shadow-[0_0_12px_var(--color-accent)] ring-4 ring-accent/20 scale-110"
                            : isPast
                            ? "bg-accent/80 text-white"
                            : "bg-surface border border-border text-text-dim group-hover:border-text-muted group-hover:text-text-main"
                        }`}
                      >
                        <span className="font-mono text-[10px] font-bold">
                          {m.phase}
                        </span>
                      </div>
                      <span
                        className={`font-mono text-[10px] uppercase tracking-wider transition-colors whitespace-nowrap ${
                          isActive
                            ? "text-accent font-semibold"
                            : "text-text-dim group-hover:text-text-muted"
                        }`}
                      >
                        {m.age}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Centered Milestone Stage */}
            <div className="relative md:h-[400px] lg:h-[420px] max-w-3xl mx-auto w-full flex flex-col md:block space-y-6 md:space-y-0">
              {ROADMAP_MILESTONES.map((m, idx) => (
                <div
                  key={m.phase}
                  ref={(el) => {
                    cardsRef.current[idx] = el;
                  }}
                  className="md:absolute md:inset-0 rounded-2xl bg-surface border border-border/80 p-8 sm:p-10 shadow-2xl flex flex-col justify-between transition-colors hover:border-accent/50 relative overflow-hidden group"
                >
                  {/* Subtle Background Watermark Year */}
                  <div className="absolute top-2 right-6 select-none pointer-events-none font-serif text-8xl sm:text-9xl text-text-main opacity-[0.05] leading-none z-0">
                    {m.year}
                  </div>

                  <div className="space-y-4 relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider pb-3 border-b border-border/60">
                      <div className="flex items-center gap-2 text-accent font-semibold">
                        <span className="w-2 h-2 rounded-full bg-accent shadow-[0_0_8px_var(--color-accent)]" />
                        <span>{m.timeframe}</span>
                      </div>
                      <span className="px-3 py-0.5 rounded-full bg-primary border border-border text-text-dim font-medium">
                        {m.stage}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-serif text-text-main tracking-tight leading-snug">
                      {m.title}
                    </h3>

                    {/* Narrative */}
                    <p className="text-text-muted text-sm sm:text-base leading-relaxed font-sans">
                      {m.narrative}
                    </p>
                  </div>

                  {/* Footer: Tools & Highlight Insight */}
                  <div className="space-y-3 pt-5 border-t border-border/60 relative z-10">
                    <div className="flex flex-wrap gap-1.5">
                      {m.tools.map((t) => (
                        <span
                          key={t}
                          className="font-mono text-xs text-text-muted bg-primary px-3 py-1 rounded-md border border-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="font-mono text-xs text-text-dim flex items-center gap-2">
                      <span className="text-accent font-bold">&rarr;</span>
                      <span>{m.highlight}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stage Footer Counter */}
            <div className="text-center pt-6 hidden md:block">
              <span className="font-mono text-xs text-text-dim uppercase tracking-wider">
                {ROADMAP_MILESTONES[activeIdx].year} &bull;{" "}
                <span className="text-text-main font-medium">
                  {ROADMAP_MILESTONES[activeIdx].stage}
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Capabilities & Technical Stack */}
        <section id="ch-stack" className="scroll-mt-28 border-t border-border pt-16">
          <div className="space-y-12">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
                Tools &amp; Stack
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-main font-normal tracking-tight">
                Capabilities &amp; Tooling
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                Technologies and tools I use to design, build, and deploy software.
              </p>
            </div>

            <div
              ref={stackRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            >
              {STACK_GROUPS.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl bg-surface border border-border p-7 space-y-4 hover:border-accent transition-colors duration-200"
                >
                  <h3 className="font-serif text-2xl text-text-main">
                    {group.category}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {group.description}
                  </p>
                  <div className="pt-2 flex flex-wrap gap-1.5 border-t border-border/60">
                    {group.tools.map((tool) => (
                      <span
                        key={tool}
                        className="font-mono text-xs text-text-muted bg-primary px-2.5 py-1 rounded border border-border"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Connect CTA */}
        <section id="ch-cta" className="scroll-mt-28 border-t border-border pt-16">
          <div className="rounded-2xl bg-surface border border-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold block">
                <ScrambleText text="CHAPTER 04 // CONNECT" />
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-main font-normal">
                Let&apos;s build together.
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                Available for software engineering roles, contracts, and collaborative systems.
              </p>
            </div>

            <Magnetic strength={0.25}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent text-white hover:bg-accent-hover font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-150 shrink-0 text-center shadow-lg shadow-accent/20"
              >
                <ScrambleText text="Get in touch" />
                <span>&rarr;</span>
              </Link>
            </Magnetic>
          </div>
        </section>
      </main>

      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}
