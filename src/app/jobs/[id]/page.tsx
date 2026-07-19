'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from '@gravity-ui/icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobDetailsHeader from '@/components/job-details/JobDetailsHeader';
import JobDescription from '@/components/job-details/JobDescription';
import CompanyInfo from '@/components/job-details/CompanyInfo';
import AIMatchAnalysis from '@/components/job-details/AIMatchAnalysis';
import ApplySection from '@/components/job-details/ApplySection';
import RelatedJobs from '@/components/job-details/RelatedJobs';

export default function JobDetailsPage() {
  const router = useRouter();

  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
      <div className="w-[80%] mx-auto">
        <Header active="Explore Jobs" />
        <main className="pt-32 pb-16">
          {/* Back Button */}
          <button
            onClick={() => router.back()}
            className="flex items-center gap-1 mb-10 group cursor-pointer w-fit text-[#c0c1ff] hover:-translate-x-1 transition-transform"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">Back to Search</span>
          </button>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column */}
            <div className="lg:col-span-8 space-y-6">
              <JobDetailsHeader
                title="Senior Product Designer"
                company="Nebula Systems"
                location="Remote (USA)"
                logo="https://lh3.googleusercontent.com/aida-public/AB6AXuDwakxBQSBABSmRUJhFDq5mmGt5nNKfutXdqsitt3C4sQWsfoyTwrEwOdQE5DiTFvZ2t1oESor8pnw65C6ebTfuoDoU-7Ckgzfg2tIrylwlL3sGIdJPwmp06CbMHvKnsA_m10ptN7UhGpLC0DeONqut3octyMHJwCCs2jivZvU96Bhvk4dc8XllRmZJGyWv6ip4byRnPiuB7ChyddrUj6-Xsbm0rdo1zyjnyNNCVHpN-t8JbT-KWxDBUQ"
              />
              <JobDescription />
              <CompanyInfo />
            </div>

            {/* Right Column */}
            <div className="lg:col-span-4 space-y-6">
              <AIMatchAnalysis />
              <ApplySection />
            </div>
          </div>

          {/* Related Jobs Section */}
          <RelatedJobs />
        </main>
        <Footer />
      </div>
    </div>
  );
}
