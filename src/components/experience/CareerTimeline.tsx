"use client";

import { motion } from "framer-motion";
import { CAREER_HISTORY } from "@/lib/projects-data";
import { useSoundFX } from "@/hooks/useSoundFX";
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  Compass,
  Radio,
  Sparkles,
  CheckCircle2,
  BookOpen,
} from "lucide-react";

export default function CareerTimeline() {
  const { playHover, playClick } = useSoundFX();

  return (
    <section id="experience" className="relative scroll-mt-28 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-white/5 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-xs font-semibold">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Track Record & History</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Career Trajectory & Engineering Journey
        </h2>

        <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          5+ years scaling multi-tenant hospitality engines, high-throughput enterprise integrations, and full-stack product architectures.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Timeline (8 cols) */}
        <div className="lg:col-span-8 space-y-6 relative">
          
          {/* Vertical connecting line */}
          <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-cyan-500 to-transparent opacity-30" />

          {CAREER_HISTORY.map((job, idx) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: idx * 0.1 }}
              onMouseEnter={playHover}
              className="relative pl-12 group"
            >
              {/* Node Indicator */}
              <div className="absolute left-2.5 top-5 w-4 h-4 rounded-full bg-[#0d111a] border-2 border-emerald-400 group-hover:scale-125 group-hover:border-cyan-400 transition-all duration-300 shadow-[0_0_10px_rgba(16,185,129,0.5)] z-10 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              </div>

              {/* Experience Card */}
              <div className="p-6 rounded-2xl bg-[#0d111a]/85 backdrop-blur-xl border border-white/10 group-hover:border-white/20 transition-all duration-300 space-y-4 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
                
                {/* Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/5 pb-3">
                  <div>
                    <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white tracking-tight flex items-center gap-2">
                      <span>{job.role}</span>
                      <span className="text-slate-400 font-normal text-sm">@</span>
                      <a
                        href={job.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={playClick}
                        className="text-emerald-400 hover:text-cyan-300 transition-colors inline-flex items-center gap-1"
                      >
                        {job.company}
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </h3>

                    <div className="flex items-center gap-3 font-mono text-xs text-slate-400 mt-1 flex-wrap">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500" />
                        {job.location}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-500" />
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <span
                    className={`font-mono text-xs px-2.5 py-0.5 rounded-full border self-start sm:self-auto ${job.badgeColor}`}
                  >
                    {job.type}
                  </span>
                </div>

                {/* Highlights */}
                <ul className="space-y-2">
                  {job.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2.5 text-xs sm:text-sm font-sans text-slate-300 leading-relaxed">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                  {job.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="px-2.5 py-0.5 rounded-md bg-white/5 border border-white/10 font-mono text-[11px] text-slate-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Sidebar: Current Explorations & Availability (4 cols) */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Availability Status Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-b from-[#101522] to-[#0d111a] border border-emerald-500/30 backdrop-blur-xl space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase tracking-wide">
              <Radio className="w-4 h-4 animate-pulse" />
              <span>Current Status & Availability</span>
            </div>

            <p className="font-sans text-xs sm:text-sm text-slate-300 leading-relaxed">
              Based in <strong>Delhi, India (IST / UTC+5:30)</strong>. Available for full-time senior / staff engineering roles and high-impact SaaS contract engagements worldwide (overlapping US/EU timezones).
            </p>

            <div className="space-y-2 font-mono text-xs text-slate-300 pt-2 border-t border-white/10">
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Notice Period:</span>
                <span className="text-emerald-400 font-bold">Immediate / 15 Days</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-400">Preferred Stack:</span>
                <span className="text-white font-bold">Next.js 15, NestJS, Postgres</span>
              </div>
            </div>
          </div>

          {/* Current Explorations Card */}
          <div className="p-6 rounded-2xl bg-[#0d111a]/85 border border-white/10 backdrop-blur-xl space-y-4 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400 uppercase tracking-wide">
              <Compass className="w-4 h-4" />
              <span>Current Research & Explorations</span>
            </div>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-heading font-semibold text-xs text-white block">
                  1. Multi-Agent AI Tool Calling & Workflows
                </span>
                <p className="font-sans text-[11px] text-slate-400 leading-snug">
                  Autonomous agent loops with MCP (Model Context Protocol) and local vector embeddings.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-heading font-semibold text-xs text-white block">
                  2. Edge-Native Financial Ledger Invariants
                </span>
                <p className="font-sans text-[11px] text-slate-400 leading-snug">
                  Zero-latency pessimistic locking at the edge using distributed transactional SQLite and Turso.
                </p>
              </div>

              <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                <span className="font-heading font-semibold text-xs text-white block">
                  3. High-Performance Web Audio Synthesis
                </span>
                <p className="font-sans text-[11px] text-slate-400 leading-snug">
                  Procedural harmonic audio engines for high-immersion web interactions with zero asset bundle weight.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
