"use client";

import React, { useState } from "react";
import { PORTFOLIO_CONFIG, Project } from "@/config/portfolio.config";
import { FolderGit2, ArrowUpRight, Github, ExternalLink, Sparkles, Check } from "lucide-react";

export function ProjectsShowcase() {
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "AI Automation", "Web Development", "Meta Marketing"];

  const filteredProjects =
    filter === "All"
      ? PORTFOLIO_CONFIG.projects
      : PORTFOLIO_CONFIG.projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Proof of Work // Case Studies</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Featured <span className="text-gradient-violet">Case Studies</span>
          </h2>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 p-1.5 rounded-xl bg-zinc-900/60 border border-white/5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                filter === cat
                  ? "bg-white text-zinc-950 font-semibold shadow-md"
                  : "text-zinc-400 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group relative overflow-hidden"
          >
            <div>
              {/* Category & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-zinc-850 border border-white/10 text-cyan-300 font-semibold">
                  {project.category}
                </span>
                <span className="text-[11px] font-mono text-emerald-400 flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>Verified Impact</span>
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed mb-5">
                {project.tagline}
              </p>

              {/* Problem / Solution / Impact Accordion */}
              <div className="space-y-3 mb-6 p-4 rounded-xl bg-zinc-950/70 border border-white/5 text-xs">
                <div>
                  <span className="text-zinc-500 font-mono text-[10px] uppercase font-bold block mb-0.5">
                    The Problem
                  </span>
                  <p className="text-zinc-300">{project.problem}</p>
                </div>
                <div>
                  <span className="text-cyan-500 font-mono text-[10px] uppercase font-bold block mb-0.5">
                    Engineered Solution
                  </span>
                  <p className="text-zinc-300">{project.solution}</p>
                </div>
                <div className="pt-2 border-t border-white/5">
                  <span className="text-emerald-400 font-mono text-[10px] uppercase font-bold block mb-0.5">
                    Measurable Result
                  </span>
                  <p className="text-emerald-300 font-semibold">{project.metrics}</p>
                </div>
              </div>
            </div>

            <div>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md bg-zinc-900 border border-white/5 text-[10px] font-mono text-zinc-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg bg-white/10 hover:bg-white/20 text-white text-xs font-semibold transition-colors"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-zinc-300 border border-white/10 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
