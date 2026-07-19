import type { Metadata } from 'next';
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import MetricCards from '@/components/dashboard/MetricCards';
import ApplicationTimeline from '@/components/dashboard/ApplicationTimeline';
import StatusDistribution from '@/components/dashboard/StatusDistribution';
import TopSkills from '@/components/dashboard/TopSkills';
import UpcomingActivities from '@/components/dashboard/UpcomingActivities';

export const metadata: Metadata = {
  title: 'Dashboard | JobPilot AI',
  description:
    'Track your job applications, interview rate, offers, and AI match scores in one intelligent career dashboard.',
};

export default function DashboardPage() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
      <div className="w-[80%] mx-auto">
        <Header active="Dashboard" />
        <main className="pt-32 pb-16">
          <DashboardHeader />
          <MetricCards />
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
            <ApplicationTimeline />
            <StatusDistribution />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TopSkills />
            <UpcomingActivities />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
