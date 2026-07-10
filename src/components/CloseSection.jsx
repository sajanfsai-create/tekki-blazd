import React, { useState } from 'react';
import Reveal from './Reveal';
import Modal from './Modal';
import VideoModal from './VideoModal';

export default function CloseSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  return (
    <section
      className="bg-[#0b1714] text-white relative overflow-hidden flex flex-col items-center justify-center px-4 py-24 md:py-16"
      id="get"
    >
      {/* Subtle background glow effect behind the buttons */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[20%] w-[500px] h-[300px] bg-amber-brand/10 blur-[100px] pointer-events-none rounded-full"></div>

      <div className="relative z-10 w-full max-w-[800px] text-center">
        <Reveal delay={0}>
          <h2 className="font-inter font-black tracking-tight text-[40px] md:text-[56px] leading-[1.1] mb-10">
            Stop guessing. <span className="text-amber-brand">Start knowing.</span>
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5">
            <button
              className="w-full sm:w-auto bg-amber-brand text-ink font-bold text-[15px] md:text-[16px] px-8 py-4 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(241,161,41,0.2)] hover:shadow-[0_0_40px_rgba(241,161,41,0.35)] hover:bg-amber-light hover:-translate-y-0.5"
            >
              Scan my computer · ₹299
            </button>
            <button
              onClick={() => setIsVideoOpen(true)}
              className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-bold text-[15px] md:text-[16px] px-8 py-4 rounded-xl transition-all duration-300 hover:bg-white/5 hover:border-white/30 hover:-translate-y-0.5"
            >
              Watch a scan &rarr;
            </button>
          </div>
        </Reveal>
      </div>

      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
        <VideoModal />
      </Modal>
    </section>
  )
}
