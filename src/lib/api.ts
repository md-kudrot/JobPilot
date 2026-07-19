// Central API client for the JobPilot Express backend.
// Base URL comes from NEXT_PUBLIC_API_URL (see .env), defaults to localhost:5000.

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:5000';

async function request<T>(path: string, options?: RequestInit): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });

  if (!res.ok) {
    let message = `Request failed (${res.status})`;
    try {
      const body = await res.json();
      message = body.message || body.error || message;
    } catch {
      // ignore non-json errors
    }
    throw new Error(message);
  }

  return res.json() as Promise<T>;
}

export const api = {
  get: <T>(path: string) => request<T>(path),
  post: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'POST', body: JSON.stringify(body) }),
  put: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PUT', body: JSON.stringify(body) }),
  patch: <T>(path: string, body: unknown) =>
    request<T>(path, { method: 'PATCH', body: JSON.stringify(body) }),
  delete: <T>(path: string) => request<T>(path, { method: 'DELETE' }),
};

/** Helper to fetch user profile by email */
export const getUserProfile = async (email: string) => {
  return request<{ profile: Profile }>(`/api/profile/${encodeURIComponent(email)}`);
};

/** Types shared with backend */
export interface Job {
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
  createdAt?: string;
  description?: string;
  jobType?: 'Remote' | 'Onsite' | 'Hybrid';
  website?: string;
  linkedin?: string;
  founded?: string;
  size?: string;
}

export interface JobForYou {
  _id: string;
  title: string;
  company: string;
  industry: string;
  matchPercent: number;
  matchTone: 'primary' | 'secondary';
  location: string;
  jobType: 'Remote' | 'Onsite' | 'Hybrid';
  salary: string;
  skills: string[];
  logo: string;
  logoAlt: string;
  createdAt?: string;
  matchScore: number;
  /** Skills shared with the user's profile — present when results are personalized. */
  matchedSkills?: string[];
}

export interface RelatedJob {
  _id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  match: string;
  logo: string;
  isNew?: boolean;
}

export interface Application {
  _id: string;
  userEmail: string;
  company: string;
  position: string;
  appliedDate: string;
  status: 'applied' | 'reviewing' | 'interview' | 'offer' | 'rejected';
  statusLabel: string;
  statusColor: string;
  logo: string;
}

export interface Pagination {
  currentPage: number;
  totalPages: number;
  total: number;
  limit: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface Profile {
  fullName?: string;
  email?: string;
  skills?: string[];
  experience?: string | number;
  jobType?: 'Remote' | 'Onsite' | 'Hybrid';
  role?: string;
  location?: string;
  bio?: string;
  resumeLink?: string;
}


