import React from 'react';

const STATUSES = [
  { label: 'Applied', percent: '64%', dot: 'bg-[#c0c1ff]' },
  { label: 'Interviewing', percent: '22%', dot: 'bg-[#4edea3]' },
  { label: 'Offer', percent: '14%', dot: 'bg-[#ffb783]' },
];

export default function StatusDistribution() {
  return (
    <div className="lg:col-span-4 glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-10">Status Distribution</h4>
      <div className="relative flex items-center justify-center h-48 mb-6">
        {/* Circular progress / pie illusion */}
        <div className="w-40 h-40 rounded-full border-[12px] border-[#2d3449] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full border-[12px] border-t-[#c0c1ff] border-l-[#4edea3] border-r-[#ffb783] border-b-transparent transform rotate-45"></div>
          <div className="flex flex-col items-center">
            <span className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold">142</span>
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">Total</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {STATUSES.map((status) => (
          <div key={status.label} className="flex justify-between items-center">
            <div className="flex items-center gap-1">
              <div className={`w-2 h-2 rounded-full ${status.dot}`}></div>
              <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">{status.label}</span>
            </div>
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">{status.percent}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
