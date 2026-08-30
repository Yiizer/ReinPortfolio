import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import SignalRail from "@/components/SignalRail";
import FloatingNav from "@/components/FloatingNav";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-ink text-zinc-100 selection:bg-white/20 selection:text-white">
      {/* Top Floating Glass Minimalist Navbar */}
      <FloatingNav />
      {/* Background Layer 1: Ambient Luminous Silver Light Pools (Slow Floating & Breathing) */}
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

      {/* Background Layer 2: Technical Repeating Dot Grid Texture */}
      <div
        className="pointer-events-none fixed inset-0 z-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
        aria-hidden="true"
      />

      {/* Sticky / Fixed Navigation Rail */}
      <SignalRail />

      <main className="relative z-10 w-full md:pl-20">
        <Hero />
        <WorkList />
        <TechStack />
        <Contact />
      </main>
    </div>
  );
}