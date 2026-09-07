"use client";

import { useSyncExternalStore, MouseEvent } from "react";
import { useTheme } from "./ThemeProvider";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

const emptySubscribe = () => () => {};

export default function ThemeToggle({
  className = "",
  showLabel = false,
}: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const isDark = theme === "dark";

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clientX = rect.left + rect.width / 2;
    const clientY = rect.top + rect.height / 2;
    toggleTheme({ clientX, clientY });
  };

  if (!mounted) {
    return (
      <div
        className={`w-8 h-8 rounded-lg flex items-center justify-center opacity-40 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center gap-2 p-1.5 rounded-lg text-text-muted hover:text-text-main hover:bg-surface/80 active:scale-90 transition-all duration-200 cursor-pointer ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {/* Animated Dual Sun / Moon Icon Container */}
      <div className="relative w-4 h-4 flex items-center justify-center overflow-visible">
        {/* Sun Icon (shown in dark mode to switch to light) */}
        <svg
          className={`w-4 h-4 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            isDark
              ? "rotate-0 scale-100 opacity-100 text-amber-400 drop-shadow-[0_0_6px_rgba(251,191,36,0.4)]"
              : "rotate-90 scale-0 opacity-0 text-text-muted pointer-events-none"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          />
        </svg>

        {/* Moon Icon (shown in light mode to switch to dark) */}
        <svg
          className={`w-4 h-4 absolute transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${
            !isDark
              ? "rotate-0 scale-100 opacity-100 text-indigo-500 drop-shadow-[0_0_6px_rgba(99,102,241,0.3)]"
              : "-rotate-90 scale-0 opacity-0 text-text-muted pointer-events-none"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth={1.8}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      </div>

      {showLabel && (
        <span className="font-mono text-[10px] uppercase tracking-wider transition-colors duration-200">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
