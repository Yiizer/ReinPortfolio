"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import SignalRail from "@/components/SignalRail";
import Footer from "@/components/Footer";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

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
  const storyRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const ctx = gsap.context(() => {
      // Story paragraphs entrance
      if (storyRef.current?.children) {
        gsap.fromTo(
          Array.from(storyRef.current.children),
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: storyRef.current,
              start: "top 85%",
              once: true,
            },
            clearProps: "opacity,transform",
          }
        );
      }

      // Stack groups entrance
      if (stackRef.current?.children) {
        gsap.fromTo(
          Array.from(stackRef.current.children),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.15,
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
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen pt-20 sm:pt-24 pb-16">
      <SignalRail />

      <main className="max-w-5xl mx-auto px-6 sm:px-8 space-y-28 md:space-y-36">
        {/* Chapter 1: Identity & Introduction */}
        <section id="ch-intro" className="pt-8 sm:pt-12 scroll-mt-28">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Portrait Image */}
            <div className="md:col-span-5 order-2 md:order-1">
              <div className="relative aspect-[3/4] w-full max-w-sm rounded-xl overflow-hidden border border-border bg-surface shadow-2xl">
                <Image
                  src="/profile.jpg"
                  alt="Rein Gavino"
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover object-center"
                  priority
                />
                <div className="absolute bottom-4 left-4 bg-primary/85 backdrop-blur-md px-3 py-1 rounded border border-border font-mono text-xs text-text-muted">
                  Rein Gavino &bull; Manila
                </div>
              </div>
            </div>

            {/* Introductory Narrative */}
            <div className="md:col-span-7 space-y-6 order-1 md:order-2">
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                  Chapter 01 / Identity
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl text-text-main font-normal tracking-tight leading-[0.96]">
                  Curiosity through code.
                </h1>
              </div>

              <div className="space-y-4 text-text-muted text-base sm:text-lg leading-relaxed">
                <p>
                  I&apos;m a 4th-year Computer Engineering student based in Manila, working as a fullstack developer with a passion for pragmatic, resilient software.
                </p>
                <p>
                  Rather than specializing narrowly before understanding the broader craft, I enjoy connecting all the layers: clean interfaces, reliable transactional backends, hardware simulation, and the real people who use them.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-6 font-mono text-xs text-text-dim">
                <div>
                  <span className="text-text-muted block font-medium">Status</span>
                  <span>4th Year CpE Student</span>
                </div>
                <div className="h-6 w-px bg-border" />
                <div>
                  <span className="text-text-muted block font-medium">Focus</span>
                  <span>Fullstack &amp; Software Systems</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chapter 2: The Narrative Story */}
        <section id="ch-story" className="scroll-mt-28 border-t border-border pt-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-14">
            <div className="md:col-span-4 space-y-2">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Chapter 02 / The Journey
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-main font-normal leading-tight">
                How it started &amp; where it&apos;s going.
              </h2>
            </div>

            <div
              ref={storyRef}
              className="md:col-span-8 space-y-6 text-text-muted text-base sm:text-lg leading-relaxed"
            >
              <p>
                My initial spark for programming came around Grade 6 and 7. Like many developers, it started with games. I wanted to understand how virtual worlds functioned under the hood, so I opened Unity and began following YouTube tutorials — piecing together basic player controllers, sprite movement, and animations.
              </p>
              <p>
                Entering university for Computer Engineering bridged that creative urge with rigorous engineering fundamentals. Game scripts turned into object-oriented architectural patterns, algorithms, and low-level hardware principles. Soon, building web applications and multi-tier systems took center stage.
              </p>
              <p>
                I found immense satisfaction in building tools that people genuinely use. Whether it was the Coffee Shop POS handling live ticket queues during a busy rush, or Salo sa Antipolo synchronizing table states across waiters and cashiers, I realized that software is ultimately about removing friction from human tasks.
              </p>
              <p>
                I don&apos;t believe in premature specialization. I embrace being a builder: someone comfortable writing TypeScript and SQL in the morning, inspecting Unity shaders or Arduino circuits in the afternoon, and shipping reliable code by evening.
              </p>
            </div>
          </div>
        </section>

        {/* Chapter 3: Capabilities & Technical Stack */}
        <section id="ch-stack" className="scroll-mt-28 border-t border-border pt-16">
          <div className="space-y-12">
            <div className="space-y-2 max-w-2xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Chapter 03 / Stack
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-text-main font-normal tracking-tight">
                Capabilities &amp; Tooling
              </h2>
              <p className="text-text-muted text-base sm:text-lg leading-relaxed">
                Technologies and frameworks I utilize to design, build, and deploy production software.
              </p>
            </div>

            <div
              ref={stackRef}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
            >
              {STACK_GROUPS.map((group) => (
                <div
                  key={group.category}
                  className="rounded-xl bg-surface border border-border p-7 space-y-4 hover:border-accent transition-colors"
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

        {/* Chapter 4: Connect CTA */}
        <section id="ch-cta" className="scroll-mt-28 border-t border-border pt-16">
          <div className="rounded-2xl bg-surface border border-border p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="space-y-2 max-w-xl">
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
                Chapter 04 / Next
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-text-main font-normal">
                Let&apos;s build together.
              </h2>
              <p className="text-text-muted text-base leading-relaxed">
                Available for software engineering roles, contracts, and collaborative systems.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent text-white hover:bg-accent-hover font-mono text-xs uppercase tracking-wider font-semibold transition-colors duration-150 shrink-0 text-center"
            >
              <span>Reach Out Directly</span>
              <span>&rarr;</span>
            </Link>
          </div>
        </section>
      </main>

      <div className="mt-28">
        <Footer />
      </div>
    </div>
  );
}
