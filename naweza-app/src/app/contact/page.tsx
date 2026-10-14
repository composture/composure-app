import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { ContactForm } from '@/components/ContactForm';
import { PUBLIC_CONTACT_INFO } from '@/data/content';

export const metadata: Metadata = {
  title: 'Contact Composure — Talk to Us Today',
  description: 'Call, email, WhatsApp, or send a message to Composure (Pty) Ltd in Windhoek, Namibia. We reply within one business day.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12151A]">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-4xl font-extrabold text-[#0A2540] tracking-tight">Contact Us</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Reach us however is easiest for you. We answer every message within one business day.
        </p>

        <div className="mt-10 grid lg:grid-cols-12 gap-8 items-start">

          {/* Direct contact options */}
          <div className="lg:col-span-5 space-y-4">
            <a
              href={`tel:${PUBLIC_CONTACT_INFO.primaryPhone}`}
              className="block bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-[#0A2540]/30 transition-colors"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Call Us</span>
              <p className="text-lg font-bold text-[#0A2540] mt-1">{PUBLIC_CONTACT_INFO.primaryPhone}</p>
            </a>

            <a
              href={PUBLIC_CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-emerald-400 transition-colors"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">WhatsApp</span>
              <p className="text-lg font-bold text-emerald-700 mt-1">Message us anytime</p>
            </a>

            <a
              href={`mailto:${PUBLIC_CONTACT_INFO.primaryEmail}`}
              className="block bg-white rounded-2xl p-5 border border-slate-200 shadow-sm hover:border-[#0A2540]/30 transition-colors"
            >
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Email</span>
              <p className="text-lg font-bold text-[#0A2540] mt-1">{PUBLIC_CONTACT_INFO.primaryEmail}</p>
            </a>

            <div className="bg-[#0A2540] text-white rounded-2xl p-5">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Where We Are</span>
              <p className="text-sm text-slate-200 mt-1 leading-relaxed">
                Windhoek, Namibia<br />
                Serving businesses across Namibia and beyond.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
