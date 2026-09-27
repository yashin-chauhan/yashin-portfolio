"use client";

import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/projects-data";
import ProjectCard from "@/components/work/ProjectCard";
import { usePersona } from "@/hooks/usePersona";
import { Sparkles, Terminal, ArrowUpRight } from "lucide-react";
import { useSoundFX } from "@/hooks/useSoundFX";

export default function ProjectsGrid() {
  const { persona } = usePersona();
  const { playHover, playClick } = useSoundFX();

  // Pick default tab view based on persona
  const defaultTab = persona === "client" ? "client" : "engineering";

  return (
    <section id="projects" className="relative scroll-mt-28 space-y-8">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5 pb-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Production Case Studies & Systems</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Engineered for High-Scale & Business Impact
          </h2>

          <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            Real, active production applications built with strict type safety, double-entry financial invariants, and sub-35ms p99 query latency.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/yashin-chauhan"
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={playHover}
            onClick={playClick}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-all duration-200"
          >
            <span>All 22+ Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400" />
          </a>
        </div>
      </div>

      {/* Grid of 4 Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {FEATURED_PROJECTS.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <ProjectCard project={project} defaultView={defaultTab} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
