import React from 'react';
import JobCard, { type Job } from './JobCard';
import JobCardSkeleton from './JobCardSkeleton';

const JOBS: Job[] = [
  {
    id: 1,
    title: 'Senior Product Designer',
    company: 'Stripe',
    industry: 'Fintech',
    location: 'Remote',
    matchPercent: 98,
    matchTone: 'secondary',
    salary: '$140k - $180k',
    skills: ['Figma', 'Design Systems', 'UX Strategy'],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA6OAU4a0_vegxis-PoxxKvoDaatVLTmq7i5jFMTsKIiiolncURX-c5wsQBjY6Y2aKrez1F2_2-9dXqtqfZ-pYy7WEfQhYPY3C3kDAOGH_jRn8leZ8nVIKiVympXEQdbbkKZuzvKm1prd_wGX-oWwP3ulhLrXh-p3IcphlGualD9SujM6o0KOXrN25eV4TnKnQmLIXna2cZ4VarjHRggzs8RNBGFPjSe3n3h65eAC614oF-uu-Eowngfw',
    logoAlt: 'Stripe company logo',
  },
  {
    id: 2,
    title: 'Lead Frontend Engineer',
    company: 'Linear',
    industry: 'Product Tools',
    location: 'Hybrid',
    matchPercent: 92,
    matchTone: 'primary',
    salary: '$160k - $210k',
    skills: ['React', 'TypeScript', 'WASM'],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0ulDmNoVUz29ATezpnd00OOmXNad0dpGxK2G--E1TlMrO0OAOovj7tIdEUrJTgER5lYcCXw5oyYkOnOA_w2W_roDTz0FEpU72fBYh3FF-9CApU9kSwQMQtMW2jo5z-ap-Sz6bo5r_TzWCKIutr63EQcx3y8LQ-aflmSfvOCRjQJ-kHK4Hn2gN0qqqzXTZ1PR0BUFswYVGjWDkA7LkDwLlrgNf_gMbQPqYm8fWTZGp1HcdLsbTq0kb-w',
    logoAlt: 'Linear company logo',
  },
  {
    id: 3,
    title: 'AI Research Scientist',
    company: 'Anthropic',
    industry: 'AI Research',
    location: 'On-site',
    matchPercent: 95,
    matchTone: 'secondary',
    salary: '$200k - $280k',
    skills: ['Python', 'PyTorch', 'LLMs'],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByA2-0N1SjkZYjpe-76jr1wehjiVLEt7hmmVGRWce6-p1LeNHiH3z2EC6XzRdeg3BTZBQ-bJxx-pHMJTLFMUzhHXYsxU1xjnGi-M3sBJOgDcKttU2dcrRmq8LLJnPDBvAxE03zX3XxxsSDbAon1WRhVUC_EB9jmhnF9RlfPIcbWvz6MgiubtdlWFodvBy9uMPNahz5vOifoAg3fK-ihXHNTP_71KbmRTUXDISMQhhpJdQmL1iUytjMGw',
    logoAlt: 'Anthropic company logo',
  },
  {
    id: 4,
    title: 'Full Stack Developer',
    company: 'Vercel',
    industry: 'Infrastructure',
    location: 'Remote',
    matchPercent: 88,
    matchTone: 'primary',
    salary: '$150k - $190k',
    skills: ['Next.js', 'Edge', 'Rust'],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuYSED1787Wk9Kmw6-pQTIFPN1k4zXbH4ZXx5se7YLnNHjYrZAst7IMfktsXXAiP1gM2ZpyOcSkkbzzTysiXYxLpA_LlRpdGWgs1c_ybvmOh1NPfgyeD1jG0vt9TRqriHnX1Tc1TDwLnffgqFOOGo78_HhzD9kCT9kCvXjEI9y8IeG2XknMLojjj-g9x2A2zG8tA8TIcQXG9j92XWLJbjGoFEaYw2hPLowtZ6lYe7S9CiyuLGvFb5naw',
    logoAlt: 'Vercel company logo',
  },
  {
    id: 6,
    title: 'Marketing Director',
    company: 'Notion',
    industry: 'Productivity',
    location: 'Berlin',
    matchPercent: 94,
    matchTone: 'secondary',
    salary: '$130k - $170k',
    skills: ['Growth', 'SaaS'],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAJh63U-wBQzV-2OqDso6guhvN8ALiCXazFxbX2xkixtS-xvNf7w4AEgezrymKvpLRfwNibHS8PGwUXDnJLFVFap3oj0jUyUdMfPk_RHBttpOYfKIoBl0_yDhRDgVIXSBBv_DS2E0vOXkKS2BfJ29Z7rgxkN3uVmYf6AudeuhCi1DAGjb3XgP5Wu1tACdWbcN7Twj1FOk7nQcYBuPPBPwzKNrpLaFN0uM_E-2uL_Bk6frU92S5iQ49_2Q',
    logoAlt: 'Notion company logo',
  },
  {
    id: 7,
    title: 'Backend Architect',
    company: 'Cloudflare',
    industry: 'Security',
    location: 'NYC',
    matchPercent: 85,
    matchTone: 'primary',
    salary: '$180k - $230k',
    skills: ['Go', 'Distributed Systems'],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBMD528-677y2a1xlDfWtCa272Z3sYvGtTkPnBeF2kalrMp-WBCb43SRevT_hg8m2EK7KNsT-51toQ65_8ibiNbbkl6if22OyA0N6eEokzs5v5FL6SBcadxmNJ0RY-Z6w3x7eHml4ZEKZgDgI_QtdLoHkgUogcJUJJpombU1W-gkBm3KNrpjvjG0-fxy0-hD6ttS88sWxtowHhp3UA9MQPmo6sdvj8ZCN03H1Jo9KMNgE5j7G1X6dtHlw',
    logoAlt: 'Cloudflare company logo',
  },
  {
    id: 8,
    title: 'UX Researcher',
    company: 'Airbnb',
    industry: 'Travel',
    location: 'Remote',
    matchPercent: 91,
    matchTone: 'secondary',
    salary: '$120k - $160k',
    skills: ['Qualitative', 'Strategy'],
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAK2OXBzpN8UGeJ-TTnauCf3rIXY8RrBeF_ZtbKo2kV1k4y8Vi2vRVsRS4g_Bn3dPdEGDFPR97fPV239MlKnBJ3lCXWEYZ__EgF0aV7lklwZkegFsuHc31ROjr2P02n_hNZkMhrKj0wqGbIIT94aVagrjUzSFVdRom-8uCm8Xa6pE2VWKLnB4H6E9OyZUYOrIUXyotOV796yT4EgBbteXPH_vMV8E43goa-e8qLoGYrpYliPcZ5HEFZug',
    logoAlt: 'Airbnb company logo',
  },
];

export default function JobsGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {JOBS.slice(0, 4).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
      <JobCardSkeleton />
      {JOBS.slice(4).map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
}
