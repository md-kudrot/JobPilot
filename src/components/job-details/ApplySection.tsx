'use client';

import React, { useState } from 'react';
import { Sparkles, Copy, ArrowRotateRight, Xmark, Envelope } from '@gravity-ui/icons';
import { api, type Job } from '@/lib/api';
import { authClient } from '@/lib/auth-client';
import { openEmailClient, generateEmailContent } from '@/lib/email-utils';

interface ApplySectionProps {
  job: Job | null;
}

export default function ApplySection({ job }: ApplySectionProps) {
  const { data: session } = authClient.useSession();
  const [emailVisible, setEmailVisible] = useState(false);
  const [applying, setApplying] = useState(false);
  const [applied, setApplied] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [generatedEmail, setGeneratedEmail] = useState<string>('');
  const [generating, setGenerating] = useState(false);
  const [editedEmail, setEditedEmail] = useState<string>('');

  const hasEmailAddress = job?.email || session?.user?.email;

  const handleApply = async () => {
    if (!job) return;
    if (!session?.user) {
      setError('Please log in to apply.');
      return;
    }
    setApplying(true);
    setError(null);
    try {
      await api.post('/api/applications', {
        userEmail: session.user.email,
        company: job.company,
        position: job.title,
        appliedDate: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        status: 'applied',
        statusLabel: 'Applied',
        statusColor: 'bg-[#c0c1ff]/20 text-[#c0c1ff]',
        logo: job.logo,
        jobId: job._id,
      });
      setApplied(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to apply');
    } finally {
      setApplying(false);
    }
  };

  const handleGenerateEmail = async () => {
    if (!job || !session?.user) return;
    
    setGenerating(true);
    setEmailVisible(true);
    setError(null);
    
    try {
      const response = await fetch('/api/generate-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          job,
          user: session.user,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate email');
      }

      const data = await response.json();
      setGeneratedEmail(data.email);
      setEditedEmail(data.email);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate email');
    } finally {
      setGenerating(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const handleOpenInEmail = () => {
    if (!job || !session?.user) return;
    
    const currentEmail = editedEmail || generatedEmail;
    openEmailClient(job, session.user, currentEmail || undefined);
  };

  const defaultEmail = `Subject: ${job?.title ?? 'Job'} Application - ${session?.user?.name ?? '[My Name]'}

Hi ${job?.company ?? 'Hiring'} Team,

I'm excited to apply for the ${job?.title ?? 'open'} role. With my background and skills, I'm confident I can contribute meaningfully to your team...`;

  const emailToDisplay = editedEmail || generatedEmail || defaultEmail;

  return (
    <div className="glass p-6 rounded-xl space-y-6 sticky top-[100px]">
      <button
        onClick={handleApply}
        disabled={applying || applied}
        className="w-full py-4 bg-[#c0c1ff] text-[#0d0096] text-[24px] leading-[32px] tracking-[-0.02em] font-semibold rounded-xl hover:scale-[1.02] active:scale-95 transition-all shadow-lg disabled:opacity-60 disabled:hover:scale-100"
      >
        {applied ? 'Applied ✓' : applying ? 'Applying...' : 'Apply Now'}
      </button>

      {error && <p className="text-[12px] text-[#ffb4ab] text-center">{error}</p>}

      <button
        onClick={handleGenerateEmail}
        disabled={generating}
        className="w-full py-3 glass border border-[#c0c1ff]/30 text-[#c0c1ff] text-[12px] leading-[16px] tracking-[0.02em] font-medium rounded-xl flex items-center justify-center gap-1 hover:bg-[#c0c1ff]/10 transition-all disabled:opacity-60"
      >
        <Sparkles className="w-4 h-4" />
        {generating ? 'Generating...' : 'Generate AI Email'}
      </button>

      {!hasEmailAddress && (
        <div className="text-[12px] text-[#ffb4ab] text-center">
          No email address available for this job. Please use the Apply Now button instead.
        </div>
      )}

      {emailVisible && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-500 space-y-3 pt-6 border-t border-[#ffffff]/10">
          <div className="flex items-center justify-between">
            <span className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#dae2fd]">AI Generated Draft</span>
            <button
              onClick={() => {
                setEmailVisible(false);
                setEditedEmail('');
              }}
              className="text-[#c7c4d7] hover:text-[#ffffff] transition-colors"
            >
              <Xmark className="w-[18px] h-[18px]" />
            </button>
          </div>

          <div className="relative">
            <textarea
              className="w-full h-48 bg-[#060e20] border border-[#ffffff]/10 rounded-lg p-3 text-[14px] leading-[20px] text-[#c7c4d7] focus:ring-1 focus:ring-[#c0c1ff] focus:border-[#c0c1ff] outline-none transition-all resize-none"
              value={emailToDisplay}
              onChange={(e) => setEditedEmail(e.target.value)}
              placeholder="Email draft will appear here..."
            ></textarea>

            <div className="absolute bottom-2 right-2 flex gap-1">
              <button
                onClick={() => copyToClipboard(emailToDisplay)}
                className="p-2 glass rounded hover:bg-[#ffffff]/10 transition-all text-[#c7c4d7]"
                title="Copy to clipboard"
              >
                <Copy className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleGenerateEmail}
                disabled={generating}
                className="p-2 glass rounded hover:bg-[#ffffff]/10 transition-all text-[#c7c4d7] disabled:opacity-60"
                title="Regenerate email"
              >
                <ArrowRotateRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleOpenInEmail}
              disabled={!hasEmailAddress}
              className="flex-1 py-2 bg-[#c0c1ff] text-[#0d0096] text-[12px] leading-[16px] tracking-[0.02em] font-medium rounded-lg flex items-center justify-center gap-1 hover:opacity-90 transition-all disabled:opacity-40 disabled:hover:opacity-40 disabled:cursor-not-allowed"
              title={!hasEmailAddress ? 'Email address not available' : 'Open in default email client'}
            >
              <Envelope className="w-4 h-4" />
              Open in Email
            </button>

            <button className="flex-1 py-2 bg-[#00a572] text-[#ffffff] text-[12px] leading-[16px] tracking-[0.02em] font-medium rounded-lg hover:opacity-90 transition-all">
              Send Email
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
