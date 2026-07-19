'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, ArrowRotateRight, Xmark } from '@gravity-ui/icons';

export default function ApplySection() {
  const [emailVisible, setEmailVisible] = useState(false);

  return (
    <div className="glass p-6 rounded-xl space-y-6 sticky top-[100px]">
      <button className="w-full py-4 bg-[#c0c1ff] text-[#0d0096] text-[24px] leading-[32px] tracking-[-0.02em] font-semibold rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
        Apply Now
      </button>

      <button
        onClick={() => setEmailVisible(!emailVisible)}
        className="w-full py-3 glass border border-[#c0c1ff]/30 text-[#c0c1ff] text-[12px] leading-[16px] tracking-[0.02em] font-medium rounded-xl flex items-center justify-center gap-1 hover:bg-[#c0c1ff]/10 transition-all"
      >
        <Sparkles className="w-4 h-4" />
        Generate AI Email
      </button>

      {emailVisible && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-3 pt-6 border-t border-[#ffffff]/10">
          <div className="flex items-center justify-between">
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#dae2fd]">AI Generated Draft</span>
            <button
              onClick={() => setEmailVisible(false)}
              className="text-[#c7c4d7] hover:text-[#ffffff] transition-colors"
            >
              <Xmark className="w-[18px] h-[18px]" />
            </button>
          </div>

          <div className="relative">
            <textarea
              className="w-full h-48 bg-[#060e20] border border-[#ffffff]/10 rounded-lg p-3 text-[14px] leading-[20px] text-[#c7c4d7] focus:ring-1 focus:ring-[#c0c1ff] focus:border-[#c0c1ff] outline-none transition-all resize-none"
              defaultValue={`Subject: Senior Product Designer Application - [My Name]

Hi Nebula Systems Team,

I've been following Nebula's progress in cloud orchestration and I'm impressed by your focus on developer productivity. With 6 years of experience building complex SaaS design systems, I'm confident I can help scale Nebula's interface to its next level of maturity...`}
            ></textarea>

            <div className="absolute bottom-2 right-2 flex gap-1">
              <button className="p-2 glass rounded hover:bg-[#ffffff]/10 transition-all text-[#c7c4d7]">
                <Copy className="w-3.5 h-3.5" />
              </button>
              <button className="p-2 glass rounded hover:bg-[#ffffff]/10 transition-all text-[#c7c4d7]">
                <ArrowRotateRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <button className="w-full py-2 bg-[#00a572] text-[#ffffff] text-[12px] leading-[16px] tracking-[0.02em] font-medium rounded-lg hover:opacity-90 transition-all">
            Send Email
          </button>
        </div>
      )}
    </div>
  );
}
