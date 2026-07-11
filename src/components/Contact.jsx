import React, { useState } from 'react';
import Footer from './Footer';

export default function Contact() {
 const [formData, setFormData] = useState({
 name: '',
 email: '',
 phone: '',
 subject: '',
 message: '',
 });
 const [submitted, setSubmitted] = useState(false);

 const handleChange = (e) => {
 setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
 };

 const handleSubmit = (e) => {
 e.preventDefault();
 // TODO: connect to backend / email service
 setSubmitted(true);
 setTimeout(() => setSubmitted(false), 5000);
 setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
 };

 return (
 <div className="bg-white text-emerald-950 antialiased leading-relaxed font-sans">
 {/* Nav */}
 <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-emerald-950/10">
 <div className="max-w-5xl mx-auto px-6 flex items-center justify-between h-18">
 <a href="/" className="flex items-center gap-3 no-underline">
 <svg className="w-9 h-9 rounded-2xl flex-shrink-0" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
 <rect x="6" y="6" width="88" height="88" rx="20" fill="#0F6E56" />
 <path d="M32 32 L68 68 M68 32 L32 68" stroke="#E1F5EE" strokeWidth="9" strokeLinecap="round" opacity="0.35" />
 <circle cx="50" cy="50" r="9" fill="#FFBF00" />
 </svg>
 <span className="font-serif font-bold text-xl text-emerald-950 leading-none">Tekki <span className="text-amber-500">Blaze</span></span>

 </a>
 <div className="flex items-center gap-6">
 <div className="hidden md:flex items-center gap-6">
 <a href="/privacy" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Privacy</a>
 <a href="/terms" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Terms</a>
 <a href="/refund" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Refund</a>
 <a href="/help" className="text-sm font-medium text-emerald-800/80 hover:text-emerald-700 hover:underline">Help &amp; FAQ</a>
 <a href="/contact" className="text-sm font-bold text-emerald-700 hover:underline">Contact</a>
 </div>
 <a href="/#get" className="bg-amber-500 hover:bg-amber-400 transition-colors text-emerald-950 font-bold text-xs px-4.5 py-2.5 rounded-xl no-underline">Get Tekki Blaze</a>
 </div>
 </div>
 </nav>

 {/* Header */}
 <header className="bg-gradient-to-b from-emerald-50/50 to-white border-b border-emerald-950/10 py-14">
 <div className="max-w-5xl mx-auto px-6">
 <div className="text-xs text-emerald-700/60 mb-3.5 tracking-wide"><a href="/" className="text-emerald-700 hover:underline">Home</a> › Contact Us</div>
 <h1 className="font-black tracking-tight text-4xl text-emerald-950 mb-2.5 font-inter">Contact Us</h1>
 <p className="text-base text-emerald-800 max-w-2xl">Have a question, need support, or want to explore bulk pricing? We’re here to help — reach out and we’ll get back to you promptly.</p>

 <div className="mt-4.5 flex flex-wrap gap-2.5">
 <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Mon–Fri, 10:00–18:00 IST</span>
 <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-950/10 rounded-full px-3.5 py-1.5">Typically replies within 24 hours</span>
 </div>
 </div>
 </header>

 {/* Main Content */}
 <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
 <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-14">

 {/* Left: Contact Info */}
 <div className="flex flex-col gap-6">
 {/* Address Card */}
 <div className="bg-emerald-50/60 border border-emerald-950/10 rounded-2xl p-6 transition-shadow hover:shadow-md">
 <div className="flex items-start gap-4">
 <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
 <circle cx="12" cy="10" r="3" />
 </svg>
 </div>
 <div>
 <h3 className="font-inter font-bold text-[16px] text-emerald-950 mb-1.5">Office Address</h3>
 <p className="text-[14px] text-emerald-800/80 leading-relaxed">
 Indiranagar, Bengaluru, India
 </p>
 </div>
 </div>
 </div>

 {/* Phone Card */}
 <div className="bg-emerald-50/60 border border-emerald-950/10 rounded-2xl p-6 transition-shadow hover:shadow-md">
 <div className="flex items-start gap-4">
 <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
 <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
 </svg>
 </div>
 <div>
 <h3 className="font-inter font-bold text-[16px] text-emerald-950 mb-1.5">Phone</h3>
 <p className="text-[14px] text-emerald-800/80 leading-relaxed">
 +91 80-XXXX-XXXX<br />
 <span className="text-xs text-emerald-600/70">Mon–Fri, 10:00 AM – 6:00 PM IST</span>
 </p>
 </div>
 </div>
 </div>

 {/* Email Card */}
 <div className="bg-emerald-50/60 border border-emerald-950/10 rounded-2xl p-6 transition-shadow hover:shadow-md">
 <div className="flex items-start gap-4">
 <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
 <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
 <polyline points="22,6 12,13 2,6" />
 </svg>
 </div>
 <div>
 <h3 className="font-inter font-bold text-[16px] text-emerald-950 mb-1.5">Email</h3>
 <div className="flex flex-col gap-2">
 <div>
 <span className="text-[13px] font-semibold text-emerald-700">General & Support</span>
 <p className="text-[14px] text-emerald-800/80"><a href="mailto:support@tekki-x.com" className="hover:underline">support@tekki-x.com</a></p>
 </div>
 <div>
 <span className="text-[13px] font-semibold text-emerald-700">Sales & Partnerships</span>
 <p className="text-[14px] text-emerald-800/80"><a href="mailto:support@tekki-x.com" className="hover:underline">support@tekki-x.com</a></p>
 </div>
 <div>
 <span className="text-[13px] font-semibold text-emerald-700">Privacy & Data Requests</span>
 <p className="text-[14px] text-emerald-800/80"><a href="mailto:support@tekki-x.com" className="hover:underline">support@tekki-x.com</a></p>
 </div>
 </div>
 </div>
 </div>
 </div>

 {/* Map placeholder */}
 <div className="bg-emerald-950 rounded-2xl overflow-hidden border border-emerald-950/10 h-[180px] flex items-center justify-center">
 <div className="text-center">
 <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#5DCAA5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2">
 <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
 <circle cx="12" cy="10" r="3" />
 </svg>
 <p className="text-emerald-400 text-sm font-medium">Indiranagar, Bengaluru</p>
 <p className="text-emerald-600 text-xs mt-1">India</p>
 </div>
 </div>
 </div>

 {/* Right: Contact Form */}
 <div>
 <div className="bg-white border border-emerald-950/10 rounded-2xl p-6 md:p-8 shadow-sm">
 <h2 className="font-inter font-black text-[22px] text-emerald-950 mb-1 tracking-tight">Send us a message</h2>
 <p className="text-[14px] text-emerald-800/70 mb-6">Fill in the form below and we’ll get back to you within 24 hours.</p>

 {submitted && (
 <div className="mb-6 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
 <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <path d="M9 12l2 2 4-4" />
 <circle cx="12" cy="12" r="9" />
 </svg>
 <span className="text-[14px] font-semibold text-emerald-800">Thank you! Your message has been sent. We’ll respond shortly.</span>
 </div>
 )}

 <form onSubmit={handleSubmit} className="flex flex-col gap-5">
 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
 {/* Name */}
 <div className="flex flex-col gap-1.5">
 <label htmlFor="contact-name" className="text-[13px] font-bold text-emerald-800 tracking-wide">Full Name <span className="text-red-500">*</span></label>
 <input
 id="contact-name"
 name="name"
 type="text"
 required
 value={formData.name}
 onChange={handleChange}
 placeholder="Your full name"
 className="w-full border border-emerald-950/15 rounded-xl px-4 py-3 text-[14px] text-emerald-950 bg-emerald-50/30 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 placeholder:text-emerald-400/60"
 />
 </div>

 {/* Email */}
 <div className="flex flex-col gap-1.5">
 <label htmlFor="contact-email" className="text-[13px] font-bold text-emerald-800 tracking-wide">Email Address <span className="text-red-500">*</span></label>
 <input
 id="contact-email"
 name="email"
 type="email"
 required
 value={formData.email}
 onChange={handleChange}
 placeholder="you@example.com"
 className="w-full border border-emerald-950/15 rounded-xl px-4 py-3 text-[14px] text-emerald-950 bg-emerald-50/30 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 placeholder:text-emerald-400/60"
 />
 </div>
 </div>

 <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
 {/* Phone */}
 <div className="flex flex-col gap-1.5">
 <label htmlFor="contact-phone" className="text-[13px] font-bold text-emerald-800 tracking-wide">Phone Number</label>
 <input
 id="contact-phone"
 name="phone"
 type="tel"
 value={formData.phone}
 onChange={handleChange}
 placeholder="+91 XXXXX XXXXX"
 className="w-full border border-emerald-950/15 rounded-xl px-4 py-3 text-[14px] text-emerald-950 bg-emerald-50/30 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 placeholder:text-emerald-400/60"
 />
 </div>

 {/* Subject */}
 <div className="flex flex-col gap-1.5">
 <label htmlFor="contact-subject" className="text-[13px] font-bold text-emerald-800 tracking-wide">Subject <span className="text-red-500">*</span></label>
 <select
 id="contact-subject"
 name="subject"
 required
 value={formData.subject}
 onChange={handleChange}
 className="w-full border border-emerald-950/15 rounded-xl px-4 py-3 text-[14px] text-emerald-950 bg-emerald-50/30 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 appearance-none cursor-pointer"
 >
 <option value="" disabled>Select a topic</option>
 <option value="support">Technical Support</option>
 <option value="sales">Sales & Partnerships</option>
 <option value="billing">Billing & Refunds</option>
 <option value="privacy">Privacy & Data Request</option>
 <option value="feedback">Feedback</option>
 <option value="other">Other</option>
 </select>
 </div>
 </div>

 {/* Message */}
 <div className="flex flex-col gap-1.5">
 <label htmlFor="contact-message" className="text-[13px] font-bold text-emerald-800 tracking-wide">Message <span className="text-red-500">*</span></label>
 <textarea
 id="contact-message"
 name="message"
 required
 rows={5}
 value={formData.message}
 onChange={handleChange}
 placeholder="Tell us how we can help..."
 className="w-full border border-emerald-950/15 rounded-xl px-4 py-3 text-[14px] text-emerald-950 bg-emerald-50/30 outline-none transition-all focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 placeholder:text-emerald-400/60 resize-vertical min-h-[120px]"
 />
 </div>

 {/* Submit */}
 <button
 type="submit"
 className="w-full sm:w-auto self-start bg-amber-500 hover:bg-amber-400 active:scale-[0.98] transition-all text-emerald-950 font-bold text-[15px] px-8 py-3.5 rounded-xl shadow-[0_8px_24px_rgba(239,159,39,0.28)] hover:shadow-[0_12px_32px_rgba(239,159,39,0.4)] cursor-pointer"
 >
 Send Message
 </button>

 <p className="text-xs text-emerald-600/60 leading-relaxed">
 By submitting this form, you agree to our <a href="/privacy" className="text-emerald-700 hover:underline">Privacy Policy</a>. We’ll only use your information to respond to your inquiry.
 </p>
 </form>
 </div>

 {/* Quick links */}
 <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
 <a href="/help" className="flex items-center gap-3 bg-emerald-50/60 border border-emerald-950/10 rounded-xl p-4 hover:shadow-md transition-all group no-underline">
 <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <circle cx="12" cy="12" r="10" /><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" /><line x1="12" y1="17" x2="12.01" y2="17" />
 </svg>
 </div>
 <div>
 <span className="font-inter font-bold text-[14px] text-emerald-950 block">Help & FAQ</span>
 <span className="text-[12px] text-emerald-700/70">Find instant answers</span>
 </div>
 </a>
 <a href="/refund" className="flex items-center gap-3 bg-emerald-50/60 border border-emerald-950/10 rounded-xl p-4 hover:shadow-md transition-all group no-underline">
 <div className="w-9 h-9 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0 group-hover:bg-emerald-200 transition-colors">
 <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0F6E56" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
 <polyline points="23 4 23 10 17 10" /><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
 </svg>
 </div>
 <div>
 <span className="font-inter font-bold text-[14px] text-emerald-950 block">Refund Policy</span>
 <span className="text-[12px] text-emerald-700/70">Know your options</span>
 </div>
 </a>
 </div>
 </div>
 </div>
 </div>

 {/* Footer */}
 <Footer />
 </div>
 );
}
