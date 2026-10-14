'use client';

import React, { useState, useEffect } from 'react';
import {
  X, Calendar, CheckCircle2,
  Mail, ArrowRight, Check
} from 'lucide-react';
import { CORE_SERVICES } from '@/data/content';

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

  const handleSubmitBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');
    setErrorMsg('');

    const ref = 'CMP-' + Math.floor(100000 + Math.random() * 900000);
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
      const data = await res.json();
      clearTimeout(timeoutId);

      if (!res.ok) {
        throw new Error(data.message || `Server error (${res.status})`);
      }
      if (!data.success) {
        throw new Error(data.message || 'Submission failed');
      }

      setStep(3);
    } catch (err) {
      setSubmitStatus('idle');
      if (err instanceof Error && err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please check your connection and try again.');
      } else {
        setErrorMsg(err instanceof Error ? err.message : 'Submission failed. Please try again.');
      }
    }
  };

  const inputClass = "w-full bg-slate-50 border border-slate-300 rounded-lg p-2.5 text-sm focus:outline-none focus:border-[#0A2540]";

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-0 sm:p-4 overflow-y-auto">
      <div className="bg-white rounded-2xl w-full max-w-lg sm:max-w-xl p-4 sm:p-8 shadow-2xl border border-slate-200 relative text-[#12151A] max-h-[90vh] overflow-y-auto">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-200">
          <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center">
            <Calendar className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-[#0A2540]">Talk to Us</h3>
            <p className="text-xs text-slate-500">Free, no-obligation chat — about 30 minutes</p>
          </div>
        </div>

        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-2">
                What do you need help with?
              </label>
              <div className="space-y-2">
                {CORE_SERVICES.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between gap-2 ${selectedServiceId === s.id
                        ? 'border-[#0A2540] bg-blue-50/80 ring-2 ring-[#0A2540]/20'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                      }`}
                  >
                    <span className="font-bold text-sm text-[#0A2540]">{s.plainName}</span>
                    {selectedServiceId === s.id && <Check className="w-4 h-4 text-blue-700 shrink-0" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                  Preferred Date
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                  Preferred Time
                </label>
                <select
                  value={preferredTime}
                  onChange={(e) => setPreferredTime(e.target.value)}
                  className={inputClass}
                >
                  <option value="09:00 AM">09:00 (Windhoek time)</option>
                  <option value="10:30 AM">10:30 (Windhoek time)</option>
                  <option value="02:00 PM">14:00 (Windhoek time)</option>
                  <option value="03:30 PM">15:30 (Windhoek time)</option>
                </select>
              </div>
            </div>

            <div className="flex justify-end pt-4 border-t border-slate-200">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-[#0A2540] hover:bg-[#0F3460] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                Next — Your Details
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {step === 2 && (
          <form onSubmit={handleSubmitBooking} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder="John Doe"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  maxLength={100}
                  placeholder="john@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                  Business Name *
                </label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  placeholder="Acme Store"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                  Phone / WhatsApp
                </label>
                <input
                  type="tel"
                  maxLength={20}
                  placeholder="+264 81 123 4567"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={inputClass}
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">
                Anything we should know? (Optional)
              </label>
              <textarea
                rows={3}
                maxLength={500}
                placeholder="Tell us briefly what you need..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                className={`${inputClass} resize-none`}
              ></textarea>
            </div>

            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-800 p-3 rounded-lg text-sm">
                {errorMsg}
              </div>
            )}

            <div className="flex items-center justify-between pt-4 border-t border-slate-200 flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs font-bold text-slate-500 hover:text-slate-800 text-center sm:text-left"
              >
                ← Back
              </button>
              <button
                type="submit"
                disabled={submitStatus === 'submitting'}
                className="bg-[#0A2540] hover:bg-[#0F3460] text-white px-7 py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 shadow-md disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                {submitStatus === 'submitting' ? 'Sending...' : (
                  <>
                    Send Request
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

        {step === 3 && (
          <div className="text-center py-6 space-y-5">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <div>
              <h4 className="text-2xl font-extrabold text-[#0A2540] mt-2">
                We got your request
              </h4>
              <p className="text-sm text-slate-500 mt-1">
                Reference: <span className="font-mono font-bold">{bookingRef}</span><br />
                We will confirm by email within one business day.
              </p>
            </div>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-left text-xs text-slate-700 space-y-1">
              <div className="flex justify-between"><span className="text-slate-500">Topic:</span> <span className="font-bold text-[#0A2540]">{selectedService.plainName}</span></div>
              <div className="flex justify-between"><span className="text-slate-500">Name:</span> <span className="font-bold text-[#0A2540]">{fullName}</span></div>
            </div>
            <p className="text-xs text-slate-400 italic flex items-center justify-center gap-1">
              <Mail className="w-3.5 h-3.5" /> Sent to info@composuretech.com
            </p>
            <button
              onClick={onClose}
              className="bg-[#0A2540] text-white px-8 py-3 rounded-xl font-bold text-sm hover:bg-[#0F3460] w-full sm:w-auto"
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
