import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

/* ── tiny SVG helpers ── */
const CheckCircle = ({ color = '#FAC775' }) => (
  <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
    <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="9" stroke={color} strokeWidth="1.6" />
  </svg>
);

const CheckSmall = ({ color = '#EF9F27' }) => (
  <svg className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
    <path d="M9 12l2 2 4-4" stroke={color} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

/* ── data ── */
const TRACKS = [
  {
    id: 'repair', gst: 'optional', name: 'Preferred Repair Network',
    trackNum: '01', subtitle: 'For repair shops & independent technicians',
    desc: 'A professional-grade diagnostic and certification platform for your workshop — every job diagnosed faster, documented properly, and closed with a certificate anyone can verify.',
    bullets: [
      'Do more business — faster diagnostics mean more machines serviced every day',
      'Build credentials — every repair closes with a verifiable, tamper-evident certificate',
      'Earn lasting trust — the Tekki-verified badge signals professional, transparent standards',
    ],
    gstNote: 'GST optional — register with just mobile & email',
    gstBadgeCls: 'bg-teal-ghost text-teal-mid',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14.5 6.5a4 4 0 00-5.6 4.9L4 16.3V20h3.7l4.9-4.9a4 4 0 004.9-5.6l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z" stroke="#0F6E56" strokeWidth="1.7" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    id: 'simsp', gst: 'required', name: 'System Integrators & MSPs',
    trackNum: '02', subtitle: 'For IT service firms managing client fleets',
    desc: 'License scans in bulk to audit client machines — every device graded, verified and reported from one dashboard.',
    bullets: [
      'Bulk scan licensing at partner pricing',
      'Branded A–F reports you present to your clients',
      'Fleet audits & SLA health checks in minutes, not days',
    ],
    gstNote: 'GST required — for partner invoicing & input credit',
    gstBadgeCls: 'bg-amber-soft text-amber-dark',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="4" width="18" height="12" rx="2" stroke="#0F6E56" strokeWidth="1.7" />
        <path d="M8 20h8M12 16v4" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 'circuit', gst: 'required', name: 'Circuit Partners',
    trackNum: '03', subtitle: 'For refurbishers, rental fleets & resellers',
    desc: 'Certify every device before it ships, and re-verify on return — provable condition at both ends of the transaction.',
    bullets: [
      'A–F certificates that raise refurb resale value',
      'Hardware lock protects rental inventory end-to-end',
      'Dispute-free returns — condition is on record, not on memory',
    ],
    gstNote: 'GST required — for partner invoicing & input credit',
    gstBadgeCls: 'bg-amber-soft text-amber-dark',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 12a8 8 0 0114-5M20 12a8 8 0 01-14 5" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round" />
        <path d="M18 3v4h-4M6 21v-4h4" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const GST_RE = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]$/;

/* ── input field style ── */
const inputCls = 'w-full text-sm p-[11px_13px] border border-hairline rounded-xl bg-canvas text-ink outline-none transition-all focus:border-teal-mid focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,110,86,0.1)]';

/* ───────────────────────────────────── COMPONENT ───────────────────────────────────── */

export default function TekkiBlazePartners() {
  const [selectedTrack, setSelectedTrack] = useState('repair');
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  /* form refs */
  const mobRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const bizRef = useRef(null);
  const gstRef = useRef(null);
  const cityRef = useRef(null);
  const trackGridRef = useRef(null);
  const registerRef = useRef(null);

  const current = TRACKS.find((t) => t.id === selectedTrack) || TRACKS[0];

  /* set page title */
  useEffect(() => { document.title = 'Become a Partner — Tekki Blaze'; }, []);

  /* ── track selection ── */
  function handleTrackSelect(id) {
    setSelectedTrack(id);
    registerRef.current?.scrollIntoView({ behavior: 'smooth' });
  }

  /* ── form submit ── */
  function handleSubmit(e) {
    e.preventDefault();
    const errs = {};
    const mob = mobRef.current.value;
    const email = emailRef.current.value.trim();
    const gst = gstRef.current.value.trim().toUpperCase();

    if (!/^[0-9]{8,15}$/.test(mob.replace(/[^0-9]/g, ''))) errs.mob = 'Please enter a valid mobile number (8–15 digits).';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = 'Please enter a valid email address.';
    if (current.gst === 'required' && !GST_RE.test(gst)) errs.gst = !gst ? 'GSTIN is required for this track.' : 'Please enter a valid 15-character GSTIN.';
    else if (gst && current.gst === 'optional' && !GST_RE.test(gst)) errs.gst = 'Please enter a valid 15-character GSTIN.';

    setErrors(errs);
    if (Object.keys(errs).length > 0) return;

    if (typeof window.tekkiPartnerRegister === 'function') {
      try {
        window.tekkiPartnerRegister({
          track: current.id,
          mobile: mob,
          email,
          name: nameRef.current.value.trim(),
          biz: bizRef.current.value.trim(),
          gst,
          city: cityRef.current.value.trim(),
        });
      } catch (err) { console.error(err); }
    }
    setSubmitted(true);
  }

  /* ───────── JSX ───────── */
  return (
    <div className="bg-canvas text-ink leading-relaxed font-dm antialiased">

      {/* ── NAV ── */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-hairline">
        <div className="max-w-[1020px] mx-auto px-6 flex items-center justify-between h-[62px]">
          <Link to="/" className="flex items-center gap-[11px]">
            <svg className="w-8 h-8 rounded-[9px]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="88" height="88" rx="20" fill="#0D1F1A" />
              <path d="M32 32 L68 68 M68 32 L32 68" stroke="#E1F5EE" strokeWidth="9" strokeLinecap="round" opacity="0.35" />
              <circle cx="50" cy="50" r="9" fill="#FFBF00" />
            </svg>
            <span className="font-playfair font-bold text-[18px] text-ink">Tekki <span className="text-amber">X</span></span>
            <span className="text-[9px] tracking-[3px] font-bold text-teal-mid uppercase border-l border-hairline pl-[9px]">Partners</span>
          </Link>
          <div className="flex items-center gap-[18px]">
            <Link to="/" className="hidden sm:block text-[13px] font-semibold text-text-mid hover:text-amber-dark transition-colors">← Back to Tekki Blaze</Link>
            <a href="#register" className="bg-amber text-ink py-2 font-bold text-[13px] px-[18px] rounded-[10px] shadow-[0_6px_18px_rgba(239,159,39,0.25)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(239,159,39,0.4)] transition-all">Become a Partner →</a>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <header className="py-[52px] pb-9 text-center">
        <div className="max-w-[1020px] mx-auto px-6">
          <div className="inline-flex items-center gap-2 text-[11px] tracking-[2.5px] uppercase font-bold text-amber-dark bg-amber-soft border border-amber/30 rounded-[20px] px-[15px] py-1.5 mb-[18px]">
            Partner Program · Now onboarding
          </div>
          <h1 className="font-inter font-black tracking-tight text-[30px] sm:text-[42px] leading-[1.06]">
            Turn diagnostics<br />into <span className="text-teal-mid">income.</span>
          </h1>
          <p className="text-[16px] text-text-mid font-light max-w-[560px] mx-auto mt-3.5">
            The <b>Tekki X</b> Partner Program puts <b>Tekki Blaze</b> — the 3-minute scan, grade &amp; certify platform — to work for your business, turning the industry's most repeated unbilled task into a certified, verifiable asset.
          </p>
          <div className="inline-flex items-center gap-2 font-inter font-extrabold text-[15px] text-teal-mid mt-4 tracking-tight">
            Zero joining fee · No subscription · Every capability, in every track
          </div>

          <div className="flex flex-wrap gap-3 justify-center mt-[22px]">
            <a href="#tracks" className="inline-flex items-center gap-[9px] bg-amber text-ink font-bold text-[15px] px-[26px] py-3.5 rounded-xl shadow-[0_8px_24px_rgba(239,159,39,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(239,159,39,0.42)] transition-all">
              Choose your partner track
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M6 13l6 6 6-6" stroke="#0C1C18" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </a>
            <a href="#shift" className="inline-flex items-center gap-[9px] font-semibold text-[15px] text-teal-deep px-6 py-[13px] rounded-xl border-[1.5px] border-hairline bg-white hover:border-amber hover:text-amber-dark transition-all">
              See what changes on day one
            </a>
          </div>

          {/* HERO STATS */}
          <div className="flex flex-wrap justify-center gap-0 mt-[30px] bg-white border border-hairline rounded-[14px] p-[6px_8px] shadow-[0_12px_40px_rgba(4,52,44,0.07)] max-w-[760px] mx-auto">
            <div className="p-[14px_28px] max-[720px]:p-[10px_16px] text-center">
              <div className="font-inter font-black text-2xl tracking-tight text-teal-mid">Multi-billion $</div>
              <div className="text-[11.5px] text-text-soft font-medium mt-0.5 max-w-[180px] leading-tight">The global electronics repair economy</div>
            </div>
            <div className="w-[1px] bg-hairline my-3 min-[721px]:block hidden" />
            <div className="p-[14px_28px] max-[720px]:p-[10px_16px] text-center">
              <div className="font-inter font-black text-2xl tracking-tight text-amber-dark">~8% CAGR</div>
              <div className="text-[11.5px] text-text-soft font-medium mt-0.5 max-w-[180px] leading-tight">Refurbished computer &amp; laptop market growth</div>
            </div>
            <div className="w-[1px] bg-hairline my-3 min-[721px]:block hidden" />
            <div className="p-[14px_28px] max-[720px]:p-[10px_16px] text-center">
              <div className="font-inter font-black text-2xl tracking-tight text-teal-mid">0 tools</div>
              <div className="text-[11.5px] text-text-soft font-medium mt-0.5 max-w-[180px] leading-tight">that scan, certify &amp; verify a PC in one product — until now</div>
            </div>
          </div>
          <div className="text-center text-[10px] text-text-soft mt-2.5 font-light tracking-[0.3px]">Market data: published industry research on electronics repair &amp; refurbished computers (Market.us, GMInsights) · category scan of diagnostic tooling, 2026</div>
        </div>
      </header>

      {/* ── PRODUCTIVITY SHIFT ── */}
      <section className="py-1.5 pb-[46px]" id="shift">
        <div className="max-w-[1020px] mx-auto px-6">
          <div className="text-center font-inter font-extrabold text-[22px] tracking-tight mb-1.5">What changes on day one</div>
          <div className="text-center text-[13.5px] text-text-soft font-light mb-[22px] max-w-[620px] mx-auto">The same two suites, three different productivity stories — this is where the "income" in <i>turn diagnostics into income</i> actually comes from.</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Shift Card 1 */}
            <div className="bg-gradient-to-br from-[#063a30] to-[#04231d] border border-amber/[0.22] rounded-2xl p-6 pb-5 text-white relative overflow-hidden flex flex-col">
              <div className="absolute -top-[90px] -right-[70px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(239,159,39,0.15)_0%,transparent_65%)]" />
              <div className="relative z-10 text-[10.5px] tracking-[2px] uppercase font-extrabold text-teal-light mb-2.5">Repair shops &amp; technicians</div>
              <div className="relative z-10 font-inter font-extrabold text-[19px] tracking-tight leading-[1.25] mb-3">More machines serviced daily, <i className="text-[#f1c57a]">every job on record.</i></div>
              <ul className="relative z-10 list-none flex-1 flex flex-col gap-2 mb-4">
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">One 3-minute scan</b> replaces five separate diagnostic tools</span></li>
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">More jobs per day</b> — investigation time becomes repair time</span></li>
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Every repair certified</b> — a verifiable record, not a verbal assurance</span></li>
              </ul>
              <div className="relative z-10 inline-flex items-center gap-2 bg-white/[0.07] border border-teal-light/30 rounded-xl p-[9px_13px] text-xs font-bold text-white w-fit">
                <b className="text-amber-light font-inter font-black">40 min → 3 min</b> per diagnostic workup
              </div>
            </div>

            {/* Shift Card 2 */}
            <div className="bg-gradient-to-br from-[#063a30] to-[#04231d] border border-amber/[0.22] rounded-2xl p-6 pb-5 text-white relative overflow-hidden flex flex-col">
              <div className="absolute -top-[90px] -right-[70px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(239,159,39,0.15)_0%,transparent_65%)]" />
              <div className="relative z-10 text-[10.5px] tracking-[2px] uppercase font-extrabold text-teal-light mb-2.5">System Integrators &amp; MSPs</div>
              <div className="relative z-10 font-inter font-extrabold text-[19px] tracking-tight leading-[1.25] mb-3">From reactive tickets to <i className="text-[#f1c57a]">managed performance.</i></div>
              <ul className="relative z-10 list-none flex-1 flex flex-col gap-2 mb-4">
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Fleet-wide A–F grades</b> — every managed machine scored in minutes</span></li>
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Downtime prevented</b> — SSD wear, thermals &amp; patch posture caught early</span></li>
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Faster fleets</b> — standardised optimization across hundreds of machines</span></li>
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Verifiable reports</b> — client reviews built on facts, not debates</span></li>
              </ul>
              <div className="relative z-10 inline-flex items-center gap-2 bg-white/[0.07] border border-teal-light/30 rounded-xl p-[9px_13px] text-xs font-bold text-white w-fit">
                <b className="text-amber-light font-inter font-black">Days → minutes</b> per fleet health audit
              </div>
            </div>

            {/* Shift Card 3 */}
            <div className="bg-gradient-to-br from-[#063a30] to-[#04231d] border border-amber/[0.22] rounded-2xl p-6 pb-5 text-white relative overflow-hidden flex flex-col">
              <div className="absolute -top-[90px] -right-[70px] w-[220px] h-[220px] rounded-full bg-[radial-gradient(circle,rgba(239,159,39,0.15)_0%,transparent_65%)]" />
              <div className="relative z-10 text-[10.5px] tracking-[2px] uppercase font-extrabold text-teal-light mb-2.5">Refurbishers &amp; rental fleets</div>
              <div className="relative z-10 font-inter font-extrabold text-[19px] tracking-tight leading-[1.25] mb-3">The right grade, <i className="text-[#f1c57a]">at the right price.</i></div>
              <ul className="relative z-10 list-none flex-1 flex flex-col gap-2 mb-4">
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Graded by measurement</b>, not visual inspection — every unit, every batch</span></li>
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Evidence-based pricing</b> — an A sells as an A, nothing under-sold</span></li>
                <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug"><CheckCircle /><span><b className="text-white font-bold">Hardware Security Lock</b> — every component on record from dispatch to return, disputes settled instantly</span></li>
              </ul>
              <div className="relative z-10 inline-flex items-center gap-2 bg-white/[0.07] border border-teal-light/30 rounded-xl p-[9px_13px] text-xs font-bold text-white w-fit">
                <b className="text-amber-light font-inter font-black">Evidence-priced</b> inventory, unit by unit
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PILLARS · PAIN → SOLUTION ── */}
      <section className="py-1.5 pb-[46px]">
        <div className="max-w-[1020px] mx-auto px-6">
          <div className="text-center font-inter font-extrabold text-[22px] tracking-tight mb-1.5">Scan it. Fix it. Certify it.</div>
          <div className="text-center text-[13.5px] text-text-soft font-light mb-[22px] max-w-[620px] mx-auto">Four outcomes, one platform — each solves a gap the industry has priced in for years.</div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            {/* Pillar 1 */}
            <div className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
              <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Diagnostics</div>
              <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">The 3-minute deep scan</div>
              <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">Diagnosis is the most repeated task in any service business — and the least paid.</div>
              <p className="text-[13px] text-text-mid font-light leading-relaxed">Replace 30–40 minutes of manual, multi-tool investigation with one comprehensive pass — performance, stability, security posture and peripherals together. Find the fault faster, start the billable work sooner.</p>

              {/* Mock 1 */}
              <div className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]" aria-hidden="true">
                <div className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
                  <span>tekki blaze · deep scan</span><span>scan complete · 2:54</span>
                </div>
                <div className="flex items-center gap-[11px] mb-1">
                  <div className="w-[38px] h-[38px] rounded-[10px] flex items-center justify-center font-playfair font-bold text-2xl text-white shrink-0 bg-gradient-to-br from-[#C98314] to-[#8a5a13]">C</div>
                  <div className="flex-1">
                    <div className="text-[11.5px] font-bold text-white">System Health · 51/100</div>
                    <div className="text-[10px] text-[#9FE1CB]">12/12 components checked · 2 need attention</div>
                    <div className="h-[6px] rounded-md bg-white/[0.12] overflow-hidden mt-1"><i className="block h-full rounded-md bg-amber" style={{ width: '51%' }} /></div>
                  </div>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-b border-white/[0.07] text-[#CFE9DD] text-[11px] leading-tight mt-2">
                  <span>Freeze diagnostics · last 60s before hang captured</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-red-900/[0.28] text-[#FF9B86]">KERNEL HANG</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Security posture · disk encryption</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/[0.22] text-amber-light">ACTION REQUIRED</span>
                </div>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
              <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Productivity</div>
              <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">Workflow optimization</div>
              <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">Investigation time is the silent capacity killer.</div>
              <p className="text-[13px] text-text-mid font-light leading-relaxed">Standardised cleanup and optimization routines turn investigation time into repair time — more machines serviced every day, documented consistently, without adding headcount.</p>

              {/* Mock 2 */}
              <div className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]" aria-hidden="true">
                <div className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
                  <span>tekki blaze · cleanup manifest</span><span>one click</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-b border-white/[0.07] text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Orphaned registry keys (214)</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">CLEARED ✓</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-b border-white/[0.07] text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Startup bloat · 11 items</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">OPTIMIZED ✓</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Update backlog · OS &amp; drivers</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/[0.22] text-amber-light">QUEUED</span>
                </div>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
              <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Performance</div>
              <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">Provable performance grading</div>
              <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">Condition debates cost time, price and goodwill.</div>
              <p className="text-[13px] text-text-mid font-light leading-relaxed">Issue independently verifiable, machine-generated A–F certificates built on measured performance telemetry — not visual guesswork. An A sells as an A; a fleet grade is a fact, not an opinion.</p>

              {/* Mock 3 */}
              <div className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]" aria-hidden="true">
                <div className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
                  <span>tekki blaze · performance telemetry</span><span>live</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-b border-white/[0.07] text-[#CFE9DD] text-[11px] leading-tight">
                  <span>CPU thermals under load</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/[0.22] text-amber-light">72.1°C · THROTTLING</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-b border-white/[0.07] text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Software fit · RAM headroom</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/[0.22] text-amber-light">MINIMUM ONLY</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Certificate issued · Scan #B41K</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">B · VERIFIABLE</span>
                </div>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
              <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Hardware Security</div>
              <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">Tamper-evident lock</div>
              <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">What left your hands and what came back are two different questions.</div>
              <p className="text-[13px] text-text-mid font-light leading-relaxed">Component signatures are recorded at handover and re-verified on every scan — questions about swapped or missing RAM and SSDs are settled instantly, by record.</p>

              {/* Mock 4 */}
              <div className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]" aria-hidden="true">
                <div className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
                  <span>tekki blaze · hardware security lock</span><span>tamper-evident</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-b border-white/[0.07] text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Baseline signature · SSD + RAM + GPU hashed</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">LOCKED 🔒</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-b border-white/[0.07] text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Re-scan after service · signatures compared</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">MATCH ✓</span>
                </div>
                <div className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-tight">
                  <span>Storage differs from record · owner informed</span>
                  <span className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/[0.22] text-amber-light">CHANGE NOTICED</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 bg-[#f4f7f6] p-[18px_24px] rounded-xl text-left text-[14px] leading-relaxed">
            <span className="font-inter font-bold text-ink mr-1">Every outcome. Every partner. No tiers.</span>
            <span className="font-light text-text-mid">The complete Tekki Blaze platform ships with every track — from deep scan to cleanup, optimization, certificate &amp; hardware lock.</span>
          </div>
        </div>
      </section>

      {/* ── VOICES · SOCIAL PROOF ── */}
      <section className="py-1.5 pb-[46px]">
        <div className="max-w-[1020px] mx-auto px-6">
          <div className="text-center font-inter font-extrabold text-[22px] tracking-tight mb-1.5">Tested where it matters — on real workloads</div>
          <div className="text-center text-[13.5px] text-text-soft font-light mb-[22px] max-w-[620px] mx-auto">Voices from our pilot validation program, underway ahead of public launch.</div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {[
              { stat: '40 min → 3 min', label: 'Diagnostic workup', quote: '"The full workup used to be five tools and most of an hour. Now the scan finishes before the customer finishes their coffee — and I hand them a report instead of an opinion."', who: 'Owner, independent repair workshop · pilot partner' },
              { stat: 'Hours → minutes', label: 'Stability triage', quote: '"Triaging freezes meant digging through event logs for hours. Capturing the sixty seconds before a kernel hang changed that — stability tickets close the same day now."', who: 'Operations lead, managed service provider · pilot partner' },
              { stat: 'Every unit', label: 'Graded by evidence', quote: '"Incoming off-lease batches get scanned, scored and certified as they land. Our QA is automated, and buyers get a grade they can verify themselves instead of taking our word."', who: 'QA head, refurbishment centre · pilot partner' },
            ].map((v, i) => (
              <div key={i} className="bg-white border border-hairline rounded-[14px] p-[22px_22px_18px] flex flex-col hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
                <div className="font-inter font-black text-2xl tracking-tight text-amber-dark mb-0.5">{v.stat}</div>
                <div className="text-[10.5px] tracking-[1.2px] uppercase font-extrabold text-teal-mid mb-3">{v.label}</div>
                <div className="font-playfair italic text-[14px] text-ink leading-[1.55] flex-1 mb-3">{v.quote}</div>
                <div className="text-[11.5px] text-text-soft font-semibold pt-2.5 border-t border-hairline">{v.who}</div>
              </div>
            ))}
          </div>
          <div className="text-center text-[10.5px] text-text-soft font-light mt-3 tracking-[0.3px]">Pilot program figures — being independently validated ahead of launch.</div>
        </div>
      </section>

      {/* ── STEP 1 · CHOOSE TRACK ── */}
      <section className="py-2.5 pb-10" id="tracks" ref={trackGridRef}>
        <div className="max-w-[1020px] mx-auto px-6">
          <div className="flex items-center gap-2.5 font-inter font-extrabold text-[13px] tracking-wider uppercase text-teal-mid mb-[18px]">
            <span className="w-6 h-6 rounded-full bg-teal-mid text-white inline-flex items-center justify-center text-[13px]">1</span>
            Choose your partner track
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {TRACKS.map((t) => {
              const sel = selectedTrack === t.id;
              return (
                <div
                  key={t.id}
                  role="button"
                  tabIndex={0}
                  onClick={() => handleTrackSelect(t.id)}
                  onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); handleTrackSelect(t.id); } }}
                  className={`relative text-left bg-white border-[1.5px] rounded-2xl p-6 pb-[22px] cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] hover:border-amber/45 transition-all flex flex-col select-none ${sel ? 'border-amber shadow-[0_14px_36px_rgba(239,159,39,0.16)]' : 'border-hairline'}`}
                >
                  <span className={`absolute top-4 right-4 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-colors ${sel ? 'bg-amber border-amber' : 'border-hairline'}`}>
                    {sel && <span className="text-[13px] font-extrabold text-ink">✓</span>}
                  </span>
                  <div className="w-[42px] h-[42px] rounded-xl bg-teal-ghost flex items-center justify-center mb-3.5">{t.icon}</div>
                  <div className="font-inter font-extrabold text-[10.5px] tracking-widest text-amber-dark uppercase mb-1.5">Track {t.trackNum}</div>
                  <h3 className="font-inter font-extrabold text-[17px] text-ink mb-1.5 leading-[1.25]">{t.name}</h3>
                  <div className="text-[12.5px] text-teal-mid font-semibold mb-2.5">{t.subtitle}</div>
                  <div className="text-[13px] text-text-mid font-light leading-relaxed mb-3">{t.desc}</div>
                  <ul className="list-none mb-3.5 flex-1">
                    {t.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><CheckSmall />{b}</li>
                    ))}
                  </ul>
                  <span className={`text-[11px] font-bold rounded-[9px] p-1.5 px-2.5 inline-flex items-center gap-1.5 w-fit ${t.gstBadgeCls}`}>{t.gstNote}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STEP 2 · REGISTER ── */}
      <section className="py-2 pb-[70px]" id="register" ref={registerRef}>
        <div className="max-w-[1020px] mx-auto px-6">
          <div className="flex items-center gap-2.5 font-inter font-extrabold text-[13px] tracking-wider uppercase text-teal-mid mb-[18px] max-w-[640px] mx-auto">
            <span className="w-6 h-6 rounded-full bg-teal-mid text-white inline-flex items-center justify-center text-[13px]">2</span>
            Register — under a minute
          </div>

          <div className="max-w-[640px] mx-auto bg-white border border-hairline rounded-[18px] shadow-[0_12px_40px_rgba(4,52,44,0.07)] p-[26px_20px] sm:p-[34px_36px]">
            {!submitted ? (
              <form onSubmit={handleSubmit} noValidate>
                <div className="flex items-center justify-between gap-3 bg-canvas border border-hairline rounded-xl p-[12px_16px] mb-6 flex-wrap">
                  <span className="font-inter font-extrabold text-sm text-ink">Registering as: <span className="text-teal-mid">{current.name}</span></span>
                  <button type="button" className="bg-transparent border-none cursor-pointer text-xs font-bold text-amber-dark underline underline-offset-2" onClick={() => trackGridRef.current?.scrollIntoView({ behavior: 'smooth' })}>Change track ↑</button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="mb-3.5">
                    <label htmlFor="f_mob" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Mobile number <span className="text-red-700">*</span></label>
                    <input className={`${inputCls} ${errors.mob ? '!border-[#B23A24]' : ''}`} ref={mobRef} id="f_mob" type="tel" inputMode="numeric" placeholder="Mobile number" autoComplete="tel" />
                    <div className="text-[11.5px] text-text-soft mt-1 font-light">We'll WhatsApp your partner activation link.</div>
                    {errors.mob && <div className="text-[11.5px] mt-1 text-red-700 font-bold" role="alert">{errors.mob}</div>}
                  </div>
                  <div className="mb-3.5">
                    <label htmlFor="f_email" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Email <span className="text-red-700">*</span></label>
                    <input className={`${inputCls} ${errors.email ? '!border-[#B23A24]' : ''}`} ref={emailRef} id="f_email" type="email" placeholder="you@business.com" autoComplete="email" />
                    {errors.email && <div className="text-[11.5px] mt-1 text-red-700 font-bold" role="alert">{errors.email}</div>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="mb-3.5">
                    <label htmlFor="f_name" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Your name <span className="font-medium text-text-soft text-[11px]">(optional)</span></label>
                    <input className={inputCls} ref={nameRef} id="f_name" type="text" placeholder="Full name" autoComplete="name" />
                  </div>
                  <div className="mb-3.5">
                    <label htmlFor="f_biz" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Business name <span className="font-medium text-text-soft text-[11px]">(optional)</span></label>
                    <input className={inputCls} ref={bizRef} id="f_biz" type="text" placeholder="Shop / company name" autoComplete="organization" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="mb-3.5">
                    <label htmlFor="f_gst" className="block text-[12.5px] font-bold text-text-mid mb-1.5">
                      {current.gst === 'required'
                        ? <>GSTIN <span className="text-red-700">*</span></>
                        : <>GSTIN <span className="font-medium text-text-soft text-[11px]">(optional)</span></>
                      }
                    </label>
                    <input className={`${inputCls} uppercase ${errors.gst ? '!border-[#B23A24]' : ''}`} ref={gstRef} id="f_gst" type="text" placeholder="e.g. 29ABCDE1234F1Z5" maxLength={15} />
                    {errors.gst && <div className="text-[11.5px] mt-1 text-red-700 font-bold" role="alert">{errors.gst}</div>}
                    <div className="text-[11.5px] text-text-soft mt-1 font-light">
                      {current.gst === 'required'
                        ? 'Required for this track — we generate GST partner invoices and your clients can claim input credit.'
                        : 'No GST? No problem — you can still receive leads and add it anytime later. If provided, client invoices include GST automatically.'
                      }
                    </div>
                  </div>
                  <div className="mb-3.5">
                    <label htmlFor="f_city" className="block text-[12.5px] font-bold text-text-mid mb-1.5">City <span className="font-medium text-text-soft text-[11px]">(optional)</span></label>
                    <input className={inputCls} ref={cityRef} id="f_city" type="text" placeholder="e.g. Bengaluru" autoComplete="address-level2" />
                    <div className="text-[11.5px] text-text-soft mt-1 font-light">Helps us route nearby leads to you sooner.</div>
                  </div>
                </div>

                <button type="submit" className="inline-flex items-center justify-center gap-2.5 bg-amber text-ink font-bold text-[15px] p-[14px_26px] rounded-xl shadow-[0_8px_24px_rgba(239,159,39,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(239,159,39,0.42)] transition-all cursor-pointer border-none w-full mt-2">Register as a Partner →</button>
                <div className="text-center text-xs text-text-soft mt-3.5 font-light">
                  No fees to join · Only mobile &amp; email are mandatory · Your details are never sold<br />
                  By registering you agree to our <Link to="/terms" className="text-teal-mid font-semibold">Terms of Service</Link> and <Link to="/privacy" className="text-teal-mid font-semibold">Privacy Policy</Link>.
                </div>
              </form>
            ) : (
              <div className="text-center py-[18px] pb-1.5">
                <div className="w-14 h-14 rounded-full bg-teal-ghost text-teal-mid inline-flex items-center justify-center text-[26px] font-bold mb-3.5">✓</div>
                <h3 className="font-inter font-black text-2xl mb-2">Welcome to the network!</h3>
                <p className="text-sm text-text-mid font-light max-w-[400px] mx-auto">Your registration is in. We'll WhatsApp your activation link and partner console access shortly.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-hairline py-5.5 text-center text-xs text-text-soft">
        <div className="max-w-[1020px] mx-auto px-6">
          © 2026 Tekki-X · <Link to="/" className="text-teal-mid font-semibold">tekki-x.com</Link> · <a href="mailto:partners@tekki-x.com" className="text-teal-mid font-semibold">partners@tekki-x.com</a> &nbsp;·&nbsp; <Link to="/privacy">Privacy Policy</Link> · <Link to="/terms">Terms of Service</Link> · <Link to="/data-protection">Data Protection</Link>
        </div>
      </footer>
    </div>
  );
}
