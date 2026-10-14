'use client';

import React from 'react';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { PUBLIC_CONTACT_INFO } from '@/data/content';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A2540] text-white pt-12 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-10 border-b border-blue-900/80">

          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src="/logo.jpeg"
                alt="Composure (Pty) Ltd"
                className="h-14 w-14 object-contain rounded-full bg-white p-1.5 border border-blue-500/40"
              />
              <div>
                <h3 className="text-lg font-extrabold tracking-tight text-white leading-none">COMPOSURE</h3>
                <span className="text-[10px] font-bold tracking-wider text-emerald-400 uppercase block mt-1">(PTY) LTD</span>
              </div>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              We build websites, apps, and automation that make everyday business work easier.
            </p>
            <div className="space-y-1.5 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-emerald-400" />
                <a href={`tel:${PUBLIC_CONTACT_INFO.primaryPhone}`} className="hover:underline font-bold text-white">{PUBLIC_CONTACT_INFO.primaryPhone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <a href={`mailto:${PUBLIC_CONTACT_INFO.primaryEmail}`} className="hover:underline">{PUBLIC_CONTACT_INFO.primaryEmail}</a>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-blue-300 uppercase tracking-widest">Pages</h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">What We Do</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-xs font-bold text-blue-300 uppercase tracking-widest">Get in Touch</h4>
            <p className="text-[11px] text-slate-400">
              Composure (Pty) Ltd<br />
              Registered in Windhoek, Namibia<br />
              Serving Namibia and beyond.
            </p>
            <a
              href={PUBLIC_CONTACT_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-emerald-600 hover:bg-emerald-500 text-white px-4 py-2 rounded-lg text-xs font-bold transition-colors"
            >
              Message us on WhatsApp
            </a>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 COMPOSURE (PTY) LTD. All rights reserved.</p>
          <span>Windhoek, Namibia</span>
        </div>
      </div>
    </footer>
  );
};
