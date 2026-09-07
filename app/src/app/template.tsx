"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Template({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 14 },
        {
          opacity: 1,
          y: 0,
          duration: 0.45,
          ease: "power2.out",
          onComplete: () => {
            ScrollTrigger.refresh();
          },
        }
      );
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      {children}
    </div>
  );
}

