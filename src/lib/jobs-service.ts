// Service for filtering jobs based on user profile preferences

// Normalize skill names for matching (e.g., "reactjs" -> "react")
const normalizeSkill = (skill: string): string => {
  let normalized = skill.toLowerCase().replace(/[^a-z0-9]/g, '');
  // Remove trailing "js" for common frontend frameworks (reactjs -> react)
  if (normalized.length > 2 && normalized.endsWith('js')) {
    normalized = normalized.slice(0, -2);
  }
  return normalized;
};

// Compute match score between a job and user profile
interface Job {
  _id: string;
  title: string;
  company: string;
  industry: string;
  location: string;
  matchPercent: number;
  matchTone: 'primary' | 'secondary';
  salary: string;
  skills: string[];
  logo: string;
  logoAlt: string;
  jobType?: 'Remote' | 'Onsite' | 'Hybrid';
  description?: string;
}

interface UserProfile {
  skills?: string[];
  jobType?: 'Remote' | 'Onsite' | 'Hybrid';
  role?: string;
  location?: string;
}

export interface MatchResult extends Job {
  matchScore: number;
  matchedSkills?: string[];
}

export function filterJobsByProfile(jobs: Job[], profile: UserProfile): MatchResult[] {
  const userSkills = (profile.skills || []).map(normalizeSkill);

  const scoredJobs = jobs.map((job) => {
    // Skills overlap - highest priority (60 points)
    const matchedSkills = (job.skills || []).filter((skill) => {
      return userSkills.includes(normalizeSkill(skill));
    });
    const skillScore = job.skills?.length
      ? (matchedSkills.length / job.skills.length) * 60
      : 0;

    // Preferred jobType match (15 points)
    const typeScore =
      profile.jobType && job.jobType === profile.jobType ? 15 : 0;

    // Role/title word matches (15 points)
    let roleScore = 0;
    if (profile.role) {
      const roleWords = profile.role.toLowerCase().split(/\s+/).filter((w) => w.length > 2);
      const title = (job.title || '').toLowerCase();
      const hits = roleWords.filter((w) => title.includes(w));
      roleScore = roleWords.length ? (hits.length / roleWords.length) * 15 : 0;
    }

    // Location match (10 points) - Remote jobs are flexible with location
    let locationScore = 0;
    if (job.jobType === 'Remote') {
      locationScore = 10;
    } else if (profile.location) {
      const userLoc = profile.location.toLowerCase();
      const jobLoc = (job.location || '').toLowerCase();
      if (jobLoc.includes(userLoc) || userLoc.includes(jobLoc)) {
        locationScore = 10;
      }
    }

    return {
      ...job,
      matchScore: Math.min(100, Math.round(skillScore + typeScore + roleScore + locationScore)),
      matchedSkills: matchedSkills.length ? matchedSkills : undefined,
    };
  });

  // Sort by match score (descending)
  scoredJobs.sort((a, b) => b.matchScore - a.matchScore);
  return scoredJobs;
}

// Get populated jobs with profile-based matching
export async function getPersonalizedJobsForUser(email: string): Promise<{ jobs: MatchResult[]; personalized: boolean }> {
  // This is a client-side utility. The actual API call should be made in the page component.
  // This function is provided for reuse across components if needed.
  throw new Error('This should be called from the page component with API integration');
}