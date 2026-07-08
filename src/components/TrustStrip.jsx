export default function TrustStrip() {
  return (
    <div className="bg-white border-y border-[rgba(29,158,117,0.14)]">
      <div className="wrap flex items-center justify-center flex-wrap gap-y-2 py-3.5 px-4">

        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-mid px-2.5 sm:px-4">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><rect x="4" y="4" width="16" height="16" rx="2" stroke="#EF9F27" strokeWidth="1.8"/><rect x="9" y="9" width="6" height="6" fill="#EF9F27"/></svg>
          <span className="font-inter font-black text-amber-dark">12-point</span> system check
        </span>

        <span className="hidden sm:block w-px h-4 bg-[rgba(29,158,117,0.14)] shrink-0"></span>

        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-mid px-2.5 sm:px-4">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#EF9F27" strokeWidth="1.8"/><path d="M12 7v5l3 2" stroke="#EF9F27" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"/></svg>
          <span className="font-inter font-black text-amber-dark">3-min</span> diagnostics
        </span>

        <span className="hidden sm:block w-px h-4 bg-[rgba(29,158,117,0.14)] shrink-0"></span>

        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-mid px-2.5 sm:px-4">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M7 3h8l5 5v11a1 1 0 01-1 1H7a1 1 0 01-1-1V4a1 1 0 011-1z" stroke="#EF9F27" strokeWidth="1.7" strokeLinejoin="round"/><path d="M14 3v5h5" stroke="#EF9F27" strokeWidth="1.7"/></svg>
          <span className="font-inter font-black text-amber-dark">A–F</span> certified report
        </span>

        <span className="hidden sm:block w-px h-4 bg-[rgba(29,158,117,0.14)] shrink-0"></span>

        <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-text-mid px-2.5 sm:px-4">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" stroke="#EF9F27" strokeWidth="1.7" strokeLinejoin="round"/></svg>
          <span className="font-inter font-black text-amber-dark">Zero</span> cloud retention
        </span>

        <span className="hidden sm:block w-px h-4 bg-[rgba(29,158,117,0.14)] shrink-0"></span>

        <a
          className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 text-[13px] text-text-mid hover:text-text-soft transition-colors"
          href="https://www.google.com/maps/search/Tekki+Blaze+Indiranagar+Bengaluru"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-amber-brand tracking-wide">★</span>
          <span>Reviews on Google →</span>
        </a>

        <span className="hidden sm:block w-px h-4 bg-[rgba(29,158,117,0.14)] shrink-0"></span>

        <button
          type="button"
          className="bg-transparent border-none cursor-pointer font-sans text-[13px] font-bold text-teal-mid underline underline-offset-2 px-2.5 sm:px-4 hover:text-teal-dark transition-colors"
        >
          Privacy & compliance →
        </button>

      </div>
    </div>
  )
}
