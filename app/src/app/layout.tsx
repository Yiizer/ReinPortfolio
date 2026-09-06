import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Instrument_Serif } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import LoadingScreen from "@/components/LoadingScreen";
import FloatingNav from "@/components/FloatingNav";
import SmoothScroll from "@/components/SmoothScroll";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rein Gavino — Fullstack Developer",
    template: "%s | Rein Gavino",
  },
  description:
    "Fullstack developer based in Manila building systems, interfaces, and web applications across web, mobile, and hardware.",
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
      className={`${instrumentSerif.variable} ${GeistSans.variable} ${GeistMono.variable} antialiased`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.add(t);}catch(e){}})()`,
          }}
        />
      </head>
      <body className="min-h-screen bg-primary text-text-main font-sans selection:bg-accent selection:text-white">
        <ThemeProvider>
          <LoadingScreen />
          <FloatingNav />
          <SmoothScroll>
            {children}
          </SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
