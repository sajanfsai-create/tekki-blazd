import React, { useState } from 'react';
import Reveal from './Reveal';

export default function FAQSection() {
 const [openIndex, setOpenIndex] = useState(null);

 const toggleAccordion = (index) => {
 setOpenIndex(prev => prev === index ? null : index);
 };

 const faqs = [
 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
 </svg>
 ),
 q: "Where does my diagnostic data go?",
 a: (
 <>
 <p className="mb-5 text-[15px] leading-[1.6] text-text-mid">The entire raw diagnostic pipeline runs on your device, inside your own memory. The cloud only acts as a styling layer that turns finished data into your clean PDF. <span className="font-bold text-ink">Zero cloud retention</span> — no log files, usage data or hardware identifiers are stored permanently, and we never build a profile of your device. The only thing we keep is your certificate record — Scan ID, grade and date — so anyone can verify your report at tekki-x.com/verify. Never the raw diagnostics.</p>

 <div className="space-y-3.5">
 <div className="flex items-start gap-3">
 <div className="mt-0.5 text-amber-base shrink-0">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
 </div>
 <div className="text-[15px] leading-[1.5] text-text-mid">
 <span className="font-bold text-ink">No kernel-level / ring-0 access</span> and no security toggles touched.
 </div>
 </div>
 <div className="flex items-start gap-3">
 <div className="mt-0.5 text-amber-base shrink-0">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
 </div>
 <div className="text-[15px] leading-[1.5] text-text-mid">
 <span className="font-bold text-ink">No background service</span> left running after the scan completes.
 </div>
 </div>
 </div>
 </>
 )
 },

 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path>
 </svg>
 ),
 q: "How do I know the certificate is real and can’t be faked?",
 a: (
 <>
 <p className="mb-4 text-[15px] leading-[1.6] text-text-mid">Every report gets a unique Scan ID printed on the PDF. Anyone holding that Scan ID can look it up at <span className="font-bold text-teal-base">tekki-x.com/verify</span> and see: “Yes, this is a real, unaltered Tekki Blaze report, scanned on [date].” The buyer doesn’t have to trust the seller or the brand — they verify it themselves in 10 seconds.</p>
 <p className="text-[15px] leading-[1.6] text-text-mid">The Hardware Fingerprint additionally records each component’s unique signature in your report. Every re-scan quietly confirms your SSD, RAM and GPU are exactly as recorded — added assurance for both buyer and seller.</p>
 </>
 )
 },
 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
 </svg>
 ),
 q: "Will re-scanning after a repair feel awkward with my technician?",
 a: (
 <>
 <p className="mb-4 text-[15px] leading-[1.6] text-text-mid">Not at all — a re-scan is simply a receipt for hardware, the same way you’d keep a printed invoice. It confirms the repair worked and gives both you and your technician a shared, verified record of the outcome.</p>
 <p className="text-[15px] leading-[1.6] text-text-mid">It’s a private record for your own peace of mind. In fact, the best technicians encourage it — a Tekki X-verified technician welcomes re-scans as part of their service guarantee, because a verified result reflects well on their work.</p>
 </>
 )
 },
 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
 </svg>
 ),
 q: "Does it need Admin or kernel privileges?",
 a: (
 <>
 <p className="mb-4 text-[15px] leading-[1.6] text-text-mid">The scan itself needs no admin rights — it runs with standard user rights, reads hardware status only, never touches your personal files, installs no driver, and leaves no background service running.</p>
 <p className="text-[15px] leading-[1.6] text-text-mid">If you choose the optional one-click cleanup (removing temp files, enabling a better power plan), Windows will ask for your permission first — nothing is changed without your explicit consent, and your security guardrails are never disabled.</p>
 </>
 )
 },
 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line>
 </svg>
 ),
 q: "What architectures & OS are supported?",
 a: (
 <>
 <div className="border-t border-[rgba(29,158,117,0.1)] mt-2">
 <div className="flex flex-col sm:flex-row py-3.5 border-b border-[rgba(29,158,117,0.1)] gap-2 sm:gap-6 items-start sm:items-center">
 <div className="w-full sm:w-[180px] text-[13px] text-text-soft">CPU Architecture</div>
 <div className="flex-1 flex flex-wrap gap-2">
 <span className="px-2 py-0.5 border border-[rgba(29,158,117,0.2)] rounded text-[12px] font-bold text-ink bg-white">x86</span>
 <span className="px-2 py-0.5 border border-[rgba(29,158,117,0.2)] rounded text-[12px] font-bold text-ink bg-white">x64</span>
 <span className="px-2 py-0.5 border border-[rgba(29,158,117,0.2)] rounded text-[12px] font-bold text-ink bg-white">ARM64</span>
 </div>
 </div>
 <div className="flex flex-col sm:flex-row py-3.5 border-b border-[rgba(29,158,117,0.1)] gap-2 sm:gap-6 items-start sm:items-center">
 <div className="w-full sm:w-[180px] text-[13px] text-text-soft">Minimum OS</div>
 <div className="flex-1 text-[13px] text-ink flex flex-wrap items-center gap-1.5 font-medium">
 Windows 10 (Build <span className="px-1.5 py-[2px] border border-[rgba(29,158,117,0.2)] rounded text-[12px] font-bold text-ink bg-white leading-none">19041</span> / 20H1+)
 </div>
 </div>
 <div className="flex flex-col sm:flex-row py-3.5 border-b border-[rgba(29,158,117,0.1)] gap-2 sm:gap-6 items-start sm:items-center">
 <div className="w-full sm:w-[180px] text-[13px] text-text-soft">Recommended</div>
 <div className="flex-1 text-[13px] text-ink font-medium">
 Windows 11 (all builds)
 </div>
 </div>
 <div className="flex flex-col sm:flex-row py-3.5 border-b border-[rgba(29,158,117,0.1)] gap-2 sm:gap-6 items-start sm:items-center">
 <div className="w-full sm:w-[180px] text-[13px] text-text-soft">Coming soon</div>
 <div className="flex-1 text-[13px] text-ink font-medium">
 macOS & Linux — <a href="#" className="font-bold border-b-2 border-amber-brand hover:text-amber-dark transition-colors">join waitlist</a>
 </div>
 </div>
 </div>
 <p className="text-[13px] leading-[1.6] text-text-soft italic mt-4">No .NET runtime download, no driver installation, nothing left running after the scan.</p>
 </>
 )
 },
 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline>
 </svg>
 ),
 q: "When should I use my second scan?",
 a: <p className="text-[15px] leading-[1.6] text-text-mid">The second scan is for confirmation — use it after a repair to verify the fix worked and your machine matches its original report, after buying a used laptop to compare against the seller’s report, or before a big moment like placements or a semester start. Household Pack credits never expire, so you can pre-pay and use them whenever the need arises.</p>
 },
 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="4"></circle><line x1="4.93" y1="4.93" x2="9.17" y2="9.17"></line><line x1="14.83" y1="14.83" x2="19.07" y2="19.07"></line><line x1="14.83" y1="9.17" x2="19.07" y2="4.93"></line><line x1="14.83" y1="9.17" x2="18.36" y2="5.64"></line>
 </svg>
 ),
 q: "What if the scan doesn’t work on my machine?",
 a: <p className="text-[15px] leading-[1.6] text-text-mid">If a scan fails to complete on a supported Windows 10/11 machine, we’ll re-issue the credit or refund that scan — write to support@tekki-x.com with your Scan ID and we’ll sort it out. Unused credits never expire, so there’s no pressure to use them before you’re ready.</p>
 },
 {
 icon: (
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <circle cx="12" cy="12" r="10"></circle><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" y1="9" x2="9.01" y2="9"></line><line x1="15" y1="9" x2="15.01" y2="9"></line>
 </svg>
 ),
 q: "Windows warned me about the download. Is it safe?",
 a: <p className="text-[15px] leading-[1.6] text-text-mid">Windows SmartScreen sometimes shows a caution screen for newer publishers — that’s normal for any young software brand. Tekki Blaze is Authenticode code-signed, which means Windows can cryptographically confirm the file is genuinely ours and untampered. Click “More info → Run anyway” and check that the verified publisher reads <strong>Tekki-X</strong> before proceeding. If the publisher name doesn’t match, don’t run it — download only from tekki-x.com.</p>
 }
 ];

 return (
 <section className="py-24 bg-white" id="faq">
 <div className="wrap max-w-[1140px]">

 {/* Header matching inspiration image exactly */}
 <div className="text-center mb-[48px]">
 <Reveal delay={0}>
 <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-dark mb-4 flex flex-col items-center">
 <span>Transparency</span>
 <div className="w-6 h-[2px] bg-amber-brand mt-2.5 rounded-full"></div>
 </div>
 <h2 className="font-inter font-[800] tracking-tight text-[30px] md:text-[42px] leading-[1.04] text-ink mb-[20px]">
 Questions,<br />
 <span className="text-[#0f6e56]">answered plainly.</span>
 </h2>
 <p className="text-[16px] text-text-mid max-w-[700px] mx-auto leading-[1.6]">
 Everything a privacy-conscious user, first-time buyer, or IT professional wants to know.
 </p>
 </Reveal>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
 {/* Left Column */}
 <div className="space-y-4">
 {faqs.filter((_, i) => i % 2 === 0).map((faq) => {
 const originalIndex = faqs.indexOf(faq);
 const isOpen = openIndex === originalIndex;
 return (
 <Reveal delay={100 + (originalIndex * 50)} key={originalIndex}>
 <div className="bg-white border border-[rgba(29,158,117,0.15)] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(4,52,44,0.02)] transition-shadow hover:shadow-[0_4px_16px_rgba(4,52,44,0.04)]">
 <button
 onClick={() => toggleAccordion(originalIndex)}
 className="w-full text-left px-5 md:px-6 py-4 flex items-center justify-between gap-4 outline-none transition-all duration-300 bg-transparent"
 >
 <div className="flex items-center gap-4 md:gap-5">
 <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl bg-[#eaf7f2] text-[#0f6e56] flex items-center justify-center shrink-0">
 {faq.icon}
 </div>
 <h3 className="font-inter font-bold text-[15px] md:text-[16px] text-ink">
 {faq.q}
 </h3>
 </div>
 <div className="w-[26px] h-[26px] rounded-full bg-amber-base flex items-center justify-center shrink-0 shadow-sm text-ink font-bold">
 {isOpen ? (
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
 ) : (
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
 )}
 </div>
 </button>

 <div
 className={`px-6 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] pb-6 pt-2 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0'}`}
 >
 <div className="pl-0 md:pl-[58px]">
 {faq.a}
 </div>
 </div>
 </div>
 </Reveal>
 );
 })}
 </div>

 {/* Right Column */}
 <div className="space-y-4">
 {faqs.filter((_, i) => i % 2 === 1).map((faq) => {
 const originalIndex = faqs.indexOf(faq);
 const isOpen = openIndex === originalIndex;
 return (
 <Reveal delay={100 + (originalIndex * 50)} key={originalIndex}>
 <div className="bg-white border border-[rgba(29,158,117,0.15)] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(4,52,44,0.02)] transition-shadow hover:shadow-[0_4px_16px_rgba(4,52,44,0.04)]">
 <button
 onClick={() => toggleAccordion(originalIndex)}
 className="w-full text-left px-5 md:px-6 py-4 flex items-center justify-between gap-4 outline-none transition-all duration-300 bg-transparent"
 >
 <div className="flex items-center gap-4 md:gap-5">
 <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl bg-[#eaf7f2] text-[#0f6e56] flex items-center justify-center shrink-0">
 {faq.icon}
 </div>
 <h3 className="font-inter font-bold text-[15px] md:text-[16px] text-ink">
 {faq.q}
 </h3>
 </div>
 <div className="w-[26px] h-[26px] rounded-full bg-amber-base flex items-center justify-center shrink-0 shadow-sm text-ink font-bold">
 {isOpen ? (
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
 ) : (
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
 )}
 </div>
 </button>

 <div
 className={`px-6 md:px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] pb-6 pt-2 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0'}`}
 >
 <div className="pl-0 md:pl-[58px]">
 {faq.a}
 </div>
 </div>
 </div>
 </Reveal>
 );
 })}
 </div>
 </div>
 </div>
 </section>
 )
}
