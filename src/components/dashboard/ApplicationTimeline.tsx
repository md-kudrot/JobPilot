import React from 'react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export default function ApplicationTimeline() {
  return (
    <div className="lg:col-span-8 glass-card rounded-xl p-6 flex flex-col animate-fade-in" style={{ animationDelay: '0.6s' }}>
      <div className="flex justify-between items-center mb-10">
        <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold">Application Timeline</h4>
        <select className="bg-[#131b2e] border-none rounded-lg text-[12px] leading-[16px] tracking-[0.02em] font-medium focus:ring-1 focus:ring-[#c0c1ff] px-3 py-2" defaultValue="30">
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>
      <div className="flex-grow flex items-end gap-2 h-64 relative">
        {/* Line chart background */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
          <svg height="100%" preserveAspectRatio="none" viewBox="0 0 1000 200" width="100%">
            <path
              d="M0,150 C100,120 200,180 300,100 C400,20 500,150 600,120 C700,90 800,140 900,100 L1000,110"
              fill="none"
              stroke="#c0c1ff"
              strokeWidth="4"
            />
            <path
              d="M0,150 C100,120 200,180 300,100 C400,20 500,150 600,120 C700,90 800,140 900,100 L1000,110 V200 H0 Z"
              fill="url(#timeline-grad)"
              opacity="0.5"
            />
            <defs>
              <linearGradient id="timeline-grad" x1="0%" x2="0%" y1="0%" y2="100%">
                <stop offset="0%" style={{ stopColor: '#c0c1ff', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: '#c0c1ff', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>
        {/* Data points and axis */}
        <div className="w-full flex justify-between items-end px-3 z-10">
          {DAYS.map((day) => (
            <div key={day} className="flex flex-col items-center gap-1">
              <div className="w-3 h-3 rounded-full bg-[#c0c1ff] ring-4 ring-[#c0c1ff]/10"></div>
              <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">{day}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
