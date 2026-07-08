import React, { useState } from 'react';
import { ArrowRight } from './Icons';
import Reveal from './Reveal';
import Modal from './Modal';
import DemoVideoSimulation from './DemoVideoSimulation';
import SampleReportPreview from './SampleReportPreview';

function AppWindow() {
  const scanRows = [
    { label: 'Component Health', pct: '94%', score: '94/100', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base' },
    { label: 'Storage & SSD Wear', pct: '72%', score: '72/100', status: 'Watch', statusBg: 'bg-amber-ghost', statusText: 'text-amber-dark', barColor: 'bg-amber-brand' },
    { label: 'Heat & Throttling', pct: '90%', score: '90/100', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base' },
    { label: 'Battery Health', pct: '81%', score: '81/100', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base' },
    { label: 'Connectivity', pct: '92%', score: '92/100', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base' },
  ];

  const careRows = [
    { label: 'Smart Updates', pct: '84%', score: '84/100', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base' },
    { label: 'Driver Issues', pct: '78%', score: '78/100', status: 'Watch', statusBg: 'bg-amber-ghost', statusText: 'text-amber-dark', barColor: 'bg-amber-brand' },
    { label: 'Crash / BSOD History', pct: '95%', score: '95/100', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base' },
    { label: 'Registry Health', pct: '87%', score: '87/100', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base' },
    { label: 'Hardware Fingerprint', pct: '100%', score: 'Verified', status: 'Good', statusBg: 'bg-teal-ghost', statusText: 'text-teal-mid', barColor: 'bg-teal-base', isMono11: true },
  ];

  const renderRow = (row, i, isLast) => (
    <div key={i} className={`flex items-center gap-2.5 py-1 ${!isLast ? 'border-b border-[rgba(29,158,117,0.14)]' : ''}`}>
      <span className="text-[13px] font-semibold text-ink w-[150px] truncate">{row.label}</span>
      <div className="flex-1 h-1.5 rounded-sm bg-off-white overflow-hidden">
        <i className={`block h-full rounded-sm ${row.barColor} animate-progress`} style={{ width: row.pct }}></i>
      </div>
      <span className={`font-mono ${row.isMono11 ? 'text-[11px]' : 'text-[12px]'} font-medium text-text-mid w-12 text-right`}>{row.score}</span>
      <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-xl w-12 flex justify-center ${row.statusBg} ${row.statusText}`}>{row.status}</span>
    </div>
  );

  return (
    <div className="w-full bg-white border border-[rgba(29,158,117,0.14)] rounded-2xl shadow-[0_12px_40px_rgba(4,52,44,0.07)] overflow-hidden">
      {/* Title bar */}
      <div className="bg-ink px-4 py-3 flex items-center gap-1.5">
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF6058]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#FFBE2F]"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-[#28C940]"></span>
        <span className="ml-3 font-mono text-xs text-amber-light">tekki-blaze · health-report</span>
        <span className="ml-auto flex items-center gap-1 text-[11px] text-teal-light font-semibold">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-brand animate-pulse"></span> SCAN COMPLETE
        </span>
      </div>

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-4 mb-[18px]">
          <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-teal-deep to-teal-mid flex items-center justify-center shrink-0 shadow-[0_10px_24px_rgba(8,80,65,0.3)]">
            <span className="font-serif font-bold text-[42px] text-white leading-none">A</span>
          </div>
          <div>
            <div className="text-xs tracking-wider uppercase text-text-soft font-semibold mb-0.5">Overall Hardware Grade</div>
            <div className="font-serif text-[21px] font-bold text-ink mb-0.5">Healthy & Reliable</div>
            <div className="text-[13px] text-text-soft">12 components checked · 0 critical issues</div>
          </div>
        </div>

        {/* Device info */}
        <div className="font-mono text-[11px] text-text-soft bg-off-white border border-[rgba(29,158,117,0.14)] rounded-md p-2 flex justify-between mb-4">
          <span>DELL INSPIRON 15 · i5-1135G7</span>
          <span>SCAN #A29F · 2:54</span>
        </div>

        {/* Scan group */}
        <div className="flex flex-col gap-[9px]">
          <div className="text-[10px] tracking-widest uppercase font-black text-teal-mid pt-2 border-b border-[rgba(29,158,117,0.14)] flex items-center gap-1.5 pb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-teal-base"></span>Scan · your hardware, measured
          </div>
          {scanRows.map((row, i) => renderRow(row, i, false))}

          {/* Care group */}
          <div className="text-[10px] tracking-widest uppercase font-black text-amber-dark pt-2 mt-1.5 border-b border-[rgba(29,158,117,0.14)] flex items-center gap-1.5 pb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-brand"></span>Care · upkeep & history, decoded
          </div>
          {careRows.map((row, i) => renderRow(row, i, i === careRows.length - 1))}

          <div className="text-[11px] text-text-soft pt-2 font-normal border-t border-[rgba(29,158,117,0.14)]">
            + Device Tests & Error Intelligence — all 12 checks in your full report
          </div>
        </div>

        {/* Footer buttons */}
        <div className="flex gap-2.5 mt-4">
          <a href="#demo" className="flex-1 text-center text-[13px] font-semibold p-3 rounded-xl bg-ink text-amber-light hover:bg-black transition-colors">↓ Download PDF</a>
          <a href="#demo" className="flex-1 text-center text-[13px] font-semibold p-3 rounded-xl bg-off-white border border-[rgba(29,158,117,0.14)] text-amber-dark hover:bg-teal-ghost transition-colors">Share via WhatsApp</a>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isReportOpen, setIsReportOpen] = useState(false);

  return (
    <header className="py-[52px] bg-[radial-gradient(110%_70%_at_80%_0%,var(--color-teal-ghost),var(--color-off-white)_52%,#fff)] overflow-hidden relative" id="top">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-[52px] items-center relative z-10">
        {/* Left */}
        <div className="flex flex-col items-start relative z-10">
          {/* Eyebrow */}
          <Reveal delay={0}>
            <div className="inline-flex items-center gap-2 text-[11px] tracking-[2px] uppercase font-bold text-text-soft mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-brand shadow-[0_0_0_3px_rgba(239,159,39,0.18)]"></span>
              The Complete Computer Health Platform
            </div>
          </Reveal>

          {/* H1 */}
          <Reveal delay={100}>
            <h1 className="font-inter font-black tracking-tighter text-[36px] sm:text-[56px] leading-none mb-5">
              <span className="text-ink">One scan.</span><br />
              <span className="text-teal-mid">Every answer.</span><br />
              <span className="text-amber-brand" style={{ fontFeatureSettings: '"tnum"', whiteSpace: 'nowrap' }}>₹299</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-[17px] text-text-mid mb-2.5 leading-relaxed font-light max-w-[460px]">
              <b>A complete health checkup for your computer — in 3 minutes.</b> One scan grades all 12 parts, benchmarks real speed, clears the junk, and puts an exact price on every upgrade. Then scan #2 proves the fix worked.
            </p>
          </Reveal>

          {/* Privacy badge */}
          <Reveal delay={300}>
            <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-teal-mid bg-teal-ghost border border-[rgba(29,158,117,0.14)] rounded-[30px] px-3.5 py-1.5 mb-6">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" stroke="#0F6E56" strokeWidth="1.7" strokeLinejoin="round"/></svg>
              Zero cloud retention — your data never leaves your device
            </div>
          </Reveal>

          {/* CTA Row */}
          <Reveal delay={400}>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <a
                href="#pricing"
                className="animate-cta-pulse inline-flex items-center gap-2.5 bg-amber-brand text-ink font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_8px_24px_rgba(239,159,39,0.28)] border-none hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(239,159,39,0.42)]"
              >
                Scan my computer · ₹299
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#0D1F1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </a>
              <button
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-mid hover:text-amber-dark transition-colors cursor-pointer bg-transparent border-none"
              >
                Watch a scan →
              </button>
            </div>
          </Reveal>

          {/* OS support */}
          <Reveal delay={500}>
            <div className="flex flex-col gap-1.5">
              <div className="text-[13px] text-text-soft flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#0F6E56" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Windows 10 & 11 · Laptops & Desktops
              </div>
              <div className="text-[13px] text-text-soft flex items-center gap-1.5">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#6A8A80" strokeWidth="1.8"/><path d="M12 7v5l3 2" stroke="#6A8A80" strokeWidth="1.9" strokeLinecap="round"/></svg>
                Coming soon: macOS & Linux · <span className="text-amber-dark font-bold underline decoration-2 underline-offset-2 cursor-pointer hover:text-amber-brand transition-colors">Join Waitlist →</span>
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