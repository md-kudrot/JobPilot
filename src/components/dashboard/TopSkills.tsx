import React from 'react';

export interface SkillItem {
  label: string;
  percent: number;
}

export default function TopSkills({ skills }: { skills: SkillItem[] }) {
  return (
    <div className="glass-card rounded-xl p-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
      <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-10">Top Viewed Skills</h4>
      <div className="space-y-6">
        {skills.length === 0 ? (
          <p className="text-[12px] text-[#c7c4d7]">No skill data yet.</p>
        ) : (
          skills.map((skill) => (
            <div key={skill.label}>
              <div className="flex justify-between mb-1">
                <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">{skill.label}</span>
                <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium">{skill.percent}%</span>
              </div>
              <div className="w-full bg-[#2d3449] h-1 rounded-full overflow-hidden">
                <div className="h-full bg-[#c0c1ff] rounded-full" style={{ width: `${skill.percent}%` }}></div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
