import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookingModalButton } from '@/components/BookingModalButton';

export const metadata: Metadata = {
  title: 'About Composure — Plain-Speak Technology for Namibian Businesses',
  description: 'Composure (Pty) Ltd is a Windhoek technology company that builds websites, apps, and automation for businesses across Namibia. Learn who we are and how we work.',
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12151A]">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-4xl font-extrabold text-[#0A2540] tracking-tight">About Composure</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed">
          Composure (Pty) Ltd is a technology company based in Windhoek, Namibia. We build websites, apps, and automation that make everyday business work easier — for shops, lodges, farms, clinics, and companies across the country.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">Why we exist</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Most software is built somewhere else, for somewhere else. It expects fast internet, perfect English, and a big IT team. Namibian businesses deserve tools that fit how they actually work — on a farm, in a bar, at a lodge, on a slow connection — and that they can afford and understand.
        </p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">How we work</h2>
        <ul className="mt-3 space-y-2 text-slate-600 leading-relaxed list-disc pl-5">
          <li><strong>We listen first.</strong> Every project starts with a free conversation about how your business runs.</li>
          <li><strong>We speak plainly.</strong> You get clear explanations and fixed prices — no jargon, no surprise bills.</li>
          <li><strong>We build for real conditions.</strong> Offline-ready, mobile-friendly, and built to last.</li>
          <li><strong>We train your team.</strong> You leave knowing how to use what we built — and you own it.</li>
        </ul>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">Who we work with</h2>
        <p className="mt-3 text-slate-600 leading-relaxed">
          Shops and bars, lodges and restaurants, farms, transport and logistics companies, schools, clinics, and professional firms. If your business does repetitive work by hand, we can probably help.
        </p>

        <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#0A2540] font-bold">Ready to talk? The first chat is free.</p>
          <BookingModalButton />
        </div>

        <p className="mt-8 text-sm text-slate-500">
          Want to see what we actually build? <Link href="/services" className="text-[#0A2540] font-bold underline">See what we do</Link> or <Link href="/contact" className="text-[#0A2540] font-bold underline">contact us directly</Link>.
        </p>
      </section>
      <Footer />
    </main>
  );
}
