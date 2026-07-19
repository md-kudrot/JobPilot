"use client";

import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Features from '@/components/Features';
import HowItWorks from '@/components/HowItWorks';
import JobCategories from '@/components/JobCategories';
import Testimonials from '@/components/Testimonials';
import Faq from '@/components/Faq';
import Cta from '@/components/Cta';
import Newsletter from '@/components/Newsletter';
import Footer from '@/components/Footer';

export default function JobPilotPage() {
  return (
    <div className="bg-[#0b1326] text-[#dae2fd] min-h-screen">
      <div className="w-[80%] mx-auto">
        <Header />
        <main className="pt-20">
          <Hero />
          <Stats />
          <Features />
          <HowItWorks />
          <JobCategories />
          <Testimonials />
          <Faq />
          <Cta />
          <Newsletter />
        </main>
        <Footer />
      </div>
    </div>
  );
}
