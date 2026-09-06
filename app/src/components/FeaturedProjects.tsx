"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FEATURED_PROJECTS, Project } from "@/data/projects";

export default function FeaturedProjects() {
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalScreenIdx, setModalScreenIdx] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalProject) return;

      if (e.key === "Escape") {
        setModalProject(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        if (modalProject.screenshots && modalProject.screenshots.length > 1) {
          setModalScreenIdx(
            (prev) => (prev + 1) % modalProject.screenshots!.length
          );
        }
      } else if (e.key === "ArrowLeft") {
        if (modalProject.screenshots && modalProject.screenshots.length > 1) {
          setModalScreenIdx(
            (prev) =>
              (prev - 1 + modalProject.screenshots!.length) %
              modalProject.screenshots!.length
          );
        }
      }
    };

    if (modalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [modalProject]);

  const p1 = FEATURED_PROJECTS[0]; // Coffee Shop POS
  const p2 = FEATURED_PROJECTS[1]; // Salo sa Antipolo

  return (
    <section id="projects" className="max-w-4xl mx-auto px-6 py-20 border-b border-border scroll-mt-20">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 mb-12 border-b border-border">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent font-semibold">
              Selected Work &bull; 01 &mdash; 02
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-text-main font-normal tracking-tight">
            Featured Systems
          </h2>
        </div>

        <Link
          href="/works"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-text-muted hover:text-accent transition-colors"
        >
          <span>Full 6-System Console</span>
          <span className="text-accent group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </Link>
      </div>

      {/* Side-by-Side Vertical Cards with Asymmetric Offset (Card 2 staggered lower) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-start">
        {/* Card 1: Coffee Shop POS — Sits at standard baseline */}
        {p1 && (
          <article
            onClick={() => {
              setModalProject(p1);
              setModalScreenIdx(0);
              setIsZoomed(false);
            }}
            className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-border hover:border-accent transition-all duration-200 cursor-pointer shadow-xs hover:shadow-xl hover:shadow-black/25 hover:-translate-y-1"
          >
            {/* Visual Screenshot Stage */}
            <div className="relative aspect-[16/10] w-full bg-[#0d0d10] border-b border-border overflow-hidden">
              {p1.thumbnail && (
                <Image
                  src={p1.thumbnail}
                  alt={p1.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  priority
                />
              )}

              <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md px-2.5 py-1 rounded border border-border font-mono text-[10px] text-text-muted">
                {p1.screenshots?.length || 1} Screens
              </div>
            </div>

            {/* Meta Info */}
            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent uppercase tracking-wider font-semibold text-[11px]">
                    {p1.type}
                  </span>
                  <span className="text-text-dim group-hover:text-accent transition-colors">
                    #{p1.id}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-text-main group-hover:text-accent transition-colors">
                  {p1.name}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed line-clamp-3 font-sans">
                  {p1.blurb}
                </p>
              </div>

              {/* Stack Chips */}
              <div className="pt-3 flex flex-wrap gap-1.5 border-t border-border/60">
                {p1.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-text-muted bg-primary px-2.5 py-0.5 rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )}

        {/* Card 2: Salo sa Antipolo — Staggered visibly lower on desktop (md:mt-20) */}
        {p2 && (
          <article
            onClick={() => {
              setModalProject(p2);
              setModalScreenIdx(0);
              setIsZoomed(false);
            }}
            className="md:mt-20 group flex flex-col rounded-xl overflow-hidden bg-surface border border-border hover:border-accent transition-all duration-200 cursor-pointer shadow-xs hover:shadow-xl hover:shadow-black/25 hover:-translate-y-1"
          >
            {/* Visual Screenshot Stage */}
            <div className="relative aspect-[16/10] w-full bg-[#0d0d10] border-b border-border overflow-hidden">
              {p2.thumbnail && (
                <Image
                  src={p2.thumbnail}
                  alt={p2.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 450px"
                  className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.025]"
                  priority
                />
              )}

              <div className="absolute top-3 right-3 bg-primary/90 backdrop-blur-md px-2.5 py-1 rounded border border-border font-mono text-[10px] text-text-muted">
                {p2.screenshots?.length || 1} Screens
              </div>
            </div>

            {/* Meta Info */}
            <div className="p-6 flex flex-col justify-between flex-1 space-y-4">
              <div className="space-y-2.5">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-accent uppercase tracking-wider font-semibold text-[11px]">
                    {p2.type}
                  </span>
                  <span className="text-text-dim group-hover:text-accent transition-colors">
                    #{p2.id}
                  </span>
                </div>

                <h3 className="font-serif text-2xl sm:text-3xl text-text-main group-hover:text-accent transition-colors">
                  {p2.name}
                </h3>

                <p className="text-text-muted text-sm leading-relaxed line-clamp-3 font-sans">
                  {p2.blurb}
                </p>
              </div>

              {/* Stack Chips */}
              <div className="pt-3 flex flex-wrap gap-1.5 border-t border-border/60">
                {p2.stack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] text-text-muted bg-primary px-2.5 py-0.5 rounded border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </article>
        )}
      </div>

      {/* Direct Link to the Full System Console on /works */}
      <div className="mt-16 text-center">
        <Link
          href="/works"
          className="inline-flex items-center gap-2.5 px-6 py-3 rounded-md bg-surface border border-border hover:border-accent text-text-main hover:text-accent font-mono text-xs uppercase tracking-wider transition-all duration-200"
        >
          <span>Open Full Master-Detail Console on /works</span>
          <span>&rarr;</span>
        </Link>
      </div>

      {/* Full-Screen Gallery Lightbox Modal */}
      {modalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={modalProject.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setModalProject(null)}
        >
          <div
            className="relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-xl border border-border bg-surface shadow-2xl overflow-hidden text-text-main"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-border px-5 py-3.5 bg-primary">
              <div className="flex items-center gap-3 font-mono text-xs">
                <span className="text-text-main font-semibold">
                  {modalProject.id} &mdash; {modalProject.name}
                </span>
                {modalProject.screenshots && modalProject.screenshots.length > 1 && (
                  <span className="text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/20">
                    {modalScreenIdx + 1} / {modalProject.screenshots.length}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-text-dim hidden sm:inline-block">
                  ESC to close &bull; Arrow keys navigate
                </span>

                {modalProject.screenshots && (
                  <button
                    type="button"
                    onClick={() => setIsZoomed((prev) => !prev)}
                    className="rounded border border-border bg-surface px-2.5 py-1 text-xs font-mono text-text-muted hover:text-text-main transition-colors cursor-pointer"
                  >
                    {isZoomed ? "Zoom: 100%" : "Zoom: Fit"}
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="rounded border border-border bg-surface p-1.5 text-text-muted hover:text-text-main transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Viewport */}
            <div
              className={`relative w-full aspect-[16/10] sm:aspect-[1.85/1] max-h-[60vh] bg-primary flex items-center justify-center overflow-hidden border-b border-border select-none ${
                modalProject.screenshots && isZoomed ? "cursor-zoom-out overflow-auto" : "cursor-zoom-in"
              }`}
              onClick={() => {
                if (modalProject.screenshots) setIsZoomed((prev) => !prev);
              }}
            >
              {modalProject.screenshots && modalProject.screenshots.length > 0 && (
                <div
                  className={`w-full h-full flex items-center justify-center transition-transform duration-200 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                >
                  <Image
                    src={modalProject.screenshots[modalScreenIdx].src}
                    alt={modalProject.screenshots[modalScreenIdx].title}
                    width={1800}
                    height={1000}
                    className="w-full h-full object-contain"
                    unoptimized
                  />
                </div>
              )}

              {/* Prev / Next controls */}
              {modalProject.screenshots && modalProject.screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalScreenIdx(
                        (prev) =>
                          (prev - 1 + modalProject.screenshots!.length) %
                          modalProject.screenshots!.length
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-primary/80 backdrop-blur-sm p-2 text-text-main hover:text-accent hover:border-accent transition-all cursor-pointer"
                    aria-label="Previous screenshot"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setModalScreenIdx(
                        (prev) => (prev + 1) % modalProject.screenshots!.length
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border bg-primary/80 backdrop-blur-sm p-2 text-text-main hover:text-accent hover:border-accent transition-all cursor-pointer"
                    aria-label="Next screenshot"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Footer */}
            <div className="p-5 sm:p-6 bg-surface flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="space-y-1 max-w-xl">
                {modalProject.screenshots && (
                  <p className="font-mono text-xs font-semibold text-text-main">
                    {modalProject.screenshots[modalScreenIdx].title}
                  </p>
                )}
                <p className="text-xs text-text-muted leading-relaxed line-clamp-2">
                  {modalProject.blurb}
                </p>
              </div>

              <div className="flex items-center gap-3 shrink-0">
                {modalProject.external && (
                  <a
                    href={modalProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded bg-accent text-white hover:bg-accent-hover font-mono text-xs font-semibold transition-colors"
                  >
                    <span>Live Demo</span>
                    <span>&rarr;</span>
                  </a>
                )}
                <button
                  type="button"
                  onClick={() => setModalProject(null)}
                  className="px-3.5 py-1.5 rounded bg-primary border border-border hover:border-text-dim text-text-muted hover:text-text-main font-mono text-xs transition-colors cursor-pointer"
                >
                  Done
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
