import React from 'react';

export default function WhoSection() {
 const cards = [
 {
 label: 'Homes & Families',
 title: 'Slow, noisy, shutting down — repair or replace?',
 quote: '“Before you spend ₹60,000 on a new laptop, spend ₹299 to see what’s actually wrong.”',
 desc: 'Most “dying” PCs need only one small fix. Blaze names the exact part and its fair market cost — and a re-scan after any service confirms everything is back in shape.',
 icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
 },
 {
 label: 'Students & Freshers',
 title: 'Laptops die during exams. Never during holidays.',
 quote: '“A blue screen never comes out of nowhere — the warning signs were there for weeks.”',
 desc: "Blaze catches those warnings early — SSD wear, overheating, crash history — while they’re still cheap to fix, and confirms it can handle next semester's tools.",
 icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>
 },
 {
 label: 'Professionals & Sellers',
 title: 'You maintained it well. Now you can prove it.',
 quote: '“Photos show the outside. The real value — battery, SSD, true performance — sits inside.”',
 desc: "Condition sets every resale price, yet listings can't show it. A dated A-F certificate — every component fingerprinted — puts the facts on record, and deals close faster.",
 icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
 }
 ];

 return (
 <section id="who-for" className="py-24 bg-white">
 <div className="wrap max-w-[1200px]">
 <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-dark mb-4 flex flex-col items-center">
 <span>Built For You</span>
 <div className="w-6 h-[2px] bg-amber-brand mt-2.5 rounded-full"></div>
 </div>
 <h2 className="font-inter font-[800] tracking-tight text-[30px] md:text-[42px] leading-[1.04] text-center text-ink max-w-[680px] mx-auto mb-5">
 One scan works for <span className="text-amber-brand">everyone.</span>
 </h2>
 <p className="text-[15px] text-text-soft text-center max-w-[640px] mx-auto mb-14 leading-[1.6]">
 Three very different headaches. The same 3-minute answer.
 </p>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
 {cards.map((c, i) => (
 <div
 key={i}
 className="relative rounded-[24px] p-6 lg:p-8 bg-white transition-all duration-300 border border-[rgba(29,158,117,0.12)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] hover:shadow-[0_12px_36px_rgba(4,52,44,0.08)] hover:-translate-y-1"
 >
 <div className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center mb-5 bg-[#fdf4e7]">
 {c.icon}
 </div>

 <div className="text-[12px] font-bold tracking-[1.5px] uppercase text-amber-dark mb-2">
 {c.label}
 </div>

 <h3 className="font-inter font-[800] text-[17px] text-ink mb-3 leading-[1.3]">{c.title}</h3>

 <div className="border-l-[2px] border-amber-brand pl-3.5 font-serif italic text-[14px] text-text-mid leading-[1.6] mb-4">
 {c.quote}
 </div>

 <div className="text-[13px] text-text-soft leading-[1.65] mt-auto">
 {c.desc}
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 )
}
