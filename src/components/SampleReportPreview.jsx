import React from 'react';
import { LogoMark } from './Icons';

export default function SampleReportPreview() {
  const rows = [
    {
      label: 'Processor',
      detail: 'Intel Core i5-1135G7 @ 2.40GHz',
      pct: '94%',
      score: '94/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      label: 'Memory (RAM)',
      detail: '16GB DDR4 (2 of 2 slots used)',
      pct: '88%',
      score: '88/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      label: 'Storage Drive 1',
      detail: '512GB NVMe SSD (Samsung PM991a)',
      pct: '72%',
      score: '72/100',
      status: 'Watch',
      statusBg: 'bg-[#FCF0DC]',
      statusText: 'text-amber-dark',
      barColor: 'bg-amber-base'
    },
    {
      label: 'Battery Health',
      detail: '42,000 mWh current max (originally 51,000 mWh)',
      pct: '81%',
      score: '81/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    },
    {
      label: 'Thermal System',
      detail: 'Max CPU temp recorded: 71°C',
      pct: '90%',
      score: '90/100',
      status: 'Good',
      statusBg: 'bg-teal-ghost',
      statusText: 'text-teal-mid',
      barColor: 'bg-teal-base'
    }
  ];

  return (
    <div className="w-full bg-off-white flex flex-col items-center py-8">
      {/* "Paper" Document */}
      <div className="w-full max-w-[700px] bg-white shadow-xl shadow-ink/5 border border-ink/10 flex flex-col">
        {/* Header */}
        <div className="bg-teal-deep text-white px-8 py-10 flex justify-between items-start">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <LogoMark size={28} />
              <span className="font-serif font-bold text-xl leading-none">Tekki <span className="text-amber-base">X</span></span>
              <span className="text-[10px] tracking-widest font-bold text-teal-base uppercase border-l border-white/20 pl-2">Tekki Blaze Report</span>
            </div>
            <h1 className="font-sans font-bold text-3xl mb-2">PC Health Scan</h1>
            <p className="text-teal-ghost opacity-80 text-sm">Scan completed on {new Date().toLocaleDateString()}</p>
          </div>
          <div className="text-right">
            <div className="text-xs uppercase tracking-widest text-teal-base font-bold mb-1">Device ID</div>
            <div className="font-mono text-sm opacity-90 mb-4">DELL-INSP-15-X29</div>
            <div className="text-xs uppercase tracking-widest text-teal-base font-bold mb-1">Scan Reference</div>
            <div className="font-mono text-sm opacity-90">#A29F-492B</div>
          </div>
        </div>

        <div className="p-8">
          {/* Grade Summary */}
          <div className="flex items-center gap-6 mb-10 pb-8 border-b border-black/5">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-teal-dark to-teal-base flex items-center justify-center shrink-0 shadow-lg">
              <span className="font-serif font-bold text-5xl text-white">A</span>
            </div>
            <div>
              <div className="text-xs tracking-wider uppercase text-text-soft font-semibold mb-1">Overall Grade</div>
              <div className="font-serif text-3xl font-bold text-ink mb-1">Healthy & Reliable</div>
              <div className="text-sm text-text-soft">Your system is running smoothly. 12 components passed, 0 critical failures. One component requires monitoring.</div>
            </div>
          </div>

          {/* Component Breakdown */}
          <h3 className="font-bold text-lg text-ink mb-6">Detailed Component Breakdown</h3>
          
          <div className="space-y-6">
            {rows.map((row, i) => (
              <div key={i} className="flex flex-col gap-2">
                <div className="flex justify-between items-end">
                  <div>
                    <div className="font-bold text-ink text-sm">{row.label}</div>
                    <div className="text-xs text-text-soft font-mono mt-0.5">{row.detail}</div>
                  </div>
                  <div className={`text-[10px] font-bold py-1 px-2.5 rounded-full ${row.statusBg} ${row.statusText}`}>
                    {row.status} - {row.score}
                  </div>
                </div>
                <div className="w-full h-1.5 rounded-full bg-off-white overflow-hidden">
                  <div className={`h-full rounded-full ${row.barColor}`} style={{ width: row.pct }}></div>
                </div>
              </div>
            ))}
          </div>

          {/* Warnings Section */}
          <div className="mt-12 bg-[#FCF0DC]/50 border border-amber-base/20 rounded-xl p-5">
            <h4 className="font-bold text-amber-dark mb-2 text-sm flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 16H3l9-16z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M12 10v3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
              Advisory: Storage Drive 1
            </h4>
            <p className="text-sm text-ink/80 leading-relaxed">
              Your NVMe SSD is currently operating at 72% of its original lifespan. While it is functioning perfectly today, it is showing signs of expected wear and tear. We recommend ensuring your important files are backed up to the cloud and planning for a drive replacement within the next 6-9 months to avoid unexpected data loss.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
