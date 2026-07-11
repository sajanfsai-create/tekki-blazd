import Footer from './Footer'

export default function Refund() {
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
 <span className="font-serif font-bold text-xl text-emerald-950 leading-none">Tekki <span className="text-amber-500">Blaze</span></span>
 {/* <span className="text-[10px] tracking-[3px] font-bold text-emerald-700 uppercase border-l border-emerald-950/10 pl-2.5">Blaze</span> */}
 </a>
 <div className="flex items-center gap-6">
 <div className="hidden md:flex items-center gap-6">
 <a href="/privacy" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Privacy</a>
 <a href="/terms" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Terms</a>
 <a href="/refund" className="text-sm font-bold text-emerald-700 hover:underline">Refund</a>
 <a href="/help" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Help &amp; FAQ</a>
 <a href="/contact" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Contact</a>
 </div>
 <a href="/#get" className="bg-amber-500 hover:bg-amber-400 transition-colors text-emerald-950 font-bold text-xs px-4.5 py-2.5 rounded-xl no-underline">Get Tekki Blaze</a>
 </div>
 </div>
 </nav>

 <header className="bg-gradient-to-b from-emerald-50/50 to-white border-b border-emerald-950/10 py-14">
 <div className="max-w-5xl mx-auto px-6">
 <div className="text-xs text-emerald-700/60 mb-3.5 tracking-wide"><a href="/" className="text-emerald-700 hover:underline">Home</a> › Refund &amp; Cancellation Policy</div>
 <h1 className="font-black tracking-tight text-4xl text-emerald-950 mb-2.5 font-inter">Refund &amp; Cancellation Policy</h1>
 <p className="text-base text-emerald-800 max-w-2xl">When and how you can get a refund for Tekki Blaze — aligned with the Consumer Protection Act, 2019 and the E‑Commerce Rules, 2020.</p>
 
 <div className="mt-4.5 flex flex-wrap gap-2.5">
 <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Last updated: 24 June 2026</span>
 <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Product type: Digital good</span>
 <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Jurisdiction: India</span>
 </div>

 {/* <div className="bg-amber-50 border border-dashed border-amber-500 rounded-xl p-4.5 mt-6 text-sm text-amber-900/80">
 ✎ <b className="text-amber-700 font-bold">Before publishing:</b> the company name (TEKKI) and Bengaluru address are filled in. Still to replace are the highlighted <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">placeholder fields</span> — the <b>Grievance Officer’s name</b>, a <b>contact phone number</b>, and the <b>support email address</b> (set these up on your domain). GSTIN is intentionally not shown here (it isn’t required on the website; it must appear on your tax invoices). This India-aligned content should be reviewed and signed off by a qualified Indian lawyer before going live. Remove this note before publishing.
 </div> */}
 </div>
 </header>

 <div className="max-w-5xl mx-auto px-6">
 <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 py-12 md:pb-24">
 
 <aside className="md:sticky md:top-24 self-start border border-emerald-950/10 rounded-xl p-5 bg-emerald-50/30">
 <h4 className="text-[12px] tracking-[3px] uppercase text-emerald-600 font-extrabold mb-3">On this page</h4>
 <nav className="flex flex-col space-y-1">
 <a href="#r1" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">1. Overview</a>
 <a href="#r2" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">2. Nature of the product</a>
 <a href="#r3" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">3. When refunds apply</a>
 <a href="#r4" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">4. When refunds don’t apply</a>
 <a href="#r5" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">5. Our accuracy promise</a>
 <a href="#r6" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">6. How to request</a>
 <a href="#r7" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">7. Timelines &amp; method</a>
 <a href="#r8" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">8. Packs &amp; bulk orders</a>
 <a href="#r9" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">9. Cancellations</a>
 <a href="#r10" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">10. Contact &amp; grievance</a>
 </nav>
 </aside>

 <main className="space-y-10 text-[15px] text-emerald-900/90 leading-relaxed">
 
 <section id="r1" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">1. Overview</h2>
 <p className="mb-3.5">This website and the “Tekki Blaze” software application (the <strong>“Service”</strong>) are operated by <strong>TEKKI</strong>, a partnership firm registered under the Indian Partnership Act, 1932, having its principal place of business at Indiranagar, Bengaluru, India (trading as <strong>“Tekki‑X”</strong>; <strong>“we”, “us”</strong> or <strong>“our”</strong>).</p>
 <p>This Refund &amp; Cancellation Policy explains when you can get a refund for Tekki Blaze. It is designed to be fair and transparent, consistent with the <strong>Consumer Protection Act, 2019</strong> and the <strong>Consumer Protection (E‑Commerce) Rules, 2020</strong>. Please read it together with our <a href="/terms" className="text-emerald-700 hover:underline">Terms of Service</a>.</p>
 </section>

 <section id="r2" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">2. Nature of the product</h2>
 <p>Tekki Blaze is a <strong>digital product</strong> delivered electronically and consumed immediately — you download a file and run a scan that produces a report. Because the value is delivered the moment a scan is generated, refunds are necessarily limited, as is standard for digital goods. We have, however, kept clear and genuine exceptions below.</p>
 </section>

 <section id="r3" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">3. Situations where you ARE eligible for a refund</h2>
 <p className="mb-3.5">We will provide a full or partial refund (or a free replacement scan, at your choice) in cases such as:</p>
 <ul className="list-disc pl-6 space-y-2">
 <li><strong>Duplicate or double charge</strong> — you were charged more than once for the same order.</li>
 <li><strong>Payment deducted, no access delivered</strong> — money was debited but no scan credit / download link was provided and we cannot deliver it.</li>
 <li><strong>Scan could not run</strong> — the application failed to complete a scan or produce a report on a supported Windows device, and our support team is unable to resolve it.</li>
 <li><strong>Wrong/over-charged amount</strong> — you were billed an amount different from the published price.</li>
 <li><strong>Unused packs</strong> — for multi-scan packs, the <strong>unused</strong> scan credits are refundable on a pro-rata basis within the eligibility window (Section 8).</li>
 </ul>
 </section>

 <section id="r4" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">4. Situations where refunds do NOT apply</h2>
 <ul className="list-disc pl-6 space-y-2 mb-4.5">
 <li>A scan has already been <strong>successfully completed</strong> and a report generated (the service has been delivered and consumed);</li>
 <li>You changed your mind after a successful scan, or no longer need the report;</li>
 <li>You are dissatisfied with the <strong>findings</strong> of an accurate report (e.g. it told you a part is failing) — the report did its job;</li>
 <li>The device is unsupported as clearly stated before purchase (e.g. non-Windows OS), or issues are caused by factors outside the software (malware, hardware physically damaged, BIOS-locked data the tool cannot read);</li>
 <li>Promotional, free or heavily discounted scans, unless required by law.</li>
 </ul>
 <div className="bg-amber-50 border-l-3 border-amber-500 rounded-r-xl p-4 text-[15px] text-emerald-900/80">
 Limitations of a software diagnostic (for example, that it cannot detect physical damage) are disclosed before purchase in our <a href="/terms" className="text-emerald-700 hover:underline">Terms</a> and on the product page, and are not by themselves grounds for a refund.
 </div>
 </section>

 <section id="r5" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">5. Our accuracy goodwill promise</h2>
 <p>We stand behind accuracy. If Tekki Blaze flags a component as failing and an <strong>independent qualified technician certifies in writing</strong>, within <strong>15 days</strong> of the scan, that the component did not need replacement, we will refund the scan fee as a goodwill gesture upon review of the documentation.</p>
 </section>

 <section id="r6" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">6. How to request a refund</h2>
 <p className="mb-3.5">Email <a href="mailto:support@tekki-x.com" className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded hover:bg-amber-200 transition-colors cursor-pointer">support@tekki-x.com</a> within <strong>7 days</strong> of the transaction with:</p>
 <ul className="list-disc pl-6 space-y-2">
 <li>Your order ID / payment reference;</li>
 <li>Registered email and mobile number;</li>
 <li>A short description of the issue (and a screenshot or technician certificate, if relevant).</li>
 </ul>
 <p className="mt-3.5">You may also raise a complaint with our Grievance Officer (Section 10).</p>
 </section>

 <section id="r7" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">7. Timelines &amp; refund method</h2>
 <div className="overflow-x-auto my-4.5 rounded-lg border border-emerald-950/10">
 <table className="w-full border-collapse text-sm text-left">
 <thead>
 <tr className="bg-emerald-950 text-emerald-50">
 <th className="text-[11px] tracking-wider uppercase px-4 py-3 font-semibold">Step</th>
 <th className="text-[11px] tracking-wider uppercase px-4 py-3 font-semibold">Timeline</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-emerald-950/10">
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top">Acknowledgement of request</td>
 <td className="px-4 py-3.5 align-top">Within 48 hours</td>
 </tr>
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top">Review &amp; decision</td>
 <td className="px-4 py-3.5 align-top">Within 5–7 business days</td>
 </tr>
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top">Refund credited (if approved)</td>
 <td className="px-4 py-3.5 align-top">Within 5–7 business days of approval</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p>Approved refunds are credited to the <strong>original payment method</strong> (UPI/card/net-banking). The time for the amount to reflect depends on your bank or payment provider. Refunds are made in Indian Rupees; applicable GST is refunded along with the eligible amount.</p>
 </section>

 <section id="r8" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">8. Packs &amp; bulk orders</h2>
 <p>For multi-scan packs and partner/bulk orders, refunds (if eligible) are calculated on <strong>unused</strong> scan credits at the effective per-scan rate paid. Used credits are non-refundable. Specific partner agreements, if any, will prevail over this section.</p>
 </section>

 <section id="r9" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">9. Cancellations</h2>
 <p>As the product is delivered instantly, an order can be cancelled only <strong>before</strong> a scan credit is used or a download is delivered. Once a scan is completed, the cancellation/refund rules above apply.</p>
 </section>

 <section id="r10" className="scroll-mt-24">
 <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">10. Contact &amp; grievance</h2>
 <p className="mb-3.5">For any refund question, email <a href="mailto:support@tekki-x.com" className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded hover:bg-amber-200 transition-colors cursor-pointer">support@tekki-x.com</a>. If unresolved, escalate to our Grievance Officer:</p>
 <p className="mb-4">In accordance with the Information Technology Act, 2000, the Consumer Protection (E‑Commerce) Rules, 2020 and the Digital Personal Data Protection Act, 2023, our Grievance Officer is:</p>
 
 <div className="overflow-x-auto rounded-lg border border-emerald-950/10">
 <table className="w-full border-collapse text-sm text-left">
 <thead>
 <tr className="bg-emerald-950 text-emerald-50">
 <th className="text-[11px] tracking-wider uppercase px-4 py-3 font-semibold">Field</th>
 <th className="text-[11px] tracking-wider uppercase px-4 py-3 font-semibold">Details</th>
 </tr>
 </thead>
 <tbody className="divide-y divide-emerald-950/10">
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top font-medium">Name</td>
 <td className="px-4 py-3.5 align-top">Srinivasan Kannu</td>
 </tr>
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top font-medium">Designation</td>
 <td className="px-4 py-3.5 align-top">Grievance Officer, Tekki‑X</td>
 </tr>
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top font-medium">Email</td>
 <td className="px-4 py-3.5 align-top"><a href="mailto:support@tekki-x.com" className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded hover:bg-amber-200 transition-colors cursor-pointer">support@tekki-x.com</a></td>
 </tr>
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top font-medium">Phone</td>
 <td className="px-4 py-3.5 align-top">+91 81057 63079 (Mon–Fri, 10:00–18:00 IST)</td>
 </tr>
 <tr className="odd:bg-white even:bg-emerald-50/20">
 <td className="px-4 py-3.5 align-top font-medium">Address</td>
 <td className="px-4 py-3.5 align-top">Indiranagar, Bengaluru, India</td>
 </tr>
 </tbody>
 </table>
 </div>
 <p className="mt-4">We will acknowledge a complaint within <strong>48 hours</strong> and endeavour to resolve it within <strong>30 days</strong> of receipt, as required under Indian law.</p>
 </section>
 </main>

 </div>
 </div>

 <Footer />
 </div>
 )
}
