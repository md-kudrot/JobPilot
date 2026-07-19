import React from 'react';
import { FileText, Comments, SealCheck, CircleXmark, SparklesFill } from '@gravity-ui/icons';

export interface DashboardMetrics {
  totalApplications: number;
  interviewRate: number;
  offers: number;
  rejections: number;
  matchScoreAvg: number;
}

export default function MetricCards({ metrics }: { metrics: DashboardMetrics }) {
  const cards = [
    {
      label: 'Total Applications',
      value: String(metrics.totalApplications),
      icon: FileText,
      iconStyles: 'bg-[#c0c1ff]/10 text-[#c0c1ff]',
      trend: 'All time',
      trendStyles: 'text-[#4edea3] font-bold',
      delay: '0.1s',
    },
    {
      label: 'Interview Rate',
      value: `${metrics.interviewRate}%`,
      icon: Comments,
      iconStyles: 'bg-[#4edea3]/10 text-[#4edea3]',
      trend: 'Active',
      trendStyles: 'text-[#4edea3] font-bold',
      delay: '0.2s',
    },
    {
      label: 'Offers',
      value: String(metrics.offers),
      icon: SealCheck,
      iconStyles: 'bg-[#ffb783]/10 text-[#ffb783]',
      trend: 'Stable',
      trendStyles: 'text-[#c7c4d7]',
      delay: '0.3s',
    },
    {
      label: 'Rejections',
      value: String(metrics.rejections),
      icon: CircleXmark,
      iconStyles: 'bg-[#ffb4ab]/10 text-[#ffb4ab]',
      trend: 'Closed',
      trendStyles: 'text-[#ffb4ab] font-bold',
      delay: '0.4s',
    },
    {
      label: 'Match Score Avg',
      value: `${metrics.matchScoreAvg}%`,
      icon: SparklesFill,
      iconStyles: 'bg-[#c0c1ff]/20 text-[#c0c1ff]',
      trend: 'AI Active',
      trendStyles: 'text-[#c0c1ff] font-bold',
      cardStyles: 'border-[#c0c1ff]/20',
      delay: '0.5s',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
      {cards.map((metric) => (
        <div
          key={metric.label}
          className={`glass-card rounded-xl p-6 flex flex-col justify-between ai-glow animate-fade-in ${metric.cardStyles ?? ''}`}
          style={{ animationDelay: metric.delay }}
        >
          <div className="flex justify-between items-start">
            <span className={`p-2 rounded-lg ${metric.iconStyles}`}>
              <metric.icon className="w-5 h-5" />
            </span>
            <span className={`text-[12px] leading-[16px] tracking-[0.02em] ${metric.trendStyles}`}>{metric.trend}</span>
          </div>
          <div className="mt-6">
            <p className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#c7c4d7] mb-1">{metric.label}</p>
            <h3 className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold">{metric.value}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
