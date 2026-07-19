'use client';

import React, { useEffect, useState } from 'react';
import { ChevronRight, Calendar } from '@gravity-ui/icons';
import { api, type Application } from '@/lib/api';
import { authClient } from '@/lib/auth-client';

export default function ApplicationsList() {
  const { data: session } = authClient.useSession();
  const [applications, setApplications] = useState<Application[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const query = session?.user?.email ? `?email=${encodeURIComponent(session.user.email)}` : '';
    api
      .get<{ applications: Application[] }>(`/api/applications${query}`)
      .then((data) => setApplications(data.applications))
      .catch(() => setApplications([]))
      .finally(() => setLoading(false));
  }, [session]);

  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-6">Recent Applications</h4>
      {loading ? (
        <p className="text-[14px] text-[#c7c4d7]">Loading applications...</p>
      ) : applications.length === 0 ? (
        <p className="text-[14px] text-[#c7c4d7]">No applications yet. Start applying to jobs!</p>
      ) : (
        <div className="space-y-3">
          {applications.map((app) => (
            <div
              key={app._id}
              className="flex gap-4 items-center p-4 rounded-lg bg-[#ffffff]/5 border border-[#ffffff]/5 hover:bg-[#ffffff]/10 transition-all"
            >
              <div className="w-12 h-12 rounded-xl glass-stroke bg-[#ffffff]/5 flex items-center justify-center p-2 shrink-0">
                <img className="w-full h-full object-contain" alt={app.company} src={app.logo} />
              </div>
              <div className="flex-grow min-w-0">
                <h5 className="text-[14px] leading-[20px] tracking-[0em] font-semibold text-[#dae2fd]">{app.position}</h5>
                <p className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">{app.company}</p>
              </div>
              <div className="flex items-center gap-2 text-[12px] leading-[16px] tracking-[0.02em] text-[#c7c4d7] shrink-0">
                <Calendar className="w-4 h-4" />
                {app.appliedDate}
              </div>
              <span className={`px-3 py-1 rounded-full text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase ${app.statusColor} whitespace-nowrap`}>
                {app.statusLabel}
              </span>
              <button className="text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors shrink-0">
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
