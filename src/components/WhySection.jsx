import React, { useState, useEffect, useRef } from 'react';
import Reveal from './Reveal';

const tabs = [
  {
    id: '01',
    usp: 'theft',
    title: 'Hardware Fingerprint',
    badge: 'Included',
    desc: "Every component's signature recorded on scan 1 — any change is flagged on scan 2.",
  },
  {
    id: '02',
    usp: 'rescan',
    title: 'Proof-of-Fix Re-Scan',
    badge: '2 scans · ₹299',
    desc: 'Diagnose, fix, then re-scan — proof the repair actually worked.',
  },
  {
    id: '03',
    usp: 'cert',
    title: 'A–F Certificate',
    badge: 'The output',
    desc: 'Raw diagnostics become one document anyone can trust.',
  },
  {
    id: '04',
    usp: 'priv',
    title: 'Zero-Footprint Privacy',
    badge: 'Privacy first',
    desc: 'No installer, no admin rights, zero cloud retention — nothing left behind.',
  },
  {
    id: '05',
    usp: 'fix',
    title: 'Compatibility Matrix',
    badge: 'Included',
    desc: "Will your machine run the tools you need? Know before you commit.",
  },
];

function CheckBullet({ children }) {
  return (
    <li className="flex gap-2 items-start text-sm text-mint-text font-light leading-snug">
      <svg className="shrink-0 mt-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none">
        <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.7" />
      </svg>
      {children}
    </li>
  );
}

function InfoBox({ children }) {
  return (
    <div className="mt-3 flex gap-2.5 items-start text-xs leading-relaxed text-teal-light bg-[rgba(255,255,255,0.04)] border border-[rgba(93,202,165,0.18)] rounded-xl p-3">
      <svg className="shrink-0 mt-0.5" width="15" height="15" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="#5DCAA5" strokeWidth="1.6" />
        <path d="M12 11v5" stroke="#5DCAA5" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="12" cy="8" r="1" fill="#5DCAA5" />
      </svg>
      <span>{children}</span>
    </div>
  );
}

/* === Panel: Hardware Fingerprint === */
function PanelTheft() {
  const [run, setRun] = useState(1);

  return (
    <div className="p-5 sm:p-8 flex flex-col h-full overflow-y-auto">
      <div className="text-[11px] tracking-wider uppercase font-extrabold text-amber-light mb-2.5">Peace of Mind · Included with every scan</div>
      <div className="font-inter font-black text-[18px] sm:text-[22px] tracking-tight text-white leading-tight mb-3.5 max-w-[420px]">
        Your hardware, fingerprinted<br />on the first scan.
      </div>
      <div className="flex-1 flex items-center justify-center mb-4 min-h-0 overflow-visible">
        <div className="w-full max-w-[400px]">
          {/* Toggle */}
          <div className="flex gap-1.5 bg-[rgba(255,255,255,0.07)] border border-[rgba(255,255,255,0.1)] rounded-[30px] p-1.5 mb-4 w-fit">
            <button
              onClick={() => setRun(1)}
              className={`text-xs font-bold border-none bg-transparent px-4 py-2 rounded-2xl cursor-pointer transition-all font-sans ${run === 1 ? 'bg-white text-teal-deep' : 'text-teal-pale hover:text-white'}`}
              type="button"
            >Run 1 · baseline</button>
            <button
              onClick={() => setRun(2)}
              className={`text-xs font-bold border-none bg-transparent px-4 py-2 rounded-2xl cursor-pointer transition-all font-sans ${run === 2 ? 'bg-alert-red text-white' : 'text-teal-pale hover:text-white'}`}
              type="button"
            >Run 2 · after repair</button>
          </div>

          {/* Run 1 state */}
          {run === 1 && (
            <div className="flex items-center gap-4 rounded-xl p-5 bg-[rgba(29,158,117,0.28)] border-[1.5px] border-[rgba(93,202,165,0.65)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(29,158,117,0.26)] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" stroke="#5DCAA5" strokeWidth="1.7" strokeLinejoin="round" /><path d="M9 12l2 2 4-4" stroke="#5DCAA5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <div>
                <div className="text-[15px] font-black text-white mb-0.5">Fingerprint recorded</div>
                <div className="text-[13px] text-mint-text leading-tight">All 12 components verified & signed</div>
              </div>
            </div>
          )}

          {/* Run 2 state */}
          {run === 2 && (
            <div className="flex items-center gap-4 rounded-xl p-5 bg-[rgba(200,71,46,0.26)] border-[1.5px] border-[rgba(255,155,134,0.6)] shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <div className="w-11 h-11 rounded-xl bg-[rgba(200,71,46,0.28)] flex items-center justify-center shrink-0">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l9 16H3l9-16z" stroke="#FF9B86" strokeWidth="1.7" strokeLinejoin="round" /><path d="M12 10v3" stroke="#FF9B86" strokeWidth="2" strokeLinecap="round" /><circle cx="12" cy="16" r="1.1" fill="#FF9B86" /></svg>
              </div>
              <div>
                <div className="text-[15px] font-black text-white mb-0.5">Change detected: storage drive differs from scan 1</div>
                <div className="text-[13px] text-mint-text leading-tight">Flagged instantly — you decide if the change was expected</div>
              </div>
            </div>
          )}

          <div className="mt-3.5 text-center text-xs font-bold text-amber-light min-h-[20px]">
            {run === 1 ? (
              <span className="animate-[fadeIn_0.3s_ease-out]">▶ Flip to "Run 2" to see how re-verification keeps you informed.</span>
            ) : (
              <span className="animate-[fadeIn_0.3s_ease-out]">◀ Back to "Run 1" to compare against the recorded baseline.</span>
            )}
          </div>
        </div>
      </div>
      <ul className="list-none flex flex-col gap-2 mb-3">
        <CheckBullet>Re-scan after any service, sale or purchase — every component re-verified for complete peace of mind.</CheckBullet>
        <CheckBullet>Built-in assurance on both of your ₹299 scans — your configuration always stays transparent to you.</CheckBullet>
      </ul>
      <InfoBox>
        <b>How it works:</b> each component's unique serial ID is cryptographically hashed into a tamper-evident Asset Integrity Signature, so every re-scan quietly confirms your configuration is exactly as expected.
      </InfoBox>
    </div>
  );
}

/* === Panel: Proof-of-Fix Re-Scan === */
function PanelRescan() {
  return (
    <div className="p-5 sm:p-8 flex flex-col h-full overflow-y-auto">
      <div className="text-[11px] tracking-wider uppercase font-extrabold text-amber-light mb-2.5">Risk Reversal · Two scans in every ₹299</div>
      <div className="font-inter font-black text-[18px] sm:text-[22px] tracking-tight text-white leading-tight mb-3.5 max-w-[420px]">
        Don't just fix it.<br />Prove the fix worked.
      </div>
      <div className="flex-1 flex items-center justify-center mb-4 min-h-0 overflow-visible">
        <div className="flex items-center gap-4 justify-center w-full flex-wrap">
          <div className="text-center">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center font-serif font-bold text-3xl text-white mx-auto mb-2 shadow-[0_10px_26px_rgba(0,0,0,0.35)] bg-gradient-to-br from-bronze to-[#BA7517]">C</div>
            <div className="text-[11px] font-bold text-teal-pale tracking-wider uppercase">Scan 1 · diagnose</div>
          </div>
          <div className="flex flex-col items-center gap-1 text-amber-light text-xs font-bold whitespace-nowrap">
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#FAC775" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            fix at your pace
          </div>
          <div className="text-center">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center font-serif font-bold text-3xl text-white mx-auto mb-2 shadow-[0_10px_26px_rgba(0,0,0,0.35)] bg-gradient-to-br from-teal-deep to-teal-mid border border-[rgba(93,202,165,0.05)]">A</div>
            <div className="text-[11px] font-bold text-teal-pale tracking-wider uppercase">Scan 2 · confirm</div>
          </div>
        </div>
      </div>
      <ul className="list-none flex flex-col gap-2 mb-3">
        <CheckBullet>One credit to diagnose, one to confirm — compare both reports side by side.</CheckBullet>
        <CheckBullet>Second credit never expires — fix at your own pace, verify when you're ready.</CheckBullet>
      </ul>
      <InfoBox>
        <b>Why it matters:</b> a repair without a re-check is just a promise. Your second scan is the receipt — dated, graded, and verifiable.
      </InfoBox>
    </div>
  );
}

/* === Panel: A–F Certificate === */
function PanelCert() {
  return (
    <div className="p-5 sm:p-8 flex flex-col h-full overflow-y-auto">
      <div className="text-[11px] tracking-wider uppercase font-extrabold text-amber-light mb-2.5">The Output · A–F Standard</div>
      <div className="font-inter font-black text-[18px] sm:text-[22px] tracking-tight text-white leading-tight mb-3.5 max-w-[420px]">
        Raw diagnostics become one polished certificate.
      </div>
      <div className="flex-1 flex items-center justify-center mb-4 min-h-0 overflow-visible">
        <div className="bg-white rounded-xl p-5 w-full max-w-[300px] shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
          <div className="flex items-center gap-3.5 mb-4">
            <div className="w-[52px] h-[52px] rounded-xl bg-gradient-to-br from-teal-deep to-teal-mid flex items-center justify-center shrink-0">
              <span className="font-serif font-bold text-2xl text-white">A</span>
            </div>
            <div>
              <div className="text-xs font-black text-ink mb-0.5">Tekki Blaze Health Certificate</div>
              <div className="text-xs text-text-soft">DELL INSPIRON 15 · Scan #A29F</div>
            </div>
          </div>
          <div className="h-2 rounded-sm bg-off-white mb-2.5"></div>
          <div className="h-2 rounded-sm bg-off-white mb-2.5"></div>
          <div className="h-2 rounded-sm bg-off-white mb-2.5 w-[55%]"></div>
          <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-black text-teal-mid border border-dashed border-teal-base rounded-xl px-3 py-1.5">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M9 12l2 2 4-4" stroke="#0F6E56" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" /><circle cx="12" cy="12" r="9" stroke="#0F6E56" strokeWidth="1.6" /></svg>
            Verified by Tekki X · shareable PDF
          </div>
        </div>
      </div>
      <ul className="list-none flex flex-col gap-2 mb-3">
        <CheckBullet>One clear grade backed by 12 verified checks — no jargon, no guesswork.</CheckBullet>
        <CheckBullet>Anyone can verify it in 10 seconds at tekki-x.com/verify — no trust required.</CheckBullet>
      </ul>
    </div>
  );
}

/* === Panel: Zero-Footprint Privacy === */
function PanelPriv() {
  return (
    <div className="p-5 sm:p-8 flex flex-col h-full overflow-y-auto">
      <div className="text-[11px] tracking-wider uppercase font-extrabold text-amber-light mb-2.5">Privacy First · Zero cloud retention</div>
      <div className="font-inter font-black text-[18px] sm:text-[22px] tracking-tight text-white leading-tight mb-3.5 max-w-[420px]">
        Runs light.<br />Leaves nothing behind.
      </div>
      <div className="flex-1 flex items-center justify-center mb-4 min-h-0 overflow-visible">
        <div className="w-full max-w-[380px] flex flex-col gap-2.5">
          <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.07)] border border-[rgba(93,202,165,0.25)] rounded-xl p-3">
            <span className="w-9 h-9 rounded-lg bg-[rgba(29,158,117,0.22)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M5 10l7-7 7 7M5 14h14" stroke="#5DCAA5" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div>
              <div className="text-sm font-bold text-white mb-0.5">No installer</div>
              <div className="text-xs text-mint-text leading-tight">One lightweight file — run it, done.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.07)] border border-[rgba(93,202,165,0.25)] rounded-xl p-3">
            <span className="w-9 h-9 rounded-lg bg-[rgba(29,158,117,0.22)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" stroke="#5DCAA5" strokeWidth="1.7" strokeLinejoin="round" /></svg>
            </span>
            <div>
              <div className="text-sm font-bold text-white mb-0.5">No admin rights</div>
              <div className="text-xs text-mint-text leading-tight">Reads hardware status — never touches personal files.</div>
            </div>
          </div>
          <div className="flex items-center gap-3 bg-[rgba(255,255,255,0.07)] border border-[rgba(93,202,165,0.25)] rounded-xl p-3">
            <span className="w-9 h-9 rounded-lg bg-[rgba(29,158,117,0.22)] flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#5DCAA5" strokeWidth="1.9" strokeLinecap="round" /></svg>
            </span>
            <div>
              <div className="text-sm font-bold text-white mb-0.5">Zero cloud retention</div>
              <div className="text-xs text-mint-text leading-tight">Nothing stored permanently — your data never leaves your device.</div>
            </div>
          </div>
        </div>
      </div>
      <ul className="list-none flex flex-col gap-2 mb-3">
        <CheckBullet>No background service left running after the scan completes.</CheckBullet>
        <CheckBullet>No kernel-level / ring-0 access — no security toggles touched.</CheckBullet>
      </ul>
    </div>
  );
}

/* === Panel: Compatibility Matrix === */
function PanelFix() {
  return (
    <div className="p-5 sm:p-8 flex flex-col h-full overflow-y-auto">
      <div className="text-[11px] tracking-wider uppercase font-extrabold text-amber-light mb-2.5">Included · Know before you commit</div>
      <div className="font-inter font-black text-[18px] sm:text-[22px] tracking-tight text-white leading-tight mb-3.5 max-w-[420px]">
        Will your machine run the tools you need?
      </div>
      <div className="flex-1 flex items-center justify-center mb-4 min-h-0 overflow-visible">
        <div className="w-full max-w-[380px] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] rounded-[14px] p-[18px]">
          <div className="flex items-center gap-2 font-mono text-[11px] text-teal-light mb-3.5">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-brand"></div>
            Checking compatibility · DELL INSPIRON 15...
          </div>
          <div className="bg-off-white rounded-xl p-3 flex items-center gap-3 mb-2.5">
            <div className="w-9 h-9 rounded-lg bg-teal-ghost flex items-center justify-center shrink-0 text-teal-mid">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></svg>
            </div>
            <div>
              <div className="text-[13px] font-inter font-black text-ink mb-0.5">Adobe Premiere Pro</div>
              <div className="text-[11px] text-text-soft">GPU meets minimum · RAM sufficient</div>
            </div>
            <div className="ml-auto text-[10px] font-bold text-teal-mid bg-teal-ghost px-2 py-0.5 rounded-xl">Compatible</div>
          </div>
          <div className="bg-off-white rounded-xl p-3 flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-amber-ghost flex items-center justify-center shrink-0 text-amber-dark">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" /><line x1="12" y1="9" x2="12" y2="13" /><line x1="12" y1="17" x2="12.01" y2="17" /></svg>
            </div>
            <div>
              <div className="text-[13px] font-inter font-black text-ink mb-0.5">AutoCAD 2024</div>
              <div className="text-[11px] text-text-soft">GPU below recommended · will run slow</div>
            </div>
            <div className="ml-auto text-[10px] font-bold text-amber-dark bg-amber-ghost px-2 py-0.5 rounded-xl">Partial</div>
          </div>
        </div>
      </div>
      <ul className="list-none flex flex-col gap-2 mb-3">
        <CheckBullet>Know exactly which software your hardware can handle — before you buy or install.</CheckBullet>
        <CheckBullet>Clear upgrade recommendations when your specs fall short.</CheckBullet>
      </ul>
    </div>
  );
}

const panels = { theft: PanelTheft, rescan: PanelRescan, cert: PanelCert, priv: PanelPriv, fix: PanelFix };

export default function WhySection() {
  const [activeTab, setActiveTab] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const timerRef = useRef(null);
  const sectionRef = useRef(null);

  // Only auto-rotate when section is in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isHovering || !isInView) {
      clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % tabs.length);
    }, 5200);

    return () => clearInterval(timerRef.current);
  }, [isHovering, isInView, activeTab]);

  return (
    <section ref={sectionRef} id="why" className="py-[44px] bg-off-white border-y border-[rgba(29,158,117,0.14)]">
      <div className="wrap max-w-[1140px]">

        {/* Centered Header */}
        <div className="text-center max-w-[660px] mx-auto mb-7">
          <Reveal delay={0}>
            <div className="text-[11px] tracking-[2px] uppercase font-bold text-amber-dark mb-4 flex flex-col items-center">
              <span>Why Tekki Blaze</span>
              <div className="w-6 h-[2px] bg-amber-brand mt-2.5 rounded-full"></div>
            </div>
            <h2 className="font-inter font-black tracking-tight text-[30px] sm:text-[42px] leading-tight text-ink">
              Five reasons it's a <span className="text-amber-brand">standard</span>,<br />not just a scan.
            </h2>
            <p className="text-base text-text-mid mt-4 font-light leading-relaxed">
              Pick a capability on the left — or let it play — and watch exactly why it matters on the right.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.92fr_1.08fr] gap-6 items-stretch">

          {/* Left Column - Tabs */}
          <div
            className="flex flex-col gap-3"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {tabs.map((tab, idx) => {
              const isActive = activeTab === idx;
              return (
                <Reveal key={tab.id} delay={100 + (idx * 80)}>
                  <button
                    onMouseEnter={() => setActiveTab(idx)}
                    onClick={() => setActiveTab(idx)}
                    type="button"
                    className={`relative flex gap-3.5 text-left bg-white border rounded-2xl p-4 sm:p-5 cursor-pointer transition-all overflow-hidden w-full font-sans ${isActive
                      ? 'border-amber-brand shadow-[0_14px_36px_rgba(239,159,39,0.14)]'
                      : 'border-[rgba(29,158,117,0.14)] hover:border-[rgba(239,159,39,0.4)] hover:translate-x-0.5'
                      }`}
                  >
                    <span className={`font-inter font-black text-sm shrink-0 w-[22px] pt-0.5 ${isActive ? 'text-amber-dark' : 'text-text-soft'}`}>{tab.id}</span>
                    <span className="flex-1 min-w-0">
                      <span className="flex items-center justify-between gap-2.5 mb-1">
                        <span className="font-inter font-black text-base text-ink tracking-tight">{tab.title}</span>
                        <span className="text-[10px] font-extrabold tracking-wide uppercase px-2 py-0.5 rounded-2xl bg-teal-ghost text-teal-mid">{tab.badge}</span>
                      </span>
                      <span className="text-[13px] text-text-soft font-light leading-relaxed block">{tab.desc}</span>
                    </span>
                    {/* Progress bar */}
                    <span className="absolute left-0 bottom-0 h-[3px] w-full bg-transparent">
                      {isActive && !isHovering && isInView && (
                        <i className="block h-full w-0 bg-amber-brand animate-exp-fill"></i>
                      )}
                      {isActive && isHovering && (
                        <i className="block h-full w-full bg-amber-brand"></i>
                      )}
                    </span>
                  </button>
                </Reveal>
              );
            })}
          </div>

          {/* Right Column - Visuals */}
          <div
            className="w-full relative lg:min-h-[520px] bg-gradient-to-br from-forest to-forest-deep border border-[rgba(239,159,39,0.2)] rounded-2xl overflow-hidden"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            {tabs.map((tab, idx) => {
              const PanelComponent = panels[tab.usp];
              const isActive = activeTab === idx;
              return (
                <div
                  key={tab.usp}
                  className={`
                    lg:absolute lg:inset-0 lg:transition-all lg:duration-400
                    ${isActive
                      ? 'lg:opacity-100 lg:pointer-events-auto lg:translate-y-0'
                      : 'lg:opacity-0 lg:pointer-events-none lg:translate-y-3 hidden lg:block'
                    }
                  `}
                >
                  <PanelComponent />
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Banner */}
        <Reveal delay={200}>
          <div className="mt-8 bg-[#04251C] rounded-2xl p-6 md:px-8 md:py-6 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_12px_40px_rgba(4,52,44,0.12)] border border-[rgba(93,202,165,0.08)]">
            <div className="flex-1 max-w-[640px]">
              <p className="text-[14px] md:text-[15px] text-[#5DCAA5] leading-relaxed">
                <strong className="text-white font-bold">All five, included in one ₹299 purchase.</strong> No subscription, no upsell at the end — just complete certainty about the machine you rely on every day.
              </p>
            </div>
            <a
              href="#pricing"
              className="shrink-0 w-full md:w-auto inline-flex items-center justify-center gap-2 bg-[#EF9F27] text-[#0D1F1A] font-bold text-[14px] md:text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_8px_24px_rgba(239,159,39,0.28)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(239,159,39,0.4)]"
            >
              Scan my computer · ₹299
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M13 6l6 6-6 6" stroke="#0D1F1A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
