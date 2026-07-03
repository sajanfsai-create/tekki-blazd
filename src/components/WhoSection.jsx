import React from 'react';

export default function WhoSection() {
  const cards = [
    {
      title: 'Homes & Families',
      subtitle: 'Is my slow computer dying — or just tired?',
      quote: '"Before you spend on a new laptop, spend ₹299 to find out what\'s really wrong."',
      desc: "Re-scan after any repair to confirm the fix worked and see that every component is exactly as it should be — the same reassurance as a printed invoice.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#0F6E56" strokeWidth="2" /><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" /></svg>
    },
    {
      title: 'Students & Freshers',
      subtitle: 'It has to survive placements & every exam',
      quote: '"Scan before the semester. Know exactly where you stand before interviews start."',
      desc: "Placement season means your laptop is non-negotiable. A low grade with a clear explanation is actionable — know what to fix before it fails at the worst moment. Credits never expire, so scan when it matters.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 4l-8 4 8 4 8-4-8-4z" stroke="#0F6E56" strokeWidth="2" strokeLinejoin="round" /><path d="M4 12v4c0 2 3.6 4 8 4s8-2 8-4v-4" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    },
    {
      title: 'Professionals & Sellers',
      subtitle: 'Selling your laptop before an upgrade?',
      quote: '"A verified A–F certificate adds real, provable resale value — buyers pay more for proof."',
      desc: "Your laptop's resale value drops the day it develops a fault you don't know about yet. A Blaze certificate is credible enough for insurance, audits, and used-device sales on OLX or Cashify.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
    }
  ];

  return (
    <section id="who-for" className="py-24 bg-white">
      <div className="wrap max-w-[1200px]">
        <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-base mb-4 text-center">Built For You</div>
        <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-center text-ink max-w-[680px] mx-auto mb-5">
          One scan works for everyone.
        </h2>
        <p className="text-[17px] text-text-mid text-center max-w-[640px] mx-auto mb-16 leading-[1.6]">
          Whether you're diagnosing a slow laptop, preparing for placements, or protecting resale value — Blaze gives you the same trusted certificate.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {cards.map((c, i) => (
            <div
              key={i}
              className="relative rounded-2xl p-7 lg:p-8 bg-white flex flex-col transition-all duration-300 border border-[rgba(29,158,117,0.15)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] hover:shadow-[0_12px_36px_rgba(4,52,44,0.08)] hover:-translate-y-1 hover:border-[rgba(29,158,117,0.3)]"
            >
              <div className="w-[52px] h-[52px] rounded-xl flex items-center justify-center mb-6 bg-teal-ghost border border-[rgba(29,158,117,0.1)]">
                {c.icon}
              </div>

              <h3 className="font-inter font-black text-[22px] text-ink mb-1.5 leading-[1.2]">{c.title}</h3>
              <div className="text-[14px] font-bold text-teal-base mb-5 leading-[1.4]">{c.subtitle}</div>

              <div className="font-serif italic text-[15px] text-[#0d523c] leading-[1.5] mb-5 bg-[#eaf7f2] p-4 rounded-xl border-l-[3px] border-teal-base">
                {c.quote}
              </div>

              <div className="text-[15px] text-text-soft leading-[1.6] mt-auto">
                {c.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
