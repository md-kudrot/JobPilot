'use client';

import React, { useState } from 'react';
import {
  CircleInfo,
  FileText,
  SparklesFill,
  Plus,
  Xmark,
  ArrowRight,
  Bold,
  Italic,
  ListUl,
} from '@gravity-ui/icons';

export default function JobPostForm() {
  const [aiOptimization, setAiOptimization] = useState(true);
  const [skills, setSkills] = useState(['React', 'TypeScript', 'Tailwind CSS']);
  const [newSkill, setNewSkill] = useState('');
  const [sliders, setSliders] = useState({
    technical: 85,
    experience: 60,
    cultural: 45,
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleAddSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, newSkill]);
      setNewSkill('');
    }
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  const handleSliderChange = (key: 'technical' | 'experience' | 'cultural', value: number) => {
    setSliders({ ...sliders, [key]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section 1: Job Overview */}
        <section className="glass-card p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-1">
            <CircleInfo className="text-[#c0c1ff] w-5 h-5" />
            <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd]">
              Job Overview
            </h2>
          </div>

          {/* Job Title */}
          <div className="space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
              Job Title
            </label>
            <input
              className="w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 px-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
              placeholder="e.g. Senior Frontend Engineer"
              type="text"
            />
          </div>

          {/* Company */}
          <div className="space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
              Company
            </label>
            <input
              className="w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 px-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
              placeholder="Your Company Name"
              type="text"
            />
          </div>

          {/* Location & Remote */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div className="space-y-2">
              <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
                Location
              </label>
              <input
                className="w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 px-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                placeholder="City, Country"
                type="text"
              />
            </div>
            <div className="flex items-end">
              <label className="relative inline-flex items-center cursor-pointer">
                <input className="sr-only peer" type="checkbox" />
                <div className="w-11 h-6 bg-[#2d3449] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#c0c1ff]"></div>
                <span className="ms-3 text-[14px] leading-[20px] tracking-[0em] font-normal text-[#dae2fd]">
                  Remote Option
                </span>
              </label>
            </div>
          </div>

          {/* Job Type */}
          <div className="space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
              Job Type
            </label>
            <select className="w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 px-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all appearance-none">
              <option>Full-time</option>
              <option>Part-time</option>
              <option>Contract</option>
              <option>Freelance</option>
              <option>Internship</option>
            </select>
          </div>

          {/* Salary Range */}
          <div className="space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
              Salary Range (Annual)
            </label>
            <div className="flex items-center gap-2">
              <div className="relative flex-grow">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c7c4d7]">$</span>
                <input
                  className="w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 pl-8 pr-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                  placeholder="Min"
                  type="number"
                />
              </div>
              <span className="text-[#c7c4d7]">—</span>
              <div className="relative flex-grow">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#c7c4d7]">$</span>
                <input
                  className="w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 pl-8 pr-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                  placeholder="Max"
                  type="number"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Role Details */}
        <section className="glass-card p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-1">
            <FileText className="text-[#c0c1ff] w-5 h-5" />
            <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd]">
              Role Details
            </h2>
          </div>

          {/* Job Description */}
          <div className="space-y-2 flex-grow flex flex-col">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
              Job Description
            </label>
            <div className="flex-grow bg-[#060e20] border border-[#464554] rounded-[14px] overflow-hidden flex flex-col">
              <div className="p-1 bg-[#131b2e] border-b border-[#464554] flex gap-1">
                <button className="p-2 hover:bg-[#222a3d] rounded text-[#c7c4d7] transition-colors" type="button">
                  <Bold className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-[#222a3d] rounded text-[#c7c4d7] transition-colors" type="button">
                  <Italic className="w-4 h-4" />
                </button>
                <button className="p-2 hover:bg-[#222a3d] rounded text-[#c7c4d7] transition-colors" type="button">
                  <ListUl className="w-4 h-4" />
                </button>
                <div className="w-px h-6 bg-[#464554] mx-1"></div>
                <button className="p-2 hover:bg-[#222a3d] rounded text-[#c7c4d7] transition-colors" type="button">
                  <SparklesFill className="w-4 h-4" />
                </button>
              </div>
              <textarea
                className="w-full bg-transparent border-none text-[#dae2fd] p-4 focus:ring-0 resize-none min-h-[160px] flex-grow"
                placeholder="Describe the role and your company culture..."
              ></textarea>
            </div>
          </div>

          {/* Key Responsibilities */}
          <div className="space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
              Key Responsibilities
            </label>
            <div className="flex gap-2">
              <input
                className="w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 px-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all"
                placeholder="Add a responsibility..."
                type="text"
              />
              <button
                className="bg-[#222a3d] p-3 rounded-[14px] text-[#c0c1ff] hover:bg-[#c0c1ff]/10 transition-all"
                type="button"
              >
                <Plus className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Required Skills */}
          <div className="space-y-2">
            <label className="block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
              Required Skills
            </label>
            <div className="flex flex-wrap gap-2 p-3 bg-[#060e20] border border-[#464554] rounded-[14px] min-h-[48px]">
              {skills.map((skill, index) => (
                <span key={index} className="bg-[#c0c1ff]/10 text-[#c0c1ff] px-3 py-1 rounded-full text-[12px] font-medium flex items-center gap-1">
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className="text-[#c0c1ff] hover:text-[#dae2fd]"
                    type="button"
                  >
                    <Xmark className="w-4 h-4" />
                  </button>
                </span>
              ))}
              <input
                className="bg-transparent border-none focus:ring-0 text-[#dae2fd] font-medium p-0 ml-1 w-24"
                placeholder="Add skill..."
                type="text"
                value={newSkill}
                onChange={(e) => setNewSkill(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === 'Enter') {
                    e.preventDefault();
                    handleAddSkill();
                  }
                }}
              />
            </div>
          </div>
        </section>
      </div>

      {/* Section 3: AI Matching Criteria */}
      <section className="glass-card p-6 rounded-2xl bg-gradient-to-r from-[#c0c1ff]/5 via-[#4edea3]/5 to-[#c0c1ff]/5">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <SparklesFill className="text-[#4edea3] w-6 h-6" />
            <div>
              <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd]">
                AI Matching Criteria
              </h2>
              <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">
                Fine-tune how our AI identifies and ranks potential candidates.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#4edea3]">AI OPTIMIZATION ACTIVE</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                checked={aiOptimization}
                onChange={(e) => setAiOptimization(e.target.checked)}
                className="sr-only peer"
                type="checkbox"
              />
              <div className="w-11 h-6 bg-[#2d3449] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4edea3]"></div>
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          {/* Technical Skills Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
                Technical Skills
              </label>
              <span className="text-[#4edea3] font-bold">{sliders.technical}%</span>
            </div>
            <input
              className="w-full h-1.5 bg-[#2d3449] rounded-lg appearance-none cursor-pointer accent-[#4edea3]"
              max="100"
              min="0"
              onChange={(e) => handleSliderChange('technical', Number(e.target.value))}
              type="range"
              value={sliders.technical}
            />
          </div>

          {/* Experience Level Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
                Experience Level
              </label>
              <span className="text-[#4edea3] font-bold">{sliders.experience}%</span>
            </div>
            <input
              className="w-full h-1.5 bg-[#2d3449] rounded-lg appearance-none cursor-pointer accent-[#4edea3]"
              max="100"
              min="0"
              onChange={(e) => handleSliderChange('experience', Number(e.target.value))}
              type="range"
              value={sliders.experience}
            />
          </div>

          {/* Cultural Fit Slider */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <label className="text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase">
                Cultural Fit
              </label>
              <span className="text-[#4edea3] font-bold">{sliders.cultural}%</span>
            </div>
            <input
              className="w-full h-1.5 bg-[#2d3449] rounded-lg appearance-none cursor-pointer accent-[#4edea3]"
              max="100"
              min="0"
              onChange={(e) => handleSliderChange('cultural', Number(e.target.value))}
              type="range"
              value={sliders.cultural}
            />
          </div>
        </div>

        <div className="mt-6 p-3 bg-[#4edea3]/5 rounded-xl border border-[#4edea3]/10">
          <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#4edea3] flex items-center gap-2">
            <SparklesFill className="w-4 h-4" />
            AI Suggestion: Adding "Experience with CI/CD" would increase the relevance of matching senior
            candidates by 12%.
          </p>
        </div>
      </section>

      {/* Bottom Actions */}
      <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6">
        <button
          className="px-16 py-3 text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] border border-[#ffffff]/10 rounded-[14px] hover:bg-[#ffffff]/5 transition-all active:scale-95"
          type="button"
        >
          Save Draft
        </button>
        <button
          className="px-16 py-3 text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#ffffff] bg-[#6366F1] rounded-[14px] hover:shadow-lg hover:shadow-[#6366F1]/20 transition-all active:scale-95 flex items-center justify-center gap-2 disabled:opacity-50"
          disabled={isLoading}
          type="submit"
        >
          {isLoading ? (
            <>
              <div className="animate-spin">⟳</div>
              <span>Posting...</span>
            </>
          ) : (
            <>
              <span>Post Job</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
