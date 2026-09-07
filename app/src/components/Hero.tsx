"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { useTheme } from "./ThemeProvider";
import Magnetic from "@/components/Magnetic";
import ScrambleText from "@/components/ScrambleText";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  vx: number;
  vy: number;
}

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const statusBarRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const dividerRef = useRef<HTMLDivElement>(null);
  const canvasWrapperRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

  // Choreographed Entrance Animation
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      tl.fromTo(
        statusBarRef.current,
        { opacity: 0, y: -8 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
      )
        .fromTo(
          titleRef.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 0.7, ease: "power3.out" },
          "-=0.25"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          "-=0.35"
        )
        .fromTo(
          dividerRef.current,
          { scaleX: 0, opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.inOut" },
          "-=0.25"
        )
        .fromTo(
          canvasWrapperRef.current,
          { opacity: 0, y: 20, scale: 0.99 },
          { opacity: 1, y: 0, scale: 1, duration: 0.7, ease: "power2.out" },
          "-=0.3"
        )
        .fromTo(
          footerRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: "power2.out" },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;
    let points: Point[] = [];

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const SPACING = 48;
    const INFLUENCE_RADIUS = 140;
    const RETURN_SPEED = 0.08;
    const DAMPING = 0.86;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);

      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;
      const newPoints: Point[] = [];

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = (c - 1) * SPACING;
          const y = (r - 1) * SPACING;
          newPoints.push({
            x,
            y,
            originX: x,
            originY: y,
            vx: 0,
            vy: 0,
          });
        }
      }

      points = newPoints;
    };

    resize();
    window.addEventListener("resize", resize);

    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const { x: mx, y: my, active: isMouseActive } = mouseRef.current;

      const nodeColor = isDark
        ? "rgba(255, 255, 255, 0.18)"
        : "rgba(26, 26, 26, 0.16)";
      const lineColor = isDark
        ? "rgba(255, 255, 255, 0.045)"
        : "rgba(0, 0, 0, 0.04)";
      const accentColor = isDark
        ? "rgba(230, 57, 70, 0.8)"
        : "rgba(180, 83, 9, 0.8)";

      points.forEach((p) => {
        if (!prefersReducedMotion) {
          const wave = Math.sin(time + p.originX * 0.015 + p.originY * 0.015) * 2;
          const targetY = p.originY + wave;

          if (isMouseActive) {
            const dx = mx - p.x;
            const dy = my - p.y;
            const dist = Math.hypot(dx, dy);

            if (dist < INFLUENCE_RADIUS && dist > 0) {
              const force = (1 - dist / INFLUENCE_RADIUS) * 30;
              p.vx -= (dx / dist) * force * 0.15;
              p.vy -= (dy / dist) * force * 0.15;
            }
          }

          p.vx += (p.originX - p.x) * RETURN_SPEED;
          p.vy += (targetY - p.y) * RETURN_SPEED;

          p.vx *= DAMPING;
          p.vy *= DAMPING;

          p.x += p.vx;
          p.y += p.vy;
        }
      });

      // Draw lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = lineColor;

      const cols = Math.ceil(width / SPACING) + 2;
      const rows = Math.ceil(height / SPACING) + 2;

      for (let r = 0; r < rows; r++) {
        ctx.beginPath();
        for (let c = 0; c < cols; c++) {
          const idx = r * cols + c;
          const p = points[idx];
          if (!p) continue;
          if (c === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      for (let c = 0; c < cols; c++) {
        ctx.beginPath();
        for (let r = 0; r < rows; r++) {
          const idx = r * cols + c;
          const p = points[idx];
          if (!p) continue;
          if (r === 0) ctx.moveTo(p.x, p.y);
          else ctx.lineTo(p.x, p.y);
        }
        ctx.stroke();
      }

      // Draw points
      points.forEach((p) => {
        const dx = mx - p.x;
        const dy = my - p.y;
        const dist = Math.hypot(dx, dy);
        const isNearMouse = isMouseActive && dist < INFLUENCE_RADIUS;

        ctx.beginPath();
        if (isNearMouse) {
          const intensity = 1 - dist / INFLUENCE_RADIUS;
          ctx.arc(p.x, p.y, 2 + intensity * 2, 0, Math.PI * 2);
          ctx.fillStyle = accentColor;
        } else {
          ctx.arc(p.x, p.y, 1.2, 0, Math.PI * 2);
          ctx.fillStyle = nodeColor;
        }
        ctx.fill();
      });

      animId = requestAnimationFrame(render);
    };

    animId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, [isDark]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    mouseRef.current = {
      x: Math.round(e.clientX - rect.left),
      y: Math.round(e.clientY - rect.top),
      active: true,
    };
  };

  const handlePointerLeave = () => {
    mouseRef.current.active = false;
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="min-h-[calc(100vh-4rem)] flex flex-col justify-between max-w-5xl mx-auto px-6 pt-24 sm:pt-28 pb-10 select-none gap-6 sm:gap-8"
    >
      {/* Status & Location Bar */}
      <div
        ref={statusBarRef}
        className="flex items-center justify-between text-xs font-mono text-text-dim border-b border-border/40 pb-4"
      >
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]" />
          <span className="text-text-main font-medium uppercase tracking-wider">
            <ScrambleText text="AVAILABLE FOR WORK" />
          </span>
        </div>
        <span className="tracking-wider uppercase text-[11px] text-text-dim">
          Manila, PH
        </span>
      </div>

      {/* Main Headline & Subtitle */}
      <div className="space-y-3">
        <h1
          ref={titleRef}
          className="font-serif text-6xl sm:text-8xl md:text-9xl text-text-main font-normal tracking-tight leading-[0.88] select-none"
        >
          Rein Gavino
        </h1>
        <p
          ref={subtitleRef}
          className="font-mono text-xs sm:text-sm text-text-muted uppercase tracking-wider flex items-center gap-2"
        >
          <span>Developer</span>
          <span className="text-accent">&bull;</span>
          <span>Manila, Philippines</span>
        </p>
      </div>

      {/* Hairline Divider with Subtle Geometric Accent */}
      <div
        ref={dividerRef}
        className="relative w-full flex items-center justify-center my-0.5"
      >
        <div className="w-full h-px bg-border/60" />
        <div className="absolute px-3 bg-primary font-mono text-[9px] text-text-dim tracking-widest uppercase">
          01 // INTERACTIVE
        </div>
      </div>

      {/* The Interactive Field Canvas */}
      <div
        ref={canvasWrapperRef}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-surface border border-border shadow-xl cursor-crosshair group"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          aria-hidden="true"
        />
        {/* Subtle canvas overlay hint */}
        <div className="absolute bottom-3 right-3 pointer-events-none font-mono text-[10px] text-text-dim bg-primary/80 backdrop-blur-sm px-2.5 py-1 rounded border border-border/40 opacity-0 group-hover:opacity-100 transition-opacity">
          INTERACTIVE SPRING FIELD
        </div>
      </div>

      {/* Minimal Footer Triggers */}
      <div
        ref={footerRef}
        className="flex items-center justify-between pt-1 font-mono text-xs"
      >
        <Magnetic strength={0.2}>
          <a
            href="#projects"
            className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 group py-1"
          >
            <span>Selected Projects</span>
            <span className="text-accent group-hover:translate-y-1 transition-transform inline-block">
              &darr;
            </span>
          </a>
        </Magnetic>

        <Magnetic strength={0.2}>
          <Link
            href="/contact"
            className="text-text-dim hover:text-accent transition-colors py-1"
          >
            <ScrambleText text="Get in touch →" />
          </Link>
        </Magnetic>
      </div>
    </section>
  );
}
