export type ValidationError = {
  field: string;
  message: string;
};

export type ValidationResult = {
  valid: boolean;
  errors: ValidationError[];
};

export function validateRequired(
  data: Record<string, unknown>,
  fields: string[]
): ValidationResult {
  const errors: ValidationError[] = [];
  for (const field of fields) {
    const value = data[field];
    if (value === undefined || value === null || value === '') {
      errors.push({ field, message: `${field} is required` });
    }
  }
  return { valid: errors.length === 0, errors };
}

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateUrl(url: string): boolean {
  if (!url) return true; // optional
  return /^https?:\/\/.+/i.test(url);
}

export function validateEnum<T extends string>(
  value: unknown,
  allowed: readonly T[]
): value is T {
  return typeof value === 'string' && (allowed as readonly string[]).includes(value);
}

export function validateNumber(
  value: unknown,
  min?: number,
  max?: number
): boolean {
  if (typeof value !== 'number' || isNaN(value)) return false;
  if (min !== undefined && value < min) return false;
  if (max !== undefined && value > max) return false;
  return true;
}

export function validateArray(
  value: unknown,
  itemValidator?: (item: unknown) => boolean
): boolean {
  if (!Array.isArray(value)) return false;
  if (itemValidator && !value.every(itemValidator)) return false;
  return true;
}

export const JOB_TYPES = ['Remote', 'Onsite', 'Hybrid'] as const;
export const EMPLOYMENT_TYPES = ['Full-time', 'Part-time', 'Contract', 'Freelance', 'Internship'] as const;
export const APPLICATION_STATUSES = ['applied', 'reviewing', 'interview', 'offer', 'rejected'] as const;

export type JobType = (typeof JOB_TYPES)[number];
export type EmploymentType = (typeof EMPLOYMENT_TYPES)[number];
export type ApplicationStatus = (typeof APPLICATION_STATUSES)[number];
