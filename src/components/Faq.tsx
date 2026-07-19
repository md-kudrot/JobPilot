import React from 'react';
import { ChevronDown } from '@gravity-ui/icons';

export default function Faq() {
  return (
    <section className="py-16 px-10">
      <style dangerouslySetInnerHTML={{__html: `
        details summary::-webkit-details-marker {
          display: none;
        }
      `}} />
      <div className="max-w-2xl mx-auto">
        <h2 className="text-[30px] leading-[38px] tracking-[-0.02em] font-semibold text-center mb-16">Common Questions</h2>
        <div className="space-y-3">
          <details className="group bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 rounded-xl overflow-hidden" open>
            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#ffffff]/5 transition-colors list-none">
              <span className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold">How does the AI matching work?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform w-6 h-6" />
            </summary>
            <div className="p-6 pt-0 text-[#c7c4d7] text-[16px] leading-[24px] tracking-[0em] font-normal">
              Our proprietary engine uses Large Language Models trained specifically on millions of technical and creative job descriptions. It maps your resume skills against the "true intent" of the job post, not just simple keyword matching.
            </div>
          </details>
          <details className="group bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#ffffff]/5 transition-colors list-none">
              <span className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold">Is my data safe and private?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform w-6 h-6" />
            </summary>
            <div className="p-6 pt-0 text-[#c7c4d7] text-[16px] leading-[24px] tracking-[0em] font-normal">
              Absolutely. We employ SOC2-compliant encryption. Your resume and application data are used strictly to provide you with insights and are never sold to third-party recruiters or data brokers.
            </div>
          </details>
          <details className="group bg-[#0f172a]/60 backdrop-blur-[12px] border border-[#ffffff]/5 rounded-xl overflow-hidden">
            <summary className="flex justify-between items-center p-6 cursor-pointer hover:bg-[#ffffff]/5 transition-colors list-none">
              <span className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold">What platforms do you support?</span>
              <ChevronDown className="group-open:rotate-180 transition-transform w-6 h-6" />
            </summary>
            <div className="p-6 pt-0 text-[#c7c4d7] text-[16px] leading-[24px] tracking-[0em] font-normal">
              We currently integrate with LinkedIn, Indeed, Glassdoor, and over 4,000 individual company ATS portals via our browser extension.
            </div>
          </details>
        </div>
      </div>
    </section>
  );
}
