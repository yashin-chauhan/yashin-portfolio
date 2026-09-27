"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSoundFX } from "@/hooks/useSoundFX";
import { useTerminal } from "@/hooks/useTerminal";
import {
  Home,
  Briefcase,
  Layers,
  Calculator,
  Cpu,
  History,
  Mail,
  Terminal,
  Volume2,
  VolumeX,
} from "lucide-react";

interface DockItem {
  id: string;
  label: string;
  icon: typeof Home;
  href?: string;
  action?: () => void;
  isSpecial?: boolean;
}

export default function FloatingDock() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const { soundEnabled, toggleSound, playHover, playClick } = useSoundFX();
  const { toggleTerminal, isOpen: isTerminalOpen } = useTerminal();

  // Active section scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["projects", "architecture", "estimator", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 300;

      if (window.scrollY < 200) {
        setActiveSection("hero");
        return;
      }

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            return;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dockItems: DockItem[] = [
    {
      id: "hero",
      label: "Overview",
      icon: Home,
      href: "#",
      action: () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    },
    {
      id: "projects",
      label: "Case Studies",
      icon: Briefcase,
      href: "#projects",
    },
    {
      id: "architecture",
      label: "5-Layer Blueprint",
      icon: Layers,
      href: "#architecture",
    },
    {
      id: "estimator",
      label: "Scope Estimator",
      icon: Calculator,
      href: "#estimator",
    },
    {
      id: "skills",
      label: "Tech Radar",
      icon: Cpu,
      href: "#skills",
    },
    {
      id: "experience",
      label: "Career Journey",
      icon: History,
      href: "#experience",
    },
    {
      id: "contact",
      label: "Transmission Form",
      icon: Mail,
      href: "#contact",
    },
    {
      id: "terminal",
      label: "Cyber Shell (~)",
      icon: Terminal,
      action: () => {
        playClick();
        toggleTerminal();
      },
      isSpecial: true,
    },
    {
      id: "sound",
      label: soundEnabled ? "Sound: ON" : "Sound: Muted",
      icon: soundEnabled ? Volume2 : VolumeX,
      action: () => {
        toggleSound();
        if (!soundEnabled) setTimeout(playClick, 50);
      },
      isSpecial: true,
    },
  ];

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-full px-2">
      <motion.nav
        aria-label="Quick navigation dock"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="flex items-center gap-1 sm:gap-2 p-1.5 sm:p-2 rounded-2xl bg-[#0d111a]/85 backdrop-blur-2xl border border-white/10 shadow-[0_12px_40px_rgba(0,0,0,0.7)]"
      >
        {dockItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          const isHovered = hoveredItem === item.id;

          const isTerminalActive = item.id === "terminal" && isTerminalOpen;

          return (
            <div key={item.id} className="relative">
              {/* Tooltip */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.9 }}
                    animate={{ opacity: 1, y: -8, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    transition={{ duration: 0.15 }}
                    className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 rounded-lg bg-black/90 border border-white/10 font-mono text-[10px] text-white whitespace-nowrap shadow-md pointer-events-none z-50"
                  >
                    {item.label}
                  </motion.div>
                )}
              </AnimatePresence>

              {item.href ? (
                <a
                  href={item.href}
                  onClick={(e) => {
                    playClick();
                    if (item.action) {
                      e.preventDefault();
                      item.action();
                    }
                  }}
                  onMouseEnter={() => {
                    playHover();
                    setHoveredItem(item.id);
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative p-2 sm:p-2.5 rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none ${
                    isActive
                      ? "bg-gradient-to-tr from-emerald-500/20 to-cyan-500/20 border border-emerald-500/40 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.3)]"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                  {isActive && (
                    <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
                  )}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.action}
                  onMouseEnter={() => {
                    playHover();
                    setHoveredItem(item.id);
                  }}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative p-2 sm:p-2.5 rounded-xl flex items-center justify-center transition-all duration-200 focus:outline-none ${
                    isTerminalActive
                      ? "bg-cyan-500/20 border border-cyan-400 text-cyan-300 shadow-[0_0_12px_rgba(6,182,212,0.4)]"
                      : item.id === "sound" && soundEnabled
                      ? "text-emerald-400 hover:bg-emerald-500/10"
                      : "text-slate-400 hover:text-slate-100 hover:bg-white/5"
                  }`}
                >
                  <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                </button>
              )}
            </div>
          );
        })}
      </motion.nav>
    </div>
  );
}
