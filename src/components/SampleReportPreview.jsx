import React from 'react';

export default function SampleReportPreview() {
  const rows = [
    {
      grade: 'C',
      gradeLabel: 'FAIR',
      gradeColor: 'bg-[#C77F2C]',
      textColor: 'text-[#C77F2C]',
      title: 'Processor',
      desc: (
        <>
          Runs hot under load — <span className="font-bold text-[#C77F2C]">fixable:</span> a simple tune-up lifts it to a B
        </>
      )
    },
    {
      grade: 'A',
      gradeLabel: 'PEAK',
      gradeColor: 'bg-[#0F4C3A]',
      textColor: 'text-[#0F4C3A]',
      title: 'Memory',
      desc: 'Top tier — no action needed'
    },
    {
      grade: 'B',
      gradeLabel: 'STRONG',
      gradeColor: 'bg-[#22A07A]',
      textColor: 'text-[#22A07A]',
      title: 'Storage & SSD',
      desc: 'Fast and healthy · 92% of drive life remaining'
    },
    {
      grade: 'A',
      gradeLabel: 'PEAK',
      gradeColor: 'bg-[#0F4C3A]',
      textColor: 'text-[#0F4C3A]',
      title: 'Battery',
      desc: 'Holds 90% capacity after 214 charges'
    },
    {
      grade: 'B',
      gradeLabel: 'STRONG',
      gradeColor: 'bg-[#22A07A]',
      textColor: 'text-[#22A07A]',
      title: 'Motherboard',
      desc: 'Sound and stable · fingerprint sealed ✓'
    }
  ];

  return (
    <div className="w-full bg-[#f4f7f6] flex flex-col items-center py-12 px-4 sm:px-8">
      {/* Container */}
      <div className="w-full max-w-[620px] bg-[#FFFFFF] rounded-[14px] shadow-[0_20px_50px_rgba(0,0,0,0.06)] overflow-hidden border border-[#E4EBE8] flex flex-col font-sans">
        
        {/* macOS Style Header */}
        <div className="bg-[#0E1D17] px-6 py-3.5 flex justify-between items-center">
          <div className="flex items-center gap-5">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#FF5F57]"></div>
              <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-3 h-3 rounded-full bg-[#28CA42]"></div>
            </div>
            <div className="font-mono text-[13px] text-[#EEA036] tracking-wide mt-0.5">
              tekki-blaze · health-report
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-[#15845D]"></div>
            <div className="font-mono text-[11px] font-bold text-[#15845D] uppercase tracking-[1px] mt-0.5">
              Scan Complete
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="px-8 sm:px-10 py-10">
          
          {/* Top Info Section */}
          <div className="flex flex-col sm:flex-row gap-7 mb-8">
            <div className="shrink-0">
              <div className="w-[106px] h-[106px] bg-[#125642] rounded-[20px] shadow-[0_24px_48px_-12px_rgba(18,86,66,0.45)] flex flex-col items-center justify-center text-white relative">
                <div className="font-serif font-bold text-[58px] leading-none mb-1">B</div>
                <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#61C2A2]">· STRONG</div>
              </div>
            </div>
            <div className="mt-1">
              <div className="text-[11px] font-bold tracking-[2.5px] uppercase text-[#65867D] mb-2">
                HEALTH CHECK FOR
              </div>
              <div className="flex items-baseline gap-3 mb-3">
                <h1 className="font-serif font-bold text-[34px] text-[#101917] leading-none tracking-tight">
                  i5-10300H Laptop
                </h1>
                <span className="text-[13.5px] font-medium text-[#65867D]">
                  8 GB RAM · 512 GB SSD
                </span>
              </div>
              <p className="text-[15px] text-[#4A6961] leading-[1.6]">
                In good shape for everyday work. 4 findings worth acting on — small fixes today keep it <span className="font-bold text-[#C77F2C]">faster, cooler, and reliable for longer.</span>
              </p>
            </div>
          </div>

          {/* 3-Column Stats */}
          <div className="grid grid-cols-3 border border-[#E4EBE8] rounded-[14px] bg-[#FAFCFB] mb-6">
            <div className="p-5 border-r border-[#E4EBE8] flex flex-col justify-center">
              <div className="font-bold text-[26px] text-[#101917] leading-none mb-2.5">12 / 12</div>
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#65867D]">CHECKS RUN</div>
            </div>
            <div className="p-5 border-r border-[#E4EBE8] flex flex-col justify-center">
              <div className="font-bold text-[26px] text-[#101917] leading-none mb-2.5">8</div>
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#65867D]">PASSED CLEAN</div>
            </div>
            <div className="p-5 flex flex-col justify-center">
              <div className="font-bold text-[26px] text-[#C77F2C] leading-none mb-2.5">4</div>
              <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#C77F2C]">WORTH ACTING ON</div>
            </div>
          </div>

          {/* Report List */}
          <div className="flex flex-col">
            {rows.map((row, i) => (
              <div key={i} className="flex items-center gap-7 py-5 border-b border-[#E4EBE8] relative">
                <div className="shrink-0 flex justify-center w-[54px] relative">
                  <div className={`w-[48px] h-[48px] rounded-[12px] flex items-center justify-center font-serif font-bold text-[26px] text-white ${row.gradeColor}`}>
                    {row.grade}
                  </div>
                  <div className={`absolute -bottom-[18px] left-1/2 -translate-x-1/2 text-[9px] font-bold tracking-[1.5px] uppercase ${row.textColor} whitespace-nowrap`}>
                    {row.gradeLabel}
                  </div>
                </div>
                <div className="shrink-0 w-[140px]">
                  <div className="font-bold text-[15px] text-[#101917]">{row.title}</div>
                </div>
                <div className="flex-1">
                  <div className="text-[14.5px] text-[#4A6961] leading-[1.5]">{row.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-[13.5px] text-[#65867D]">
            + 7 more checks — drivers, crash history, device tests — in your full report
          </div>

          {/* Footer Verify Block */}
          <div className="mt-6 border border-[#E4EBE8] rounded-[10px] p-4 flex justify-between items-center bg-[#FAFCFB]">
            <div className="font-mono text-[11.5px] text-[#65867D] tracking-wide uppercase">
              SCAN #B47K2 · FINGERPRINT VERIFIED ✓
            </div>
            <div className="font-mono text-[11.5px] text-[#65867D] tracking-wide">
              verify at <span className="text-[#189568] font-semibold">tekki-x.com/verify</span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex gap-4 mt-6">
            <button className="flex-1 bg-[#0E1D17] hover:bg-[#152a21] transition-colors text-[#EEA036] font-bold rounded-[10px] py-4 px-6 flex items-center justify-center gap-2 text-[15px] shadow-[0_8px_20px_rgba(14,29,23,0.25)]">
              <span className="text-[18px] mb-[2px] font-normal">↓</span> Download PDF
            </button>
            <button className="flex-1 bg-[#FFFFFF] hover:bg-[#FAFCFB] transition-colors border border-[#E4EBE8] text-[#B77024] font-bold rounded-[10px] py-4 px-6 flex items-center justify-center gap-2 text-[15px] shadow-sm">
              Share via WhatsApp
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}



