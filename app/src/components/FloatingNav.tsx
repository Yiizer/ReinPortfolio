"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const NAV_ITEMS = [
  {
    id: "hero",
    label: "Home",
    href: "/",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    id: "work",
    label: "Works Archive",
    href: "/works",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: "stack",
    label: "Stack & About",
    href: "/#stack",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    id: "contact",
    label: "Contact",
    href: "/#contact",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function FloatingNav() {
  const [visible, setVisible] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~200px)
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-30% 0px -40% 0px", threshold: 0.1 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavigate = (item: (typeof NAV_ITEMS)[number]) => {
    if (item.id === "work") {
      router.push("/works");
      return;
    }

    if (item.id === "hero") {
      if (pathname === "/") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        router.push("/");
      }
      return;
    }

    // For other sections (e.g. stack, contact)
    const el = document.getElementById(item.id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/#${item.id}`);
    }
  };

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`}
    >
      <nav
        aria-label="Quick navigation"
        className="flex items-center gap-1 p-1.5 rounded-full bg-surface/30 backdrop-blur-lg border border-white/10 shadow-2xl shadow-black/50"
      >
        {/* Monogram Brand Icon */}
        <button
          type="button"
          onClick={() => handleNavigate(NAV_ITEMS[0])}
          className="group relative flex items-center justify-center w-8 h-8 rounded-full hover:bg-white/10 text-zinc-300 hover:text-accent transition-all cursor-pointer"
          aria-label="Scroll to Top"
        >
          <span className="font-mono text-xs font-bold tracking-tighter text-zinc-200 group-hover:text-accent">
            R
          </span>
          {/* Tooltip */}
          <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-zinc-900/90 border border-zinc-700 px-2 py-0.5 font-mono text-[10px] text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Home
          </span>
        </button>

        {/* Subtle Divider */}
        <span className="w-px h-3.5 bg-border-line/80 mx-0.5" />

        {/* Section Icon Buttons */}
        {NAV_ITEMS.filter((item) => item.id !== "hero").map((item) => {
          const isCurrentRoute = item.id === "work" && pathname === "/works";
          const isActive = isCurrentRoute || (pathname === "/" && activeSection === item.id);

          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleNavigate(item)}
              className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer ${
                isActive
                  ? "bg-accent/15 text-accent border border-accent/30 shadow-sm shadow-accent/20"
                  : "text-zinc-400 hover:text-accent hover:bg-white/10"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "true" : undefined}
            >
              {item.icon}

              {/* Tooltip */}
              <span className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-zinc-900/90 border border-zinc-700 px-2 py-0.5 font-mono text-[10px] text-zinc-200 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </header>
  );
}
