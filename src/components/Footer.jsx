import { LogoMark } from './Icons'

export default function Footer() {
 return (
 <footer className="bg-[#052219] pt-16 pb-8 border-t border-[#052219] mt-auto">
 <div className="wrap flex flex-col lg:flex-row justify-between gap-12 lg:gap-8 mb-16">
 {/* Left Side */}
 <div className="max-w-sm">
 <div className="flex items-center gap-2.5 mb-1.5">
 <LogoMark size={32} />
 <span className="font-serif font-bold text-[22px] text-white leading-none">
 Tekki
 <span className="text-amber-base pl-1.5">Blaze</span>
 </span>
 </div>
 <div className="text-[10px] tracking-[2px] font-bold text-teal-base uppercase mb-6 pl-[42px]">
 A Tekki Blaze Product
 </div>
 <p className="text-teal-ghost text-[17px] font-serif font-medium leading-[1.4]">
 Know your machine. One scan,<br />every answer.
 </p>
 <div className="mt-8 text-teal-ghost text-[14px] leading-relaxed max-w-[280px]">
 <h4 className="text-teal-light text-[13px] font-bold tracking-[2px] uppercase mb-2">Address</h4>
 <p>Indiranagar, Bengaluru, India</p>
 </div>
 </div>

 {/* Right Side: Links */}
 <div className="flex flex-col sm:flex-row gap-12 sm:gap-20 lg:gap-28">
 {/* Column 1 */}
 <div className="flex flex-col gap-4">
 <h4 className="text-teal-light text-[13px] font-bold tracking-[2px] uppercase mb-1">Product</h4>
 <a href="#" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Why Tekki Blaze</a>
 <a href="#" className="text-teal-ghost text-[14px] hover:text-white transition-colors">What It Checks</a>
 <a href="#" className="text-teal-ghost text-[14px] hover:text-white transition-colors">How It Works</a>
 <a href="#" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Pricing</a>
 </div>

 {/* Column 2 */}
 <div className="flex flex-col gap-4">
 <h4 className="text-teal-light text-[13px] font-bold tracking-[2px] uppercase mb-1">Resources</h4>
 <a href="#" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Demo Video</a>
 <a href="#" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Sample Report</a>
 <a href="/help" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Help & FAQ</a>
 <a href="/contact" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Contact</a>
 </div>

 {/* Column 3 */}
 <div className="flex flex-col gap-4">
 <h4 className="text-teal-light text-[13px] font-bold tracking-[2px] uppercase mb-1">Legal</h4>
 <a href="/privacy" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Privacy Policy</a>
 <a href="/terms" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Terms of Service</a>
 <a href="/refund" className="text-teal-ghost text-[14px] hover:text-white transition-colors">Refund Policy</a>
 </div>
 </div>
 </div>

 {/* Bottom Bar */}
 <div className="wrap">
 <div className="border-t border-[rgba(93,202,165,0.2)] pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-[13px] text-teal-light">
 <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
 <span>&copy; {new Date().getFullYear()} Tekki X &middot; Indiranagar, Bengaluru &middot; tekki-x.com</span>
 {/* <span className="hidden sm:inline">&middot;</span> */}
 {/* <span>
 Developed by <a href="https://bostontechindia.in/" target="_blank" rel="noopener noreferrer" className="text-amber-base font-bold hover:text-amber-light underline underline-offset-2 transition-colors">Boston Tech India</a>
 </span> */}
 </div>
 <div className="flex gap-3">
 <a href="/help" className="hover:text-white transition-colors">Help</a>
 <span>&middot;</span>
 <a href="/privacy" className="hover:text-white transition-colors">Privacy</a>
 <span>&middot;</span>
 <a href="/terms" className="hover:text-white transition-colors">Terms</a>
 <span>&middot;</span>
 <a href="/refund" className="hover:text-white transition-colors">Refund Policy</a>
 </div>
 </div>
 </div>
 </footer>
 )
}
