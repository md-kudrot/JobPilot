import React from 'react';
import { Globe, Comments } from '@gravity-ui/icons';

export default function Footer() {
  return (
    <footer className="bg-[#060e20] text-[#dae2fd] border-t border-[#ffffff]/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 py-16 max-w-container-max mx-auto">
        <div className="space-y-6">
          <div className="text-[24px] leading-[32px] tracking-[-0.02em] font-black text-[#c0c1ff]">JobPilot AI</div>
          <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">The intelligent command center for the modern job seeker.</p>
        </div>
        <div>
          <h4 className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase mb-6">Company</h4>
          <ul className="space-y-3">
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">About</a></li>
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">Blog</a></li>
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">GitHub</a></li>
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">LinkedIn</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase mb-6">Product</h4>
          <ul className="space-y-3">
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">Support</a></li>
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">Terms</a></li>
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">Privacy</a></li>
            <li><a className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7] hover:text-[#c0c1ff] transition-colors" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <div className="text-[11px] leading-[16px] tracking-[0.05em] font-bold uppercase">© 2024 JobPilot AI. All rights reserved.</div>
          <div className="flex gap-6">
            <Globe className="text-[#c7c4d7] hover:text-[#c0c1ff] cursor-pointer transition-colors w-6 h-6" />
            <Comments className="text-[#c7c4d7] hover:text-[#c0c1ff] cursor-pointer transition-colors w-6 h-6" />
          </div>
        </div>
      </div>
    </footer>
  );
}
