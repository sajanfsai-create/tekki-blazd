import { LogoMark } from './Icons'

export default function Footer() {
  return (
    <footer className="bg-off-white border-t border-[rgba(29,158,117,0.16)] py-11">
      <div className="wrap flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2.5">
          <LogoMark size={32} />
          <span className="font-serif font-bold text-[18px] text-ink leading-none">
            Tekki
             <span className="text-amber-base pl-0.5">X</span>
          </span>
          <span className="text-[14px] tracking-[3px] font-bold text-teal-mid uppercase border-l border-[rgba(29,158,117,0.16)] pl-2">
            Blaze
          </span>
        </div>
        <div className="flex gap-6 text-[13px] text-text-soft font-medium">
          <a href="#" className="hover:text-teal-mid transition-colors duration-200">Terms of Service</a>
          <a href="#" className="hover:text-teal-mid transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="hover:text-teal-mid transition-colors duration-200">Contact Support</a>
        </div>
        <div className="text-[12px] text-text-soft">
          &copy; {new Date().getFullYear()} TekkiX. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
