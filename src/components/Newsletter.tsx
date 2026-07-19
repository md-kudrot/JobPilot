import React from 'react';

export default function Newsletter() {
  return (
    <section className="py-16 px-10 border-b border-[#ffffff]/5">
      <div className="max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-16">
        <div className="max-w-md">
          <h3 className="text-[24px] leading-[32px] tracking-[-0.02em] font-semibold mb-1">Stay in the loop</h3>
          <p className="text-[14px] leading-[20px] tracking-[0em] font-normal text-[#c7c4d7]">Get the latest AI job market insights and career tips delivered weekly.</p>
        </div>
        <div className="w-full max-w-md">
          <form className="flex gap-3" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-[#222a3d] border border-[#ffffff]/10 rounded-xl px-6 focus:ring-2 focus:ring-[#c0c1ff] outline-none text-[#dae2fd] h-12" placeholder="Email address" type="email" required />
            <button className="px-6 h-12 bg-[#c0c1ff] text-[#0d0096] font-bold rounded-xl whitespace-nowrap" type="submit">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
}
