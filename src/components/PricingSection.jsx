import React from 'react';
import Reveal from './Reveal';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#fbfcfc]">
      <div className="wrap max-w-[1000px]">
        <div className="text-center mb-[48px]">
          <Reveal delay={0}>
            <div className="text-[11px] tracking-[2px] uppercase font-bold text-amber-dark mb-[12px]">Simple Pricing</div>
            <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-ink mb-[20px]">
              Two scans.<br/><span className="text-[#0f6e56]">₹299.</span> No subscription.
            </h2>
            <p className="text-[16px] text-text-mid max-w-[600px] mx-auto leading-[1.6] mb-[32px]">
              One-time payment. Every ₹299 includes two scans — one to diagnose, one to confirm your fix. No recurring charges, ever.
            </p>
            <div className="text-[14.5px] text-text-soft">
              Comparable to a <span className="line-through opacity-70">₹2,000</span> professional diagnostic — <span className="font-bold text-[#bd6811]">two full scans for ₹299*</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] lg:gap-[32px] mb-12">
          {/* Card 1: Best Value */}
          <Reveal delay={100}>
            <div className="relative rounded-[24px] bg-white text-ink p-[32px] lg:p-[40px] flex flex-col h-full shadow-[0_20px_40px_rgba(239,159,39,0.08)] border-[1.5px] border-amber-base transform hover:-translate-y-1 transition-transform duration-300">
              
              <div className="absolute top-[24px] right-[24px] bg-amber-base text-ink font-bold text-[11px] tracking-wider uppercase px-[12px] py-[6px] rounded-[12px] shadow-sm">
                Best value
              </div>

              <div className="mb-[24px]">
                <h3 className="font-inter font-black text-[22px] mb-[12px]">Scan + Re-Scan</h3>
                <div className="flex items-start gap-1 mb-[8px]">
                  <span className="text-[18px] font-bold text-amber-base mt-[6px]">₹</span>
                  <span className="font-inter font-black text-[46px] tracking-tight leading-none text-ink">299*</span>
                </div>
                <div className="text-[13.5px] text-text-soft">2 scan credits · diagnose, then verify your fix</div>
              </div>

              <div className="flex flex-col mb-[32px] flex-grow">
                {[
                  'Two full scans of all 12 hardware checks',
                  'Re-scan to confirm repairs & compare results',
                  'Hardware Security Lock across both scans',
                  'Two downloadable A–F PDF certificates',
                  'Scan ID verifiable at tekki-x.com/verify'
                ].map((feat, i) => (
                  <div key={i} className={`flex items-start gap-[12px] py-[12px] ${i !== 0 ? 'border-t border-[rgba(29,158,117,0.08)]' : 'border-t border-[rgba(29,158,117,0.08)]'}`}>
                    <div className="mt-[2px] shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 9 10 16 8 13"></polyline></svg>
                    </div>
                    <span className="text-[14px] text-text-soft leading-[1.5]">{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-amber-base text-ink font-bold text-[15px] py-[16px] rounded-[12px] hover:bg-amber-light transition-colors duration-200">
                Get 2 scans · ₹299*
              </button>
            </div>
          </Reveal>

          {/* Card 2: Household Pack */}
          <Reveal delay={200}>
            <div className="relative rounded-[24px] bg-white border border-[rgba(29,158,117,0.15)] text-ink p-[32px] lg:p-[40px] flex flex-col h-full shadow-[0_8px_24px_rgba(4,52,44,0.04)] transform hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(4,52,44,0.08)] hover:border-[rgba(29,158,117,0.3)] transition-all duration-300">
              
              <div className="mb-[24px]">
                <h3 className="font-inter font-black text-[22px] mb-[12px]">Household Pack</h3>
                <div className="flex items-start gap-1 mb-[8px]">
                  <span className="text-[18px] font-bold text-amber-base mt-[6px]">₹</span>
                  <span className="font-inter font-black text-[46px] tracking-tight leading-none text-ink">699*</span>
                </div>
                <div className="text-[13.5px] text-text-soft">6 scan credits · cover up to 3 computers</div>
              </div>

              <div className="bg-[#eaf7f2] rounded-[8px] p-[12px] flex items-center gap-[10px] mb-[24px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span className="text-[13px] font-bold text-[#0F6E56] leading-[1.4]">Credits never expire — use them when you need them</span>
              </div>

              <div className="flex flex-col mb-[32px] flex-grow">
                {[
                  'Everything in Scan + Re-Scan, ×3',
                  'Mix across machines — best per-scan price',
                  'Pre-pay for a future moment of need — no new purchase decision each time',
                  'Priority email support'
                ].map((feat, i) => (
                  <div key={i} className={`flex items-start gap-[12px] py-[12px] ${i !== 0 ? 'border-t border-[rgba(29,158,117,0.08)]' : ''}`}>
                    <div className="mt-[2px] shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 9 10 16 8 13"></polyline></svg>
                    </div>
                    <span className="text-[14px] text-text-soft leading-[1.5]">{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white border border-amber-base text-ink font-bold text-[15px] py-[16px] rounded-[12px] hover:bg-[rgba(239,159,39,0.05)] transition-colors duration-200">
                Buy Household Pack · ₹699*
              </button>
            </div>
          </Reveal>
        </div>

        {/* Footer text */}
        <Reveal delay={300}>
          <div className="text-center mb-16">
            <p className="text-[14px] text-text-soft">
              One-time payment · UPI / card · no subscription, ever. <br className="sm:hidden"/>*Plus applicable GST at checkout.
            </p>
          </div>

          {/* Partner Banner */}
          <div className="bg-white border border-[rgba(29,158,117,0.15)] rounded-[20px] p-[28px] md:p-[32px] flex flex-col items-start shadow-[0_4px_24px_rgba(4,52,44,0.03)]">
            <div className="text-[15px] leading-[1.6] mb-[20px]">
              <span className="font-inter font-black text-ink">Are you a repair shop, IT reseller, or refurbisher?</span> 
              <span className="text-text-soft ml-1">Partner tools live on a dedicated page — bulk licensing, repair leads, and lifecycle certification.</span>
            </div>
            <button className="whitespace-nowrap font-bold text-[14px] text-amber-dark bg-white border border-[rgba(29,158,117,0.15)] px-[24px] py-[12px] rounded-[10px] shadow-sm hover:border-[rgba(29,158,117,0.3)] hover:bg-[#fbfcfc] transition-all">
              Become a Partner &rarr;
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
