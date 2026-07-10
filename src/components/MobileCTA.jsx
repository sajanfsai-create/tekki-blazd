export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white/95 backdrop-blur-[12px] border-t border-[rgba(29,158,117,0.14)] p-3 z-[100] sm:hidden shadow-[0_-10px_30px_rgba(4,52,44,0.05)]">
      <div className="flex items-center justify-between gap-3 max-w-[600px] mx-auto">
        <div className="flex flex-col pl-2">
          <span className="text-[13.5px] font-black text-ink leading-tight">Tekki Blaze</span>
          <span className="text-[11.5px] font-medium text-text-soft">2 scans &middot; ₹299</span>
        </div>
        <a
          href="#get"
          className="bg-amber-brand text-ink font-bold text-[14px] px-6 py-3 rounded-xl shadow-[0_4px_14px_rgba(239,159,39,0.25)] hover:bg-amber-light transition-colors whitespace-nowrap"
        >
          Scan now
        </a>
      </div>
    </div>
  )
}
