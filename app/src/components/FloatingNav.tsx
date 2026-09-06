"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = [
  { href: "/works", label: "Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function FloatingNav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Top Nav */}
      <header
        className={`hidden sm:block fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
          scrolled
            ? "bg-primary/90 backdrop-blur-md border-b border-border shadow-xs"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
          {/* Typographic Signature Brand */}
          <Link
            href="/"
            className="group flex items-center gap-2 transition-opacity hover:opacity-90 py-1"
            aria-label="Rein Gavino - Home"
          >
            <div className="flex items-baseline tracking-tight">
              <span className="font-serif text-2xl sm:text-[26px] font-normal text-text-main transition-colors duration-200 group-hover:text-accent">
                Rein
              </span>
              <span className="font-serif italic text-2xl sm:text-[26px] font-normal text-accent transition-colors duration-200 group-hover:text-text-main ml-1.5">
                Gavino
              </span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block self-center animate-pulse" />
          </Link>

          {/* Nav Links + Theme Toggle */}
          <nav aria-label="Main Navigation" className="flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-mono text-xs tracking-wider uppercase transition-colors duration-150 relative py-1 ${
                    isActive
                      ? "text-accent font-semibold"
                      : "text-text-muted hover:text-text-main"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-px bg-accent" />
                  )}
                </Link>
              );
            })}

            <div className="h-4 w-px bg-border mx-1" aria-hidden="true" />
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Mobile Top Header */}
      <header className="sm:hidden fixed top-0 inset-x-0 z-40 bg-primary/90 backdrop-blur-md border-b border-border px-5 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="group flex items-center gap-1.5"
          aria-label="Rein Gavino - Home"
        >
          <div className="flex items-baseline tracking-tight">
            <span className="font-serif text-xl font-normal text-text-main">
              Rein
            </span>
            <span className="font-serif italic text-xl font-normal text-accent ml-1">
              Gavino
            </span>
          </div>
          <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block self-center" />
        </Link>
        <ThemeToggle />
      </header>

      {/* Mobile App-Style Bottom Navigation Bar */}
      <nav
        aria-label="Mobile Navigation"
        className="sm:hidden fixed bottom-0 inset-x-0 z-50 bg-primary/95 backdrop-blur-md border-t border-border px-4 py-2"
      >
        <div className="flex items-center justify-around max-w-md mx-auto">
          {/* Home */}
          <Link
            href="/"
            className={`flex flex-col items-center gap-1 p-1.5 transition-colors ${
              pathname === "/"
                ? "text-accent font-semibold"
                : "text-text-muted hover:text-text-main"
            }`}
          >
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
                d="M3 12l9-8 9 8M5 10v10a1 1 0 001 1h4a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1h4a1 1 0 001-1V10"
              />
            </svg>
            <span className="font-mono text-[9px] uppercase tracking-wider">
              Home
            </span>
          </Link>

          {/* Works */}
          <Link
            href="/works"
            className={`flex flex-col items-center gap-1 p-1.5 transition-colors ${
              pathname.startsWith("/works")
                ? "text-accent font-semibold"
                : "text-text-muted hover:text-text-main"
            }`}
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.75}
              viewBox="0 0 24 24"
            >
              <rect x="3" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="3" width="7" height="7" rx="1" />
              <rect x="14" y="14" width="7" height="7" rx="1" />
              <rect x="3" y="14" width="7" height="7" rx="1" />
            </svg>
            <span className="font-mono text-[9px] uppercase tracking-wider">
              Works
            </span>
          </Link>

          {/* About */}
          <Link
            href="/about"
            className={`flex flex-col items-center gap-1 p-1.5 transition-colors ${
              pathname === "/about"
                ? "text-accent font-semibold"
                : "text-text-muted hover:text-text-main"
            }`}
          >
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            <span className="font-mono text-[9px] uppercase tracking-wider">
              About
            </span>
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className={`flex flex-col items-center gap-1 p-1.5 transition-colors ${
              pathname === "/contact"
                ? "text-accent font-semibold"
                : "text-text-muted hover:text-text-main"
            }`}
          >
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
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="font-mono text-[9px] uppercase tracking-wider">
              Contact
            </span>
          </Link>

          {/* Theme Toggle Button */}
          <div className="flex flex-col items-center justify-center p-1.5">
            <ThemeToggle showLabel />
          </div>
        </div>
      </nav>
    </>
  );
}
