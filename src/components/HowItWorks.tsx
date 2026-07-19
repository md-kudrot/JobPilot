import React from 'react';

export default function HowItWorks() {
  return (
    <section className="py-16 px-10 bg-[#131b2e] overflow-hidden">
      <div className="max-w-container-max mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-[36px] leading-[44px] tracking-[-0.03em] font-bold mb-6">The Path to Your <br /><span className="text-[#4edea3]">Next Career Move.</span></h2>
            <div className="space-y-16 mt-16 relative">
              <div className="absolute left-[23px] top-0 bottom-0 w-px bg-[#ffffff]/10"></div>
              {/* Step 1 */}
              <div className="flex gap-6 relative">
                <div className="w-12 h-12 rounded-full bg-[#c0c1ff] flex items-center justify-center shrink-0 z-10">
                  <span className="font-bold text-[#1000a9]">1</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-1">Build Your Intelligent Profile</h4>
                  <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7]">Upload your resume or link your LinkedIn. Our AI extracts and maps your expertise into a multidimensional skill graph.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="flex gap-6 relative">
                <div className="w-12 h-12 rounded-full bg-[#4edea3] flex items-center justify-center shrink-0 z-10">
                  <span className="font-bold text-[#003824]">2</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-1">Analyze Real-Time Matches</h4>
                  <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7]">We scan the web and give you a daily feed of jobs sorted by match score, salary potential, and role growth.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="flex gap-6 relative">
                <div className="w-12 h-12 rounded-full bg-[#ffb783] flex items-center justify-center shrink-0 z-10">
                  <span className="font-bold text-[#4f2500]">3</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-1">Apply with Precision</h4>
                  <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7]">Use AI-optimized cover letters and resume keywords to pass any ATS filter with a 90% success rate.</p>
                </div>
              </div>
              {/* Step 4 */}
              <div className="flex gap-6 relative">
                <div className="w-12 h-12 rounded-full bg-[#dae2fd] flex items-center justify-center shrink-0 z-10">
                  <span className="font-bold text-[#0b1326]">4</span>
                </div>
                <div className="pt-2">
                  <h4 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold mb-1">Track and Conquer</h4>
                  <p className="text-[16px] leading-[24px] tracking-[0em] font-normal text-[#c7c4d7]">Manage interviews, track offers, and negotiate salary using our data-driven benchmarking tools.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <div className="p-2 bg-[#ffffff]/5 rounded-2xl border border-[#ffffff]/10">
              <img className="w-full rounded-xl shadow-2xl" alt="AI Job Board UI Preview" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWx795bE7jCc_zTNbyKTFOfNoTzd0AP54XcOzObhui0r7qSWg0RkgkTMnA60N8SmqPy6F13U52K7C4AKF1L2XNgP_SF05vseqTVnpJbjpJm4wktwuew_XulTZqBYKghK9NxsSuEqV5cUM7hhYolb4q4AcScyMToVbCLOW0YoPKtSZxYtl0K6ia7BpPPZ99tbGANq4Z2Z9ZbuudVbpDSkqPXamuULVTARdDNwx8wRboNdJfI6WiqFCrwA" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
