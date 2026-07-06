import React, { useState } from 'react';
import Reveal from './Reveal';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

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
          <p className="mb-5 text-[15px] leading-[1.6] text-text-mid">The entire raw diagnostic pipeline runs on your device, inside your own memory. The cloud only acts as a styling layer that turns finished data into your clean PDF. <span className="font-bold text-ink">Zero cloud retention</span> — no log files, usage data or hardware identifiers are stored permanently. We never build a profile of your device.</p>

          <div className="space-y-3.5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-amber-base shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="text-[14.5px] leading-[1.5] text-text-mid">
                <span className="font-bold text-ink">No kernel-level / ring-0 access</span> and no security toggles touched.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-amber-base shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="text-[14.5px] leading-[1.5] text-text-mid">
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
          <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      q: "Why not just use free diagnostic tools?",
      a: (
        <>
          <p className="mb-5 text-[15px] leading-[1.6] text-text-mid">Free tools are good at one thing each. Blaze is different in three ways:</p>
          <div className="space-y-3.5">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-amber-base shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="text-[14.5px] leading-[1.5] text-text-mid">
                <span className="font-bold text-ink">Blaze checks 12 components in one pass</span> — free tools check one at a time and leave interpretation to you.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-amber-base shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="text-[14.5px] leading-[1.5] text-text-mid">
                <span className="font-bold text-ink">Blaze produces a tamper-evident, shareable certificate</span> — a buyer or repair shop will not accept a screenshot from a free utility.
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-0.5 text-amber-base shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
              </div>
              <div className="text-[14.5px] leading-[1.5] text-text-mid">
                <span className="font-bold text-ink">Blaze turns findings into next steps</span> — plain-English advice today, with part & technician matching on the roadmap.
              </div>
            </div>
          </div>
        </>
      )
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      q: "How do I know the certificate is real and can't be faked?",
      a: (
        <>
          <p className="mb-4 text-[15px] leading-[1.6] text-text-mid">Every report gets a unique Scan ID printed on the PDF. Anyone holding that Scan ID can look it up at <span className="font-bold text-teal-base">tekki-x.com/verify</span> and see: "Yes, this is a real, unaltered Tekki Blaze report, scanned on [date]." The buyer doesn't have to trust the seller or the brand — they verify it themselves in 10 seconds.</p>
          <p className="text-[15px] leading-[1.6] text-text-mid">The Hardware Security Lock additionally records each component's unique signature in your report. Every re-scan quietly confirms your SSD, RAM and GPU are exactly as recorded — added assurance for both buyer and seller.</p>
        </>
      )
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      q: "Will re-scanning after a repair feel awkward with my technician?",
      a: (
        <>
          <p className="mb-4 text-[15px] leading-[1.6] text-text-mid">Not at all — a re-scan is simply a receipt for hardware, the same way you'd keep a printed invoice. It confirms the repair worked and gives both you and your technician a shared, verified record of the outcome.</p>
          <p className="text-[15px] leading-[1.6] text-text-mid">It's a private record for your own peace of mind. In fact, the best technicians encourage it — a Tekki-verified technician welcomes re-scans as part of their service guarantee, because a verified result reflects well on their work.</p>
        </>
      )
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      q: "Does it need Admin or kernel privileges?",
      a: <p className="text-[15px] leading-[1.6] text-text-mid">No. Blaze runs with standard user rights and never disables your Windows security guardrails. It reads hardware status — it never touches your personal files, installs a driver, or leaves a background service running.</p>
    },
    {
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>
        </svg>
      ),
      q: "When should I use my second scan?",
      a: <p className="text-[15px] leading-[1.6] text-text-mid">The second scan is for confirmation — use it after a repair to verify the fix worked and your machine matches its original report, after buying a used laptop to compare against the seller's report, or before a big moment like placements or a semester start. Household Pack credits never expire, so you can pre-pay and use them whenever the need arises.</p>
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white" id="faq">
      <div className="wrap max-w-[840px]">

        {/* Header matching inspiration image exactly */}
        <div className="text-center mb-[48px]">
          <Reveal delay={0}>
            <div className="text-[11px] tracking-[2px] uppercase font-bold text-amber-dark mb-[12px]">Transparency</div>
            <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-ink mb-[20px]">
              Questions,<br />
              <span className="text-[#0f6e56]">answered plainly.</span>
            </h2>
            <p className="text-[16px] text-text-mid max-w-[700px] mx-auto leading-[1.6]">
              Everything a privacy-conscious user, first-time buyer, or IT professional wants to know.
            </p>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal delay={100 + (index * 50)} key={index}>
                <div className="bg-white border border-[rgba(29,158,117,0.15)] rounded-2xl overflow-hidden shadow-[0_2px_12px_rgba(4,52,44,0.02)] transition-shadow hover:shadow-[0_4px_16px_rgba(4,52,44,0.04)]">

                  {/* The header is what gets the black border when active */}
                  <button
                    onClick={() => toggleAccordion(index)}
                    className={`w-full text-left px-5 md:px-6 py-4 flex items-center justify-between gap-4 outline-none transition-all duration-300 rounded-t-2xl ${isOpen ? 'border-b-0 border-[1.5px] border-ink rounded-b-[10px]' : 'border-[1.5px] border-transparent'
                      }`}
                    style={{ margin: isOpen ? '-1px' : '0' }} // Offset the border width so it doesn't shift the layout
                  >
                    <div className="flex items-center gap-4 md:gap-5">
                      <div className="w-[38px] h-[38px] md:w-[42px] md:h-[42px] rounded-xl bg-[#eaf7f2] text-[#0f6e56] flex items-center justify-center shrink-0">
                        {faq.icon}
                      </div>
                      <h3 className="font-inter font-bold text-[16px] md:text-[17px] text-ink">
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
                    className={`px-6 md:px-8 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[800px] pb-8 pt-5 opacity-100' : 'max-h-0 pb-0 pt-0 opacity-0'}`}
                  >
                    <div className="pl-0 md:pl-[62px]">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  )
}
