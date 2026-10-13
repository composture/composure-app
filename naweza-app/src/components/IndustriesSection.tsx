'use me';
'use client';

import React from 'react';
import {
    ShoppingCart, Palmtree, Truck, Sprout, HardHat,
    GraduationCap, HeartPulse, Briefcase
} from 'lucide-react';
import { INDUSTRIES } from '@/data/content';

export const IndustriesSection: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'ShoppingCart': return <ShoppingCart className="w-5 h-5 text-blue-400" />;
            case 'Palmtree': return <Palmtree className="w-5 h-5 text-blue-400" />;
            case 'Truck': return <Truck className="w-5 h-5 text-blue-400" />;
            case 'Sprout': return <Sprout className="w-5 h-5 text-blue-400" />;
            case 'HardHat': return <HardHat className="w-5 h-5 text-blue-400" />;
            case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-400" />;
            case 'HeartPulse': return <HeartPulse className="w-5 h-5 text-blue-400" />;
            case 'Briefcase': return <Briefcase className="w-5 h-5 text-blue-400" />;
            default: return <Briefcase className="w-5 h-5 text-blue-400" />;
        }
    };

    return (
        <section id="industries" className="py-20 bg-[#0A2540] text-white relative overflow-hidden border-t border-b border-blue-900">

            {/* Background Accent Gradients */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Section Header */}
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-500/40 text-blue-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
                        <span>Industries We Serve</span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                        Built for the Businesses That Keep Africa Moving
                    </h2>

                    <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
                        We build for shops and bars, lodges and tour operators, farms, clinics, schools, logistics companies, and professional firms — anywhere manual work is slowing things down.
                    </p>
                </div>

                {/* Industry Cards Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                    {INDUSTRIES.map((industry) => (
                        <div
                            key={industry.id}
                            className="bg-[#0F3460]/80 border border-blue-500/30 rounded-2xl p-6 backdrop-blur-md hover:border-blue-400/60 hover:bg-[#0F3460] transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="w-10 h-10 rounded-xl bg-[#0A2540] border border-blue-500/40 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    {getIcon(industry.icon)}
                                </div>
                                <h3 className="font-bold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors">
                                    {industry.title}
                                </h3>
                                <p className="text-xs text-slate-300 leading-relaxed">
                                    {industry.description}
                                </p>
                            </div>

                            <div className="pt-4 mt-4 border-t border-blue-900/60 flex items-center text-blue-400 text-xs font-semibold">
                                <span>Software & AI Solutions</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Callout Banner */}
                <div className="bg-gradient-to-r from-blue-950/80 via-[#0F3460] to-[#0A2540] border border-blue-500/40 rounded-2xl p-8 sm:p-10 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="space-y-3 text-center lg:text-left max-w-2xl">
                        <h3 className="text-2xl sm:text-3xl font-bold text-white">
                            Do Not See Your Industry?
                        </h3>
                        <p className="text-sm text-slate-300 leading-relaxed">
                            We build for any business with repetitive processes. Book a free consultation and we will identify your highest-impact automation opportunities — regardless of sector.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                        <a
                            href="#contact"
                            className="bg-blue-500 hover:bg-blue-400 text-white font-bold px-7 py-3.5 rounded-xl text-sm transition-all shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                        >
                            Get in Touch
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
};
