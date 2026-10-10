"use client";

import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import { Compass, CheckCircle } from "lucide-react";

export function WorkflowProcess() {
  return (
    <section id="workflow" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-4">
          <Compass className="w-3.5 h-3.5" />
          <span>Execution Roadmap</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          How Ideas Turn into <span className="text-gradient-cyan">Autonomous Systems</span>
        </h2>
        <p className="text-zinc-400 text-sm sm:text-base max-w-xl">
          প্রতিটি ক্লায়েন্ট প্রজেক্টকে একটি স্পষ্ট, পরিচ্ছন্ন এবং আন্তর্জাতিক মানের কাঠামোর মাধ্যমে বাস্তবায়ন করা হয়।
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {PORTFOLIO_CONFIG.workflow.map((item, idx) => (
          <div
            key={idx}
            className="glass-card rounded-2xl p-6 sm:p-7 relative flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-2xl font-black text-cyan-500/60 group-hover:text-cyan-400 transition-colors">
                  {item.step}
                </span>
                <span className="w-2 h-2 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex items-center gap-2 text-xs text-zinc-500 font-mono">
              <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>Phase {idx + 1} Deliverables</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
