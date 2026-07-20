'use client';

import React, { useEffect, useState } from 'react';
import MetricCards, { type DashboardMetrics } from './MetricCards';
import ApplicationTimeline from './ApplicationTimeline';
import StatusDistribution, { type StatusItem } from './StatusDistribution';
import TopSkills, { type SkillItem } from './TopSkills';
import UpcomingActivities, { type Activity } from './UpcomingActivities';
import { api } from '@/lib/api';
import { authClient } from '@/lib/auth-client';

interface DashboardData {
  metrics: DashboardMetrics;
  statusDistribution: StatusItem[];
  topSkills: SkillItem[];
  upcomingActivities: Activity[];
  total: number;
}

const EMPTY: DashboardData = {
  metrics: { totalApplications: 0, interviewRate: 0, offers: 0, rejections: 0, matchScoreAvg: 0 },
  statusDistribution: [],
  topSkills: [],
  upcomingActivities: [],
  total: 0,
};

export default function DashboardContent() {
  const { data: session, isPending } = authClient.useSession();
  const [data, setData] = useState<DashboardData>(EMPTY);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for the session to resolve before fetching — querying without an
    // email makes the backend count every user's applications (seeded demo data).
    if (isPending) return;
    let cancelled = false;
    const query = session?.user?.email ? `?email=${encodeURIComponent(session.user.email)}` : '';
    api
      .get<DashboardData>(`/api/dashboard${query}`)
      .then((d) => {
        if (!cancelled) setData(d);
      })
      .catch(() => {
        if (!cancelled) setData(EMPTY);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [session, isPending]);

  if (loading) {
    return <div className="glass-card p-12 rounded-2xl text-center text-[#c7c4d7]">Loading dashboard...</div>;
  }

  return (
    <>
      <MetricCards metrics={data.metrics} />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        <ApplicationTimeline />
        <StatusDistribution statuses={data.statusDistribution} total={data.total} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <TopSkills skills={data.topSkills} />
        <UpcomingActivities activities={data.upcomingActivities} />
      </div>
    </>
  );
}
