"use client";

import React, { useState } from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import {
  Bot,
  Code2,
  TrendingUp,
  Cpu,
  Layers,
  ArrowUpRight,
  CheckCircle2,
  Workflow,
  Sparkles,
  Zap,
} from "lucide-react";

export function BentoGridSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="services" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
          <Layers className="w-3.5 h-3.5" />
          <span>Core Capabilities &amp; Architecture</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Engineered for <span className="text-gradient-cyan">Maximum Impact</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          আমার ৩টি প্রধান স্তম্ভ—যা ব্যবসায়িক জটিল কাজগুলোকে স্বয়ংক্রিয় করে এবং উচ্চমানের ডিজিটাল অভিজ্ঞতা তৈরি করে।
        </p>
      </div>

      {/* Bento Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* CARD 1: Large Bento Card (AI Automations) */}
        <div className="md:col-span-2 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/15 transition-all" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                <Bot className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-semibold">
                HIGHEST ROI
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Autonomous AI Agents &amp; Automations
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              n8n, Make.com এবং Claude/Gemini API দিয়ে তৈরি বুদ্ধিমান স্বয়ংক্রিয় সিস্টেম—যা ইনবাউন্ড লিড ফিল্টার, ডেটা পার্সিং এবং কাস্টমার ইন্টারঅ্যাকশন স্বয়ংক্রিয়ভাবে সম্পন্ন করে।
            </p>

            {/* Simulated Live Workflow Flowchart */}
            <div className="p-4 rounded-xl bg-zinc-950/70 border border-white/5 mb-6 font-mono text-xs">
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Workflow className="w-3.5 h-3.5 text-cyan-400" />
                <span>Live Autonomous Pipeline Flow</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 items-center text-center">
                <div className="p-2.5 rounded-lg bg-zinc-900 border border-white/10 text-zinc-300">
                  <div className="text-[10px] text-cyan-400 font-bold">EVENT</div>
                  <div className="text-[11px]">Webhook Trigger</div>
                </div>
                <div className="hidden sm:block text-zinc-600 font-bold">→</div>
                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-300">
                  <div className="text-[10px] text-cyan-400 font-bold">REASONING</div>
                  <div className="text-[11px]">AI Model Process</div>
                </div>
                <div className="hidden sm:block text-zinc-600 font-bold">→</div>
                <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-300">
                  <div className="text-[10px] text-emerald-400 font-bold">ACTION</div>
                  <div className="text-[11px]">CRM &amp; Alert Push</div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-4 border-t border-white/5">
            {[
              "Multi-Agent LangChain Workflows",
              "Zero-Latency Lead Qualification",
              "CRM, Telegram & WhatsApp Auto-Sync",
              "Document & Structured Data Parsing",
            ].map((cap, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 2: Full-Stack Web Development */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-violet-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-violet-500/10 border border-violet-500/20 text-violet-400">
                <Code2 className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20 font-semibold">
                NEXT.JS 15
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              Modern Web &amp; App Development
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              পিক্সেল-পারফেক্ট ডিজাইন, ডার্ক-থিম অ্যাম্বিয়েন্স এবং ফ্লুইড অ্যানিমেশনসহ হাই-কনভার্টিং ওয়েব প্ল্যাটফর্ম ও ড্যাশবোর্ড।
            </p>

            {/* Performance Metric Badge */}
            <div className="p-3.5 rounded-xl bg-zinc-950/80 border border-white/5 mb-6 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Zap className="w-4 h-4 text-emerald-400" />
                <span className="text-xs text-zinc-300 font-medium">Lighthouse Score</span>
              </div>
              <span className="text-sm font-mono font-bold text-emerald-400">100 / 100</span>
            </div>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/5">
            {[
              "React 19 & Next.js Server Components",
              "Tailwind CSS & Fluid Framer Motion",
              "Production Database Schemas & APIs",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-violet-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 3: Meta Marketing & Funnel Automation */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between group">
          <div className="absolute top-0 right-0 w-48 h-48 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                <TrendingUp className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-semibold">
                GROWTH ENGINE
              </span>
            </div>

            <h3 className="text-xl font-bold text-white mb-2">
              AI-Powered Meta Growth
            </h3>
            <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-6">
              মেটা লিড অ্যাড থেকে স্বয়ংক্রিয়ভাবে লিড সংগ্রহ করে এআই দিয়ে তৎক্ষণাৎ কন্টাক্ট করা এবং সিআরএম-এ রিয়েল-টাইম পুশ করা।
            </p>
          </div>

          <div className="space-y-2 pt-4 border-t border-white/5">
            {[
              "Meta Graph Webhooks & CAPI Setup",
              "Instant AI Follow-up Sequences",
              "CRM & Sheets Automated Synchronization",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-zinc-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CARD 4: Tech Stack Matrix (Spans 2 columns) */}
        <div id="skills" className="md:col-span-2 glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2.5">
              <Cpu className="w-5 h-5 text-cyan-400" />
              <h3 className="text-lg sm:text-xl font-bold text-white">
                Technology Matrix &amp; Toolchain
              </h3>
            </div>
            <span className="text-xs text-zinc-500 font-mono hidden sm:inline">PROD-READY STACK</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {PORTFOLIO_CONFIG.skills.map((skillGroup, idx) => (
              <div key={idx} className="space-y-3">
                <div className="text-xs font-semibold text-zinc-400 uppercase tracking-wider font-mono">
                  {skillGroup.category}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {skillGroup.items.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/5 text-[11px] font-medium text-zinc-300 hover:text-cyan-400 hover:border-cyan-500/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
