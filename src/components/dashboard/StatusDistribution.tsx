import React from 'react';

export interface StatusItem {
  label: string;
  status: string;
  count: number;
  percent: number;
}

const DOT_COLORS: Record<string, string> = {
  applied: 'bg-[#c0c1ff]',
  interview: 'bg-[#4edea3]',
  offer: 'bg-[#ffb783]',
  reviewing: 'bg-[#8083ff]',
  rejected: 'bg-[#ffb4ab]',
};

export default function StatusDistribution({
  statuses,
  total,
}: {
  statuses: StatusItem[];
  total: number;
}) {
  const visible = statuses.filter((s) => s.count > 0);

  return (
    <div className="lg:col-span-4 glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.7s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-10">Status Distribution</h4>
      <div className="relative flex items-center justify-center h-48 mb-6">
        <div className="w-40 h-40 rounded-full border-[12px] border-[#2d3449] flex items-center justify-center relative">
          <div className="absolute inset-0 rounded-full border-[12px] border-t-[#c0c1ff] border-l-[#4edea3] border-r-[#ffb783] border-b-transparent transform rotate-45"></div>
          <div className="flex flex-col items-center">
            <span className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold">{total}</span>
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">Total</span>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {visible.length === 0 ? (
          <p className="text-[12px] text-[#c7c4d7] text-center">No application data yet.</p>
        ) : (
          visible.map((status) => (
            <div key={status.status} className="flex justify-between items-center">
              <div className="flex items-center gap-1">
                <div className={`w-2 h-2 rounded-full ${DOT_COLORS[status.status] ?? 'bg-[#c0c1ff]'}`}></div>
                <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">{status.label}</span>
              </div>
              <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">{status.percent}%</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
