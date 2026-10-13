'use me';
'use client';

import React from 'react';

/**
 * Animated tech visual — pure SVG + CSS, no external assets.
 * Design: rotating rings, orbiting dots, scanning sweep,
 * pulsing circuit nodes, floating hexagons, and a soft
 * particle-network core in the middle (no big letter).
 */
export const TechAnimation: React.FC = () => {
    // Particle network: 6 nodes around center, connected to center + neighbours
    const nodes = Array.from({ length: 6 }, (_, i) => {
        const a = (Math.PI / 3) * i - Math.PI / 2;
        return { x: 200 + 62 * Math.cos(a), y: 200 + 62 * Math.sin(a), a };
    });
    const center = { x: 200, y: 200 };

    return (
        <div className="w-full aspect-square max-w-[440px] mx-auto relative select-none" aria-hidden="true">
            <svg
                viewBox="0 0 400 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    {/* Glow filter for nodes */}
                    <filter id="cmpGlow" x="-60%" y="-60%" width="220%" height="220%">
                        <feGaussianBlur stdDeviation="3.5" result="blur" />
                        <feMerge>
                            <feMergeNode in="blur" />
                            <feMergeNode in="SourceGraphic" />
                        </feMerge>
                    </filter>
                    {/* Sweep gradient — fades the scanning line at both ends */}
                    <linearGradient id="cmpSweep" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#38BDF8" stopOpacity="0" />
                        <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.55" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                    </linearGradient>
                    {/* Core radial glow */}
                    <radialGradient id="cmpCore" cx="50%" cy="50%" r="50%">
                        <stop offset="0%" stopColor="#7DD3FC" stopOpacity="0.55" />
                        <stop offset="55%" stopColor="#38BDF8" stopOpacity="0.18" />
                        <stop offset="100%" stopColor="#38BDF8" stopOpacity="0" />
                    </radialGradient>
                </defs>

                {/* ===== Outer ring — dashed, slow clockwise spin ===== */}
                <circle
                    cx="200" cy="200" r="180"
                    fill="none"
                    stroke="#38BDF8"
                    strokeOpacity="0.35"
                    strokeWidth="1.5"
                    strokeDasharray="6 14"
                    className="cmp-spin-slow"
                    style={{ transformOrigin: '200px 200px' }}
                />

                {/* ===== Second ring — solid faint, counter-spin ===== */}
                <circle
                    cx="200" cy="200" r="152"
                    fill="none"
                    stroke="#7DD3FC"
                    strokeOpacity="0.18"
                    strokeWidth="1"
                    className="cmp-spin-rev"
                    style={{ transformOrigin: '200px 200px' }}
                />

                {/* ===== Mid ring — arc segments spinning ===== */}
                <g className="cmp-spin-med" style={{ transformOrigin: '200px 200px' }}>
                    <path
                        d="M 200 48 A 152 152 0 0 1 331 115"
                        fill="none" stroke="#38BDF8" strokeWidth="3"
                        strokeLinecap="round" strokeOpacity="0.85"
                    />
                    <path
                        d="M 200 352 A 152 152 0 0 1 69 285"
                        fill="none" stroke="#38BDF8" strokeWidth="3"
                        strokeLinecap="round" strokeOpacity="0.85"
                    />
                </g>

                {/* ===== Inner ring — dashed, fast spin ===== */}
                <circle
                    cx="200" cy="200" r="112"
                    fill="none"
                    stroke="#38BDF8"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeDasharray="3 9"
                    className="cmp-spin-fast"
                    style={{ transformOrigin: '200px 200px' }}
                />

                {/* ===== Scanning sweep — horizontal line sweeping vertically ===== */}
                <g className="cmp-sweep" style={{ transformOrigin: '200px 200px' }}>
                    <rect x="20" y="197" width="360" height="2" fill="url(#cmpSweep)" />
                    <rect x="20" y="201" width="360" height="0.5" fill="url(#cmpSweep)" opacity="0.4" />
                </g>

                {/* ===== Core glow ===== */}
                <circle cx="200" cy="200" r="70" fill="url(#cmpCore)" className="cmp-pulse-core" style={{ transformOrigin: '200px 200px' }} />

                {/* ===== Particle network core (replaces the big "C") ===== */}
                <g className="cmp-net" style={{ transformOrigin: '200px 200px' }}>
                    {/* connection lines: center to each node */}
                    {nodes.map((n, i) => (
                        <line
                            key={`cl-${i}`}
                            x1={center.x} y1={center.y}
                            x2={n.x} y2={n.y}
                            stroke="#38BDF8"
                            strokeOpacity="0.35"
                            strokeWidth="1"
                            className="cmp-net-line"
                            style={{ animationDelay: `${i * 0.35}s` }}
                        />
                    ))}
                    {/* connection lines: neighbouring nodes */}
                    {nodes.map((n, i) => {
                        const m = nodes[(i + 1) % nodes.length];
                        return (
                            <line
                                key={`nl-${i}`}
                                x1={n.x} y1={n.y}
                                x2={m.x} y2={m.y}
                                stroke="#38BDF8"
                                strokeOpacity="0.2"
                                strokeWidth="1"
                            />
                        );
                    })}
                    {/* outer nodes */}
                    {nodes.map((n, i) => (
                        <circle
                            key={`on-${i}`}
                            cx={n.x} cy={n.y} r="5"
                            fill="#7DD3FC"
                            filter="url(#cmpGlow)"
                            className="cmp-node"
                            style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${n.x}px ${n.y}px` }}
                        />
                    ))}
                    {/* center hub */}
                    <circle cx="200" cy="200" r="6" fill="#FFFFFF" filter="url(#cmpGlow)" className="cmp-hub" style={{ transformOrigin: '200px 200px' }} />
                    <circle cx="200" cy="200" r="12" fill="none" stroke="#7DD3FC" strokeWidth="1" strokeOpacity="0.5" className="cmp-hub-ring" style={{ transformOrigin: '200px 200px' }} />
                </g>

                {/* ===== Circuit nodes on mid ring (4 diagonal) ===== */}
                {[
                    { x: 200 + 152 * Math.cos(Math.PI / 4), y: 200 + 152 * Math.sin(Math.PI / 4) },
                    { x: 200 + 152 * Math.cos((3 * Math.PI) / 4), y: 200 + 152 * Math.sin((3 * Math.PI) / 4) },
                    { x: 200 + 152 * Math.cos((5 * Math.PI) / 4), y: 200 + 152 * Math.sin((5 * Math.PI) / 4) },
                    { x: 200 + 152 * Math.cos((7 * Math.PI) / 4), y: 200 + 152 * Math.sin((7 * Math.PI) / 4) },
                ].map((p, i) => (
                    <circle
                        key={`rn-${i}`}
                        cx={p.x} cy={p.y} r="7"
                        fill="#7DD3FC"
                        filter="url(#cmpGlow)"
                        className="cmp-node"
                        style={{ animationDelay: `${i * 0.5}s`, transformOrigin: `${p.x}px ${p.y}px` }}
                    />
                ))}

                {/* ===== Orbiting dots ===== */}
                {[
                    { r: 180, speed: 8, size: 4, color: '#38BDF8', delay: 0 },
                    { r: 152, speed: 6, size: 3, color: '#7DD3FC', delay: 2 },
                ].map((d, i) => (
                    <g
                        key={`orbit-${i}`}
                        className="cmp-orbit"
                        style={{
                            transformOrigin: '200px 200px',
                            animationDuration: `${d.speed}s`,
                            animationDelay: `-${d.delay}s`,
                        }}
                    >
                        <circle cx="200" cy={200 - d.r} r={d.size} fill={d.color} filter="url(#cmpGlow)" />
                    </g>
                ))}

                {/* ===== Floating hexagons ===== */}
                {[
                    { x: 62, y: 92, s: 14, d: 0 },
                    { x: 338, y: 78, s: 11, d: 1.5 },
                    { x: 348, y: 300, s: 16, d: 3 },
                    { x: 70, y: 318, s: 12, d: 4.5 },
                ].map((h, i) => {
                    const pts = Array.from({ length: 6 }, (_, k) => {
                        const a = (Math.PI / 3) * k - Math.PI / 2;
                        return `${h.x + h.s * Math.cos(a)},${h.y + h.s * Math.sin(a)}`;
                    }).join(' ');
                    return (
                        <polygon
                            key={`hex-${i}`}
                            points={pts}
                            fill="none"
                            stroke="#38BDF8"
                            strokeWidth="1.5"
                            strokeOpacity="0.5"
                            className="cmp-hex"
                            style={{ animationDelay: `${h.d}s` }}
                        />
                    );
                })}

                {/* ===== Data pulses traveling along the rings ===== */}
                {[
                    { r: 112, speed: 3, d: 0 },
                    { r: 152, speed: 5, d: 1.2 },
                ].map((p, i) => (
                    <g
                        key={`pulse-${i}`}
                        className="cmp-orbit"
                        style={{
                            transformOrigin: '200px 200px',
                            animationDuration: `${p.speed}s`,
                            animationDelay: `-${p.d}s`,
                        }}
                    >
                        <circle cx="200" cy={200 - p.r} r="2" fill="#7DD3FC" filter="url(#cmpGlow)" />
                    </g>
                ))}

            </svg>
        </div>
    );
};
