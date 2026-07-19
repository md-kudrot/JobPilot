import React from 'react';
import { Globe, Link as LinkIcon } from '@gravity-ui/icons';

export default function CompanyInfo() {
  return (
    <div className="glass p-6 rounded-xl">
      <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd] mb-4">
        About Nebula Systems
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
          <img
            className="w-full h-full object-cover"
            alt="Nebula Systems office"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuATH4Urb3Nw-OZWcEV5LQ5iAI0XZE_mhpIaPxeLeC3irhHfin4VU0_kECDhzIyx6O-QFQLeY5IPLORfwGQY8V40P2WrhqQBcjQHFyWB-uHr55coUxB8qq4Bie4EsVOb_ONVbPa0ob2CFR43f-RBbjPNeWBk6bHYWiIzCDKVzqFlRd8ZTjzKpHsiYz9doPDuPbhTWm7tI6hd7aaFPia5QvK1hV1VU-t1d0bnmgwj0nyInmGvm2Tbodn-xw"
          />
        </div>
        <div className="flex-1 space-y-4">
          <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">
            Founded in 2021, Nebula Systems has raised over $45M in Series A funding from top-tier VCs. We are a
            remote-first team spread across 12 countries, united by our mission to simplify cloud complexity.
          </p>
          <div className="flex gap-6">
            <a
              className="text-[#c0c1ff] text-[12px] leading-[16px] tracking-[0.02em] font-medium flex items-center gap-1 hover:underline"
              href="#"
            >
              <Globe className="w-4 h-4" /> Visit Website
            </a>
            <a
              className="text-[#c0c1ff] text-[12px] leading-[16px] tracking-[0.02em] font-medium flex items-center gap-1 hover:underline"
              href="#"
            >
              <LinkIcon className="w-4 h-4" /> LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
