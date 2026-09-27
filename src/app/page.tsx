"use client";

import dynamic from "next/dynamic";
import Header from "@/components/navbar/Header";
import HeroSection from "@/components/hero/HeroSection";
import ProjectsGrid from "@/components/work/ProjectsGrid";
import ArchBlueprint from "@/components/architecture/ArchBlueprint";
import ProjectEstimator from "@/components/estimator/ProjectEstimator";
import TechRadar from "@/components/skills/TechRadar";
import CareerTimeline from "@/components/experience/CareerTimeline";
import ContactSection from "@/components/contact/ContactSection";
import CyberTerminal from "@/components/terminal/CyberTerminal";
import FloatingDock from "@/components/dock/FloatingDock";

// Dynamic import for canvas particle background to avoid SSR hydration mismatches
const ParticleCanvas = dynamic(
  () => import("@/components/canvas/ParticleCanvas"),
  { ssr: false }
);

export default function Home() {
  return (
    <main className="min-h-screen bg-[#07090e] text-slate-100 relative overflow-x-hidden">
      {/* Background Interactive Particle Field */}
      <ParticleCanvas />

      {/* Navigation Bar with Persona Mode Switcher */}
      <Header />

      {/* Main Content Sections */}
      <div className="relative z-10 pt-24 pb-20 px-4 sm:px-6 lg:px-12 max-w-7xl mx-auto space-y-20">
        <HeroSection />
        <ProjectsGrid />
        <ArchBlueprint />
        <ProjectEstimator />
        <TechRadar />
        <CareerTimeline />
        <ContactSection />

        {/* Footer */}
        <footer className="pt-8 pb-24 text-center text-xs font-mono text-slate-500 border-t border-white/5">
          <p>© 2026 Yashin Chauhan. Full-Stack Product Engineer & SaaS Architect. Delhi, India.</p>
        </footer>
      </div>

      {/* Floating Hacker Terminal Drawer (~ key toggle) */}
      <CyberTerminal />

      {/* Floating Glassmorphic Bottom Dock */}
      <FloatingDock />
    </main>
  );
}
