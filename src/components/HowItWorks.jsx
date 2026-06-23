export default function HowItWorks() {
  const steps = [
    {
      step: '01',
      title: 'Scan',
      desc: 'Download the lightweight Tekki Blaze agent and run a single scan. It quietly reads every component.',
    },
    {
      step: '02',
      title: 'Advise',
      desc: 'Blaze grades your hardware A–F and explains every finding in plain English — no cryptic codes.',
    },
    {
      step: '03',
      title: 'Fix',
      desc: 'Get a clear action plan and help sourcing the right replacement part or trusted technician.',
    }
  ]

  return (
    <section id="how" className="py-24">
      <div className="wrap">
        <div className="text-[13px] tracking-[3px] uppercase font-extrabold text-teal-base mb-3.5 text-center">How It Works</div>
        <h2 className="font-inter font-black tracking-tight text-[34px] md:text-[48px] leading-[1.04] text-center text-ink max-w-[680px] mx-auto mb-4.5">
          <span className="text-teal-mid">Scan.</span> <span className="text-amber-base">Advise.</span> Fix.
        </h2>
        <p className="text-[17px] text-text-mid text-center max-w-[580px] mx-auto mb-14">Three steps, about three minutes, zero technician visits.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6.5">
          {steps.map((s, i) => (
            <div key={s.step} className="bg-white border border-[rgba(29,158,117,0.16)] rounded-2xl p-9 md:px-11 relative overflow-hidden group transition-all duration-200 hover:-translate-y-1.25 hover:shadow-[0_16px_44px_rgba(4,52,44,0.12)]">
              <span className="inline-block font-inter font-black text-[13px] tracking-wide text-amber-dark bg-amber-light px-3.5 py-1.25 rounded-lg mb-5.5 relative z-10">
                STEP {s.step}
              </span>
              <h3 className="font-inter font-black text-3xl text-ink mb-3 tracking-tight relative z-10">{s.title}</h3>
              <p className="text-[15px] text-text-mid leading-[1.6] relative z-10">{s.desc}</p>
              <span className="absolute -right-2.5 -bottom-7.5 font-inter font-black text-[140px] text-off-white leading-none z-0 select-none">
                {i + 1}
              </span>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-[50px]">
          <span className="inline-flex items-center gap-2.75 bg-teal-ghost border border-[rgba(29,158,117,0.16)] rounded-full px-7 py-3.5 text-[15px] text-teal-mid font-semibold">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#0F6E56" strokeWidth="1.8"/><path d="M12 7v5l3 2" stroke="#0F6E56" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
            From start to report in about <b className="font-inter font-black text-amber-dark">3 minutes</b>
          </span>
        </div>
      </div>
    </section>
  )
}
