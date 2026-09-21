'use me';
'use client';

import React, { useState, useEffect } from 'react';
import {
    Mail, MapPin, Phone, Send, CheckCircle2,
    Globe, Shield, Building2, AlertCircle
} from 'lucide-react';
import { CONTACT_MAILBOXES, LEGAL_ENTITIES, PUBLIC_CONTACT_INFO } from '@/data/content';

export const ContactSection: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('submitting');

        const ref = 'NWZ-' + Math.floor(100000 + Math.random() * 900000);

        const messageText = [
            `📋 *NAWEZA CONSULTING — ${formData.subject ? formData.subject.toUpperCase() + ' Inquiry' : 'Advisory Enquiry'}*`,
            '',
            `*Reference:* ${ref}`,
            `*Client:* ${formData.name}`,
            `*Email:* ${formData.email}`,
            formData.phone ? `*Phone:* ${formData.phone}` : '',
            formData.subject ? `*Subject:* ${formData.subject}` : '',
            '',
            `*Message:*`,
            formData.message,
        ].filter(Boolean).join('\n');

        const encoded = encodeURIComponent(messageText);
        const whatsappUrl = `https://wa.me/264813107977?text=${encoded}`;

        // Open WhatsApp in new tab
        const tab = window.open(whatsappUrl, '_blank');

        // Fallback if popup blocked
        if (!tab || tab.closed || typeof tab.closed === 'undefined') {
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
            return;
        }

        setSubmitStatus('success');

        // Reset form after short delay
        setTimeout(() => {
            setSubmitStatus('idle');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: '',
            });
        }, 3000);
    };

    return (
        <section id="contact" className="py-20 bg-[#F4F1EA] text-[#12151A] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#0A2540] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                        Contact & Advisory Intake
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                        Connect With Our Corporate Advisory Team
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed">
                        Whether you require Namibian business advisory, tax & BIPA compliance support, or cross-border SADC market development, we are ready to assist.
                    </p>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* Left Column — Mailboxes & Location Info */}
                    <div className="lg:col-span-5 space-y-6">

                        {/* Primary Phone & WhatsApp Quick Card */}
                        <div className="bg-[#0A2540] text-white rounded-2xl p-6 border border-blue-900 shadow-md space-y-4">
                            <h3 className="text-lg font-bold text-white flex items-center gap-2">
                                <Phone className="w-5 h-5 text-emerald-400" />
                                Direct Business & WhatsApp Contact
                            </h3>

                            <div className="flex items-center justify-between bg-[#0F3460] p-3.5 rounded-xl border border-blue-800">
                                <div>
                                    <span className="text-[10px] text-slate-300 uppercase tracking-wider block">Primary Phone / WhatsApp</span>
                                    <a href="tel:+264****7977" className="font-bold text-base text-white hover:text-emerald-300 transition-colors">
                                        +264 81 310 7977
                                    </a>
                                </div>
                                <a
                                    href={PUBLIC_CONTACT_INFO.whatsappUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-3 py-1.5 rounded-lg text-xs font-bold transition-colors flex items-center gap-1.5"
                                >
                                    WhatsApp Us
                                </a>
                            </div>

                            <div className="flex items-center gap-3 pt-2">
                                <div className="w-10 h-10 rounded-xl bg-[#0F3460] flex items-center justify-center text-emerald-400 font-bold shrink-0">
                                    <MapPin className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-white">Head Office Location</h4>
                                    <p className="text-xs text-slate-300">Windhoek, Namibia (SADC Gateway)</p>
                                </div>
                            </div>

                            <div className="pt-3 border-t border-blue-900/80 text-xs text-slate-300 space-y-1.5">
                                <p><strong>Naweza Consulting Investments (Pty) Ltd:</strong> Primary Identity (Est. 2026)</p>
                                <p><strong>Naweza Investments CC:</strong> Operating Foundation (Est. 2018)</p>
                            </div>
                        </div>

                        {/* Domain Mailboxes Card */}
                        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md">
                            <h3 className="text-lg font-bold text-[#0A2540] mb-4 flex items-center gap-2">
                                <Mail className="w-5 h-5 text-blue-700" />
                                Official Email Contact
                            </h3>

                            <div className="space-y-3">
                                <a
                                    href="mailto:info@nawezaconsultingpty.com"
                                    className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 hover:border-blue-300 hover:bg-blue-50/50 transition-all block group"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="font-bold text-xs text-[#0A2540] group-hover:text-blue-700">General Enquiries (Primary)</span>
                                        <span className="text-[11px] font-mono text-blue-600">info@nawezaconsultingpty.com</span>
                                    </div>
                                    <span className="text-[10px] text-slate-400 block mt-0.5">Main Brand & Information Desk</span>
                                </a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column — Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl">
                            <h3 className="text-xl font-bold text-[#0A2540] mb-2">Send an Advisory Enquiry</h3>
                            <p className="text-xs text-slate-500 mb-6">
                                Complete the form below — your message opens in WhatsApp. Tap send when ready.
                            </p>

                            {/* Success State */}
                            {submitStatus === 'success' && (
                                <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-3">
                                    <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                                    <h4 className="font-bold text-lg">Enquiry Sent</h4>
                                    <p className="text-xs text-emerald-700">
                                        WhatsApp opened with your message pre-filled. Tap send to reach our team.
                                    </p>
                                </div>
                            )}

                            {/* Error State (popup blocked) */}
                            {submitStatus === 'error' && (
                                <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-xl text-center space-y-3">
                                    <AlertCircle className="w-10 h-10 text-red-600 mx-auto" />
                                    <h4 className="font-bold text-lg">WhatsApp Could Not Open</h4>
                                    <p className="text-xs text-red-700">
                                        Please allow popups for this site, or copy the number below and message us directly: +264 81 310 7977
                                    </p>
                                </div>
                            )}

                            {/* Form */}
                            {submitStatus !== 'success' && submitStatus !== 'error' && (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                                Your Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="John Doe"
                                                value={formData.name}
                                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                                Corporate Email *
                                            </label>
                                            <input
                                                type="email"
                                                required
                                                placeholder="john@company.com"
                                                value={formData.email}
                                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                                Phone / WhatsApp (Optional)
                                            </label>
                                            <input
                                                type="tel"
                                                placeholder="+264 81 ... / +1 ..."
                                                value={formData.phone}
                                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                                Subject / Focus *
                                            </label>
                                            <input
                                                type="text"
                                                required
                                                placeholder="e.g. BIPA Compliance / SADC Entry"
                                                value={formData.subject}
                                                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                            Message / Project Details *
                                        </label>
                                        <textarea
                                            rows={4}
                                            required
                                            placeholder="Detail your requirements..."
                                            value={formData.message}
                                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                            className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={submitStatus === 'submitting'}
                                        className="w-full bg-[#0A2540] hover:bg-[#0F3460] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {submitStatus === 'submitting' ? (
                                            <span className="flex items-center gap-2">
                                                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                                </svg>
                                                Opening WhatsApp...
                                            </span>
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4" />
                                                Send via WhatsApp
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
