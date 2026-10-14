import type { Metadata } from 'next';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CORE_SERVICES } from '@/data/content';

export const metadata: Metadata = {
  title: 'What We Do — Composure (Pty) Ltd',
  description: 'Websites, apps, custom software, automation, dashboards, and AI — explained in plain language. See what Composure can build for your Namibian business.',
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12151A]">
      <Navbar />
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <h1 className="text-4xl font-extrabold text-[#0A2540] tracking-tight">What We Do</h1>
        <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-2xl">
          Seven things we build for businesses. Click any one to see exactly what you get — in plain language, no jargon.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {CORE_SERVICES.map((s) => (
            <Link
              key={s.id}
              href={`/services/${s.slug}`}
              className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:shadow-md hover:border-[#0A2540]/30 transition-all group"
            >
              <h2 className="text-xl font-bold text-[#0A2540] group-hover:underline">{s.plainName}</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.shortDescription}</p>
              <span className="mt-4 inline-block text-sm font-bold text-[#0A2540]">
                Read more →
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-12 bg-[#0A2540] text-white rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-extrabold">Not sure which one you need?</h2>
          <p className="mt-2 text-slate-300 text-sm">
            That is completely normal. Book a free chat and we will point you in the right direction — even if it is not with us.
          </p>
          <Link
            href="/contact"
            className="mt-5 inline-block bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-7 py-3 rounded-xl font-bold text-sm transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
