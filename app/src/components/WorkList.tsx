"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Project, HOMEPAGE_PROJECTS, ALL_PROJECTS } from "@/data/projects";

export function ProjectMockupGraphic({ id }: { id: string }) {
  if (id === "01") {
    // Artisan Coffee POS UI Mockup
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#101014" />
        {/* Top Header */}
        <rect x="0" y="0" width="600" height="40" fill="#16161b" />
        <circle cx="25" cy="20" r="5" fill="#ef4444" opacity="0.8" />
        <circle cx="42" cy="20" r="5" fill="#f59e0b" opacity="0.8" />
        <circle cx="59" cy="20" r="5" fill="#10b981" opacity="0.8" />
        <text x="80" y="24" fill="#a1a1aa" fontSize="11" fontFamily="monospace">ARTISAN POS v2.4 // REGISTER 01</text>
        <rect x="500" y="12" width="75" height="18" rx="4" fill="#22c55e" fillOpacity="0.15" stroke="#22c55e" strokeOpacity="0.4" />
        <text x="515" y="24" fill="#22c55e" fontSize="9" fontFamily="monospace">ONLINE</text>

        {/* Menu Grid (Left 60%) */}
        <rect x="20" y="55" width="340" height="305" rx="8" fill="#141419" stroke="#27272a" />
        <text x="35" y="80" fill="#e4e4e7" fontSize="12" fontFamily="monospace" fontWeight="bold">ITEM CATALOG</text>

        {/* Items */}
        {[
          { name: "Espresso Single", price: "$3.50", col: 0, row: 0, tag: "HOT" },
          { name: "Oat Flat White", price: "$5.20", col: 1, row: 0, tag: "POPULAR" },
          { name: "Iced Cold Brew", price: "$4.80", col: 0, row: 1, tag: "COLD" },
          { name: "Pour Over (V60)", price: "$6.00", col: 1, row: 1, tag: "FILTER" },
          { name: "Matcha Latte", price: "$5.50", col: 0, row: 2, tag: "TEA" },
          { name: "Almond Croissant", price: "$4.20", col: 1, row: 2, tag: "BAKERY" },
        ].map((item, idx) => {
          const x = 35 + item.col * 155;
          const y = 95 + item.row * 65;
          return (
            <g key={idx}>
              <rect x={x} y={y} width="145" height="55" rx="6" fill="#1c1c22" stroke="#2e2e36" />
              <text x={x + 10} y={y + 22} fill="#f4f4f5" fontSize="10" fontFamily="sans-serif" fontWeight="bold">{item.name}</text>
              <text x={x + 10} y={y + 40} fill="#a1a1aa" fontSize="10" fontFamily="monospace">{item.price}</text>
              <rect x={x + 95} y={y + 12} width="40" height="14" rx="3" fill="#27272a" />
              <text x={x + 100} y={y + 22} fill="#71717a" fontSize="7" fontFamily="monospace">{item.tag}</text>
            </g>
          );
        })}

        {/* Order Ticket (Right 40%) */}
        <rect x="375" y="55" width="205" height="305" rx="8" fill="#141419" stroke="#27272a" />
        <text x="390" y="80" fill="#e4e4e7" fontSize="12" fontFamily="monospace" fontWeight="bold">CURRENT TICKET</text>
        <line x1="390" y1="92" x2="565" y2="92" stroke="#27272a" strokeDasharray="3 3" />

        <text x="390" y="115" fill="#d4d4d8" fontSize="10" fontFamily="sans-serif">2x Oat Flat White</text>
        <text x="535" y="115" fill="#e4e4e7" fontSize="10" fontFamily="monospace">$10.40</text>

        <text x="390" y="140" fill="#d4d4d8" fontSize="10" fontFamily="sans-serif">1x Pour Over (V60)</text>
        <text x="540" y="140" fill="#e4e4e7" fontSize="10" fontFamily="monospace">$6.00</text>

        <line x1="390" y1="210" x2="565" y2="210" stroke="#27272a" />
        <text x="390" y="235" fill="#71717a" fontSize="10" fontFamily="monospace">SUBTOTAL</text>
        <text x="535" y="235" fill="#a1a1aa" fontSize="10" fontFamily="monospace">$16.40</text>
        <text x="390" y="255" fill="#71717a" fontSize="10" fontFamily="monospace">TAX (8%)</text>
        <text x="542" y="255" fill="#a1a1aa" fontSize="10" fontFamily="monospace">$1.31</text>
        <text x="390" y="280" fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold">TOTAL</text>
        <text x="525" y="280" fill="#ffffff" fontSize="13" fontFamily="monospace" fontWeight="bold">$17.71</text>

        {/* Charge Button */}
        <rect x="390" y="300" width="175" height="42" rx="6" fill="#f4f4f5" />
        <text x="445" y="325" fill="#09090b" fontSize="11" fontFamily="monospace" fontWeight="bold">CHARGE $17.71</text>
      </svg>
    );
  }

  if (id === "02") {
    // Clover Industrial Engineering Catalog UI Mockup
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#0c0d10" />
        {/* Top Nav */}
        <rect x="0" y="0" width="600" height="42" fill="#14151a" />
        <text x="25" y="26" fill="#f4f4f5" fontSize="12" fontFamily="sans-serif" fontWeight="bold">CLOVER INDUSTRIAL</text>
        <text x="280" y="25" fill="#a1a1aa" fontSize="10" fontFamily="sans-serif">Products &nbsp;·&nbsp; Engineering &nbsp;·&nbsp; Testing &nbsp;·&nbsp; Contact</text>
        <rect x="500" y="10" width="75" height="22" rx="4" fill="#27272a" />
        <text x="515" y="24" fill="#f4f4f5" fontSize="9" fontFamily="monospace">INQUIRE</text>

        {/* Hero Banner with Technical Diagram */}
        <rect x="25" y="60" width="550" height="150" rx="8" fill="#131419" stroke="#27272a" />
        <text x="45" y="95" fill="#71717a" fontSize="10" fontFamily="monospace">HEAVY-DUTY CENTRIFUGAL BLOWERS</text>
        <text x="45" y="125" fill="#ffffff" fontSize="18" fontFamily="sans-serif" fontWeight="bold">Industrial Aerodynamics &amp; Ventilation</text>
        <text x="45" y="150" fill="#a1a1aa" fontSize="11" fontFamily="sans-serif">Engineered for extreme pressure, high-heat &amp; continuous factory air displacement.</text>
        <rect x="45" y="165" width="110" height="26" rx="4" fill="#ffffff" />
        <text x="60" y="182" fill="#09090b" fontSize="9" fontFamily="monospace" fontWeight="bold">VIEW SPECS →</text>

        {/* Fan Technical Rotor Wireframe */}
        <circle cx="480" cy="135" r="55" stroke="#3f3f46" strokeWidth="1.5" strokeDasharray="3 3" />
        <circle cx="480" cy="135" r="40" stroke="#71717a" strokeWidth="1.5" />
        <circle cx="480" cy="135" r="16" fill="#27272a" stroke="#a1a1aa" strokeWidth="1.5" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((ang, i) => (
          <line
            key={i}
            x1="480"
            y1="135"
            x2={480 + Math.cos((ang * Math.PI) / 180) * 52}
            y2={135 + Math.sin((ang * Math.PI) / 180) * 52}
            stroke="#a1a1aa"
            strokeWidth="1.2"
          />
        ))}

        {/* Spec Grid Bottom (3 Cards) */}
        {[
          { title: "Series X-800 Blower", cfm: "Max CFM: 42,000", motor: "150 HP Direct Drive" },
          { title: "High-Temp Exhauster", cfm: "Rating: Up to 800°F", motor: "Reinforced Alloy Blades" },
          { title: "Custom Ducting Line", cfm: "Diameters: 12\" to 72\"", motor: "ISO 9001 Certified" },
        ].map((c, i) => (
          <g key={i}>
            <rect x={25 + i * 190} y={225} width="170" height="130" rx="6" fill="#131419" stroke="#27272a" />
            <text x={40 + i * 190} y={250} fill="#f4f4f5" fontSize="11" fontFamily="sans-serif" fontWeight="bold">{c.title}</text>
            <text x={40 + i * 190} y={275} fill="#a1a1aa" fontSize="9" fontFamily="monospace">{c.cfm}</text>
            <text x={40 + i * 190} y={295} fill="#71717a" fontSize="9" fontFamily="monospace">{c.motor}</text>
            <rect x={40 + i * 190} y={315} width="80" height="20" rx="3" fill="#1c1c22" stroke="#2e2e36" />
            <text x={50 + i * 190} y={328} fill="#d4d4d8" fontSize="8" fontFamily="monospace">DOWNLOAD PDF</text>
          </g>
        ))}
      </svg>
    );
  }

  if (id === "03") {
    // GrindOn E-Commerce Platform UI Mockup
    return (
      <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="380" fill="#090a0e" />
        {/* Nav Bar */}
        <rect x="0" y="0" width="600" height="42" fill="#111319" />
        <text x="25" y="26" fill="#ffffff" fontSize="13" fontFamily="sans-serif" fontWeight="black" letterSpacing="1.5">GRINDON</text>
        <text x="260" y="25" fill="#a1a1aa" fontSize="10" fontFamily="sans-serif">Jerseys &nbsp;·&nbsp; Hoodies &nbsp;·&nbsp; Teamwear &nbsp;·&nbsp; Customizer</text>
        <circle cx="530" cy="21" r="12" fill="#1c1f2a" stroke="#2e3344" />
        <text x="525" y="25" fill="#d4d4d8" fontSize="10">🛒</text>
        <circle cx="560" cy="21" r="12" fill="#1c1f2a" stroke="#2e3344" />
        <text x="555" y="25" fill="#d4d4d8" fontSize="10">👤</text>

        {/* E-Commerce Product Spotlight & Customizer */}
        <rect x="25" y="60" width="310" height="295" rx="8" fill="#111319" stroke="#222634" />
        {/* Stylized Jersey Vector */}
        <path
          d="M 120 100 L 160 85 L 200 100 L 225 125 L 205 155 L 195 140 L 195 240 L 125 240 L 125 140 L 115 155 L 95 125 Z"
          fill="#1c202d"
          stroke="#475069"
          strokeWidth="2"
        />
        <path d="M 140 88 Q 160 110 180 88" fill="none" stroke="#717a94" strokeWidth="2" />
        <text x="145" y="165" fill="#f4f4f5" fontSize="14" fontFamily="monospace" fontWeight="bold">07</text>
        <text x="135" y="185" fill="#94a3b8" fontSize="9" fontFamily="sans-serif" fontWeight="bold">CYBER TEAM</text>

        {/* Product Details Sidebar */}
        <rect x="350" y="60" width="225" height="295" rx="8" fill="#111319" stroke="#222634" />
        <text x="370" y="90" fill="#f4f4f5" fontSize="14" fontFamily="sans-serif" fontWeight="bold">Pro Esports Jersey v4</text>
        <text x="370" y="112" fill="#38bdf8" fontSize="14" fontFamily="monospace" fontWeight="bold">₱1,450.00</text>
        <text x="370" y="135" fill="#94a3b8" fontSize="9" fontFamily="sans-serif">Moisture-wicking dry-fit poly mesh.</text>

        <text x="370" y="165" fill="#717a94" fontSize="8" fontFamily="monospace">CUSTOMIZE NICKNAME &amp; NUMBER</text>
        <rect x="370" y="175" width="185" height="28" rx="4" fill="#181c26" stroke="#2e3547" />
        <text x="380" y="193" fill="#cbd5e1" fontSize="10" fontFamily="monospace">SHADOW // 07</text>

        <text x="370" y="225" fill="#717a94" fontSize="8" fontFamily="monospace">SELECT SIZE</text>
        <g>
          {["S", "M", "L", "XL"].map((sz, i) => (
            <g key={i}>
              <rect x={370 + i * 40} y={235} width="32" height="26" rx="4" fill={i === 1 ? "#ffffff" : "#181c26"} stroke={i === 1 ? "#ffffff" : "#2e3547"} />
              <text x={382 + i * 40} y={252} fill={i === 1 ? "#09090b" : "#94a3b8"} fontSize="10" fontFamily="monospace" fontWeight="bold">{sz}</text>
            </g>
          ))}
        </g>

        <rect x="370" y="290" width="185" height="42" rx="6" fill="#f4f4f5" />
        <text x="415" y="316" fill="#09090b" fontSize="11" fontFamily="monospace" fontWeight="bold">ADD TO CART 🛍️</text>
      </svg>
    );
  }

  // A.R-DUINO Mobile App 3D Circuit Simulator
  return (
    <svg className="w-full h-full" viewBox="0 0 600 380" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="600" height="380" fill="#08090d" />
      {/* AR Viewport Frame */}
      <rect x="25" y="20" width="550" height="340" rx="10" fill="#0d0f15" stroke="#27272a" />

      {/* AR HUD Crosshairs & Grid Plane */}
      <circle cx="300" cy="190" r="110" stroke="#3b82f6" strokeOpacity="0.25" strokeDasharray="4 4" />
      <circle cx="300" cy="190" r="4" fill="#38bdf8" />
      <line x1="160" y1="190" x2="440" y2="190" stroke="#3b82f6" strokeOpacity="0.2" />
      <line x1="300" y1="80" x2="300" y2="300" stroke="#3b82f6" strokeOpacity="0.2" />

      {/* 3D Simulated Arduino Board Wireframe */}
      <rect x="220" y="130" width="160" height="110" rx="6" fill="#005c5f" fillOpacity="0.4" stroke="#00979d" strokeWidth="1.5" />
      <rect x="205" y="145" width="20" height="30" fill="#71717a" stroke="#d4d4d8" />
      <rect x="250" y="150" width="45" height="45" rx="3" fill="#18181b" stroke="#3f3f46" />
      <text x="255" y="176" fill="#a1a1aa" fontSize="7" fontFamily="monospace">ATMEGA328P</text>

      {/* Pin Headers */}
      <rect x="235" y="132" width="130" height="8" fill="#18181b" stroke="#71717a" />
      <rect x="235" y="230" width="130" height="8" fill="#18181b" stroke="#71717a" />

      {/* Connected Breadboard Wires */}
      <path d="M 330 132 C 330 80, 420 80, 440 120" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="3 3" />
      <path d="M 310 132 C 310 60, 460 60, 470 140" fill="none" stroke="#22c55e" strokeWidth="2" />
      <path d="M 280 238 C 280 280, 430 280, 450 210" fill="none" stroke="#eab308" strokeWidth="2" strokeDasharray="3 3" />

      {/* LED Component */}
      <circle cx="440" cy="120" r="8" fill="#ef4444" stroke="#fca5a5" strokeWidth="1.5" />
      <circle cx="440" cy="120" r="14" stroke="#ef4444" strokeOpacity="0.4" />

      {/* AR HUD Telemetry Cards */}
      <rect x="40" y="35" width="130" height="50" rx="5" fill="#141419" fillOpacity="0.85" stroke="#27272a" />
      <text x="50" y="52" fill="#38bdf8" fontSize="8" fontFamily="monospace">● AR TRACKING: ACTIVE</text>
      <text x="50" y="66" fill="#f4f4f5" fontSize="10" fontFamily="monospace">VOLTAGE: 5.02V</text>
      <text x="50" y="78" fill="#71717a" fontSize="8" fontFamily="monospace">CURRENT: 18.4mA</text>

      <rect x="430" y="35" width="130" height="50" rx="5" fill="#141419" fillOpacity="0.85" stroke="#27272a" />
      <text x="440" y="52" fill="#a1a1aa" fontSize="8" fontFamily="monospace">UNITY PHYSICS 3D</text>
      <text x="440" y="66" fill="#f4f4f5" fontSize="10" fontFamily="monospace">SIMULATION: 60 FPS</text>
      <text x="440" y="78" fill="#22c55e" fontSize="8" fontFamily="monospace">CIRCUIT: CLOSED (OK)</text>
    </svg>
  );
}

interface WorkListProps {
  projects?: Project[];
  showViewAllLink?: boolean;
  sectionTitle?: string;
  sectionId?: string;
}

export default function WorkList({
  projects = HOMEPAGE_PROJECTS,
  showViewAllLink = true,
  sectionTitle = "[ SELECTED WORK ]",
  sectionId = "work",
}: WorkListProps) {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [activeScreenshotIdx, setActiveScreenshotIdx] = useState<number>(0);
  const [isZoomed, setIsZoomed] = useState<boolean>(false);

  // Keyboard navigation & ESC key listener for modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalProject(null);
        setIsZoomed(false);
      }
      if (!activeModalProject) return;

      const hasScreenshots = activeModalProject.screenshots && activeModalProject.screenshots.length > 1;

      if (e.key === "ArrowRight") {
        if (hasScreenshots) {
          setActiveScreenshotIdx((prev) => (prev + 1) % activeModalProject.screenshots!.length);
        } else {
          const currentIndex = projects.findIndex((p) => p.id === activeModalProject.id);
          const nextIndex = (currentIndex + 1) % projects.length;
          setActiveModalProject(projects[nextIndex]);
          setActiveScreenshotIdx(0);
        }
      } else if (e.key === "ArrowLeft") {
        if (hasScreenshots) {
          setActiveScreenshotIdx((prev) => (prev - 1 + activeModalProject.screenshots!.length) % activeModalProject.screenshots!.length);
        } else {
          const currentIndex = projects.findIndex((p) => p.id === activeModalProject.id);
          const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
          setActiveModalProject(projects[prevIndex]);
          setActiveScreenshotIdx(0);
        }
      }
    };

    if (activeModalProject) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [activeModalProject, projects]);

  const openProjectModal = (project: Project, screenshotIdx = 0) => {
    setActiveModalProject(project);
    setActiveScreenshotIdx(screenshotIdx);
    setIsZoomed(false);
  };

  return (
    <section id={sectionId} className="py-24 max-w-5xl mx-auto px-6 sm:px-8">
      <div className="flex items-center justify-between mb-10">
        <p className="font-mono text-[13px] tracking-widest text-muted uppercase">
          {sectionTitle}
        </p>
        <span className="font-mono text-xs text-zinc-500 hidden sm:inline-block">
          Click screenshot to expand view
        </span>
      </div>

      <div className="flex flex-col divide-y divide-border-line">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group grid grid-cols-1 md:grid-cols-12 gap-6 py-10 transition-colors"
          >
            {/* Left: Info & Details */}
            <div className="md:col-span-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[13px] text-accent font-semibold">
                    {project.id}
                  </span>
                  <span className="text-zinc-600">/</span>
                  <span className="font-mono text-xs text-zinc-500 uppercase">
                    {project.type}
                  </span>
                </div>

                <h3 className="font-serif text-2xl md:text-3xl text-zinc-100 font-medium group-hover:text-white transition-colors">
                  {project.name}
                </h3>

                <p className="text-[14px] text-muted leading-relaxed max-w-md">
                  {project.blurb}
                </p>
              </div>

              {/* Stack Chips & Actions */}
              <div className="space-y-3 pt-2">
                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] text-zinc-400 bg-surface/80 border border-border-line px-2.5 py-0.5 rounded hover:border-accent/50 hover:bg-accent/10 hover:text-accent hover:scale-105 transition-all duration-200 cursor-default select-none shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.external && (
                  <div className="pt-1 font-mono text-xs">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-accent hover:text-accent-hover py-1 transition-colors font-medium underline underline-offset-4 decoration-accent/40 hover:decoration-accent"
                    >
                      <span>Live Site</span>
                      <span>↗</span>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Right: Screenshot Mockup Preview Box */}
            <div className="md:col-span-6 flex items-center">
              <button
                type="button"
                onClick={() => openProjectModal(project, 0)}
                className="thumb-card w-full aspect-[16/10] rounded-xl overflow-hidden border border-border-line bg-surface/70 transition-all duration-300 relative group/thumb cursor-pointer shadow-lg hover:shadow-2xl hover:scale-[1.02] text-left"
                aria-label={`View screenshot for ${project.name}`}
              >
                {/* Embedded Real Image or Stylized Preview (100% Unblurred & Crisp) */}
                {project.screenshots && project.screenshots.length > 0 ? (
                  <div className="w-full h-full bg-[#1e1a17] flex items-center justify-center overflow-hidden">
                    <Image
                      src={project.screenshots[0].src}
                      alt={project.name}
                      width={600}
                      height={375}
                      className="w-full h-full object-cover object-center"
                      unoptimized
                    />
                  </div>
                ) : (
                  <ProjectMockupGraphic id={project.id} />
                )}

                {/* Badge if multiple screenshots */}
                {project.screenshots && project.screenshots.length > 1 && (
                  <div className="absolute top-3 right-3 bg-zinc-950/80 backdrop-blur-sm border border-zinc-700 px-2 py-0.5 rounded text-[10px] font-mono text-zinc-300">
                    {project.screenshots.length} Screens
                  </div>
                )}

                {/* Minimal Non-Intrusive Floating Expand Tag on Hover */}
                <div className="absolute bottom-3 right-3 opacity-0 group-hover/thumb:opacity-100 transition-opacity duration-200 pointer-events-none select-none">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-zinc-950/90 border border-accent/40 px-3 py-1 font-mono text-[11px] text-accent shadow-xl shadow-black/60">
                    <span>Enlarge</span>
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                  </span>
                </div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View All Projects CTA Link */}
      {showViewAllLink && (
        <div className="pt-12 flex justify-center">
          <Link
            href="/works"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-surface/80 hover:bg-surface border border-border-line hover:border-accent/50 font-mono text-xs text-zinc-300 hover:text-accent transition-all duration-200 shadow-md hover:shadow-[0_0_25px_rgba(6,182,212,0.25)] cursor-pointer"
          >
            <span>View All Projects</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1 font-semibold text-accent">→</span>
          </Link>
        </div>
      )}

      {/* Interactive Full-Screen Lightbox Modal */}
      {activeModalProject && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={activeModalProject.name}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="relative w-full max-w-6xl max-h-[94vh] flex flex-col rounded-2xl border border-zinc-700/80 bg-surface/95 shadow-2xl overflow-hidden text-zinc-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between border-b border-border-line px-5 py-3.5 bg-ink/90">
              <div className="flex items-center gap-2.5">
                <span className="font-mono text-xs text-zinc-200 font-semibold">
                  {activeModalProject.id} &mdash; {activeModalProject.name}
                </span>
                {activeModalProject.screenshots && (
                  <span className="font-mono text-[11px] text-accent bg-accent/10 px-2 py-0.5 rounded border border-accent/30 font-medium">
                    {activeScreenshotIdx + 1} / {activeModalProject.screenshots.length}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[11px] text-zinc-500 hidden sm:inline-block">
                  ESC to close · Arrows to navigate
                </span>

                {activeModalProject.screenshots && (
                  <button
                    type="button"
                    onClick={() => setIsZoomed((prev) => !prev)}
                    className={`rounded-lg border px-2.5 py-1 text-xs font-mono transition-colors cursor-pointer flex items-center gap-1.5 ${
                      isZoomed
                        ? "border-accent bg-accent text-zinc-950 font-medium shadow-sm shadow-accent/30"
                        : "border-border-line bg-surface/80 text-zinc-300 hover:text-accent hover:border-accent/40"
                    }`}
                    aria-label="Toggle zoom"
                  >
                    <span>{isZoomed ? "Zoom: 100%" : "Zoom: Fit"}</span>
                    <span>{isZoomed ? "🔍−" : "🔍+"}</span>
                  </button>
                )}

                <button
                  type="button"
                  onClick={() => setActiveModalProject(null)}
                  className="rounded-lg border border-border-line bg-surface/80 p-1.5 text-zinc-400 hover:text-accent hover:border-accent/40 transition-colors cursor-pointer"
                  aria-label="Close dialog"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Image Display Stage (Tightly Hugged & Expanded Full-Bleed) */}
            <div
              className={`relative w-full aspect-[16/9] sm:aspect-[1.95/1] max-h-[78vh] bg-surface flex items-center justify-center overflow-hidden border-b border-border-line ${
                isZoomed ? "cursor-zoom-out overflow-auto" : "cursor-zoom-in"
              }`}
              onClick={() => {
                if (activeModalProject.screenshots) setIsZoomed((prev) => !prev);
              }}
            >
              {activeModalProject.screenshots && activeModalProject.screenshots.length > 0 ? (
                <div
                  className={`w-full h-full flex items-center justify-center transition-transform duration-200 ${
                    isZoomed ? "scale-150" : "scale-100"
                  }`}
                >
                  <Image
                    src={activeModalProject.screenshots[activeScreenshotIdx].src}
                    alt={activeModalProject.screenshots[activeScreenshotIdx].title}
                    width={1920}
                    height={960}
                    className="w-full h-full object-contain"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                    unoptimized
                  />
                </div>
              ) : (
                <ProjectMockupGraphic id={activeModalProject.id} />
              )}

              {/* Prev / Next Controls with Cyan Hover Glow */}
              {activeModalProject.screenshots && activeModalProject.screenshots.length > 1 ? (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveScreenshotIdx(
                        (prev) => (prev - 1 + activeModalProject.screenshots!.length) % activeModalProject.screenshots!.length
                      );
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border-line bg-zinc-950/80 backdrop-blur-sm p-3 text-zinc-300 hover:text-accent hover:border-accent hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Previous screenshot"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveScreenshotIdx(
                        (prev) => (prev + 1) % activeModalProject.screenshots!.length
                      );
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border-line bg-zinc-950/80 backdrop-blur-sm p-3 text-zinc-300 hover:text-accent hover:border-accent hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Next screenshot"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = projects.findIndex((p: Project) => p.id === activeModalProject.id);
                      const prevIndex = (currentIndex - 1 + projects.length) % projects.length;
                      openProjectModal(projects[prevIndex], 0);
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full border border-border-line bg-zinc-950/80 backdrop-blur-sm p-3 text-zinc-300 hover:text-accent hover:border-accent hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Previous project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      const currentIndex = projects.findIndex((p: Project) => p.id === activeModalProject.id);
                      const nextIndex = (currentIndex + 1) % projects.length;
                      openProjectModal(projects[nextIndex], 0);
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full border border-border-line bg-zinc-950/80 backdrop-blur-sm p-3 text-zinc-300 hover:text-accent hover:border-accent hover:bg-zinc-900/95 hover:scale-110 hover:shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all cursor-pointer shadow-lg"
                    aria-label="Next project"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Bottom Caption Pill inside stage */}
              {activeModalProject.screenshots && (
                <div className="absolute bottom-3 inset-x-0 flex justify-center pointer-events-none">
                  <div className="bg-zinc-950/85 backdrop-blur-sm border border-zinc-700/80 px-4 py-1.5 rounded-full text-xs font-mono text-zinc-200 shadow-xl">
                    {activeModalProject.screenshots[activeScreenshotIdx].title}
                  </div>
                </div>
              )}
            </div>

            {/* Gallery Thumbnail Selector Strip */}
            {activeModalProject.screenshots && activeModalProject.screenshots.length > 1 && (
              <div className="px-5 py-3 bg-ink/90 flex items-center justify-center gap-2.5 overflow-x-auto">
                {activeModalProject.screenshots.map((s, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveScreenshotIdx(idx)}
                    className={`h-12 w-20 rounded-md overflow-hidden border transition-all cursor-pointer shrink-0 ${
                      activeScreenshotIdx === idx
                        ? "border-accent ring-2 ring-accent/40 opacity-100 scale-105"
                        : "border-zinc-700 opacity-50 hover:opacity-80 hover:border-zinc-500"
                    }`}
                  >
                    <Image
                      src={s.src}
                      alt={s.title}
                      width={80}
                      height={48}
                      className="w-full h-full object-cover"
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
