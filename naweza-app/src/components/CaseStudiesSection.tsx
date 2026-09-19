'use me';
'use client';

import React, { useState } from 'react';
import {
    Building, CheckCircle2, ArrowRight, X, ShieldCheck,
    FileText, TrendingUp, Layers
} from 'lucide-react';
import { CASE_STUDIES, CaseStudy, LEGAL_ENTITIES } from '@/data/content';

export const CaseStudiesSection: React.FC = () => {
    const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

    return (
        <section id="case-studies" className="py-20 bg-[#F4F1EA] text-[#12151A] relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#0A2540] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                        Proven Track Record
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                        Selected Client Case Studies & Advisory Success
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed">
                        Documented corporate advisory engagements executed by <strong>Naweza Investments CC</strong> (Operating since 2018).
                    </p>
                </div>

                {/* 3 Case Study Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8">
                    {CASE_STUDIES.map((study) => (
                        <div
                            key={study.id}
                            className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
                        >
                            <div>
                                {/* Client Tag */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className="bg-blue-50 text-[#0A2540] border border-blue-200 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1.5">
                                        <Building className="w-3.5 h-3.5 text-blue-700" />
                                        {study.clientName}
                                    </span>
                                    <span className="text-[10px] text-slate-400 uppercase font-semibold">
                                        {LEGAL_ENTITIES[study.entityId].shortName}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-[#0A2540] mb-3 group-hover:text-blue-700 transition-colors">
                                    {study.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                                    {study.summary}
                                </p>

                                {/* Metrics */}
                                <div className="grid grid-cols-2 gap-2 mb-6 p-3 bg-slate-50 rounded-xl border border-slate-100">
                                    {study.impactMetrics.slice(0, 2).map((m, idx) => (
                                        <div key={idx}>
                                            <div className="text-[10px] text-slate-400 uppercase font-bold">{m.label}</div>
                                            <div className="text-xs font-bold text-[#0A2540]">{m.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                                <div className="flex flex-wrap gap-1">
                                    {study.tags.slice(0, 2).map((t, idx) => (
                                        <span key={idx} className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded">
                                            #{t}
                                        </span>
                                    ))}
                                </div>

                                <button
                                    onClick={() => setSelectedCase(study)}
                                    className="text-xs font-bold text-[#0A2540] hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                                >
                                    Read Story
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

            </div>

            {/* Case Study Story Modal */}
            {selectedCase && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 text-[#12151A]">

                        <button
                            onClick={() => setSelectedCase(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-2">
                            <Building className="w-4 h-4" />
                            <span>{selectedCase.clientName}</span>
                        </div>

                        <h3 className="text-2xl font-bold text-[#0A2540] mb-4">{selectedCase.title}</h3>

                        <p className="text-sm text-slate-700 leading-relaxed mb-6">
                            {selectedCase.fullStory}
                        </p>

                        <h4 className="font-bold text-xs text-[#0A2540] uppercase tracking-wider mb-2">Scope of Engagement</h4>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {selectedCase.servicesProvided.map((s, idx) => (
                                <span key={idx} className="bg-blue-50 text-[#0A2540] border border-blue-200 text-xs font-medium px-3 py-1 rounded-lg">
                                    ✓ {s}
                                </span>
                            ))}
                        </div>

                        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6">
                            <h4 className="font-bold text-xs text-[#0A2540] uppercase tracking-wider mb-3">Key Project Metrics</h4>
                            <div className="grid sm:grid-cols-3 gap-4">
                                {selectedCase.impactMetrics.map((m, idx) => (
                                    <div key={idx}>
                                        <div className="text-[11px] text-slate-400 font-semibold">{m.label}</div>
                                        <div className="text-sm font-bold text-[#0A2540]">{m.value}</div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-between items-center pt-4 border-t border-slate-200 text-xs text-slate-500">
                            <span>Executed by: <strong>{LEGAL_ENTITIES[selectedCase.entityId].name}</strong></span>
                            <button
                                onClick={() => setSelectedCase(null)}
                                className="bg-[#0A2540] text-white px-5 py-2 rounded-lg font-bold"
                            >
                                Close Case Study
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};
