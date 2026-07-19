"use client";

import React, { useEffect, useRef } from 'react';
import { Bulb, Envelope, Magnifier, CircleCheck } from '@gravity-ui/icons';

export default function Features() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent, card: HTMLDivElement) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    const currentCards = cardRefs.current;
    const cleanupFns: (() => void)[] = [];

    currentCards.forEach(card => {
      if (card) {
        const listener = (e: MouseEvent) => handleMouseMove(e, card);
        card.addEventListener('mousemove', listener);
        cleanupFns.push(() => card.removeEventListener('mousemove', listener));
      }
    });

    return () => {
      cleanupFns.forEach(fn => fn());
    };
  }, []);

  return (
    <section className="py-16 px-10">
      <div className="max-w-container-max mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-[30px] leading-[38px] tracking-[-0.02em] font-semibold mb-3">Unfair Advantage for Job Seekers</h2>
          <p className="text-[#c7c4d7] text-[18px] leading-[28px] tracking-[0em] font-normal max-w-2xl mx-auto">Leverage state-of-the-art machine learning models to outpace the competition and land interviews faster.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          <div ref={(el) => { if (el) cardRefs.current[0] = el; }} className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-xl hover:translate-y-[-4px] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#c0c1ff]/10 flex items-center justify-center mb-6 group-hover:bg-[#c0c1ff] group-hover:text-[#1000a9] transition-colors">
              <Bulb className="w-6 h-6" />
            </div>
            <h3 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold mb-3">AI Match Engine</h3>
            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] mb-6">Our neural network calculates a 0-100 score based on your unique skill set vs. job requirements.</p>
            <div className="h-1 w-0 bg-[#c0c1ff] group-hover:w-full transition-all duration-500"></div>
          </div>
          <div ref={(el) => { if (el) cardRefs.current[1] = el; }} className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-xl hover:translate-y-[-4px] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#4edea3]/10 flex items-center justify-center mb-6 group-hover:bg-[#4edea3] group-hover:text-[#003824] transition-colors">
              <Envelope className="w-6 h-6" />
            </div>
            <h3 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold mb-3">AI Email Generator</h3>
            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] mb-6">Generate high-converting networking emails and follow-ups tailored to each specific recruiter.</p>
            <div className="h-1 w-0 bg-[#4edea3] group-hover:w-full transition-all duration-500"></div>
          </div>
          <div ref={(el) => { if (el) cardRefs.current[2] = el; }} className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-xl hover:translate-y-[-4px] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#ffb783]/10 flex items-center justify-center mb-6 group-hover:bg-[#ffb783] group-hover:text-[#4f2500] transition-colors">
              <Magnifier className="w-6 h-6" />
            </div>
            <h3 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold mb-3">AI Discovery</h3>
            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] mb-6">Automatically find "hidden" job gems from company career pages before they hit major boards.</p>
            <div className="h-1 w-0 bg-[#ffb783] group-hover:w-full transition-all duration-500"></div>
          </div>
          <div ref={(el) => { if (el) cardRefs.current[3] = el; }} className="bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 p-6 rounded-xl hover:translate-y-[-4px] transition-all group">
            <div className="w-12 h-12 rounded-lg bg-[#2d3449] flex items-center justify-center mb-6 group-hover:bg-[#dae2fd] group-hover:text-[#0b1326] transition-colors">
              <CircleCheck className="w-6 h-6" />
            </div>
            <h3 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold mb-3">Smart Tracker</h3>
            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] mb-6">Visualize your entire funnel with a Kanban-style board designed for heavy application flows.</p>
            <div className="h-1 w-0 bg-[#dae2fd] group-hover:w-full transition-all duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
