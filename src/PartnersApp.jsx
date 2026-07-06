import React from 'react';
import Nav from './components/Nav';

export default function PartnersApp() {
  return (
    <>
      <Nav />
      <div className='py-5' >

      </div>
      <div className='flex justify-center item-center' >

        <div className="min-h-[calc(100vh-80px)] bg-[#fbfcfc]   w-[500px] flex flex-col items-center justify-center p-6 text-center font-inter text-ink relative overflow-hidden">

          {/* Background decoration matching home page */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-ghost/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-base/5 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

          {/* Main Card */}
          <div className="p-5  max-w-md w-full bg-white p-10 md:p-12 rounded-[24px] shadow-[0_20px_40px_rgba(4,52,44,0.06)] border border-[rgba(29,158,117,0.15)] relative">

            {/* Subtle inner decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-base/10 rounded-bl-full rounded-tr-[24px] -z-10 blur-xl"></div>

            <div className="w-16 h-16 bg-[#eaf7f2] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-[rgba(29,158,117,0.1)] text-[#0F6E56]">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <polyline points="16 11 18 13 22 9"></polyline>
              </svg>
            </div>

            <div className="text-[11px] tracking-[2px] uppercase font-bold text-amber-dark mb-3">Partner Portal</div>

            <h1 className="font-black text-[36px] tracking-tight leading-tight mb-4 text-ink">
              Launching Soon.
            </h1>

            <p className="text-[15px] text-text-mid leading-[1.6] mb-10">
              We're building dedicated tools for repair shops, IT resellers, and refurbishers. Bulk licensing, repair leads, and lifecycle certification are on the way.
            </p>

            <a href="/" className="inline-flex justify-center items-center gap-2 w-full bg-white border-2 border-teal-base text-teal-base font-bold text-[15px] py-[14px] rounded-[12px] hover:bg-teal-ghost transition-colors duration-200">
              <span>&larr; Back to Home</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
