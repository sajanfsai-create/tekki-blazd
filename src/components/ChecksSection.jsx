import React from 'react';
import Reveal from './Reveal';

export default function ChecksSection() {
 const categories = [
 {
 title: 'Core Compute',
 subtitle: '4 checks · the performance backbone',
 icon: (
 <div className="w-[14px] h-[14px] border-[2px] border-amber-base rounded-[2px] flex items-center justify-center">
 <div className="w-[4px] h-[4px] bg-amber-base rounded-[1px]"></div>
 </div>
 ),
 items: [
 { title: 'Component Health', desc: 'CPU, GPU & RAM verified at OS level.' },
 { title: 'Storage & SSD Wear', desc: 'Drive health, wear level & read speed.' },
 { title: 'Heat & Throttling', desc: 'Real-time CPU/GPU temperatures.' },
 { title: 'Smart Updates', desc: 'OS, BIOS & hardware, prioritised.' },
 ]
 },
 {
 title: 'Peripherals & Power',
 subtitle: '4 checks · everything you plug in',
 icon: (
 <div className="w-[18px] h-[12px] border-[2px] border-amber-base rounded-[2px] flex items-center justify-center">
 <div className="w-[4px] h-[4px] bg-amber-base rounded-[1px]"></div>
 </div>
 ),
 items: [
 { title: 'Device Tests', desc: 'Camera, mic, speakers & touchpad.' },
 { title: 'Driver Issues', desc: 'Errors, missing & disabled devices.' },
 { title: 'Connectivity', desc: 'Wi-Fi, Bluetooth & USB confirmed.' },
 { title: 'Battery Health', desc: 'Design vs current capacity & wear.' },
 ]
 },
 {
 title: 'Event-Log Intelligence',
 subtitle: '4 checks · reading between the lines',
 icon: (
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#EF9F27" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
 <line x1="12" y1="9" x2="12" y2="13"></line>
 <line x1="12" y1="17" x2="12.01" y2="17"></line>
 </svg>
 ),
 items: [
 { title: 'Error Intelligence', desc: 'Crash patterns from Windows event logs.' },
 { title: 'Crash / BSOD History', desc: 'Blue-screen & WHEA records decoded.' },
 { title: 'Registry Health', desc: 'Orphaned entries & broken links.' },
 { title: 'Hardware Security Lock', desc: 'Component signatures saved & verified on re-scan.' },
 ]
 }
 ];

 return (
 <section className="bg-[#fbfcfc] py-24" id="checks">
 <div className="wrap max-w-[1240px]">
 <div className="text-center max-w-[720px] mx-auto mb-12">
 <Reveal delay={0}>
 <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-dark mb-4 flex flex-col items-center">
 <span>Inside Every Scan</span>
 <div className="w-6 h-[2px] bg-amber-brand mt-2.5 rounded-full"></div>
 </div>
 <h2 className="font-inter font-[800] tracking-tight text-[30px] md:text-[42px] leading-tight text-ink">
 12 checks,<br />grouped the way <span className="text-teal-mid">engineers think.</span>
 </h2>
 <p className="text-base text-text-mid mt-4 font-light leading-relaxed">
 Tekki Blaze goes far beyond "is it on." Every component is verified, graded, and explained across three intelligence layers — all in one pass.
 </p>
 </Reveal>
 </div>

 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
 {categories.map((category, catIdx) => (
 <Reveal key={category.title} delay={100 + (catIdx * 100)}>
 <div className="bg-white rounded-[20px] p-5 lg:p-6 h-full flex flex-col transition-all duration-300 border border-[rgba(29,158,117,0.12)] shadow-[0_4px_24px_rgba(4,52,44,0.03)] hover:border-amber-brand hover:shadow-[0_12px_40px_rgba(239,159,39,0.15)] hover:-translate-y-1">

 {/* Card Header (Icon + Titles) */}
 <div className="flex gap-3.5 items-center mb-5 pb-5 border-b border-[rgba(29,158,117,0.12)]">
 <div className="w-[46px] h-[46px] bg-ink rounded-[12px] flex items-center justify-center shrink-0 shadow-sm">
 {category.icon}
 </div>
 <div>
 <h3 className="font-inter font-bold text-[18px] text-amber-dark mb-0.5 tracking-tight">{category.title}</h3>
 <div className="text-[12px] text-text-soft leading-tight">{category.subtitle}</div>
 </div>
 </div>

 {/* List Items */}
 <div className="flex flex-col flex-grow">
 {category.items.map((item, itemIdx) => (
 <div key={itemIdx} className={`flex items-start gap-3 py-3 ${itemIdx !== category.items.length - 1 ? 'border-b border-[rgba(29,158,117,0.12)]' : ''}`}>
 <div className="mt-0.5 w-[20px] h-[20px] rounded-md bg-teal-ghost flex items-center justify-center shrink-0 border border-[rgba(29,158,117,0.1)]">
 <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="var(--color-teal-base)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
 </div>
 <div>
 <h4 className="text-[14px] font-bold text-ink mb-1 leading-tight">{item.title}</h4>
 <p className="text-[13px] text-text-soft leading-[1.4]">{item.desc}</p>
 </div>
 </div>
 ))}
 </div>

 </div>
 </Reveal>
 ))}
 </div>

 {/* Included Features Grid */}
 <Reveal delay={200}>
 <div className="mt-20">
 {/* Header / Pill */}
 <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-center sm:text-left">
 <div className="bg-amber-brand text-ink text-[11px] font-black tracking-wide uppercase px-4 py-1.5 rounded-full shadow-[0_4px_14px_rgba(239,159,39,0.25)]">
 Included · No Extra Cost
 </div>
 <div className="font-bold text-ink text-[15px]">
 Beyond the health grades, the same ₹299 also gives you:
 </div>
 </div>

 {/* Cards Grid */}
 <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
 {/* Card 1 */}
 <div className="bg-white rounded-[14px] p-5 border border-[rgba(29,158,117,0.12)] border-t-[3px] border-t-amber-brand shadow-[0_4px_24px_rgba(4,52,44,0.04)] hover:-translate-y-1 transition-transform duration-300">
 <div className="w-9 h-9 rounded-[10px] bg-[#fcf5eb] text-amber-brand flex items-center justify-center mb-4">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
 </div>
 <h4 className="font-bold text-ink text-[14px] mb-2 leading-tight">Real Benchmarks</h4>
 <p className="text-[13px] text-text-soft leading-relaxed">CPU ops/sec, disk IOPS, memory latency & boot time — measured, not guessed.</p>
 </div>

 {/* Card 2 */}
 <div className="bg-white rounded-[14px] p-5 border border-[rgba(29,158,117,0.12)] border-t-[3px] border-t-amber-brand shadow-[0_4px_24px_rgba(4,52,44,0.04)] hover:-translate-y-1 transition-transform duration-300">
 <div className="w-9 h-9 rounded-[10px] bg-[#fcf5eb] text-amber-brand flex items-center justify-center mb-4">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
 </div>
 <h4 className="font-bold text-ink text-[14px] mb-2 leading-tight">Compatibility Matrix</h4>
 <p className="text-[13px] text-text-soft leading-relaxed">Can it run your tools? 10 software categories matched to your exact specs.</p>
 </div>

 {/* Card 3 */}
 <div className="bg-white rounded-[14px] p-5 border border-[rgba(29,158,117,0.12)] border-t-[3px] border-t-amber-brand shadow-[0_4px_24px_rgba(4,52,44,0.04)] hover:-translate-y-1 transition-transform duration-300">
 <div className="w-9 h-9 rounded-[10px] bg-[#fcf5eb] text-amber-brand flex items-center justify-center mb-4">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="18" y="3" width="4" height="18"></rect><rect x="10" y="8" width="4" height="13"></rect><rect x="2" y="13" width="4" height="8"></rect></svg>
 </div>
 <h4 className="font-bold text-ink text-[14px] mb-2 leading-tight">One-Click Cleanup</h4>
 <p className="text-[13px] text-text-soft leading-relaxed">Reclaim gigabytes of junk safely — free, optional, and always asks first.</p>
 </div>

 {/* Card 4 */}
 <div className="bg-white rounded-[14px] p-5 border border-[rgba(29,158,117,0.12)] border-t-[3px] border-t-amber-brand shadow-[0_4px_24px_rgba(4,52,44,0.04)] hover:-translate-y-1 transition-transform duration-300">
 <div className="w-9 h-9 rounded-[10px] bg-[#fcf5eb] text-amber-brand flex items-center justify-center mb-4">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
 </div>
 <h4 className="font-bold text-ink text-[14px] mb-2 leading-tight">Upgrade Cost Estimates</h4>
 <p className="text-[13px] text-text-soft leading-relaxed">Exact part recommendations, exact prices — know the cost before any shop visit.</p>
 </div>

 {/* Card 5 */}
 <div className="bg-white rounded-[14px] p-5 border border-[rgba(29,158,117,0.12)] border-t-[3px] border-t-amber-brand shadow-[0_4px_24px_rgba(4,52,44,0.04)] hover:-translate-y-1 transition-transform duration-300">
 <div className="w-9 h-9 rounded-[10px] bg-[#fcf5eb] text-amber-brand flex items-center justify-center mb-4">
 <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><polyline points="9 12 11 14 15 10"></polyline></svg>
 </div>
 <h4 className="font-bold text-ink text-[14px] mb-2 leading-tight">Hardware Security</h4>
 <p className="text-[13px] text-text-soft leading-relaxed">Every component’s serial fingerprinted — any hardware change is flagged on re-scan.</p>
 </div>
 </div>
 </div>
 </Reveal>



 </div>
 </section>
 )
}
