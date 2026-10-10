"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { BentoGridSection } from "@/components/bento-grid-section";
import { ProjectsShowcase } from "@/components/projects-showcase";
import { WorkflowProcess } from "@/components/workflow-process";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { ChatModal } from "@/components/ai-agent/chat-modal";

export default function Home() {
  const [isAgentOpen, setIsAgentOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#08090b] text-zinc-100 relative selection:bg-cyan-500 selection:text-black">
      {/* Background Ambience & Grids */}
      <div className="fixed inset-0 codium-grid-bg pointer-events-none opacity-40 z-0" />
      <div className="fixed inset-0 codium-dots-bg pointer-events-none opacity-30 z-0" />

      {/* Main Content Layer */}
      <div className="relative z-10">
        <Navbar onOpenAgent={() => setIsAgentOpen(true)} />

        <main>
          <HeroSection onOpenAgent={() => setIsAgentOpen(true)} />
          <BentoGridSection />
          <ProjectsShowcase />
          <WorkflowProcess />
          <ContactSection />
        </main>

        <Footer />
      </div>

      {/* Embedded Autonomous AI Agent */}
      <ChatModal
        isOpen={isAgentOpen}
        onOpen={() => setIsAgentOpen(true)}
        onClose={() => setIsAgentOpen(false)}
      />
    </div>
  );
}
