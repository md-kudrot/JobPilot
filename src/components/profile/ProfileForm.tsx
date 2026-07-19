'use client';

import React, { useEffect, useState } from 'react';
import {
  Person,
  Briefcase,
  GeoPin,
  Envelope,
  Link as LinkIcon,
  Plus,
  Xmark,
  FloppyDisk,
} from '@gravity-ui/icons';
import { useSession } from '@/lib/auth-client';

type JobType = 'Remote' | 'Onsite' | 'Hybrid';

interface ProfileErrors {
  fullName?: string;
  email?: string;
  skills?: string;
  experience?: string;
  role?: string;
  location?: string;
  bio?: string;
  resumeLink?: string;
}

export default function ProfileForm() {
  const { data: session } = useSession();
  // Prefill identity from the logged-in user; falls back to empty for guests.
  const [fullName, setFullName] = useState(session?.user.name ?? '');
  const [email, setEmail] = useState(session?.user.email ?? '');
  const [skills, setSkills] = useState<string[]>([]);
  const [newSkill, setNewSkill] = useState('');
  const [experience, setExperience] = useState('');
  const [jobType, setJobType] = useState<JobType>('Remote');
  const [role, setRole] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [errors, setErrors] = useState<ProfileErrors>({});

  // useSession resolves after mount; backfill name/email once it arrives,
  // but don't clobber edits the user has already typed.
  useEffect(() => {
    if (session?.user.name) setFullName((prev) => prev || session.user.name);
    if (session?.user.email) setEmail((prev) => prev || session.user.email);
  }, [session]);

  const handleAddSkill = () => {
    const value = newSkill.trim();
    if (value && !skills.includes(value)) {
      setSkills([...skills, value]);
    }
    setNewSkill('');
  };

  const handleRemoveSkill = (index: number) => {
    setSkills(skills.filter((_, i) => i !== index));
  };

  // Client-side validation only — no submit/persist logic yet.
  const validate = (): boolean => {
    const next: ProfileErrors = {};

    if (!fullName.trim()) next.fullName = 'Full name is required.';

    if (!email.trim()) {
      next.email = 'Email is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      next.email = 'Enter a valid email address.';
    }

    if (skills.length === 0) next.skills = 'Add at least one skill.';

    if (!experience.trim()) {
      next.experience = 'Years of experience is required.';
    } else if (Number(experience) < 0 || Number(experience) > 60) {
      next.experience = 'Enter a value between 0 and 60.';
    }

    if (!role.trim()) next.role = 'Preferred role is required.';
    if (!location.trim()) next.location = 'Location is required.';
    if (!bio.trim()) next.bio = 'A short bio is required.';

    if (resumeLink.trim() && !/^https?:\/\/.+/i.test(resumeLink.trim())) {
      next.resumeLink = 'Enter a valid URL starting with http(s)://';
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const inputClass =
    'w-full bg-[#060e20] border border-[#464554] text-[#dae2fd] rounded-[14px] py-3 px-4 focus:outline-none focus:border-[#c0c1ff] focus:shadow-[0_0_0_4px_rgba(192,193,255,0.15)] transition-all placeholder:text-[#908fa0]/50';
  const labelClass =
    'block text-[12px] leading-[16px] tracking-[0.05em] font-bold text-[#c7c4d7] uppercase';
  const errorClass = 'text-[12px] leading-[16px] tracking-[0em] font-medium text-[#ff8a8a]';

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        validate();
      }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Section 1: Basic Info */}
        <section className="glass-card p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-1">
            <Person className="text-[#c0c1ff] w-5 h-5" />
            <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd]">
              Basic Info
            </h2>
          </div>

          {/* Full Name */}
          <div className="space-y-2">
            <label className={labelClass} htmlFor="fullName">
              Full Name
            </label>
            <input
              id="fullName"
              className={inputClass}
              placeholder="e.g. Jane Doe"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className={errorClass}>{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className={labelClass} htmlFor="email">
              Email
            </label>
            <div className="relative">
              <Envelope className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] w-5 h-5" />
              <input
                id="email"
                className={`${inputClass} pl-12`}
                placeholder="name@company.com"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            {errors.email && <p className={errorClass}>{errors.email}</p>}
          </div>

          {/* Experience & Job Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className={labelClass} htmlFor="experience">
                Experience (years)
              </label>
              <input
                id="experience"
                className={inputClass}
                placeholder="e.g. 5"
                type="number"
                min={0}
                max={60}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
              {errors.experience && <p className={errorClass}>{errors.experience}</p>}
            </div>
            <div className="space-y-2">
              <label className={labelClass} htmlFor="jobType">
                Preferred Job Type
              </label>
              <select
                id="jobType"
                className={`${inputClass} appearance-none`}
                value={jobType}
                onChange={(e) => setJobType(e.target.value as JobType)}
              >
                <option value="Remote">Remote</option>
                <option value="Onsite">Onsite</option>
                <option value="Hybrid">Hybrid</option>
              </select>
            </div>
          </div>

          {/* Preferred Role */}
          <div className="space-y-2">
            <label className={labelClass} htmlFor="role">
              Preferred Role / Title
            </label>
            <div className="relative">
              <Briefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] w-5 h-5" />
              <input
                id="role"
                className={`${inputClass} pl-12`}
                placeholder="e.g. Senior Frontend Engineer"
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              />
            </div>
            {errors.role && <p className={errorClass}>{errors.role}</p>}
          </div>

          {/* Location */}
          <div className="space-y-2">
            <label className={labelClass} htmlFor="location">
              Location
            </label>
            <div className="relative">
              <GeoPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] w-5 h-5" />
              <input
                id="location"
                className={`${inputClass} pl-12`}
                placeholder="City, Country"
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            {errors.location && <p className={errorClass}>{errors.location}</p>}
          </div>
        </section>

        {/* Section 2: Skills & About */}
        <section className="glass-card p-6 rounded-2xl flex flex-col gap-6">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="text-[#c0c1ff] w-5 h-5" />
            <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd]">
              Skills &amp; About
            </h2>
          </div>

          {/* Skills (multi-tag) */}
          <div className="space-y-2">
            <label className={labelClass}>Skills</label>
            <div className="flex flex-wrap gap-2 p-3 bg-[#060e20] border border-[#464554] rounded-[14px] min-h-[48px]">
              {skills.map((skill, index) => (
                <span
                  key={skill}
                  className="bg-[#c0c1ff]/10 text-[#c0c1ff] px-3 py-1 rounded-full text-[12px] font-medium flex items-center gap-1"
                >
                  {skill}
                  <button
                    onClick={() => handleRemoveSkill(index)}
                    className="text-[#c0c1ff] hover:text-[#dae2fd]"
                    type="button"
                    aria-label={`Remove ${skill}`}
                  >
                    <Xmark className="w-4 h-4" />
                  </button>
                </span>
              ))}
              <div className="flex items-center gap-1 flex-grow min-w-[120px]">
                <input
                  className="bg-transparent border-none focus:ring-0 focus:outline-none text-[#dae2fd] font-medium p-0 ml-1 flex-grow"
                  placeholder="Add a skill..."
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleAddSkill();
                    }
                  }}
                />
                <button
                  className="bg-[#222a3d] p-2 rounded-lg text-[#c0c1ff] hover:bg-[#c0c1ff]/10 transition-all shrink-0"
                  onClick={handleAddSkill}
                  type="button"
                  aria-label="Add skill"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>
            {errors.skills && <p className={errorClass}>{errors.skills}</p>}
          </div>

          {/* Short Bio */}
          <div className="space-y-2 flex-grow flex flex-col">
            <label className={labelClass} htmlFor="bio">
              Short Bio
            </label>
            <textarea
              id="bio"
              className={`${inputClass} resize-none min-h-[120px] flex-grow`}
              placeholder="Tell us about your background, strengths, and what you're looking for..."
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
            {errors.bio && <p className={errorClass}>{errors.bio}</p>}
          </div>

          {/* Resume Link (optional) */}
          <div className="space-y-2">
            <label className={labelClass} htmlFor="resumeLink">
              Resume Link <span className="text-[#908fa0] normal-case font-medium">(optional)</span>
            </label>
            <div className="relative">
              <LinkIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#c7c4d7] w-5 h-5" />
              <input
                id="resumeLink"
                className={`${inputClass} pl-12`}
                placeholder="https://..."
                type="url"
                value={resumeLink}
                onChange={(e) => setResumeLink(e.target.value)}
              />
            </div>
            {errors.resumeLink && <p className={errorClass}>{errors.resumeLink}</p>}
          </div>
        </section>
      </div>

      {/* Bottom Actions */}
      <div className="flex justify-end pt-2">
        <button
          className="px-16 py-3 text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#ffffff] bg-[#6366F1] rounded-[14px] flex items-center justify-center gap-2 opacity-50 cursor-not-allowed"
          type="submit"
          disabled
        >
          <FloppyDisk className="w-4 h-4" />
          <span>Save Profile</span>
        </button>
      </div>
    </form>
  );
}
