"use client";

import React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Moon } from '@gravity-ui/icons';
import { authClient } from '@/lib/auth-client';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Explore Jobs', href: '/jobs' },
  // { label: 'Dashboard', href: '/dashboard', auth: true },
  { label: 'Jobs For You', href: '/jobs-for-you', auth: true },
  { label: 'My Applications', href: '/my-applications', auth: true },
  { label: 'Post Job', href: '/post-job' },
];

export default function Header({ active = 'Home' }: { active?: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  // Secondary nav highlights the route matching the current URL.
  const isActive = (item: { label: string; href: string }) =>
    (item.href === '/' ? pathname === '/' : pathname.startsWith(item.href)) ||
    item.label === active;

  const handleSignOut = async () => {
    await authClient.signOut();
    router.push('/login');
    router.refresh();
  };

  // Logged-out visitors only see public routes; auth-only routes are hidden.
  const navItems = session ? NAV_ITEMS : NAV_ITEMS.filter((item) => !item.auth);

  // Post Job is visible to everyone but requires login to use.
  const getNavClick = (href: string) =>
    href === '/post-job' && !session
      ? (e: React.MouseEvent) => {
          e.preventDefault();
          router.push('/login?redirect=/post-job');
        }
      : undefined;

  return (
    <header className="fixed top-0 left-1/2 -translate-x-1/2 w-[90%] md:w-[80%] z-50 bg-[#0b1326]/80 backdrop-blur-md border-b border-[#ffffff]/10 shadow-sm">
      <nav className="flex justify-between items-center px-5 md:px-10 py-3 w-full h-20">
        <div className="flex items-center gap-6">
          <div className="text-[28px] leading-[36px] md:text-[36px] md:leading-[44px] tracking-[-0.03em] font-bold text-[#c0c1ff] tracking-tight">JobPilot</div>
          <div className="hidden lg:flex items-center gap-4">
            {navItems.map((item) =>
              item.label === active ? (
                <a key={item.label} onClick={getNavClick(item.href)} className="text-[12px] leading-[16px] tracking-[0.02em] font-bold text-[#c0c1ff] border-b-2 border-[#c0c1ff] py-1" href={item.href}>{item.label}</a>
              ) : (
                <a key={item.label} onClick={getNavClick(item.href)} className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors py-1" href={item.href}>{item.label}</a>
              )
            )}
          </div>
        </div>
        <div className="flex items-center gap-2">
         
          <div className="h-6 w-px bg-[#ffffff]/10 mx-1"></div>
          {isPending ? (
            <div className="h-7 w-24 rounded-lg bg-[#ffffff]/5 animate-pulse"></div>
          ) : session ? (
            <>
              <a
                href="/profile"
                className="hidden sm:inline text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors"
              >
                {session.user.name || session.user.email}
              </a>


              <a href="/dashboard" className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors px-3 py-1">Dashboard</a>

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

      {/* Secondary nav — shows the center links below the navbar once they no longer fit inline */}
      <div className="lg:hidden border-t border-[#ffffff]/10 bg-[#0b1326]/60 overflow-x-auto whitespace-nowrap">
        <div className="flex items-center justify-center gap-6 px-5 py-3">
          {navItems.map((item) =>
            isActive(item) ? (
              <a key={item.label} onClick={getNavClick(item.href)} className="text-[12px] leading-[16px] tracking-[0.02em] font-bold text-[#c0c1ff] border-b-2 border-[#c0c1ff] py-1 shrink-0" href={item.href}>{item.label}</a>
            ) : (
              <a key={item.label} onClick={getNavClick(item.href)} className="text-[12px] leading-[16px] tracking-[0.02em] font-medium text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors py-1 shrink-0" href={item.href}>{item.label}</a>
            )
          )}
        </div>
      </div>
    </header>
  );
}
