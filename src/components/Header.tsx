"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { Moon } from '@gravity-ui/icons';
import { useSession, signOut } from '@/lib/auth-client';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Dashboard', href: '/dashboard', auth: true },
  { label: 'Explore Jobs', href: '/jobs' },
  { label: 'My Applications', href: '/my-applications', auth: true },
  { label: 'Post Job', href: '/post-job' },
];

export default function Header({ active = 'Home' }: { active?: string }) {
  const router = useRouter();
  const { data: session, isPending } = useSession();

  const handleSignOut = async () => {
    await signOut();
    router.push('/login');
    router.refresh();
  };

  // Logged-out visitors only see public routes; auth-only routes are hidden.
  const navItems = session ? NAV_ITEMS : NAV_ITEMS.filter((item) => !item.auth);

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[80%] z-50 bg-[#0b1326]/80 backdrop-blur-md border-b border-[#ffffff]/10 shadow-sm">
      <nav className="flex justify-between items-center px-10 py-3 w-full h-20">
        <div className="flex items-center gap-6">
          <div className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold text-[#c0c1ff] tracking-tight">JobPilot AI</div>
          <div className="hidden md:flex items-center gap-6 ml-16">
            {navItems.map((item) => {
              // Post Job is visible to everyone but requires login to use.
              const handleClick =
                item.href === '/post-job' && !session
                  ? (e: React.MouseEvent) => {
                      e.preventDefault();
                      router.push('/login?redirect=/post-job');
                    }
                  : undefined;
              return item.label === active ? (
                <a key={item.label} onClick={handleClick} className="text-[12px] leading-[16px] tracking-[0.02em] font-bold text-[#c0c1ff] border-b-2 border-[#c0c1ff] py-1" href={item.href}>{item.label}</a>
              ) : (
                <a key={item.label} onClick={handleClick} className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors py-1" href={item.href}>{item.label}</a>
              );
            })}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-[#ffffff]/5 rounded-full transition-all duration-200 text-[#c7c4d7]">
            <Moon className="w-6 h-6" />
          </button>
          <div className="hidden md:block h-6 w-px bg-[#ffffff]/10 mx-1"></div>
          {isPending ? (
            <div className="h-7 w-24 rounded-lg bg-[#ffffff]/5 animate-pulse"></div>
          ) : session ? (
            <>
              <span className="hidden md:inline text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7]">
                {session.user.name || session.user.email}
              </span>
              <button
                onClick={handleSignOut}
                className="text-[12px] leading-[16px] tracking-[0.02em] font-bold px-6 py-1 bg-[#c0c1ff] text-[#0d0096] rounded-lg hover:scale-95 transition-transform"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors px-3 py-1">Login</a>
              <a href="/signup" className="text-[12px] leading-[16px] tracking-[0.02em] font-bold px-6 py-1 bg-[#c0c1ff] text-[#0d0096] rounded-lg hover:scale-95 transition-transform">Sign Up</a>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}
