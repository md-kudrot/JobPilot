import React from 'react';
import { Xmark, ChevronDown, ArrowUpArrowDown } from '@gravity-ui/icons';

const FILTERS = ['Job Type', 'Experience', 'Salary Range', 'Source'];

export default function JobsFilterBar() {
  return (
    <div className="sticky top-20 z-40 py-3 bg-[#0b1326]/90 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
          <button className="flex items-center gap-1 px-3 py-1 rounded-full glass-stroke text-[12px] leading-[16px] tracking-[0.02em] font-medium bg-[#222a3d] text-[#dae2fd] border-[#c0c1ff] whitespace-nowrap">
            <span>Skills: React</span>
            <Xmark className="w-4 h-4" />
          </button>
          <div className="h-6 w-px bg-[#ffffff]/10 mx-1"></div>
          <div className="flex items-center gap-1">
            {FILTERS.map((filter) => (
              <button
                key={filter}
                className="flex items-center gap-1 px-3 py-1 rounded-full glass-stroke text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:bg-[#ffffff]/5 transition-colors whitespace-nowrap"
              >
                {filter} <ChevronDown className="w-[18px] h-[18px]" />
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#908fa0]">Sort by:</span>
          <button className="flex items-center gap-1 px-3 py-1 rounded-lg glass-stroke text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#dae2fd] hover:bg-[#ffffff]/5">
            Newest First <ArrowUpArrowDown className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
