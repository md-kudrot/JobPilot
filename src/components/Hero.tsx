"use client";

import React, { useEffect, useRef } from 'react';
import { Sparkles, Database } from '@gravity-ui/icons';

export default function Hero() {
  const glassPanelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const card = glassPanelRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-[65vh] flex items-center px-10 overflow-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }
        .float-animation {
          animation: float 6s ease-in-out infinite;
        }
      `}} />
      <div className="max-w-container-max mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10 w-full">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-[#c0c1ff]/10 border border-[#c0c1ff]/20 rounded-full">
            <Sparkles className="text-[#c0c1ff] w-4 h-4" />
            <span className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c0c1ff]">AI-Powered Career Intelligence</span>
          </div>
          <h1 className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold leading-tight tracking-tight">
            Stop Applying Blindly. <br />
            <span className="bg-gradient-to-r from-[#c0c1ff] to-[#4edea3] bg-clip-text text-transparent">Let AI Find Your Next Opportunity.</span>
          </h1>
          <p className="text-[18px] leading-[28px] tracking-[0em] font-normal text-[#c7c4d7] max-w-xl">
            JobPilot AI transforms your job search by analyzing millions of listings to find the perfect cultural and skill matches. Track applications, generate personalized emails, and double your response rate.
          </p>
          <div className="flex flex-wrap gap-6 pt-2">
            <button className="px-16 py-6 bg-[#c0c1ff] text-[#0d0096] rounded-xl font-bold text-[20px] leading-[28px] tracking-[-0.01em] hover:shadow-lg hover:shadow-[#c0c1ff]/20 transition-all active:scale-95">Get Started</button>
            <button className="px-16 py-6 border border-[#ffffff]/10 bg-[#ffffff]/5 rounded-xl font-bold text-[20px] leading-[28px] tracking-[-0.01em] hover:bg-[#ffffff]/10 transition-all">Explore Jobs</button>
          </div>
        </div>
        <div className="hidden md:block relative">
          <div ref={glassPanelRef} className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-xl shadow-[0_0_40px_-10px_rgba(192,193,255,0.15)] float-animation relative">
            <div className="flex justify-between items-center mb-6 border-b border-[#ffffff]/5 pb-3">
              <div className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold">Active Dashboard</div>
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-[#ffb4ab]"></div>
                <div className="w-2 h-2 rounded-full bg-[#ffb783]"></div>
                <div className="w-2 h-2 rounded-full bg-[#4edea3]"></div>
              </div>
            </div>
            <div className="space-y-3">
              {/* Job Card Mockup */}
              <div className="p-3 bg-[#ffffff]/5 border border-[#ffffff]/5 rounded-lg flex gap-6 items-center group hover:bg-[#ffffff]/10 transition-all">
                <div className="w-12 h-12 bg-[#171f33] rounded-lg flex items-center justify-center">
                  <Database className="text-[#4edea3] w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">Senior Data Engineer</div>
                  <div className="text-[14px] leading-[20px] tracking-[0em] font-normal">TechCorp Systems • Remote</div>
                </div>
                <div className="text-right">
                  <div className="text-[#4edea3] font-bold text-[20px] leading-[28px] tracking-[-0.01em]">98%</div>
                  <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#4edea3]/70">MATCH</div>
                </div>
              </div>
              {/* Stats Mockup */}
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3 bg-[#222a3d] rounded-lg">
                  <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">Interviews</div>
                  <div className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold text-[#c0c1ff]">12</div>
                </div>
                <div className="p-3 bg-[#222a3d] rounded-lg">
                  <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">Win Rate</div>
                  <div className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold text-[#4edea3]">64%</div>
                </div>
              </div>
            </div>
            {/* Floating "Sparkle" Element */}
            <div className="absolute -top-6 -right-6 p-6 bg-[#00a572] text-[#00311f] rounded-xl shadow-xl flex items-center gap-3 border border-[#4edea3]/30">
              <Sparkles className="w-6 h-6" />
              <span className="font-bold text-[12px] leading-[16px] tracking-[0.02em] font-medium">AI Optimization Complete</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
