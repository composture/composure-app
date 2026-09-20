'use me';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Menu, X, Calendar, ChevronDown, Globe, Shield,
    Building2, Phone, Mail, ArrowRight, Info
} from 'lucide-react';
import { LEGAL_ENTITIES } from '@/data/content';

interface NavbarProps {
    onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [entityModalOpen, setEntityModalOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Legal Entity Bar */}
            <div className="bg-[#0A2540] text-white text-xs py-2 border-b border-[#0F3460] font-sans">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex flex-col md:flex-row justify-between items-center gap-2">
                    <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
                        <span className="flex items-center gap-1.5 text-gray-300">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                            <strong>NAWEZA CONSULTING INVESTMENTS (PTY) LTD</strong> — Systems | Strategy | Growth
                        </span>
                        <span className="hidden lg:inline text-gray-500">|</span>
                        <button
                            onClick={() => setEntityModalOpen(true)}
                            className="hover:text-white text-gray-300 underline underline-offset-2 flex items-center gap-1 transition-colors"
                        >
                            <Info className="w-3.5 h-3.5 text-blue-400" />
                            Entity Governance (Est. 2018 & 2026)
                        </button>
                    </div>
                    <div className="flex items-center gap-4 text-gray-300 text-xs">
                        <a href="tel:+264813107977" className="hover:text-white flex items-center gap-1.5 transition-colors">
                            <Phone className="w-3.5 h-3.5 text-emerald-400" />
                            +264 81 310 7977
                        </a>
                        <span className="hidden sm:inline text-gray-600">•</span>
                        <a href="mailto:info@nawezaconsultingpty.com" className="hover:text-white flex items-center gap-1.5 transition-colors">
                            <Mail className="w-3.5 h-3.5 text-blue-400" />
                            info@nawezaconsultingpty.com
                        </a>
                        <span className="hidden sm:inline text-gray-600">•</span>
                        <span className="hidden sm:flex items-center gap-1 text-gray-400">
                            <Globe className="w-3.5 h-3.5 text-emerald-400" />
                            Windhoek, Namibia
                        </span>
                    </div>
                </div>
            </div>

            {/* Main Sticky Navbar */}
            <header className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
                ? 'bg-[#F4F1EA]/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
                : 'bg-[#F4F1EA] py-4'
                }`}>
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
                    <div className="flex items-center justify-between">
                        {/* Brand Logo */}
                        <Link href="/" className="flex items-center gap-3 group">
                            <img
                                src="/logo.jpeg"
                                alt="Naweza Consulting Investments (Pty) Ltd"
                                className="h-10 sm:h-12 w-auto object-contain rounded shadow-sm border border-slate-200 group-hover:scale-90 transition-transform"
                            />
                            <div className="flex flex-col">
                                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0A2540] leading-none">
                                    NAWEZA CONSULTING
                                </span>
                                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#0F3460] mt-0.5">
                                    INVESTMENTS (PTY) LTD
                                </span>
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center gap-4 xl:gap-6 2xl:gap-7 text-sm font-medium text-[#12151A]">
                            <Link href="/" className="hover:text-[#0A2540] transition-colors py-1">
                                Home
                            </Link>
                            <Link href="#about" className="hover:text-[#0A2540] transition-colors py-1">
                                About
                            </Link>
                            <Link href="#services" className="hover:text-[#0A2540] transition-colors py-1">
                                Services
                            </Link>
                            <Link
                                href="#africa-market"
                                className="text-[#0A2540] font-semibold hover:text-[#0F3460] transition-colors py-1 flex items-center gap-1 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200/60"
                            >
                                <Globe className="w-3.5 h-3.5 text-blue-600" />
                                Africa Market Dev
                            </Link>
                            <Link href="#experience" className="hover:text-[#0A2540] transition-colors py-1">
                                Our Experience
                            </Link>
                            <Link href="#case-studies" className="hover:text-[#0A2540] transition-colors py-1">
                                Case Studies
                            </Link>
                            <Link href="#insights" className="hover:text-[#0A2540] transition-colors py-1">
                                Insights
                            </Link>
                            <Link href="#contact" className="hover:text-[#0A2540] transition-colors py-1">
                                Contact
                            </Link>
                        </nav>

                        {/* Desktop CTA Button */}
                        <div className="hidden lg:flex items-center gap-3">
                            <button
                                onClick={() => onOpenBooking()}
                                className="bg-[#0A2540] hover:bg-[#0F3460] text-white px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 flex items-center gap-2 shadow-sm hover:shadow-md active:scale-95 cursor-pointer"
                            >
                                <Calendar className="w-4 h-4" />
                                Book Consultation
                            </button>
                        </div>

                        {/* Mobile Menu Button */}
                        <div className="lg:hidden flex items-center gap-2">
                            <button
                                onClick={() => onOpenBooking()}
                                className="bg-[#0A2540] text-white p-2 rounded-md text-xs font-medium flex items-center gap-1"
                            >
                                <Calendar className="w-3.5 h-3.5" />
                                Book
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

                {/* Mobile Dropdown Menu */}
                {mobileMenuOpen && (
                    <div className="lg:hidden bg-[#F4F1EA] border-b border-slate-300 px-4 pt-3 pb-6 space-y-3 font-medium text-slate-800 shadow-xl">
                        <Link
                            href="/"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Home
                        </Link>
                        <Link
                            href="#about"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            About & Track Record
                        </Link>
                        <Link
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Core Services (7)
                        </Link>
                        <Link
                            href="#africa-market"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 bg-blue-100 text-[#0A2540] rounded-md font-semibold flex items-center gap-2"
                        >
                            <Globe className="w-4 h-4 text-blue-700" />
                            Africa Market Development (Pty Ltd)
                        </Link>
                        <Link
                            href="#case-studies"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Case Studies
                        </Link>
                        <Link
                            href="#insights"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Research & Insights
                        </Link>
                        <Link
                            href="#contact"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Contact
                        </Link>
                        <div className="pt-2 border-t border-slate-300">
                            <button
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    onOpenBooking();
                                }}
                                className="w-full bg-[#0A2540] text-white py-3 rounded-lg font-medium text-center flex items-center justify-center gap-2"
                            >
                                <Calendar className="w-4 h-4" />
                                Book Consultation
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Legal Entity Architecture Modal */}
            {entityModalOpen && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 md:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200">
                        <button
                            onClick={() => setEntityModalOpen(false)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-lg bg-[#0A2540] text-white flex items-center justify-center">
                                <Building2 className="w-5 h-5" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-[#0A2540]">Brand Architecture & Legal Presentation</h3>
                                <p className="text-xs text-[#8A94A3]">NAWEZA CONSULTING — Single Brand Platform</p>
                            </div>
                        </div>

                        <p className="text-sm text-slate-600 mb-6">
                            The website establishes one unified brand — <strong>NAWEZA CONSULTING</strong> — while maintaining total transparency regarding our two distinct legal operating entities:
                        </p>

                        <div className="space-y-4">
                            {/* CC Entity */}
                            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-[#0A2540]">{LEGAL_ENTITIES.cc.name}</span>
                                    <span className="bg-blue-100 text-[#0A2540] text-xs font-semibold px-2.5 py-1 rounded-full">
                                        {LEGAL_ENTITIES.cc.badgeText}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-700 mb-2">
                                    <strong>Role:</strong> {LEGAL_ENTITIES.cc.positioningText}
                                </p>
                                <div className="text-[11px] text-slate-500 bg-white p-2 rounded border border-slate-200">
                                    Carries the 2018 operating track record, Namibian corporate advisory, compliance, tax support, bookkeeping, and all case studies.
                                </div>
                            </div>

                            {/* Pty Ltd Entity */}
                            <div className="p-4 rounded-xl bg-blue-900 text-white border border-blue-950">
                                <div className="flex items-center justify-between mb-2">
                                    <span className="font-bold text-white">{LEGAL_ENTITIES.pty.name}</span>
                                    <span className="bg-emerald-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                                        {LEGAL_ENTITIES.pty.badgeText}
                                    </span>
                                </div>
                                <p className="text-xs text-blue-100 mb-2">
                                    <strong>Role:</strong> {LEGAL_ENTITIES.pty.positioningText}
                                </p>
                                <div className="text-[11px] text-blue-200 bg-blue-950/60 p-2 rounded border border-blue-800">
                                    Dedicated international project development and market expansion arm. Official registration details will be published upon finalisation.
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 flex justify-end">
                            <button
                                onClick={() => setEntityModalOpen(false)}
                                className="bg-[#0A2540] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-[#0F3460]"
                            >
                                Understood
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};
