"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

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

  const { theme } = useTheme();
  const isDark = theme === "dark";

  const mouseRef = useRef<{ x: number; y: number; active: boolean }>({
    x: -9999,
    y: -9999,
    active: false,
  });

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
      <div className="flex items-center justify-between text-xs font-mono text-text-dim border-b border-border/40 pb-4">
        <div className="flex items-center gap-2.5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-text-main font-medium uppercase tracking-wider">
            Available for contracts
          </span>
        </div>
        <span className="tracking-wider uppercase text-[11px] text-text-dim">
          Manila, PH
        </span>
      </div>

      {/* Main Headline & Subtitle */}
      <div className="space-y-3">
        <h1 className="font-serif text-6xl sm:text-8xl md:text-9xl text-text-main font-normal tracking-tight leading-[0.88] select-none">
          Rein Gavino
        </h1>
        <p className="font-mono text-xs sm:text-sm text-text-muted uppercase tracking-wider">
          Fullstack Developer &bull; Systems &amp; Reactive Interfaces
        </p>
      </div>

      {/* The Interactive Field Canvas */}
      <div
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        className="relative h-64 sm:h-80 md:h-96 w-full rounded-2xl overflow-hidden bg-[#0d0d10] border border-border/80 shadow-2xl shadow-black/40 cursor-crosshair group"
      >
        <canvas
          ref={canvasRef}
          className="w-full h-full block"
          aria-hidden="true"
        />
      </div>

      {/* Minimal Footer Triggers */}
      <div className="flex items-center justify-between pt-1 font-mono text-xs">
        <a
          href="#projects"
          className="text-text-muted hover:text-accent transition-colors flex items-center gap-2 group"
        >
          <span>Selected Projects</span>
          <span className="text-accent group-hover:translate-y-0.5 transition-transform">&darr;</span>
        </a>

        <Link
          href="/contact"
          className="text-text-dim hover:text-accent transition-colors"
        >
          Contact &rarr;
        </Link>
      </div>
    </section>
  );
}
