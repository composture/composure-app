import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookingModalButton } from '@/components/BookingModalButton';
import { CORE_SERVICES } from '@/data/content';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return CORE_SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);
  if (!service) return { title: 'Not Found — Composure' };
  return {
    title: `${service.plainName} — Composure (Pty) Ltd`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = CORE_SERVICES.find((s) => s.slug === slug);

  if (!service) notFound();

  const others = CORE_SERVICES.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12151A]">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        <Link href="/services" className="text-sm font-bold text-[#0A2540] hover:underline">
          ← All Services
        </Link>

        <h1 className="mt-4 text-4xl font-extrabold text-[#0A2540] tracking-tight">{service.plainName}</h1>
        <p className="mt-2 text-lg text-slate-600">{service.title}</p>

        <p className="mt-6 text-base text-slate-700 leading-relaxed">{service.fullDescription}</p>

        <h2 className="mt-10 text-2xl font-bold text-[#0A2540]">What you get</h2>
        <ul className="mt-4 space-y-2">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-3 text-slate-700">
              <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
              <span>{d}</span>
            </li>
          ))}
        </ul>

        <div className="mt-10 bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#0A2540] font-bold">Interested in this? The first chat is free.</p>
          <BookingModalButton label="Talk About This" serviceId={service.id} />
        </div>

        {others.length > 0 && (
          <div className="mt-12">
            <h2 className="text-lg font-bold text-[#0A2540]">Other things we do</h2>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {others.map((o) => (
                <Link
                  key={o.id}
                  href={`/services/${o.slug}`}
                  className="bg-white rounded-xl p-4 border border-slate-200 hover:border-[#0A2540]/30 transition-colors text-sm font-bold text-[#0A2540]"
                >
                  {o.plainName} →
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
      <Footer />
    </main>
  );
}
