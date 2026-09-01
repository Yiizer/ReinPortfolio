import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingNav from "@/components/FloatingNav";
import PageTransition from "@/components/PageTransition";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rein Gavino — Fullstack Developer",
    template: "%s | Rein Gavino",
  },
  description: "Fullstack developer creating scalable web applications, thoughtful interfaces, and resilient backend systems.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.add(t);}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-ink text-zinc-200 font-sans selection:bg-accent/20 selection:text-accent">
        <ThemeProvider>
          <LoadingScreen />

          {/* Global Floating Glass Navbar with Theme Toggle */}
          <FloatingNav />

          {/* Global Fixed Background Layer 1: Ambient Luminous Breathing Light Pools */}
          <div
            className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
            aria-hidden="true"
          >
            <div
              className="ambient-pool-1 animate-ambient-1 absolute -top-20 left-[15%] h-[680px] w-[680px] rounded-full blur-3xl transition-all duration-500"
              style={{
                background: "var(--ambient-pool-1)",
              }}
            />
            <div
              className="ambient-pool-2 animate-ambient-2 absolute top-[28%] right-[6%] h-[620px] w-[620px] rounded-full blur-3xl transition-all duration-500"
              style={{
                background: "var(--ambient-pool-2)",
              }}
            />
            <div
              className="ambient-pool-3 animate-ambient-3 absolute bottom-[5%] left-[18%] h-[590px] w-[590px] rounded-full blur-3xl transition-all duration-500"
              style={{
                background: "var(--ambient-pool-3)",
              }}
            />
          </div>

          {/* Global Fixed Background Layer 2: Technical Repeating Dot Grid Texture */}
          <div
            className="dot-grid-layer pointer-events-none fixed inset-0 z-0 opacity-40 transition-opacity duration-300"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
            }}
            aria-hidden="true"
          />

          <PageTransition>{children}</PageTransition>
        </ThemeProvider>
      </body>
    </html>
  );
}
