import React from 'react';
import { ChevronLeft, ChevronRight } from '@gravity-ui/icons';
import type { Pagination } from '@/lib/api';

interface JobsPaginationProps {
  pagination: Pagination | null;
  onPageChange: (page: number) => void;
}

export default function JobsPagination({ pagination, onPageChange }: JobsPaginationProps) {
  if (!pagination || pagination.total === 0) return null;

  const { currentPage, totalPages, total, limit, hasNextPage, hasPrevPage } = pagination;
  const start = (currentPage - 1) * limit + 1;
  const end = Math.min(currentPage * limit, total);

  const pages: number[] = [];
  for (let i = 1; i <= totalPages; i++) pages.push(i);

  return (
    <footer className="pt-16 pb-4 flex flex-col md:flex-row items-center justify-between gap-6 border-t border-[#ffffff]/5">
      <div className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">
        Showing <span className="text-[#dae2fd] font-semibold">{start}-{end}</span> of{' '}
        <span className="text-[#dae2fd] font-semibold">{total}</span> active positions
      </div>
      <div className="flex items-center gap-1">
        <button
          className="p-1 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors disabled:opacity-30"
          disabled={!hasPrevPage}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={
              page === currentPage
                ? 'w-10 h-10 rounded-lg bg-[#c0c1ff] text-[#0d0096] font-bold'
                : 'w-10 h-10 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors'
            }
          >
            {page}
          </button>
        ))}
        <button
          className="p-1 rounded-lg glass-stroke hover:bg-[#ffffff]/5 text-[#c7c4d7] transition-colors disabled:opacity-30"
          disabled={!hasNextPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </footer>
  );
}
