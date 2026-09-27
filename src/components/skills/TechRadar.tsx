"use client";

import { motion } from "framer-motion";
import { TECH_RADAR_CATEGORIES } from "@/lib/projects-data";
import { useSoundFX } from "@/hooks/useSoundFX";
import {
  Layout,
  Server,
  Database,
  Smartphone,
  Cpu,
  Sparkles,
  CheckCircle2,
} from "lucide-react";

const CATEGORY_ICONS: Record<string, typeof Layout> = {
  Layout: Layout,
  Server: Server,
  Database: Database,
  Smartphone: Smartphone,
};

const LEVEL_COLORS: Record<string, string> = {
  Expert: "border-emerald-500/40 text-emerald-400 bg-emerald-500/10",
  Advanced: "border-cyan-500/40 text-cyan-400 bg-cyan-500/10",
  Production: "border-violet-500/40 text-violet-400 bg-violet-500/10",
  Core: "border-amber-500/40 text-amber-400 bg-amber-500/10",
};

export default function TechRadar() {
  const { playHover } = useSoundFX();

  return (
    <section id="skills" className="relative scroll-mt-28 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-white/5 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-semibold">
          <Cpu className="w-3.5 h-3.5" />
          <span>Core Engineering Competencies</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Tech Radar & Production Stack
        </h2>

        <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          5+ years of real-world battle-tested mastery across full-stack architectures, high-throughput microservices, ACID databases, and native mobile environments.
        </p>
      </div>

      {/* 4 Glass Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TECH_RADAR_CATEGORIES.map((category, idx) => {
          const Icon = CATEGORY_ICONS[category.icon] || Layout;

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              onMouseEnter={playHover}
              className="rounded-2xl bg-[#0d111a]/80 backdrop-blur-xl border border-white/10 hover:border-white/25 transition-all duration-300 p-6 space-y-5 shadow-[0_8px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between"
            >
              {/* Header */}
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-cyan-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-lg text-white tracking-tight">
                      {category.title}
                    </h3>
                  </div>

                  <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-slate-300">
                    {category.badge}
                  </span>
                </div>

                <p className="font-sans text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </div>

              {/* Skills List */}
              <div className="space-y-3 pt-2 border-t border-white/5">
                {category.skills.map((skill, sIdx) => {
                  const badgeClass =
                    LEVEL_COLORS[skill.level] || LEVEL_COLORS.Advanced;

                  return (
                    <div key={sIdx} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span className="font-mono text-slate-200 font-medium">
                            {skill.name}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="font-mono text-[10px] text-slate-400 hidden sm:inline">
                            {skill.note}
                          </span>
                          <span
                            className={`font-mono text-[10px] px-1.5 py-0.2 rounded border font-semibold ${badgeClass}`}
                          >
                            {skill.level}
                          </span>
                        </div>
                      </div>

                      {/* Proficiency bar */}
                      <div className="w-full h-1.5 bg-black/50 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.proficiency}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: sIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-500 rounded-full"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>

            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
