import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobsHero from '@/components/jobs/JobsHero';
import JobsFilterBar from '@/components/jobs/JobsFilterBar';
import JobsGrid from '@/components/jobs/JobsGrid';
import JobsPagination from '@/components/jobs/JobsPagination';

export const metadata: Metadata = {
  title: 'Job Feed | JobPilot AI',
  description:
    'Explore AI-matched job opportunities. JobPilot AI analyzes millions of listings to surface roles that fit your unique skill set.',
};

export default function JobsPage() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
      <div className="w-[80%] mx-auto">
        <Header active="Explore Jobs" />
        <main className="pt-32 pb-16 space-y-6">
          <JobsHero />
          <JobsFilterBar />
          <JobsGrid />
          <JobsPagination />
        </main>
        <Footer />
      </div>
    </div>
  );
}
