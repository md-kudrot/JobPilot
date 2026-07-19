"use client";

import React, { useEffect, useRef } from 'react';

export default function Stats() {
  const counterRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const counter = entry.target as HTMLDivElement;
          const target = parseInt(counter.getAttribute('data-target') || '0', 10);
          let current = 0;
          const increment = target / 50;
          
          const updateCounter = () => {
            if (current < target) {
              current += increment;
              counter.innerText = Math.ceil(current).toLocaleString();
              setTimeout(updateCounter, 20);
            } else {
              counter.innerText = target.toLocaleString() + (target < 100 ? "" : "+");
            }
          };
          
          updateCounter();
          counterObserver.unobserve(counter);
        }
      });
    }, observerOptions);

    const currentCounters = counterRefs.current;
    currentCounters.forEach(counter => {
      if (counter) counterObserver.observe(counter);
    });

    return () => {
      counterObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-16 px-10 bg-[#060e20] relative">
      <div className="max-w-container-max mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="space-y-1">
            <div ref={(el) => { if (el) counterRefs.current[0] = el; }} className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold text-[#c0c1ff] counter" data-target="250000">0</div>
            <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">Applications Tracked</div>
          </div>
          <div className="space-y-1">
            <div ref={(el) => { if (el) counterRefs.current[1] = el; }} className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold text-[#4edea3] counter" data-target="15">0</div>
            <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">Million Match Scores</div>
          </div>
          <div className="space-y-1">
            <div ref={(el) => { if (el) counterRefs.current[2] = el; }} className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold text-[#ffb783] counter" data-target="42000">0</div>
            <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">Interviews Secured</div>
          </div>
          <div className="space-y-1">
            <div ref={(el) => { if (el) counterRefs.current[3] = el; }} className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold text-[#dae2fd] counter" data-target="8">0</div>
            <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7]">Million Jobs Analyzed</div>
          </div>
        </div>
      </div>
    </section>
  );
}
