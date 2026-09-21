'use me';
'use client';

import React, { useState, useEffect } from 'react';
import {
    X, Calendar, Clock, CheckCircle2, Building2,
    ShieldCheck, Globe, User, Mail, Phone, FileText, ArrowRight, Check
} from 'lucide-react';
import { CORE_SERVICES, LEGAL_ENTITIES } from '@/data/content';

interface BookingModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialServiceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialServiceId }) => {
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [selectedServiceId, setSelectedServiceId] = useState<string>(initialServiceId || CORE_SERVICES[0].id);
    const [preferredDate, setPreferredDate] = useState<string>('');
    const [preferredTime, setPreferredTime] = useState<string>('10:00 AM');

    // Client Form Details
    const [fullName, setFullName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [company, setCompany] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [notes, setNotes] = useState<string>('');

    const [bookingRef, setBookingRef] = useState<string>('');
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'done'>('idle');
    const [errorMsg, setErrorMsg] = useState<string>('');

    useEffect(() => {
        if (initialServiceId) {
            setSelectedServiceId(initialServiceId);
        }
    }, [initialServiceId]);

    // Reset when modal reopens or closes
    useEffect(() => {
        if (isOpen) {
            setStep(1);
            setSelectedServiceId(initialServiceId || CORE_SERVICES[0].id);
            setBookingRef('');
            setErrorMsg('');
            setSubmitStatus('idle');
            setPreferredDate('');
            setPreferredTime('10:00 AM');
            setFullName('');
            setEmail('');
            setCompany('');
            setPhone('');
            setNotes('');
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const selectedService = CORE_SERVICES.find(s => s.id === selectedServiceId) || CORE_SERVICES[0];
    const assignedEntity = LEGAL_ENTITIES[selectedService.entityId];
    const isPtyRoute = selectedService.entityId === 'pty';

    const handleSubmitBooking = async (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitStatus('submitting');
        setErrorMsg('');

        const ref = 'NWZ-' + Math.floor(100000 + Math.random() * 900000);
        setBookingRef(ref);

        try {
            const payload = {
                fullName,
                email,
                company,
                phone,
                serviceId: selectedServiceId,
                preferredDate,
                preferredTime,
                notes,
                bookingRef: ref,
            };

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), 15000);

            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
                signal: controller.signal,
            });
            clearTimeout(timeoutId);

            const data = await res.json();
            console.log('Booking API response:', data);

            if (!res.ok) {
                throw new Error(data.message || `Server error (${res.status})`);
            }
            if (!data.success) {
                throw new Error(data.message || 'Submission failed');
            }

            if (data.type === 'whatsapp') {
                // Small delay so the user sees the "done" state before WhatsApp opens
                setTimeout(() => {
                    window.open(data.whatsappUrl, '_blank');
                }, 400);
            }
            setStep(3);
        } catch (err) {
            setSubmitStatus('idle');
            if (err instanceof Error && err.name === 'AbortError') {
                setErrorMsg('Request timed out. Please check your connection and try again.');
            } else {
                setErrorMsg(err instanceof Error ? err.message : 'Submission failed. Please try again.');
            }
            console.error('Booking submission error:', err);
        }
    };

    return (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 text-[#12151A]">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                >
                    <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
                    <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center font-bold">
                        <Calendar className="w-5 h-5 text-blue-300" />
                    </div>
                    <div>
                        <h3 className="text-xl font-bold text-[#0A2540]">Book a Consultation</h3>
                        <p className="text-xs text-slate-500">NAWEZA CONSULTING • Official Engagement Portal</p>
                    </div>
                </div>

                {/* Step Progress Indicator */}
                <div className="flex items-center justify-between mb-8 px-4">
                    <div className={`flex items-center gap-2 text-xs font-bold ${step >= 1 ? 'text-[#0A2540]' : 'text-slate-400'}`}>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 1 ? 'bg-[#0A2540] text-white' : 'bg-slate-200'}`}>1</span>
                        <span>Select Service</span>
                    </div>
                    <div className="h-0.5 w-12 bg-slate-200"></div>
                    <div className={`flex items-center gap-2 text-xs font-bold ${step >= 2 ? 'text-[#0A2540]' : 'text-slate-400'}`}>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step >= 2 ? 'bg-[#0A2540] text-white' : 'bg-slate-200'}`}>2</span>
                        <span>Client Details</span>
                    </div>
                    <div className="h-0.5 w-12 bg-slate-200"></div>
                    <div className={`flex items-center gap-2 text-xs font-bold ${step === 3 ? 'text-emerald-600' : 'text-slate-400'}`}>
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${step === 3 ? 'bg-emerald-600 text-white' : 'bg-slate-200'}`}>3</span>
                        <span>Confirmation</span>
                    </div>
                </div>

                                {/* Entity Routing Indicator */}
                                <div className="p-3 rounded-xl mb-6 border text-xs flex items-center gap-2" 
                                    style={{
                                        backgroundColor: isPtyRoute ? '#EBF5FF' : '#F0F8FF',
                                        borderColor: isPtyRoute ? '#3B82F6' : '#CBD5E1',
                                        color: isPtyRoute ? '#1D4ED8' : '#475569'
                                    }}>
                                    <ShieldCheck className="w-4 h-4" />
                                    <span>
                                        Routing: <strong>{assignedEntity.shortName}</strong> → {isPtyRoute ? 'Email: info@nawezaconsultingpty.com' : 'WhatsApp'}
                                    </span>
                                </div>

                                {/* STEP 1: Select Service & Date */}
                {step === 1 && (
                    <div className="space-y-6">
                        <div>
                            <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-2">
                                1. Select Advisory / Market Service
                            </label>
                            <div className="grid sm:grid-cols-2 gap-3 max-h-56 overflow-y-auto p-1">
                                {CORE_SERVICES.map((s) => (
                                    <button
                                        key={s.id}
                                        type="button"
                                        onClick={() => setSelectedServiceId(s.id)}
                                        className={`p-3 rounded-xl border text-left transition-all ${selectedServiceId === s.id
                                                ? 'border-[#0A2540] bg-blue-50/80 shadow-sm ring-2 ring-[#0A2540]/20'
                                                : 'border-slate-200 hover:border-slate-300 bg-white'
                                            }`}
                                    >
                                        <div className="flex items-center justify-between mb-1">
                                            <span className="font-bold text-xs text-[#0A2540]">{s.title}</span>
                                            {selectedServiceId === s.id && <Check className="w-4 h-4 text-blue-700" />}
                                        </div>
                                        <span className="text-[10px] text-slate-500 block">
                                            Entity: {LEGAL_ENTITIES[s.entityId].shortName}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Entity Disclosure Note */}
                        <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                            <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                            <div>
                                <strong>Contracting Entity:</strong> {assignedEntity.name} ({assignedEntity.badgeText})
                                <p className="text-[11px] text-slate-500 mt-0.5">{assignedEntity.positioningText}</p>
                            </div>
                        </div>

                        {/* Date & Time Picker */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                    Preferred Date
                                </label>
                                <input
                                    type="date"
                                    required
                                    value={preferredDate}
                                    onChange={(e) => setPreferredDate(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                    Preferred Time Slot
                                </label>
                                <select
                                    value={preferredTime}
                                    onChange={(e) => setPreferredTime(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                >
                                    <option value="09:00 AM">09:00 AM CAT (Windhoek)</option>
                                    <option value="10:30 AM">10:30 AM CAT (Windhoek)</option>
                                    <option value="02:00 PM">02:00 PM CAT (Windhoek)</option>
                                    <option value="03:30 PM">03:30 PM CAT (Windhoek)</option>
                                </select>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4 border-t border-slate-200">
                            <button
                                type="button"
                                onClick={() => setStep(2)}
                                className="bg-[#0A2540] hover:bg-[#0F3460] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2"
                            >
                                Continue to Client Details
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* STEP 2: Client Details */}
                {step === 2 && (
                    <form onSubmit={handleSubmitBooking} className="space-y-4">
                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. John Doe"
                                    value={fullName}
                                    onChange={(e) => setFullName(e.target.value)}
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
                                    placeholder="name@company.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                />
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                    Company / Entity Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    placeholder="e.g. Acme Corp"
                                    value={company}
                                    onChange={(e) => setCompany(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                />
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                    Phone / WhatsApp
                                </label>
                                <input
                                    type="tel"
                                    placeholder="+264 81 123 4567"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                                Project Scope / Engagement Overview
                            </label>
                            <textarea
                                rows={3}
                                placeholder="Briefly describe your objectives or statutory/market questions..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                className="w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-xs font-medium focus:outline-none focus:border-[#0A2540]"
                            ></textarea>
                        </div>

                        <div className="mt-3">
                            {errorMsg && (
                                <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-xs flex items-start gap-2">
                                    <svg className="w-4 h-4 shrink-0 mt-0.5 text-red-600" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
                                    </svg>
                                    <span>{errorMsg}</span>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <button
                                type="button"
                                onClick={() => setStep(1)}
                                className="text-xs font-bold text-slate-500 hover:text-slate-800"
                            >
                                ← Back to Service Selection
                            </button>

                            <button
                                type="submit"
                                disabled={submitStatus === 'submitting'}
                                className="bg-[#0A2540] hover:bg-[#0F3460] text-white px-7 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {submitStatus === 'submitting' ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Sending...
                                    </span>
                                ) : (
                                    <>
                                        Confirm & Book Consultation
                                        <ArrowRight className="w-4 h-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                )}

                {/* STEP 3: Confirmation Receipt */}
                {step === 3 && (
                    <div className="text-center py-6 space-y-6">
                        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                            <CheckCircle2 className="w-10 h-10" />
                        </div>

                        <div>
                            <span className="text-xs font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                                Booking Request Confirmed
                            </span>
                            <h4 className="text-2xl font-extrabold text-[#0A2540] mt-2">
                                Consultation Reference: {bookingRef}
                            </h4>
                            <p className="text-xs text-slate-500 mt-1">
                                {isPtyRoute
                                    ? 'A copy of your booking request has been sent via email to our advisory team.'
                                    : 'Your message has been pre-filled in WhatsApp. Tap send when ready.'}
                            </p>
                        </div>

                        <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left space-y-2 text-xs text-slate-700">
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-slate-500">Service Requested:</span>
                                <span className="font-bold text-[#0A2540]">{selectedService.title}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-slate-500">Legal Entity Assigned:</span>
                                <span className="font-bold text-[#0A2540]">{assignedEntity.shortName}</span>
                            </div>
                            <div className="flex justify-between border-b pb-2">
                                <span className="text-slate-500">Scheduled Date & Time:</span>
                                <span className="font-bold text-[#0A2540]">{preferredDate || 'To be finalized'} ({preferredTime})</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-slate-500">Client Representative:</span>
                                <span className="font-bold text-[#0A2540]">{fullName} ({company})</span>
                            </div>
                        </div>

                        <p className="text-xs text-slate-500 italic">
                            Routing: <strong>{assignedEntity.shortName}</strong> → {isPtyRoute ? 'Email' : 'WhatsApp'} — {isPtyRoute ? 'info@nawezaconsultingpty.com' : '+264 81 310 7977'}
                        </p>

                        <button
                            onClick={onClose}
                            className="bg-[#0A2540] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#0F3460] shadow-md"
                        >
                            Done & Close Window
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};
