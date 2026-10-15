'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Calendar, Phone, Mail } from 'lucide-react';
import { PUBLIC_CONTACT_INFO } from '@/data/content';

interface NavbarProps {
  onOpenBooking?: (serviceId?: string) => void;
}

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'What We Do' },
  { href: '/contact', label: 'Contact' },
];

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking = () => {} }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Top contact bar */}
      <div className="bg-[#0A2540] text-white text-xs py-2 border-b border-[#0F3460]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex justify-center md:justify-between items-center gap-4">
          <span className="flex items-center gap-1.5 text-gray-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <strong>COMPOSURE</strong> — Windhoek, Namibia
          </span>
          <div className="flex items-center gap-4 text-gray-300 text-xs">
            <a href={PUBLIC_CONTACT_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1.5 transition-colors">
              <Phone className="w-3.5 h-3.5 text-emerald-400" />
              WhatsApp us
            </a>
            <span className="hidden sm:inline text-gray-600">•</span>
            <a href={`mailto:${PUBLIC_CONTACT_INFO.primaryEmail}`} className="hover:text-white flex items-center gap-1.5 transition-colors">
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              {PUBLIC_CONTACT_INFO.primaryEmail}
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
          ? 'bg-[#F4F1EA]/95 backdrop-blur-md shadow-sm border-b border-slate-200 py-3'
          : 'bg-[#F4F1EA] py-4'
        }`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.jpeg"
                alt="Composure (Pty) Ltd"
                className="h-10 w-auto object-contain rounded shadow-sm border border-slate-200"
              />
              <div className="flex flex-col">
                <span className="font-extrabold text-lg tracking-tight text-[#0A2540] leading-none">
                  COMPOSURE
                </span>
                <span className="text-[9px] font-bold tracking-wider uppercase text-[#0F3460] mt-0.5">
                  (PTY) LTD
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-[#12151A]">
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-[#0A2540] transition-colors py-1">
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center gap-3">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#0A2540] hover:bg-[#0F3460] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-colors flex items-center gap-2 shadow-sm cursor-pointer"
              >
                <Calendar className="w-4 h-4" />
                Talk to Us
              </button>
            </div>

            <div className="lg:hidden flex items-center gap-2">
              <button
                onClick={() => onOpenBooking()}
                className="bg-[#0A2540] text-white p-2 rounded-md text-xs font-medium flex items-center gap-1"
              >
                <Calendar className="w-3.5 h-3.5" />
                Talk to Us
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#0A2540] hover:bg-slate-200 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F4F1EA] border-b border-slate-300 px-4 pt-3 pb-6 space-y-3 font-medium text-slate-800 shadow-xl">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 px-3 hover:bg-slate-200 rounded-md"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </>
  );
};
