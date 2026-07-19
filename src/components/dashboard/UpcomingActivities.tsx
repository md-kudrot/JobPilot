import React from 'react';
import { ChevronRight } from '@gravity-ui/icons';

interface Activity {
  month: string;
  day: string;
  title: string;
  detail: string;
  dateStyles: string;
  muted?: boolean;
}

const ACTIVITIES: Activity[] = [
  {
    month: 'Oct',
    day: '24',
    title: 'Final Interview: TechCorp',
    detail: 'Product Analyst Position • 14:00 PM',
    dateStyles: 'bg-[#c0c1ff]/20 text-[#c0c1ff]',
  },
  {
    month: 'Oct',
    day: '26',
    title: 'Screening: InnovateAI',
    detail: 'Senior ML Engineer • 10:30 AM',
    dateStyles: 'bg-[#4edea3]/20 text-[#4edea3]',
  },
  {
    month: 'Oct',
    day: '28',
    title: 'Resume Review Session',
    detail: 'AI Coach • 16:00 PM',
    dateStyles: 'bg-[#c7c4d7]/20 text-[#c7c4d7]',
    muted: true,
  },
];

export default function UpcomingActivities() {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-10">Upcoming Activities</h4>
      <div className="space-y-6">
        {ACTIVITIES.map((activity) => (
          <div
            key={activity.title}
            className={`flex gap-6 items-center p-3 rounded-lg bg-[#ffffff]/5 border border-[#ffffff]/5 ${activity.muted ? 'opacity-60' : ''}`}
          >
            <div className={`flex flex-col items-center p-3 rounded-lg min-w-[50px] ${activity.dateStyles}`}>
              <span className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase">{activity.month}</span>
              <span className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold">{activity.day}</span>
            </div>
            <div className="flex-grow">
              <h5 className="text-[12px] leading-[16px] tracking-[0.02em] font-bold text-[#dae2fd]">{activity.title}</h5>
              <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">{activity.detail}</p>
            </div>
            <button className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
