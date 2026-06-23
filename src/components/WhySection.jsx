import React from 'react';

function AlertCard({ type = 'warn', icon, title, desc }) {
  const borderColor = type === 'ok' ? 'border-l-teal-base' : 'border-l-amber-base'
  const bgIcon = type === 'ok' ? 'bg-teal-ghost' : 'bg-[#FCF0DC]'
  
  return (
    <div className={`bg-white border border-[rgba(29,158,117,0.16)] border-l-3 ${borderColor} rounded-lg p-4 md:px-4.5 flex gap-[13px] items-start ${type === 'warn' ? 'mb-3' : ''}`}>
      <span className={`w-[34px] h-[34px] rounded-lg flex items-center justify-center shrink-0 ${bgIcon}`}>
        {icon}
      </span>
      <div>
        <div className="text-[13.5px] font-bold text-ink mb-0.5">{title}</div>
        <div className="text-[12px] text-text-soft">{desc}</div>
      </div>
    </div>
  )
}

function GradeScale() {
  const grades = [
    { letter: 'A', bg: 'bg-grade-a', dim: false },
    { letter: 'B', bg: 'bg-grade-b', dim: false },
    { letter: 'C', bg: 'bg-grade-c', dim: true },
    { letter: 'D', bg: 'bg-grade-d', dim: true },
    { letter: 'F', bg: 'bg-grade-f', dim: true },
  ]
  return (
    <div>
      <div className="flex gap-2 justify-center">
        {grades.map(g => (
          <div
            key={g.letter}
            className={`w-[54px] h-[54px] rounded-xl ${g.bg} flex items-center justify-center font-serif font-bold text-2xl text-white ${g.dim ? 'opacity-32' : ''}`}
          >
            {g.letter}
          </div>
        ))}
      </div>
      <div className="text-center text-[13px] text-text-soft mt-4">
        Your laptop scored an <b className="text-teal-mid font-bold">A</b> — healthy and reliable.
      </div>
    </div>
  )
}

function Thermometer() {
  const bars = [
    { h: '55%', hot: false }, { h: '68%', hot: false }, { h: '88%', hot: true },
    { h: '62%', hot: false }, { h: '74%', hot: false }, { h: '58%', hot: false },
  ]
  return (
    <div>
      <div className="flex items-end gap-2 h-[120px] justify-center">
        {bars.map((b, i) => (
          <div
            key={i}
            className={`w-7 rounded-t-6 ${b.hot ? 'bg-amber-base' : 'bg-teal-base'}`}
            style={{ height: b.h }}
          ></div>
        ))}
      </div>
      <div className="text-center text-xs text-text-soft mt-3.5 font-mono">
        CPU 71°C · GPU 64°C · within safe range
      </div>
    </div>
  )
}

function FeatRow({ tag, title, desc, bullets, visual, reverse = false }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] md:gap-15 items-center mb-[90px] last:mb-0">
      <div className={reverse ? 'md:order-2' : ''}>
        <span className="inline-block text-[11px] tracking-wide uppercase font-bold text-teal-mid bg-teal-ghost px-3.5 py-1.5 rounded-b-[8px] rounded-t-[8px] mb-4.5">
          {tag}
        </span>
        <h3 className="font-inter font-black tracking-tight text-3xl md:text-[32px] text-ink mb-3.5 leading-[1.1]">
          {title}
        </h3>
        <p className="text-[16px] text-text-mid leading-[1.65] mb-4.5">{desc}</p>
        <ul className="space-y-3">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-center gap-2.5 text-[14.5px] text-text-mid">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" className="shrink-0"><path d="M9 12l2 2 4-4" stroke="#1D9E75" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#1D9E75" strokeWidth="1.7"/></svg>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className={`bg-off-white border border-[rgba(29,158,117,0.16)] rounded-2xl p-[30px] shadow-card ${reverse ? 'md:order-1' : ''}`}>
        {visual}
      </div>
    </div>
  )
}

export default function WhySection() {
  return (
    <section id="why" className="py-24">
      <div className="wrap">
        <div className="text-[13px] tracking-[3px] uppercase font-extrabold text-teal-base mb-3.5 text-center">Why Tekki Blaze</div>
        <h2 className="font-inter font-black tracking-tight text-[34px] md:text-[48px] leading-[1.04] text-center text-ink max-w-[680px] mx-auto mb-4.5">
          It doesn't just scan.<br />It <span className="text-teal-mid">explains.</span>
        </h2>
        <p className="text-[17px] text-text-mid text-center max-w-[580px] mx-auto mb-14">
          Free tools throw raw numbers at you. Tekki Blaze gives you a grade, a reason and a fix — in language anyone can read.
        </p>

        <div className="mt-5">
          <FeatRow
            tag="Catch trouble early"
            title="See problems before they cost you"
            desc="Blaze surfaces a failing drive, overheating CPU or weak battery while you can still act — not after you've lost your data or your deadline."
            bullets={['Predictive warnings from event logs', 'Plain-English fault summaries']}
            visual={
              <>
                <AlertCard
                  type="warn"
                  icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 16H3l9-16z" stroke="#BA7517" strokeWidth="1.8" strokeLinejoin="round"/><path d="M12 10v3" stroke="#BA7517" strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="16" r="1" fill="#BA7517"/></svg>}
                  title="SSD health at 72% — keep an eye on it"
                  desc="Your drive is fine today, but wearing. Back up important files and plan a replacement in 6–9 months."
                />
                <AlertCard
                  type="ok"
                  icon={<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#1D9E75" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="12" r="9" stroke="#1D9E75" strokeWidth="1.7"/></svg>}
                  title="No crash patterns detected"
                  desc="Your event logs are clean over the last 30 days."
                />
              </>
            }
          />

          <FeatRow
            tag="A grade you trust"
            title="One letter says it all"
            desc="Every scan ends in a simple A–F hardware grade — framed as a clear market standard, never a scare warning. Read it in a glance, share it with anyone."
            bullets={['Beautiful, shareable PDF report', 'Per-component sub-scores']}
            visual={<GradeScale />}
            reverse
          />

          <FeatRow
            tag="A head start for everyone"
            title="Helpful at home — and a co-pilot for your technician"
            desc="Run Blaze yourself in about 3 minutes and walk in already knowing what's going on. Technicians love it too: it hands every customer a clear, professional report in minutes, so the conversation starts with facts and they can spend their time fixing, not guessing."
            bullets={[
              'A report you and your technician can both read',
              'Real-time temperature monitoring',
              'Hardware replacement assistance',
            ]}
            visual={<Thermometer />}
          />
        </div>
      </div>
    </section>
  )
}
