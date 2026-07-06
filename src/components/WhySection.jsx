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
            <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-dark mb-4">Why Tekki Blaze</div>
            <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-ink mb-5">
              Three reasons it's a <span className="text-amber-base">standard</span>,<br/>not just a scan.
            </h2>
            <p className="text-[17px] text-text-mid leading-[1.6]">
              Pick a capability on the left — or let it play — and watch exactly why it matters on the right.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-[24px] items-stretch">
          
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
            className="w-full relative min-h-[460px] lg:min-h-[520px] bg-gradient-to-br from-[#063a30] to-[#04130E] border border-[rgba(239,159,39,0.2)] rounded-[16px] overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {/* Visual 01: Hardware Security Lock */}
            <div className={`absolute inset-0 transition-all duration-400 transform ${activeTab === 0 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
              <div className="p-[30px] lg:px-[32px] h-full flex flex-col">
                <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-amber-light mb-[10px]">Peace of Mind · Included with every scan</div>
                <h3 className="font-inter font-black text-[22px] leading-[1.16] tracking-[-0.02em] mb-[14px] text-white max-w-[420px]">
                  Your hardware, locked & verified on the first scan.
                </h3>
                
                {/* Visual block */}
                <div className="flex-1 flex items-center justify-center mb-[16px] min-h-0 overflow-hidden">
                  <div className="w-full max-w-[360px]">
                    <div className="flex gap-[6px] bg-[rgba(255,255,255,0.07)] rounded-[30px] p-[5px] mb-[16px] w-fit">
                      <div className="text-[12px] font-bold text-teal-deep bg-white px-[16px] py-[8px] rounded-[16px] cursor-pointer">Run 1 · baseline</div>
                      <div className="text-[12px] font-bold text-teal-pale px-[16px] py-[8px] cursor-pointer hover:text-white transition-colors">Run 2 · after repair</div>
                    </div>
                    <div className="flex items-center gap-[15px] bg-[rgba(29,158,117,0.15)] border border-[rgba(93,202,165,0.4)] rounded-[12px] p-[16px] px-[18px]">
                      <div className="w-[44px] h-[44px] rounded-[12px] bg-[rgba(29,158,117,0.26)] flex items-center justify-center shrink-0">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#28C940" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
                      </div>
                      <div>
                        <div className="font-inter font-black text-[14.5px] text-white mb-[2px]">Hardware locked</div>
                        <div className="text-[12px] text-teal-pale leading-[1.45]">
                          All components verified & secure
                        </div>
                      </div>
                    </div>
                    <div className="mt-[14px] text-center text-[11.5px] font-bold text-amber-light">
                      Everything looks exactly as expected.
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-[9px] mt-auto">
                  <li className="flex items-start gap-[9px] text-[13.5px] text-[#DCF1E8] font-light leading-[1.45]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Re-scan after any service, sale or purchase — every component re-verified for complete peace of mind.
                  </li>
                  <li className="flex items-start gap-[9px] text-[13.5px] text-[#DCF1E8] font-light leading-[1.45]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Built-in assurance on both of your ₹299 scans — your configuration always stays transparent to you.
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual 02: A-F Certificate */}
            <div className={`absolute inset-0 transition-all duration-400 transform ${activeTab === 1 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
              <div className="p-[30px] lg:px-[32px] h-full flex flex-col">
                <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-amber-light mb-[10px]">The Output · A–F Standard</div>
                <h3 className="font-inter font-black text-[22px] leading-[1.16] tracking-[-0.02em] mb-[14px] text-white max-w-[420px]">
                  Raw diagnostics become one polished certificate.
                </h3>
                
                {/* Visual block */}
                <div className="flex-1 flex items-center justify-center mb-[16px] min-h-0 overflow-hidden">
                  <div className="bg-white rounded-[12px] p-[20px] w-full max-w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
                    <div className="flex items-center gap-[14px] mb-[16px]">
                      <div className="w-[52px] h-[52px] rounded-[12px] bg-gradient-to-br from-teal-deep to-teal-mid flex items-center justify-center shrink-0">
                        <span className="font-serif font-bold text-[28px] text-white leading-none">A</span>
                      </div>
                      <div>
                        <div className="font-inter font-black text-[14px] text-ink mb-[2px]">Hardware Health Certificate</div>
                        <div className="text-[12px] text-text-soft">DELL INSPIRON 15 · Scan #A29F</div>
                      </div>
                    </div>
                    {/* Placeholder lines */}
                    <div className="h-[9px] rounded-[5px] bg-off-white mb-[9px] w-full"></div>
                    <div className="h-[9px] rounded-[5px] bg-off-white mb-[9px] w-full"></div>
                    <div className="h-[9px] rounded-[5px] bg-off-white mb-[9px] w-[55%]"></div>
                    
                    {/* Stamp */}
                    <div className="mt-[16px] inline-flex items-center gap-[7px] text-[11px] font-bold text-teal-mid border-[1.5px] border-dashed border-teal-base rounded-[12px] px-[12px] py-[7px]">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
                      Tekki-verified · shareable PDF
                    </div>
                  </div>
                </div>

                <ul className="flex flex-col gap-[9px] mt-auto">
                  <li className="flex items-start gap-[9px] text-[13.5px] text-[#DCF1E8] font-light leading-[1.45]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    One clear grade — credible enough for insurance, audits and resale value.
                  </li>
                  <li className="flex items-start gap-[9px] text-[13.5px] text-[#DCF1E8] font-light leading-[1.45]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Anyone can verify it in 10 seconds at <a href="#" className="font-bold text-[#28C940] hover:underline">tekki-x.com/verify</a> — no trust required.
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual 03: Smart Repair Matching */}
            <div className={`absolute inset-0 transition-all duration-400 transform ${activeTab === 2 ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'}`}>
              <div className="p-[30px] lg:px-[32px] h-full flex flex-col relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-base/10 rounded-bl-full -z-10 blur-xl"></div>
                
                <div className="text-[11px] font-bold uppercase tracking-[1.5px] text-amber-light mb-[10px]">Roadmap · Coming Soon · <a href="#waitlist" className="underline hover:text-white cursor-pointer transition-colors">Join Waitlist &rarr;</a></div>
                <h3 className="font-inter font-black text-[22px] leading-[1.16] tracking-[-0.02em] mb-[14px] text-white max-w-[420px]">
                  Coming soon: find the fault, source the fix.
                </h3>
                
                {/* Visual block */}
                <div className="flex-1 flex items-center justify-center mb-[16px] min-h-0 overflow-hidden">
                  <div className="w-full max-w-[360px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] rounded-[14px] p-[18px]">
                    
                    {/* Header */}
                    <div className="flex items-center gap-[8px] font-mono text-[11px] text-teal-light mb-[14px]">
                      <div className="w-[6px] h-[6px] rounded-full bg-amber-base"></div>
                      Matching SSD · DELL INSPIRON 15 · Bengaluru...
                    </div>

                    {/* Item 1 */}
                    <div className="bg-off-white rounded-[12px] p-[12px] flex items-center gap-[12px] mb-[10px]">
                      <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0 bg-[#fdf4e7] text-amber-dark">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
                      </div>
                      <div>
                        <div className="text-[13px] font-inter font-black text-ink mb-[2px]">Samsung 970 EVO 1TB NVMe</div>
                        <div className="text-[11px] text-text-soft">
                          Matched to your SSD model · in stock
                        </div>
                      </div>
                      <div className="ml-auto text-[11px] font-extrabold text-amber-dark py-[4px] cursor-pointer hover:opacity-80 transition-opacity">
                        View &rarr;
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="bg-off-white rounded-[12px] p-[12px] flex items-center gap-[12px]">
                      <div className="w-[36px] h-[36px] rounded-[10px] flex items-center justify-center shrink-0 bg-teal-ghost text-teal-mid">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </div>
                      <div>
                        <div className="text-[13px] font-inter font-black text-ink mb-[2px]">TechCare Systems · Indiranagar</div>
                        <div className="text-[11px] text-text-soft">
                          Tekki-certified · 4.8★ · 1.2 km away
                        </div>
                      </div>
                      <div className="ml-auto text-[11px] font-extrabold text-amber-dark py-[4px] cursor-pointer hover:opacity-80 transition-opacity">
                        Call &rarr;
                      </div>
                    </div>

                  </div>
                </div>

                <ul className="flex flex-col gap-[9px] mt-auto">
                  <li className="flex items-start gap-[9px] text-[13.5px] text-[#DCF1E8] font-light leading-[1.45]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
                    Verified part-matches for your exact model — no guesswork, no wrong orders.
                  </li>
                  <li className="flex items-start gap-[9px] text-[13.5px] text-[#DCF1E8] font-light leading-[1.45]">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-[2px] shrink-0"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>
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
