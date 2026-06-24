export default function CloseSection() {
  return (
    <section className="bg-teal-deep text-white py-[110px] overflow-hidden relative" id="get">
      {/* Decorative Rings */}
      <div className="absolute top-[-160px] left-1/2 -translate-x-1/2 w-[760px] h-[760px] rounded-full border-[1.5px] border-teal-base/18 pointer-events-none z-0"></div>
      <div className="absolute top-[-90px] left-1/2 -translate-x-1/2 w-[520px] h-[520px] rounded-full border-[1.5px] border-teal-base/12 pointer-events-none z-0"></div>

      <div className="wrap grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10 max-md:text-center">
        <div>
          <div className="text-[13px] tracking-[3px] uppercase font-extrabold text-amber-light mb-4.5">Get Started</div>
          <h2 className="font-inter font-black tracking-tight text-4xl sm:text-[60px] leading-none mb-5.5">
            Stop guessing.<br /><span className="text-amber-base">Start knowing.</span>
          </h2>
          <p className="text-[19px] text-teal-pale max-w-[440px] leading-[1.55] mb-[30px] max-md:mx-auto">
            Your laptop works hard for you. One ₹199 scan tells you everything — pay once, no subscription, ever.
          </p>
          <div className="flex flex-wrap gap-5.5 max-md:justify-center">
            <span className="text-[13px] text-teal-light flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#5DCAA5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="#5DCAA5" strokeWidth="1.6" /></svg> Secure UPI / card
            </span>
            <span className="text-[13px] text-teal-light flex items-center gap-2">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#5DCAA5" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="#5DCAA5" strokeWidth="1.6" /></svg> Instant download
            </span>
          </div>
        </div>

        <div className="bg-white rounded-3xl shadow-pricing overflow-hidden text-ink flex flex-col mx-auto max-w-[440px] w-full">
          {/* Header */}
          <div className="flex justify-between items-center px-8 py-[26px] border-b border-[rgba(29,158,117,0.16)]">
            <div className="font-serif font-bold text-[26px] text-ink leading-none">Tekki Blaze</div>
            <div className="bg-teal-ghost text-teal-mid font-bold text-[11px] tracking-wider uppercase px-3.5 py-[7px] rounded-lg">
              Complete Scan
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-10 pt-8">
            <div className="flex items-baseline mb-8">
              <span className="text-amber-base font-bold text-[36px] mr-1.5 translate-y-[2px]">₹</span>
              <span className="font-inter font-black text-[68px] leading-none tracking-tight text-ink mr-3.5">199</span>
              <span className="text-[15px] text-text-soft font-medium">per scan · +GST</span>
            </div>

            <ul className="space-y-4.5 mb-10">
              {[
                'All 12 hardware checks',
                'A–F grade & shareable PDF report',
                'Plain-English fixes & recommendations',
                // 'Hardware replacement assistance'
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-[15.5px] text-text-mid font-medium">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="shrink-0">
                    <circle cx="12" cy="12" r="9" stroke="#1D9E75" strokeWidth="1.8" />
                    <path d="M8 12l3 3 5-5" stroke="#1D9E75" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <button className="w-full bg-amber-base text-ink font-bold text-[17px] py-[16px] rounded-xl transition-all duration-150 hover:-translate-y-0.75 hover:shadow-[0_12px_30px_rgba(239,159,39,0.35)] flex justify-center items-center gap-2 mb-4.5 shadow-[0_4px_14px_rgba(239,159,39,0.25)]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#0D1F1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
              Buy & Scan Now · ₹199
            </button>

            <div className="text-center text-[13.5px] text-text-soft mb-8">
              Secure UPI / card checkout · instant download
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <button className="flex justify-center items-center gap-1.5 border border-[rgba(29,158,117,0.16)] rounded-xl py-3.5 text-[14.5px] transition-colors hover:bg-teal-ghost hover:border-teal-base">
                <span className="font-bold text-teal-dark">3-pack</span>
                <span className="text-text-mid">· ₹499</span>
              </button>
              <button className="flex justify-center items-center gap-1.5 border border-[rgba(29,158,117,0.16)] rounded-xl py-3.5 text-[14.5px] transition-colors hover:bg-teal-ghost hover:border-teal-base">
                <span className="font-bold text-teal-dark">5-pack</span>
                <span className="text-text-mid">· ₹749</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
