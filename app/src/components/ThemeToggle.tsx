"use client";

import { useEffect, useState } from "react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`group relative flex items-center justify-center w-8 h-8 rounded-full transition-all duration-200 cursor-pointer text-zinc-400 hover:text-accent hover:bg-white/10 active:scale-95 ${className}`}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {mounted ? (
        isDark ? (
          /* Sun Icon */
          <svg
            className="w-4 h-4 text-zinc-300 group-hover:text-amber-400 group-hover:rotate-45 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <circle cx="12" cy="12" r="4" strokeWidth={1.8} />
            <path
              strokeLinecap="round"
              strokeWidth={1.8}
              d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
            />
          </svg>
        ) : (
          /* Moon Icon */
          <svg
            className="w-4 h-4 text-zinc-700 group-hover:text-cyan-600 group-hover:-rotate-12 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.8}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        )
      ) : (
        <div className="w-4 h-4 rounded-full bg-zinc-700/40 animate-pulse" />
      )}

      {/* Floating Tooltip */}
      <span className="nav-tooltip pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 rounded bg-zinc-900 border border-zinc-700 px-2 py-0.5 font-mono text-[10px] text-zinc-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md z-30">
        {isDark ? "Light Mode" : "Dark Mode"}
      </span>
    </button>
  );
}
