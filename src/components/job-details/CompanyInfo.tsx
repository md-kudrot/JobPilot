import React from 'react';
import { Globe, Link as LinkIcon, House, MapPin, Clock } from '@gravity-ui/icons';

interface CompanyInfoProps {
  company: string;
  logo?: string;
  location?: string;
  industry?: string;
  website?: string;
  linkedin?: string;
  founded?: string;
  size?: string;
  description?: string;
}

export default function CompanyInfo({ 
  company, 
  logo, 
  location, 
  industry, 
  website, 
  linkedin, 
  founded, 
  size, 
  description 
}: CompanyInfoProps) {
  return (
    <div className="glass p-6 rounded-xl">
      <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd] mb-4">
        About {company}
      </h2>
      <div className="flex flex-col md:flex-row gap-6">
        {logo && (
          <div className="w-full md:w-1/3 aspect-video rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              alt={`${company} office`}
              src={logo}
            />
          </div>
        )}
        <div className="flex-1 space-y-4">
          {description && (
            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">
              {description}
            </p>
          )}
          {!description && (
            <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">
              {company} is a company in the {industry || 'technology'} sector.
            </p>
          )}
          <div className="grid grid-cols-2 gap-4 text-sm text-[#c7c4d7]">
            {founded && (
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Founded: {founded}</span>
              </div>
            )}
            {size && (
              <div className="flex items-center gap-2">
                <House className="w-4 h-4" />
                <span>Size: {size}</span>
              </div>
            )}
            {location && (
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>
            )}
            {industry && (
              <div className="flex items-center gap-2">
                <House className="w-4 h-4" />
                <span>Industry: {industry}</span>
              </div>
            )}
          </div>
          <div className="flex gap-6">
            {website && (
              <a
                className="text-[#c0c1ff] text-[12px] leading-[16px] tracking-[0.02em] font-medium flex items-center gap-1 hover:underline"
                href={website}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="w-4 h-4" /> Visit Website
              </a>
            )}
            {linkedin && (
              <a
                className="text-[#c0c1ff] text-[12px] leading-[16px] tracking-[0.02em] font-medium flex items-center gap-1 hover:underline"
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkIcon className="w-4 h-4" /> LinkedIn
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
