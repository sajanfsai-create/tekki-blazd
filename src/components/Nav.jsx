import { LogoMark } from './Icons'

export default function Nav() {
  return (
    <nav className="sticky top-0 z-[100] bg-white/88 backdrop-blur-[14px] border-b border-[rgba(29,158,117,0.16)]">
      <div className="wrap flex items-center justify-between h-[74px]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <LogoMark size={40} />
          <span className="font-serif font-bold text-[22px] text-ink leading-none">
            Tekki
            <span className="text-amber-base">X</span>
          </span>
          <span className="text-[14px] tracking-[3px] font-bold text-teal-mid uppercase border-l border-[rgba(29,158,117,0.16)] pl-2.5">
            Blaze
          </span>
        </a>

        {/* Nav Links */}
        <div className="flex items-center gap-[30px]">
          <a href="#why" className="hidden md:inline text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">Why Blaze</a>
          <a href="#checks" className="hidden md:inline text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">What It Checks</a>
          <a href="#how" className="hidden md:inline text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">How It Works</a>
          <a href="#who-for" className="hidden md:inline text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">Who It's For</a>
          <a href="#get" className="hidden md:inline text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">Pricing</a>
          <a
            href="#get"
            className="bg-amber-base text-ink font-bold text-sm px-[22px] py-[11px] rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(239,159,39,0.4)]"
          >
            Get Tekki Blaze · ₹199
          </a>
        </div>
      </div>
    </nav>
  )
}
