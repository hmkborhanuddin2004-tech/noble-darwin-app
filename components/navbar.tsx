"use client";

import React, { useState, useEffect } from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import { Sparkles, Terminal, ArrowUpRight, MessageSquareCode } from "lucide-react";

interface NavbarProps {
  onOpenAgent: () => void;
}

export function Navbar({ onOpenAgent }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl flex items-center justify-between px-5 py-3 rounded-2xl transition-all duration-300 ${
          scrolled
            ? "bg-zinc-950/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-950/20"
            : "bg-transparent border border-transparent"
        }`}
      >
        {/* Brand / Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-violet-600 flex items-center justify-center text-white shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm tracking-wide group-hover:text-cyan-400 transition-colors">
              {PORTFOLIO_CONFIG.personal.name}
            </span>
            <span className="text-[10px] text-zinc-400 font-mono tracking-tight">
              PORTFOLIO // OS
            </span>
          </div>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-6 px-4 py-1.5 rounded-full bg-zinc-900/60 border border-white/5 backdrop-blur-md text-xs font-medium text-zinc-300">
          <a href="#services" className="hover:text-cyan-400 transition-colors">
            Services
          </a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">
            Tech Stack
          </a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">
            Case Studies
          </a>
          <a href="#workflow" className="hover:text-cyan-400 transition-colors">
            Workflow
          </a>
          <a href="#contact" className="hover:text-cyan-400 transition-colors">
            Contact
          </a>
        </div>

        {/* Right Action: Status Pill & AI Agent Trigger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-medium text-[11px] hidden lg:inline">Available for Work</span>
          </div>

          <button
            onClick={onOpenAgent}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/20 via-violet-500/20 to-cyan-500/20 hover:from-cyan-500/30 hover:to-violet-500/30 border border-cyan-500/30 text-cyan-300 text-xs font-semibold shadow-lg shadow-cyan-500/10 hover:shadow-cyan-500/20 transition-all cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin" style={{ animationDuration: '6s' }} />
            <span>AI Assistant</span>
          </button>
        </div>
      </nav>
    </header>
  );
}
