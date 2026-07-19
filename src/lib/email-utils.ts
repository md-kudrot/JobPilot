/**
 * Generates a mailto link with proper URL encoding
 * 
 * @param to - Recipient email address
 * @param subject - Email subject line
 * @param body - Email body content
 * @returns Complete mailto URL string
 */
export function generateMailtoLink({
  to,
  subject,
  body,
}: {
  to: string;
  subject: string;
  body: string;
}): string {
  if (!to) return '';

  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);
  
  return `mailto:${to}?subject=${encodedSubject}&body=${encodedBody}`;
}

/**
 * Generates a complete email draft for a job application
 * 
 * @param job - The job being applied to
 * @param user - The user's profile data
 * @param customBody - Optional custom body (if user has edited the email)
 * @returns Object containing subject, body, and recipient email
 */
export function generateEmailContent(
  job: {
    title: string;
    company: string;
    location?: string;
    jobType?: string;
    description?: string;
    skills?: string[];
    email?: string;
    hiringManager?: string;
  },
  user: {
    name?: string;
    email?: string;
    role?: string;
    skills?: string[];
    experience?: number | string;
    resumeLink?: string;
    github?: string;
    portfolio?: string;
    linkedin?: string;
    bio?: string;
    location?: string;
  },
  customBody?: string
): { to: string; subject: string; body: string } {
  const companyName = job.company || '[Company Name]';
  const jobTitle = job.title || '[Job Title]';
  const hiringManager = job.hiringManager || 'Hiring Manager';
  const userName = user.name || '[Your Name]';
  const userEmail = user.email || '';
  const userRole = user.role || 'Not specified';
  const userExperience = user.experience ? `${user.experience} years` : 'Not specified';
  const userSkills = user.skills?.join(', ') || 'Not specified';
  const resumeLink = user.resumeLink || '';
  const github = user.github || '';
  const portfolio = user.portfolio || '';
  const linkedin = user.linkedin || '';

  // If custom body provided (user edited), use it
  if (customBody && customBody.trim()) {
    return {
      to: job.email || userEmail,
      subject: `Application for ${jobTitle} Position - ${userName}`,
      body: customBody,
    };
  }

  // Generate default email template
  const subject = `Application for ${jobTitle} Position - ${userName}`;

  const body = `Dear ${hiringManager},

I am writing to express my strong interest in the ${jobTitle} position at ${companyName}. With ${userExperience} of experience as a ${userRole}, I am confident I can make a valuable contribution to your team.

My background includes expertise in ${userSkills}. I am particularly drawn to ${companyName} because of ${job.description ? 'your work in ' + job.description.substring(0, 100) + '...' : 'your innovative approach and industry leadership'}.

${resumeLink ? `Resume: ${resumeLink}` : ''}
${github ? `GitHub: ${github}` : ''}
${portfolio ? `Portfolio: ${portfolio}` : ''}
${linkedin ? `LinkedIn: ${linkedin}` : ''}

I would welcome the opportunity to discuss how my skills and experience align with your needs. Thank you for your time and consideration.

Best regards,
${userName}
${userEmail}
${user.location ? `Location: ${user.location}` : ''}`;

  return {
    to: job.email || userEmail,
    subject,
    body,
  };
}

/**
 * Opens the default email client with a pre-filled application email
 * 
 * @param job - The job being applied to
 * @param user - The user's profile data
 * @param customBody - Optional custom body (if user has edited the email)
 */
export function openEmailClient(
  job: {
    title: string;
    company: string;
    location?: string;
    jobType?: string;
    description?: string;
    skills?: string[];
    email?: string;
    hiringManager?: string;
  },
  user: {
    name?: string;
    email?: string;
    role?: string;
    skills?: string[];
    experience?: number | string;
    resumeLink?: string;
    github?: string;
    portfolio?: string;
    linkedin?: string;
    bio?: string;
    location?: string;
  },
  customBody?: string
): void {
  const { to, subject, body } = generateEmailContent(job, user, customBody);
  
  if (!to) {
    console.warn('No recipient email address available');
    return;
  }

  const mailtoLink = generateMailtoLink({ to, subject, body });
  
  // Use window.location.href for better cross-browser support
  window.location.href = mailtoLink;
}