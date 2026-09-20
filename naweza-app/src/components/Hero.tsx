'use me';
'use client';

import React from 'react';
import {
    ArrowRight, Calendar, ShieldCheck, Globe, CheckCircle2,
    Building, TrendingUp, FileText, ChevronRight
} from 'lucide-react';
import { LEGAL_ENTITIES } from '@/data/content';

interface HeroProps {
    onOpenBooking: (serviceId?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
    return (
        <section className="relative bg-[#0A2540] text-white pt-12 pb-20 overflow-hidden">
            {/* Background Subtle Corporate Geometry */}
            <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#0F3460_1px,transparent_1px)] [background-size:24px_24px]"></div>
            <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#0F3460] rounded-full blur-3xl opacity-40"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column — Text & CTAs */}
                    <div className="lg:col-span-7 space-y-6">

                        {/* Pill Tagline */}
                        <div className="inline-flex items-center gap-2 bg-[#0F3460]/80 border border-blue-400/30 px-3.5 py-1.5 rounded-full text-xs font-medium text-blue-200 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                            <span>Your products. Our market intelligence. Africa.</span>
                        </div>

                        {/* Logo + Headline */}
                        <div className="flex flex-col items-start gap-6">
                            {/* Circular Logo — big, as-is from the source file */}
                            <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-2xl ring-4 ring-blue-400/30 flex-shrink-0">
                                <img
                                    src="/logo.jpeg"
                                    alt="NAWEZA CONSULTING Logo"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Headline Text */}
                            <div>
                                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
                                    NAWEZA CONSULTING INVESTMENTS (PTY) LTD
                                </h1>
                                <span className="block text-xl sm:text-2xl font-semibold text-blue-200 font-mono tracking-wider mt-1">
                                    SYSTEMS | STRATEGY | GROWTH
                                </span>
                            </div>
                        </div>

                        {/* Short positioning statement */}
                        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
                            The international-facing arm of the Naweza brand, building on the experience and local track record established through Naweza Investments CC in Namibia.
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
                            <button
                                onClick={() => onOpenBooking()}
                                className="bg-white hover:bg-blue-50 text-[#0A2540] px-7 py-3.5 rounded-lg font-bold text-base transition-all duration-200 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl active:scale-95 cursor-pointer"
                            >
                                <Calendar className="w-5 h-5 text-[#0A2540]" />
                                Book a Consultation
                            </button>

                            <a
                                href="#services"
                                className="bg-[#0F3460] hover:bg-[#124076] text-white border border-blue-400/40 px-7 py-3.5 rounded-lg font-medium text-base transition-all duration-200 flex items-center justify-center gap-2"
                            >
                                Explore Services
                                <ArrowRight className="w-4 h-4 text-blue-300" />
                            </a>
                        </div>

                        {/* Stats Highlights */}
                        <div className="grid grid-cols-3 gap-4 pt-6 border-t border-blue-900/80 text-left">
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white">2018</div>
                                <div className="text-xs text-slate-400 mt-0.5">Operating Track Record</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-white">7 Core</div>
                                <div className="text-xs text-slate-400 mt-0.5">Advisory & Market Services</div>
                            </div>
                            <div>
                                <div className="text-2xl sm:text-3xl font-bold text-emerald-400">100%</div>
                                <div className="text-xs text-slate-400 mt-0.5">Namibian Gateway</div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column — Corporate Image Showcase & Entity Cards */}
                    <div className="lg:col-span-5 space-y-4">

                        {/* Uploaded Corporate Image */}
                        <div className="relative rounded-2xl overflow-hidden border-2 border-blue-400/30 shadow-2xl group">
                            <img
                                src="/hero-image.jpeg"
                                alt="Naweza Consulting Corporate Advisory"
                                className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-90"></div>
                            <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs text-white font-medium">
                                <span className="bg-[#0A2540]/90 px-3 py-1 rounded-full border border-blue-400/40 backdrop-blur-sm">
                                    Corporate Advisory & Strategy
                                </span>
                                <span className="text-emerald-400 font-bold">Namibia & SADC</span>
                            </div>
                        </div>

                        {/* Card 1: Naweza Investments CC */}
                        <div className="bg-[#0F3460]/90 border border-blue-500/30 rounded-xl p-4 backdrop-blur-md shadow-lg hover:border-blue-400 transition-all group">
                            <div className="flex items-center justify-between mb-1.5">
                                <h3 className="font-bold text-sm text-white group-hover:text-blue-200 transition-colors">
                                    {LEGAL_ENTITIES.cc.name}
                                </h3>
                                <span className="bg-blue-400/20 text-blue-200 border border-blue-400/30 text-[10px] font-semibold px-2 py-0.5 rounded-full">
                                    Established 2018
                                </span>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-relaxed mb-2">
                                Historical operating foundation: Namibian business advisory, compliance, taxation & bookkeeping.
                            </p>
                        </div>

                        {/* Card 2: Naweza Consulting Investments (Pty) Ltd */}
                        <div className="bg-[#0A2540] border border-emerald-500/40 rounded-xl p-4 shadow-lg hover:border-emerald-400 transition-all group relative overflow-hidden">
                            <div className="flex items-center justify-between mb-1.5">
                                <h3 className="font-bold text-sm text-white group-hover:text-emerald-300 transition-colors">
                                    {LEGAL_ENTITIES.pty.name}
                                </h3>
                                <span className="bg-emerald-500 text-slate-950 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">
                                    Est. 2026
                                </span>
                            </div>
                            <p className="text-[11px] text-slate-300 leading-relaxed">
                                International project development arm for Africa market entry, tender intelligence & partner scouting.
                            </p>
                        </div>

                        {/* Note on legal presentation compliance */}
                        <p className="text-[11px] text-slate-400 text-center italic">
                            * Distinct legal identities operating under the NAWEZA CONSULTING digital platform.
                        </p>

                    </div>

                </div>
            </div>
        </section>
    );
};