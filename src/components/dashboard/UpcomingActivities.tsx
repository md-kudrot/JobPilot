import React from 'react';
import { ChevronRight } from '@gravity-ui/icons';

export interface Activity {
  _id?: string;
  month: string;
  day: string;
  title: string;
  detail: string;
  dateStyles: string;
  muted?: boolean;
}

export default function UpcomingActivities({ activities }: { activities: Activity[] }) {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.9s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-10">Upcoming Activities</h4>
      <div className="space-y-6">
        {activities.length === 0 ? (
          <p className="text-[12px] text-[#c7c4d7]">No upcoming activities.</p>
        ) : (
          activities.map((activity) => (
            <div
              key={activity._id ?? activity.title}
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
          ))
        )}
      </div>
    </div>
  );
}
