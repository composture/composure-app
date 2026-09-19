'use client';

import React, { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { ServicesSection } from '@/components/ServicesSection';
import { AfricaMarketSection } from '@/components/AfricaMarketSection';
import { CaseStudiesSection } from '@/components/CaseStudiesSection';
import { InsightsSection } from '@/components/InsightsSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { BookingModal } from '@/components/BookingModal';

export default function Home() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedServiceId(undefined);
  };

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#12151A]">
      {/* Sticky Top Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Hero Section */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* About & Legal Entities Section */}
      <AboutSection />

      {/* 7 Core Services Grid */}
      <ServicesSection onOpenBooking={handleOpenBooking} />

      {/* Africa Market Development (Pty Ltd - Established 2026) */}
      <AfricaMarketSection onOpenBooking={handleOpenBooking} />

      {/* Verified Client Case Studies */}
      <CaseStudiesSection />

      {/* Research & Insights Feed */}
      <InsightsSection />

      {/* Contact & Mailbox Routing Section */}
      <ContactSection />

      {/* Corporate Footer */}
      <Footer />

      {/* Interactive Consultation Booking Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={selectedServiceId}
      />
    </main>
  );
}
