'use me';
'use client';

import React from 'react';
import {
    ArrowRight, Calendar
} from 'lucide-react';
import { TechAnimation } from '@/components/TechAnimation';

interface HeroProps {
    onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
    return (
        <section className="relative bg-[#0A2540] text-white pt-12 pb-16 sm:pb-20 overflow-hidden">
            {/* Background Subtle Corporate Geometry */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0F3460_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0F3460] rounded-full blur-3xl opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-8 sm:gap-10 items-center">

                    {/* Left Column — Text & CTAs */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Pill Tagline */}
                        <div className="inline-flex items-center gap-2 bg-[#0F3460]/80 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-blue-200 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span>AI | Software | Automation</span>
                        </div>

                        {/* Logo + Headline */}
                        <div className="flex flex-col items-start gap-6">
                            {/* Circular Logo */}
                            <div className="w-36 h-36 sm:w-48 sm:h-48 lg:w-64 lg:h-64 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-400/30 flex-shrink-0">
                                <img
                                    src="/logo.jpeg"
                                    alt="Composure Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Headline Text */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    COMPOSURE (PTY) LTD
                                </h1>
                                <span className="block text-xl sm:text-2xl font-semibold text-blue-200 font-mono tracking-wider mt-1">
                                    AI | SOFTWARE | AUTOMATION
                                </span>
                            </div>
                        </div>

                        {/* Positioning statement */}
                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                            We help businesses put AI to work. From AI chatbots and automation to custom software, websites, and mobile apps — we build the systems that replace manual work and help your business scale.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col gap-3 pt-2">
                            <button
                                onClick={() => onOpenBooking()}
                                className="w-full bg-white hover:bg-blue-50 text-[#0A2540] px-6 py-3 rounded-lg font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
                            >
                                <Calendar className="w-5 h-5 text-[#0A2540]" />
                                Book a Free Consultation
                            </button>

                            <a
                                    href="#services"
                                    className="w-full bg-[#0F3460] hover:bg-[#124076] text-white border border-blue-400/40 px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                Explore Services
                                <ArrowRight className="w-4 h-4 text-blue-300" />
                            </a>
                        </div>

                        {/* Stats Highlights */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-blue-900/80 text-left">
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white">7 Core</div>
                                <div className="text-xs text-slate-400 mt-0.5">Technology Services</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white">8+</div>
                                <div className="text-xs text-slate-400 mt-0.5">Industries Served</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">Free</div>
                                <div className="text-xs text-slate-400 mt-0.5">Initial Consultation</div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column — Animated Tech Visual */}
                    <div className="lg:col-span-5 flex items-center justify-center py-4 lg:py-0">
                        <div className="w-full max-w-[400px] lg:max-w-[440px]">
                            <TechAnimation />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
