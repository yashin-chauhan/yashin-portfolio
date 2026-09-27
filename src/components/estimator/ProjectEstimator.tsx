"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSoundFX } from "@/hooks/useSoundFX";
import {
  Calculator,
  Check,
  Sparkles,
  Clock,
  DollarSign,
  ArrowRight,
  ShieldCheck,
  Send,
  Zap,
} from "lucide-react";

interface CategoryOption {
  id: string;
  name: string;
  basePrice: number;
  baseWeeks: number;
  description: string;
}

const CATEGORIES: CategoryOption[] = [
  {
    id: "saas",
    name: "Full-Stack SaaS Platform",
    basePrice: 160000, // INR
    baseWeeks: 3,
    description: "Multi-tenant auth, subscription billing, dashboard, automated emails & admin portal.",
  },
  {
    id: "erp",
    name: "Enterprise Freight & Logistics ERP",
    basePrice: 220000,
    baseWeeks: 4,
    description: "Fleet tracking, consignment indexing, driver ledgers, billing & PDF generators.",
  },
  {
    id: "webapp",
    name: "High-Performance Modern Web App",
    basePrice: 90000,
    baseWeeks: 2,
    description: "Next.js 15, edge rendering, SEO optimization, smooth animations & CMS.",
  },
  {
    id: "api",
    name: "Distributed REST / GraphQL Core",
    basePrice: 120000,
    baseWeeks: 2.5,
    description: "Fastify microservice, PostgreSQL schemas, Redis queues, and Swagger docs.",
  },
];

interface AddonOption {
  id: string;
  name: string;
  price: number;
  weeks: number;
  description: string;
}

const ADDONS: AddonOption[] = [
  {
    id: "double-entry",
    name: "Double-Entry Ledger & Financial Engine",
    price: 45000,
    weeks: 1,
    description: "Strict ACID transactions, zero reconciliation errors, balance invariants.",
  },
  {
    id: "whatsapp",
    name: "WhatsApp & SMS Autonomous Event Pipeline",
    price: 25000,
    weeks: 0.5,
    description: "BullMQ asynchronous queue, webhook listeners & automated PDF invoice delivery.",
  },
  {
    id: "ai-features",
    name: "AI Copilot / Diagnostic Integration",
    price: 35000,
    weeks: 1,
    description: "LLM agent integration, document vector search & automated data extraction.",
  },
  {
    id: "observability",
    name: "Enterprise Observability & Edge WAF",
    price: 20000,
    weeks: 0.5,
    description: "Datadog/Sentry tracing, p99 alert channels & Cloudflare DDoS rate limiting.",
  },
];

const COMPLEXITY_LEVELS = [
  { value: 1, label: "MVP / Beta", multiplier: 1.0, timelineBonus: 0 },
  { value: 2, label: "Growth / Scaled", multiplier: 1.35, timelineBonus: 1 },
  { value: 3, label: "Enterprise Tier", multiplier: 1.75, timelineBonus: 2 },
];

export default function ProjectEstimator() {
  const [selectedCategory, setSelectedCategory] = useState<string>(CATEGORIES[0].id);
  const [complexity, setComplexity] = useState<number>(2); // 1, 2, 3
  const [selectedAddons, setSelectedAddons] = useState<string[]>([
    "double-entry",
    "whatsapp",
  ]);

  const { playHover, playClick, playSuccess } = useSoundFX();

  const category = CATEGORIES.find((c) => c.id === selectedCategory) || CATEGORIES[0];
  const complexityConfig = COMPLEXITY_LEVELS.find((c) => c.value === complexity) || COMPLEXITY_LEVELS[1];

  const toggleAddon = (id: string) => {
    playClick();
    if (selectedAddons.includes(id)) {
      setSelectedAddons(selectedAddons.filter((a) => a !== id));
    } else {
      setSelectedAddons([...selectedAddons, id]);
    }
  };

  // Calculate price and weeks
  const addonsPrice = selectedAddons.reduce((sum, id) => {
    const item = ADDONS.find((a) => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const addonsWeeks = selectedAddons.reduce((sum, id) => {
    const item = ADDONS.find((a) => a.id === id);
    return sum + (item ? item.weeks : 0);
  }, 0);

  const rawPrice = (category.basePrice + addonsPrice) * complexityConfig.multiplier;
  const rawWeeks = Math.ceil(category.baseWeeks + addonsWeeks + complexityConfig.timelineBonus);

  const minPriceFormatted = `₹${(Math.round(rawPrice * 0.9 / 5000) * 5000).toLocaleString("en-IN")}`;
  const maxPriceFormatted = `₹${(Math.round(rawPrice * 1.15 / 5000) * 5000).toLocaleString("en-IN")}`;
  const usdMin = Math.round((rawPrice * 0.9) / 86 / 100) * 100;
  const usdMax = Math.round((rawPrice * 1.15) / 86 / 100) * 100;

  const handleLockInScope = () => {
    playSuccess();
    const messageField = document.getElementById("contact-message") as HTMLTextAreaElement | null;
    const scopeSummary = `Hi Yashin,\n\nI used your Project Estimator:\n- Type: ${category.name}\n- Tier: ${complexityConfig.label}\n- Add-ons: ${selectedAddons.join(", ") || "None"}\n- Estimated Scope: ${minPriceFormatted} - ${maxPriceFormatted} (~${rawWeeks} weeks)\n\nLet's discuss our project requirements.`;
    
    if (messageField) {
      messageField.value = scopeSummary;
      messageField.dispatchEvent(new Event("input", { bubbles: true }));
    }

    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="estimator" className="relative scroll-mt-28 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-white/5 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
          <Calculator className="w-3.5 h-3.5" />
          <span>Transparent Engineering Estimator</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Calculate Your Project Scope & Timeline
        </h2>

        <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          No hidden fees or bloated agency overhead. Estimate your custom build with production-grade engineering standards and fixed milestone deliveries.
        </p>
      </div>

      {/* Estimator Card Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Interactive Form (7 cols) */}
        <div className="lg:col-span-7 rounded-2xl bg-[#0d111a]/85 backdrop-blur-xl border border-white/10 p-6 sm:p-7 space-y-6 shadow-[0_10px_35px_rgba(0,0,0,0.5)]">
          
          {/* Step 1: Project Category */}
          <div className="space-y-3">
            <label className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">
                1
              </span>
              <span>Select Architecture Core</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {CATEGORIES.map((cat) => {
                const isSelected = selectedCategory === cat.id;

                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      playClick();
                      setSelectedCategory(cat.id);
                    }}
                    onMouseEnter={playHover}
                    className={`p-3.5 rounded-xl border text-left transition-all duration-200 focus:outline-none ${
                      isSelected
                        ? "bg-emerald-500/15 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "bg-black/30 border-white/10 hover:border-white/25 hover:bg-black/50"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-heading font-bold text-sm text-white">
                        {cat.name}
                      </span>
                      {isSelected && <Check className="w-4 h-4 text-emerald-400" />}
                    </div>
                    <p className="font-sans text-[11px] text-slate-400 leading-snug">
                      {cat.description}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Complexity & Scale Slider */}
          <div className="space-y-3 pt-3 border-t border-white/5">
            <div className="flex items-center justify-between">
              <label className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-[10px]">
                  2
                </span>
                <span>Scale & Architectural Depth</span>
              </label>
              <span className="font-mono text-xs font-bold text-cyan-400">
                {complexityConfig.label}
              </span>
            </div>

            <input
              type="range"
              min="1"
              max="3"
              step="1"
              value={complexity}
              onChange={(e) => {
                playClick();
                setComplexity(parseInt(e.target.value));
              }}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400 slider-thumb focus:outline-none"
            />

            <div className="flex justify-between font-mono text-[11px] text-slate-400 px-1">
              <span>MVP Prototype</span>
              <span>Production Growth</span>
              <span>Enterprise Scale</span>
            </div>
          </div>

          {/* Step 3: Specialized Modules & Addons */}
          <div className="space-y-3 pt-3 border-t border-white/5">
            <label className="font-mono text-xs text-slate-300 font-bold uppercase tracking-wider flex items-center gap-2">
              <span className="w-5 h-5 rounded-full bg-violet-500/20 text-violet-400 flex items-center justify-center text-[10px]">
                3
              </span>
              <span>Specialized Micro-Modules & Add-ons</span>
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {ADDONS.map((addon) => {
                const isChecked = selectedAddons.includes(addon.id);

                return (
                  <button
                    key={addon.id}
                    type="button"
                    onClick={() => toggleAddon(addon.id)}
                    onMouseEnter={playHover}
                    className={`p-3 rounded-xl border text-left transition-all duration-200 flex items-start gap-2.5 focus:outline-none ${
                      isChecked
                        ? "bg-violet-500/15 border-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.15)]"
                        : "bg-black/30 border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border transition-all ${
                        isChecked
                          ? "bg-violet-500 border-violet-400 text-black"
                          : "border-slate-500 bg-transparent"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="font-heading font-semibold text-xs text-white block">
                        {addon.name}
                      </span>
                      <span className="font-sans text-[10px] text-slate-400 block truncate">
                        {addon.description}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

        </div>

        {/* Right Live Estimate Summary Panel (5 cols) */}
        <div className="lg:col-span-5 rounded-2xl bg-gradient-to-b from-[#101522] to-[#0d111a] border border-emerald-500/30 p-6 sm:p-7 space-y-6 shadow-[0_10px_35px_rgba(0,0,0,0.6)]">
          
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-xs font-bold text-emerald-400 uppercase tracking-wide flex items-center gap-1.5">
              <Sparkles className="w-4 h-4" />
              Live Scope Calculation
            </span>
            <span className="font-mono text-[10px] text-slate-400 px-2 py-0.5 rounded bg-white/5 border border-white/10">
              Zero Tech Debt
            </span>
          </div>

          {/* Big Numbers */}
          <div className="space-y-4">
            <div>
              <span className="font-mono text-xs text-slate-400 block uppercase">
                Estimated Investment Range
              </span>
              <div className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight mt-1 text-emerald-300">
                {minPriceFormatted} — {maxPriceFormatted}
              </div>
              <span className="font-mono text-xs text-slate-400 block mt-0.5">
                (Approx. ${usdMin.toLocaleString()} — ${usdMax.toLocaleString()} USD)
              </span>
            </div>

            <div className="p-3.5 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-cyan-400" />
                <span className="font-mono text-xs text-slate-300">Delivery Sprint:</span>
              </div>
              <span className="font-mono text-sm font-bold text-cyan-400">
                ~{rawWeeks} Weeks
              </span>
            </div>
          </div>

          {/* Included Guarantees */}
          <div className="space-y-2 border-t border-white/5 pt-4">
            <span className="font-mono text-[11px] text-slate-400 uppercase font-semibold block">
              What Is Always Included:
            </span>
            <ul className="space-y-1.5 text-xs font-sans text-slate-300">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>100% Full Source Code & IP Ownership</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Strict TypeScript & Architecture ADRs</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Production CI/CD & Cloud Edge Deployment</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>30-Day Post-Launch Critical SLA Support</span>
              </li>
            </ul>
          </div>

          {/* Lock In Scope Action Button */}
          <button
            type="button"
            onClick={handleLockInScope}
            onMouseEnter={playHover}
            className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 text-black font-mono font-bold text-sm tracking-tight shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] focus:outline-none"
          >
            <span>Lock In Scope & Inquire</span>
            <Send className="w-4 h-4" />
          </button>

        </div>

      </div>
    </section>
  );
}
