"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTerminal } from "@/hooks/useTerminal";
import { useSoundFX } from "@/hooks/useSoundFX";
import { TerminalLogEntry } from "@/types";
import { Terminal, X, Minus, Square, CornerDownLeft, Sparkles } from "lucide-react";

const BANNER_ASCII = [
  " __   __           _     _          ____ _                 _                 ",
  " \\ \\ / /_ _ ___  | |__ (_)_ __    / ___| |__   __ _ _   _| |__   __ _ _ __  ",
  "  \\ V / _` / __| | '_ \\| | '_ \\  | |   | '_ \\ / _` | | | | '_ \\ / _` | '_ \\ ",
  "   | | (_| \\__ \\ | | | | | | | | | |___| | | | (_| | |_| | | | | (_| | | | |",
  "   |_|\\__,_|___/ |_| |_|_|_| |_|  \\____|_| |_|\\__,_|\\__,_|_| |_|\\__,_|_| |_|",
  "                                                                            ",
  "  >> Full-Stack Software Engineer // 5+ YOE // Delhi, India",
  "  >> Type 'help' to inspect available system commands.",
];

export default function CyberTerminal() {
  const { isOpen, closeTerminal, activeCommand } = useTerminal();
  const { playHover, playClick, playTerminal: playTerminalKey, playSuccess, playError } = useSoundFX();

  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalLogEntry[]>([
    { type: "ascii", lines: BANNER_ASCII },
    { type: "info", text: "Interactive Cyber Shell v2.4 initialized. System online." },
  ]);
  const [historyIndex, setHistoryIndex] = useState<number>(-1);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const terminalEndRef = useRef<HTMLDivElement | null>(null);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  // Execute initial command if passed
  useEffect(() => {
    if (isOpen && activeCommand) {
      handleExecuteCommand(activeCommand);
    }
  }, [isOpen, activeCommand]);

  // Global key listener for ~ or `
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle on `~` or '`' unless user is in another input/textarea
      const target = e.target as HTMLElement;
      const isInput = target.tagName === "INPUT" || target.tagName === "TEXTAREA";

      if ((e.key === "~" || e.key === "`") && !isInput) {
        e.preventDefault();
        useTerminal.getState().toggleTerminal();
      }

      if (e.key === "Escape" && useTerminal.getState().isOpen) {
        useTerminal.getState().closeTerminal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Auto scroll to bottom
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleExecuteCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    const cmd = trimmed.toLowerCase();
    const newLogs: TerminalLogEntry[] = [...history, { type: "input", text: `yc@portfolio:~$ ${trimmed}` }];

    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    switch (cmd) {
      case "help":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "AVAILABLE COMMANDS:",
            "  help          - Display this command manual",
            "  whoami        - Display Yashin Chauhan's core bio & technical focus",
            "  projects      - List featured production case studies",
            "  skills        - Display full-stack technical competencies",
            "  architecture  - Inspect RentKhata 5-layer system design blueprint",
            "  experience    - Display professional career chronology",
            "  hire          - Information for hiring managers & clients",
            "  github        - Open official GitHub profile (22+ repositories)",
            "  matrix        - Stream matrix visual sequence",
            "  clear         - Clear terminal console screen",
            "  exit          - Close interactive terminal modal",
          ],
        });
        break;

      case "whoami":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "NAME: Yashin Chauhan",
            "ROLE: Senior Full-Stack Engineer & SaaS Architect",
            "EXPERIENCE: 5+ Years (2021 — 2026)",
            "LOCATION: New Delhi, India (UTC +5:30)",
            "PRIMARY STACK: Next.js 15, NestJS/Fastify, PostgreSQL, TypeScript, Redis, React Native",
            "FLAGSHIP: RentKhata — Automated Double-Entry Property Ledger SaaS",
          ],
        });
        break;

      case "projects":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "FEATURED PRODUCTION CASE STUDIES:",
            "  1. RentKhata            [Fintech / PropTech]  - Double-entry accounting engine (32ms p99)",
            "  2. Compass Transport    [Logistics ERP]       - Fleet dispatch & consignment index (<15ms)",
            "  3. Gems Testing India   [Security / Web]      - Anti-tamper gemstone verification vault",
            "  4. Pragya AgriTech      [Marketplace / AI]    - Live APMC mandi price discovery & advisory",
            "",
            "Tip: Scroll to #projects on the page for interactive dual-perspective inspection.",
          ],
        });
        break;

      case "skills":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "TECHNICAL PROFICIENCIES:",
            "  [Frontend]   Next.js 15, TypeScript, React 19, Tailwind CSS, Framer Motion",
            "  [Backend]    NestJS, Fastify, Node.js, Laravel, Python FastAPI, BullMQ",
            "  [Databases]  PostgreSQL (RLS), Supabase, Redis Cache, Prisma, Drizzle",
            "  [Mobile/Ops] React Native, Expo, Docker, Vercel Edge, GitHub Actions, AWS S3",
          ],
        });
        break;

      case "architecture":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "RENTKHATA 5-LAYER DISTRIBUTED BLUEPRINT:",
            "  Layer 1: Edge Routing & Security Shield (Next.js Edge + WAF RateLimiter)",
            "  Layer 2: API Gateway & Fastify Ingestion (Strict Zod Schema + Idempotency)",
            "  Layer 3: Double-Entry Core (Pessimistic Row Locking + Balanced Invariants)",
            "  Layer 4: Async Queue (Redis BullMQ + WhatsApp/PDF Workers)",
            "  Layer 5: Persistence Tier (PostgreSQL + Multi-Tenant Row Level Security)",
          ],
        });
        break;

      case "experience":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "CAREER TIMELINE:",
            "  2024 - Present: Bakuun (Senior Full-Stack Engineer) - Multi-tenant SaaS booking engines",
            "  2023 - 2024:    GlobalLogic (Software Engineer) - Enterprise fintech & micro-frontends",
            "  2022 - 2023:    Digitally Bird (Full Stack Developer) - Scalable Next.js/Node apps",
            "  2021 - 2022:    Native Developers (Frontend/Mobile) - Cross-platform React Native apps",
          ],
        });
        break;

      case "hire":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "HIRING & CONTRACT SPECIFICATIONS:",
            "  Email:          yashin123786@gmail.com",
            "  LinkedIn:       https://www.linkedin.com/in/yashin-chauhan/",
            "  Availability:   Full-Time Roles / High-Ticket SaaS Architecture Contracts",
            "  Notice Period:  Immediate / 15 Days",
            "  Timezone Fit:   IST (UTC+5:30) with seamless US East/West & European overlap",
          ],
        });
        break;

      case "github":
        playSuccess();
        window.open("https://github.com/yashin-chauhan", "_blank");
        newLogs.push({
          type: "output",
          text: "Opening https://github.com/yashin-chauhan in a new browser tab...",
        });
        break;

      case "matrix":
        playSuccess();
        newLogs.push({
          type: "output",
          lines: [
            "01011001 01000001 01010011 01001000 01001001 01001110",
            "01000011 01001000 01000001 01010101 01001000 01000001 01001110",
            ">> SYSTEM ACCESS: GRANTED // NEURAL LINK ACTIVE // ZERO RECONCILIATION GAP",
          ],
        });
        break;

      case "clear":
        playClick();
        setHistory([]);
        setInputVal("");
        return;

      case "exit":
      case "quit":
        playClick();
        closeTerminal();
        return;

      default:
        playError();
        newLogs.push({
          type: "error",
          text: `Command not found: '${trimmed}'. Type 'help' to list available system commands.`,
        });
        break;
    }

    setHistory(newLogs);
    setInputVal("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    playTerminalKey();

    if (e.key === "Enter") {
      handleExecuteCommand(inputVal);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal("");
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md">
          {/* Backdrop Click to Close */}
          <div className="absolute inset-0" onClick={closeTerminal} />

          {/* Terminal Window */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl rounded-2xl bg-[#07090e]/95 border border-cyan-500/40 shadow-[0_0_50px_rgba(6,182,212,0.25)] flex flex-col h-[520px] max-h-[85vh] overflow-hidden"
          >
            {/* Terminal Window Header Bar */}
            <div className="px-4 py-3 bg-[#0d111a] border-b border-white/10 flex items-center justify-between select-none">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={closeTerminal}
                    onMouseEnter={playHover}
                    className="w-3 h-3 rounded-full bg-rose-500/80 hover:bg-rose-400 transition-colors"
                  />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                </div>
                <span className="font-mono text-xs text-slate-400 ml-2 flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  yc@system-node:~ (bash)
                </span>
              </div>

              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] text-slate-500 hidden sm:inline">
                  ESC to exit
                </span>
                <button
                  type="button"
                  onClick={closeTerminal}
                  onMouseEnter={playHover}
                  className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Terminal Console Logs */}
            <div
              onClick={() => inputRef.current?.focus()}
              className="flex-1 p-4 overflow-y-auto font-mono text-xs space-y-2 cursor-text scrollbar-thin"
            >
              {history.map((entry, index) => {
                if (entry.type === "ascii" && entry.lines) {
                  return (
                    <pre
                      key={index}
                      className="text-cyan-400 text-[9px] sm:text-[10px] leading-tight select-none overflow-x-auto pb-1"
                    >
                      {entry.lines.join("\n")}
                    </pre>
                  );
                }

                if (entry.type === "input") {
                  return (
                    <div key={index} className="text-emerald-400 font-bold">
                      {entry.text}
                    </div>
                  );
                }

                if (entry.type === "error") {
                  return (
                    <div key={index} className="text-rose-400">
                      {entry.text}
                    </div>
                  );
                }

                if (entry.type === "info") {
                  return (
                    <div key={index} className="text-slate-400 italic">
                      {entry.text}
                    </div>
                  );
                }

                if ("lines" in entry && entry.lines) {
                  return (
                    <div key={index} className="text-slate-300 space-y-0.5">
                      {entry.lines.map((l, lineIdx) => (
                        <div key={lineIdx}>{l}</div>
                      ))}
                    </div>
                  );
                }

                if ("text" in entry && entry.text) {
                  return (
                    <div key={index} className="text-slate-300">
                      {entry.text}
                    </div>
                  );
                }

                return null;
              })}

              <div ref={terminalEndRef} />
            </div>

            {/* Input Prompt Row */}
            <div className="p-3 bg-[#0d111a] border-t border-white/10 flex items-center gap-2">
              <span className="font-mono text-xs font-bold text-emerald-400 select-none">
                yc@portfolio:~$
              </span>
              <input
                ref={inputRef}
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="type 'help', 'projects', 'hire'..."
                className="flex-1 bg-transparent font-mono text-xs text-white focus:outline-none placeholder-slate-600 caret-emerald-400"
              />
              <button
                type="button"
                onClick={() => handleExecuteCommand(inputVal)}
                onMouseEnter={playHover}
                className="p-1.5 rounded-lg bg-emerald-500/20 text-emerald-400 hover:bg-emerald-500/30 transition-colors"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
