import type { Metadata } from 'next';
import React from 'react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobPostForm from '@/components/job-post/JobPostForm';

export const metadata: Metadata = {
  title: 'Post a Job | JobPilot AI',
  description:
    'Post a new job opening with AI-powered matching to attract the best candidates for your role.',
};

export default async function PostJobPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    redirect('/login?redirect=/post-job');
  }

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen flex flex-col">
      <Header active="Post Job" />
      <main className="flex-grow pt-32 pb-16 px-6 max-w-7xl mx-auto w-full">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold text-[#dae2fd] mb-1">
            Post a New Job
          </h1>
          <p className="text-[18px] leading-[28px] tracking-[0em] font-normal text-[#c7c4d7] max-w-2xl mx-auto">
            Attract top talent with AI-powered matching and precision job descriptions.
          </p>
        </div>

        <JobPostForm />
      </main>
      <Footer />
    </div>
  );
}
