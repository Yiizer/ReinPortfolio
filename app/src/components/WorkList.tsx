"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Project, ALL_PROJECTS } from "@/data/projects";

interface WorkListProps {
  projects?: Project[];
}

export default function WorkList({ projects = ALL_PROJECTS }: WorkListProps) {
  const [selectedId, setSelectedId] = useState<string>("01");
  const [activeScreenIdx, setActiveScreenIdx] = useState<number>(0);
  const [viewMode, setViewMode] = useState<"console" | "grid">("console");
  const [modalProject, setModalProject] = useState<Project | null>(null);
  const [modalScreenIdx, setModalScreenIdx] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  const activeProject: Project =
    projects.find((p) => p.id === selectedId) || projects[0];

  const hasScreenshots = Boolean(
    activeProject.screenshots && activeProject.screenshots.length > 0
  );

  // Keyboard navigation for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!modalProject) return;

      if (e.key === "Escape") {
        setModalProject(null);
        setIsZoomed(false);
      } else if (e.key === "ArrowRight") {
        if (modalProject.screenshots && modalProject.screenshots.length > 1) {
          setModalScreenIdx((prev) => (prev + 1) % modalProject.screenshots!.length);
        }
      } else if (e.key === "ArrowLeft") {
        if (modalProject.screenshots && modalProject.screenshots.length > 1) {
          setModalScreenIdx(
            (prev) => (prev - 1 + modalProject.screenshots!.length) % modalProject.screenshots!.length
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

  return (
    <div className="space-y-10">
      {/* View Mode Switcher */}
      <div className="flex items-center justify-between pb-4 border-b border-border">
        <div className="flex items-center gap-2 font-mono text-xs">
          <span className="text-text-dim uppercase tracking-wider">Interface Mode:</span>
          <div className="inline-flex rounded-md border border-border p-0.5 bg-surface">
            <button
              type="button"
              onClick={() => setViewMode("console")}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                viewMode === "console"
                  ? "bg-accent text-white font-medium"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              System Console
            </button>
            <button
              type="button"
              onClick={() => setViewMode("grid")}
              className={`px-3 py-1 rounded text-xs font-mono transition-colors cursor-pointer ${
                viewMode === "grid"
                  ? "bg-accent text-white font-medium"
                  : "text-text-muted hover:text-text-main"
              }`}
            >
              Visual Grid
            </button>
          </div>
        </div>

        <span className="font-mono text-[11px] text-text-dim hidden sm:inline-block">
          {projects.length} Documented Architectures
        </span>
      </div>

      {/* MODE 1: Interactive System Console (Master-Detail) */}
      {viewMode === "console" ? (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left: Master Systems Ledger */}
          <div className="lg:col-span-5 space-y-1">
            <div className="hidden sm:grid grid-cols-12 pb-2 text-[10px] font-mono uppercase tracking-widest text-text-dim px-4">
              <span className="col-span-2">ID</span>
              <span className="col-span-6">System Name</span>
              <span className="col-span-4 text-right">Domain</span>
            </div>

            <div className="space-y-1.5" role="tablist">
              {projects.map((project) => {
                const isSelected = project.id === selectedId;

                return (
                  <button
                    key={project.id}
                    type="button"
                    onClick={() => {
                      setSelectedId(project.id);
                      setActiveScreenIdx(0);
                    }}
                    role="tab"
                    aria-selected={isSelected}
                    className={`w-full text-left p-4 rounded-lg transition-all duration-150 cursor-pointer flex items-center justify-between border ${
                      isSelected
                        ? "bg-surface border-accent/70 shadow-lg shadow-black/20"
                        : "bg-transparent border-transparent hover:bg-surface/60 hover:border-border"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`font-mono text-xs font-semibold ${
                          isSelected ? "text-accent" : "text-text-dim"
                        }`}
                      >
                        {project.id}
                      </span>
                      <div>
                        <h3
                          className={`font-serif text-lg sm:text-xl transition-colors ${
                            isSelected ? "text-text-main font-medium" : "text-text-muted"
                          }`}
                        >
                          {project.name}
                        </h3>
                        <p className="font-mono text-[11px] text-text-dim sm:hidden">
                          {project.type}
                        </p>
                      </div>
                    </div>

                    <div className="hidden sm:flex flex-col items-end text-right font-mono text-[11px]">
                      <span className={isSelected ? "text-accent" : "text-text-muted"}>
                        {project.type}
                      </span>
                      <span className="text-[10px] text-text-dim">
                        {project.status || "Deployed"}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right: Dynamic Inspection Viewport */}
          <div className="lg:col-span-7 bg-surface border border-border rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-border text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-text-main font-semibold uppercase">
                  {activeProject.id} {"//"} {activeProject.name}
                </span>
              </div>

              {hasScreenshots && (
                <span className="text-text-dim text-[11px]">
                  {activeScreenIdx + 1} of {activeProject.screenshots!.length} Screens
                </span>
              )}
            </div>

            {/* Visual Stage */}
            <div
              onClick={() => {
                setModalProject(activeProject);
                setModalScreenIdx(activeScreenIdx);
              }}
              className="relative aspect-[16/10] w-full rounded-lg overflow-hidden bg-[#0d0d10] border border-border flex items-center justify-center cursor-pointer group"
              title="Click to view full-screen gallery"
            >
              {hasScreenshots ? (
                <Image
                  key={`${activeProject.id}-${activeScreenIdx}`}
                  src={activeProject.screenshots![activeScreenIdx].src}
                  alt={activeProject.screenshots![activeScreenIdx].title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                  priority
                />
              ) : (
                <div className="w-full h-full p-8 flex flex-col justify-between bg-[#111114]">
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-text-dim">
                    <span>SPECIFICATION BLUEPRINT</span>
                    <span className="text-accent">{activeProject.type}</span>
                  </div>

                  <div className="space-y-2 text-center my-auto">
                    <span className="font-serif text-3xl text-text-main block">
                      {activeProject.name}
                    </span>
                    <p className="font-mono text-xs text-text-muted">
                      {activeProject.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[10px] text-text-dim border-t border-border/50 pt-2">
                    <span>Architecture Verified</span>
                    <span>Interactive 3D / Mobile</span>
                  </div>
                </div>
              )}

              {/* Hover Badge */}
              <div className="absolute bottom-3 right-3 bg-primary/80 backdrop-blur-sm border border-border px-2.5 py-1 rounded text-[10px] font-mono text-text-muted opacity-0 group-hover:opacity-100 transition-opacity">
                Click to inspect &rarr;
              </div>
            </div>

            {/* Viewpoints Switcher */}
            {hasScreenshots && activeProject.screenshots!.length > 1 && (
              <div className="space-y-1.5">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-dim block">
                  Interface Viewpoints
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeProject.screenshots!.map((screen, idx) => (
                    <button
                      key={screen.src}
                      type="button"
                      onClick={() => setActiveScreenIdx(idx)}
                      className={`px-3 py-1.5 rounded text-xs font-mono transition-colors cursor-pointer border ${
                        idx === activeScreenIdx
                          ? "bg-accent/15 border-accent text-accent font-medium"
                          : "bg-primary border-border text-text-muted hover:text-text-main"
                      }`}
                    >
                      0{idx + 1}. {screen.title.split("—")[0].trim()}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Telemetry & Blueprint Specs */}
            <div className="space-y-4 pt-2 border-t border-border">
              <div className="space-y-1">
                <span className="font-mono text-[10px] uppercase tracking-wider text-text-dim block">
                  System Overview
                </span>
                <p className="text-sm text-text-muted leading-relaxed font-sans">
                  {activeProject.blurb}
                </p>
                {activeProject.role && (
                  <p className="text-xs text-text-main font-mono pt-1">
                    <strong className="text-accent">Engineering Responsibility:</strong>{" "}
                    {activeProject.role}
                  </p>
                )}
              </div>

              {/* Spec Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-xs pt-2">
                <div className="bg-primary/80 p-2.5 rounded border border-border">
                  <span className="text-text-dim text-[10px] block uppercase">Domain</span>
                  <span className="text-text-main font-medium">{activeProject.type}</span>
                </div>
                <div className="bg-primary/80 p-2.5 rounded border border-border">
                  <span className="text-text-dim text-[10px] block uppercase">Status</span>
                  <span className="text-text-main font-medium">{activeProject.status || "Production"}</span>
                </div>
                <div className="bg-primary/80 p-2.5 rounded border border-border col-span-2 sm:col-span-1">
                  <span className="text-text-dim text-[10px] block uppercase">Tech Stack</span>
                  <span className="text-text-main font-medium truncate block">
                    {activeProject.stack.slice(0, 3).join(", ")}
                  </span>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setModalProject(activeProject);
                    setModalScreenIdx(activeScreenIdx);
                  }}
                  className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-accent hover:underline font-semibold cursor-pointer"
                >
                  <span>Open Gallery Lightbox</span>
                  <span>&rarr;</span>
                </button>

                {activeProject.external && (
                  <a
                    href={activeProject.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-primary border border-border hover:border-accent font-mono text-xs text-text-muted hover:text-accent transition-colors"
                  >
                    <span>Launch Live Deployment</span>
                    <span className="text-accent">&nearr;</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* MODE 2: Visual Card Grid */
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => {
            const hasImgs = Boolean(project.screenshots && project.screenshots.length > 0);

            return (
              <article
                key={project.id}
                onClick={() => {
                  setModalProject(project);
                  setModalScreenIdx(0);
                }}
                className="group flex flex-col rounded-xl overflow-hidden bg-surface border border-border hover:border-accent transition-all duration-200 cursor-pointer"
              >
                <div className="relative aspect-[16/10] w-full bg-[#0d0d10] border-b border-border overflow-hidden">
                  {hasImgs ? (
                    <Image
                      src={project.screenshots![0].src}
                      alt={project.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top transition-transform duration-300 group-hover:scale-[1.02]"
                    />
                  ) : (
                    <div className="w-full h-full p-6 flex flex-col justify-between bg-[#111114]">
                      <span className="font-mono text-[10px] text-accent uppercase">
                        {project.type}
                      </span>
                      <span className="font-serif text-2xl text-text-main text-center">
                        {project.name}
                      </span>
                      <span className="font-mono text-[10px] text-text-dim text-right">
                        Architecture Spec
                      </span>
                    </div>
                  )}
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between font-mono text-xs">
                      <span className="text-accent font-semibold">{project.type}</span>
                      <span className="text-text-dim">#{project.id}</span>
                    </div>
                    <h3 className="font-serif text-2xl text-text-main group-hover:text-accent transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-text-muted line-clamp-2">
                      {project.blurb}
                    </p>
                  </div>

                  <div className="pt-2 flex flex-wrap gap-1 border-t border-border/50 font-mono text-[11px] text-text-dim">
                    {project.stack.slice(0, 3).map((t) => (
                      <span key={t} className="bg-primary px-2 py-0.5 rounded border border-border">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}

      {/* Cinematic Modal */}
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
            {/* Modal Header */}
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

            {/* Modal Image Viewport */}
            <div
              className={`relative w-full aspect-[16/10] sm:aspect-[1.85/1] max-h-[60vh] bg-primary flex items-center justify-center overflow-hidden border-b border-border select-none ${
                modalProject.screenshots && isZoomed ? "cursor-zoom-out overflow-auto" : "cursor-zoom-in"
              }`}
              onClick={() => {
                if (modalProject.screenshots) setIsZoomed((prev) => !prev);
              }}
            >
              {modalProject.screenshots && modalProject.screenshots.length > 0 ? (
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
              ) : (
                <div className="p-8 sm:p-12 max-w-xl text-center space-y-3">
                  <span className="font-mono text-xs uppercase tracking-widest text-accent font-semibold">
                    {modalProject.type}
                  </span>
                  <h3 className="font-serif text-3xl text-text-main">
                    {modalProject.name}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {modalProject.blurb}
                  </p>
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
                        (prev) => (prev - 1 + modalProject.screenshots!.length) % modalProject.screenshots!.length
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

            {/* Modal Detail Footer */}
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
    </div>
  );
}
