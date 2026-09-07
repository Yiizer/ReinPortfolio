"use client";

import { useRef, useEffect, type ReactNode, type MouseEvent } from "react";
import { gsap } from "gsap";

interface MagneticProps {
  children: ReactNode;
  strength?: number; // Distance multiplier (default: 0.35)
  className?: string;
}

export default function Magnetic({
  children,
  strength = 0.35,
  className = "",
}: MagneticProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const xTo = useRef<gsap.QuickToFunc | null>(null);
  const yTo = useRef<gsap.QuickToFunc | null>(null);

  useEffect(() => {
    // Disable on touch devices or reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const isTouch = window.matchMedia("(pointer: coarse)").matches;

    if (prefersReducedMotion || isTouch || !containerRef.current) return;

    xTo.current = gsap.quickTo(containerRef.current, "x", {
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
    yTo.current = gsap.quickTo(containerRef.current, "y", {
      duration: 0.8,
      ease: "elastic.out(1, 0.3)",
    });
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !xTo.current || !yTo.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const deltaX = (e.clientX - centerX) * strength;
    const deltaY = (e.clientY - centerY) * strength;

    xTo.current(deltaX);
    yTo.current(deltaY);
  };

  const handleMouseLeave = () => {
    if (!xTo.current || !yTo.current) return;
    xTo.current(0);
    yTo.current(0);
  };

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
}

