import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ApplicationsHeader from '@/components/applications/ApplicationsHeader';
import ApplicationsStats from '@/components/applications/ApplicationsStats';
import ApplicationsList from '@/components/applications/ApplicationsList';

export const metadata: Metadata = {
  title: 'My Applications | JobPilot AI',
  description:
    'Track and manage all your job applications in one place. View application status, interview schedules, and offers.',
};

export default function MyApplicationsPage() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
      <div className="w-[80%] mx-auto">
        <Header active="My Applications" />
        <main className="pt-32 pb-16">
          <ApplicationsHeader />
          <ApplicationsStats />
          <div className="grid grid-cols-1 gap-6">
            <ApplicationsList />
          </div>
        </main>
        {/* <Footer /> */}
      </div>
    </div>
  );
}
