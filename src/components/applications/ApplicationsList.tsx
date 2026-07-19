import React from 'react';
import { ChevronRight, Calendar } from '@gravity-ui/icons';

interface Application {
  id: number;
  company: string;
  position: string;
  appliedDate: string;
  status: 'applied' | 'reviewing' | 'interview' | 'offer' | 'rejected';
  statusLabel: string;
  statusColor: string;
  logo: string;
}

const APPLICATIONS: Application[] = [
  {
    id: 1,
    company: 'Stripe',
    position: 'Senior Product Designer',
    appliedDate: 'Oct 15, 2024',
    status: 'interview',
    statusLabel: 'Interview Scheduled',
    statusColor: 'bg-[#ffb783]/20 text-[#ffb783]',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6OAU4a0_vegxis-PoxxKvoDaatVLTmq7i5jFMTsKIiiolncURX-c5wsQBjY6Y2aKrez1F2_2-9dXqtqfZ-pYy7WEfQhYPY3C3kDAOGH_jRn8leZ8nVIKiVympXEQdbbkKZuzvKm1prd_wGX-oWwP3ulhLrXh-p3IcphlGualD9SujM6o0KOXrN25eV4TnKnQmLIXna2cZ4VarjHRggzs8RNBGFPjSe3n3h65eAC614oF-uu-Eowngfw',
  },
  {
    id: 2,
    company: 'Linear',
    position: 'Lead Frontend Engineer',
    appliedDate: 'Oct 12, 2024',
    status: 'reviewing',
    statusLabel: 'Under Review',
    statusColor: 'bg-[#4edea3]/20 text-[#4edea3]',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0ulDmNoVUz29ATezpnd00OOmXNad0dpGxK2G--E1TlMrO0OAOovj7tIdEUrJTgER5lYcCXw5oyYkOnOA_w2W_roDTz0FEpU72fBYh3FF-9CApU9kSwQMQtMW2jo5z-ap-Sz6bo5r_TzWCKIutr63EQcx3y8LQ-aflmSfvOCRjQJ-kHK4Hn2gN0qqqzXTZ1PR0BUFswYVGjWDkA7LkDwLlrgNf_gMbQPqYm8fWTZGp1HcdLsbTq0kb-w',
  },
  {
    id: 3,
    company: 'Anthropic',
    position: 'AI Research Scientist',
    appliedDate: 'Oct 8, 2024',
    status: 'offer',
    statusLabel: 'Offer Received',
    statusColor: 'bg-[#c0c1ff]/20 text-[#c0c1ff]',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByA2-0N1SjkZYjpe-76jr1wehjiVLEt7hmmVGRWce6-p1LeNHiH3z2EC6XzRdeg3BTZBQ-bJxx-pHMJTLFMUzhHXYsxU1xjnGi-M3sBJOgDcKttU2dcrRmq8LLJnPDBvAxE03zX3XxxsSDbAon1WRhVUC_EB9jmhnF9RlfPIcbWvz6MgiubtdlWFodvBy9uMPNahz5vOifoAg3fK-ihXHNTP_71KbmRTUXDISMQhhpJdQmL1iUytjMGw',
  },
  {
    id: 4,
    company: 'Vercel',
    position: 'Full Stack Developer',
    appliedDate: 'Oct 5, 2024',
    status: 'applied',
    statusLabel: 'Applied',
    statusColor: 'bg-[#c0c1ff]/20 text-[#c0c1ff]',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuYSED1787Wk9Kmw6-pQTIFPN1k4zXbH4ZXx5se7YLnNHjYrZAst7IMfktsXXAiP1gM2ZpyOcSkkbzzTysiXYxLpA_LlRpdGWgs1c_ybvmOh1NPfgyeD1jG0vt9TRqriHnX1Tc1TDwLnffgqFOOGo78_HhzD9kCT9kCvXjEI9y8IeG2XknMLojjj-g9x2A2zG8tA8TIcQXG9j92XWLJbjGoFEaYw2hPLowtZ6lYe7S9CiyuLGvFb5naw',
  },
  {
    id: 5,
    company: 'Notion',
    position: 'Marketing Director',
    appliedDate: 'Sep 28, 2024',
    status: 'rejected',
    statusLabel: 'Rejected',
    statusColor: 'bg-[#ffb4ab]/20 text-[#ffb4ab]',
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJh63U-wBQzV-2OqDso6guhvN8ALiCXazFxbX2xkixtS-xvNf7w4AEgezrymKvpLRfwNibHS8PGwUXDnJLFVFap3oj0jUyUdMfPk_RHBttpOYfKIoBl0_yDhRDgVIXSBBv_DS2E0vOXkKS2BfJ29Z7rgxkN3uVmYf6AudeuhCi1DAGjb3XgP5Wu1tACdWbcN7Twj1FOk7nQcYBuPPBPwzKNrpLaFN0uM_E-2uL_Bk6frU92S5iQ49_2Q',
  },
];

export default function ApplicationsList() {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-6">Recent Applications</h4>
      <div className="space-y-3">
        {APPLICATIONS.map((app) => (
          <div
            key={app.id}
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
    </div>
  );
}
