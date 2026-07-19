import React from 'react';
import JobCard, { type Job } from './JobCard';
import JobCardSkeleton from './JobCardSkeleton';

interface JobsGridProps {
  jobs: Job[];
  loading: boolean;
}

export default function JobsGrid({ jobs, loading }: JobsGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <JobCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (jobs.length === 0) {
    return (
      <div className="glass-card p-12 rounded-2xl text-center">
        <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd] mb-2">
          No jobs found
        </h2>
        <p className="text-[16px] leading-[24px] text-[#c7c4d7]">
          Try adjusting your search or filters.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {jobs.map((job) => (
        <JobCard key={job._id} job={job} />
      ))}
    </div>
  );
}
