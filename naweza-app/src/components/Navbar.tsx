'use me';
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
    Menu, X, Calendar,
    Phone, Mail
} from 'lucide-react';

interface NavbarProps {
    onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            {/* Top Contact Bar */}
            <div className="bg-[#0A2540] text-white text-xs py-2 border-b border-[#0F3460] font-sans">
                <div className="max-w-[1800px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 flex justify-center md:justify-between items-center gap-4">
                    <span className="flex items-center gap-1.5 text-gray-300">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                        <strong>COMPOSURE (PTY) LTD</strong> — AI | Software | Automation
                    </span>
                    <div className="flex items-center gap-4 text-gray-300 text-xs">
                        <a href="tel:+264813107977" className="hover:text-white flex items-center gap-1.5 transition-colors">
                            <Phone className="w-3.5 h-3.5 text-emerald-400" />
                            +264 81 310 7977
                        </a>
                        <span className="hidden sm:inline text-gray-600">•</span>
                        <a href="mailto:info@composuretech.com" className="hover:text-white flex items-center gap-1.5 transition-colors">
                            <Mail className="w-3.5 h-3.5 text-blue-400" />
                            info@composuretech.com
                        </a>
                        <span className="hidden sm:inline text-gray-600">•</span>
                        <span className="hidden sm:flex items-center gap-1 text-gray-400">
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
                                alt="Composure (Pty) Ltd"
                                className="h-10 sm:h-12 w-auto object-contain rounded shadow-sm border border-slate-200 group-hover:scale-90 transition-transform"
                            />
                            <div className="flex flex-col">
                                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-[#0A2540] leading-none">
                                    COMPOSURE
                                </span>
                                <span className="text-[9px] sm:text-[10px] font-bold tracking-wider uppercase text-[#0F3460] mt-0.5">
                                    (PTY) LTD
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
                            <Link href="#industries" className="hover:text-[#0A2540] transition-colors py-1">
                                Industries
                            </Link>
                            <Link href="#process" className="hover:text-[#0A2540] transition-colors py-1">
                                Process
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
                                Free Consultation
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
                            About
                        </Link>
                        <Link
                            href="#services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Services
                        </Link>
                        <Link
                            href="#industries"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Industries
                        </Link>
                        <Link
                            href="#process"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Process
                        </Link>
                        <Link
                            href="#insights"
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 px-3 hover:bg-slate-200 rounded-md"
                        >
                            Insights
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
                                Free Consultation
                            </button>
                        </div>
                    </div>
                )}
            </header>
        </>
    );
};
