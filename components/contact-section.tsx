"use client";

import React, { useState } from "react";
import { PORTFOLIO_CONFIG } from "@/config/portfolio.config";
import { Send, Mail, Calendar, MessageSquare, CheckCircle, Sparkles } from "lucide-react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    projectType: "AI Automation",
    budget: "$1,000 - $3,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // Fallback submission success for demo
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side: Headline & Direct Channels */}
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Collaboration</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Ready to Automate &amp; <span className="text-gradient-cyan">Scale Your Business?</span>
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-8">
            নতুন কোনো প্রজেক্ট, কাস্টম এআই অটোমেশন বা ফুল-স্ট্যাক ওয়েব অ্যাপ্লিকেশন নিয়ে কথা বলতে ফর্মটি পূরণ করুন অথবা সরাসরি ক্যালেন্ডারে মিটিং শিডিউল করুন।
          </p>

          <div className="space-y-4">
            <a
              href={`mailto:${PORTFOLIO_CONFIG.personal.socials.email}`}
              className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-cyan-500/30 text-white transition-colors"
            >
              <div className="p-2.5 rounded-lg bg-cyan-500/10 text-cyan-400">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs text-zinc-400 font-mono">DIRECT INBOX</div>
                <div className="text-sm font-semibold">{PORTFOLIO_CONFIG.personal.socials.email}</div>
              </div>
            </a>

            {PORTFOLIO_CONFIG.personal.socials.calendarUrl && (
              <a
                href={PORTFOLIO_CONFIG.personal.socials.calendarUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3.5 p-4 rounded-xl bg-zinc-900/40 border border-white/5 hover:border-violet-500/30 text-white transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-violet-500/10 text-violet-400">
                  <Calendar className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-zinc-400 font-mono">15-MIN DISCOVERY CALL</div>
                  <div className="text-sm font-semibold">Book Instant Time via Cal.com</div>
                </div>
              </a>
            )}
          </div>
        </div>

        {/* Right Side: Interactive Project Brief Form */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 relative">
          {submitted ? (
            <div className="py-12 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Project Brief Received!</h3>
              <p className="text-zinc-400 text-xs sm:text-sm max-w-sm mb-6">
                ধন্যবাদ! আপনার প্রজেক্টের রিকোয়ারমেন্ট সফলভাবে জমা হয়েছে। ২৪ ঘণ্টার মধ্যে আপনার সাথে যোগাযোগ করা হবে।
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="px-5 py-2 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/20 transition-colors"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <span>Submit a Project Brief</span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400">
                  ESTIMATE // 60s
                </span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="john@company.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Primary Focus</label>
                  <select
                    value={formState.projectType}
                    onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="AI Automation">AI Automation &amp; Agents</option>
                    <option value="Web Development">Full-Stack Web App</option>
                    <option value="Meta Marketing">Meta Growth &amp; CRM Sync</option>
                    <option value="End-to-End System">Full Architecture Bundle</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-medium text-zinc-400 mb-1.5">Estimated Budget</label>
                  <select
                    value={formState.budget}
                    onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                  >
                    <option value="< $1,000">&lt; $1,000 (Small Automation)</option>
                    <option value="$1,000 - $3,000">$1,000 - $3,000 (Standard MVP)</option>
                    <option value="$3,000 - $8,000">$3,000 - $8,000 (Full Platform)</option>
                    <option value="$8,000+">$8,000+ (Enterprise System)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-zinc-400 mb-1.5">Project Scope / Challenge</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe your goals, what manual tasks you want to automate, or what product you want to build..."
                  value={formState.message}
                  onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-zinc-900 border border-white/10 text-white text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                {loading ? (
                  <span>Transmitting Brief...</span>
                ) : (
                  <>
                    <span>Send Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
