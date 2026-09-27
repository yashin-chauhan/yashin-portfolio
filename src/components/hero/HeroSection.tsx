"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePersona } from "@/hooks/usePersona";
import { useSoundFX } from "@/hooks/useSoundFX";
import BentoStats from "@/components/hero/BentoStats";
import {
  ArrowRight,
  Github,
  FileText,
  Calendar,
  Sparkles,
  Terminal,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { useTerminal } from "@/hooks/useTerminal";

export default function HeroSection() {
  const { persona } = usePersona();
  const { playHover, playClick } = useSoundFX();
  const { openTerminal } = useTerminal();

  const getHeroContent = () => {
    switch (persona) {
      case "recruiter":
        return {
          badge: "Open for Staff / Senior Software Engineer Roles & High-Impact Contracts",
          headline: (
            <>
              Architecting <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Fault-Tolerant Distributed Systems</span> & High-Concurrency SaaS.
            </>
          ),
          subhead:
            "Full-Stack Software Engineer with 5+ years of production experience across Next.js 15, NestJS/Fastify, PostgreSQL, and event-driven queues. Creator of RentKhata double-entry financial core.",
          primaryCta: {
            text: "Explore Architecture Blueprint",
            href: "#architecture",
            icon: Layers,
          },
          secondaryCta: {
            text: "View GitHub (22+ Repos)",
            href: "https://github.com/yashin-chauhan",
            external: true,
            icon: Github,
          },
        };

      case "client":
        return {
          badge: "Accepting 1 High-Ticket SaaS Build / Full-Cycle Product Contract",
          headline: (
            <>
              I Engineer <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Turnkey SaaS Platforms & ERPs</span> That Scale & Drive Revenue.
            </>
          ),
          subhead:
            "From architectural blueprint to production deployment in weeks. Zero tech debt, robust double-entry accounting, automated billing pipelines, and guaranteed fixed-scope delivery.",
          primaryCta: {
            text: "Calculate Project Scope & Cost",
            href: "#estimator",
            icon: Sparkles,
          },
          secondaryCta: {
            text: "Schedule Strategy Call",
            href: "#contact",
            external: false,
            icon: Calendar,
          },
        };

      case "hybrid":
      default:
        return {
          badge: "Available for Q4 Enterprise Roles & SaaS Architecture Contracts",
          headline: (
            <>
              Full-Stack Product Engineer Building <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400 bg-clip-text text-transparent">Production-Grade SaaS & Systems</span>.
            </>
          ),
          subhead:
            "5+ years of end-to-end engineering excellence. Combining high-velocity product delivery with rigorous distributed system design, multi-tenant isolation, and sub-35ms p99 latency.",
          primaryCta: {
            text: "Review Case Studies",
            href: "#projects",
            icon: ArrowRight,
          },
          secondaryCta: {
            text: "Download Resume",
            href: "/resume.pdf",
            external: true,
            icon: FileText,
          },
        };
    }
  };

  const content = getHeroContent();

  return (
    <section className="relative pt-6 sm:pt-10 pb-4">
      {/* Background radial accent glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-emerald-500/10 via-cyan-500/10 to-violet-500/10 blur-3xl pointer-events-none -z-10" />

      <div className="flex flex-col items-center text-center max-w-4xl mx-auto space-y-6">
        
        {/* Status Pill Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0d111a]/90 border border-emerald-500/30 backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="font-mono text-xs text-slate-300 tracking-tight">
            {content.badge}
          </span>
        </motion.div>

        {/* Dynamic Headline with Smooth Persona Transition */}
        <AnimatePresence mode="wait">
          <motion.div
            key={persona + "-text"}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="space-y-4"
          >
            <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] sm:leading-[1.12]">
              {content.headline}
            </h1>

            <p className="font-sans text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
              {content.subhead}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-2">
          {/* Primary CTA */}
          <a
            href={content.primaryCta.href}
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-400 text-black font-mono font-bold text-sm tracking-tight shadow-[0_0_25px_rgba(16,185,129,0.35)] hover:shadow-[0_0_35px_rgba(16,185,129,0.55)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <span>{content.primaryCta.text}</span>
            <content.primaryCta.icon className="w-4 h-4" />
          </a>

          {/* Secondary CTA */}
          <a
            href={content.secondaryCta.href}
            target={content.secondaryCta.external ? "_blank" : "_self"}
            rel={content.secondaryCta.external ? "noopener noreferrer" : undefined}
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-2 px-5 sm:px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-slate-200 font-mono text-sm tracking-tight hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            <content.secondaryCta.icon className="w-4 h-4 text-emerald-400" />
            <span>{content.secondaryCta.text}</span>
          </a>

          {/* CLI quick launcher button */}
          <button
            type="button"
            onClick={() => {
              playClick();
              openTerminal("whoami");
            }}
            onMouseEnter={playHover}
            title="Launch Terminal Shell"
            className="p-3 rounded-xl bg-[#0d111a] border border-cyan-500/30 text-cyan-400 hover:text-white hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-200 shadow-sm"
          >
            <Terminal className="w-4 h-4" />
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-3 text-slate-400 text-xs font-mono">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            <span>5+ YOE Full-Stack</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            <span>Next.js 15 & Fastify</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-3.5 h-3.5 text-violet-400" />
            <span>PostgreSQL & RLS</span>
          </div>
        </div>
      </div>

      {/* Bento Stats Display */}
      <BentoStats />
    </section>
  );
}
