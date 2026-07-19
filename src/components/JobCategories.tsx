import React from 'react';
import { Code, Palette, ChartColumn, Megaphone, Persons, Factory } from '@gravity-ui/icons';

export default function JobCategories() {
  return (
    <section className="py-16 px-10">
      <div className="max-w-container-max mx-auto text-center">
        <h2 className="text-[30px] leading-[38px] tracking-[-0.02em] font-semibold mb-16">Browse by Industry Expertise</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          <a className="p-6 rounded-xl bg-[#222a3d] border border-[#ffffff]/5 hover:border-[#c0c1ff]/50 transition-all flex flex-col items-center gap-3 group" href="#">
            <Code className="text-[#c0c1ff] group-hover:scale-110 transition-transform w-8 h-8" />
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Engineering</span>
          </a>
          <a className="p-6 rounded-xl bg-[#222a3d] border border-[#ffffff]/5 hover:border-[#4edea3]/50 transition-all flex flex-col items-center gap-3 group" href="#">
            <Palette className="text-[#4edea3] group-hover:scale-110 transition-transform w-8 h-8" />
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Design</span>
          </a>
          <a className="p-6 rounded-xl bg-[#222a3d] border border-[#ffffff]/5 hover:border-[#ffb783]/50 transition-all flex flex-col items-center gap-3 group" href="#">
            <ChartColumn className="text-[#ffb783] group-hover:scale-110 transition-transform w-8 h-8" />
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Data Science</span>
          </a>
          <a className="p-6 rounded-xl bg-[#222a3d] border border-[#ffffff]/5 hover:border-[#c0c1ff]/50 transition-all flex flex-col items-center gap-3 group" href="#">
            <Megaphone className="text-[#c0c1ff] group-hover:scale-110 transition-transform w-8 h-8" />
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Marketing</span>
          </a>
          <a className="p-6 rounded-xl bg-[#222a3d] border border-[#ffffff]/5 hover:border-[#4edea3]/50 transition-all flex flex-col items-center gap-3 group" href="#">
            <Persons className="text-[#4edea3] group-hover:scale-110 transition-transform w-8 h-8" />
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Sales</span>
          </a>
          <a className="p-6 rounded-xl bg-[#222a3d] border border-[#ffffff]/5 hover:border-[#ffb783]/50 transition-all flex flex-col items-center gap-3 group" href="#">
            <Factory className="text-[#ffb783] group-hover:scale-110 transition-transform w-8 h-8" />
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">Finance</span>
          </a>
        </div>
      </div>
    </section>
  );
}
