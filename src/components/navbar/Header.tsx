"use client";

import { motion } from "framer-motion";
import { Volume2, VolumeX, Terminal, Sparkles, Briefcase, Code2, ArrowUpRight } from "lucide-react";
import { usePersona } from "@/hooks/usePersona";
import { useSoundFX } from "@/hooks/useSoundFX";
import { useTerminal } from "@/hooks/useTerminal";
import { PersonaMode } from "@/types";

interface PersonaOption {
  id: PersonaMode;
  label: string;
  icon: typeof Sparkles;
  tooltip: string;
}

const PERSONA_OPTIONS: PersonaOption[] = [
  {
    id: "recruiter",
    label: "Recruiter & Staff Eng",
    icon: Code2,
    tooltip: "System architecture, p99 benchmarks, ACID ledgers & core CS",
  },
  {
    id: "hybrid",
    label: "Hybrid Synthesis",
    icon: Sparkles,
    tooltip: "Balanced blend of product leadership & engineering rigor",
  },
  {
    id: "client",
    label: "Client & SaaS Studio",
    icon: Briefcase,
    tooltip: "Business ROI, rapid delivery, zero tech debt & scoped pricing",
  },
];

export default function Header() {
  const { persona, setPersona } = usePersona();
  const { soundEnabled, toggleSound, playHover, playSwitch, playClick } = useSoundFX();
  const { toggleTerminal, isOpen: isTerminalOpen } = useTerminal();

  const handlePersonaChange = (mode: PersonaMode) => {
    playSwitch();
    setPersona(mode);
  };

  const handleSoundToggle = () => {
    toggleSound();
    if (!soundEnabled) {
      // playing click as confirmation when enabling
      setTimeout(playClick, 50);
    }
  };

  const handleTerminalToggle = () => {
    playClick();
    toggleTerminal();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-3 sm:px-6 py-3 transition-all duration-300">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 p-2 sm:p-2.5 rounded-2xl bg-[#0d111a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
        
        {/* Left: YC Brand Logo Badge */}
        <a
          href="#"
          onMouseEnter={playHover}
          onClick={playClick}
          className="flex items-center gap-2.5 group focus:outline-none"
        >
          <div className="relative w-9 h-9 rounded-xl p-[1px] bg-gradient-to-br from-emerald-400 via-cyan-400 to-violet-500 shadow-md group-hover:shadow-[0_0_15px_rgba(16,185,129,0.5)] transition-all duration-300">
            <div className="w-full h-full bg-[#07090e] rounded-[11px] flex items-center justify-center">
              <span className="font-heading font-extrabold text-xs tracking-wider bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform">
                YC
              </span>
            </div>
          </div>
          <div className="hidden md:flex flex-col text-left">
            <span className="font-heading font-bold text-sm tracking-tight text-slate-100 group-hover:text-emerald-400 transition-colors">
              Yashin Chauhan
            </span>
            <span className="font-mono text-[10px] text-slate-400 tracking-wide flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Staff Product Engineer
            </span>
          </div>
        </a>

        {/* Center: Dynamic Persona Switcher Pill */}
        <nav
          aria-label="Persona view selector"
          className="flex items-center p-1 rounded-xl bg-black/40 border border-white/5 shadow-inner"
        >
          {PERSONA_OPTIONS.map((opt) => {
            const Icon = opt.icon;
            const isActive = persona === opt.id;

            return (
              <button
                key={opt.id}
                type="button"
                onClick={() => handlePersonaChange(opt.id)}
                onMouseEnter={playHover}
                title={opt.tooltip}
                className={`relative px-2.5 sm:px-3.5 py-1.5 rounded-lg font-mono text-[11px] sm:text-xs tracking-tight transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
                  isActive
                    ? "text-white font-medium shadow-sm"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-persona-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-violet-500/20 border border-emerald-500/40 shadow-[0_0_12px_rgba(16,185,129,0.25)]"
                  />
                )}
                <Icon
                  className={`w-3.5 h-3.5 relative z-10 ${
                    isActive ? "text-emerald-400" : "text-slate-400"
                  }`}
                />
                <span className="relative z-10 hidden sm:inline">{opt.label}</span>
                <span className="relative z-10 sm:hidden">
                  {opt.id === "recruiter" ? "Eng" : opt.id === "hybrid" ? "Hybrid" : "Client"}
                </span>
              </button>
            );
          })}
        </nav>

        {/* Right: Sound FX, Terminal Toggle, & Contact CTA */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          {/* Sound Toggle */}
          <button
            type="button"
            onClick={handleSoundToggle}
            onMouseEnter={playHover}
            aria-label={soundEnabled ? "Mute audio sound FX" : "Unmute audio sound FX"}
            title={soundEnabled ? "Sound FX: ON (Click to Mute)" : "Sound FX: OFF (Click to Unmute)"}
            className={`p-2 rounded-xl border transition-all duration-200 focus:outline-none ${
              soundEnabled
                ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20 hover:border-emerald-500/50"
                : "bg-white/5 border-white/10 text-slate-500 hover:text-slate-300 hover:bg-white/10"
            }`}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Terminal Toggle */}
          <button
            type="button"
            onClick={handleTerminalToggle}
            onMouseEnter={playHover}
            aria-label="Toggle interactive cyber terminal"
            title="Open Interactive Cyber Terminal (Hotkey: ~ or `)"
            className={`p-2 rounded-xl border transition-all duration-200 flex items-center gap-1.5 focus:outline-none ${
              isTerminalOpen
                ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                : "bg-white/5 border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-cyan-500/10"
            }`}
          >
            <Terminal className="w-4 h-4" />
            <span className="hidden lg:inline font-mono text-[10px] text-cyan-400/80 font-bold bg-cyan-950/60 px-1 py-0.5 rounded border border-cyan-500/30">
              ~
            </span>
          </button>

          {/* Contact CTA */}
          <a
            href="#contact"
            onMouseEnter={playHover}
            onClick={playClick}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-black font-mono font-bold text-xs tracking-tight shadow-md hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] transition-all duration-200 focus:outline-none"
          >
            <span>Get In Touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </header>
  );
}
