export default function Terms() {
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
              <a href="/terms" className="text-sm font-bold text-emerald-700 hover:underline">Terms</a>
              <a href="/refund" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Refund</a>
              <a href="/help" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Help &amp; FAQ</a>
            </div>
            <a href="/#get" className="bg-amber-500 hover:bg-amber-400 transition-colors text-emerald-950 font-bold text-xs px-4.5 py-2.5 rounded-lg no-underline">Get Tekki Blaze</a>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-b from-emerald-50/50 to-white border-b border-emerald-950/10 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs text-emerald-700/60 mb-3.5 tracking-wide"><a href="/" className="text-emerald-700 hover:underline">Home</a> › Terms of Service</div>
          <h1 className="font-black tracking-tight text-4xl text-emerald-950 mb-2.5 font-inter">Terms of Service</h1>
          <p className="text-base text-emerald-800 max-w-2xl">The rules for using the Tekki Blaze website and application — governed by Indian law, including the IT Act, 2000 and the Consumer Protection Act, 2019.</p>

          <div className="mt-4.5 flex flex-wrap gap-2.5">
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Last updated: 24 June 2026</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Governing law: India</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Product: Tekki Blaze</span>
          </div>

          {/* <div className="bg-amber-50 border border-dashed border-amber-500 rounded-xl p-4.5 mt-6 text-sm text-amber-900/80">
            ✎ <b className="text-amber-700 font-bold">Before publishing:</b> the company name (TEKKI) and Bengaluru address are filled in. Still to replace are the highlighted <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">[placeholders]</span> — the <b>Grievance Officer's name</b>, a <b>contact phone number</b>, and the <b>support / privacy / grievance / sales email addresses</b> (set these up on your domain). GSTIN is intentionally not shown here (it isn't required on the website; it must appear on your tax invoices). This India-aligned content should be reviewed and signed off by a qualified Indian lawyer before going live. Remove this note before publishing.
          </div> */}
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-12 py-12 md:pb-24">

          <aside className="md:sticky md:top-24 self-start border border-emerald-950/10 rounded-xl p-5 bg-emerald-50/30">
            <h4 className="text-[11px] tracking-[2px] uppercase text-emerald-600 font-extrabold mb-3">On this page</h4>
            <nav className="flex flex-col space-y-1">
              <a href="#t1" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">1. Acceptance</a>
              <a href="#t2" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">2. Definitions</a>
              <a href="#t3" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">3. Eligibility</a>
              <a href="#t4" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">4. Licence to use</a>
              <a href="#t5" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">5. Acceptable use</a>
              <a href="#t6" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">6. The scan &amp; limits</a>
              <a href="#t7" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">7. Pricing, GST &amp; payment</a>
              <a href="#t8" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">8. Intellectual property</a>
              <a href="#t9" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">9. Disclaimers</a>
              <a href="#t10" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">10. Limitation of liability</a>
              <a href="#t11" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">11. Indemnity</a>
              <a href="#t12" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">12. Termination</a>
              <a href="#t13" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">13. Grievance Officer</a>
              <a href="#t14" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">14. Governing law</a>
              <a href="#t15" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">15. General</a>
            </nav>
          </aside>

          <main className="space-y-10 text-[15px] text-emerald-900/90 leading-relaxed">

            <section id="t1" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">1. Acceptance of Terms</h2>
              <p className="mb-3.5">This website and the “Tekki Blaze” software application (the <strong>“Service”</strong>) are operated by <strong>TEKKI</strong>, a partnership firm registered under the Indian Partnership Act, 1932, having its principal place of business at No. 467/468, BHIVE Workspace, Sri Krishna Temple Road, Indiranagar, Bengaluru, Bengaluru Urban, Karnataka – 560038, India (trading as <strong>“Tekki‑X”</strong>; <strong>“we”, “us”</strong> or <strong>“our”</strong>).</p>
              <p>These Terms of Service (<strong>“Terms”</strong>) govern your access to and use of the Tekki Blaze website and application. By downloading, installing, purchasing or using the Service, you agree to these Terms, our <a href="/privacy" className="text-emerald-700 hover:underline">Privacy Policy</a> and <a href="/refund" className="text-emerald-700 hover:underline">Refund Policy</a>, which together form a legally binding electronic agreement under the Information Technology Act, 2000. If you do not agree, do not use the Service.</p>
            </section>

            <section id="t2" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">2. Definitions</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>“Tekki Blaze”</strong> — our downloadable Windows hardware health-scan application that produces an A–F health report.</li>
                <li><strong>“Scan”</strong> — a single execution of the application producing one report.</li>
                <li><strong>“You” / “User”</strong> — any person or entity using the Service.</li>
              </ul>
            </section>

            <section id="t3" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">3. Eligibility</h2>
              <p>You must be at least <strong>18 years old</strong> and competent to contract under the Indian Contract Act, 1872. If you use the Service on behalf of an organisation, you confirm you are authorised to bind that organisation.</p>
            </section>

            <section id="t4" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">4. Licence to use</h2>
              <p>Subject to these Terms and payment of applicable fees, we grant you a <strong>limited, non-exclusive, non-transferable, non-sublicensable, revocable licence</strong> to download and run Tekki Blaze for your own use (or your organisation's internal use, or — for authorised partners — as expressly permitted in a separate partner agreement). You receive a licence to <em>use</em> the software; you do not purchase the software itself.</p>
            </section>

            <section id="t5" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">5. Acceptable use</h2>
              <p className="mb-3.5">You agree <strong>not</strong> to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Copy, modify, reverse-engineer, decompile or create derivative works of the application, except to the limited extent permitted by law;</li>
                <li>Resell, rent, sublicense or redistribute the Service without our written authorisation (authorised resellers excepted);</li>
                <li>Run the Service on devices you are not authorised to scan;</li>
                <li>Circumvent licensing, scan limits or security; introduce malware; or disrupt the Service;</li>
                <li>Use the Service for any unlawful purpose or in violation of any applicable law.</li>
              </ul>
            </section>

            <section id="t6" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">6. The scan and its limitations</h2>
              <p className="mb-3.5">Tekki Blaze is a <strong>software diagnostic aid</strong>, not a substitute for physical inspection by a qualified technician. You acknowledge and accept that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>It reports hardware and system <strong>software/OS-level status</strong>; it <strong>cannot detect physical damage</strong> (e.g. cracked boards, liquid damage, bent connectors);</li>
                <li>Some details may be unavailable on BIOS-locked, OEM-restricted or older devices, and will be marked as “unable to verify” rather than assumed healthy;</li>
                <li>Results depend on the accuracy of data reported by Windows and the device firmware;</li>
                <li>The A–F grade and recommendations are <strong>guidance to help you decide</strong>, and are provided “as is”. Final repair/replacement decisions are yours.</li>
              </ul>
            </section>

            <section id="t7" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">7. Pricing, GST &amp; payment</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Prices are displayed in Indian Rupees (₹) and are <strong>exclusive of GST</strong> unless stated otherwise; applicable GST is added at checkout.</li>
                <li>The standard price is <strong>₹199 per scan</strong>, with multi-scan packs (e.g. 3-pack ₹499, 5-pack ₹749) and bulk/partner pricing as published or separately agreed.</li>
                <li>Payment is collected through a third-party payment gateway. You agree to provide accurate billing details. A GST-compliant invoice will be made available for each purchase.</li>
                <li>We may revise prices prospectively; changes will not affect scans already purchased.</li>
              </ul>
            </section>

            <section id="t8" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">8. Intellectual property</h2>
              <p>All rights, title and interest in the Service — including the software, “Tekki”, “Tekki‑X” and “Tekki Blaze” names, the logo, report templates, and all content — are owned by or licensed to Tekki‑X and are protected under the Copyright Act, 1957, the Trade Marks Act, 1999 and other laws. Your report's data belongs to you; the report format and engine remain ours. Nothing in these Terms transfers our intellectual property to you.</p>
            </section>

            <section id="t9" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">9. Disclaimers</h2>
              <p>The Service is provided on an <strong>“as is” and “as available”</strong> basis without warranties of any kind, whether express or implied, including merchantability, fitness for a particular purpose, accuracy or non-infringement, to the maximum extent permitted by law. We do not warrant that the Service will be uninterrupted, error-free, or that every fault will be detected. Nothing in these Terms excludes liability that cannot be excluded under the Consumer Protection Act, 2019.</p>
            </section>

            <section id="t10" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">10. Limitation of liability</h2>
              <p>To the maximum extent permitted by applicable law, Tekki‑X and its officers, employees and partners shall not be liable for any indirect, incidental, special, consequential or punitive damages, or for loss of data, profits, or device damage arising from your use of (or inability to use) the Service. Our <strong>total aggregate liability</strong> for any claim shall not exceed the amount you paid to us for the specific scan or pack giving rise to the claim. This limitation does not apply to liability arising from our wilful misconduct or where prohibited by law.</p>
            </section>

            <section id="t11" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">11. Indemnity</h2>
              <p>You agree to indemnify and hold harmless Tekki‑X from any claims, damages, losses or expenses (including reasonable legal fees) arising from your breach of these Terms, your misuse of the Service, or your violation of any law or third-party right.</p>
            </section>

            <section id="t12" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">12. Suspension &amp; termination</h2>
              <p>We may suspend or terminate your access if you breach these Terms or use the Service unlawfully. You may stop using and uninstall the Service at any time. Provisions that by their nature should survive termination (e.g. IP, disclaimers, limitation of liability, governing law) will survive.</p>
            </section>

            <section id="t13" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">13. Grievance Officer</h2>
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
                      <td className="px-4 py-3.5 align-top"><span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">[Grievance Officer Name]</span></td>
                    </tr>
                    <tr className="odd:bg-white even:bg-emerald-50/20">
                      <td className="px-4 py-3.5 align-top font-medium">Designation</td>
                      <td className="px-4 py-3.5 align-top">Grievance Officer, Tekki‑X</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-emerald-50/20">
                      <td className="px-4 py-3.5 align-top font-medium">Email</td>
                      <td className="px-4 py-3.5 align-top"><span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">grievance@tekki-x.com</span></td>
                    </tr>
                    <tr className="odd:bg-white even:bg-emerald-50/20">
                      <td className="px-4 py-3.5 align-top font-medium">Phone</td>
                      <td className="px-4 py-3.5 align-top"><span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">[+91‑XXXXXXXXXX]</span> (Mon–Fri, 10:00–18:00 IST)</td>
                    </tr>
                    <tr className="odd:bg-white even:bg-emerald-50/20">
                      <td className="px-4 py-3.5 align-top font-medium">Address</td>
                      <td className="px-4 py-3.5 align-top">No. 467/468, BHIVE Workspace, Sri Krishna Temple Road, Indiranagar, Bengaluru, Karnataka – 560038</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4">We will acknowledge a complaint within <strong>48 hours</strong> and endeavour to resolve it within <strong>30 days</strong> of receipt, as required under Indian law.</p>
            </section>

            <section id="t14" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">14. Governing law &amp; dispute resolution</h2>
              <p className="mb-3.5">These Terms are governed by the laws of India. Subject to the arbitration clause below, the courts at <strong>Bengaluru, Karnataka</strong> shall have exclusive jurisdiction. Any dispute arising out of or relating to these Terms shall first be attempted to be resolved amicably; failing which it shall be referred to <strong>arbitration</strong> by a sole arbitrator under the Arbitration and Conciliation Act, 1996, seated at <strong>Bengaluru</strong>, conducted in English. Consumers retain all rights available to them under the Consumer Protection Act, 2019.</p>
            </section>

            <section id="t15" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">15. General</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Changes:</strong> We may amend these Terms; the “Last updated” date will change and continued use means acceptance.</li>
                <li><strong>Severability:</strong> If any provision is held invalid, the rest remain in effect.</li>
                <li><strong>Entire agreement:</strong> These Terms, with the Privacy and Refund policies, are the entire agreement between you and us regarding the Service.</li>
                <li><strong>Force majeure:</strong> We are not liable for delays or failures caused by events beyond our reasonable control.</li>
              </ul>
            </section>
          </main>

        </div>
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
