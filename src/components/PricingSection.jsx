import React from 'react';
import Reveal from './Reveal';

export default function PricingSection() {
  return (
    <section id="pricing" className="py-10 bg-[#fbfcfc]">
      <div className="wrap max-w-[1200px]">

        <div className="wrap max-w-[1000px]">
          <div className="text-center mb-10">
            <Reveal delay={0}>
              <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-dark mb-0 flex flex-col items-center">
                <span>Simple Pricing</span>
                <div className="w-6 h-[2px] bg-amber-brand mt-2.5 rounded-full"></div>
              </div>
              <h2 className="font-inter font-[800] tracking-tight text-[36px] md:text-[48px] leading-[1.05] text-ink mb-6">
                Two scans.<br /><span className="text-[#0f6e56]">₹299.</span> No subscription.
              </h2>
              <p className="text-[16px] text-text-soft max-w-[650px] mx-auto leading-[1.6]">
                One payment covers the complete 12-part check twice — find it, fix it, confirm it’s gone.<br className="hidden sm:block" />
                GST included. Credits never expire.
              </p>
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="max-w-[620px] mx-auto bg-[#fcf3e1] border border-[#f2dcb6] rounded-[20px] px-6 py-3 mb-16 shadow-sm">
              <div className="flex flex-col items-center gap-3 mb-6">
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Real benchmarks',
                    'Compatibility matrix',
                    'One-click cleanup',
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-white border border-[#f2dcb6] text-ink text-[13px] font-bold py-1.5 px-4 rounded-full flex items-center shadow-sm">
                      <span className="text-amber-brand mr-2">✓</span> {feature}
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-3">
                  {[
                    'Upgrade cost estimates',
                    'Hardware fingerprint'
                  ].map((feature, idx) => (
                    <div key={idx} className="bg-white border border-[#f2dcb6] text-ink text-[13px] font-bold py-1.5 px-4 rounded-full flex items-center shadow-sm">
                      <span className="text-amber-brand mr-2">✓</span> {feature}
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center text-[14px] text-text-soft">
                All inside the same ₹299. <span className="text-[#c28022] font-bold">Nothing extra to buy. Nothing to unlock.</span>
              </div>
            </div>
          </Reveal>

        </div>

        <Reveal delay={100}>
          {/* 4 Steps Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl p-5 border border-[rgba(29,158,117,0.12)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#eaf7f2] text-[#0f6e56] font-bold flex items-center justify-center shrink-0 text-[13px]">
                1
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-ink mb-1 leading-tight">Pay once</h4>
                <p className="text-[13px] text-text-soft leading-snug">UPI or card · takes a minute</p>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-white rounded-2xl p-5 border border-[rgba(29,158,117,0.12)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#eaf7f2] text-[#0f6e56] font-bold flex items-center justify-center shrink-0 text-[13px]">
                2
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-ink mb-1 leading-tight">Get your download link</h4>
                <p className="text-[13px] text-text-soft leading-snug">Instantly, by email — one small file</p>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-white rounded-2xl p-5 border border-[rgba(29,158,117,0.12)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#eaf7f2] text-[#0f6e56] font-bold flex items-center justify-center shrink-0 text-[13px]">
                3
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-ink mb-1 leading-tight">Run it — no install</h4>
                <p className="text-[13px] text-text-soft leading-snug">Report & PDF certificate in ~3 minutes</p>
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-white rounded-2xl p-5 border border-[rgba(29,158,117,0.12)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] flex items-start gap-4">
              <div className="w-8 h-8 rounded-full bg-[#eaf7f2] text-[#0f6e56] font-bold flex items-center justify-center shrink-0 text-[13px]">
                4
              </div>
              <div>
                <h4 className="font-bold text-[15px] text-ink mb-1 leading-tight">Fix, then re-scan</h4>
                <p className="text-[13px] text-text-soft leading-snug">Your 2nd credit waits — it never expires</p>
              </div>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-8 max-w-[1100px] mx-auto items-stretch">
            {/* Card 1: Best Value */}
            <div className="relative rounded-[20px] bg-white p-7 lg:p-9 flex flex-col h-full border border-amber-brand shadow-[0_8px_32px_rgba(239,159,39,0.1)]">

              <div className="absolute top-0 right-6 -translate-y-1/2 bg-amber-brand text-ink font-bold text-[10px] tracking-[1px] uppercase px-3.5 py-1.5 rounded-full shadow-sm">
                Best value
              </div>

              <div className="mb-6">
                <h3 className="font-inter font-black text-[18px] mb-2 text-ink">Scan + Re-Scan</h3>
                <div className="flex items-start mb-2">
                  <span className="text-[22px] font-bold text-amber-brand mt-1.5 mr-0.5">₹</span>
                  <span className="font-inter font-black text-[52px] tracking-tight leading-none text-ink">299</span>
                </div>
                <div className="text-[13px] text-text-soft">2 scan credits · diagnose, then verify your fix</div>
              </div>

              <div className="flex flex-col mb-8 flex-grow">
                {[
                  'Two full scans of all 12 hardware checks',
                  'Re-scan to confirm repairs & compare results',
                  'Hardware Fingerprint verified across both scans',
                  'Two downloadable A–F PDF certificates',
                  'Benchmarks, Compatibility Matrix & one-click cleanup included'
                ].map((feat, i) => (
                  <div key={i} className={`flex items-start gap-3 py-2 ${i !== 0 ? 'border-t border-[rgba(29,158,117,0.1)]' : ''}`}>
                    <div className="mt-0.5 shrink-0 text-amber-brand">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 8 10 16 7 13"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-text-mid leading-[1.5]">{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-amber-brand text-ink font-bold text-[15px] py-3.5 rounded-xl hover:bg-amber-light transition-colors duration-200 shadow-[0_4px_12px_rgba(239,159,39,0.2)]">
                Get my 2 scans
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#0D1F1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </button>
            </div>

            {/* Card 2: Household Pack */}
            <div className="relative rounded-[20px] bg-white p-7 lg:p-9 flex flex-col h-full border border-[rgba(29,158,117,0.15)] shadow-[0_4px_24px_rgba(4,52,44,0.03)]">

              <div className="mb-6">
                <h3 className="font-inter font-black text-[18px] mb-2 text-ink">Household Pack</h3>
                <div className="flex items-start mb-2">
                  <span className="text-[22px] font-bold text-amber-brand mt-1.5 mr-0.5">₹</span>
                  <span className="font-inter font-black text-[52px] tracking-tight leading-none text-ink">699</span>
                </div>
                <div className="text-[13px] text-text-soft">6 scan credits · cover up to 3 computers</div>
              </div>

              <div className="bg-[#eaf7f2] rounded-[10px] p-3 flex items-center gap-2.5 mb-6">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="shrink-0"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                <span className="text-[13px] font-bold text-[#0F6E56] leading-[1.4]">Credits never expire — use them when you need them</span>
              </div>

              <div className="flex flex-col mb-8 flex-grow">
                {[
                  'Everything in Scan + Re-Scan, ×3',
                  'Mix across machines — best per-scan price',
                  'Pre-pay for a future moment of need — no new purchase decision each time',
                  'Priority email support'
                ].map((feat, i) => (
                  <div key={i} className={`flex items-start gap-3 py-2 ${i !== 0 ? 'border-t border-[rgba(29,158,117,0.1)]' : ''}`}>
                    <div className="mt-0.5 shrink-0 text-amber-brand">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="16 8 10 16 7 13"></polyline></svg>
                    </div>
                    <span className="text-[13px] text-text-mid leading-[1.5]">{feat}</span>
                  </div>
                ))}
              </div>

              <button className="w-full flex items-center justify-center gap-2 bg-white border border-amber-brand text-ink font-bold text-[15px] py-3.5 rounded-xl hover:bg-[rgba(239,159,39,0.05)] transition-colors duration-200">
                Buy Household Pack <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#0D1F1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>

              </button>
            </div>
          </div>

          {/* Footer text */}
          <div className="text-center mb-16">
            <p className="text-[13px] text-text-soft">
              One-time payment · UPI / card · no subscription, ever. All prices inclusive of GST.
            </p>
          </div>
        </Reveal>

        {/* Partner Banner */}
        <div className="bg-white border border-[rgba(29,158,117,0.15)] rounded-[20px] p-[28px] md:p-[32px] flex flex-col items-start shadow-[0_4px_24px_rgba(4,52,44,0.03)]">
          <div className="text-[15px] leading-[1.6] mb-[20px]">
            <span className="font-inter font-black text-ink">Are you a repair shop, IT reseller, or refurbisher?</span>
            <span className="text-text-soft ml-1">Partner tools live on a dedicated page — bulk licensing, repair leads, and lifecycle certification.</span>
          </div>
          <a href="/tekkiblaze-partners" className="whitespace-nowrap font-bold text-[14px] text-amber-dark bg-white border border-[rgba(29,158,117,0.15)] px-[24px] py-[12px] rounded-xl shadow-sm hover:border-[rgba(29,158,117,0.3)] hover:bg-[#fbfcfc] transition-all">
            Become a Partner &rarr;
          </a>
        </div>
      </div>
    </section>
  )
}
