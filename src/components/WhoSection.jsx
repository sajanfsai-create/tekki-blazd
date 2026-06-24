export default function WhoSection() {
  const cards = [
    {
      badge: 'Everyday Users',
      title: 'Home & students',
      quote: '“Is my slow PC dying? What should I actually fix?”',
      desc: "Before you spend on a new laptop, spend ₹199 to find out what's really wrong.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="#0F6E56" strokeWidth="1.8" /><path d="M4 20c0-4 3.6-6 8-6s8 2 8 6" stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" /></svg>,
      highlight: false
    },
    {
      badge: 'Repair Shops & Technicians',
      title: 'Build trust, close more repairs',
      quote: '“I need a fast, credible report for every walk-in.”',
      // Bulk scan pricing available.
      desc: "Hand every customer a professional health report in 3 minutes — and spend your time fixing, not guessing. ",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M14.7 6.3a4 4 0 00-5.4 5.4l-5 5a1.5 1.5 0 002 2l5-5a4 4 0 005.4-5.4l-2.3 2.3-2-2 2.3-2.3z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round" /></svg>,
      highlight: true
    },
    {
      badge: 'Businesses & IT Teams',
      title: 'Audit the whole fleet',
      quote: '“We need to plan upgrades before the next refresh cycle.”',
      desc: "Check every machine's health and driver status before your next audit or upgrade.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="13" rx="2" stroke="#0F6E56" strokeWidth="1.8" /><path d="M8 20h8M12 17v3" stroke="#0F6E56" strokeWidth="1.8" strokeLinecap="round" /></svg>,
      highlight: false
    },
    {
      badge: 'Resellers & OEM Partners',
      title: 'Add value to every sale',
      quote: '“I want a value-add bundle for the PCs I sell.”',
      desc: "Add a premium diagnostic to every PC you sell or service — your brand, our engine.",
      icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M3 7h18l-2 12H5L3 7z" stroke="#0F6E56" strokeWidth="1.8" strokeLinejoin="round" /><path d="M8 7a4 4 0 018 0" stroke="#0F6E56" strokeWidth="1.8" /></svg>,
      highlight: false
    }
  ]

  return (
    <section id="who-for" className="py-24">
      <div className="wrap">
        <div className="text-[13px] tracking-[3px] uppercase font-extrabold text-teal-base mb-3.5 text-center">Who It's For</div>
        <h2 className="font-inter font-black tracking-tight text-[34px] md:text-[48px] leading-[1.04] text-center text-ink max-w-[680px] mx-auto mb-4.5">
          One file. <span className="text-teal-mid">Four</span> kinds of user.
        </h2>
        <p className="text-[17px] text-text-mid text-center max-w-[580px] mx-auto mb-14">The same 3-minute scan serves everyone who touches a PC — each gets a report that speaks their language.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5 items-stretch">
          {cards.map(c => (
            <div
              key={c.badge}
              className={`relative rounded-2xl p-[30px] px-6 bg-white flex flex-col transition-all duration-200 hover:-translate-y-1 ${c.highlight
                  ? 'border-[1.5px] border-teal-base shadow-[0_12px_40px_rgba(15,110,86,0.14)]'
                  : 'border-[1.5px] border-[rgba(29,158,117,0.16)] hover:shadow-[0_14px_36px_rgba(4,52,44,0.1)]'
                }`}
            >
              {c.highlight && (
                <div className="absolute -top-2.75 left-6 font-inter font-black text-[10px] tracking-wide uppercase text-white bg-amber-base px-3 py-1 rounded-full">
                  Most loved
                </div>
              )}
              <div className={`w-[46px] h-[46px] rounded-xl flex items-center justify-center mb-4 ${c.highlight ? 'bg-teal-mid' : 'bg-teal-ghost'}`}>
                {c.icon}
              </div>
              <div className="font-inter font-black text-[11px] tracking-wider uppercase text-teal-mid mb-2">{c.badge}</div>
              <h3 className="text-[18px] font-bold text-ink mb-2.5 leading-[1.25]">{c.title}</h3>
              <div className="font-serif italic text-[14.5px] text-text-mid leading-[1.4] mb-3">{c.quote}</div>
              <div className="text-[13.5px] text-text-soft leading-[1.55] mt-auto">{c.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
