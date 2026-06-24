export default function Help() {
  return (
    <div className="bg-white text-emerald-950 antialiased leading-relaxed font-sans">
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-950/10">
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-18">
          <a href="/" className="flex items-center gap-3 no-underline">
            <svg className="w-9 h-9 rounded-2xl flex-shrink-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <rect x="6" y="6" width="88" height="88" rx="20" fill="#0F6E56" />
              <path d="M32 32 L68 68 M68 32 L32 68" stroke="#E1F5EE" strokeWidth="9" strokeLinecap="round" opacity="0.35" />
              <circle cx="50" cy="50" r="9" fill="#FFBF00" />
            </svg>
            <span className="font-serif font-bold text-xl text-emerald-950 leading-none">Tekki <span className="text-amber-500">X</span></span>
            <span className="text-[10px] tracking-[3px] font-bold text-emerald-700 uppercase border-l border-emerald-950/10 pl-2.5">Blaze</span>
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a href="/privacy" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Privacy</a>
              <a href="/terms" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Terms</a>
              <a href="/refund" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Refund</a>
              <a href="/help" className="text-sm font-bold text-emerald-700 hover:underline">Help &amp; FAQ</a>
            </div>
            <a href="/#get" className="bg-amber-500 hover:bg-amber-400 transition-colors text-emerald-950 font-bold text-xs px-4.5 py-2.5 rounded-lg no-underline">Get Tekki Blaze</a>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-b from-emerald-50/50 to-white border-b border-emerald-950/10 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs text-emerald-700/60 mb-3.5 tracking-wide"><a href="/" className="text-emerald-700 hover:underline">Home</a> › Help &amp; FAQ</div>
          <h1 className="font-black tracking-tight text-4xl text-emerald-950 mb-2.5 font-inter">Help &amp; FAQ</h1>
          <p className="text-base text-emerald-800 max-w-2xl">Everything you need to know about installing, running and getting the most from Tekki Blaze — the 3‑minute Windows PC health scan.</p>

          <div className="mt-4.5 flex flex-wrap gap-2.5">
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Last updated: 24 June 2026</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Product: Tekki Blaze</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Support: Mon–Fri, IST</span>
          </div>

          {/* <div className="bg-amber-50 border border-dashed border-amber-500 rounded-xl p-4.5 mt-6 text-sm text-amber-900/80">
            ✎ <b className="text-amber-700 font-bold">Before publishing:</b> the company name (TEKKI) and Bengaluru address are filled in. Still to replace are the highlighted <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">[placeholders]</span> — the <b>Grievance Officer's name</b>, a <b>contact phone number</b>, and the <b>support / privacy / grievance / sales email addresses</b> (set these up on your domain). GSTIN is intentionally not shown here (it isn't required on the website; it must appear on your tax invoices). This India-aligned content should be reviewed and signed off by a qualified Indian lawyer before going live. Remove this note before publishing.
          </div> */}
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 md:pb-24">
        <main className="text-[15px] text-emerald-900/90 leading-relaxed">
          <p className="text-base text-emerald-800/90 mb-6">Quick answers about Tekki Blaze — the 3‑minute Windows PC health scan. Can't find what you need? Email <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">support@tekki-x.com</span>.</p>

          <div className="font-inter font-extrabold text-xs tracking-wider uppercase text-emerald-600 mt-9 mb-3.5">Getting started</div>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              What exactly is Tekki Blaze?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Tekki Blaze is a Windows PC health-scan app. You download one lightweight file, run a single scan (about 3 minutes), and get a clear A–F hardware health report covering your CPU, RAM, storage, battery, graphics, thermals, drivers and more — in plain language, with a shareable PDF.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Which devices and operating systems are supported?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Tekki Blaze currently supports <strong>Windows 10 and Windows 11</strong>, on both <strong>laptops and desktops</strong>. Support for <strong>macOS and Linux is coming soon</strong>. If you run the app on an unsupported OS, please don't purchase a scan for that device yet.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              How long does a scan take?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>About <strong>3 minutes</strong> on a typical machine. Older or heavily loaded PCs may take a little longer.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Do I need to be technical to use it?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Not at all. The report is written for everyone — a clear grade, what each finding means, and what to do next. Technicians get the same report with the detail they need.</p>
            </div>
          </details>

          <div className="font-inter font-extrabold text-xs tracking-wider uppercase text-emerald-600 mt-9 mb-3.5">Safety & privacy</div>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Is the download safe? My antivirus is cautious about .exe files.
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Yes. The Tekki Blaze app is <strong>code-signed</strong> and submitted to Microsoft and major antivirus vendors for whitelisting. Always download it only from <strong>tekki-x.com</strong>. If your antivirus shows a first-run prompt for a newly released version, you can safely allow the signed Tekki‑X application.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Does Tekki Blaze read my personal files?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p><strong>No.</strong> It reads only hardware and system information needed for the health report. It never opens, uploads or touches your documents, photos, emails or passwords. See our <a href="/privacy" className="text-emerald-700 hover:underline">Privacy Policy</a>.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              What data do you store?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Only what's needed: your account details (name, email, mobile), your scan reports, and transaction records for invoicing. Card/UPI details are handled by our payment partner, not stored by us.</p>
            </div>
          </details>

          <div className="font-inter font-extrabold text-xs tracking-wider uppercase text-emerald-600 mt-9 mb-3.5">The scan & report</div>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              What does the scan actually check?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>12 areas, including: component health (CPU, GPU, RAM, disk, network), driver and device-manager issues, heat &amp; throttling, peripherals (camera, mic, speakers, USB, Wi‑Fi), smart OS/BIOS update advice, registry health, and hardware-error intelligence from Windows event logs — all summarised into an A–F grade.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              What is the A–F grade?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>It's a simple, at-a-glance health standard: <strong>A</strong> = healthy and reliable, down to <strong>F</strong> = a component genuinely needs attention. Each grade comes with per-component sub-scores and plain-English reasons.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Can it detect physical damage?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>No software can. Tekki Blaze reports software/OS-level health. It cannot see cracked boards, liquid damage or bent connectors, and some details on BIOS-locked or older devices are shown as “unable to verify” rather than assumed healthy. It's a powerful first diagnosis, not a replacement for physical inspection.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Can I share or keep my report?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Yes. Every report is a clean PDF you can download and share (including on WhatsApp). It's handy for selling a device, getting a second opinion, or handing to a technician.</p>
            </div>
          </details>

          <div className="font-inter font-extrabold text-xs tracking-wider uppercase text-emerald-600 mt-9 mb-3.5">Pricing & payment</div>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              How much does it cost?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p><strong>₹199 per scan</strong> (plus GST), with no subscription. Value packs are available — <strong>3-pack ₹499</strong> and <strong>5-pack ₹749</strong> — and bulk pricing for repair shops and businesses.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              What payment methods do you accept?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>UPI, debit/credit cards and net-banking through a secure payment gateway. You'll receive a GST-compliant invoice for every purchase.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Do you offer bulk pricing for repair shops or businesses?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Yes. Technicians, repair shops, IT teams and resellers can access discounted bulk scan packs. Contact <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">sales@tekki-x.com</span> to set this up.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              Can I get a refund?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Yes, in genuine cases such as duplicate charges, payment deducted without access, or a scan that couldn't run on a supported device. Once a scan has successfully produced a report, the service is considered delivered. Full details are in our <a href="/refund" className="text-emerald-700 hover:underline">Refund Policy</a>.</p>
            </div>
          </details>

          <div className="font-inter font-extrabold text-xs tracking-wider uppercase text-emerald-600 mt-9 mb-3.5">Troubleshooting</div>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              The app won't open or the scan won't finish — what do I do?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Make sure you're on Windows 10/11, close other heavy apps, and run the latest version downloaded from tekki-x.com. If it still fails, email <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">support@tekki-x.com</span> with your order ID — if we can't get a supported device to scan, you're eligible for a refund or free replacement scan.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              I paid but didn't get my download / scan credit.
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Check your registered email (including spam). If it's still missing, contact <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">support@tekki-x.com</span> with your payment reference and we'll restore access or refund you.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              How do I uninstall Tekki Blaze?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>It's a lightweight app — remove it anytime via <em>Windows Settings → Apps → Installed apps → Tekki Blaze → Uninstall</em>. Uninstalling does not delete reports already saved to your account.</p>
            </div>
          </details>

          <div className="font-inter font-extrabold text-xs tracking-wider uppercase text-emerald-600 mt-9 mb-3.5">Account & support</div>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              How do I contact support?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Email <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">support@tekki-x.com</span> (Mon–Fri, 10:00–18:00 IST). For formal grievances, our Grievance Officer details are in the <a href="/privacy#p14" className="text-emerald-700 hover:underline">Privacy Policy</a>.</p>
            </div>
          </details>

          <details className="group border border-emerald-950/10 rounded-xl mb-3 bg-white overflow-hidden open:shadow-sm transition-all duration-200">
            <summary className="list-none cursor-pointer p-4.5 font-semibold text-[15.5px] text-emerald-950 flex items-center justify-between gap-3.5 [&::-webkit-details-marker]:hidden">
              How do I delete my account or data?
              <span className="w-5.5 h-5.5 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center text-base flex-shrink-0 transition-transform duration-200 group-open:rotate-45 group-open:bg-amber-500 group-open:text-emerald-950">+</span>
            </summary>
            <div className="px-4.5 pb-5 text-[14.5px] text-emerald-900/80">
              <p>Email <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">privacy@tekki-x.com</span> and we'll process your request under the DPDP Act, 2023, subject to records we must retain by law (e.g. tax invoices).</p>
            </div>
          </details>

          <h2 id="still" className="font-inter font-extrabold text-2xl text-emerald-950 mt-10 mb-3 tracking-tight">Still need help?</h2>
          <p className="mb-4">We're a small, responsive team. Reach us and we'll get you sorted.</p>

          <div className="overflow-x-auto rounded-lg border border-emerald-950/10">
            <table className="w-full border-collapse text-sm text-left">
              <thead>
                <tr className="bg-emerald-950 text-emerald-50">
                  <th className="text-[11px] tracking-wider uppercase px-4 py-3 font-semibold">Need</th>
                  <th className="text-[11px] tracking-wider uppercase px-4 py-3 font-semibold">Contact</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-emerald-950/10">
                <tr className="odd:bg-white even:bg-emerald-50/20">
                  <td className="px-4 py-3.5 align-top font-medium">Product &amp; technical support</td>
                  <td className="px-4 py-3.5 align-top"><span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">support@tekki-x.com</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-emerald-50/20">
                  <td className="px-4 py-3.5 align-top font-medium">Bulk / reseller &amp; partnerships</td>
                  <td className="px-4 py-3.5 align-top"><span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">sales@tekki-x.com</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-emerald-50/20">
                  <td className="px-4 py-3.5 align-top font-medium">Privacy &amp; data requests</td>
                  <td className="px-4 py-3.5 align-top"><span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">privacy@tekki-x.com</span></td>
                </tr>
                <tr className="odd:bg-white even:bg-emerald-50/20">
                  <td className="px-4 py-3.5 align-top font-medium">Grievances</td>
                  <td className="px-4 py-3.5 align-top"><span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">grievance@tekki-x.com</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
      </div>

      <footer className="bg-[#03251F] text-emerald-200/80 py-12 border-t border-emerald-950">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-wrap justify-between gap-6 mb-8">
            <a href="/" className="flex items-center gap-3 no-underline">
              <svg className="w-9 h-9 rounded-2xl flex-shrink-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="88" height="88" rx="20" fill="#0F6E56" />
                <path d="M32 32 L68 68 M68 32 L32 68" stroke="#E1F5EE" strokeWidth="9" strokeLinecap="round" opacity="0.35" />
                <circle cx="50" cy="50" r="9" fill="#FFBF00" />
              </svg>
              <span className="font-serif font-bold text-xl text-white leading-none">Tekki <span className="text-amber-500">X</span></span>
              <span className="text-[10px] tracking-[3px] font-bold text-emerald-400 uppercase border-l border-emerald-500/20 pl-2.5">Blaze</span>
            </a>
            <div className="flex flex-wrap gap-6">
              <a href="/privacy" className="text-emerald-200/70 hover:text-white text-sm transition-colors">Privacy</a>
              <a href="/terms" className="text-emerald-200/70 hover:text-white text-sm transition-colors">Terms</a>
              <a href="/refund" className="text-emerald-200/70 hover:text-white text-sm transition-colors">Refund Policy</a>
              <a href="/help" className="text-emerald-200/70 hover:text-white text-sm transition-colors">Help &amp; FAQ</a>
              <a href="/#get" className="text-emerald-200/70 hover:text-white text-sm transition-colors">Pricing</a>
            </div>
          </div>
          <div className="border-t border-emerald-500/10 pt-5 flex flex-wrap justify-between gap-2 text-xs text-emerald-400/60">
            <span>© 2026 TEKKI · tekki-x.com</span>
            <span>TEKKI (trading as Tekki‑X) — operating the “Tekki Blaze” product</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
