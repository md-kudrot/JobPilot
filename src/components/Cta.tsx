import React from 'react';

export default function Cta() {
  return (
    <section className="py-16 px-10">
      <div className="max-w-container-max mx-auto bg-gradient-to-br from-[#452d7e] to-[#00a572] rounded-3xl p-16 relative overflow-hidden text-center">
        <div className="absolute inset-0 opacity-10 pointer-events-none"></div>
        <div className="relative z-10 space-y-6">
          <h2 className="text-[48px] leading-[56px] tracking-[-0.04em] font-bold text-white">Ready to land your dream job?</h2>
          <p className="text-[18px] leading-[28px] tracking-[0em] font-normal text-white/80 max-w-xl mx-auto">Join the future of career searching today. No credit card required to get started.</p>
          <div className="pt-6">
            <button className="px-16 py-6 bg-white text-[#0d0096] font-bold text-[20px] leading-[28px] tracking-[-0.01em] rounded-xl hover:scale-105 transition-transform">Join the Pilot Program</button>
          </div>
        </div>
      </div>
    </section>
  );
}
