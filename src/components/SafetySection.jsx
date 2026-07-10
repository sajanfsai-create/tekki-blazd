export default function SafetySection() {
 return (
 <section className="pb-24">
 <div className="wrap">
 <div className="bg-teal-ghost border border-[rgba(29,158,117,0.16)] rounded-2xl p-8.5 md:px-10 flex flex-col sm:flex-row items-center gap-6.5 max-sm:text-center">
 <div className="w-[62px] h-[62px] rounded-xl bg-teal-mid flex items-center justify-center shrink-0">
 <svg width="30" height="30" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" stroke="#fff" strokeWidth="1.7" strokeLinejoin="round"/><path d="M9 12l2 2 4-4" stroke="#FFBF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
 </div>
 <div>
 <h3 className="font-inter font-black tracking-tight text-[22px] text-ink mb-1.5">Safe to download. Private by design.</h3>
 <p className="text-[15px] text-text-mid leading-[1.6] max-w-[780px]">The Tekki Blaze app is code-signed and submitted to Microsoft & major antivirus vendors. It reads your hardware information only — it never opens, uploads or touches your personal files.</p>
 </div>
 </div>
 </div>
 </section>
 )
}
