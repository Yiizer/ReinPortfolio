import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingNav from "@/components/FloatingNav";
import PageTransition from "@/components/PageTransition";
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
  title: "Portfolio — Design & Systems Engineering",
  description: "Crafting thoughtful interfaces and resilient systems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
    >
      <body className="min-h-screen bg-ink text-zinc-200 font-sans selection:bg-white/15 selection:text-white">
        <LoadingScreen />

        {/* Global Floating Glass Navbar */}
        <FloatingNav />

        {/* Global Fixed Background Layer 1: Ambient Luminous Silver Light Pools */}
        <div
          className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
          aria-hidden="true"
        >
          <div
            className="animate-ambient-1 absolute -top-20 left-[15%] h-[600px] w-[600px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.45) 0%, rgba(212,212,216,0.18) 45%, rgba(9,9,11,0) 70%)",
            }}
          />
          <div
            className="animate-ambient-2 absolute top-[28%] right-[6%] h-[560px] w-[560px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(228,228,231,0.40) 0%, rgba(161,161,170,0.15) 50%, rgba(9,9,11,0) 70%)",
            }}
          />
          <div
            className="animate-ambient-3 absolute bottom-[5%] left-[18%] h-[540px] w-[540px] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, rgba(255,255,255,0.38) 0%, rgba(212,212,216,0.15) 45%, rgba(9,9,11,0) 70%)",
            }}
          />
        </div>

        {/* Global Fixed Background Layer 2: Technical Repeating Dot Grid Texture */}
        <div
          className="pointer-events-none fixed inset-0 z-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
          aria-hidden="true"
        />

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
