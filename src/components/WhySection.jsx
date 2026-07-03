import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const tabs = [
  {
    id: '01',
    title: 'Hardware Security Lock',
    badge: 'INCLUDED',
    badgeColor: 'bg-[#eaf7f2] text-[#0f6e56]',
    desc: 'Every component verified & protected — before and after any service.',
  },
  {
    id: '02',
    title: 'A–F Certificate',
    badge: 'THE OUTPUT',
    badgeColor: 'bg-[#eaf7f2] text-[#0f6e56]',
    desc: 'Raw diagnostics become one document anyone can trust.',
  },
  {
    id: '03',
    title: 'Smart Repair Matching',
    badge: 'COMING SOON',
    badgeColor: 'bg-[#fdf4e7] text-amber-dark',
    desc: "On the roadmap: it won't stop at the problem — it will source the solution.",
  }
];

export default function WhySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (isHovering) {
      clearInterval(timerRef.current);
      return;
    }
    
    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 6000);

    return () => clearInterval(timerRef.current);
  }, [isHovering]);

  return (
    <section id="why" className="py-20 bg-[#fbfcfc] overflow-hidden">
      <div className="wrap max-w-[1100px]">
        
        {/* Centered Header */}
        <div className="text-center max-w-[700px] mx-auto mb-10">
          <Reveal delay={0}>
            <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-base mb-4">Why Tekki Blaze</div>
            <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-ink mb-5">
              Three reasons it's a <span className="text-amber-base">standard</span>,<br/>not just a scan.
            </h2>
            <p className="text-[17px] text-text-mid leading-[1.6]">
              Pick a capability on the left — or let it play — and watch exactly why it matters on the right.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-6 lg:gap-8 items-start">
          
          {/* Left Column - Tabs */}
          <div 
            className="flex flex-col gap-3.5"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <Reveal key={tab.id} delay={100 + (idx * 100)}>
                  <div 
                    onClick={() => setActiveTab(idx)}
                    className={`cursor-pointer rounded-2xl p-5 transition-all duration-300 relative overflow-hidden bg-white ${
                      isActive 
                        ? 'border-[1.5px] border-amber-base shadow-[0_8px_30px_rgba(239,159,39,0.12)] scale-100 z-10' 
                        : 'border border-[rgba(29,158,117,0.12)] hover:border-[rgba(29,158,117,0.3)] shadow-sm scale-[0.98] opacity-80 hover:opacity-100'
                    }`}
                  >
                    {/* Active Progress Bar */}
                    {isActive && !isHovering && (
                      <div className="absolute bottom-0 left-0 h-[3px] bg-amber-base animate-progress-slow" style={{ animationDuration: '6s', width: '100%' }}></div>
                    )}
                    
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-inter font-black text-[18px] tracking-tight flex gap-3 items-center">
                        <span className={isActive ? 'text-amber-dark' : 'text-teal-mid'}>{tab.id}</span>
                        <span className="text-ink">{tab.title}</span>
                      </div>
                      <span className={`text-[9px] font-bold tracking-[1px] px-2.5 py-1 rounded-full ${tab.badgeColor}`}>
                        {tab.badge}
                      </span>
                    </div>
                    <p className="text-[14px] leading-[1.6] text-text-soft pl-[32px]">
                      {tab.desc}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>

          {/* Right Column - Visuals */}
          <div 
            className="w-full relative min-h-[500px] lg:min-h-[520px] bg-[#073126] rounded-[20px] shadow-[0_20px_50px_rgba(4,52,44,0.3)] overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Visual 01: Hardware Security Lock */}
            <div className={`absolute inset-0 transition-all duration-500 transform ${activeTab === 0 ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
              <div className="p-6 lg:p-8 h-full flex flex-col">
                <div className="text-[10px] font-bold uppercase tracking-widest text-amber-base mb-3">Peace of Mind · Included with every scan</div>
                <h3 className="font-inter font-black text-[24px] md:text-[28px] leading-[1.15] tracking-tight mb-6 text-white">
                  Your hardware, locked & verified<br/>on the first scan.
                </h3>
                
                {/* Visual block */}
                <div className="bg-[#0b3e31] rounded-[14px] border border-[rgba(255,255,255,0.06)] p-5 mb-6 shadow-inner">
                  <div className="flex items-center gap-2 mb-4 border-b border-[rgba(255,255,255,0.06)] pb-3">
                    <div className="text-[12px] font-bold text-ink bg-white px-4 py-1.5 rounded-md cursor-pointer">Run 1 · baseline</div>
                    <div className="text-[12px] font-medium text-white/60 hover:text-white px-4 py-1.5 cursor-pointer transition-colors">Run 2 · after repair</div>
                  </div>
                  <div className="flex items-center gap-3.5 bg-[#073126] border border-[rgba(29,158,117,0.3)] rounded-[10px] p-4">
                    <div className="w-10 h-10 rounded-lg bg-[#0f5442] flex items-center justify-center shrink-0">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#28C940" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                    </div>
                    <div>
                      <div className="font-inter font-black text-[16px] text-white mb-0.5">Hardware locked</div>
                      <div className="text-[13px] text-[#28C940] font-medium">
                        All components verified & secure
                      </div>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-auto">
                  <li className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-[1.6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Re-scan after any service, sale or purchase — every component re-verified for complete peace of mind.
                  </li>
                  <li className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-[1.6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Built-in assurance on both of your ₹299 scans — your configuration always stays transparent to you.
                  </li>
                </ul>

              </div>
            </div>

            {/* Visual 02: A-F Certificate */}
            <div className={`absolute inset-0 transition-all duration-500 transform ${activeTab === 1 ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
              <div className="p-6 lg:p-8 h-full flex flex-col">
                <div className="text-[10px] font-bold uppercase tracking-widest text-amber-base mb-3">The Output · A–F Standard</div>
                <h3 className="font-inter font-black text-[24px] md:text-[28px] leading-[1.15] tracking-tight mb-6 text-white">
                  Raw diagnostics become<br/>one polished certificate.
                </h3>
                
                {/* Visual block */}
                <div className="bg-[#0b3e31] rounded-[14px] border border-[rgba(255,255,255,0.06)] p-6 mb-6 flex items-center gap-5 shadow-inner">
                  <div className="w-[64px] h-[64px] rounded-[10px] bg-gradient-to-br from-teal-mid to-teal-base flex items-center justify-center shrink-0 shadow-[0_8px_20px_rgba(0,0,0,0.2)]">
                    <span className="font-serif font-bold text-[32px] text-white leading-none">A</span>
                  </div>
                  <div>
                    <div className="font-inter font-black text-[17px] text-white mb-1.5">Hardware Health Certificate</div>
                    <div className="font-mono text-[10px] text-white/80 mb-2.5 bg-[#073126] px-2 py-1 rounded inline-block border border-[rgba(255,255,255,0.1)]">DELL INSPIRON 15 · Scan #A29F</div>
                    <div className="flex items-center gap-1.5 text-[12px] font-medium text-[#28C940]">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Tekki-verified · shareable PDF
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-auto">
                  <li className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-[1.6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    One clear grade — credible enough for insurance, audits and resale value.
                  </li>
                  <li className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-[1.6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Anyone can verify it in 10 seconds at <a href="#" className="font-bold text-[#28C940] hover:underline">tekki-x.com/verify</a> — no trust required.
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual 03: Smart Repair Matching */}
            <div className={`absolute inset-0 transition-all duration-500 transform ${activeTab === 2 ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 translate-x-8 pointer-events-none'}`}>
              <div className="p-6 lg:p-8 h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-base/10 rounded-bl-full -z-10 blur-xl"></div>
                
                <div className="text-[10px] font-bold uppercase tracking-widest text-amber-base mb-3">Roadmap · Coming Soon · <a href="#waitlist" className="underline hover:text-white cursor-pointer transition-colors">Join Waitlist &rarr;</a></div>
                <h3 className="font-inter font-black text-[24px] md:text-[28px] leading-[1.15] tracking-tight mb-6 text-white">
                  Coming soon: find the fault,<br/>source the fix.
                </h3>
                
                {/* Visual block */}
                <div className="space-y-3 mb-6">
                  {/* Item 1 */}
                  <div className="bg-[#0b3e31] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-4 flex items-center justify-between shadow-inner">
                    <div>
                      <div className="text-[9px] font-bold uppercase tracking-wider text-white/50 mb-1">Matching SSD · DELL INSPIRON 15 · Bengaluru…</div>
                      <div className="font-inter font-black text-[15.5px] text-white mb-0.5">Samsung 970 EVO 1TB NVMe</div>
                      <div className="text-[12px] text-[#28C940] font-medium flex items-center gap-1.5">
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                        Matched to your SSD model · in stock
                      </div>
                    </div>
                    <button className="bg-amber-base text-ink font-bold text-[12px] px-4 py-2 rounded-md hover:bg-amber-light transition-colors">View &rarr;</button>
                  </div>
                  {/* Item 2 */}
                  <div className="bg-[#0b3e31] border border-[rgba(255,255,255,0.06)] rounded-[12px] p-4 flex items-center justify-between shadow-inner">
                    <div>
                      <div className="font-inter font-black text-[15.5px] text-white mb-1">TechCare Systems · Indiranagar</div>
                      <div className="text-[11.5px] text-white/80 font-medium flex items-center gap-1.5">
                        <span className="bg-[#073126] border border-[rgba(29,158,117,0.3)] text-[#28C940] px-1.5 py-0.5 rounded-[4px] text-[9px] font-bold uppercase">Tekki-certified</span>
                        <span className="text-amber-base font-bold">4.8★</span>
                        <span className="text-white/40">· 1.2 km away</span>
                      </div>
                    </div>
                    <button className="bg-white/5 border border-white/10 text-white font-bold text-[12px] px-4 py-2 rounded-md hover:bg-white/10 transition-colors">Call &rarr;</button>
                  </div>
                </div>

                <ul className="space-y-3 mb-auto">
                  <li className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-[1.6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Verified part-matches for your exact model — no guesswork, no wrong orders.
                  </li>
                  <li className="flex items-start gap-2.5 text-[13.5px] text-white/80 leading-[1.6]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Certified technicians mapped to your city, one tap from the report.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
      
      {/* Global styles for animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progress-slow {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        .animate-progress-slow {
          animation: progress-slow linear infinite;
        }
      `}} />
    </section>
  )
}
