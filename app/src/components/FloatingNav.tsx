"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const PAGE_NAV_ITEMS = [
  {
    id: "about",
    href: "/about",
    label: "About",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
  {
    id: "works",
    href: "/works",
    label: "Works",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    id: "contact",
    href: "/contact",
    label: "Contact",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300">
      <nav
        aria-label="Site page navigation"
        className="flex items-center gap-1 p-1.5 rounded-full bg-surface/80 backdrop-blur-xl border border-border-line shadow-2xl shadow-black/30"
      >
        {/* 1st: Monogram Brand Icon -> Homepage */}
        <Link
          href="/"
          className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer ${
            isHome
              ? "bg-accent/15 text-accent border border-accent/30 shadow-sm shadow-accent/20"
              : "text-zinc-400 hover:text-accent hover:bg-white/10"
          }`}
          aria-label="Home"
          aria-current={isHome ? "page" : undefined}
        >
          <span
            className={`font-mono text-xs font-bold tracking-tighter transition-colors ${
              isHome ? "text-accent" : "text-zinc-300 group-hover:text-accent"
            }`}
          >
            R
          </span>
          {/* Tooltip */}
          <span className="nav-tooltip pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-zinc-900 border border-zinc-700 px-2 py-0.5 font-mono text-[10px] text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
            Home
          </span>
        </Link>

        {/* Subtle Divider */}
        <span className="w-px h-3.5 bg-border-line/80 mx-0.5" />

        {/* 2nd: About, 3rd: Works, 4th: Contact */}
        {PAGE_NAV_ITEMS.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.id}
              href={item.href}
              className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all cursor-pointer ${
                isActive
                  ? "bg-accent/15 text-accent border border-accent/30 shadow-sm shadow-accent/20"
                  : "text-zinc-400 hover:text-accent hover:bg-white/10"
              }`}
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {item.icon}

              {/* Tooltip */}
              <span className="nav-tooltip pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-zinc-900 border border-zinc-700 px-2 py-0.5 font-mono text-[10px] text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
                {item.label}
              </span>
            </Link>
          );
        })}

        {/* Subtle Divider before Theme Toggle */}
        <span className="w-px h-3.5 bg-border-line/80 mx-0.5" />

        {/* Theme Switcher Icon Button */}
        <ThemeToggle />
      </nav>
    </header>
  );
}
