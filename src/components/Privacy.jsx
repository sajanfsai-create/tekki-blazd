export default function Privacy() {
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
            {/* <span className="text-[10px] tracking-[3px] font-bold text-emerald-700 uppercase border-l border-emerald-950/10 pl-2.5">Blaze</span> */}
          </a>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <a href="/privacy" className="text-sm font-bold text-emerald-700 hover:underline">Privacy</a>
              <a href="/terms" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Terms</a>
              <a href="/refund" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Refund</a>
              <a href="/help" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Help &amp; FAQ</a>
              <a href="/contact" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Contact</a>
            </div>
            <a href="/#get" className="bg-amber-500 hover:bg-amber-400 transition-colors text-emerald-950 font-bold text-xs px-4.5 py-2.5 rounded-lg no-underline">Get Tekki Blaze</a>
          </div>
        </div>
      </nav>

      <header className="bg-gradient-to-b from-emerald-50/50 to-white border-b border-emerald-950/10 py-14">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-xs text-emerald-700/60 mb-3.5 tracking-wide"><a href="/" className="text-emerald-700 hover:underline">Home</a> › Privacy Policy</div>
          <h1 className="font-black tracking-tight text-4xl text-emerald-950 mb-2.5 font-inter">Privacy Policy</h1>
          <p className="text-base text-emerald-800 max-w-2xl">How Tekki Blaze collects, uses and protects your information — written in line with India's Digital Personal Data Protection Act, 2023 and the IT Act, 2000.</p>

          <div className="mt-4.5 flex flex-wrap gap-2.5">
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Last updated: 24 June 2026</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Applies to: tekki-x.com &amp; Tekki Blaze app</span>
            <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Jurisdiction: India</span>
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
              <a href="#p1" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">1. Introduction</a>
              <a href="#p2" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">2. Data we collect</a>
              <a href="#p3" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">3. What we do NOT access</a>
              <a href="#p4" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">4. How we use your data</a>
              <a href="#p5" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">5. Legal basis &amp; consent</a>
              <a href="#p6" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">6. Sharing &amp; disclosure</a>
              <a href="#p7" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">7. Payments</a>
              <a href="#p8" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">8. Cookies &amp; analytics</a>
              <a href="#p9" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">9. Data retention</a>
              <a href="#p10" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">10. Security</a>
              <a href="#p11" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">11. Your rights</a>
              <a href="#p12" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">12. Children</a>
              <a href="#p13" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">13. Cross-border transfers</a>
              <a href="#p14" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">14. Grievance Officer</a>
              <a href="#p15" className="text-xs text-emerald-800 py-1 border-l-2 border-transparent pl-2.5 hover:text-emerald-700 hover:border-emerald-500 no-underline transition-colors">15. Updates</a>
            </nav>
          </aside>

          <main className="space-y-10 text-[15px] text-emerald-900/90 leading-relaxed">

            <section id="p1" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">1. Introduction</h2>
              <p className="mb-3.5">This website and the “Tekki Blaze” software application (the <strong>“Service”</strong>) are operated by <strong>TEKKI</strong>, a partnership firm registered under the Indian Partnership Act, 1932, having its principal place of business at No. 467/468, BHIVE Workspace, Sri Krishna Temple Road, Indiranagar, Bengaluru, Bengaluru Urban, Karnataka – 560038, India (trading as <strong>“Tekki‑X”</strong>; <strong>“we”, “us”</strong> or <strong>“our”</strong>).</p>
              <p>We respect your privacy. This Privacy Policy explains what personal data we collect when you use the Tekki Blaze website and application, how we use and protect it, and the rights available to you under the <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, the <strong>Information Technology Act, 2000</strong> and the <strong>Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011 (“SPDI Rules”)</strong>.</p>
              <p className="mt-3.5">By installing or using Tekki Blaze, you confirm that you have read and understood this Policy. If you do not agree, please do not use the Service.</p>
            </section>

            <section id="p2" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">2. Data we collect</h2>
              <p className="mb-4">We practise <strong>data minimisation</strong> — we collect only what is needed to deliver your hardware health report.</p>

              <h3 className="text-base font-bold text-emerald-950 mt-5 mb-2">a. Hardware &amp; system information (the core of the scan)</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Component identifiers and health metrics: CPU, GPU, RAM, storage (SSD/HDD) SMART data, battery wear, motherboard/BIOS details, network adapters.</li>
                <li>Operating system version, driver status, device manager errors, Windows event-log entries relating to hardware faults, temperatures and throttling data.</li>
                <li>Device make, model and serial/asset identifiers (used to label your report).</li>
              </ul>

              <h3 className="text-base font-bold text-emerald-950 mt-5 mb-2">b. Account &amp; contact information</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Name, email address and mobile number you provide to create an account, receive your report, or contact support.</li>
              </ul>

              <h3 className="text-base font-bold text-emerald-950 mt-5 mb-2">c. Transaction information</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Records of purchases (plan, amount, date, invoice/GST details). Card/UPI credentials are processed by our payment partner and are <strong>not</strong> stored by us (see Section 7).</li>
              </ul>

              <h3 className="text-base font-bold text-emerald-950 mt-5 mb-2">d. Technical &amp; usage data</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>IP address, browser type, device type, and basic product-usage events, used for security and to improve the Service.</li>
              </ul>

              <div className="bg-emerald-50 border-l-3 border-emerald-600 rounded-r-xl p-4 text-[14.5px] text-emerald-900">
                Some hardware and device identifiers may constitute “personal data” when linked to you. We treat all such data as personal data under the DPDP Act and handle it accordingly.
              </div>
            </section>

            <section id="p3" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">3. What we do NOT access</h2>
              <p className="mb-3.5">Tekki Blaze is a <strong>hardware diagnostic</strong> tool. It does <strong>not</strong>:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Open, read, copy, upload or scan the contents of your personal files, documents, photos, emails or messages;</li>
                <li>Log your keystrokes, capture your screen, or monitor your browsing;</li>
                <li>Access passwords or the contents of any application.</li>
              </ul>
              <p className="mt-3.5">It reads only hardware and system-level information required to produce your health report.</p>
            </section>

            <section id="p4" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">4. How we use your data</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>To run the scan and generate your A–F hardware health report (PDF);</li>
                <li>To create and manage your account and deliver the report to you;</li>
                <li>To process payments and issue GST-compliant invoices;</li>
                <li>To provide customer support and respond to your requests;</li>
                <li>To improve accuracy, fix bugs and develop new features (using aggregated/de-identified data wherever possible);</li>
                <li>To send service communications and, only with your consent, promotional messages (you may opt out anytime);</li>
                <li>To prevent fraud, enforce our Terms, and comply with legal obligations.</li>
              </ul>
            </section>

            <section id="p5" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">5. Legal basis &amp; consent</h2>
              <p>We process your personal data based on the <strong>consent</strong> you provide at the point of collection, and where applicable for <strong>legitimate uses</strong> permitted under the DPDP Act (such as fulfilling a service you requested). You may <strong>withdraw consent</strong> at any time by writing to <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">privacy@tekki-x.com</span>; withdrawal will not affect processing already carried out, and may limit our ability to provide the Service.</p>
            </section>

            <section id="p6" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">6. Sharing &amp; disclosure</h2>
              <p className="mb-3.5">We do not sell your personal data. We share it only with:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Payment processors</strong> (e.g. <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">Razorpay / [Payment Partner]</span>) to complete transactions;</li>
                <li><strong>Service providers / data processors</strong> (cloud hosting, email, analytics, customer-support tools) bound by confidentiality and data-protection obligations;</li>
                <li><strong>Channel/reseller partners</strong> only where you purchased through them, and only to the extent necessary;</li>
                <li><strong>Authorities</strong> where required by law, court order, or to protect rights and safety.</li>
              </ul>
            </section>

            <section id="p7" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">7. Payments</h2>
              <p>Payments are handled by a third-party payment gateway compliant with applicable RBI and PCI‑DSS standards. We do not collect or store your full card number, CVV or UPI PIN. Your use of the gateway is also subject to the payment partner's privacy policy.</p>
            </section>

            <section id="p8" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">8. Cookies &amp; analytics</h2>
              <p>Our website uses essential cookies to function and analytics cookies to understand usage. You can control cookies through your browser settings. Disabling some cookies may affect site functionality.</p>
            </section>

            <section id="p9" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">9. Data retention</h2>
              <p>We retain your personal data only for as long as necessary for the purposes above, or as required by law (for example, tax and accounting records are typically retained for <strong>8 years</strong> under Indian law). Scan reports are retained in your account until you delete them or close your account. When data is no longer required, we delete or anonymise it.</p>
            </section>

            <section id="p10" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">10. Security</h2>
              <p>We implement reasonable security practices and procedures consistent with the SPDI Rules and ISO‑aligned standards, including encryption in transit, access controls, and code-signing of our application. No method of transmission or storage is 100% secure; however, we work to protect your data and will notify you and the Data Protection Board of India of a breach where required.</p>
            </section>

            <section id="p11" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">11. Your rights</h2>
              <p className="mb-3.5">Subject to the DPDP Act, you have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access</strong> a summary of the personal data we hold about you;</li>
                <li><strong>Correct, complete or update</strong> inaccurate data;</li>
                <li><strong>Erase</strong> your data where it is no longer required;</li>
                <li><strong>Withdraw consent</strong> and <strong>nominate</strong> another individual to exercise your rights in case of death or incapacity;</li>
                <li><strong>Grievance redressal</strong> (Section 14).</li>
              </ul>
              <p className="mt-3.5">To exercise any right, email <span className="bg-amber-100 border-b border-dashed border-amber-700 text-amber-700 font-semibold px-0.5 rounded">privacy@tekki-x.com</span>. We may verify your identity before acting on a request.</p>
            </section>

            <section id="p12" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">12. Children</h2>
              <p>The Service is not intended for children under <strong>18</strong>. We do not knowingly process the data of children without verifiable parental/guardian consent as required by the DPDP Act. If you believe a child has provided us data, contact us and we will delete it.</p>
            </section>

            <section id="p13" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">13. Cross-border transfers</h2>
              <p>Where data is processed or stored outside India by our service providers, we ensure such transfers comply with the DPDP Act and applicable government restrictions, with appropriate safeguards in place.</p>
            </section>

            <section id="p14" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">14. Grievance Officer</h2>
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

            <section id="p15" className="scroll-mt-24">
              <h2 className="font-inter font-extrabold text-2xl text-emerald-950 mb-3 tracking-tight">15. Updates to this Policy</h2>
              <p>We may update this Policy from time to time. The “Last updated” date reflects the latest version. Material changes will be notified on this page or by email. Continued use of the Service after changes constitutes acceptance.</p>
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
