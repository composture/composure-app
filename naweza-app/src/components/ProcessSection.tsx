'use me';
'use client';

import React from 'react';
import {
    Search, PenTool, Code, ShieldCheck
} from 'lucide-react';
import { PROCESS_STEPS } from '@/data/content';

export const ProcessSection: React.FC = () => {
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Search': return <Search className="w-5 h-5 text-white" />;
            case 'PenTool': return <PenTool className="w-5 h-5 text-white" />;
            case 'Code': return <Code className="w-5 h-5 text-white" />;
            case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-white" />;
            default: return <Code className="w-5 h-5 text-white" />;
        }
    };

    return (
        <section id="process" className="py-20 bg-[#F4F1EA] text-[#12151A] relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#0A2540] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                        How We Work
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                        From First Call to Working Software in Four Steps
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed">
                        A straightforward process with no jargon, no surprise costs, and no disappearing acts. You always know where your project stands.
                    </p>
                </div>

                {/* Process Steps */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {PROCESS_STEPS.map((step, idx) => (
                        <div key={step.id} className="relative">
                            {/* Connector Line */}
                            {idx < PROCESS_STEPS.length - 1 && (
                                <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-slate-300 -z-0"></div>
                            )}

                            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-md hover:shadow-xl transition-all duration-300 relative z-10 flex flex-col h-full">
                                {/* Step Number & Icon */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="w-10 h-10 rounded-xl bg-[#0A2540] text-white flex items-center justify-center">
                                        {getIcon(step.icon)}
                                    </div>
                                    <span className="text-3xl font-extrabold text-slate-200">
                                        {step.stepNumber}
                                    </span>
                                </div>

                                {/* Title & Description */}
                                <h3 className="text-lg font-bold text-[#0A2540] mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
