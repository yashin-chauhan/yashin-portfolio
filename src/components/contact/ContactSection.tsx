"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useSoundFX } from "@/hooks/useSoundFX";
import {
  Mail,
  Send,
  Github,
  Linkedin,
  Sparkles,
  CheckCircle2,
  Copy,
  Check,
  MessageSquare,
  Building,
  Briefcase,
  Terminal,
} from "lucide-react";

export default function ContactSection() {
  const [inquiryType, setInquiryType] = useState<"recruiter" | "client" | "consulting">("recruiter");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const { playHover, playClick, playSuccess, playError } = useSoundFX();

  const handleCopyEmail = () => {
    playSuccess();
    navigator.clipboard.writeText("yashin123786@gmail.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      playError();
      return;
    }

    setIsSubmitting(true);
    playClick();

    // Simulated instant transmission / dispatch
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
    playSuccess();
  };

  return (
    <section id="contact" className="relative scroll-mt-28 space-y-8">
      {/* Header */}
      <div className="space-y-2 border-b border-white/5 pb-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-mono text-xs font-semibold">
          <Mail className="w-3.5 h-3.5" />
          <span>Direct Channel & Transmission</span>
        </div>

        <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
          Initiate Engineering Collaboration
        </h2>

        <p className="font-sans text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
          Whether you are seeking a Staff/Senior Product Engineer for high-scale enterprise systems or need an end-to-end SaaS platform built from scratch, let&apos;s connect.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left: Contact Info & Direct Links (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 rounded-2xl bg-[#0d111a]/85 backdrop-blur-xl border border-white/10 space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            
            <div className="space-y-2">
              <h3 className="font-heading font-bold text-lg text-white">
                Direct Contact Channels
              </h3>
              <p className="font-sans text-xs text-slate-400">
                Guaranteed response within 12 hours. Available for immediate technical interviews and strategy consultations.
              </p>
            </div>

            {/* Direct Email Card */}
            <div className="p-4 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3 min-w-0">
                <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <span className="font-mono text-[10px] text-slate-400 uppercase block">Email Address</span>
                  <span className="font-mono text-xs sm:text-sm text-white font-medium truncate block">
                    yashin123786@gmail.com
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handleCopyEmail}
                onMouseEnter={playHover}
                title="Copy email to clipboard"
                className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-emerald-400 transition-colors shrink-0 focus:outline-none"
              >
                {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Social Links */}
            <div className="space-y-2">
              <span className="font-mono text-[11px] text-slate-400 uppercase font-semibold block">
                Professional Profiles
              </span>
              <div className="grid grid-cols-2 gap-2.5">
                <a
                  href="https://github.com/yashin-chauhan"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="p-3 rounded-xl bg-black/30 border border-white/10 hover:border-emerald-500/40 hover:bg-black/50 text-slate-200 hover:text-emerald-300 font-mono text-xs flex items-center gap-2 transition-all duration-200"
                >
                  <Github className="w-4 h-4 text-emerald-400" />
                  <span>GitHub (22+)</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/yashin-chauhan/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={playHover}
                  onClick={playClick}
                  className="p-3 rounded-xl bg-black/30 border border-white/10 hover:border-cyan-500/40 hover:bg-black/50 text-slate-200 hover:text-cyan-300 font-mono text-xs flex items-center gap-2 transition-all duration-200"
                >
                  <Linkedin className="w-4 h-4 text-cyan-400" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Location & Timezone badge */}
            <div className="p-3.5 rounded-xl bg-gradient-to-r from-emerald-950/20 to-cyan-950/20 border border-white/5 font-mono text-xs text-slate-400 space-y-1">
              <div className="flex items-center justify-between text-slate-300 font-medium">
                <span>Location:</span>
                <span className="text-white">New Delhi, India (IST)</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Working Overlap:</span>
                <span className="text-emerald-400">US East/West & EU Friendly</span>
              </div>
            </div>

          </div>
        </div>

        {/* Right: Transmission Form (7 cols) */}
        <div className="lg:col-span-7">
          <div className="p-6 sm:p-7 rounded-2xl bg-[#0d111a]/85 backdrop-blur-xl border border-white/10 space-y-6 shadow-[0_8px_30px_rgba(0,0,0,0.5)]">
            
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center space-y-4"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-[0_0_25px_rgba(16,185,129,0.3)]">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading font-extrabold text-2xl text-white">
                  Transmission Received!
                </h3>
                <p className="font-sans text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out, {name}. Yashin has received your inquiry and will respond within 12 hours.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    playClick();
                    setIsSubmitted(false);
                    setMessage("");
                  }}
                  className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/15 text-slate-200 font-mono text-xs transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Inquiry Type Pill Switcher */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-slate-400 uppercase font-semibold block">
                    Inquiry Perspective
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { id: "recruiter", label: "Full-Time Role", icon: Building },
                      { id: "client", label: "Client SaaS Build", icon: Sparkles },
                      { id: "consulting", label: "Architecture Audit", icon: Briefcase },
                    ].map((item) => {
                      const Icon = item.icon;
                      const isSelected = inquiryType === item.id;

                      return (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => {
                            playClick();
                            setInquiryType(item.id as "recruiter" | "client" | "consulting");
                          }}
                          onMouseEnter={playHover}
                          className={`p-2.5 rounded-xl border text-center transition-all duration-200 flex flex-col items-center gap-1 focus:outline-none ${
                            isSelected
                              ? "bg-emerald-500/15 border-emerald-500/40 text-white shadow-[0_0_12px_rgba(16,185,129,0.2)]"
                              : "bg-black/30 border-white/10 text-slate-400 hover:text-slate-200"
                          }`}
                        >
                          <Icon className={`w-4 h-4 ${isSelected ? "text-emerald-400" : ""}`} />
                          <span className="font-mono text-[11px]">{item.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-400 uppercase block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Alex Miller"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-400 focus:bg-black/60 text-slate-100 placeholder-slate-600 font-sans text-sm focus:outline-none transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="font-mono text-xs text-slate-400 uppercase block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-400 focus:bg-black/60 text-slate-100 placeholder-slate-600 font-sans text-sm focus:outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="font-mono text-xs text-slate-400 uppercase block">
                    Message / Project Scope
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell me about the role or project requirements..."
                    className="w-full p-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-emerald-400 focus:bg-black/60 text-slate-100 placeholder-slate-600 font-sans text-sm focus:outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  onMouseEnter={playHover}
                  className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-400 hover:from-emerald-400 hover:to-cyan-400 text-black font-mono font-bold text-sm tracking-tight shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98] disabled:opacity-50 focus:outline-none"
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <>
                      <span>Transmit Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
