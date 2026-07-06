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
        <Reveal delay={0}>
          <div className="text-[12px] tracking-[3px] uppercase font-bold text-amber-dark mb-4 text-center">Inside Every Scan</div>
          <h2 className="font-inter font-black tracking-tight text-[36px] md:text-[48px] leading-[1.04] text-center text-ink max-w-[700px] mx-auto mb-5">
            12 checks,<br/>grouped the way <span className="text-[#0d523c]">engineers think.</span>
          </h2>
          <p className="text-[17px] text-text-mid text-center max-w-[720px] mx-auto mb-16 leading-[1.6]">
            Blaze goes far beyond "is it on." Every component is verified, graded, and explained across three intelligence layers — all in one pass.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, catIdx) => (
            <Reveal key={category.title} delay={100 + (catIdx * 100)}>
              <div className="bg-white border border-[rgba(29,158,117,0.12)] rounded-[20px] p-6 lg:p-8 h-full flex flex-col shadow-[0_4px_24px_rgba(4,52,44,0.03)] hover:shadow-[0_8px_32px_rgba(4,52,44,0.06)] transition-shadow duration-300">
                
                {/* Card Header (Icon + Titles) */}
                <div className="flex gap-4 items-center mb-6 pb-6 border-b border-[rgba(29,158,117,0.12)]">
                  <div className="w-[52px] h-[52px] bg-ink rounded-[14px] flex items-center justify-center shrink-0 shadow-sm">
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-inter font-black text-[20px] text-amber-dark mb-1 tracking-tight">{category.title}</h3>
                    <div className="text-[13px] text-text-soft">{category.subtitle}</div>
                  </div>
                </div>
                
                {/* List Items */}
                <div className="flex flex-col gap-6 flex-grow">
                  {category.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3.5">
                      <div className="mt-0.5 w-[22px] h-[22px] rounded-md bg-[#eaf7f2] flex items-center justify-center shrink-0 border border-[rgba(29,158,117,0.1)]">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#0f6e56" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                      </div>
                      <div>
                        <h4 className="text-[15px] font-bold text-ink mb-1 leading-tight">{item.title}</h4>
                        <p className="text-[14px] text-text-soft leading-[1.5]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
