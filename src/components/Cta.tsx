import React from 'react';

export default function Cta() {
  return (
    <section className="py-12 md:py-16 px-5 md:px-10">
      <div className="max-w-container-max mx-auto bg-gradient-to-br from-[#452d7e] to-[#00a572] rounded-3xl p-8 sm:p-12 md:p-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="relative z-10 space-y-5 md:space-y-6">
          <h2 className="text-[32px] leading-[40px] sm:text-[40px] sm:leading-[48px] md:text-[48px] md:leading-[56px] tracking-[-0.04em] font-bold text-white">Ready to land your dream job?</h2>
          <p className="text-[16px] leading-[24px] md:text-[18px] md:leading-[28px] tracking-[0em] font-normal text-white/80 max-w-xl mx-auto">Join the future of career searching today. No credit card required to get started.</p>
          <div className="pt-4 md:pt-6">
            <button className="w-full sm:w-auto px-8 sm:px-16 py-4 md:py-6 bg-white text-[#0d0096] font-bold text-[16px] leading-[24px] md:text-[20px] md:leading-[28px] tracking-[-0.01em] rounded-xl hover:scale-105 transition-transform">Join the Pilot Program</button>
          </div>
        </div>
      </div>
    </section>
  );
}
