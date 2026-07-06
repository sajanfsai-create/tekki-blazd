export default function TrustStrip() {
  const stats = [
    { num: '12-point', label: 'system check' },
    { num: '3-min', label: 'diagnostics' },
    { num: 'A–F', label: 'certified report' },
    { num: 'Zero', label: 'cloud retention' },
  ]

  return (
    <div className="border-t border-b border-[rgba(29,158,117,0.16)] bg-white py-[16px] md:py-[20px]">
      <div className="wrap flex flex-col items-center">
        <div className="flex flex-wrap justify-center items-center gap-x-[24px] gap-y-[12px] md:gap-x-[32px] text-[13px] md:text-[14px]">

          <div className="flex items-center gap-[6px]">
            <span className="text-[#bd6811]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="12" cy="12" r="2"></circle></svg>
            </span>
            <span className="font-bold text-[#bd6811]">12-point</span>
            <span className="text-[#0d523c]">system check</span>
          </div>

          <div className="flex items-center gap-[6px]">
            <span className="text-[#bd6811]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            </span>
            <span className="font-bold text-[#bd6811]">3-min</span>
            <span className="text-[#0d523c]">diagnostics</span>
          </div>

          <div className="hidden md:block w-px h-[14px] bg-[rgba(29,158,117,0.2)]"></div>

          <div className="flex items-center gap-[6px]">
            <span className="text-[#bd6811]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            </span>
            <span className="font-bold text-[#bd6811]">A–F</span>
            <span className="text-[#0d523c]">certified report</span>
          </div>

          <div className="flex items-center gap-[6px]">
            <span className="text-[#bd6811]">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
            </span>
            <span className="font-bold text-[#bd6811]">Zero</span>
            <span className="text-[#0d523c]">cloud retention</span>
          </div>

          <div className="hidden md:block w-px h-[14px] bg-[rgba(29,158,117,0.2)]"></div>

          <div className="flex items-center gap-[6px]">
            <span className="text-amber-base tracking-widest text-[12px] -mt-[2px]">★★★★★</span>
            <span className="font-bold text-ink">4.9</span>
            <span className="text-text-soft">· 3,200+ scans in Bengaluru</span>
          </div>

        </div>

        <a href="#privacy" className="mt-[16px] text-[13px] font-bold text-[#0f6e56] underline underline-offset-4 decoration-[#0f6e56]/40 hover:decoration-[#0f6e56] transition-all">
          Privacy & compliance &rarr;
        </a>
      </div>
    </div>
  )
}
