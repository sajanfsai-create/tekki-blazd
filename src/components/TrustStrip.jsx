export default function TrustStrip() {
  const stats = [
    { num: '12-point', label: 'system check' },
    { num: '3-min', label: 'diagnostics' },
    { num: 'A–F', label: 'certified report' },
    { num: 'Zero', label: 'cloud retention' },
  ]

  return (
    <div className="border-t border-b border-[rgba(29,158,117,0.16)] bg-off-white">
      <div className="wrap flex flex-wrap lg:flex-nowrap justify-around lg:justify-between items-center py-7.5 gap-8">
        <div className="flex flex-wrap justify-around items-center gap-8 lg:gap-12 flex-1">
          {stats.map(s => (
            <div key={s.label} className="text-center lg:text-left">
              <div className="font-inter font-black text-[28px] lg:text-[34px] text-teal-mid leading-none">
                {s.num}
              </div>
              <div className="text-[13px] text-text-soft mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
        
        {/* Divider for desktop */}
        <div className="hidden lg:block w-px h-14 bg-[rgba(29,158,117,0.16)]"></div>

        {/* Reviews section */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left shrink-0">
          <div className="text-amber-base tracking-widest text-[16px] leading-none mb-1">
            ★★★★★
          </div>
          <div className="text-[13px] text-ink font-bold mb-0.5">
            4.9 <span className="font-normal text-text-soft">· 3,200+ scans in Bengaluru</span>
          </div>
          <a href="#privacy" className="text-[12px] text-teal-mid font-semibold hover:opacity-80 transition-opacity">
            Privacy & compliance &rarr;
          </a>
        </div>
      </div>
    </div>
  )
}
