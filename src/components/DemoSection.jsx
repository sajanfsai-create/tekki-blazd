import React, { useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import DemoVideoSimulation from './DemoVideoSimulation';
import SampleReportPreview from './SampleReportPreview';

export default function DemoSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <section className="bg-off-white py-24" id="demo">
      <div className="wrap">
        <Reveal delay={0}>
          <div className="text-[13px] tracking-[3px] uppercase font-extrabold text-teal-base mb-3.5 text-center">See It For Yourself</div>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="font-inter font-black tracking-tight text-[34px] md:text-[48px] leading-[1.04] text-center text-ink max-w-[680px] mx-auto mb-4.5">Watch a scan.<br />Read a real report.</h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="text-[17px] text-text-mid text-center max-w-[580px] mx-auto mb-14">See exactly what you get before you pay a single rupee.</p>
        </Reveal>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal delay={300}>
            <div className="group rounded-2xl p-11 md:p-14 relative overflow-hidden min-h-[300px] flex flex-col justify-end bg-gradient-to-br from-teal-mid to-teal-deep text-white transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(4,52,44,0.3)]">
              <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
              <div className="absolute top-[42px] left-11 md:left-14 w-15 h-15 rounded-xl bg-white/18 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff" className="transition-transform duration-500 group-hover:scale-110"><path d="M8 5v14l11-7z"/></svg>
              </div>
              <h3 className="font-inter font-black text-3xl tracking-tight mb-3">The 3-minute scan demo</h3>
              <p className="text-[16px] mb-7 max-w-[380px] leading-[1.55] text-teal-pale">A full Tekki Blaze scan — from download to finished health report. No edits, no tricks.</p>
              <button onClick={() => setIsVideoOpen(true)} className="inline-flex items-center gap-2.75 font-extrabold text-[16px] px-[30px] py-[15px] rounded-xl self-start transition-transform duration-150 bg-white text-teal-mid hover:-translate-y-0.75 cursor-pointer">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#0F6E56"><path d="M8 5v14l11-7z"/></svg> Play Demo Video
              </button>
            </div>
          </Reveal>
          
          <Reveal delay={450}>
            <div className="group rounded-2xl p-11 md:p-14 relative overflow-hidden min-h-[300px] flex flex-col justify-end bg-gradient-to-br from-amber-base to-amber-dark text-ink transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(239,159,39,0.35)]">
              <div className="absolute top-0 left-[-100%] w-[200%] h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-1000 group-hover:translate-x-[100%]"></div>
              <div className="absolute top-[42px] left-11 md:left-14 w-15 h-15 rounded-xl bg-ink/12 flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="transition-transform duration-500 group-hover:scale-110"><path d="M7 3h8l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#0D1F1A" strokeWidth="1.8" strokeLinejoin="round"/><path d="M14 3v5h5" stroke="#0D1F1A" strokeWidth="1.8"/></svg>
              </div>
              <h3 className="font-inter font-black text-3xl tracking-tight mb-3">A sample report</h3>
              <p className="text-[16px] mb-7 max-w-[380px] leading-[1.55] text-teal-deep/85">Open a real, anonymised A–F report PDF — the exact document you receive after a scan.</p>
              <button onClick={() => setIsReportOpen(true)} className="inline-flex items-center gap-2.75 font-extrabold text-[16px] px-[30px] py-[15px] rounded-xl self-start transition-transform duration-150 bg-teal-deep text-white hover:-translate-y-0.75 cursor-pointer">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M14 3v5h5M9 13h6M9 17h6M7 3h8l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round"/></svg> View Sample Report
              </button>
            </div>
          </Reveal>
        </div>
      </div>

      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
        <DemoVideoSimulation onViewReport={() => {
          setIsVideoOpen(false);
          setTimeout(() => setIsReportOpen(true), 300); // Slight delay for smoother transition
        }} />
      </Modal>

      <Modal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)}>
        <SampleReportPreview />
      </Modal>
    </section>
  )
}
