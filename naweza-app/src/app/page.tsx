'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';
import { HeroAnimation } from '@/components/HeroAnimation';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12151A]">
      <Navbar onOpenBooking={() => setIsBookingOpen(true)} />

      {/* Animated hero: CSS/SVG motion backdrop + headline */}
      <section className="relative overflow-hidden">
        <HeroAnimation />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 py-24 sm:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
            We make technology work for your business
          </h1>
          <p className="mt-6 text-lg text-slate-200 leading-relaxed">
            Composure is a Windhoek company that builds websites, apps, and automation for businesses across Namibia.
          </p>
          <div className="mt-4 space-y-1 text-base text-slate-300">
            <p>Simple websites that bring you customers.</p>
            <p>Systems and apps that run your daily work.</p>
            <p>Automation and AI that save your team time.</p>
          </div>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              onClick={() => setIsBookingOpen(true)}
              className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold text-base shadow-lg transition-colors w-full sm:w-auto"
            >
              Talk to Us — It&apos;s Free
            </button>
            <Link
              href="/services"
              className="border-2 border-white/80 text-white hover:bg-white hover:text-[#0A2540] px-8 py-3.5 rounded-xl font-bold text-base transition-colors w-full sm:w-auto text-center"
            >
              See What We Do
            </Link>
          </div>
        </div>
      </section>

      {/* 3 simple blocks */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h2 className="font-bold text-[#0A2540] text-lg">We keep it simple</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We explain everything in plain language. No jargon, no confusing quotes — you always know what you are getting and what it costs.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h2 className="font-bold text-[#0A2540] text-lg">Built for real conditions</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            We build for Namibia — systems that work with slow internet, offline use when needed, and support that answers when you call.
          </p>
        </div>
        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
          <h2 className="font-bold text-[#0A2540] text-lg">You own everything</h2>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            Your code, your data, your accounts. We build it, hand it over, and train your team. You are never locked in.
          </p>
        </div>
      </section>

      {/* Big CTA */}
      <section className="bg-[#0A2540] text-white py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-extrabold">Not sure where to start?</h2>
          <p className="mt-3 text-slate-300 text-base">
            Book a free 30-minute chat. We will listen to how your business runs and tell you honestly what can be improved.
          </p>
          <button
            onClick={() => setIsBookingOpen(true)}
            className="mt-6 bg-emerald-500 hover:bg-emerald-400 text-slate-950 px-8 py-3.5 rounded-xl font-bold text-base transition-colors"
          >
            Book a Free Chat
          </button>
        </div>
      </section>

      <Footer />

      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
      />
    </main>
  );
}
