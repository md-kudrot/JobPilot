import React from 'react';

export default function JobCardSkeleton() {
  return (
    <article className="glass-card p-6 rounded-2xl h-full flex flex-col animate-pulse">
      {/* Header with match ring */}
      <div className="flex items-start justify-between mb-4">
        <div className="flex-grow">
          <div className="h-7 bg-[#ffffff]/5 rounded-lg w-3/4 mb-2"></div>
          <div className="h-5 bg-[#ffffff]/5 rounded-lg w-1/2"></div>
        </div>
        <div className="w-14 h-14 rounded-full bg-[#ffffff]/5 flex-shrink-0 ml-4"></div>
      </div>

      {/* Location & Job Type */}
      <div className="flex items-center gap-3 mb-3">
        <div className="h-4 bg-[#ffffff]/5 rounded w-24"></div>
        <div className="w-1 h-1 rounded-full bg-[#ffffff]/10"></div>
        <div className="h-4 bg-[#ffffff]/5 rounded w-20"></div>
      </div>

      {/* Description */}
      <div className="space-y-2 mb-4">
        <div className="h-4 bg-[#ffffff]/5 rounded w-full"></div>
        <div className="h-4 bg-[#ffffff]/5 rounded w-5/6"></div>
      </div>

      {/* Skills */}
      <div className="flex flex-wrap gap-2 mt-auto">
        <div className="h-6 bg-[#ffffff]/5 rounded-full w-16"></div>
        <div className="h-6 bg-[#ffffff]/5 rounded-full w-20"></div>
        <div className="h-6 bg-[#ffffff]/5 rounded-full w-14"></div>
        <div className="h-6 bg-[#ffffff]/5 rounded-full w-12"></div>
      </div>
    </article>
  );
}
