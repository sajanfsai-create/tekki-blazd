import React, { useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import DemoVideoSimulation from './DemoVideoSimulation';
import SampleReportPreview from './SampleReportPreview';

export default function DemoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <section className="bg-white py-12 md:py-5" id="demo">
      <div className="wrap max-w-[840px]">

        <Reveal delay={0}>
          <div className="bg-white border border-[rgba(29,158,117,0.15)] rounded-[20px] p-6 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12 items-start shadow-[0_4px_24px_rgba(4,52,44,0.02)]">

            {/* Left Graphic */}
            <div className="flex flex-col gap-2.5 shrink-0 pt-2 pl-2">
              <div className="w-[84px] h-[84px] rounded-[18px] bg-[#125845] flex items-center justify-center shrink-0 mb-1 shadow-sm">
                <span className="font-serif font-bold text-[48px] text-white leading-none">A</span>
              </div>
              <div className="w-[100px] h-[7px] rounded-full bg-[#1b9a70]"></div>
              <div className="w-[90px] h-[7px] rounded-full bg-[#1b9a70]"></div>
              <div className="w-[80px] h-[7px] rounded-full bg-[#f1a129]"></div>
              <div className="w-[90px] h-[7px] rounded-full bg-[#1b9a70]"></div>
            </div>

            {/* Right Content */}
            <div className="flex-1">
              <div className="text-[12px] tracking-[3px] uppercase font-bold text-[#b57d2a] mb-2.5">
                Proof, not promises
              </div>
              <h2 className="font-inter font-black tracking-tight text-[24px] md:text-[28px] leading-[1.2] text-ink mb-3">
                From scan to a shareable A–F report.
              </h2>
              <p className="text-[15px] md:text-[16px] text-text-mid max-w-[540px] mb-6 leading-[1.6]">
                Watch a 2-minute walkthrough, or download a real sample report to see exactly what you get.
              </p>

              <div className="flex flex-wrap items-center gap-3">
                <button
                  onClick={() => setIsReportOpen(true)}
                  className="inline-flex items-center justify-center gap-2 font-bold text-[14.5px] px-5 py-2.5 rounded-xl transition-all duration-200 bg-white text-ink border border-[rgba(29,158,117,0.2)] hover:border-[rgba(29,158,117,0.4)] hover:bg-off-white hover:-translate-y-0.5"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                  Sample PDF
                </button>
                <button
                  onClick={() => setIsVideoOpen(true)}
                  className="inline-flex items-center justify-center gap-2 font-bold text-[14.5px] px-6 py-2.5 rounded-xl transition-all duration-200 bg-[#0d221c] text-white hover:bg-[#153a2f] hover:-translate-y-0.5"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z" /></svg>
                  Watch video
                </button>
              </div>
            </div>

          </div>
        </Reveal>

      </div>

      {/* Modals for Video and Report */}
      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
        <DemoVideoSimulation onViewReport={() => {
          setIsVideoOpen(false);
          setTimeout(() => setIsReportOpen(true), 300);
        }} />
      </Modal>

      <Modal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)}>
        <SampleReportPreview />
      </Modal>
    </section>
  )
}
