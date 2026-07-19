import React from 'react';
import { Rocket, SparklesFill, CircleCheck } from '@gravity-ui/icons';

export default function AuthLeftSidebar() {
  return (
    <section className="hidden lg:flex w-1/2 relative overflow-hidden bg-[#060e20] items-center justify-center border-r border-[#ffffff]/5">
      <div className="relative z-10 p-16 flex flex-col items-start max-w-xl">
        <div className="mb-6 flex items-center gap-2">
          <Rocket className="text-[#c0c1ff] w-10 h-10" />
          <h1 className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold text-[#c0c1ff]">JobPilot AI</h1>
        </div>

        <h2 className="text-[30px] leading-[38px] tracking-[-0.02em] font-semibold text-[#dae2fd] mb-6">
          The next evolution of <span className="text-[#4edea3]">career engineering</span>.
        </h2>

        <p className="text-[18px] leading-[28px] tracking-[0em] font-normal text-[#c7c4d7] mb-16 leading-relaxed">
          Harness advanced neural networks to match your unique professional fingerprint with the world's most
          innovative roles.
        </p>

        {/* Bento Card Preview */}
        <div className="glass-card p-6 rounded-2xl w-full flex items-center gap-6 relative">
          <div className="absolute -top-20 -left-20 w-48 h-48 bg-[#c0c1ff]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="w-12 h-12 rounded-xl bg-[#00a572] flex items-center justify-center shrink-0">
            <SparklesFill className="text-[#ffffff] w-5 h-5" />
          </div>
          <div>
            <p className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase text-[#4edea3] mb-1">
              AI Insight
            </p>
            <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#dae2fd]">
              "You're a 98% match for the Senior Product Lead role at Stellar Labs."
            </p>
          </div>
        </div>

        {/* Floating Decorative Element */}
        <div className="absolute bottom-10 right-10 opacity-20">
          <CircleCheck className="text-[#c0c1ff] w-48 h-48" />
        </div>
      </div>
    </section>
  );
}
