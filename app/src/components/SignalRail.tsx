"use client";

import { useMemo, useEffect, useState } from "react";
import { usePathname } from "next/navigation";

interface SectionDef {
  id: string;
  label: string;
}

const HOME_SECTIONS: SectionDef[] = [
  { id: "hero", label: "Intro" },
  { id: "projects", label: "Projects" },
  { id: "teaser", label: "About" },
  { id: "contact-cta", label: "Contact" },
];

const ABOUT_SECTIONS: SectionDef[] = [
  { id: "ch-intro", label: "Identity" },
  { id: "ch-story", label: "Story" },
  { id: "ch-stack", label: "Capabilities" },
  { id: "ch-cta", label: "Connect" },
];

export default function SignalRail() {
  const pathname = usePathname();
  const [active, setActive] = useState("");

  const isHome = pathname === "/";
  const isAbout = pathname === "/about";

  const sections = useMemo(() => {
    if (isHome) return HOME_SECTIONS;
    if (isAbout) return ABOUT_SECTIONS;
    return [];
  }, [isHome, isAbout]);

  useEffect(() => {
    if (!sections.length) return;

    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const windowHeight = window.innerHeight;
          const docHeight = document.documentElement.scrollHeight;

          // If at bottom of page, activate last section
          if (windowHeight + scrollY >= docHeight - 80) {
            setActive(sections[sections.length - 1].id);
            ticking = false;
            return;
          }

          // If at top of page, activate first section
          if (scrollY < 120) {
            setActive(sections[0].id);
            ticking = false;
            return;
          }

          // Trigger line positioned at 35% of viewport
          const triggerY = scrollY + windowHeight * 0.35;

          for (let i = sections.length - 1; i >= 0; i--) {
            const el = document.getElementById(sections[i].id);
            if (el) {
              const top = el.offsetTop;
              if (triggerY >= top - 40) {
                setActive(sections[i].id);
                ticking = false;
                return;
              }
            }
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sections]);

  if (!isHome && !isAbout) {
    return null;
  }

  const activeIndex = sections.findIndex((s) => s.id === active);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const win =
      typeof window !== "undefined"
        ? (window as unknown as {
            __lenis?: {
              scrollTo: (
                target: HTMLElement | string,
                options?: { offset?: number }
              ) => void;
            } | null;
          })
        : null;

    if (win?.__lenis) {
      win.__lenis.scrollTo(el, { offset: -30 });
    } else {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <aside
      aria-label="Page scroll position"
      className="hidden md:flex fixed left-6 lg:left-8 top-1/2 -translate-y-1/2 z-30 flex-col items-center select-none pointer-events-auto"
    >
      <div className="relative flex flex-col items-center justify-between h-44 py-1">
        {/* Continuous 1px Track Line */}
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border"
          aria-hidden="true"
        />

        {sections.map((section, idx) => {
          const isActive = idx === (activeIndex === -1 ? 0 : activeIndex);

          return (
            <button
              key={section.id}
              type="button"
              onClick={() => scrollTo(section.id)}
              className="group relative z-10 flex items-center justify-center w-6 h-6 cursor-pointer outline-none focus-visible:ring-1 focus-visible:ring-accent"
              aria-label={`Scroll to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
            >
              {/* Dot */}
              <span
                className={`rounded-full transition-all duration-200 ${
                  isActive
                    ? "w-2.5 h-2.5 bg-accent shadow-[0_0_10px_var(--color-accent)] ring-2 ring-accent/30"
                    : "w-1.5 h-1.5 bg-text-dim group-hover:bg-text-main group-hover:scale-125"
                }`}
              />

              {/* Floating Tooltip Label on Hover */}
              <span className="pointer-events-none absolute left-7 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-150 font-mono text-[10px] tracking-wider uppercase bg-surface/95 border border-border px-2 py-0.5 rounded text-text-main shadow-md whitespace-nowrap">
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}