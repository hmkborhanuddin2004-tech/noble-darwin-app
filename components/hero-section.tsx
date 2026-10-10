"use client";

import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import { Sparkles, ArrowRight, Bot, Code2, TrendingUp, ShieldCheck, Zap } from "lucide-react";

interface HeroSectionProps {
  onOpenAgent: () => void;
}

export function HeroSection({ onOpenAgent }: HeroSectionProps) {
  return (
    <section className="relative pt-36 pb-20 px-4 md:px-8 max-w-6xl mx-auto flex flex-col items-center text-center overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="ambient-glow-top" />

      {/* Status Pill Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900/90 border border-white/10 backdrop-blur-md mb-8 shadow-inner">
        <span className="flex h-2 w-2 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        <span className="text-xs text-zinc-300 font-medium tracking-wide">
          {PORTFOLIO_CONFIG.personal.status}
        </span>
      </div>

      {/* Main Bold Headline */}
      <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white max-w-4xl leading-[1.15] mb-6">
        Architecting <span className="text-gradient-cyan">Autonomous AI</span> &amp; Modern{" "}
        <span className="text-gradient-violet">Digital Systems</span>
      </h1>

      {/* Subtitle / Value Proposition */}
      <p className="text-zinc-400 text-base sm:text-xl max-w-2xl leading-relaxed mb-10 font-normal">
        {PORTFOLIO_CONFIG.personal.bio}
      </p>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16">
        <a
          href="#projects"
          className="w-full sm:w-auto flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-zinc-950 font-semibold text-sm hover:bg-zinc-200 transition-all shadow-xl shadow-white/5 group"
        >
          <span>Explore Case Studies</span>
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </a>

        <button
          onClick={onOpenAgent}
          className="w-full sm:w-auto flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-zinc-900/80 hover:bg-zinc-800/90 text-cyan-300 border border-cyan-500/30 font-semibold text-sm backdrop-blur-md shadow-lg shadow-cyan-950/30 transition-all cursor-pointer group"
        >
          <Bot className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform" />
          <span>Talk with Live AI Assistant</span>
          <Sparkles className="w-3.5 h-3.5 text-cyan-400/80" />
        </button>
      </div>

      {/* Three Pillars Mini Ticker */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 w-full max-w-3xl mb-14">
        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm text-left">
          <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">AI Automation</div>
            <div className="text-[11px] text-zinc-400">n8n • Make • Custom LLMs</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm text-left">
          <div className="p-2 rounded-lg bg-violet-500/10 text-violet-400">
            <Code2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Full-Stack Web</div>
            <div className="text-[11px] text-zinc-400">Next.js 15 • React • APIs</div>
          </div>
        </div>

        <div className="flex items-center gap-3 p-3.5 rounded-xl bg-zinc-900/40 border border-white/5 backdrop-blur-sm text-left">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-white">Meta Growth Funnels</div>
            <div className="text-[11px] text-zinc-400">Instant Lead CRM Sync</div>
          </div>
        </div>
      </div>

      {/* Dynamic Stats Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl pt-6 border-t border-white/5">
        {PORTFOLIO_CONFIG.personal.stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col items-center p-3">
            <span className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-1 font-mono">
              {stat.value}
            </span>
            <span className="text-xs text-zinc-400 font-medium">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
