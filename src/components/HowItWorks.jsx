import Reveal from './Reveal';

export default function HowItWorks() {
  return (
    <section id="journey" className="py-[44px] scroll-mt-[72px]">
      <div className="wrap">
        <div className="text-center max-w-[660px] mx-auto mb-7">
          <Reveal delay={0}>
            <div className="text-[11px] tracking-[2px] uppercase font-bold text-amber-dark mb-4 flex flex-col items-center">
              <span>The Core Journey</span>
              <div className="w-6 h-[2px] bg-amber-brand mt-2.5 rounded-full"></div>
            </div>
            <h2 className="font-inter font-black tracking-tight text-[30px] sm:text-[42px] leading-tight text-ink">
              <span className="text-teal-mid">Scan.</span>{' '}
              <span className="text-amber-brand">Advise.</span>{' '}
              Fix.
            </h2>
            <p className="text-base text-text-mid mt-4 font-light leading-relaxed">
              Most diagnostics stop at raw numbers you have to interpret yourself. Tekki Blaze takes you all the way to a solved problem — in three clean steps.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

          {/* Card 1: Scan */}
          <Reveal delay={100}>
            <div className="relative bg-white border border-[rgba(29,158,117,0.14)] rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] h-full">
              {/* Arrow connector */}
              <span className="hidden md:block absolute right-[-17px] top-1/2 -translate-y-1/2 text-amber-brand font-black text-lg z-10">→</span>
              <span className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-[-19px] text-amber-brand font-black text-lg z-10">↓</span>

              <div className="font-inter font-black text-xs tracking-wider text-teal-mid bg-teal-ghost w-fit px-3 py-1 rounded-lg mb-[18px]">STEP 01</div>
              <div className="w-11 h-11 rounded-xl bg-off-white flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="#0F6E56" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/><path d="M5 19h14" stroke="#0F6E56" strokeWidth="1.9" strokeLinecap="round"/></svg>
              </div>
              <h3 className="font-inter font-black text-2xl text-ink mb-2">Scan</h3>
              <p className="text-sm text-text-mid leading-relaxed font-light">
                Run one lightweight file — no installer, no driver, nothing left behind. It checks 12 hardware components at the system level in about three minutes.
              </p>

              {/* Mini visual */}
              <div className="mt-4 border border-[rgba(29,158,117,0.14)] rounded-xl p-3 bg-off-white">
                <div className="font-mono text-[11px] text-text-mid flex items-center gap-1.5 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-brand animate-pulse"></span> tekki-blaze.exe · one small file · no install
                </div>
                <div className="flex gap-1 mb-2">
                  <div className="flex-1 text-center text-[10px] font-bold tracking-tight text-teal-mid bg-white border border-[rgba(29,158,117,0.4)] rounded-md py-1">✓ Audit</div>
                  <div className="flex-1 text-center text-[10px] font-bold tracking-tight text-teal-mid bg-white border border-[rgba(29,158,117,0.4)] rounded-md py-1">✓ Logs</div>
                  <div className="flex-1 text-center text-[10px] font-bold tracking-tight text-amber-dark bg-white border border-amber-brand rounded-md py-1">Benchmark</div>
                  <div className="flex-1 text-center text-[10px] font-bold tracking-tight text-text-soft bg-white border border-[rgba(29,158,117,0.14)] rounded-md py-1">Report</div>
                </div>
                <div className="h-1 rounded-sm bg-white border border-[rgba(29,158,117,0.14)] overflow-hidden">
                  <i className="block h-full bg-gradient-to-r from-teal-base to-amber-brand" style={{ width: '64%' }}></i>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 2: Advise */}
          <Reveal delay={200}>
            <div className="relative bg-white border border-[rgba(29,158,117,0.14)] rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] h-full">
              {/* Arrow connector */}
              <span className="hidden md:block absolute right-[-17px] top-1/2 -translate-y-1/2 text-amber-brand font-black text-lg z-10">→</span>
              <span className="md:hidden absolute left-1/2 -translate-x-1/2 bottom-[-19px] text-amber-brand font-black text-lg z-10">↓</span>

              <div className="font-inter font-black text-xs tracking-wider text-teal-mid bg-teal-ghost w-fit px-3 py-1 rounded-lg mb-[18px]">STEP 02</div>
              <div className="w-11 h-11 rounded-xl bg-off-white flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 3h8l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#0F6E56" strokeWidth="1.7" strokeLinejoin="round"/><path d="M14 3v5h5" stroke="#0F6E56" strokeWidth="1.7"/><path d="M9 14l2 2 4-4" stroke="#0F6E56" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </div>
              <h3 className="font-inter font-black text-2xl text-ink mb-2">Advise</h3>
              <p className="text-sm text-text-mid leading-relaxed font-light">
                Raw diagnostics become a single A–F grade with a plain-English explanation of every finding. A C doesn't mean broken — it means fixable, and we tell you exactly what to do next.
              </p>

              {/* Mini visual */}
              <div className="mt-4 border border-[rgba(29,158,117,0.14)] rounded-xl p-3 bg-off-white">
                <div className="flex gap-3 items-start">
                  <span className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-dark to-[#BA7517] text-white font-serif font-bold text-xl flex items-center justify-center shrink-0">C</span>
                  <div>
                    <b className="block text-[13px] text-ink mb-0.5">Storage: SSD wear at 72%</b>
                    <span className="block text-xs text-text-soft leading-tight">In plain English: back it up, plan a replacement — no panic needed.</span>
                  </div>
                </div>
                <div className="mt-2.5 text-[11px] font-bold text-amber-dark bg-amber-ghost border border-[rgba(239,159,39,0.3)] rounded-lg p-2">
                  → Exact fix: 1TB NVMe drive · est. ₹3,400 · 20-min upgrade
                </div>
              </div>
            </div>
          </Reveal>

          {/* Card 3: Fix */}
          <Reveal delay={300}>
            <div className="relative bg-white border border-amber-brand rounded-2xl p-8 transition-all hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] shadow-[0_12px_36px_rgba(239,159,39,0.14)] h-full">
              <div className="font-inter font-black text-xs tracking-wider text-ink bg-amber-brand w-fit px-3 py-1 rounded-lg mb-[18px]">STEP 03</div>
              <div className="w-11 h-11 rounded-xl bg-off-white flex items-center justify-center mb-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M13 2L4 14h7l-1 8 9-12h-7l1-8z" fill="#EF9F27"/></svg>
              </div>
              <h3 className="font-inter font-black text-2xl text-ink mb-2">Fix</h3>
              <p className="text-sm text-text-mid leading-relaxed font-light">
                Follow the exact fix from your report — then use your <strong>second scan</strong> to confirm the repair worked and every component is exactly as expected.
              </p>

              {/* Mini visual */}
              <div className="mt-4 border border-[rgba(29,158,117,0.14)] rounded-xl p-3 bg-off-white">
                <div className="flex items-center justify-center gap-4 py-0.5">
                  <span className="w-11 h-11 rounded-[11px] font-serif font-bold text-xl tracking-wide bg-gradient-to-br from-amber-dark to-[#BA7517] text-white flex items-center justify-center shrink-0">C</span>
                  <span className="text-[10px] font-extrabold tracking-wide uppercase text-amber-dark text-center leading-tight">fix →<br/>re-scan</span>
                  <span className="w-11 h-11 rounded-[11px] font-serif font-bold text-xl tracking-wide bg-gradient-to-br from-teal-deep to-teal-mid text-white flex items-center justify-center shrink-0">A</span>
                </div>
                <div className="mt-2.5 text-[11px] font-bold text-teal-mid bg-teal-ghost border border-[rgba(29,158,117,0.3)] rounded-lg p-2">
                  ✓ Repair verified: 1TB NVMe installed · SSD wear cleared
                </div>
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
