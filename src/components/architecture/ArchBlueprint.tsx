"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ARCH_LAYERS } from "@/lib/projects-data";
import { ArchLayer } from "@/types";
import { useSoundFX } from "@/hooks/useSoundFX";
import {
  Layers,
  ShieldCheck,
  Server,
  Zap,
  Activity,
  Cpu,
  Database,
  ArrowRight,
  Clock,
  CheckCircle2,
  FileCode2,
} from "lucide-react";

const LAYER_ICONS: Record<string, typeof Layers> = {
  edge: ShieldCheck,
  gateway: Server,
  core: Cpu,
  async: Zap,
  persistence: Database,
};

const LAYER_COLORS: Record<string, { text: string; bg: string; border: string; glow: string }> = {
  edge: {
    text: "text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/30",
    glow: "rgba(16, 185, 129, 0.25)",
  },
  gateway: {
    text: "text-cyan-400",
    bg: "bg-cyan-500/10",
    border: "border-cyan-500/30",
    glow: "rgba(6, 182, 212, 0.25)",
  },
  core: {
    text: "text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/30",
    glow: "rgba(139, 92, 246, 0.25)",
  },
  async: {
    text: "text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/30",
    glow: "rgba(245, 158, 11, 0.25)",
  },
  persistence: {
    text: "text-blue-400",
    bg: "bg-blue-500/10",
    border: "border-blue-500/30",
    glow: "rgba(59, 130, 246, 0.25)",
  },
};

export default function ArchBlueprint() {
  const [selectedLayerId, setSelectedLayerId] = useState<string>(ARCH_LAYERS[2].id); // default to Double-Entry Core
  const { playHover, playSwitch } = useSoundFX();

  const selectedLayer: ArchLayer =
    ARCH_LAYERS.find((l) => l.id === selectedLayerId) || ARCH_LAYERS[0];

  const handleSelectLayer = (id: string) => {
    playSwitch();
    setSelectedLayerId(id);
  };

  const SelectedIcon = LAYER_ICONS[selectedLayer.category] || Layers;
  const colorTheme = LAYER_COLORS[selectedLayer.category] || LAYER_COLORS.core;

  return (
    <section id="architecture" className="relative scroll-mt-28 space-y-8">
      {/* Section Header */}
      <div className="space-y-2 border-b border-white/5 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-400 font-mono text-xs font-semibold">
          <Layers className="w-3.5 h-3.5" />
          <span>Interactive 5-Layer Blueprint</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          RentKhata Distributed Core & System Architecture
        </h2>

        <p className="font-sans text-sm sm:text-base text-slate-400 max-w-3xl leading-relaxed">
          Explore the architectural tiers of our high-concurrency double-entry ledger platform. Click any layer below to inspect live Architectural Decision Records (ADRs), failover mechanisms, and latency benchmarks.
        </p>
      </div>

      {/* Main Interactive Visualizer & Inspector Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: 5-Layer Visual Stack (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2 flex items-center justify-between">
            <span>System Pipeline (Edge ➔ Persistence)</span>
            <span className="text-emerald-400 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Invariants Active
            </span>
          </div>

          <div className="space-y-3 relative">
            {ARCH_LAYERS.map((layer, index) => {
              const Icon = LAYER_ICONS[layer.category] || Layers;
              const isSelected = layer.id === selectedLayerId;
              const theme = LAYER_COLORS[layer.category];

              return (
                <div key={layer.id} className="relative">
                  <motion.button
                    type="button"
                    onClick={() => handleSelectLayer(layer.id)}
                    onMouseEnter={playHover}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 relative overflow-hidden focus:outline-none ${
                      isSelected
                        ? `bg-[#0d111a] ${theme.border} shadow-[0_0_25px_${theme.glow}]`
                        : "bg-[#0d111a]/60 border-white/10 hover:border-white/20 hover:bg-[#0d111a]/80"
                    }`}
                  >
                    {/* Active side indicator */}
                    {isSelected && (
                      <motion.div
                        layoutId="active-layer-indicator"
                        className={`absolute left-0 top-0 bottom-0 w-1.5 ${theme.bg.replace("/10", "")} bg-current ${theme.text}`}
                      />
                    )}

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3">
                        <div
                          className={`p-2.5 rounded-xl border ${theme.border} ${theme.bg} ${theme.text}`}
                        >
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-[10px] text-slate-500">
                              LAYER 0{layer.layerNumber}
                            </span>
                            <span
                              className={`font-mono text-[10px] px-1.5 py-0.2 rounded border ${theme.border} ${theme.text}`}
                            >
                              {layer.latency}
                            </span>
                          </div>
                          <h4 className="font-heading font-bold text-sm text-white tracking-tight">
                            {layer.name}
                          </h4>
                        </div>
                      </div>

                      <ArrowRight
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isSelected ? `${theme.text} translate-x-1` : "text-slate-600"
                        }`}
                      />
                    </div>
                  </motion.button>

                  {/* Flow connector line between layers */}
                  {index < ARCH_LAYERS.length - 1 && (
                    <div className="w-0.5 h-3 bg-gradient-to-b from-white/20 to-transparent mx-auto my-0.5" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Real-time Architecture Inspector Panel (7 cols) */}
        <div className="lg:col-span-7">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedLayer.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.25 }}
              className="rounded-2xl bg-[#0d111a]/90 backdrop-blur-xl border border-white/10 p-6 sm:p-7 shadow-[0_10px_35px_rgba(0,0,0,0.6)] space-y-6"
            >
              {/* Inspector Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/10 pb-5">
                <div className="flex items-center gap-3">
                  <div className={`p-3 rounded-xl border ${colorTheme.border} ${colorTheme.bg} ${colorTheme.text}`}>
                    <SelectedIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 font-mono text-xs text-slate-400">
                      <span>LAYER 0{selectedLayer.layerNumber}</span>
                      <span>•</span>
                      <span className="uppercase text-white font-semibold">
                        {selectedLayer.category}
                      </span>
                    </div>
                    <h3 className="font-heading font-extrabold text-xl text-white tracking-tight">
                      {selectedLayer.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 text-right">
                    <span className="font-mono text-[10px] text-slate-400 block">THROUGHPUT</span>
                    <span className="font-mono text-xs font-bold text-white">
                      {selectedLayer.throughput}
                    </span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl bg-black/50 border border-white/10 text-right">
                    <span className="font-mono text-[10px] text-slate-400 block">LATENCY</span>
                    <span className="font-mono text-xs font-bold text-emerald-400">
                      {selectedLayer.latency}
                    </span>
                  </div>
                </div>
              </div>

              {/* Short summary */}
              <p className="font-sans text-sm text-slate-300 leading-relaxed">
                {selectedLayer.shortDescription}
              </p>

              {/* Stack Pills */}
              <div>
                <span className="font-mono text-[11px] text-slate-400 uppercase tracking-tight block mb-2 font-semibold">
                  Technologies Deployed in this Layer
                </span>
                <div className="flex flex-wrap gap-2">
                  {selectedLayer.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 font-mono text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Decision Record (ADR) */}
              <div className="rounded-xl bg-black/40 border border-white/10 p-4 sm:p-5 space-y-3">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-amber-400 uppercase tracking-wide">
                  <FileCode2 className="w-4 h-4" />
                  <span>{selectedLayer.adr.title}</span>
                </div>

                <div className="space-y-1.5 text-xs font-sans">
                  <p className="text-slate-400">
                    <strong className="text-slate-200">Context:</strong> {selectedLayer.adr.context}
                  </p>
                  <p className="text-slate-300">
                    <strong className="text-emerald-400">Decision:</strong>{" "}
                    {selectedLayer.adr.decision}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/5 space-y-1.5">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block font-bold">
                    Key Consequences & Tradeoffs
                  </span>
                  <ul className="space-y-1">
                    {selectedLayer.adr.consequences.map((c, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs font-sans text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Fault-Tolerance & Observability Protocol */}
              <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-950/20 via-cyan-950/20 to-transparent border border-white/10 space-y-2">
                <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400 uppercase">
                  <Activity className="w-4 h-4" />
                  <span>Fault-Tolerance Protocol & Fallback Strategy</span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-sans text-slate-300 pt-1">
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block uppercase">Protocol</span>
                    <span>{selectedLayer.faultTolerance.protocol}</span>
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-slate-400 block uppercase">Telemetry & Guard</span>
                    <span>{selectedLayer.faultTolerance.monitoring}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
