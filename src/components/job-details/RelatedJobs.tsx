import React from 'react';
import Link from 'next/link';

interface RelatedJob {
  id: number;
  title: string;
  company: string;
  location: string;
  salary: string;
  match: string;
  logo: string;
  isNew?: boolean;
}

const RELATED_JOBS: RelatedJob[] = [
  {
    id: 1,
    title: 'UX Architect',
    company: 'Streamline.io',
    location: 'New York (Hybrid)',
    salary: '$160k',
    match: '96% Match',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOr7Hl370ijvr7naS8xH0D_-WWwglpXIuJe9ARRCvkBhtQoettubClhOoNXP6AV5_Okoa-eQ6IY1vjk8zIabsW0LK62Dk39nczVRohKNqC6saokWYKIh8p2anBgmufHhW6ZJQWswiXtPEywGf6at18wOZBmjJgjfi4lq_ydO6-s79-ziVjEM_qr7XaGMT9RIrZMf-nQSaLTYonrm5ndSNzYiKOiJ_YGlLyYUDilgshGqN_GkdU3_bODA',
  },
  {
    id: 2,
    title: 'Design Systems Lead',
    company: 'Volt.ai',
    location: 'Remote',
    salary: '$175k',
    match: '89% Match',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDqwfi9vydzCHLBEvj7tKv0o3I3kF7g28ncmX25V8Pfb_-vqpvHk43f4s57Q2C7-Fhf6iIBeIRo389ZO3udnl6jh4XjoIS9cMZNfnC6vqje9HS4EoB_-oyZFWWe2OEq-3sGf_ZnQaPdej1ex9ee6sjOMDzRktT9IwEFB-Jr-8Cgg9VP1cOyDeqA-yEegATW9rb-p0S3cUR5K3O-wKU8k_YJSuk1UVeadGWoFHPOJCGenvadxaXxIs524A',
  },
  {
    id: 3,
    title: 'Senior Product Designer',
    company: 'HealthFlow',
    location: 'London (Remote)',
    salary: '£90k',
    match: '85% Match',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB9De5BUGdQ02rMmABaQzqS5Ed4BR6p5vBZET2RFUWMXPpXvfi19uBl8-e4OZDiDx2rLe1lRpkCnrNYQch7d_65p5Q67ksX4EtL6GTd5MxYGqY2bbNXo9V0nT6a3t-CyVdRrBXLG3wG6zlsaWRoUtD-EvCuwVbZzoNSSBXvkc9jGqUaQynTGz1xMRlSyPl23Mq7bkSrtt_s6G6ASPziBJLIPOfpguko2OWx69BwrdWha7JIfFHXoVyrBg',
  },
  {
    id: 4,
    title: 'Principal UI/UX',
    company: 'Cognito AI',
    location: 'San Francisco',
    salary: '$210k',
    match: 'New',
    isNew: true,
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuANaphl8MoVu-soZoLr7qL2rtNMyvnLJdDumAQjqNWlC5oRHHtRZROLGpZJHqkl7mySHUodw4y0jXudjZPtE-xLZAs_IJ2oGkc_oQLEsyGiubfruT2_bnoY81tIyTHZXbJFHwrsueuUG6jFHpqfSZWj_642htXrQ5ED0HUkSU0VQihIvJWHehw_tOJrd_oMwYZ7HEex9rFOqHCq-v3IacbvorLsCcShiZa_9txT5xY87yUfDGjTVw1cxQ',
  },
];

export default function RelatedJobs() {
  return (
    <section className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd]">
          Related Opportunities
        </h2>
        <a
          className="text-[#c0c1ff] text-[12px] leading-[16px] tracking-[0.02em] font-medium hover:underline"
          href="#"
        >
          View all jobs
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {RELATED_JOBS.map((job) => (
          <Link key={job.id} href={`/jobs/${job.id}`}>
            <div className="glass p-3 rounded-xl hover:bg-[#ffffff]/5 transition-all group cursor-pointer">
            <div className="flex items-start justify-between mb-3">
              <div className="w-10 h-10 rounded glass flex items-center justify-center p-2">
                <img className="w-full h-full object-contain" alt={job.company} src={job.logo} />
              </div>
              <span
                className={`px-2 py-1 rounded text-[10px] font-bold ${
                  job.isNew
                    ? 'bg-[#c0c1ff]/10 text-[#c0c1ff]'
                    : 'bg-[#4edea3]/10 text-[#4edea3]'
                }`}
              >
                {job.match}
              </span>
            </div>
            <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold text-[#dae2fd] group-hover:text-[#c0c1ff] transition-colors">
              {job.title}
            </h3>
            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">{job.company}</p>
            <div className="mt-6 flex justify-between items-center text-[#c7c4d7] text-[12px] leading-[16px] tracking-[0.02em] font-medium">
              <span>{job.location}</span>
              <span>{job.salary}</span>
            </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
