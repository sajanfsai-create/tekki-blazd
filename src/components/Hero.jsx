import React, { useState, useEffect } from 'react';
import { ArrowRight } from './Icons';
import Reveal from './Reveal';
import Modal from './Modal';
import VideoModal from './VideoModal';
import SampleReportPreview from './SampleReportPreview';
import WaitlistModal from './WaitlistModal';

function AppWindow() {
    const rows = [
        {
            grade: 'C',
            gradeLabel: 'FAIR',
            gradeColor: 'bg-[#C77F2C]',
            textColor: 'text-[#C77F2C]',
            title: 'Processor',
            desc: (
                <>
                    Runs hot under load — <span className="font-bold text-[#C77F2C]">fixable:</span> a simple tune-up lifts it to a B
                </>
            )
        },
        {
            grade: 'A',
            gradeLabel: 'PEAK',
            gradeColor: 'bg-[#0F4C3A]',
            textColor: 'text-[#0F4C3A]',
            title: 'Memory',
            desc: 'Top tier — no action needed'
        },
        {
            grade: 'B',
            gradeLabel: 'STRONG',
            gradeColor: 'bg-[#22A07A]',
            textColor: 'text-[#22A07A]',
            title: 'Storage & SSD',
            desc: 'Fast and healthy · 92% of drive life remaining'
        },
        {
            grade: 'A',
            gradeLabel: 'PEAK',
            gradeColor: 'bg-[#0F4C3A]',
            textColor: 'text-[#0F4C3A]',
            title: 'Battery',
            desc: 'Holds 90% capacity after 214 charges'
        },
        {
            grade: 'B',
            gradeLabel: 'STRONG',
            gradeColor: 'bg-[#22A07A]',
            textColor: 'text-[#22A07A]',
            title: 'Motherboard',
            desc: 'Sound and stable · fingerprint sealed ✓'
        }
    ];

    return (
        <div className="w-full max-w-[460px] md:max-w-[560px] bg-[#FFFFFF] rounded-[12px] shadow-[0_16px_40px_rgba(0,0,0,0.06)] overflow-hidden border border-[#E4EBE8] flex flex-col font-sans relative">
            {/* macOS Style Header */}
            <div className="bg-[#0E1D17] px-4 py-2 flex justify-between items-center shrink-0 z-10">
                <div className="flex items-center gap-3">
                    <div className="flex gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-[#FF5F57]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#FFBD2E]"></div>
                        <div className="w-2 h-2 rounded-full bg-[#28CA42]"></div>
                    </div>
                    <div className="font-mono text-[11px] text-[#EEA036] tracking-wide mt-0.5">
                        tekki-blaze · health-report
                    </div>
                </div>
                <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#EEA036]"></div>
                    <div className="font-mono text-[10px] font-bold text-[#61C2A2] uppercase tracking-[1px] mt-0.5">
                        Scan Complete
                    </div>
                </div>
            </div>

            {/* Content Body */}
            <div className="px-5 sm:px-6 py-4">
                {/* Top Info Section */}
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <div className="shrink-0">
                        <div className="w-[70px] h-[74px] bg-[#125642] rounded-[12px] shadow-[0_12px_24px_-6px_rgba(18,86,66,0.45)] flex flex-col items-center justify-center text-white relative">
                            <div className="font-serif font-bold text-[40px] leading-none mb-0.5">B</div>
                            <div className="text-[8px] font-bold tracking-[1.5px] uppercase text-[#61C2A2]">· STRONG</div>
                        </div>
                    </div>
                    <div className="mt-0.5">
                        <div className="text-[10px] font-bold tracking-[2px] uppercase text-[#65867D] mb-1">
                            HEALTH CHECK FOR
                        </div>
                        <div className="flex items-baseline gap-2 mb-1.5">
                            <h1 className="font-serif font-bold text-[22px] text-[#101917] leading-none tracking-tight">
                                i5-10300H Laptop
                            </h1>
                            <span className="text-[12px] font-medium text-[#65867D]">
                                8 GB RAM · 512 GB SSD
                            </span>
                        </div>
                        <p className="text-[13px] text-[#4A6961] leading-[1.4]">
                            In good shape for everyday work. 4 findings worth acting on — small fixes today keep it <span className="font-bold text-[#C77F2C]">faster, cooler, and reliable for longer.</span>
                        </p>
                    </div>
                </div>

                {/* 3-Column Stats */}
                <div className="grid grid-cols-3 border border-[#E4EBE8] rounded-[10px] bg-[#FAFCFB] mb-3">
                    <div className="p-2.5 border-r border-[#E4EBE8] flex flex-col justify-center">
                        <div className="font-bold text-[22px] text-[#101917] leading-none mb-1">12 / 12</div>
                        <div className="text-[9px] font-bold tracking-[1px] uppercase text-[#65867D]">CHECKS RUN</div>
                    </div>
                    <div className="p-2.5 border-r border-[#E4EBE8] flex flex-col justify-center">
                        <div className="font-bold text-[22px] text-[#101917] leading-none mb-1">8</div>
                        <div className="text-[9px] font-bold tracking-[1px] uppercase text-[#65867D]">PASSED CLEAN</div>
                    </div>
                    <div className="p-2.5 flex flex-col justify-center">
                        <div className="font-bold text-[22px] text-[#EEA036] leading-none mb-1">4</div>
                        <div className="text-[9px] font-bold tracking-[1px] uppercase text-[#EEA036]">WORTH ACTING ON</div>
                    </div>
                </div>

                {/* Report List */}
                <div className="flex flex-col">
                    {rows.map((row, i) => (
                        <div key={i} className="flex items-center gap-3.5 py-2.5 border-b border-[#E4EBE8] relative">
                            <div className="shrink-0 flex justify-center w-[36px] relative">
                                <div className={`w-[36px] h-[36px] rounded-[8px] flex items-center justify-center font-serif font-bold text-[20px] text-white ${row.gradeColor}`}>
                                    {row.grade}
                                </div>
                                <div className={`absolute -bottom-[12px] left-1/2 -translate-x-1/2 text-[7.5px] font-bold tracking-[1px] uppercase ${row.textColor} whitespace-nowrap`}>
                                    {row.gradeLabel}
                                </div>
                            </div>
                            <div className="shrink-0 w-[110px]">
                                <div className="font-bold text-[13px] text-[#101917]">{row.title}</div>
                            </div>
                            <div className="flex-1">
                                <div className="text-[12px] text-[#4A6961] leading-[1.3]">{row.desc}</div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-3 text-[11px] text-[#65867D]">
                    + 7 more checks — drivers, crash history, device tests — in your full report
                </div>

                {/* Footer Verify Block */}
                <div className="mt-3 border border-[#E4EBE8] rounded-[6px] p-2.5 flex justify-between items-center bg-[#FAFCFB]">
                    <div className="font-mono text-[10px] text-[#65867D] tracking-wide uppercase">
                        SCAN #B47K2 · FINGERPRINT VERIFIED ✓
                    </div>
                    <div className="font-mono text-[10px] text-[#65867D] tracking-wide">
                        verify at <span className="text-[#189568] font-semibold">tekki-x.com/verify</span>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex gap-2.5 mt-3">
                    <button className="flex-1 bg-[#0E1D17] hover:bg-[#152a21] transition-colors text-[#EEA036] font-bold rounded-[6px] py-2.5 px-3 flex items-center justify-center gap-1.5 text-[13px] shadow-[0_6px_16px_rgba(14,29,23,0.25)]">
                        <span className="text-[15px] mb-[1.5px] font-normal">↓</span> Download PDF
                    </button>
                    <button className="flex-1 bg-[#FFFFFF] hover:bg-[#FAFCFB] transition-colors border border-[#E4EBE8] text-[#B77024] font-bold rounded-[6px] py-2.5 px-3 flex items-center justify-center gap-1.5 text-[13px] shadow-sm">
                        Share via WhatsApp
                    </button>
                </div>
            </div>
        </div>
    );
}

export default function Hero() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);
    const [isReportOpen, setIsReportOpen] = useState(false);
    const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

    return (
        <header className="py-[52px] bg-[radial-gradient(110%_70%_at_80%_0%,var(--color-teal-ghost),var(--color-off-white)_52%,#fff)] overflow-hidden relative" id="top">
            <div className="wrap grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-[52px] items-center relative z-10">
                {/* Left */}
                <div className="flex flex-col items-start relative z-10">
                    {/* Eyebrow */}
                    <Reveal delay={0}>
                        <div className="inline-flex items-center gap-2 text-[12px] tracking-[3px] uppercase font-bold text-text-soft mb-5">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-brand shadow-[0_0_0_3px_rgba(239,159,39,0.18)]"></span>
                            The Complete Computer Health Platform
                        </div>
                    </Reveal>

                    {/* H1 */}
                    <Reveal delay={100}>
                        <h1 className="font-inter font-black tracking-[-0.035em] text-[36px] sm:text-[56px] leading-none mb-5">
                            <span className="text-ink">One scan.</span><br />
                            <span className="text-teal-mid">Every answer.</span><br />
                            <span className="text-amber-brand" style={{ fontFeatureSettings: '"tnum"', whiteSpace: 'nowrap' }}>₹299</span>
                        </h1>
                    </Reveal>

                    <Reveal delay={200}>
                        <p className="text-[17px] text-text-mid mb-2.5 leading-relaxed font-light max-w-[460px]">
                            <b>Tekki Blaze gives your computer a complete health checkup — in 3 minutes.</b> One scan grades all 12 parts, benchmarks real speed, clears the junk, and puts an exact price on every upgrade. Then scan #2 proves the fix worked.
                        </p>
                    </Reveal>

                    {/* Privacy badge */}
                    <Reveal delay={300}>
                        <div className="inline-flex items-center gap-2 text-[13px] font-semibold text-teal-mid bg-teal-ghost border border-[rgba(29,158,117,0.14)] rounded-[30px] px-3.5 py-1.5 mb-6">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" stroke="#0F6E56" strokeWidth="1.7" strokeLinejoin="round" /></svg>
                            Zero cloud retention — your data never leaves your device
                        </div>
                    </Reveal>

                    {/* CTA Row */}
                    <Reveal delay={400}>
                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            <a
                                href="#pricing"
                                className="animate-cta-pulse inline-flex items-center gap-2.5 bg-amber-brand text-ink font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_8px_24px_rgba(239,159,39,0.28)] border-none hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(239,159,39,0.42)]"
                            >
                                Scan my computer · ₹299
                                <svg width="17" height="17" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#0D1F1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                            </a>
                            <button
                                onClick={() => setIsVideoOpen(true)}
                                className="inline-flex items-center gap-1.5 text-sm font-semibold text-text-mid hover:text-amber-dark transition-colors cursor-pointer bg-transparent border-none"
                            >
                                Watch a scan →
                            </button>
                        </div>
                    </Reveal>

                    {/* OS support */}
                    <Reveal delay={500}>
                        <div className="flex flex-col gap-1.5">
                            <div className="text-[13px] text-text-soft flex items-center gap-1.5">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#0F6E56" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
                                Windows 10 & 11 · Laptops & Desktops
                            </div>
                            <div className="text-[13px] text-text-soft flex items-center gap-1.5">
                                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="#6A8A80" strokeWidth="1.8" /><path d="M12 7v5l3 2" stroke="#6A8A80" strokeWidth="1.9" strokeLinecap="round" /></svg>
                                Coming soon: macOS & Linux &middot;
                                <span onClick={() => setIsWaitlistOpen(true)} className="ml-1 text-amber-dark font-bold underline decoration-2 underline-offset-2 cursor-pointer hover:text-amber-brand transition-colors">Join Waitlist &rarr;</span>
                            </div>
                        </div>
                    </Reveal>
                </div>

                {/* Right – App Window */}
                <Reveal delay={300}>
                    <div className="w-full flex justify-center lg:justify-start">
                        <AppWindow />
                    </div>
                </Reveal>
            </div>

            <Modal isOpen={isVideoOpen} onClose={() => setIsVideoOpen(false)}>
                <VideoModal />
            </Modal>

            <Modal isOpen={isReportOpen} onClose={() => setIsReportOpen(false)}>
                <SampleReportPreview />
            </Modal>

            <Modal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)}>
                <WaitlistModal />
            </Modal>
        </header>
    );
}