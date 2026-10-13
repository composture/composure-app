'use me';
'use client';

import React, { useState } from 'react';
import {
    Bot, Globe, Workflow, Code, Smartphone, BarChart3, Sparkles,
    ArrowRight, Check, X, Calendar
} from 'lucide-react';
import { CORE_SERVICES, ServiceItem } from '@/data/content';

interface ServicesSectionProps {
    onOpenBooking: (serviceId?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenBooking }) => {
    const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

    // Icon map lookup
    const getIcon = (iconName: string) => {
        switch (iconName) {
            case 'Bot': return <Bot className="w-6 h-6 text-blue-700" />;
            case 'Globe': return <Globe className="w-6 h-6 text-blue-700" />;
            case 'Workflow': return <Workflow className="w-6 h-6 text-blue-700" />;
            case 'Code': return <Code className="w-6 h-6 text-blue-700" />;
            case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-700" />;
            case 'BarChart3': return <BarChart3 className="w-6 h-6 text-blue-700" />;
            case 'Sparkles': return <Sparkles className="w-6 h-6 text-blue-700" />;
            default: return <Code className="w-6 h-6 text-blue-700" />;
        }
    };

    return (
        <section id="services" className="py-20 bg-white text-[#12151A] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#0A2540] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                        What We Build
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                        AI, Software & Automation Services
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed">
                        Seven core service areas covering everything from AI integration and automation to custom software, websites, and mobile apps — all built around how your business works.
                    </p>
                </div>

                {/* Services Grid (7 items) */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {CORE_SERVICES.map((service, idx) => {
                        const isFeatured = idx === 0;

                        return (
                            <div
                                key={service.id}
                                className={`rounded-2xl p-6 sm:p-8 border transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 ${isFeatured
                                        ? 'bg-gradient-to-br from-slate-900 to-[#0A2540] text-white border-emerald-500/40 shadow-xl'
                                        : 'bg-[#F8F9FA] hover:bg-white text-[#12151A] border-slate-200 hover:border-blue-400 hover:shadow-xl'
                                    }`}
                            >
                                <div>
                                    {/* Icon */}
                                    <div className="flex items-center justify-between mb-6">
                                        <div className={`p-3 rounded-xl ${isFeatured ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-blue-100 text-[#0A2540]'}`}>
                                            {getIcon(service.iconName)}
                                        </div>
                                        {isFeatured && (
                                            <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-emerald-500 text-slate-950">
                                                Most Requested
                                            </span>
                                        )}
                                    </div>

                                    {/* Title */}
                                    <h3 className={`text-xl font-bold mb-3 ${isFeatured ? 'text-white' : 'text-[#0A2540]'}`}>
                                        {service.title}
                                    </h3>

                                    {/* Description */}
                                    <p className={`text-xs sm:text-sm leading-relaxed mb-6 ${isFeatured ? 'text-slate-300' : 'text-slate-600'}`}>
                                        {service.shortDescription}
                                    </p>

                                    {/* Top Deliverables */}
                                    <ul className="space-y-2 mb-6">
                                        {service.deliverables.slice(0, 3).map((item, idx) => (
                                            <li key={idx} className={`text-xs flex items-center gap-2 ${isFeatured ? 'text-slate-300' : 'text-slate-700'}`}>
                                                <Check className={`w-3.5 h-3.5 shrink-0 ${isFeatured ? 'text-emerald-400' : 'text-blue-600'}`} />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Card Actions */}
                                <div className="pt-4 border-t border-slate-200/40 flex items-center justify-between">
                                    <button
                                        onClick={() => setSelectedService(service)}
                                        className={`text-xs font-bold flex items-center gap-1 hover:underline ${isFeatured ? 'text-emerald-300 hover:text-white' : 'text-blue-700 hover:text-[#0A2540]'
                                            }`}
                                    >
                                        View Deliverables
                                        <ArrowRight className="w-3.5 h-3.5" />
                                    </button>

                                    <button
                                        onClick={() => onOpenBooking(service.id)}
                                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${isFeatured
                                                ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                                                : 'bg-[#0A2540] text-white hover:bg-[#0F3460]'
                                            }`}
                                    >
                                        <Calendar className="w-3 h-3" />
                                        Enquire
                                    </button>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>

            {/* Service Detail Drawer / Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 text-[#12151A]">

                        <button
                            onClick={() => setSelectedService(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 rounded-xl bg-blue-100 text-[#0A2540]">
                                {getIcon(selectedService.iconName)}
                            </div>
                            <div>
                                <span className="text-xs font-bold text-blue-700 uppercase tracking-widest">
                                    Composure (Pty) Ltd
                                </span>
                                <h3 className="text-2xl font-bold text-[#0A2540]">{selectedService.title}</h3>
                            </div>
                        </div>

                        <p className="text-sm text-slate-700 leading-relaxed mb-6">
                            {selectedService.fullDescription}
                        </p>

                        <h4 className="font-bold text-sm text-[#0A2540] mb-3 uppercase tracking-wider">Key Scope & Deliverables</h4>
                        <div className="grid sm:grid-cols-2 gap-3 mb-8">
                            {selectedService.deliverables.map((item, idx) => (
                                <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs font-medium text-slate-800 flex items-start gap-2.5">
                                    <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                            <span className="text-xs text-slate-500">Delivered by <strong>Composure (Pty) Ltd</strong></span>
                            <button
                                onClick={() => {
                                    const serviceId = selectedService.id;
                                    setSelectedService(null);
                                    onOpenBooking(serviceId);
                                }}
                                className="bg-[#0A2540] hover:bg-[#0F3460] text-white px-6 py-2.5 rounded-lg text-sm font-bold flex items-center gap-2"
                            >
                                <Calendar className="w-4 h-4" />
                                Enquire About This Service
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};
