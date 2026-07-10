import React from 'react';

export default function ComplianceModal() {
  return (
    <div className="bg-white p-6 md:p-10 rounded-2xl text-left">
      <div className="mb-8">
        <h2 className="font-inter font-black text-[28px] md:text-[32px] text-ink leading-tight tracking-tight mb-3">
          Security &amp; privacy, in plain terms.
        </h2>
        <p className="text-[15px] md:text-[16px] text-text-soft leading-relaxed max-w-2xl">
          We built Tekki Blaze so you can verify hardware honestly without giving up your privacy. Here is exactly what we do and don't do.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 rounded-[14px] bg-teal-ghost flex items-center justify-center text-teal-mid mb-2 shadow-sm border border-[rgba(29,158,117,0.1)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 2L4 5v6c0 5 3.4 8.5 8 10 4.6-1.5 8-5 8-10V5l-8-3z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className="font-inter font-bold text-[18px] text-ink">Zero Cloud Retention</h3>
          <p className="text-[14.5px] text-text-soft leading-relaxed">
            Your scan data is processed locally on your machine. When you generate a report, the PDF is built on your device. We do not store your hardware serial numbers, files, or personal data on our servers.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 rounded-[14px] bg-amber-ghost flex items-center justify-center text-amber-dark mb-2 shadow-sm border border-[rgba(239,159,39,0.15)]">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <h3 className="font-inter font-bold text-[18px] text-ink">Read-Only Diagnostics</h3>
          <p className="text-[14.5px] text-text-soft leading-relaxed">
            Our executable only performs read operations. It queries WMI and system registries to check health statuses (like SSD wear and thermal limits) but never modifies, deletes, or changes system configurations.
          </p>
        </div>
        
        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 rounded-[14px] bg-[#fdf4e7] flex items-center justify-center text-[#dca838] mb-2 shadow-sm border border-[rgba(239,159,39,0.1)]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke="currentColor" strokeWidth="2.5"/><path d="M7 11V7a5 5 0 0 1 10 0v4" stroke="currentColor" strokeWidth="2.5"/></svg>
          </div>
          <h3 className="font-inter font-bold text-[18px] text-ink">No Persistent Software</h3>
          <p className="text-[14.5px] text-text-soft leading-relaxed">
            Tekki Blaze runs entirely as a portable executable. Once you close the app, it leaves no background processes, no tracking cookies, and no startup services.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="w-12 h-12 rounded-[14px] bg-teal-ghost flex items-center justify-center text-teal-mid mb-2 shadow-sm border border-[rgba(29,158,117,0.1)]">
             <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2.5"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/></svg>
          </div>
          <h3 className="font-inter font-bold text-[18px] text-ink">Strict GDPR Compliance</h3>
          <p className="text-[14.5px] text-text-soft leading-relaxed">
            If you optionally join our waitlist or buy a scan key, we only collect the bare minimum (email). You have the right to request deletion of your purchase history at any time.
          </p>
        </div>
      </div>
      
      <div className="mt-10 pt-6 border-t border-[rgba(29,158,117,0.14)] flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-[13px] text-text-soft">
          Need full legalese? View our <a href="#" className="text-teal-mid underline hover:text-teal-dark">Terms of Service</a> and <a href="#" className="text-teal-mid underline hover:text-teal-dark">Privacy Policy</a>.
        </p>
      </div>
    </div>
  );
}
