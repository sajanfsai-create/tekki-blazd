import React, { useEffect } from 'react';

export default function PartnersApp() {
  useEffect(() => {
    
    (function () {
      var tracks = [].slice.call(document.querySelectorAll('.track'));
      var rtName = document.getElementById('rtName');
      var gstOptTag = document.getElementById('gstOptTag');
      var gstHint = document.getElementById('gstHint');
      var gstLabel = document.getElementById('gstLabel');
      var current = { track: 'repair', gst: 'optional', name: 'Preferred Repair Network' };

      function setTrack(btn) {
        tracks.forEach(function (t) { t.classList.toggle('sel', t === btn); });
        current = { track: btn.dataset.track, gst: btn.dataset.gst, name: btn.dataset.name };
        rtName.innerHTML = current.name;
        if (current.gst === 'required') {
          gstLabel.innerHTML = 'GSTIN <span className="text-red-700">*</span>';
          gstHint.textContent = 'Required for this track — we generate GST partner invoices and your clients can claim input credit.';
        } else {
          gstLabel.innerHTML = 'GSTIN <span className="font-medium text-text-soft text-[11px]">(optional)</span>';
          gstHint.textContent = 'No GST? No problem — you can still receive leads and add it anytime later. If provided, client invoices include GST automatically.';
        }
        document.getElementById('register').scrollIntoView({ behavior: 'smooth' });
      }
      tracks.forEach(function (t) {
        t.addEventListener('click', function () { setTrack(t); });
        t.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setTrack(t); } });
      });

      var GST_RE = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z][0-9A-Z]Z[0-9A-Z]$/;
      document.getElementById('regForm').addEventListener('submit', function (e) {
        e.preventDefault();
        var ok = true;
        var mob = document.getElementById('f_mob');
        var em = document.getElementById('f_email');
        var gst = document.getElementById('f_gst');
        var mobErr = document.getElementById('mobErr'), emailErr = document.getElementById('emailErr'), gstErr = document.getElementById('gstErr');
        [mob, em, gst].forEach(function (i) { i.classList.remove('err'); });
        [mobErr, emailErr, gstErr].forEach(function (x) { if (x) x.style.display = 'none'; });
        if (!/^[0-9]{8,15}$/.test(mob.value.replace(/[^0-9]/g, ''))) { mob.classList.add('err'); if (mobErr) mobErr.style.display = 'block'; ok = false; }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em.value.trim())) { em.classList.add('err'); if (emailErr) emailErr.style.display = 'block'; ok = false; }
        var g = gst.value.trim().toUpperCase();
        if ((current.gst === 'required' && !GST_RE.test(g)) || (g && current.gst === 'optional' && !GST_RE.test(g))) { gst.classList.add('err'); if (gstErr) { gstErr.textContent = (current.gst === 'required' && !g) ? 'GSTIN is required for this track.' : 'Please enter a valid 15-character GSTIN.'; gstErr.style.display = 'block'; } ok = false; }
        if (!ok) { var first = document.querySelector('input.err'); if (first) first.focus(); return; }
        if (typeof window.tekkiPartnerRegister === 'function') {
          try {
            window.tekkiPartnerRegister({
              track: current.track,
              mobile: mob.value,
              email: em.value.trim(),
              name: document.getElementById('f_name').value.trim(),
              biz: document.getElementById('f_biz').value.trim(),
              gst: g,
              city: document.getElementById('f_city').value.trim()
            });
          } catch (err) { console.error(err); }
        }
        document.getElementById('regForm').style.display = 'none';
        document.getElementById('doneBox').style.display = 'block';
      });
    })();
  
  }, []);

  return (
    <div className="font-sans text-ink bg-canvas antialiased max-sm:pb-[74px]">
      

  {/*  NAV  */}
  <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-hairline">
    <div className="max-w-[1020px] mx-auto px-6 flex items-center justify-between h-[62px]">
      <a href="/" className="flex items-center gap-[11px]">
        <svg className="w-8 h-8 rounded-[9px]" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="6" width="88" height="88" rx="20" fill="#0D1F1A" />
          <path d="M32 32 L68 68 M68 32 L32 68" stroke="#E1F5EE" strokeWidth="9" strokeLinecap="round"
            opacity="0.35" />
          <circle cx="50" cy="50" r="9" fill="#FFBF00" />
        </svg>
        <span className="font-playfair font-bold text-[18px] text-ink">Tekki <span className="text-amber">X</span></span>
        <span
          className="text-[9px] tracking-[3px] font-bold text-teal-mid uppercase border-l border-hairline pl-[9px]">Partners</span>
      </a>
      <div className="flex items-center gap-[18px]">
        <a href="/"
          className="hidden sm:block text-[13px] font-semibold text-text-mid hover:text-amber-dark transition-colors">← Back
          to Tekki Blaze</a>
        <a href="#register"
          className="bg-amber text-ink py-2 font-bold text-[13px] px-[18px] py-2.3 rounded-[10px] shadow-[0_6px_18px_rgba(239,159,39,0.25)] hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(239,159,39,0.4)] transition-all">Become
          a Partner →</a>
      </div>
    </div>
  </nav>

  {/*  HERO  */}
  <header className="py-[52px] pb-9 text-center">
    <div className="max-w-[1020px] mx-auto px-6">
      <div
        className="inline-flex items-center gap-2 text-[11px] tracking-[2.5px] uppercase font-bold text-amber-dark bg-amber-soft border border-amber/30 rounded-[20px] px-[15px] py-1.5 mb-[18px]">
        Partner Program · Now onboarding</div>
      <h1 className="font-inter font-black tracking-tight text-[30px] sm:text-[42px] leading-[1.06]">Turn
        diagnostics<br />into <span className="text-teal-mid">income.</span></h1>
      <p className="text-[16px] text-text-mid font-light max-w-[560px] mx-auto mt-3.5">The <b>Tekki X</b> Partner Program
        puts <b>Tekki Blaze</b> — the 3-minute scan, grade &amp; certify platform — to work for your business, turning
        the industry's most repeated unbilled task into a certified, verifiable asset.</p>
      <div
        className="inline-flex items-center gap-2 font-inter font-extrabold text-[15px] text-teal-mid mt-4 tracking-tight">
        Zero joining fee · No subscription · Every capability, in every track</div>

      <div className="flex flex-wrap gap-3 justify-center mt-[22px]">
        <a href="#tracks"
          className="inline-flex items-center gap-[9px] bg-amber text-ink font-bold text-[15px] px-[26px] py-3.5 rounded-xl shadow-[0_8px_24px_rgba(239,159,39,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(239,159,39,0.42)] transition-all">
          Choose your partner track
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M12 5v14M6 13l6 6 6-6" stroke="#0C1C18" strokeWidth="2.3" strokeLinecap="round"
              strokeLinejoin="round" />
          </svg>
        </a>
        <a href="#shift"
          className="inline-flex items-center gap-[9px] font-semibold text-[15px] text-teal-deep px-6 py-[13px] rounded-xl border-1.5 border-hairline bg-white hover:border-amber hover:text-amber-dark transition-all">See
          what changes on day one</a>
      </div>

      {/*  HERO STATS  */}
      <div
        className="flex flex-wrap justify-center gap-0 mt-[30px] bg-white border border-hairline rounded-[14px] p-[6px_8px] shadow-[0_12px_40px_rgba(4,52,44,0.07)] max-w-[760px] mx-auto">
        <div className="p-[14px_28px] max-[720px]:p-[10px_16px] text-center">
          <div className="font-inter font-black text-2xl tracking-tight text-teal-mid">Multi-billion $</div>
          <div className="text-[11.5px] text-text-soft font-medium mt-0.5 max-w-[180px] inherit leading-sm">The global
            electronics repair economy</div>
        </div>
        <div className="w-[1px] bg-hairline my-3 min-[721px]:block hidden"></div>
        <div className="p-[14px_28px] max-[720px]:p-[10px_16px] text-center">
          <div className="font-inter font-black text-2xl tracking-tight text-amber-dark">~8% CAGR</div>
          <div className="text-[11.5px] text-text-soft font-medium mt-0.5 max-w-[180px] inherit leading-sm">Refurbished
            computer &amp; laptop market growth</div>
        </div>
        <div className="w-[1px] bg-hairline my-3 min-[721px]:block hidden"></div>
        <div className="p-[14px_28px] max-[720px]:p-[10px_16px] text-center">
          <div className="font-inter font-black text-2xl tracking-tight text-teal-mid">0 tools</div>
          <div className="text-[11.5px] text-text-soft font-medium mt-0.5 max-w-[180px] inherit leading-sm">that scan,
            certify &amp; verify a PC in one product — until now</div>
        </div>
      </div>
      <div className="text-center text-[10px] text-text-soft mt-2.5 font-light tracking-[0.3px]">Market data: published
        industry research on electronics repair &amp; refurbished computers (Market.us, GMInsights) · category scan of
        diagnostic tooling, 2026</div>
    </div>
  </header>

  {/*  PRODUCTIVITY SHIFT  */}
  <section className="py-1.5 pb-[46px]" id="shift">
    <div className="max-w-[1020px] mx-auto px-6">
      <div className="text-center font-inter font-extrabold text-[22px] tracking-tight mb-1.5">What changes on day one</div>
      <div className="text-center text-[13.5px] text-text-soft font-light mb-[22px] max-w-[620px] mx-auto">The same two
        suites, three different productivity stories — this is where the "income" in <i>turn diagnostics into income</i>
        actually comes from.</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        {/*  Card 1  */}
        <div
          className="bg-gradient-to-br from-[#063a30] to-[#04231d] border border-amber/22 rounded-2xl p-6 pb-5 text-white relative overflow-hidden flex flex-col after:content-[''] after:absolute after:-top-[90px] after:-right-[70px] after:w-[220px] after:h-[220px] after:rounded-full after:bg-[radial-gradient(circle,rgba(239,159,39,0.15)_0%,transparent_65%)]">
          <div className="relative z-10 text-[10.5px] tracking-[2px] uppercase font-extrabold text-teal-light mb-2.5">Repair
            shops &amp; technicians</div>
          <div className="relative z-10 font-inter font-extrabold text-[19px] tracking-tight leading-[1.25] mb-3 ">
            More
            machines serviced daily, <i className="text-[#f1c57a]">every job on record.</i></div>
          <ul className="relative z-10 list-none flex-1 flex flex-col gap-2 mb-4">
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">One 3-minute scan</b> replaces five separate diagnostic tools</span>
            </li>
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">More jobs per day</b> — investigation time becomes repair
                time</span>
            </li>
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Every repair certified</b> — a verifiable record, not a verbal
                assurance</span>
            </li>
          </ul>
          <div
            className="relative z-10 inline-flex items-center gap-2 bg-white/7 border border-teal-light/30 rounded-xl p-[9px_13px] text-xs font-bold text-white w-fit">
            <b className="text-amber-light font-inter font-black">40 min → 3 min</b> per diagnostic workup
          </div>
        </div>

        {/*  Card 2  */}
        <div
          className="bg-gradient-to-br from-[#063a30] to-[#04231d] border border-amber/22 rounded-2xl p-6 pb-5 text-white relative overflow-hidden flex flex-col after:content-[''] after:absolute after:-top-[90px] after:-right-[70px] after:w-[220px] after:h-[220px] after:rounded-full after:bg-[radial-gradient(circle,rgba(239,159,39,0.15)_0%,transparent_65%)]">
          <div className="relative z-10 text-[10.5px] tracking-[2px] uppercase font-extrabold text-teal-light mb-2.5">System
            Integrators &amp; MSPs</div>
          <div className="relative z-10 font-inter font-extrabold text-[19px] tracking-tight leading-[1.25] mb-3">
            From
            reactive tickets to <i className="text-[#f1c57a]">managed performance.</i></div>
          <ul className="relative z-10 list-none flex-1 flex flex-col gap-2 mb-4">
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Fleet-wide A–F grades</b> — every managed machine scored in
                minutes</span>
            </li>
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Downtime prevented</b> — SSD wear, thermals &amp; patch posture
                caught early</span>
            </li>
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Faster fleets</b> — standardised optimization across hundreds of
                machines</span>
            </li>
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Verifiable reports</b> — client reviews built on facts, not
                debates</span>
            </li>
          </ul>
          <div
            className="relative z-10 inline-flex items-center gap-2 bg-white/7 border border-teal-light/30 rounded-xl p-[9px_13px] text-xs font-bold text-white w-fit">
            <b className="text-amber-light font-inter font-black">Days → minutes</b> per fleet health audit
          </div>
        </div>

        {/*  Card 3  */}
        <div
          className="bg-gradient-to-br from-[#063a30] to-[#04231d] border border-amber/22 rounded-2xl p-6 pb-5 text-white relative overflow-hidden flex flex-col after:content-[''] after:absolute after:-top-[90px] after:-right-[70px] after:w-[220px] after:h-[220px] after:rounded-full after:bg-[radial-gradient(circle,rgba(239,159,39,0.15)_0%,transparent_65%)]">
          <div className="relative z-10 text-[10.5px] tracking-[2px] uppercase font-extrabold text-teal-light mb-2.5">
            Refurbishers &amp; rental fleets</div>
          <div className="relative z-10 font-inter font-extrabold text-[19px] tracking-tight leading-[1.25] mb-3 ">
            The
            right grade, <i className="text-[#f1c57a]">at the right price.</i></div>
          <ul className="relative z-10 list-none flex-1 flex flex-col gap-2 mb-4">
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Graded by measurement</b>, not visual inspection — every unit, every
                batch</span>
            </li>
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Evidence-based pricing</b> — an A sells as an A, nothing
                under-sold</span>
            </li>
            <li className="flex gap-2.5 items-start text-[12.5px] text-[#CFE9DD] font-light leading-snug">
              <svg className="shrink-0 mt-0.5" width="14" height="14" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#FAC775" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
                <circle cx="12" cy="12" r="9" stroke="#FAC775" strokeWidth="1.6" />
              </svg>
              <span><b className="text-white font-bold">Hardware Security Lock</b> — every component on record from dispatch
                to return, disputes settled instantly</span>
            </li>
          </ul>
          <div
            className="relative z-10 inline-flex items-center gap-2 bg-white/7 border border-teal-light/30 rounded-xl p-[9px_13px] text-xs font-bold text-white w-fit">
            <b className="text-amber-light font-inter font-black">Evidence-priced</b> inventory, unit by unit
          </div>
        </div>
      </div>
    </div>
  </section>

  {/*  PILLARS · PAIN -> SOLUTION  */}
  <section className="py-1.5 pb-[46px]">
    <div className="max-w-[1020px] mx-auto px-6">
      <div className="text-center font-inter font-extrabold text-[22px] tracking-tight mb-1.5">Scan it. Fix it. Certify it.
      </div>
      <div className="text-center text-[13.5px] text-text-soft font-light mb-[22px] max-w-[620px] mx-auto">Four outcomes,
        one platform — each solves a gap the industry has priced in for years.</div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {/*  Pillar 1  */}
        <div
          className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
          <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Diagnostics</div>
          <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">The 3-minute deep scan</div>
          <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">Diagnosis is the most
            repeated task in any service business — and the least paid.</div>
          <p className="text-[13px] text-text-mid font-light leading-relaxed">Replace 30–40 minutes of manual, multi-tool
            investigation with one comprehensive pass — performance, stability, security posture and peripherals
            together. Find the fault faster, start the billable work sooner.</p>

          {/*  Mock 1  */}
          <div
            className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]"
            aria-hidden="true">
            <div
              className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
              <span>tekki blaze · deep scan</span><span>scan complete · 2:54</span>
            </div>
            <div className="flex items-center gap-[11px] mb-1">
              <div
                className="w-[38px] h-[38px] rounded-box rounded-10px flex items-center justify-center font-playfair font-bold text-2xl text-white shrink-0 bg-gradient-to-br from-[#C98314] to-[#8a5a13]">
                C</div>
              <div className="flex-1">
                <div className="text-[11.5px] font-bold text-white">System Health · 51/100</div>
                <div className="text-[10px] text-[#9FE1CB]">12/12 components checked · 2 need attention</div>
                <div className="h-[6px] rounded-md bg-white/12 overflow-hidden mt-1.3"><i
                    className="block h-full rounded-md bg-amber" style="width: 51%;"></i></div>
              </div>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-b border-white/7 text-[#CFE9DD] text-[11px] leading-sm mt-2">
              <span>Freeze diagnostics · last 60s before hang captured</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-red-900/28 text-[#FF9B86]">KERNEL
                HANG</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Security posture · disk encryption</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/22 text-amber-light">ACTION
                REQUIRED</span>
            </div>
          </div>
        </div>

        {/*  Pillar 2  */}
        <div
          className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
          <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Productivity</div>
          <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">Workflow optimization</div>
          <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">Investigation time is the
            silent capacity killer.</div>
          <p className="text-[13px] text-text-mid font-light leading-relaxed">Standardised cleanup and optimization routines
            turn investigation time into repair time — more machines serviced every day, documented consistently,
            without adding headcount.</p>

          {/*  Mock 2  */}
          <div
            className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]"
            aria-hidden="true">
            <div
              className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
              <span>tekki blaze · cleanup manifest</span><span>one click</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-b border-white/7 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Orphaned registry keys (214)</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">CLEARED
                ✓</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-b border-white/7 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Startup bloat · 11 items</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">OPTIMIZED
                ✓</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Update backlog · OS &amp; drivers</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/22 text-amber-light">QUEUED</span>
            </div>
          </div>
        </div>

        {/*  Pillar 3  */}
        <div
          className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
          <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Performance</div>
          <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">Provable performance grading
          </div>
          <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">Condition debates cost
            time, price and goodwill.</div>
          <p className="text-[13px] text-text-mid font-light leading-relaxed">Issue independently verifiable,
            machine-generated A–F certificates built on measured performance telemetry — not visual guesswork. An A
            sells as an A; a fleet grade is a fact, not an opinion.</p>

          {/*  Mock 3  */}
          <div
            className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]"
            aria-hidden="true">
            <div
              className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
              <span>tekki blaze · performance telemetry</span><span>live</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-b border-white/7 text-[#CFE9DD] text-[11px] leading-sm">
              <span>CPU thermals under load</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/22 text-amber-light">72.1°C
                · THROTTLING</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-b border-white/7 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Software fit · RAM headroom</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/22 text-amber-light">MINIMUM
                ONLY</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Certificate issued · Scan #B41K</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">B
                · VERIFIABLE</span>
            </div>
          </div>
        </div>

        {/*  Pillar 4  */}
        <div
          className="bg-white border border-hairline border-t-3 border-t-amber rounded-[14px] p-6 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
          <div className="text-[10.5px] tracking-[2px] uppercase font-extrabold text-amber-dark mb-1.5">Hardware Security
          </div>
          <div className="font-inter font-extrabold text-[19px] tracking-tight text-ink mb-2">Tamper-evident lock</div>
          <div className="font-playfair italic text-[14px] text-text-mid mb-2.5 leading-relaxed">What left your hands and
            what came back are two different questions.</div>
          <p className="text-[13px] text-text-mid font-light leading-relaxed">Component signatures are recorded at handover
            and re-verified on every scan — questions about swapped or missing RAM and SSDs are settled instantly, by
            record.</p>

          {/*  Mock 4  */}
          <div
            className="mt-3.5 bg-gradient-to-br from-[#063a30] to-[#04231d] border border-teal-light/20 rounded-xl p-[13px_15px]"
            aria-hidden="true">
            <div
              className="flex justify-between items-center mb-2.5 font-mono text-[10px] text-teal-light tracking-[0.5px]">
              <span>tekki blaze · hardware security lock</span><span>tamper-evident</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-b border-white/7 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Baseline signature · SSD + RAM + GPU hashed</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">LOCKED
                🔒</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-b border-white/7 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Re-scan after service · signatures compared</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-[rgba(29,158,117,0.25)] text-[#9FE1CB]">MATCH
                ✓</span>
            </div>
            <div
              className="flex justify-between items-center gap-2 py-1.5 border-none pb-0 text-[#CFE9DD] text-[11px] leading-sm">
              <span>Storage differs from record · owner informed</span><span
                className="text-[8.5px] font-extrabold tracking-[0.4px] p-[2px_8px] rounded-[10px] whitespace-nowrap shrink-0 bg-amber/22 text-amber-light">CHANGE
                NOTICED</span>
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

  {/*  VOICES · SOCIAL PROOF  */}
  <section className="py-1.5 pb-[46px]">
    <div className="max-w-[1020px] mx-auto px-6">
      <div className="text-center font-inter font-extrabold text-[22px] tracking-tight mb-1.5">Tested where it matters — on
        real workloads</div>
      <div className="text-center text-[13.5px] text-text-soft font-light mb-[22px] max-w-[620px] mx-auto">Voices from our
        pilot validation program, underway ahead of public launch.</div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
        <div
          className="bg-white border border-hairline rounded-[14px] p-[22px_22px_18px] flex flex-col hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
          <div className="font-inter font-black text-2xl tracking-tight text-amber-dark mb-0.5">40 min → 3 min</div>
          <div className="text-[10.5px] tracking-[1.2px] uppercase font-extrabold text-teal-mid mb-3">Diagnostic workup
          </div>
          <div className="font-playfair italic text-[14px] text-ink leading-[1.55] flex-1 mb-3">"The full workup used to be
            five tools and most of an hour. Now the scan finishes before the customer finishes their coffee — and I hand
            them a report instead of an opinion."</div>
          <div className="text-[11.5px] text-text-soft font-semibold pt-2.5 border-t border-hairline">Owner, independent
            repair workshop · pilot partner</div>
        </div>
        <div
          className="bg-white border border-hairline rounded-[14px] p-[22px_22px_18px] flex flex-col hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
          <div className="font-inter font-black text-2xl tracking-tight text-amber-dark mb-0.5">Hours → minutes</div>
          <div className="text-[10.5px] tracking-[1.2px] uppercase font-extrabold text-teal-mid mb-3">Stability triage</div>
          <div className="font-playfair italic text-[14px] text-ink leading-[1.55] flex-1 mb-3">"Triaging freezes meant
            digging through event logs for hours. Capturing the sixty seconds before a kernel hang changed that —
            stability tickets close the same day now."</div>
          <div className="text-[11.5px] text-text-soft font-semibold pt-2.5 border-t border-hairline">Operations lead,
            managed service provider · pilot partner</div>
        </div>
        <div
          className="bg-white border border-hairline rounded-[14px] p-[22px_22px_18px] flex flex-col hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] transition-all">
          <div className="font-inter font-black text-2xl tracking-tight text-amber-dark mb-0.5">Every unit</div>
          <div className="text-[10.5px] tracking-[1.2px] uppercase font-extrabold text-teal-mid mb-3">Graded by evidence
          </div>
          <div className="font-playfair italic text-[14px] text-ink leading-[1.55] flex-1 mb-3">"Incoming off-lease batches
            get scanned, scored and certified as they land. Our QA is automated, and buyers get a grade they can verify
            themselves instead of taking our word."</div>
          <div className="text-[11.5px] text-text-soft font-semibold pt-2.5 border-t border-hairline">QA head, refurbishment
            centre · pilot partner</div>
        </div>
      </div>
      <div className="text-center text-[10.5px] text-text-soft font-light mt-3 tracking-[0.3px]">Pilot program figures —
        being independently validated ahead of launch.</div>
    </div>
  </section>

  {/*  STEP 1 · CHOOSE TRACK  */}
  <section className="py-2.5 pb-10" id="tracks">
    <div className="max-w-[1020px] mx-auto px-6">
      <div
        className="flex items-center gap-2.5 font-inter font-extrabold text-[13px] tracking-wider uppercase text-teal-mid mb-[18px]">
        <span
          className="w-6 h-6 rounded-full bg-teal-mid text-white inline-flex items-center justify-center text-[13px]">1</span>
        Choose your partner track
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="trackGrid">
        {/*  Track 1  */}
        <div role="button" tabindex="0"
          className="track sel relative text-left bg-white border-1.5 border-hairline rounded-2xl p-6 pb-5.5 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] hover:border-amber/45 transition-all flex flex-col select-none"
          data-track="repair" data-gst="optional" data-name="Preferred Repair Network">
          <span
            className="pick absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-hairline flex items-center justify-center transition-colors"></span>
          <div className="w-[42px] h-[42px] rounded-xl bg-teal-ghost flex items-center justify-center mb-3.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M14.5 6.5a4 4 0 00-5.6 4.9L4 16.3V20h3.7l4.9-4.9a4 4 0 004.9-5.6l-2.6 2.6-2.4-.6-.6-2.4 2.6-2.6z"
                stroke="#0F6E56" strokeWidth="1.7" strokeLinejoin="round" />
            </svg>
          </div>
          <div className="font-inter font-extrabold text-[10.5px] tracking-widest text-amber-dark uppercase mb-1.5">Track 01
          </div>
          <h3 className="font-inter font-extrabold text-[17px] text-ink mb-1.5 leading-[1.25]">Preferred Repair Network</h3>
          <div className="text-[12.5px] text-teal-mid font-semibold mb-2.5">For repair shops &amp; independent technicians
          </div>
          <div className="text-[13px] text-text-mid font-light leading-relaxed mb-3">A professional-grade diagnostic and
            certification platform for your workshop — every job diagnosed faster, documented properly, and closed with
            a certificate anyone can verify.</div>
          <ul className="list-none mb-3.5 flex-1">
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Do more business — faster diagnostics mean more machines serviced every day</li>
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Build credentials — every repair closes with a verifiable, tamper-evident certificate</li>
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Earn lasting trust — the Tekki-verified badge signals professional, transparent standards</li>
          </ul>
          <span
            className="text-[11px] font-bold rounded-[9px] p-1.5 px-2.5 inline-flex items-center gap-1.5 w-fit bg-teal-ghost text-teal-mid">GST
            optional — register with just mobile &amp; email</span>
        </div>

        {/*  Track 2  */}
        <div role="button" tabindex="0"
          className="track relative text-left bg-white border-1.5 border-hairline rounded-2xl p-6 pb-5.5 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] hover:border-amber/45 transition-all flex flex-col select-none"
          data-track="simsp" data-gst="required" data-name="System Integrators &amp; MSPs">
          <span
            className="pick absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-hairline flex items-center justify-center transition-colors"></span>
          <div className="w-[42px] h-[42px] rounded-xl bg-teal-ghost flex items-center justify-center mb-3.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <rect x="3" y="4" width="18" height="12" rx="2" stroke="#0F6E56" strokeWidth="1.7" />
              <path d="M8 20h8M12 16v4" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round" />
            </svg>
          </div>
          <div className="font-inter font-extrabold text-[10.5px] tracking-widest text-amber-dark uppercase mb-1.5">Track 02
          </div>
          <h3 className="font-inter font-extrabold text-[17px] text-ink mb-1.5 leading-[1.25]">System Integrators &amp; MSPs
          </h3>
          <div className="text-[12.5px] text-teal-mid font-semibold mb-2.5">For IT service firms managing client fleets
          </div>
          <div className="text-[13px] text-text-mid font-light leading-relaxed mb-3">License scans in bulk to audit client
            machines — every device graded, verified and reported from one dashboard.</div>
          <ul className="list-none mb-3.5 flex-1">
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Bulk scan licensing at partner pricing</li>
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Branded A–F reports you present to your clients</li>
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Fleet audits &amp; SLA health checks in minutes, not days</li>
          </ul>
          <span
            className="text-[11px] font-bold rounded-[9px] p-1.5 px-2.5 inline-flex items-center gap-1.5 w-fit bg-amber-soft text-amber-dark">GST
            required — for partner invoicing &amp; input credit</span>
        </div>

        {/*  Track 3  */}
        <div role="button" tabindex="0"
          className="track relative text-left bg-white border-1.5 border-hairline rounded-2xl p-6 pb-5.5 cursor-pointer hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(4,52,44,0.07)] hover:border-amber/45 transition-all flex flex-col select-none"
          data-track="circuit" data-gst="required" data-name="Circuit Partners">
          <span
            className="pick absolute top-4 right-4 w-6 h-6 rounded-full border-2 border-hairline flex items-center justify-center transition-colors"></span>
          <div className="w-[42px] h-[42px] rounded-xl bg-teal-ghost flex items-center justify-center mb-3.5">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M4 12a8 8 0 0114-5M20 12a8 8 0 01-14 5" stroke="#0F6E56" strokeWidth="1.7"
                strokeLinecap="round" />
              <path d="M18 3v4h-4M6 21v-4h4" stroke="#0F6E56" strokeWidth="1.7" strokeLinecap="round"
                strokeLinejoin="round" />
            </svg>
          </div>
          <div className="font-inter font-extrabold text-[10.5px] tracking-widest text-amber-dark uppercase mb-1.5">Track 03
          </div>
          <h3 className="font-inter font-extrabold text-[17px] text-ink mb-1.5 leading-[1.25]">Circuit Partners</h3>
          <div className="text-[12.5px] text-teal-mid font-semibold mb-2.5">For refurbishers, rental fleets &amp; resellers
          </div>
          <div className="text-[13px] text-text-mid font-light leading-relaxed mb-3">Certify every device before it ships,
            and re-verify on return — provable condition at both ends of the transaction.</div>
          <ul className="list-none mb-3.5 flex-1">
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> A–F certificates that raise refurb resale value</li>
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Hardware lock protects rental inventory end-to-end</li>
            <li className="flex gap-2 items-start text-[12.5px] text-text-mid py-1 font-light leading-relaxed"><svg
                className="shrink-0 mt-1" width="13" height="13" viewBox="0 0 24 24" fill="none">
                <path d="M9 12l2 2 4-4" stroke="#EF9F27" strokeWidth="2.4" strokeLinecap="round"
                  strokeLinejoin="round" />
              </svg> Dispute-free returns — condition is on record, not on memory</li>
          </ul>
          <span
            className="text-[11px] font-bold rounded-[9px] p-1.5 px-2.5 inline-flex items-center gap-1.5 w-fit bg-amber-soft text-amber-dark">GST
            required — for partner invoicing &amp; input credit</span>
        </div>
      </div>
    </div>
  </section>

  {/*  STEP 2 · REGISTER  */}
  <section className="py-2 pb-[70px]" id="register">
    <div className="max-w-[1020px] mx-auto px-6">
      <div
        className="flex items-center gap-2.5 font-inter font-extrabold text-[13px] tracking-wider uppercase text-teal-mid mb-[18px] max-w-[640px] mx-auto">
        <span
          className="w-6 h-6 rounded-full bg-teal-mid text-white inline-flex items-center justify-center text-[13px]">2</span>
        Register — under a minute
      </div>

      <div
        className="max-w-[640px] mx-auto bg-white border border-hairline rounded-[18px] shadow-[0_12px_40px_rgba(4,52,44,0.07)] p-[26px_20px] sm:p-[34px_36px]">
        <form id="regForm" novalidate>
          <div
            className="flex items-center justify-between gap-3 bg-canvas border border-hairline rounded-xl p-[12px_16px] mb-6 flex-wrap">
            <span className="font-inter font-extrabold text-sm text-ink">Registering as: <span id="rtName"
                className="text-teal-mid">Preferred Repair Network</span></span>
            <button type="button"
              className="bg-none border-none cursor-pointer text-xs font-bold text-amber-dark underline underline-offset-2"
              onclick="document.getElementById('trackGrid').scrollIntoView({behavior:'smooth'})">Change track ↑</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="mb-3.5">
              <label htmlFor="f_mob" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Mobile number <span
                  className="text-red-700">*</span></label>
              <input
                className="w-full text-sm p-[11px_13px] border border-hairline rounded-xl bg-canvas text-ink outline-none transition-all focus:border-teal-mid focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,110,86,0.1)]"
                id="f_mob" type="tel" inputmode="numeric" placeholder="Mobile number" autocomplete="tel"
                aria-describedby="mobErr" />
              <div className="text-[11.5px] text-text-soft mt-1 font-light">We'll WhatsApp your partner activation link.
              </div>
              <div className="text-[11.5px] mt-1 hidden text-red-700 font-bold" id="mobErr" role="alert">Please enter a
                valid mobile number (8–15 digits).</div>
            </div>
            <div className="mb-3.5">
              <label htmlFor="f_email" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Email <span
                  className="text-red-700">*</span></label>
              <input
                className="w-full text-sm p-[11px_13px] border border-hairline rounded-xl bg-canvas text-ink outline-none transition-all focus:border-teal-mid focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,110,86,0.1)]"
                id="f_email" type="email" placeholder="you@business.com" autocomplete="email"
                aria-describedby="emailErr" />
              <div className="text-[11.5px] mt-1 hidden text-red-700 font-bold" id="emailErr" role="alert">Please enter a
                valid email address.</div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="mb-3.5">
              <label htmlFor="f_name" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Your name <span
                  className="font-medium text-text-soft text-[11px]">(optional)</span></label>
              <input
                className="w-full text-sm p-[11px_13px] border border-hairline rounded-xl bg-canvas text-ink outline-none transition-all focus:border-teal-mid focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,110,86,0.1)]"
                id="f_name" type="text" placeholder="Full name" autocomplete="name" />
            </div>
            <div className="mb-3.5">
              <label htmlFor="f_biz" className="block text-[12.5px] font-bold text-text-mid mb-1.5">Business name <span
                  className="font-medium text-text-soft text-[11px]">(optional)</span></label>
              <input
                className="w-full text-sm p-[11px_13px] border border-hairline rounded-xl bg-canvas text-ink outline-none transition-all focus:border-teal-mid focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,110,86,0.1)]"
                id="f_biz" type="text" placeholder="Shop / company name" autocomplete="organization" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            <div className="mb-3.5">
              <label htmlFor="f_gst" id="gstLabel" className="block text-[12.5px] font-bold text-text-mid mb-1.5">GSTIN <span
                  className="font-medium text-text-soft text-[11px]" id="gstOptTag">(optional)</span></label>
              <input
                className="w-full text-sm p-[11px_13px] border border-hairline rounded-xl bg-canvas text-ink outline-none transition-all uppercase focus:border-teal-mid focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,110,86,0.1)]"
                id="f_gst" type="text" placeholder="e.g. 29ABCDE1234F1Z5" maxlength="15" />
              <div className="text-[11.5px] mt-1 hidden text-red-700 font-bold" id="gstErr" role="alert">Please enter a
                valid 15-character GSTIN.</div>
              <div className="text-[11.5px] text-text-soft mt-1 font-light" id="gstHint">No GST? No problem — you can still
                receive leads and add it anytime later.</div>
            </div>
            <div className="mb-3.5">
              <label htmlFor="f_city" className="block text-[12.5px] font-bold text-text-mid mb-1.5">City <span
                  className="font-medium text-text-soft text-[11px]">(optional)</span></label>
              <input
                className="w-full text-sm p-[11px_13px] border border-hairline rounded-xl bg-canvas text-ink outline-none transition-all focus:border-teal-mid focus:bg-white focus:shadow-[0_0_0_3px_rgba(15,110,86,0.1)]"
                id="f_city" type="text" placeholder="e.g. Bengaluru" autocomplete="address-level2" />
              <div className="text-[11.5px] text-text-soft mt-1 font-light">Helps us route nearby leads to you sooner.</div>
            </div>
          </div>

          <button type="submit"
            className="inline-flex items-center justify-center gap-2.5 bg-amber text-ink font-bold text-[15px] p-[14px_26px] rounded-xl shadow-[0_8px_24px_rgba(239,159,39,0.28)] hover:-translate-y-0.5 hover:shadow-[0_14px_32px_rgba(239,159,39,0.42)] transition-all cursor-pointer border-none w-full mt-2">Register
            as a Partner →</button>
          <div className="text-center text-xs text-text-soft mt-3.5 font-light">No fees to join · Only mobile &amp; email
            are mandatory · Your details are never sold<br />By registering you agree to our <a href="/terms"
              className="text-teal-mid font-semibold">Terms of Service</a> and <a href="/privacy"
              className="text-teal-mid font-semibold">Privacy Policy</a>.</div>
        </form>

        <div className="hidden text-center py-[18px] pb-1.5" id="doneBox">
          <div
            className="w-14 h-14 rounded-full bg-teal-ghost text-teal-mid inline-flex items-center justify-center text-[26px] font-bold mb-3.5">
            ✓</div>
          <h3 className="font-inter font-black text-2xl mb-2">Welcome to the network!</h3>
          <p id="doneMsg" className="text-sm text-text-mid font-light max-w-[400px] mx-auto">Your registration is in. We'll
            WhatsApp your activation link and partner console access shortly.</p>
        </div>
      </div>
    </div>
  </section>

  {/*  FOOTER  */}
  <footer className="border-t border-hairline py-5.5 text-center text-xs text-text-soft">
    <div className="max-w-[1020px] mx-auto px-6">© 2026 Tekki-X · <a href="/"
        className="text-teal-mid font-semibold">tekki-x.com</a> · <a href="mailto:partners@tekki-x.com"
        className="text-teal-mid font-semibold">partners@tekki-x.com</a> &nbsp;·&nbsp; <a href="/privacy">Privacy Policy</a>
      · <a href="/terms">Terms of Service</a> · <a href="/data-protection">Data Protection</a></div>
  </footer>

  {/*  Functional Track Styling Rule Extensions For Track Highlighting  */}
  <style type="text/css">
    .track.sel {
      border-color: #EF9F27 !important;
      box-shadow: 0 14px 36px rgba(239, 159, 39, 0.16) !important;
    }

    .track.sel .pick {
      background: #EF9F27 !important;
      border-color: #EF9F27 !important;
    }

    .track.sel .pick::after {
      content: '✓';
      font-size: 13px;
      font-weight: 800;
      color: #0C1C18;
    }

    .inp.err {
      border-color: #B23A24 !important;
    }
  </style>

  

    </div>
  );
}
