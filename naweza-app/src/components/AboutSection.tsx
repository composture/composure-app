'use me';
'use client';

import React from 'react';
import {
    Building2, History, Award, CheckCircle, Target,
    Layers, Shield, Users, ArrowRight, TrendingUp
} from 'lucide-react';
import { LEGAL_ENTITIES } from '@/data/content';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-[#F4F1EA] text-[#12151A] relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#0A2540] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                        About NAWEZA CONSULTING
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                        Modern International Consulting Backed by Established Namibian Experience
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed font-medium">
                        Naweza Consulting Investments (Pty) Ltd is the international-facing arm of the Naweza brand, building on the experience and local track record established through Naweza Investments CC in Namibia.
                    </p>
                </div>

                {/* 2 Column Layout — Corporate Background */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column — Strategic Pillars */}
                    <div className="lg:col-span-6 space-y-6">
                        <h3 className="text-2xl font-bold text-[#0A2540] tracking-tight">
                            A 100% Namibian Corporate Advisory & Ecosystem-Enabling Firm
                        </h3>

                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                            Operating since 2018 under <strong>Naweza Investments CC</strong>, our platform has provided practical corporate advisory, regulatory compliance, statutory tax support, bookkeeping, and feasibility studies to emerging and established enterprises in Namibia.
                        </p>

                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                            In 2026, we expanded our platform under <strong>Naweza Consulting Investments (Pty) Ltd</strong> as our primary international-facing project development identity — connecting global manufacturers, technology suppliers, and investors to high-yield commercial opportunities across Namibia and the SADC region.
                        </p>

                        {/* Core Pillars Grid */}
                        <div className="grid sm:grid-cols-3 gap-4 pt-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-[#0A2540] text-white flex items-center justify-center font-bold mb-2">
                                    <Layers className="w-4 h-4" />
                                </div>
                                <h4 className="font-bold text-[#0A2540] text-sm">SYSTEMS</h4>
                                <p className="text-xs text-slate-500 mt-1">Structured governance, back-office, & BIPA compliance.</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-[#0F3460] text-white flex items-center justify-center font-bold mb-2">
                                    <Target className="w-4 h-4" />
                                </div>
                                <h4 className="font-bold text-[#0A2540] text-sm">STRATEGY</h4>
                                <p className="text-xs text-slate-500 mt-1">Bankable business plans, feasibility & financial models.</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold mb-2">
                                    <TrendingUp className="w-4 h-4" />
                                </div>
                                <h4 className="font-bold text-[#0A2540] text-sm">GROWTH</h4>
                                <p className="text-xs text-slate-500 mt-1">Cross-border SADC market entry & opportunity scouting.</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column — Entity Breakdown Panel */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">

                            <div className="border-b border-slate-200 pb-4">
                                <h4 className="text-lg font-bold text-[#0A2540] flex items-center gap-2">
                                    <Building2 className="w-5 h-5 text-blue-700" />
                                    Legal Entity Governance Framework
                                </h4>
                                <p className="text-xs text-slate-500 mt-1">
                                    Transparent presentation of our legal structure to clients and partners.
                                </p>
                            </div>

                            {/* Entity 1 */}
                            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#0A2540]">
                                <div className="flex items-center justify-between">
                                    <h5 className="font-bold text-[#0A2540] text-sm">{LEGAL_ENTITIES.cc.name}</h5>
                                    <span className="text-[11px] font-semibold bg-blue-100 text-[#0A2540] px-2.5 py-0.5 rounded-full">
                                        {LEGAL_ENTITIES.cc.badgeText}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                    The foundational operating entity for all domestic Namibian business advisory, BIPA compliance, NamRA tax administration, bookkeeping, and project feasibility documentation.
                                </p>
                            </div>

                            {/* Entity 2 */}
                            <div className="p-4 rounded-xl bg-slate-900 text-white border-l-4 border-emerald-500">
                                <div className="flex items-center justify-between">
                                    <h5 className="font-bold text-white text-sm">{LEGAL_ENTITIES.pty.name}</h5>
                                    <span className="text-[11px] font-semibold bg-emerald-500 text-slate-950 px-2.5 py-0.5 rounded-full">
                                        {LEGAL_ENTITIES.pty.badgeText}
                                    </span>
                                </div>
                                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                                    The international-facing project development vehicle established in 2026 for Africa market entry, partner scouting, tender intelligence, and cross-border commercial support.
                                </p>
                            </div>

                            <div className="bg-blue-50 p-3.5 rounded-lg border border-blue-200 text-xs text-[#0A2540] flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>
                                    <strong>Strict Compliance Standard:</strong> Formal engagements, quotations, and agreements explicitly identify the contracting legal entity suited for your project scope.
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
