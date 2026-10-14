'use client';

import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const [bookingRef, setBookingRef] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 15000);

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
        signal: controller.signal,
      });
      const data = await res.json();
      clearTimeout(timeoutId);

      if (!res.ok || !data.success) {
        throw new Error(data.message || 'Submission failed');
      }

      setSubmitStatus('success');
      setBookingRef(data.ref || '');
    } catch (err) {
      setSubmitStatus('error');
      if (err instanceof Error && err.name === 'AbortError') {
        setErrorMsg('Request timed out. Please check your connection and try again.');
      } else {
        setErrorMsg(err instanceof Error ? err.message : 'Submission failed. Please try again.');
      }
    }
  };

  useEffect(() => {
    if (submitStatus === 'success') {
      setTimeout(() => {
        setSubmitStatus('idle');
        setBookingRef('');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      }, 4000);
    }
  }, [submitStatus]);

  const inputClass = "w-full bg-slate-50 border border-slate-300 rounded-lg p-3 text-sm focus:outline-none focus:border-[#0A2540]";

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md">
      <h3 className="text-xl font-bold text-[#0A2540] mb-1">Send Us a Message</h3>
      <p className="text-sm text-slate-500 mb-6">
        Fill in the form and we will get back to you within one business day.
      </p>

      {submitStatus === 'success' && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 p-6 rounded-xl text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
          <h4 className="font-bold text-lg">Message Sent</h4>
          <p className="text-xs text-emerald-700">
            Thanks — we have your message and will reply within 1 business day.
          </p>
          {bookingRef && (
            <p className="text-xs text-slate-500">Reference: <span className="font-mono font-bold text-[#0A2540]">{bookingRef}</span></p>
          )}
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 p-6 rounded-xl text-center space-y-3">
          <AlertCircle className="w-10 h-10 text-red-600 mx-auto" />
          <h4 className="font-bold text-lg">Something Went Wrong</h4>
          <p className="text-xs text-red-700">
            {errorMsg || 'Please try again or email us directly at info@composuretech.com'}
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="bg-[#0A2540] text-white px-6 py-2 rounded-lg text-xs font-bold"
          >
            Try Again
          </button>
        </div>
      )}

      {submitStatus !== 'success' && submitStatus !== 'error' && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">Your Name *</label>
              <input
                type="text"
                required
                maxLength={100}
                placeholder="John Doe"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">Email *</label>
              <input
                type="email"
                required
                maxLength={100}
                placeholder="john@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">Phone / WhatsApp</label>
              <input
                type="tel"
                maxLength={20}
                placeholder="+264 81 ..."
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className={inputClass}
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">What is it about? *</label>
              <input
                type="text"
                required
                maxLength={150}
                placeholder="Website, app, automation..."
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-[#0A2540] uppercase tracking-wider mb-1">Message *</label>
            <textarea
              rows={4}
              required
              maxLength={1000}
              placeholder="Tell us what you need..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className={`${inputClass} resize-none`}
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className="w-full bg-[#0A2540] hover:bg-[#0F3460] text-white py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2 shadow-sm transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitStatus === 'submitting' ? 'Sending...' : (
              <>
                <Send className="w-4 h-4" />
                Send Message
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
};
