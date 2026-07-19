import React from 'react';

export default function JobCardSkeleton() {
  return (
    <article className="glass-card rounded-[20px] p-6 flex flex-col justify-between animate-pulse">
      <div className="space-y-3">
        <div className="flex justify-between items-start">
          <div className="w-12 h-12 rounded-xl bg-[#ffffff]/5"></div>
          <div className="w-16 h-4 bg-[#ffffff]/5 rounded"></div>
        </div>
        <div className="h-6 bg-[#ffffff]/5 rounded w-3/4"></div>
        <div className="h-4 bg-[#ffffff]/5 rounded w-1/2"></div>
        <div className="flex gap-1">
          <div className="h-4 bg-[#ffffff]/5 rounded w-12"></div>
          <div className="h-4 bg-[#ffffff]/5 rounded w-16"></div>
        </div>
      </div>
      <div className="mt-6 pt-6 border-t border-[#ffffff]/5 flex items-center justify-between">
        <div className="h-4 bg-[#ffffff]/5 rounded w-20"></div>
        <div className="h-8 bg-[#ffffff]/5 rounded w-24"></div>
      </div>
    </article>
  );
}
