"use client";

import React from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import { Github, Linkedin, Twitter, Mail, Send, Terminal } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 px-4 md:px-8 max-w-6xl mx-auto text-zinc-500 text-xs">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-cyan-400">
            <Terminal className="w-4 h-4" />
          </div>
          <span className="font-semibold text-zinc-300">
            {PORTFOLIO_CONFIG.personal.name} // Portfolio Architecture
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          <a
            href={PORTFOLIO_CONFIG.personal.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_CONFIG.personal.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={PORTFOLIO_CONFIG.personal.socials.twitter}
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Twitter"
          >
            <Twitter className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PORTFOLIO_CONFIG.personal.socials.email}`}
            className="p-2 rounded-lg bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-white/5 text-[11px] text-zinc-500">
        <div>
          © {new Date().getFullYear()} {PORTFOLIO_CONFIG.personal.name}. All rights reserved.
        </div>
        <div className="flex items-center gap-4 font-mono">
          <span>LATENCY: 12ms</span>
          <span>•</span>
          <span className="text-emerald-500">SYSTEM STATUS: OPTIMAL</span>
        </div>
      </div>
    </footer>
  );
}
