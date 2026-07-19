'use client';

import React, { useEffect, useState } from 'react';
import { FileText, CircleCheck, Briefcase, CircleXmark } from '@gravity-ui/icons';
import { api } from '@/lib/api';
import { authClient } from '@/lib/auth-client';

interface StatsData {
  totalApplications: number;
  underReview: number;
  interviews: number;
  rejected: number;
}

export default function ApplicationsStats() {
  const { data: session } = authClient.useSession();
  const [stats, setStats] = useState<StatsData>({
    totalApplications: 0,
    underReview: 0,
    interviews: 0,
    rejected: 0,
  });

  useEffect(() => {
    const query = session?.user?.email ? `?email=${encodeURIComponent(session.user.email)}` : '';
    api
      .get<{ stats: StatsData }>(`/api/applications/stats${query}`)
      .then((data) => setStats(data.stats))
      .catch(() => {});
  }, [session]);

  const cards = [
    {
      label: 'Total Applications',
      value: stats.totalApplications,
      icon: FileText,
      iconStyles: 'bg-[#c0c1ff]/10 text-[#c0c1ff]',
      trend: 'All time',
      trendStyles: 'text-[#4edea3] font-bold',
      delay: '0.1s',
    },
    {
      label: 'Under Review',
      value: stats.underReview,
      icon: CircleCheck,
      iconStyles: 'bg-[#4edea3]/10 text-[#4edea3]',
      trend: 'Active',
      trendStyles: 'text-[#4edea3] font-bold',
      delay: '0.2s',
    },
    {
      label: 'Interviews',
      value: stats.interviews,
      icon: Briefcase,
      iconStyles: 'bg-[#ffb783]/10 text-[#ffb783]',
      trend: 'Scheduled',
      trendStyles: 'text-[#ffb783] font-bold',
      delay: '0.3s',
    },
    {
      label: 'Rejected',
      value: stats.rejected,
      icon: CircleXmark,
      iconStyles: 'bg-[#ffb4ab]/10 text-[#ffb4ab]',
      trend: 'Closed',
      trendStyles: 'text-[#ffb4ab] font-bold',
      delay: '0.4s',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {cards.map((stat) => (
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
