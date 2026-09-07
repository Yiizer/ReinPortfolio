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
  metadataBase: new URL("https://reingavino.com"),
  title: {
    default: "Rein Gavino — Developer & Computer Engineer",
    template: "%s | Rein Gavino",
  },
  description:
    "Fullstack developer and Computer Engineering student based in the Philippines. Building resilient web apps, transactional POS workflows, and interactive simulations.",
  keywords: [
    "Rein Gavino",
    "Fullstack Developer",
    "Computer Engineer",
    "Philippines",
    "Next.js",
    "React",
    "TypeScript",
    "PostgreSQL",
    "Unity 3D",
    "Portfolio",
  ],
  authors: [{ name: "Rein Gavino", url: "https://reingavino.com" }],
  creator: "Rein Gavino",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://reingavino.com",
    title: "Rein Gavino — Developer & Computer Engineer",
    description:
      "Fullstack developer based in the Philippines building systems, interfaces, and web applications across web, mobile, and hardware.",
    siteName: "Rein Gavino Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rein Gavino — Developer & Computer Engineer",
    description:
      "Fullstack developer based in the Philippines building systems, interfaces, and web applications.",
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
