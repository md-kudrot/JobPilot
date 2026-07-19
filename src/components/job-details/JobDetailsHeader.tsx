import React from 'react';
import { Bookmark, Clock, Wallet, Briefcase, Persons } from '@gravity-ui/icons';

interface JobDetailsHeaderProps {
  title: string;
  company: string;
  location: string;
  logo: string;
  salary?: string;
  employmentType?: string;
  experience?: string;
  companySize?: string;
}

export default function JobDetailsHeader({
  title,
  company,
  location,
  logo,
  salary = '$140k – $190k',
  employmentType = 'Full-time',
  experience = '5+ years exp.',
  companySize = '100-200 employees',
}: JobDetailsHeaderProps) {
  return (
    <div className="glass p-6 rounded-xl space-y-6">
      <div className="flex items-start justify-between">
        <div className="flex items-center gap-6">
          <div className="w-16 h-16 rounded-lg glass flex items-center justify-center p-3">
            <img className="w-full h-full object-contain" alt={company} src={logo} />
          </div>
          <div>
            <h1 className="text-[30px] leading-[38px] tracking-[-0.02em] font-semibold text-[#dae2fd]">{title}</h1>
            <p className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold text-[#c0c1ff]">
              {company} • <span className="text-[#c7c4d7] font-normal">{location}</span>
            </p>
          </div>
        </div>
        <button className="glass p-3 rounded-lg hover:bg-[#ffffff]/10 transition-all">
          <Bookmark className="w-5 h-5" />
        </button>
      </div>
      <div className="flex flex-wrap gap-3 pt-6 border-t border-[#ffffff]/5">
        <div className="flex items-center gap-1 text-[#c7c4d7] text-[12px] leading-[16px] tracking-[0.02em] font-medium">
          <Clock className="w-[18px] h-[18px]" />
          <span>{employmentType}</span>
        </div>
        <div className="flex items-center gap-1 text-[#c7c4d7] text-[12px] leading-[16px] tracking-[0.02em] font-medium">
          <Wallet className="w-[18px] h-[18px]" />
          <span>{salary}</span>
        </div>
        <div className="flex items-center gap-1 text-[#c7c4d7] text-[12px] leading-[16px] tracking-[0.02em] font-medium">
          <Briefcase className="w-[18px] h-[18px]" />
          <span>{experience}</span>
        </div>
        <div className="flex items-center gap-1 text-[#c7c4d7] text-[12px] leading-[16px] tracking-[0.02em] font-medium">
          <Persons className="w-[18px] h-[18px]" />
          <span>{companySize}</span>
        </div>
      </div>
    </div>
  );
}
