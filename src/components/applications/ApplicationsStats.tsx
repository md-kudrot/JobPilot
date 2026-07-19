import React from 'react';
import { FileText, CircleCheck, Briefcase, CircleXmark } from '@gravity-ui/icons';

interface Stat {
  label: string;
  value: string;
  icon: React.ComponentType<{ className?: string }>;
  iconStyles: string;
  trend: string;
  trendStyles: string;
  delay: string;
}

const STATS: Stat[] = [
  {
    label: 'Total Applications',
    value: '24',
    icon: FileText,
    iconStyles: 'bg-[#c0c1ff]/10 text-[#c0c1ff]',
    trend: '+3 this week',
    trendStyles: 'text-[#4edea3] font-bold',
    delay: '0.1s',
  },
  {
    label: 'Under Review',
    value: '12',
    icon: CircleCheck,
    iconStyles: 'bg-[#4edea3]/10 text-[#4edea3]',
    trend: 'Active',
    trendStyles: 'text-[#4edea3] font-bold',
    delay: '0.2s',
  },
  {
    label: 'Interviews',
    value: '5',
    icon: Briefcase,
    iconStyles: 'bg-[#ffb783]/10 text-[#ffb783]',
    trend: '+2 scheduled',
    trendStyles: 'text-[#ffb783] font-bold',
    delay: '0.3s',
  },
  {
    label: 'Rejected',
    value: '7',
    icon: CircleXmark,
    iconStyles: 'bg-[#ffb4ab]/10 text-[#ffb4ab]',
    trend: '-1 today',
    trendStyles: 'text-[#ffb4ab] font-bold',
    delay: '0.4s',
  },
];

export default function ApplicationsStats() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {STATS.map((stat) => (
        <div
          key={stat.label}
          className="glass-card rounded-xl p-6 flex flex-col justify-between ai-glow animate-fade-in"
          style={{ animationDelay: stat.delay }}
        >
          <div className="flex justify-between items-start">
            <span className={`p-2 rounded-lg ${stat.iconStyles}`}>
              <stat.icon className="w-5 h-5" />
            </span>
            <span className={`text-[12px] leading-[16px] tracking-[0.02em] ${stat.trendStyles}`}>{stat.trend}</span>
          </div>
          <div className="mt-6">
            <p className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7] mb-1">{stat.label}</p>
            <h3 className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold">{stat.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
