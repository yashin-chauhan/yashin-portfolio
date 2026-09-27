"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ProjectData } from "@/types";
import { useSoundFX } from "@/hooks/useSoundFX";
import {
  ExternalLink,
  Github,
  TrendingUp,
  Cpu,
  Check,
  Zap,
  Layers,
  ArrowRight,
  Shield,
} from "lucide-react";

interface ProjectCardProps {
  project: ProjectData;
  defaultView?: "client" | "engineering";
}

export default function ProjectCard({
  project,
  defaultView = "engineering",
}: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<"client" | "engineering">(defaultView);
  const { playHover, playSwitch, playClick } = useSoundFX();

  const handleTabChange = (tab: "client" | "engineering") => {
    playSwitch();
    setActiveTab(tab);
  };

  return (
    <div
      className="group relative rounded-2xl bg-[#0d111a]/85 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 shadow-[0_10px_35px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col"
      style={{
        boxShadow: `0 10px 30px -10px rgba(0,0,0,0.6)`,
      }}
    >
      {/* Top Accent Line */}
      <div
        className="h-1 w-full bg-gradient-to-r from-transparent via-current to-transparent opacity-60"
        style={{ color: project.accentColor }}
      />

      {/* Card Header */}
      <div className="p-5 sm:p-6 pb-4 border-b border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1.5 flex-wrap">
            <span
              className="px-2.5 py-0.5 rounded-md font-mono text-[10px] font-bold tracking-wider uppercase border"
              style={{
                borderColor: `${project.accentColor}40`,
                backgroundColor: `${project.accentColor}15`,
                color: project.accentColor,
              }}
            >
              {project.category}
            </span>
            <span className="font-mono text-[11px] text-slate-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              {project.status}
            </span>
          </div>

          <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white tracking-tight group-hover:text-emerald-300 transition-colors">
            {project.title}
          </h3>
          <p className="font-sans text-xs text-slate-400 mt-0.5">
            {project.subtitle}
          </p>
        </div>

        {/* Dual-Perspective Perspective Switcher Pill */}
        <div className="flex items-center p-1 rounded-xl bg-black/60 border border-white/10 self-start sm:self-center">
          <button
            type="button"
            onClick={() => handleTabChange("engineering")}
            onMouseEnter={playHover}
            className={`relative px-3 py-1 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "engineering"
                ? "text-white font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {activeTab === "engineering" && (
              <motion.div
                layoutId={`card-tab-${project.id}`}
                className="absolute inset-0 rounded-lg bg-white/10 border border-white/20 shadow-inner"
              />
            )}
            <Cpu className="w-3.5 h-3.5 text-cyan-400 relative z-10" />
            <span className="relative z-10">⚙️ Engineering</span>
          </button>

          <button
            type="button"
            onClick={() => handleTabChange("client")}
            onMouseEnter={playHover}
            className={`relative px-3 py-1 rounded-lg font-mono text-xs transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "client"
                ? "text-white font-medium"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {activeTab === "client" && (
              <motion.div
                layoutId={`card-tab-${project.id}`}
                className="absolute inset-0 rounded-lg bg-white/10 border border-white/20 shadow-inner"
              />
            )}
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400 relative z-10" />
            <span className="relative z-10">📈 Client ROI</span>
          </button>
        </div>
      </div>

      {/* Metrics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 bg-black/30 border-b border-white/5">
        {project.metrics.map((metric, i) => (
          <div key={i} className="px-2 py-1 flex flex-col">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-tight">
              {metric.label}
            </span>
            <span className="font-heading font-bold text-base sm:text-lg text-white">
              {metric.value}
            </span>
            {metric.change && (
              <span className="font-mono text-[10px] text-emerald-400 truncate">
                {metric.change}
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Dynamic Tab Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <AnimatePresence mode="wait">
          {activeTab === "engineering" ? (
            <motion.div
              key="engineering-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Architecture Highlight */}
              <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/20 space-y-1">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-cyan-400 font-bold uppercase">
                  <Layers className="w-3.5 h-3.5" />
                  <span>Architecture & Invariant Core</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.engineeringView.architectureHighlight}
                </p>
              </div>

              {/* Key Architectural Decisions */}
              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-tight block mb-2 font-semibold">
                  Key Technical Decisions
                </span>
                <ul className="space-y-2">
                  {project.engineeringView.keyDecisions.map((decision, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                      <Zap className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{decision}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Pills */}
              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-tight block mb-2 font-semibold">
                  Tech Stack
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.engineeringView.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="client-view"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="space-y-4"
            >
              {/* Business Problem */}
              <div className="p-3.5 rounded-xl bg-emerald-950/20 border border-emerald-500/20 space-y-1">
                <div className="flex items-center gap-1.5 font-mono text-[11px] text-emerald-400 font-bold uppercase">
                  <Shield className="w-3.5 h-3.5" />
                  <span>The High-Stakes Business Problem</span>
                </div>
                <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {project.clientView.businessProblem}
                </p>
              </div>

              {/* ROI & Delivered Value */}
              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-tight block mb-2 font-semibold">
                  Delivered ROI & Business Impact
                </span>
                <ul className="space-y-2">
                  {project.clientView.solutionROI.map((roi, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{roi}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Scope & Deliverables */}
              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-tight block mb-2 font-semibold">
                  Shipped Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
                  {project.clientView.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-lg bg-white/5 border border-white/5 font-sans text-xs text-slate-300 flex items-center gap-1.5"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                      <span className="truncate">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Footer Action Links */}
        <div className="pt-5 mt-5 border-t border-white/5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            {project.clientView.liveUrl && (
              <a
                href={project.clientView.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 font-mono text-xs font-bold transition-all duration-200"
              >
                <span>Live Project</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}

            {project.engineeringView.githubUrl && (
              <a
                href={project.engineeringView.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={playHover}
                onClick={playClick}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white font-mono text-xs transition-all duration-200"
              >
                <Github className="w-3.5 h-3.5" />
                <span>Code Repository</span>
              </a>
            )}
          </div>

          <a
            href="#contact"
            onMouseEnter={playHover}
            onClick={playClick}
            className="font-mono text-xs text-slate-400 hover:text-emerald-400 flex items-center gap-1 transition-colors"
          >
            <span>Inquire Build</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
