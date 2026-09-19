'use me';
'use client';

import React, { useState } from 'react';
import {
    FileText, Calendar, Clock, User, ArrowRight,
    X, Mail, CheckCircle2, Bookmark
} from 'lucide-react';
import { INSIGHTS, InsightPost } from '@/data/content';

export const InsightsSection: React.FC = () => {
    const [selectedPost, setSelectedPost] = useState<InsightPost | null>(null);
    const [emailInput, setEmailInput] = useState('');
    const [subscribed, setSubscribed] = useState(false);

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        if (emailInput) {
            setSubscribed(true);
            setTimeout(() => setSubscribed(false), 4000);
            setEmailInput('');
        }
    };

    return (
        <section id="insights" className="py-20 bg-white text-[#12151A] relative border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="bg-[#0A2540] text-white text-xs font-bold uppercase tracking-widest px-3.5 py-1.5 rounded-full inline-block mb-3">
                        Research & Insights
                    </span>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0A2540] tracking-tight">
                        Market Intelligence, Compliance & Feasibility Analysis
                    </h2>
                    <p className="mt-4 text-base text-slate-600 leading-relaxed">
                        Thought leadership and practical commercial guidance published by NAWEZA CONSULTING analysts.
                    </p>
                </div>

                {/* 3 Publication Cards */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {INSIGHTS.map((post) => (
                        <div
                            key={post.id}
                            className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-8 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
                        >
                            <div>
                                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                                    <span className="bg-blue-100 text-[#0A2540] font-bold px-2.5 py-0.5 rounded-full text-[10px]">
                                        {post.category}
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="w-3 h-3 text-slate-400" />
                                        {post.readTime}
                                    </span>
                                </div>

                                <h3 className="text-lg font-bold text-[#0A2540] mb-3 group-hover:text-blue-700 transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 line-clamp-3">
                                    {post.excerpt}
                                </p>
                            </div>

                            <div className="pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                                <span className="text-slate-400 font-medium">{post.publishDate}</span>
                                <button
                                    onClick={() => setSelectedPost(post)}
                                    className="font-bold text-[#0A2540] hover:text-blue-700 flex items-center gap-1 cursor-pointer"
                                >
                                    Read Article
                                    <ArrowRight className="w-3.5 h-3.5" />
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {/* Insights Newsletter Box */}
                <div className="bg-[#0A2540] rounded-2xl p-8 sm:p-10 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8 border border-blue-900">
                    <div className="space-y-2 text-center md:text-left max-w-xl">
                        <h3 className="text-2xl font-bold">Subscribe to Naweza Market Intelligence</h3>
                        <p className="text-xs sm:text-sm text-slate-300">
                            Receive quarterly briefs on Namibian regulatory changes, SADC tender intelligence, and economic feasibility research directly to your inbox.
                        </p>
                    </div>

                    <form onSubmit={handleSubscribe} className="w-full md:w-auto flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            required
                            placeholder="Enter corporate email..."
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="bg-white/10 text-white placeholder-slate-400 border border-blue-500/40 px-4 py-3 rounded-xl text-sm focus:outline-none focus:border-white w-full sm:w-72"
                        />
                        <button
                            type="submit"
                            className="bg-white text-[#0A2540] hover:bg-blue-50 font-bold px-6 py-3 rounded-xl text-sm transition-all shrink-0 flex items-center justify-center gap-2 cursor-pointer"
                        >
                            <Mail className="w-4 h-4" />
                            Subscribe
                        </button>
                    </form>

                    {subscribed && (
                        <div className="text-xs bg-emerald-500 text-slate-950 font-bold px-4 py-2 rounded-lg flex items-center gap-1.5">
                            <CheckCircle2 className="w-4 h-4" />
                            Subscribed successfully!
                        </div>
                    )}
                </div>

            </div>

            {/* Article Reader Modal */}
            {selectedPost && (
                <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
                    <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in duration-200 text-[#12151A] max-h-[90vh] overflow-y-auto">

                        <button
                            onClick={() => setSelectedPost(null)}
                            className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 rounded-full hover:bg-slate-100 transition-colors"
                        >
                            <X className="w-5 h-5" />
                        </button>

                        <span className="bg-blue-100 text-[#0A2540] text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                            {selectedPost.category}
                        </span>

                        <h3 className="text-2xl font-bold text-[#0A2540] mb-3">{selectedPost.title}</h3>

                        <div className="flex items-center gap-4 text-xs text-slate-400 mb-6 pb-4 border-b border-slate-200">
                            <span>Author: <strong>{selectedPost.author}</strong></span>
                            <span>•</span>
                            <span>{selectedPost.publishDate}</span>
                            <span>•</span>
                            <span>{selectedPost.readTime}</span>
                        </div>

                        <div className="prose text-slate-700 text-sm leading-relaxed space-y-4 mb-8">
                            <p className="font-semibold text-slate-900 italic border-l-4 border-blue-600 pl-3">
                                {selectedPost.excerpt}
                            </p>
                            <p>{selectedPost.content}</p>
                            <p>
                                Our strategic advisory team regularly updates regulatory compliance frameworks to ensure Namibian enterprises and international market entrants operate with complete clarity and peace of mind.
                            </p>
                        </div>

                        <div className="flex justify-end pt-4 border-t border-slate-200">
                            <button
                                onClick={() => setSelectedPost(null)}
                                className="bg-[#0A2540] text-white px-6 py-2 rounded-lg font-bold text-sm"
                            >
                                Close Article
                            </button>
                        </div>

                    </div>
                </div>
            )}

        </section>
    );
};
