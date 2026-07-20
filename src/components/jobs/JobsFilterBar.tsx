'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Xmark, ChevronDown, ArrowUpArrowDown, Check } from '@gravity-ui/icons';

const JOB_TYPES = ['All', 'Remote', 'Onsite', 'Hybrid'];

const SALARY_RANGES: { label: string; min?: number; max?: number }[] = [
  { label: 'All' },
  { label: 'Up to $120k', max: 120 },
  { label: '$120k - $160k', min: 120, max: 160 },
  { label: '$160k - $200k', min: 160, max: 200 },
  { label: '$200k+', min: 200 },
];

const SORT_LABELS: Record<string, string> = {
  newest: 'Newest First',
  oldest: 'Oldest First',
  match: 'Best Match',
};

export interface SalaryRange {
  label: string;
  min?: number;
  max?: number;
}

interface JobsFilterBarProps {
  skillFilter?: string;
  onClearSkill?: () => void;
  sort: string;
  onSortChange: (sort: string) => void;
  jobType: string;
  onJobTypeChange: (jobType: string) => void;
  salary: SalaryRange;
  onSalaryChange: (salary: SalaryRange) => void;
}

function Dropdown({
  label,
  active,
  options,
  onSelect,
}: {
  label: string;
  active: boolean;
  options: { key: string; label: string; selected: boolean; onClick: () => void }[];
  onSelect?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  const openMenu = () => {
    const rect = btnRef.current?.getBoundingClientRect();
    if (rect) setCoords({ top: rect.bottom + 8, left: rect.left });
    setOpen(true);
  };

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const target = e.target as Node;
      if (
        btnRef.current && !btnRef.current.contains(target) &&
        menuRef.current && !menuRef.current.contains(target)
      ) {
        setOpen(false);
      }
    };
    const close = () => setOpen(false);
    document.addEventListener('mousedown', handler);
    window.addEventListener('scroll', close, true);
    window.addEventListener('resize', close);
    return () => {
      document.removeEventListener('mousedown', handler);
      window.removeEventListener('scroll', close, true);
      window.removeEventListener('resize', close);
    };
  }, [open]);

  return (
    <>
      <button
        ref={btnRef}
        onClick={() => (open ? setOpen(false) : openMenu())}
        className={`flex items-center gap-1 px-3 py-1 rounded-full glass-stroke text-[12px] leading-[16px] tracking-[0.02em] font-medium transition-colors whitespace-nowrap ${
          active
            ? 'bg-[#222a3d] text-[#dae2fd] border-[#c0c1ff]'
            : 'text-[#c7c4d7] hover:bg-[#ffffff]/5'
        }`}
      >
        {label} <ChevronDown className="w-[18px] h-[18px]" />
      </button>
      {open && coords && createPortal(
        <div
          ref={menuRef}
          style={{ position: 'fixed', top: coords.top, left: coords.left }}
          className="z-[100] min-w-[180px] rounded-xl bg-[#141b2e] border border-[#ffffff]/10 p-1 shadow-2xl"
        >
          {options.map((opt) => (
            <button
              key={opt.key}
              onClick={() => {
                opt.onClick();
                setOpen(false);
                onSelect?.();
              }}
              className="w-full flex items-center justify-between gap-2 px-3 py-2 rounded-lg text-left text-[13px] leading-[18px] text-[#dae2fd] hover:bg-[#ffffff]/5 transition-colors"
            >
              <span>{opt.label}</span>
              {opt.selected && <Check className="w-4 h-4 text-[#c0c1ff]" />}
            </button>
          ))}
        </div>,
        document.body
      )}
    </>
  );
}

export default function JobsFilterBar({
  skillFilter,
  onClearSkill,
  sort,
  onSortChange,
  jobType,
  onJobTypeChange,
  salary,
  onSalaryChange,
}: JobsFilterBarProps) {
  const cycleSort = () => {
    const order = ['newest', 'match', 'oldest'];
    const next = order[(order.indexOf(sort) + 1) % order.length];
    onSortChange(next);
  };

  const jobTypeActive = jobType !== 'All';
  const salaryActive = salary.label !== 'All';

  return (
    <div className="sticky top-20 z-40 py-3 bg-[#0b1326]/90 backdrop-blur-md">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0">
          {skillFilter && (
            <>
              <button
                onClick={onClearSkill}
                className="flex items-center gap-1 px-3 py-1 rounded-full glass-stroke text-[12px] leading-[16px] tracking-[0.02em] font-medium bg-[#222a3d] text-[#dae2fd] border-[#c0c1ff] whitespace-nowrap"
              >
                <span>Skills: {skillFilter}</span>
                <Xmark className="w-4 h-4" />
              </button>
              <div className="h-6 w-px bg-[#ffffff]/10 mx-1"></div>
            </>
          )}
          <div className="flex items-center gap-1">
            <Dropdown
              label={jobTypeActive ? `Job Type: ${jobType}` : 'Job Type'}
              active={jobTypeActive}
              options={JOB_TYPES.map((t) => ({
                key: t,
                label: t,
                selected: t === jobType,
                onClick: () => onJobTypeChange(t),
              }))}
            />
            <Dropdown
              label={salaryActive ? `Salary: ${salary.label}` : 'Salary Range'}
              active={salaryActive}
              options={SALARY_RANGES.map((r) => ({
                key: r.label,
                label: r.label,
                selected: r.label === salary.label,
                onClick: () => onSalaryChange(r),
              }))}
            />
            {(jobTypeActive || salaryActive) && (
              <button
                onClick={() => {
                  onJobTypeChange('All');
                  onSalaryChange(SALARY_RANGES[0]);
                }}
                className="flex items-center gap-1 px-3 py-1 rounded-full text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#908fa0] hover:text-[#dae2fd] transition-colors whitespace-nowrap"
              >
                Clear <Xmark className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#908fa0]">Sort by:</span>
          <button
            onClick={cycleSort}
            className="flex items-center gap-1 px-3 py-1 rounded-lg glass-stroke text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#dae2fd] hover:bg-[#ffffff]/5"
          >
            {SORT_LABELS[sort] ?? 'Newest First'} <ArrowUpArrowDown className="w-[18px] h-[18px]" />
          </button>
        </div>
      </div>
    </div>
  );
}
