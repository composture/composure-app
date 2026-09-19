'use me';
'use client';

import React from 'react';
import {
    Globe, Compass, Users, Building2, FileBadge,
    Target, PenTool, MapPin, Search, ArrowRight, Calendar, ShieldCheck
} from 'lucide-react';
import { AFRICA_MARKET_CAPABILITIES, LEGAL_ENTITIES } from '@/data/content';

interface AfricaMarketSectionProps {
    onOpenBooking: (serviceId?: string) => void;
}

export const AfricaMarketSection: React.FC<AfricaMarketSectionProps> = ({ onOpenBooking }) => {
    const getIcon = (name: string) => {
        switch (name) {
            case 'Search': return <Search className="w-5 h-5 text-emerald-400" />;
            case 'Compass': return <Compass className="w-5 h-5 text-emerald-400" />;
            case 'Users': return <Users className="w-5 h-5 text-emerald-400" />;
            case 'Building2': return <Building2 className="w-5 h-5 text-emerald-400" />;
            case 'FileBadge': return <FileBadge className="w-5 h-5 text-emerald-400" />;
            case 'Target': return <Target className="w-5 h-5 text-emerald-400" />;
            case 'PenTool': return <PenTool className="w-5 h-5 text-emerald-400" />;
            case 'MapPin': return <MapPin className="w-5 h-5 text-emerald-400" />;
            default: return <Globe className="w-5 h-5 text-emerald-400" />;
        }
    };

    return (
        <section id="africa-market" className="py-20 bg-[#0A2540] text-white relative overflow-hidden border-t border-b border-blue-900">

            {/* Background Accent Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Pill & Entity Notice */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        <Globe className="w-3.5 h-3.5" />
                        <span>Naweza Consulting Investments (Pty) Ltd • Established 2026</span>
                    </div>

                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                        Your Products. Our Market Intelligence. Africa.
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                        Targeting international manufacturers, equipment suppliers, technology providers, and investors interested in expanding operations into Namibia and the wider SADC regional market.
                    </p>
                </div>

                {/* 8 Capability Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {AFRICA_MARKET_CAPABILITIES.map((cap, idx) => (
                        <div
                            key={idx}
                            className="bg-[#0F3460]/80 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-md hover:border-emerald-400/60 hover:bg-[#0F3460] transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-[#0A2540] border border-emerald-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {getIcon(cap.icon)}
                                </div>
                                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-emerald-300 transition-colors">
                                    {cap.title}
                                </h3>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    {cap.description}
                                </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-blue-900/60 flex items-center text-emerald-400 text-xs font-semibold">
                                <span>International Scope</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Callout Banner for Global Prospects */}
                <div className="bg-gradient-to-r from-emerald-950/80 via-[#0F3460] to-[#0A2540] border border-emerald-500/40 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="space-y-3 text-center lg:text-left max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            Planning Market Entry into Namibia or SADC?
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            We provide local market scouting, contractor research, tender tracking, and executive representation under <strong>Naweza Consulting Investments (Pty) Ltd</strong> (Est. 2026).
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <button
                            onClick={() => onOpenBooking('africa-market-dev')}
                            className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Calendar className="w-4 h-4" />
                            Discuss Market Development
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};
