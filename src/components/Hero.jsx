import React, { useState } from 'react';
import { ArrowRight, PlayIcon } from './Icons';
import Reveal from './Reveal';
import Modal from './Modal';
import DemoVideoSimulation from './DemoVideoSimulation';
import SampleReportPreview from './SampleReportPreview';

function AppWindow() {
  const rows = [
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" rx="2" stroke="#0F6E56" strokeWidth="1.7" /><rect x="9" y="9" width="6" height="6" fill="#0F6E56" /></svg>,
      label: 'Processor',
      pct: '94%',
      score: '94/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="1.5" stroke="#0F6E56" strokeWidth="1.7" /><path d="M8 7V4M16 7V4" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round" /></svg>,
      label: 'Memory',
      pct: '88%',
      score: '88/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 7c0-1.1 3.1-2 7-2s7 .9 7 2-3.1 2-7 2-7-.9-7-2z" stroke="#BA7517" strokeWidth="1.6" /><path d="M5 7v10c0 1.1 3.1 2 7 2s7-.9 7-2V7" stroke="#BA7517" strokeWidth="1.6" /></svg>,
      label: 'Storage SSD',
      pct: '72%',
      score: '72/100',
      status: 'Watch',
      statusBg: 'bg-[#FCF0DC]',
      statusText: 'text-amber-dark',
      barColor: 'bg-amber-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="6" y="4" width="12" height="16" rx="2" stroke="#0F6E56" strokeWidth="1.7" /><path d="M10 4h4v2h-4z" fill="#0F6E56" /></svg>,
      label: 'Battery',
      pct: '81%',
      score: '81/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 3v9" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round" /><circle cx="12" cy="16" r="4" stroke="#0F6E56" strokeWidth="1.7" /></svg>,
      label: 'Thermals',
      pct: '90%',
      score: '90/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    }
  ];

  return (
    <div className="w-full bg-white border border-[rgba(29,158,117,0.16)] rounded-2xl shadow-hero overflow-hidden">
      {/* Title bar */}
      <div className="bg-ink px-[18px] py-[14px] flex items-center gap-2">
        <span className="w-[11px] h-[11px] rounded-full bg-[#FF6058] shrink-0"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-[#FFBE2F] shrink-0"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-[#28C940] shrink-0"></span>
        <span className="ml-3.5 font-mono text-[11.5px] text-amber-light">tekki-blaze · health-report</span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] text-teal-light font-semibold">
          <span className="w-[6px] h-[6px] rounded-full bg-amber-base animate-blink"></span> SCAN COMPLETE
        </span>
      </div>

      <div className="p-[26px] pb-7">
        {/* Header */}
        <div className="flex items-center gap-[18px] mb-[22px]">
          <div className="w-[88px] h-[88px] rounded-xl bg-gradient-to-br from-teal-deep to-teal-mid flex items-center justify-center shrink-0 shadow-[0_10px_26px_rgba(8,80,65,0.35)]">
            <span className="font-serif font-bold text-[42px] text-white leading-none">A</span>
          </div>
          <div>
            <div className="text-[11.5px] tracking-[1px] uppercase text-text-soft font-semibold mb-[3px]">Overall Hardware Grade</div>
            <div className="font-serif text-[21px] font-bold text-ink mb-[2px]">Healthy & Reliable</div>
            <div className="text-[12.5px] text-text-soft">12 components checked · 0 critical issues</div>
          </div>
        </div>

        {/* Device info */}
        <div className="font-mono text-[11px] text-text-soft bg-off-white border border-[rgba(29,158,117,0.16)] rounded-md px-3 py-2 mb-5 flex justify-between items-center gap-4">
          <span className="truncate">DELL INSPIRON 15 · i5-1135G7</span>
          <span className="shrink-0">SCAN #A29F · 2:54</span>
        </div>

        {/* Rows */}
        <div className="flex flex-col">
          {rows.map((row, i) => (
            <div key={i} className={`flex items-center gap-3 py-2.5 ${i < rows.length - 1 ? 'border-b border-[rgba(29,158,117,0.16)]' : ''}`}>
              <span className="w-8 h-8 rounded-lg bg-teal-ghost flex items-center justify-center shrink-0">{row.icon}</span>
              <span className="text-[13px] font-semibold text-ink w-24 shrink-0 truncate">{row.label}</span>
              <div className="flex-1 h-2 rounded-sm bg-off-white overflow-hidden min-w-[50px]">
                <i className={`block h-full rounded-sm ${row.barColor} animate-progress`} style={{ width: row.pct }}></i>
              </div>
              <span className="font-mono text-[12px] font-medium text-text-mid w-[54px] text-right shrink-0">{row.score}</span>
              <span className={`text-[10px] font-bold py-[3px] px-[9px] rounded-full w-16 text-center ${row.statusBg} ${row.statusText} shrink-0`}>
                {row.status}
              </span>
            </div>
          ))}
        </div>

        {/* Footer buttons */}
        <div className="flex gap-[9px] mt-[16px]">
          <a href="#demo" className="flex-1 flex items-center justify-center gap-1.5 text-center text-[12.5px] font-bold p-[11px] rounded-[11px] bg-ink text-amber-base hover:bg-black transition-colors">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 inline-block align-[-2px]"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Download PDF</span>
          </a>
          <a href="#demo" className="flex-1 text-center text-[12.5px] font-bold p-[11px] rounded-[11px] bg-off-white border border-[rgba(239,159,39,0.3)] text-amber-base hover:bg-[#fcf0dc] transition-colors">
            Share via WhatsApp
          </a>
        </div>

        {/* Verification Banner */}
        <div className="mt-[12px] bg-teal-ghost text-teal-mid rounded-[10px] px-3 py-[8px] flex items-center justify-center gap-[7px] text-[12px] font-semibold">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/><path d="M8 12l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
          Scan ID: A29F · Anyone can verify this report at tekki-x.com/verify
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <header className="py-[70px] md:pb-20 bg-[radial-gradient(110%_70%_at_80%_0%,var(--color-teal-ghost),var(--color-off-white)_52%,var(--color-white))] overflow-hidden relative">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-11 lg:gap-14 items-center relative z-10">
        {/* Left */}
        <div className="flex flex-col items-start relative z-10">
          {/* Eyebrow */}
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase font-bold text-text-soft mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-base"></span>
              The Complete Computer Health Platform
            </div>
          </Reveal>

          {/* H1 */}
          <Reveal delay={100}>
            <h1 className="font-inter font-black tracking-[-0.035em] text-[38px] sm:text-[56px] leading-[1.0] mb-5">
              <span className="text-ink">One scan.</span><br />
              <span className="text-[#0e614c]">Every answer.</span><br />
              <span className="text-amber-base">₹299*</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[17px] text-text-mid mb-[10px] leading-[1.55] max-w-[460px] font-light">
              A clear, shareable A–F health report for any Windows computer in about three minutes. Every ₹299 includes two scans — one to diagnose, one to confirm your fix.
            </p>
          </Reveal>

          {/* Features */}
          <Reveal delay={300}>
            <div className="flex flex-col items-start gap-4 mb-4">
              <div className="inline-flex items-center gap-[7px] bg-teal-ghost text-teal-mid px-[14px] py-[6px] rounded-[30px] border border-border-teal-alpha text-[12.5px] font-semibold">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Zero cloud retention — your data never leaves your device
              </div>

              <div className="text-[13px] text-text-soft mb-[18px]">
                Comparable to a <s className="text-text-soft/70 decoration-text-soft/60">₹2,000</s> professional diagnostic — <b className="text-amber-dark font-bold">two scans for ₹299*</b>
              </div>
            </div>
          </Reveal>

          {/* CTA Row */}
          <Reveal delay={400}>
            <div className="flex flex-wrap items-center gap-[12px] mb-[16px]">
              <a
                href="#get"
                className="inline-flex items-center gap-[10px] bg-amber-base text-ink font-bold text-[15px] px-[26px] py-[14px] rounded-[12px] transition-all duration-150 shadow-[0_8px_24px_rgba(239,159,39,0.28)] hover:-translate-y-[3px] hover:shadow-[0_14px_32px_rgba(239,159,39,0.42)] border-none"
              >
                Scan my computer · ₹299*
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-[7px] font-semibold text-[14px] text-text-mid hover:text-amber-dark transition-colors cursor-pointer px-2"
              >
                Watch a scan &rarr;
              </button>
            </div>
          </Reveal>

          {/* Mini badges / OS Pills */}
          <Reveal delay={500}>
            <div className="flex flex-col gap-[14px]">
              <div className="flex items-center gap-[6px] text-[12.5px] text-teal-mid font-semibold mb-[14px]">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                Second scan credit never expires — fix at your own pace
              </div>
              <div className="flex items-center gap-[6px] text-[12.5px] text-text-soft">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                <span>Windows 10 & 11 · Laptops & Desktops · macOS & Linux <span className="text-amber-dark font-bold underline underline-offset-2 cursor-pointer hover:text-amber-base transition-colors ml-1">Join Waitlist &rarr;</span></span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right – App Window */}
        <Reveal delay={300}>
          <div className="w-full flex justify-center lg:justify-start">
            <AppWindow />
          </div>
        </Reveal>
      </div>

      <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
        <DemoVideoSimulation onViewReport={() => {
          setIsVideoOpen(false);
          setTimeout(() => setIsReportOpen(true), 300);
        }} />
      </Modal>

      <Modal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)}>
        <SampleReportPreview />
      </Modal>
    </header>
  );
}