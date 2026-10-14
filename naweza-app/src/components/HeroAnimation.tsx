'use client';

import React from 'react';

/**
 * Animated hero backdrop — pure SVG + CSS keyframes (no video, no images).
 * Deep-navy gradient field with rotating dashed rings, orbiting dots,
 * a particle network, and drifting light blobs. GPU-composited, respects
 * prefers-reduced-motion.
 */
export const HeroAnimation: React.FC = () => {
  return (
    <div className="absolute inset-0 -z-0 overflow-hidden bg-[#0A2540]" aria-hidden="true">
      {/* Animated gradient blobs */}
      <div className="hero-blob hero-blob-1"></div>
      <div className="hero-blob hero-blob-2"></div>
      <div className="hero-blob hero-blob-3"></div>

      {/* SVG motion layer */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        fill="none"
      >
        <defs>
          <radialGradient id="heroCore" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#0A2540" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#60A5FA" stopOpacity="0" />
            <stop offset="50%" stopColor="#60A5FA" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLineGold" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#FBBF24" stopOpacity="0" />
            <stop offset="50%" stopColor="#FBBF24" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#FBBF24" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Central glow */}
        <circle cx="600" cy="400" r="380" fill="url(#heroCore)" />

        {/* Rotating dashed rings */}
        <g style={{ transformOrigin: '600px 400px' }} className="hero-ring hero-ring-1">
          <circle cx="600" cy="400" r="180" stroke="#60A5FA" strokeOpacity="0.25" strokeWidth="1" strokeDasharray="6 10" />
        </g>
        <g style={{ transformOrigin: '600px 400px' }} className="hero-ring hero-ring-2">
          <circle cx="600" cy="400" r="250" stroke="#60A5FA" strokeOpacity="0.15" strokeWidth="1" strokeDasharray="2 14" />
        </g>
        <g style={{ transformOrigin: '600px 400px' }} className="hero-ring hero-ring-3">
          <circle cx="600" cy="400" r="320" stroke="#FBBF24" strokeOpacity="0.12" strokeWidth="1" strokeDasharray="1 18" />
        </g>

        {/* Orbiting dots */}
        <g style={{ transformOrigin: '600px 400px' }} className="hero-orbit hero-orbit-1">
          <circle cx="600" cy="150" r="4" fill="#60A5FA" />
        </g>
        <g style={{ transformOrigin: '600px 400px' }} className="hero-orbit hero-orbit-2">
          <circle cx="850" cy="400" r="3" fill="#FBBF24" />
        </g>
        <g style={{ transformOrigin: '600px 400px' }} className="hero-orbit hero-orbit-3">
          <circle cx="350" cy="400" r="3.5" fill="#60A5FA" />
        </g>

        {/* Scanning sweep line */}
        <rect x="200" y="0" width="800" height="1.5" fill="url(#heroLine)" className="hero-sweep" />

        {/* Gold accent sweep */}
        <rect x="300" y="0" width="600" height="1" fill="url(#heroLineGold)" className="hero-sweep hero-sweep-gold" />

        {/* Particle network */}
        <g className="hero-net">
          <line x1="600" y1="400" x2="420" y2="280" stroke="#60A5FA" strokeOpacity="0.3" strokeWidth="1" className="hero-net-line" />
          <line x1="600" y1="400" x2="780" y2="300" stroke="#60A5FA" strokeOpacity="0.3" strokeWidth="1" className="hero-net-line hero-net-line-delay-1" />
          <line x1="600" y1="400" x2="700" y2="560" stroke="#60A5FA" strokeOpacity="0.3" strokeWidth="1" className="hero-net-line hero-net-line-delay-2" />
          <line x1="600" y1="400" x2="450" y2="540" stroke="#60A5FA" strokeOpacity="0.3" strokeWidth="1" className="hero-net-line hero-net-line-delay-3" />
          <circle cx="600" cy="400" r="5" fill="#60A5FA" className="hero-hub" />
          <circle cx="600" cy="400" r="5" fill="none" stroke="#60A5FA" strokeWidth="1.5" className="hero-hub-ring" />
          <circle cx="420" cy="280" r="3" fill="#93C5FD" className="hero-node hero-node-1" />
          <circle cx="780" cy="300" r="3" fill="#93C5FD" className="hero-node hero-node-2" />
          <circle cx="700" cy="560" r="3" fill="#FBBF24" className="hero-node hero-node-3" />
          <circle cx="450" cy="540" r="3" fill="#93C5FD" className="hero-node hero-node-4" />
        </g>

        {/* Floating hexagons */}
        <path
          d="M180 180 l28 16 v32 l-28 16 l-28 -16 v-32 z"
          stroke="#60A5FA" strokeOpacity="0.2" strokeWidth="1" fill="none"
          className="hero-hex hero-hex-1"
        />
        <path
          d="M1020 620 l22 13 v26 l-22 13 l-22 -13 v-26 z"
          stroke="#FBBF24" strokeOpacity="0.18" strokeWidth="1" fill="none"
          className="hero-hex hero-hex-2"
        />
      </svg>

      {/* Bottom fade into page background */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#F4F1EA] to-transparent"></div>
    </div>
  );
};
