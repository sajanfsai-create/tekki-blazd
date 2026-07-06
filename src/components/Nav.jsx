import { useState, useEffect } from 'react'
import { LogoMark } from './Icons'

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  const navLinks = [
    { id: 'how', label: 'How It Works' },
    { id: 'why', label: 'Why Blaze' },
    { id: 'checks', label: "What's Checked" },
    { id: 'pricing', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
    { id: 'partner', label: 'Become a Partner', href: 'tekkiblaze-partners' },
  ]

  // Track scroll position to update active section and scroll progress bar
  useEffect(() => {
    const handleScroll = () => {
      // Calculate continuous scroll progress percentage
      const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
      const maxHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollPercent = maxHeight > 0 ? (scrolled / maxHeight) * 100 : 0;
      setScrollProgress(scrollPercent);

      // Determine active section for bold text highlighting
      const sectionIds = navLinks.map(link => link.id)
      let currentActive = ''

      // Iterate backwards to find the last section that has scrolled past the offset
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i]
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          // Offset allows the section to become active slightly before it hits the very top
          if (rect.top <= 150) {
            currentActive = id
            break
          }
        }
      }

      // Clear active state if near top
      if (window.scrollY < 50) {
        currentActive = ''
      }

      if (currentActive !== activeSection) {
        setActiveSection(currentActive)
      }
    }

    window.addEventListener('scroll', handleScroll)
    // Initial check
    handleScroll()

    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  return (
    <nav className="sticky top-0 z-[100] bg-white/88 backdrop-blur-[14px] border-b border-[rgba(29,158,117,0.16)] relative">

      {/* Scroll Progress Bar container (100% width) */}
      <div className="absolute bottom-[-1px] left-0 h-[2px] w-full z-10 pointer-events-none">
        {/* The actual extending bar */}
        <div
          className="h-full bg-gradient-to-r from-teal-mid to-amber-base transition-all duration-100 ease-linear"
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      <div className="wrap flex items-center justify-between h-[74px] px-4 lg:px-0">

        {/* Logo */}
        <a href="#" className="flex items-center gap-3 relative z-20">
          <LogoMark size={40} />
          <span className="font-serif font-bold text-[22px] text-ink leading-none">
            Tekki
            <span className="text-amber-base pl-1.5">X</span>
          </span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-[30px] relative z-20">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href ? (link.href.startsWith('/') ? link.href : `/${link.href}`) : `/#${link.id}`}
                data-nav-link={link.id}
                className={`relative text-[15px] pb-1 transition-colors duration-200 ${isActive
                  ? "font-bold text-teal-mid"
                  : "font-medium text-text-mid hover:text-teal-mid"
                  }`}
              >
                {link.label}
                <span className={`absolute left-0 bottom-0 w-full h-[2.5px] bg-amber-base rounded-full transition-transform duration-300 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </a>
            )
          })}
          <a
            href="/#pricing"
            className="bg-ink text-white font-semibold text-[15px] px-[24px] py-[10px] rounded-full transition-all duration-150 hover:bg-black hover:shadow-lg ml-2"
          >
            Get Tekki Blaze
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center lg:hidden relative z-20">
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
      <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} relative z-10`}>
        <div className="px-4 pt-2 pb-6 bg-white border-t border-[rgba(29,158,117,0.1)] flex flex-col gap-4 shadow-lg">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id
            return (
              <a
                key={link.id}
                href={link.href ? (link.href.startsWith('/') ? link.href : `/${link.href}`) : `/#${link.id}`}
                onClick={() => setIsOpen(false)}
                className={`relative self-start text-base py-1 ${isActive
                  ? "font-bold text-teal-mid"
                  : "font-medium text-text-mid hover:text-teal-mid"
                  }`}
              >
                {link.label}
                <span className={`absolute left-0 bottom-0 w-full h-[2.5px] bg-amber-base rounded-full transition-transform duration-300 ease-out origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`}></span>
              </a>
            )
          })}
          <a
            href="/#pricing"
            onClick={() => setIsOpen(false)}
            className="bg-ink text-white font-semibold text-center text-base py-3 rounded-full mt-2 block hover:bg-black transition-colors"
          >
            Get Tekki Blaze
          </a>
        </div>
      </div>
    </nav>
  )
}