import type { Metadata } from 'next';
import React from 'react';
import AuthLeftSidebar from '@/components/auth/AuthLeftSidebar';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Sign Up | JobPilot AI',
  description: 'Create a new JobPilot AI account and start your AI-powered career journey.',
};

export default function SignupPage() {
  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row bg-[#0b1326] text-[#dae2fd]">
      <AuthLeftSidebar />
      <AuthForm mode="signup" />
    </main>
  );
}
