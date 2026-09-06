import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import AboutTeaser from "@/components/AboutTeaser";
import ContactCTA from "@/components/ContactCTA";
import SignalRail from "@/components/SignalRail";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Scroll indicator for large viewports */}
      <SignalRail />

      <main className="relative z-10 w-full">
        <Hero />
        <FeaturedProjects />
        <AboutTeaser />
        <ContactCTA />
        <Footer />
      </main>
    </div>
  );
}