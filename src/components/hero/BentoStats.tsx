"use client";

import { motion } from "framer-motion";
import { usePersona } from "@/hooks/usePersona";
import { useSoundFX } from "@/hooks/useSoundFX";
import { Clock, Rocket, ShieldCheck, Zap, Server, Award, GitBranch, TrendingUp } from "lucide-react";

export default function BentoStats() {
  const { persona } = usePersona();
  const { playHover } = useSoundFX();

  const getStats = () => {
    switch (persona) {
      case "recruiter":
        return [
          {
            id: "yoe",
            icon: Clock,
            label: "Senior Experience",
            value: "5+ Years",
            detail: "Enterprise Full-Stack & Microservices",
            accent: "from-emerald-500/20 to-emerald-500/5",
            border: "border-emerald-500/30",
            glowText: "text-emerald-400",
            iconColor: "text-emerald-400",
          },
          {
            id: "repos",
            icon: GitBranch,
            label: "Code & Architecture",
            value: "22+ Repos",
            detail: "Clean TypeScript, Fastify & Next.js 15",
            accent: "from-cyan-500/20 to-cyan-500/5",
            border: "border-cyan-500/30",
            glowText: "text-cyan-400",
            iconColor: "text-cyan-400",
          },
          {
            id: "latency",
            icon: Zap,
            label: "Sub-Second Invariants",
            value: "32ms p99",
            detail: "ACID Ledgers, Redis Cache & Fastify",
            accent: "from-violet-500/20 to-violet-500/5",
            border: "border-violet-500/30",
            glowText: "text-violet-400",
            iconColor: "text-violet-400",
          },
          {
            id: "sla",
            icon: Server,
            label: "Production Availability",
            value: "99.9% SLA",
            detail: "Zero-Downtime CI/CD & Edge Routing",
            accent: "from-amber-500/20 to-amber-500/5",
            border: "border-amber-500/30",
            glowText: "text-amber-400",
            iconColor: "text-amber-400",
          },
        ];

      case "client":
        return [
          {
            id: "shipped",
            icon: Rocket,
            label: "Track Record",
            value: "20+ Shipped",
            detail: "SaaS, ERPs & High-Conversion Web Apps",
            accent: "from-emerald-500/20 to-emerald-500/5",
            border: "border-emerald-500/30",
            glowText: "text-emerald-400",
            iconColor: "text-emerald-400",
          },
          {
            id: "value",
            icon: TrendingUp,
            label: "Processed Ledgers",
            value: "₹4.5Cr+",
            detail: "Audited financial & transport billing",
            accent: "from-cyan-500/20 to-cyan-500/5",
            border: "border-cyan-500/30",
            glowText: "text-cyan-400",
            iconColor: "text-cyan-400",
          },
          {
            id: "debt",
            icon: ShieldCheck,
            label: "Quality Guarantee",
            value: "Zero Debt",
            detail: "Scalable architecture from Day 1",
            accent: "from-violet-500/20 to-violet-500/5",
            border: "border-violet-500/30",
            glowText: "text-violet-400",
            iconColor: "text-violet-400",
          },
          {
            id: "trust",
            icon: Award,
            label: "Client Trust",
            value: "100% On-Time",
            detail: "Milestone-driven fixed delivery sprints",
            accent: "from-amber-500/20 to-amber-500/5",
            border: "border-amber-500/30",
            glowText: "text-amber-400",
            iconColor: "text-amber-400",
          },
        ];

      case "hybrid":
      default:
        return [
          {
            id: "yoe",
            icon: Clock,
            label: "Experience",
            value: "5+ Years",
            detail: "Full-Stack Development & System Design",
            accent: "from-emerald-500/20 to-emerald-500/5",
            border: "border-emerald-500/30",
            glowText: "text-emerald-400",
            iconColor: "text-emerald-400",
          },
          {
            id: "shipped",
            icon: Rocket,
            label: "Production Delivery",
            value: "20+ Shipped",
            detail: "High-impact SaaS platforms & portals",
            accent: "from-cyan-500/20 to-cyan-500/5",
            border: "border-cyan-500/30",
            glowText: "text-cyan-400",
            iconColor: "text-cyan-400",
          },
          {
            id: "ledgers",
            icon: Zap,
            label: "Double-Entry Core",
            value: "RentKhata",
            detail: "Autonomous property accounting SaaS",
            accent: "from-violet-500/20 to-violet-500/5",
            border: "border-violet-500/30",
            glowText: "text-violet-400",
            iconColor: "text-violet-400",
          },
          {
            id: "trust",
            icon: ShieldCheck,
            label: "Reliability & Quality",
            value: "100% Trust",
            detail: "Enterprise rigor & clean documentation",
            accent: "from-amber-500/20 to-amber-500/5",
            border: "border-amber-500/30",
            glowText: "text-amber-400",
            iconColor: "text-amber-400",
          },
        ];
    }
  };

  const stats = getStats();

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mt-8">
      {stats.map((stat, idx) => {
        const Icon = stat.icon;

        return (
          <motion.div
            key={stat.id + persona}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            onMouseEnter={playHover}
            className={`group relative overflow-hidden rounded-2xl p-4 sm:p-5 bg-gradient-to-b ${stat.accent} bg-[#0d111a]/70 backdrop-blur-xl border ${stat.border} hover:border-white/30 transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.6)] hover:-translate-y-1`}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[11px] sm:text-xs text-slate-400 tracking-tight uppercase">
                {stat.label}
              </span>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 group-hover:scale-110 group-hover:bg-white/10 transition-all">
                <Icon className={`w-4 h-4 ${stat.iconColor}`} />
              </div>
            </div>

            <div className="space-y-1">
              <div
                className={`font-heading font-extrabold text-2xl sm:text-3xl tracking-tight text-white ${stat.glowText}`}
              >
                {stat.value}
              </div>
              <p className="font-sans text-xs text-slate-400 leading-snug line-clamp-2">
                {stat.detail}
              </p>
            </div>

            {/* Subtle bottom edge glow on hover */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-24 h-10 bg-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          </motion.div>
        );
      })}
    </div>
  );
}
