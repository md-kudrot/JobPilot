import React from 'react';

export default function JobDescription() {
  return (
    <div className="glass p-6 rounded-xl space-y-6">
      <h2 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold text-[#dae2fd]">The Role</h2>
      <div className="space-y-4 text-[#c7c4d7] text-[16px] leading-[24px] tracking-[0em] font-normal">
        <p>
          Nebula Systems is building the next generation of cloud-native infrastructure for planetary-scale applications.
          We are looking for a Senior Product Designer to lead the end-to-end design process for our core orchestration
          platform.
        </p>
        <p>
          You will work closely with engineering and product leadership to translate complex technical requirements into
          elegant, high-performance interfaces. You'll be responsible for creating design systems that scale and ensuring
          every interaction feels magical.
        </p>

        <h3 className="text-[20px] leading-[28px] tracking-[-0.01em] font-semibold text-[#dae2fd] mt-6">
          Responsibilities
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Design complex workflows for technical users and developers.</li>
          <li>Establish and evolve the Nebula Design System across web and mobile.</li>
          <li>Lead user research initiatives to understand developer pain points.</li>
          <li>Collaborate with Frontend Engineering to ensure pixel-perfect implementation.</li>
          <li>Mentor junior designers and foster a culture of design excellence.</li>
        </ul>
      </div>
    </div>
  );
}
