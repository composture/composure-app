'use me';
'use client';

import React from 'react';
import {
    CheckCircle, Target,
    Bot, Code, Workflow
} from 'lucide-react';

export const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-20 bg-[#F4F1EA] text-[#12151A] relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#0A2540] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                        About Composure
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                        A Technology Partner That Builds What Your Business Actually Needs
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed font-medium">
                        Composure (Pty) Ltd is a software and AI company that helps businesses automate, digitise, and grow. No templates, no jargon — systems built around the way you work.
                    </p>
                </div>

                {/* 2 Column Layout */}
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Left Column — What We Do */}
                    <div className="lg:col-span-6 space-y-6">
                        <h3 className="text-2xl font-bold text-[#0A2540] tracking-tight">
                            Practical Technology, Built for African Business Conditions
                        </h3>

                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                            We build systems for Namibian businesses — point-of-sale platforms, stock and inventory control, booking systems, AI assistants, and automated back-office workflows.
                        </p>

                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                            Our team delivers AI integration, custom software, web and mobile development, and end-to-end business automation — helping companies in Namibia and beyond replace manual work with intelligent, reliable systems.
                        </p>

                        {/* Core Pillars Grid */}
                        <div className="grid sm:grid-cols-3 gap-4 pt-4">
                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-[#0A2540] text-white flex items-center justify-center font-bold mb-2">
                                    <Bot className="w-4 h-4" />
                                </div>
                                <h4 className="font-bold text-[#0A2540] text-sm">AI</h4>
                                <p className="text-xs text-slate-500 mt-1">Chatbots, agents & intelligent document processing.</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-[#0F3460] text-white flex items-center justify-center font-bold mb-2">
                                    <Code className="w-4 h-4" />
                                </div>
                                <h4 className="font-bold text-[#0A2540] text-sm">SOFTWARE</h4>
                                <p className="text-xs text-slate-500 mt-1">Web, mobile & custom systems built to fit.</p>
                            </div>

                            <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                                <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold mb-2">
                                    <Workflow className="w-4 h-4" />
                                </div>
                                <h4 className="font-bold text-[#0A2540] text-sm">AUTOMATION</h4>
                                <p className="text-xs text-slate-500 mt-1">Connected systems & zero manual busywork.</p>
                            </div>
                        </div>

                    </div>

                    {/* Right Column — Why Clients Work With Us */}
                    <div className="lg:col-span-6">
                        <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">

                            <div className="border-b border-slate-200 pb-4">
                                <h4 className="text-lg font-bold text-[#0A2540] flex items-center gap-2">
                                    How We Work
                                </h4>
                                <p className="text-xs text-slate-500 mt-1">
                                    A straightforward, no-nonsense approach to building software that lasts.
                                </p>
                            </div>

                            {/* Point 1 */}
                            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#0A2540]">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="w-4 h-4 text-blue-700" />
                                    <h5 className="font-bold text-[#0A2540] text-sm">Fixed Scope, Fixed Price</h5>
                                </div>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                    Every engagement starts with a clear plan — deliverables, timeline, and cost agreed upfront. No hourly billing surprises.
                                </p>
                            </div>

                            {/* Point 2 */}
                            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-[#0F3460]">
                                <div className="flex items-center gap-2 mb-2">
                                    <Target className="w-4 h-4 text-[#0F3460]" />
                                    <h5 className="font-bold text-[#0A2540] text-sm">Built for Real Conditions</h5>
                                </div>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                    Our systems work offline, on cheap devices, and on slow connections — because that is the reality of business here.
                                </p>
                            </div>

                            {/* Point 3 */}
                            <div className="p-4 rounded-xl bg-slate-50 border-l-4 border-emerald-500">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                                    <h5 className="font-bold text-[#0A2540] text-sm">You Own Everything</h5>
                                </div>
                                <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                                    Full source code, documentation, and training handover. You are never locked into us — but clients stay because we deliver.
                                </p>
                            </div>

                            {/* Entity transparency note */}
                            <div className="bg-blue-50 p-3.5 rounded-lg border border-blue-200 text-xs text-[#0A2540] flex items-start gap-2">
                                <CheckCircle className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                                <span>
                                    <strong>Registered & Transparent:</strong> All engagements are contracted through a registered Namibian entity (Composure (Pty) Ltd), with formal agreements and clear invoicing.
                                </span>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};
