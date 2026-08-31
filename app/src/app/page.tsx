import Hero from "@/components/Hero";
import WorkList from "@/components/WorkList";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import SignalRail from "@/components/SignalRail";

export default function Home() {
  return (
    <div className="relative min-h-screen">
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