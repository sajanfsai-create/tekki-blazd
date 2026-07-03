export default function HowItWorks() {
  return (
    <section id="how" className="py-20 md:py-24 bg-white">
      <div className="wrap">
        <div className="text-[12px] tracking-[3px] uppercase font-bold text-teal-base mb-4 text-center">
          The Core Journey
        </div>
        <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-center mb-5">
          <span className="text-[#0e614c]">Scan.</span> <span className="text-amber-base">Advise.</span> <span className="text-ink">Fix.</span>
        </h2>
        <p className="text-[17px] text-text-mid text-center max-w-[640px] mx-auto mb-14 leading-[1.6]">
          Most diagnostics stop at raw numbers you have to interpret yourself. Blaze takes you all the way to a solved problem — in three clean steps.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          
          {/* Card 1: Scan */}
          <div className="bg-white border border-[rgba(29,158,117,0.16)] rounded-2xl p-6 lg:p-7 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(4,52,44,0.08)]">
            <span className="inline-flex items-center justify-center font-inter font-bold text-[11px] tracking-widest text-[#0e614c] bg-[#eaf7f2] px-3 py-1 rounded-full mb-5">
              STEP 01
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#eaf7f2] flex items-center justify-center text-[#0e614c] mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </div>
            <h3 className="font-inter font-black text-[24px] text-ink mb-2.5 tracking-tight">Scan</h3>
            <p className="text-[14.5px] text-text-soft leading-[1.6]">
              Run one lightweight file — no installer, no driver, nothing left behind. It checks 12 hardware components at the system level in about three minutes.
            </p>
          </div>

          {/* Card 2: Advise */}
          <div className="bg-white border border-[rgba(29,158,117,0.16)] rounded-2xl p-6 lg:p-7 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_16px_44px_rgba(4,52,44,0.08)]">
            <span className="inline-flex items-center justify-center font-inter font-bold text-[11px] tracking-widest text-[#0e614c] bg-[#eaf7f2] px-3 py-1 rounded-full mb-5">
              STEP 02
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#eaf7f2] flex items-center justify-center text-[#0e614c] mb-5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <path d="M9 15l2 2 4-4"/>
              </svg>
            </div>
            <h3 className="font-inter font-black text-[24px] text-ink mb-2.5 tracking-tight">Advise</h3>
            <p className="text-[14.5px] text-text-soft leading-[1.6] mb-5">
              Raw diagnostics become a single A–F grade and a plain-English explanation of every finding — not a dashboard you have to decode. A C doesn't mean broken — it means fixable, and we tell you exactly what to do next.
            </p>
            <div className="mt-auto bg-[#eaf7f2] rounded-xl p-3.5 text-[13px] text-[#0e614c] leading-[1.5] font-medium border border-[#d2efe6] w-full">
              A–F certificate accepted for insurance, audits & resale — anyone can verify it at tekki-x.com/verify
            </div>
          </div>

          {/* Card 3: Fix */}
          <div className="bg-white border-[1.5px] border-amber-base rounded-2xl p-6 lg:p-7 flex flex-col items-start transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(239,159,39,0.15)] relative shadow-[0_8px_30px_rgba(239,159,39,0.08)]">
            <span className="inline-flex items-center justify-center font-inter font-bold text-[11px] tracking-widest text-ink bg-amber-base px-3 py-1 rounded-full mb-5">
              STEP 03
            </span>
            <div className="w-10 h-10 rounded-xl bg-[#fdf4e7] flex items-center justify-center text-amber-base mb-5">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
              </svg>
            </div>
            <h3 className="font-inter font-black text-[24px] text-ink mb-2.5 tracking-tight">Fix</h3>
            <p className="text-[14.5px] text-text-soft leading-[1.6] mb-5">
              Your report doesn't stop at the diagnosis — it tells you exactly what to fix and how. Then use your second scan to confirm the repair worked and every component is exactly as expected.
            </p>
            <div className="mt-auto bg-[#eaf7f2] rounded-xl p-3.5 text-[13px] text-[#0e614c] leading-[1.5] border border-[#d2efe6] w-full">
              <span className="font-bold">Coming soon: Smart Repair Matching</span> — verified part-matches & certified technicians, dropped straight into your report. <a href="#waitlist" className="text-amber-dark font-bold underline underline-offset-2 cursor-pointer hover:text-amber-base transition-colors">Join the waitlist &rarr;</a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
