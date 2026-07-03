import { useState } from 'react'
import { LogoMark } from './Icons'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-[100] bg-white/88 backdrop-blur-[14px] border-b border-[rgba(29,158,117,0.16)]">
      <div className="wrap flex items-center justify-between h-[74px] px-4 lg:px-0">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <LogoMark size={40} />
          <span className="font-serif font-bold text-[22px] text-ink leading-none">
            Tekki
            <span className="text-amber-base pl-1.5">X</span>
          </span>
          {/* <span className="text-[14px] tracking-[3px] font-bold text-teal-mid uppercase border-l border-[rgba(29,158,117,0.16)] pl-2.5">
            Blaze
          </span> */}
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-[30px]">
          <a href="#how" className="text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">How It Works</a>
          <a href="#why" className="text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">Why Blaze</a>
          <a href="#checks" className="text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">What's Checked</a>
          <a href="#pricing" className="text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">Pricing</a>
          <a href="#faq" className="text-sm font-medium text-text-mid hover:text-teal-mid transition-colors duration-200">FAQ</a>
          <a
            href="#get"
            className="bg-amber-base text-ink font-bold text-sm px-[22px] py-[11px] rounded-lg transition-all duration-150 hover:-translate-y-0.5 hover:shadow-[0_8px_22px_rgba(239,159,39,0.4)]"
          >
            Get Tekki Blaze
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="text-text-mid hover:text-teal-mid focus:outline-none p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              // Close Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger Icon
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 pt-2 pb-6 bg-white border-t border-[rgba(29,158,117,0.1)] flex flex-col gap-4 shadow-lg">
          <a href="#how" onClick={() => setIsOpen(false)} className="text-base font-medium text-text-mid hover:text-teal-mid py-1">How It Works</a>
          <a href="#why" onClick={() => setIsOpen(false)} className="text-base font-medium text-text-mid hover:text-teal-mid py-1">Why Blaze</a>
          <a href="#checks" onClick={() => setIsOpen(false)} className="text-base font-medium text-text-mid hover:text-teal-mid py-1">What's Checked</a>
          <a href="#pricing" onClick={() => setIsOpen(false)} className="text-base font-medium text-text-mid hover:text-teal-mid py-1">Pricing</a>
          <a href="#faq" onClick={() => setIsOpen(false)} className="text-base font-medium text-text-mid hover:text-teal-mid py-1">FAQ</a>
          <a
            href="#get"
            onClick={() => setIsOpen(false)}
            className="bg-amber-base text-ink font-bold text-center text-sm py-3 rounded-lg mt-2 block"
          >
            Get Tekki Blaze
          </a>
        </div>
      </div>
    </nav>
  )
}