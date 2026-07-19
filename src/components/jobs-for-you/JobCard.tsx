'use client';

import React from 'react';
import Link from 'next/link';
import { GeoPin, Briefcase } from '@gravity-ui/icons';

interface JobForYou {
  _id: string;
  title: string;
  company: string;
  location: string;
  jobType: 'Remote' | 'Onsite' | 'Hybrid';
  description: string;
  skills: string[];
  matchScore: number;
  matchedSkills?: string[];
}

export default function JobCard({ job }: { job: JobForYou }) {
  // Show skills the user actually has first, so the match is visible at a glance.
  const matched = new Set((job.matchedSkills ?? []).map((s) => s.toLowerCase()));
  const sortedSkills = [...job.skills].sort(
    (a, b) => Number(matched.has(b.toLowerCase())) - Number(matched.has(a.toLowerCase()))
  );
  const visibleSkills = sortedSkills.slice(0, 4);
  const remainingSkills = sortedSkills.length - visibleSkills.length;

  // Match badge color based on score
  const getMatchColor = (score: number) => {
    if (score >= 80) return { bg: 'bg-[#4edea3]/10', text: 'text-[#4edea3]', ring: '#4edea3' };
    if (score >= 50) return { bg: 'bg-[#f59e0b]/10', text: 'text-[#f59e0b]', ring: '#f59e0b' };
    return { bg: 'bg-[#908fa0]/10', text: 'text-[#908fa0]', ring: '#908fa0' };
  };

  const matchColor = getMatchColor(job.matchScore);

  // SVG circle progress ring
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (job.matchScore / 100) * circumference;

  return (
    <Link href={`/jobs/${job._id}`} className="block group">
      <article className="glass-card p-6 rounded-2xl hover:shadow-lg hover:shadow-[#c0c1ff]/5 transition-all duration-200 hover:-translate-y-1 h-full flex flex-col">
        {/* Header with match ring */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex-grow">
            <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold text-[#dae2fd] group-hover:text-[#c0c1ff] transition-colors mb-1">
              {job.title}
            </h3>
            <p className="text-[14px] leading-[20px] tracking-[0em] font-medium text-[#c7c4d7]">
              {job.company}
            </p>
          </div>

          {/* Circular match ring */}
          <div className="relative flex-shrink-0 ml-4">
            <svg className="w-14 h-14 -rotate-90" viewBox="0 0 48 48">
              <circle
                cx="24"
                cy="24"
                r={radius}
                stroke="#2d3449"
                strokeWidth="3"
                fill="none"
              />
              <circle
                cx="24"
                cy="24"
                r={radius}
                stroke={matchColor.ring}
                strokeWidth="3"
                fill="none"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                strokeLinecap="round"
                className="transition-all duration-500"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className={`text-[12px] leading-[16px] font-bold ${matchColor.text}`}>
                {job.matchScore}%
              </span>
            </div>
          </div>
        </div>

        {/* Location & Job Type */}
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <div className="flex items-center gap-1.5 text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">
            <GeoPin className="w-4 h-4" />
            <span>{job.location}</span>
          </div>
          <span className="w-1 h-1 rounded-full bg-[#ffffff]/10"></span>
          <div className="flex items-center gap-1.5 text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">
            <Briefcase className="w-4 h-4" />
            <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-[0.05em] ${matchColor.bg} ${matchColor.text}`}>
              {job.jobType}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] mb-4 line-clamp-2">
          {job.description}
        </p>

        {/* Skills — matched ones highlighted in green */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {visibleSkills.map((skill, idx) => (
            <span
              key={idx}
              className={`px-3 py-1 rounded-full text-[11px] leading-[16px] tracking-[0.02em] font-medium ${
                matched.has(skill.toLowerCase())
                  ? 'bg-[#4edea3]/10 text-[#4edea3] border border-[#4edea3]/20'
                  : 'bg-[#c0c1ff]/10 text-[#c0c1ff]'
              }`}
            >
              {skill}
            </span>
          ))}
          {remainingSkills > 0 && (
            <span className="px-3 py-1 bg-[#ffffff]/5 text-[#908fa0] rounded-full text-[11px] leading-[16px] tracking-[0.02em] font-medium">
              +{remainingSkills} more
            </span>
          )}
        </div>
      </article>
    </Link>
  );
}
