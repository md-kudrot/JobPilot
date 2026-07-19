'use client';

import React, { useCallback, useEffect, useState } from 'react';
import Footer from '@/components/Footer';
import JobsHero from '@/components/jobs/JobsHero';
import JobsFilterBar from '@/components/jobs/JobsFilterBar';
import JobsGrid from '@/components/jobs/JobsGrid';
import JobsPagination from '@/components/jobs/JobsPagination';
import { api, type Job, type Pagination } from '@/lib/api';

interface JobsResponse {
  jobs: Job[];
  pagination: Pagination;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchInput, setSearchInput] = useState('');
  const [locationInput, setLocationInput] = useState('');
  const [search, setSearch] = useState('');
  const [location, setLocation] = useState('');
  const [sort, setSort] = useState('newest');
  const [page, setPage] = useState(1);

  const fetchJobs = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const params = new URLSearchParams({ page: String(page), limit: '8', sort });
      if (search) params.set('search', search);
      if (location) params.set('location', location);
      const data = await api.get<JobsResponse>(`/api/jobs?${params.toString()}`);
      setJobs(data.jobs);
      setPagination(data.pagination);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load jobs');
      setJobs([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  }, [page, sort, search, location]);

  useEffect(() => {
    fetchJobs();
  }, [fetchJobs]);

  const handleSearch = () => {
    setSearch(searchInput);
    setLocation(locationInput);
    setPage(1);
  };

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
      <div className="w-[80%] mx-auto">
        <main className="pt-32 pb-16 space-y-6">
          <JobsHero
            search={searchInput}
            location={locationInput}
            onSearchChange={setSearchInput}
            onLocationChange={setLocationInput}
            onSubmit={handleSearch}
          />
          <JobsFilterBar
            sort={sort}
            onSortChange={(s) => {
              setSort(s);
              setPage(1);
            }}
          />
          {error ? (
            <div className="glass-card p-8 rounded-2xl text-center text-[#ffb4ab]">{error}</div>
          ) : (
            <JobsGrid jobs={jobs} loading={loading} />
          )}
          <JobsPagination pagination={pagination} onPageChange={setPage} />
        </main>
        <Footer />
      </div>
    </div>
  );
}
