import React, { useState } from 'react';

export default function WaitlistModal() {
 const [email, setEmail] = useState('');
 const [status, setStatus] = useState('idle'); // idle, loading, success, error
 const [errorMessage, setErrorMessage] = useState('');

 const handleSubmit = (e) => {
 e.preventDefault();
 if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
 setStatus('error');
 setErrorMessage('Please enter a valid email address.');
 return;
 }

 setStatus('loading');
 
 // Simulate API call
 setTimeout(() => {
 setStatus('success');
 }, 800);
 };

 if (status === 'success') {
 return (
 <div className="bg-white p-6 lg:p-8 text-center flex flex-col items-center">
 <div className="w-16 h-16 rounded-full bg-teal-ghost text-teal-mid flex items-center justify-center mb-5 border border-[rgba(29,158,117,0.14)] shadow-sm">
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
 </div>
 <h3 className="font-serif text-[24px] font-bold text-ink mb-3">You’re on the list!</h3>
 <p className="text-[15px] text-text-soft leading-relaxed max-w-sm">
 We’ll send you an email as soon as Tekki Blaze is ready for your operating system.
 </p>
 </div>
 );
 }

 return (
 <div className="bg-white p-6 lg:p-8">
 <div className="mb-6">
 <div className="inline-flex items-center gap-2 text-[12px] tracking-[3px] uppercase font-bold text-amber-dark mb-3">
 <span className="w-1.5 h-1.5 rounded-full bg-amber-brand"></span>
 macOS &amp; Linux
 </div>
 <h3 className="font-serif text-[26px] font-bold text-ink mb-3 leading-tight">Join the Waitlist</h3>
 <p className="text-[15px] text-text-soft leading-relaxed">
 We’re working hard to bring the power of Tekki Blaze to macOS and Linux. Drop your email below to get early access.
 </p>
 </div>

 <form onSubmit={handleSubmit} className="flex flex-col gap-4">
 <div>
 <input 
 type="email" 
 placeholder="name@example.com"
 value={email}
 onChange={(e) => setEmail(e.target.value)}
 className={`w-full bg-off-white border ${status === 'error' ? 'border-[#C8472E]' : 'border-[rgba(29,158,117,0.14)]'} rounded-xl px-4 py-3.5 text-[15px] text-ink placeholder:text-text-soft focus:outline-none focus:border-teal-mid focus:ring-1 focus:ring-teal-mid transition-all shadow-[0_2px_4px_rgba(4,52,44,0.02)_inset]`}
 />
 {status === 'error' && (
 <p className="text-[#C8472E] text-[13px] mt-1.5 font-medium px-1">{errorMessage}</p>
 )}
 </div>
 <button 
 type="submit" 
 disabled={status === 'loading'}
 className="w-full bg-amber-brand text-ink font-bold text-[15px] px-6 py-3.5 rounded-xl transition-all shadow-[0_4px_14px_rgba(239,159,39,0.2)] border-none hover:shadow-[0_8px_24px_rgba(239,159,39,0.3)] disabled:opacity-70 flex justify-center items-center h-[52px]"
 >
 {status === 'loading' ? (
 <span className="w-5 h-5 border-2 border-ink/30 border-t-ink rounded-full animate-spin"></span>
 ) : (
 'Join the Waitlist'
 )}
 </button>
 </form>
 </div>
 );
}
