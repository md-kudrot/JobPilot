'use client';

import React from 'react';
import { SparklesFill, Comments } from '@gravity-ui/icons';

const MATCHING_SKILLS = ['Figma', 'Design Systems', 'UX Research', 'SaaS'];
const MISSING_SKILLS = ['Three.js', 'Web Accessibility'];

export default function AIMatchAnalysis() {
  return (
    <div className="glass p-6 rounded-xl ai-glow border-[#c0c1ff]/20 relative overflow-hidden">
      <div className="absolute top-0 right-0 p-3 opacity-20">
        <SparklesFill className="w-12 h-12 text-[#c0c1ff]" />
      </div>

      <div className="flex items-center gap-1 text-[#c0c1ff] mb-6">
        <SparklesFill className="w-5 h-5" />
        <span className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase">AI Match Analysis</span>
      </div>

      <div className="flex flex-col items-center justify-center py-6 space-y-3">
        {/* Circular Progress Ring */}
        <div className="relative flex items-center justify-center">
          <svg className="w-32 h-32">
            <circle
              cx="64"
              cy="64"
              fill="transparent"
              r="58"
              stroke="currentColor"
              strokeWidth="8"
              className="text-[#ffffff]/5"
            ></circle>
            <circle
              cx="64"
              cy="64"
              fill="transparent"
              r="58"
              stroke="currentColor"
              strokeWidth="8"
              strokeDasharray="364.4"
              strokeDashoffset="29.1"
              strokeLinecap="round"
              className="text-[#4edea3] transition-all duration-500"
              style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
            ></circle>
          </svg>
          <span className="absolute text-[36px] leading-[44px] tracking-[-0.03em] font-bold text-[#4edea3]">92%</span>
        </div>

        <p className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold text-[#dae2fd]">Excellent Match</p>
      </div>

      <div className="space-y-6">
        <div>
          <p className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] mb-2">Matching Skills</p>
          <div className="flex flex-wrap gap-2">
            {MATCHING_SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-[#4edea3]/10 text-[#4edea3] px-2 py-1 rounded text-[10px] font-bold border border-[#4edea3]/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] mb-2">Missing Skills</p>
          <div className="flex flex-wrap gap-2">
            {MISSING_SKILLS.map((skill) => (
              <span
                key={skill}
                className="bg-[#ffb4ab]/10 text-[#ffb4ab] px-2 py-1 rounded text-[10px] font-bold border border-[#ffb4ab]/20"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="p-3 bg-[#ffffff]/5 rounded-lg border border-[#ffffff]/5">
          <p className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c0c1ff] mb-2 flex items-center gap-1">
            <Comments className="w-3.5 h-3.5" /> AI Reasoning
          </p>
          <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] italic">
            "Your profile shows strong expertise in complex SaaS design systems which perfectly aligns with Nebula's
            technical roadmap. Missing Three.js can be offset by your deep motion design background."
          </p>
        </div>
      </div>
    </div>
  );
}
