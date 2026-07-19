import React from 'react';
import Link from 'next/link';
import { SparklesFill } from '@gravity-ui/icons';

export interface Job {
  id: number;
  title: string;
  company: string;
  industry: string;
  location: string;
  matchPercent: number;
  matchTone: 'primary' | 'secondary';
  salary: string;
  skills: string[];
  logo: string;
  logoAlt: string;
}

export default function JobCard({ job }: { job: Job }) {
  const matchTone =
    job.matchTone === 'secondary'
      ? 'bg-[#00a572]/20 text-[#4edea3]'
      : 'bg-[#8083ff]/20 text-[#c0c1ff]';

  return (
    <Link href={`/jobs/${job.id}`}>
      <article className="glass-card rounded-[20px] p-6 flex flex-col justify-between hover-lift ai-gradient-bg relative group overflow-hidden cursor-pointer">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-xl glass-stroke bg-[#ffffff]/5 flex items-center justify-center p-2">
            <img className="w-full h-full object-contain" alt={job.logoAlt} src={job.logo} />
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className={`px-1 py-[2px] ${matchTone} text-[10px] font-bold uppercase rounded tracking-wider flex items-center gap-1`}>
              <SparklesFill className="w-3 h-3" />
              {job.matchPercent}% Match
            </span>
            <span className="text-[11px] leading-[16px] tracking-[0.05em] font-bold text-[#908fa0]">{job.location}</span>
          </div>
        </div>
        <div>
          <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold text-[#dae2fd] group-hover:text-[#c0c1ff] transition-colors">
            {job.title}
          </h3>
          <p className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">
            {job.company} &bull; {job.industry}
          </p>
        </div>
        <div className="flex flex-wrap gap-1">
          {job.skills.map((skill) => (
            <span key={skill} className="px-1 py-[2px] bg-[#ffffff]/5 border border-[#ffffff]/10 rounded text-[11px] text-[#908fa0]">
              {skill}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-[#ffffff]/5 flex items-center justify-between">
        <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">{job.salary}</span>
        <span className="bg-[#ffffff]/10 hover:bg-[#c0c1ff] hover:text-[#0d0096] text-[#dae2fd] px-6 py-1 rounded-lg text-[12px] leading-[16px] tracking-[0.02em] font-medium transition-all">
          View Details
        </span>
      </div>
      </article>
    </Link>
  );
}
