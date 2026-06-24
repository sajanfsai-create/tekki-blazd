export default function ChecksSection() {
  const checks = [
    {
      title: 'Component Health',
      desc: 'CPU, GPU, RAM, Disk & Network verified at OS level.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#fff" strokeWidth="1.8" /><rect x="9" y="9" width="6" height="6" fill="#FFBF00" /></svg>
    },
    {
      title: 'Driver Issues',
      desc: 'Errors, missing & disabled devices auto-surfaced.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v6m0 6v6M3 12h6m6 0h6" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="12" r="3" fill="#FFBF00" /></svg>
    },
    {
      title: 'Heat & Throttling',
      desc: 'Real-time CPU/GPU temps & cooling advice.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /><circle cx="12" cy="17" r="4" stroke="#FFBF00" strokeWidth="1.8" /></svg>
    },
    {
      title: 'Peripherals',
      desc: 'Camera, mic, speakers, USB & Wi-Fi tested.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="12" rx="2" stroke="#fff" strokeWidth="1.8" /><circle cx="12" cy="11" r="2.5" fill="#FFBF00" /></svg>
    },
    {
      title: 'Smart Updates',
      desc: 'OS, BIOS & hardware recommendations, prioritised.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3v12m0 0l-4-4m4 4l4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /><path d="M5 19h14" stroke="#FFBF00" strokeWidth="1.8" strokeLinecap="round" /></svg>
    },
    {
      title: 'Registry Health',
      desc: 'Orphaned entries & broken links flagged safely.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h10" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" /></svg>
    },
    {
      title: 'Error Intelligence',
      desc: 'Crash patterns decoded from event logs.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 16H3l9-16z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" /><path d="M12 10v3" stroke="#FFBF00" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1" fill="#FFBF00" /></svg>
    },
    {
      title: 'A–F Grade PDF',
      // desc: 'A beautiful, shareable certified report.',
      desc: 'A shareable certified report.',
      icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M7 3h8l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#fff" strokeWidth="1.8" strokeLinejoin="round" /><path d="M14 3v5h5" stroke="#fff" strokeWidth="1.8" /><path d="M9 14l2 2 4-4" stroke="#FFBF00" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
    }
  ]

  return (
    <section className="bg-teal-deep text-white py-24" id="checks">
      <div className="wrap">
        <div className="text-[13px] tracking-[3px] uppercase font-extrabold text-amber-light mb-3.5 text-center">Inside Every Scan</div>
        <h2 className="font-inter font-black tracking-tight text-[34px] md:text-[48px] leading-[1.04] text-center text-white max-w-[680px] mx-auto mb-4.5">12 checks. One report.</h2>
        <p className="text-[17px] text-teal-pale text-center max-w-[580px] mx-auto mb-14">Blaze goes far beyond "is it on." It verifies every component is healthy, recognised and running right.</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4.5">
          {checks.map(check => (
            <div key={check.title} className="bg-teal-base/10 border border-teal-base/25 rounded-xl p-5.5 transition-all duration-200 hover:bg-teal-base/20 hover:-translate-y-1">
              <div className="w-11 h-11 rounded-lg bg-teal-mid flex items-center justify-center mb-4">
                {check.icon}
              </div>
              <h4 className="text-[16px] font-bold text-white mb-1.5">{check.title}</h4>
              <p className="text-[13px] text-teal-pale leading-[1.5]">{check.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
