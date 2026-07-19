import React from 'react';
import { ChevronLeft, ChevronRight } from '@gravity-ui/icons';

export default function JobsPagination() {
  return (
    <footer className="pt-16 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#ffffff]/5">
      <div className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">
        Showing <span className="text-[#dae2fd] font-semibold">1-8</span> of{' '}
        <span className="text-[#dae2fd] font-semibold">124</span> active positions
      </div>
      <div className="flex items-center gap-1">
        <button
          className="p-1 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors disabled:opacity-30"
          disabled
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button className="w-10 h-10 rounded-lg bg-[#c0c1ff] text-[#0d0096] font-bold">1</button>
        <button className="w-10 h-10 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors">2</button>
        <button className="w-10 h-10 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors">3</button>
        <span className="text-[#908fa0] px-1">...</span>
        <button className="w-10 h-10 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors">12</button>
        <button className="p-1 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}
