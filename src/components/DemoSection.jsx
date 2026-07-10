import React, { useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import VideoModal from './VideoModal';
import SampleReportPreview from './SampleReportPreview';

export default function DemoSection() {
 const [isVideoOpen, setIsVideoOpen] = useState(false);
 const [isReportOpen, setIsReportOpen] = useState(false);

 return (
 <section className="bg-white py-12 md:py-5" id="demo">
 <div className="wrap max-w-[840px]">

 {/* Proof CTA */}
 <Reveal delay={300}>
 <div className="mt-24 max-w-[700px] mx-auto relative">
 {/* Floating Badge */}
 <div className="absolute -top-3.5 right-6 sm:right-10 bg-amber-brand text-ink text-[11px] font-black tracking-wide uppercase px-4 py-1.5 rounded-full shadow-[0_8px_20px_rgba(239,159,39,0.4)] z-10">
 See it before you pay
 </div>

 {/* Card */}
 <div className="bg-white rounded-2xl px-6 py-5 sm:px-8 sm:py-6 flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-8 border border-[rgba(239,159,39,0.5)] shadow-[0_12px_60px_-10px_rgba(239,159,39,0.35)]">

 {/* Graphic Left */}
 <div className="shrink-0 flex flex-col gap-3 mt-1">
 <div className="w-[72px] h-[72px] rounded-[14px] bg-[#0d523c] flex items-center justify-center shadow-md mx-auto sm:mx-0">
 <span className="font-serif text-white text-[32px] font-bold">A</span>
 </div>
 <div className="flex flex-col gap-1.5 w-[85px] mx-auto sm:mx-0 mt-0.5">
 <div className="h-[5px] bg-[#1d9e75] rounded-full w-full"></div>
 <div className="h-[5px] bg-[#1d9e75] rounded-full w-[95%]"></div>
 <div className="h-[5px] bg-amber-brand rounded-full w-[75%]"></div>
 <div className="h-[5px] bg-[#1d9e75] rounded-full w-[85%]"></div>
 </div>
 </div>

 {/* Text Right */}
 <div className="flex-1 text-center sm:text-left mt-0.5">
 <div className="text-[11px] tracking-[2.5px] uppercase font-bold text-amber-dark mb-2">Proof, not promises</div>
 <h3 className="font-inter font-black text-[20px] text-ink mb-1.5 tracking-tight">From scan to a shareable A–F report.</h3>
 <p className="text-[14px] text-text-soft leading-relaxed mb-5 max-w-[420px] mx-auto sm:mx-0">
 Watch a 2-minute walkthrough, or download a real sample report to see exactly what you get.
 </p>

 <div className="flex items-center justify-center sm:justify-start gap-3">
 <button 
 onClick={() => setIsReportOpen(true)}
 className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] border border-[rgba(29,158,117,0.25)] text-[#00604b] text-[13px] font-bold hover:bg-teal-ghost transition-colors"
 >
 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
 Sample PDF
 </button>
 <button 
 onClick={() => setIsVideoOpen(true)}
 className="flex items-center gap-1.5 px-4 py-2 rounded-[10px] bg-[#0d221c] text-white text-[13px] font-bold hover:bg-[#153a2f] transition-colors shadow-[0_4px_12px_rgba(13,34,28,0.15)]"
 >
 <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M8 5v14l11-7z" /></svg>
 Watch video
 </button>
 </div>
 </div>
 </div>
 </div>
 </Reveal>
 </div>

 {/* Modals for Video and Report */}
 <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
 <VideoModal />
 </Modal>

 <Modal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)}>
 <SampleReportPreview />
 </Modal>
 </section>
 )
}
