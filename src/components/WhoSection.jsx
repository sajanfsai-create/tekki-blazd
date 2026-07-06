import React from 'react';

export default function WhoSection() {
  const cards = [
    {
      label: 'Homes & Families',
      title: 'Is my slow computer dying — or just tired?',
      quote: '"Before you spend on a new laptop, spend ₹299 to find out what\'s really wrong."',
      desc: "Re-scan after any repair to confirm the fix worked and see that every component is exactly as it should be — the same reassurance as a printed invoice.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
    },
    {
      label: 'Students & Freshers',
      title: 'It has to survive placements & every exam',
      quote: '"Scan before the semester. Know exactly where you stand before interviews start."',
      desc: "Placement season means your laptop is non-negotiable. A low grade with a clear explanation is actionable — know what to fix before it fails at the worst moment. Credits never expire, so scan when it matters.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
    },
    {
      label: 'Professionals & Sellers',
      title: 'Selling your laptop before an upgrade?',
      quote: '"A verified A–F certificate adds real, provable resale value — buyers pay more for proof."',
      desc: "Your laptop's resale value drops the day it develops a fault you don't know about yet. A Blaze certificate is credible enough for insurance, audits, and used-device sales on OLX or Cashify.",
      icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
    }
  ];

  return (
    <section id="who-for" className="py-24 bg-white">
      <div className="wrap max-w-[1200px]">
        <div className="text-[11px] tracking-[2px] uppercase font-bold text-amber-dark mb-3 text-center">Built For You</div>
        <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[44px] leading-[1.04] text-center text-ink max-w-[680px] mx-auto mb-5">
          One scan works for <span className="text-amber-base">everyone.</span>
        </h2>
        <p className="text-[16px] text-text-mid text-center max-w-[640px] mx-auto mb-14 leading-[1.6]">
          Whether you're diagnosing a slow laptop, preparing for placements, or protecting resale value — Blaze gives you the same trusted certificate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] items-stretch">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-[28px] lg:p-[32px] bg-white flex flex-col transition-all duration-300 border border-[rgba(29,158,117,0.12)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] hover:shadow-[0_12px_36px_rgba(4,52,44,0.08)] hover:-translate-y-1"
            >
              <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center mb-[20px] bg-[#fdf4e7]">
                {c.icon}
              </div>

              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-amber-dark mb-[8px]">
                {c.label}
              </div>

              <h3 className="font-inter font-bold text-[17px] text-ink mb-[16px] leading-[1.3]">{c.title}</h3>

              <div className="font-serif italic text-[14.5px] text-text-mid leading-[1.5] mb-[20px] pl-[16px] border-l-[2px] border-[#FAC775] py-[2px]">
                {c.quote}
              </div>

              <div className="text-[13px] text-text-soft leading-[1.6] mt-auto">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
