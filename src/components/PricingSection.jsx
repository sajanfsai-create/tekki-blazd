import React from 'react';
import Reveal from './Reveal';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#fbfcfc]">
      <div className="wrap max-w-[1000px]">
        <div className="text-center mb-16">
          <Reveal delay={0}>
            <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-base mb-4">Simple Pricing</div>
            <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-ink mb-5">
              Two scans.<br/>₹299. No subscription.
            </h2>
            <p className="text-[17px] text-text-mid max-w-[640px] mx-auto leading-[1.6]">
              One-time payment. Every ₹299 includes two scans — one to diagnose, one to confirm your fix. No recurring charges, ever.<br className="hidden md:block"/> 
              <span className="font-bold text-teal-base mt-2 inline-block">Comparable to a ₹2,000 professional diagnostic — two full scans for ₹299*</span>
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Card 1: Best Value */}
          <Reveal delay={100}>
            <div className="relative rounded-[24px] bg-[#073126] text-white p-8 lg:p-10 flex flex-col h-full shadow-[0_20px_40px_rgba(4,52,44,0.25)] border border-[rgba(255,255,255,0.08)] transform hover:-translate-y-1 transition-transform duration-300">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-base/10 rounded-bl-full -z-10 blur-xl"></div>
              
              <div className="absolute -top-3 left-8 bg-amber-base text-ink font-bold text-[11px] tracking-wider uppercase px-4 py-1.5 rounded-full shadow-sm">
                Best value
              </div>

              <div className="mb-8">
                <h3 className="font-inter font-black text-[28px] mb-2">Scan + Re-Scan</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-inter font-black text-[42px] tracking-tight leading-none">₹299</span>
                  <span className="text-[20px] font-bold text-amber-base">*</span>
                </div>
                <div className="text-[14px] text-white/70 font-medium">2 scan credits · diagnose, then verify your fix</div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {[
                  'Two full scans of all 12 hardware checks',
                  'Re-scan to confirm repairs & compare results',
                  'Hardware Security Lock across both scans',
                  'Two downloadable A–F PDF certificates',
                  'Scan ID verifiable at tekki-x.com/verify'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[14.5px] text-white/90 leading-[1.5]">{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-amber-base text-ink font-bold text-[16px] py-4 rounded-xl hover:bg-amber-light transition-colors duration-200">
                Get 2 scans · ₹299*
              </button>
            </div>
          </Reveal>

          {/* Card 2: Household Pack */}
          <Reveal delay={200}>
            <div className="relative rounded-[24px] bg-white border border-[rgba(29,158,117,0.15)] text-ink p-8 lg:p-10 flex flex-col h-full shadow-[0_8px_24px_rgba(4,52,44,0.04)] transform hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(4,52,44,0.08)] hover:border-[rgba(29,158,117,0.3)] transition-all duration-300">
              
              <div className="mb-8 mt-1">
                <h3 className="font-inter font-black text-[28px] mb-2">Household Pack</h3>
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="font-inter font-black text-[42px] tracking-tight leading-none text-teal-dark">₹699</span>
                  <span className="text-[20px] font-bold text-teal-base">*</span>
                </div>
                <div className="text-[14px] text-text-soft font-bold">6 scan credits · cover up to 3 computers</div>
              </div>

              <div className="space-y-4 mb-10 flex-grow">
                {[
                  'Credits never expire — use them when you need them',
                  'Everything in Scan + Re-Scan, ×3',
                  'Mix across machines — best per-scan price',
                  'Pre-pay for a future moment of need — no new purchase decision each time',
                  'Priority email support'
                ].map((feat, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-teal-ghost flex items-center justify-center shrink-0 border border-[rgba(29,158,117,0.1)]">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <span className="text-[14.5px] text-text-soft leading-[1.5]">{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white border-2 border-teal-base text-teal-base font-bold text-[16px] py-3.5 rounded-xl hover:bg-teal-ghost transition-colors duration-200">
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
          <div className="bg-teal-ghost border border-[rgba(29,158,117,0.2)] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
            <div>
              <h4 className="font-inter font-black text-[18px] text-ink mb-1.5">Are you a repair shop, IT reseller, or refurbisher?</h4>
              <p className="text-[14px] text-text-mid leading-[1.6] max-w-[600px]">
                Partner tools live on a dedicated page — bulk licensing, repair leads, and lifecycle certification.
              </p>
            </div>
            <button className="whitespace-nowrap font-bold text-[14px] text-white bg-teal-mid hover:bg-teal-base px-6 py-3 rounded-lg transition-colors shadow-sm shrink-0">
              Become a Partner &rarr;
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
