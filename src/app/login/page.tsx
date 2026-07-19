import type { Metadata } from 'next';
import React, { Suspense } from 'react';
import AuthLeftSidebar from '@/components/auth/AuthLeftSidebar';
import AuthForm from '@/components/auth/AuthForm';

export const metadata: Metadata = {
  title: 'Login | JobPilot AI',
  description: 'Sign in to your JobPilot AI account and access your personalized job dashboard.',
};

export default function LoginPage() {
  return (
    <main className="w-full min-h-screen flex flex-col md:flex-row bg-[#0b1326] text-[#dae2fd]">
      <AuthLeftSidebar />
      <Suspense fallback={null}>
        <AuthForm mode="login" />
      </Suspense>
    </main>
  );
}
