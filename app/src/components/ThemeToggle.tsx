"use client";

import { useSyncExternalStore } from "react";
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

  if (!mounted) {
    return (
      <div
        className={`w-7 h-7 rounded-md flex items-center justify-center opacity-40 ${className}`}
        aria-hidden="true"
      />
    );
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`inline-flex items-center justify-center gap-1.5 p-1.5 rounded-md text-text-muted hover:text-accent transition-colors duration-150 cursor-pointer ${className}`}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? (
        /* Sun Icon */
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <circle cx="12" cy="12" r="4" />
          <path
            strokeLinecap="round"
            d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41"
          />
        </svg>
      ) : (
        /* Moon Icon */
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth={1.75}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
      )}

      {showLabel && (
        <span className="font-mono text-[10px] uppercase tracking-wider">
          {isDark ? "Light" : "Dark"}
        </span>
      )}
    </button>
  );
}
