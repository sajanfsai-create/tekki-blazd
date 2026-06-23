import React from 'react';
import { ArrowRight, PlayIcon } from './Icons';

function AppWindow() {
  const rows = [
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="5" y="5" width="14" height="14" rx="2" stroke="#0F6E56" strokeWidth="1.7"/><rect x="9" y="9" width="6" height="6" fill="#0F6E56"/></svg>,
      label: 'Processor',
      pct: '94%',
      score: '94/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="4" y="7" width="16" height="10" rx="1.5" stroke="#0F6E56" strokeWidth="1.7"/><path d="M8 7V4M16 7V4" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round"/></svg>,
      label: 'Memory',
      pct: '88%',
      score: '88/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 7c0-1.1 3.1-2 7-2s7 .9 7 2-3.1 2-7 2-7-.9-7-2z" stroke="#BA7517" strokeWidth="1.6"/><path d="M5 7v10c0 1.1 3.1 2 7 2s7-.9 7-2V7" stroke="#BA7517" strokeWidth="1.6"/></svg>,
      label: 'Storage SSD',
      pct: '72%',
      score: '72/100',
      status: 'Watch',
      statusBg: 'bg-[#FCF0DC]',
      statusText: 'text-amber-dark',
      barColor: 'bg-amber-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><rect x="6" y="4" width="12" height="16" rx="2" stroke="#0F6E56" strokeWidth="1.7"/><path d="M10 4h4v2h-4z" fill="#0F6E56"/></svg>,
      label: 'Battery',
      pct: '81%',
      score: '81/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      icon: <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M12 3v9" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round"/><circle cx="12" cy="16" r="4" stroke="#0F6E56" strokeWidth="1.7"/></svg>,
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
      <div className="bg-teal-deep px-[18px] py-[14px] flex items-center gap-2">
        <span className="w-[11px] h-[11px] rounded-full bg-[#FF6058] shrink-0"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-[#FFBE2F] shrink-0"></span>
        <span className="w-[11px] h-[11px] rounded-full bg-[#28C940] shrink-0"></span>
        <span className="ml-3.5 font-mono text-[12px] text-teal-pale">tekki-blaze · health-report</span>
        <span className="ml-auto flex items-center gap-1.5 text-[11px] text-teal-light font-semibold">
          <span className="w-[7px] h-[7px] rounded-full bg-teal-base animate-blink"></span> SCAN COMPLETE
        </span>
      </div>

      <div className="p-[26px] pb-7">
        {/* Header */}
        <div className="flex items-center gap-[18px] mb-[22px]">
          <div className="w-[88px] h-[88px] rounded-xl bg-gradient-to-br from-teal-dark to-teal-base flex items-center justify-center shrink-0 shadow-[0_10px_26px_rgba(8,80,65,0.35)]">
            <span className="font-serif font-bold text-[46px] text-white leading-none">A</span>
          </div>
          <div>
            <div className="text-[12px] tracking-wider uppercase text-text-soft font-semibold mb-1">Overall Hardware Grade</div>
            <div className="font-serif text-[23px] font-bold text-ink mb-0.5">Healthy & Reliable</div>
            <div className="text-[13px] text-text-soft">12 components checked · 0 critical issues</div>
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
              <span className="text-[13.5px] font-semibold text-ink w-24 shrink-0 truncate">{row.label}</span>
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
        <div className="flex gap-2.5 mt-[22px]">
          <a href="#demo" className="flex-1 flex items-center justify-center gap-1.5 text-center text-[13px] font-bold p-3 rounded-lg bg-teal-mid text-white hover:opacity-95 transition-opacity">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="shrink-0 inline-block align-[-2px]"><path d="M12 3v12m0 0l-4-4m4 4l4-4M5 19h14" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
            <span>Download PDF</span>
          </a>
          <a href="#demo" className="flex-1 text-center text-[13px] font-bold p-3 rounded-lg bg-off-white border border-[rgba(29,158,117,0.16)] text-teal-mid hover:bg-[#eaf2ee] transition-colors">
            Share on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <header className="py-[70px] md:pb-20 bg-gradient-to-b from-off-white to-white overflow-hidden relative">
      <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-11 lg:gap-14 items-center">
        {/* Left */}
        <div className="flex flex-col items-start">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 text-[12px] tracking-[2px] uppercase font-semibold text-teal-mid bg-teal-ghost border border-[rgba(29,158,117,0.16)] px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-teal-base"></span>
            The Windows PC Health Report
          </div>

          {/* H1 */}
          <h1 className="font-inter font-black tracking-tight text-4xl sm:text-[58px] leading-[1.02] mb-6">
            <span className="text-ink">One scan.</span><br />
            <span className="text-teal-mid">Every answer.</span><br />
            <span className="text-amber-base">₹199.</span>
          </h1>

          <p className="text-[19px] text-text-mid mb-4.5 leading-[1.5] max-w-[480px]">
            A complete, easy-to-read health report of your Windows PC — CPU, storage, graphics, battery and drivers — in about 3 minutes, from a single file.
          </p>

          <p className="text-[15px] text-text-soft mb-[34px]">
            <b className="text-teal-mid font-semibold">Scan · advise · fix</b> — no jargon, just clear answers you can act on.
          </p>

          {/* CTA Row */}
          <div className="flex flex-wrap items-center gap-3.5 mb-[30px]">
            <a
              href="#get"
              className="inline-flex items-center gap-2.5 bg-amber-base text-ink font-bold text-[16px] px-[30px] py-[15px] rounded-xl transition-all duration-150 shadow-[0_8px_24px_rgba(239,159,39,0.3)] hover:-translate-y-1 hover:shadow-[0_14px_34px_rgba(239,159,39,0.45)]"
            >
              <ArrowRight />
              Scan My Laptop · ₹199
            </a>
            <a
              href="#demo"
              className="inline-flex items-center gap-2.5 font-semibold text-[15px] text-teal-mid px-5 py-3.5 rounded-xl border-[1.5px] border-[rgba(29,158,117,0.16)] bg-transparent transition-all duration-200 hover:border-teal-base hover:bg-teal-ghost"
            >
              <span className="w-7 h-7 rounded-full bg-teal-mid flex items-center justify-center shrink-0">
                <PlayIcon />
              </span>
              Watch Demo
            </a>
          </div>

          {/* Mini badges */}
          <div className="flex flex-wrap gap-5.5 mb-5.5">
            {['No subscription', 'Shareable PDF report'].map(t => (
              <div key={t} className="flex items-center gap-1.5 text-[13px] text-text-soft">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#1D9E75" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#1D9E75" strokeWidth="1.8"/></svg>
                {t}
              </div>
            ))}
          </div>

          {/* OS Pills */}
          <div className="flex flex-wrap gap-2.5 mt-[22px]">
            {[
              { label: 'Windows 10 & 11', soon: false },
              { label: 'Laptops & Desktops', soon: false },
              { label: 'macOS & Linux — coming soon', soon: true },
            ].map(({ label, soon }) => (
              <span
                key={label}
                className={`inline-flex items-center gap-1.5 text-[12.5px] px-3.5 py-1.5 rounded-full border border-[rgba(29,158,117,0.16)] ${soon
                  ? 'text-text-soft bg-white font-medium'
                  : 'text-teal-mid bg-teal-ghost font-semibold'
                  }`}
              >
                {!soon && (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <path d="M9 12l2 2 4-4" stroke="#0F6E56" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
                {soon ? (
                  <span dangerouslySetInnerHTML={{ __html: label.replace('coming soon', '<b class="text-amber-dark font-bold">coming soon</b>') }} />
                ) : label}
              </span>
            ))}
          </div>
        </div>

        {/* Right – App Window */}
        <div className="w-full flex justify-center lg:justify-start">
          <AppWindow />
        </div>
      </div>
    </header>
  );
}