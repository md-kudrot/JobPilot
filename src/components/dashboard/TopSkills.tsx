import React from 'react';

const SKILLS = [
  { label: 'Machine Learning', percent: 92 },
  { label: 'Product Management', percent: 78 },
  { label: 'Python/SQL', percent: 65 },
  { label: 'Data Visualization', percent: 54 },
];

export default function TopSkills() {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-10">Top Viewed Skills</h4>
      <div className="space-y-6">
        {SKILLS.map((skill) => (
          <div key={skill.label}>
            <div className="flex justify-between mb-1">
              <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">{skill.label}</span>
              <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">{skill.percent}%</span>
            </div>
            <div className="w-full bg-[#2d3449] h-1 rounded-full overflow-hidden">
              <div className="h-full bg-[#c0c1ff] rounded-full" style={{ width: `${skill.percent}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
