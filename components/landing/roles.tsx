'use client';

import { m } from 'framer-motion';
import {
  TrendingUp,
  UserCheck,
  Rocket,
  Briefcase,
  Lightbulb,
  Check,
} from 'lucide-react';
import React from 'react';

/* ── animation variants ── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.4, 0, 1] as const },
  },
};

/* ── SVG illustrations ── */
function SalesIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sales-bar1" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#059669" />
          <stop offset="100%" stopColor="#34d399" />
        </linearGradient>
        <linearGradient id="sales-bar2" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#047857" />
          <stop offset="100%" stopColor="#6ee7b7" />
        </linearGradient>
        <linearGradient id="sales-bar3" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#065f46" />
          <stop offset="100%" stopColor="#a7f3d0" />
        </linearGradient>
      </defs>
      {/* base line */}
      <line x1="20" y1="115" x2="120" y2="115" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
      {/* bar 1 */}
      <rect x="25" y="80" width="22" height="35" rx="4" fill="url(#sales-bar1)" opacity="0.9" />
      <text x="36" y="74" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="600">$</text>
      {/* bar 2 */}
      <rect x="58" y="55" width="22" height="60" rx="4" fill="url(#sales-bar2)" opacity="0.9" />
      <text x="69" y="49" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="600">$$</text>
      {/* bar 3 */}
      <rect x="91" y="30" width="22" height="85" rx="4" fill="url(#sales-bar3)" opacity="0.9" />
      <text x="102" y="24" textAnchor="middle" fill="rgba(255,255,255,0.5)" fontSize="10" fontWeight="600">$$$</text>
      {/* trend arrow */}
      <path d="M30 95 L65 70 L100 40" stroke="#34d399" strokeWidth="2" strokeDasharray="4 3" fill="none" opacity="0.6" />
      <polygon points="100,35 105,43 95,43" fill="#34d399" opacity="0.6" />
    </svg>
  );
}

function RecruitersIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* avatar */}
      <circle cx="70" cy="42" r="18" fill="rgba(56,189,248,0.15)" stroke="#38bdf8" strokeWidth="1.5" />
      <circle cx="70" cy="37" r="6" fill="#38bdf8" opacity="0.7" />
      <path d="M58 50 Q70 58 82 50" stroke="#38bdf8" strokeWidth="1.5" fill="none" opacity="0.7" />
      {/* stars */}
      {[0, 1, 2, 3, 4].map((i) => (
        <polygon
          key={i}
          points="0,-5 1.5,-1.5 5.5,-1.5 2.5,1 3.5,5 0,2.5 -3.5,5 -2.5,1 -5.5,-1.5 -1.5,-1.5"
          transform={`translate(${42 + i * 14}, 72)`}
          fill={i < 4 ? '#facc15' : 'rgba(255,255,255,0.1)'}
          opacity={i < 4 ? 0.9 : 0.5}
        />
      ))}
      {/* progress bars */}
      <rect x="25" y="88" width="90" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="25" y="88" width="75" height="6" rx="3" fill="#38bdf8" opacity="0.7" />
      <text x="25" y="108" fill="rgba(255,255,255,0.35)" fontSize="8">Technical</text>
      <rect x="25" y="112" width="90" height="6" rx="3" fill="rgba(255,255,255,0.06)" />
      <rect x="25" y="112" width="60" height="6" rx="3" fill="#7dd3fc" opacity="0.7" />
      <text x="25" y="130" fill="rgba(255,255,255,0.35)" fontSize="8">Culture Fit</text>
    </svg>
  );
}

function FoundersIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* metric boxes */}
      <rect x="10" y="15" width="55" height="35" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      <text x="20" y="32" fill="rgba(255,255,255,0.4)" fontSize="7">Revenue</text>
      <text x="20" y="44" fill="#a78bfa" fontSize="13" fontWeight="700">$1.2M</text>

      <rect x="75" y="15" width="55" height="35" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      <text x="85" y="32" fill="rgba(255,255,255,0.4)" fontSize="7">Growth</text>
      <text x="85" y="44" fill="#a78bfa" fontSize="13" fontWeight="700">+24%</text>

      <rect x="10" y="58" width="55" height="35" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      <text x="20" y="75" fill="rgba(255,255,255,0.4)" fontSize="7">Meetings</text>
      <text x="20" y="87" fill="#a78bfa" fontSize="13" fontWeight="700">142</text>

      <rect x="75" y="58" width="55" height="35" rx="6" fill="rgba(139,92,246,0.1)" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
      <text x="85" y="75" fill="rgba(255,255,255,0.4)" fontSize="7">Actions</text>
      <text x="85" y="87" fill="#a78bfa" fontSize="13" fontWeight="700">38</text>

      {/* mini trend line */}
      <polyline
        points="15,125 30,118 50,120 70,108 90,112 110,100 125,105"
        stroke="#a78bfa"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="125" cy="105" r="3" fill="#a78bfa" opacity="0.9" />
    </svg>
  );
}

function ConsultantsIllustration() {
  return (
    <svg width="200" height="200" viewBox="0 0 140 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* clock face */}
      <circle cx="65" cy="60" r="38" fill="rgba(251,191,36,0.06)" stroke="rgba(251,191,36,0.25)" strokeWidth="1.5" />
      <circle cx="65" cy="60" r="2" fill="#fbbf24" />
      {/* hour marks */}
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
        <line
          key={deg}
          x1="65"
          y1="26"
          x2="65"
          y2="30"
          stroke="rgba(255,255,255,0.2)"
          strokeWidth="1.5"
          transform={`rotate(${deg} 65 60)`}
        />
      ))}
      {/* hour hand */}
      <line x1="65" y1="60" x2="65" y2="38" stroke="#fbbf24" strokeWidth="2" strokeLinecap="round" />
      {/* minute hand */}
      <line x1="65" y1="60" x2="82" y2="52" stroke="#fbbf24" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
      {/* progress arc */}
      <circle
        cx="65"
        cy="60"
        r="38"
        fill="none"
        stroke="#fbbf24"
        strokeWidth="3"
        strokeDasharray={`${2 * Math.PI * 38 * 0.75} ${2 * Math.PI * 38 * 0.25}`}
        strokeLinecap="round"
        opacity="0.5"
        transform="rotate(-90 65 60)"
      />
      {/* calendar icon */}
      <rect x="108" y="95" width="24" height="24" rx="4" fill="rgba(251,191,36,0.1)" stroke="rgba(251,191,36,0.3)" strokeWidth="1" />
      <line x1="113" y1="95" x2="113" y2="91" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="127" y1="95" x2="127" y2="91" stroke="rgba(251,191,36,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="108" y1="103" x2="132" y2="103" stroke="rgba(251,191,36,0.2)" strokeWidth="0.75" />
      <rect x="113" y="107" width="4" height="4" rx="1" fill="#fbbf24" opacity="0.6" />
      <rect x="121" y="107" width="4" height="4" rx="1" fill="rgba(251,191,36,0.25)" />
      {/* billable label */}
      <text x="65" y="120" textAnchor="middle" fill="rgba(255,255,255,0.3)" fontSize="8">75% billable</text>
    </svg>
  );
}

function ProductManagersIllustration() {
  return (
    <svg width="800" height="300" viewBox="0 0 380 140" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* column headers */}
      <text x="22" y="15" fill="rgba(255,255,255,0.35)" fontSize="8" fontWeight="600">Backlog</text>
      <text x="97" y="15" fill="rgba(255,255,255,0.35)" fontSize="8" fontWeight="600">To Do</text>
      <text x="172" y="15" fill="rgba(255,255,255,0.35)" fontSize="8" fontWeight="600">In Progress</text>
      <text x="247" y="15" fill="rgba(255,255,255,0.35)" fontSize="8" fontWeight="600">In Review</text>
      <text x="322" y="15" fill="rgba(255,255,255,0.35)" fontSize="8" fontWeight="600">Done</text>

      {/* column dividers */}
      <line x1="75" y1="10" x2="75" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="150" y1="10" x2="150" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="225" y1="10" x2="225" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
      <line x1="300" y1="10" x2="300" y2="130" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

      {/* Backlog cards */}
      <rect x="8" y="24" width="55" height="28" rx="4" fill="rgba(244,63,94,0.05)" stroke="rgba(244,63,94,0.15)" strokeWidth="0.75" />
      <circle cx="16" cy="33" r="3" fill="#64748b" opacity="0.8" />
      <rect x="22" y="31" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="22" y="37" width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="8" y="58" width="55" height="28" rx="4" fill="rgba(244,63,94,0.05)" stroke="rgba(244,63,94,0.15)" strokeWidth="0.75" />
      <circle cx="16" cy="67" r="3" fill="#64748b" opacity="0.8" />
      <rect x="22" y="65" width="25" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="22" y="71" width="15" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      {/* To Do cards */}
      <rect x="83" y="24" width="55" height="28" rx="4" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.25)" strokeWidth="0.75" />
      <circle cx="91" cy="33" r="3" fill="#f43f5e" opacity="0.8" />
      <rect x="97" y="31" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="97" y="37" width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="83" y="58" width="55" height="28" rx="4" fill="rgba(244,63,94,0.08)" stroke="rgba(244,63,94,0.2)" strokeWidth="0.75" />
      <circle cx="91" cy="67" r="3" fill="#fb923c" opacity="0.8" />
      <rect x="97" y="65" width="25" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="97" y="71" width="15" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      {/* In Progress cards */}
      <rect x="158" y="24" width="55" height="28" rx="4" fill="rgba(244,63,94,0.1)" stroke="rgba(244,63,94,0.25)" strokeWidth="0.75" />
      <circle cx="166" cy="33" r="3" fill="#f43f5e" opacity="0.8" />
      <rect x="172" y="31" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="172" y="37" width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      {/* In Review cards */}
      <rect x="233" y="24" width="55" height="28" rx="4" fill="rgba(168,85,247,0.1)" stroke="rgba(168,85,247,0.25)" strokeWidth="0.75" />
      <circle cx="241" cy="33" r="3" fill="#a855f7" opacity="0.8" />
      <rect x="247" y="31" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="247" y="37" width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="233" y="58" width="55" height="28" rx="4" fill="rgba(168,85,247,0.08)" stroke="rgba(168,85,247,0.2)" strokeWidth="0.75" />
      <circle cx="241" cy="67" r="3" fill="#c084fc" opacity="0.8" />
      <rect x="247" y="65" width="25" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="247" y="71" width="15" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      {/* Done cards */}
      <rect x="308" y="24" width="55" height="28" rx="4" fill="rgba(34,197,94,0.1)" stroke="rgba(34,197,94,0.25)" strokeWidth="0.75" />
      <circle cx="316" cy="33" r="3" fill="#22c55e" opacity="0.8" />
      <rect x="322" y="31" width="30" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="322" y="37" width="20" height="2" rx="1" fill="rgba(255,255,255,0.1)" />

      <rect x="308" y="58" width="55" height="28" rx="4" fill="rgba(34,197,94,0.08)" stroke="rgba(34,197,94,0.2)" strokeWidth="0.75" />
      <circle cx="316" cy="67" r="3" fill="#4ade80" opacity="0.8" />
      <rect x="322" y="65" width="25" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="322" y="71" width="15" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
      
      <rect x="308" y="92" width="55" height="28" rx="4" fill="rgba(34,197,94,0.06)" stroke="rgba(34,197,94,0.15)" strokeWidth="0.75" />
      <circle cx="316" cy="101" r="3" fill="#86efac" opacity="0.8" />
      <rect x="322" y="99" width="20" height="2" rx="1" fill="rgba(255,255,255,0.2)" />
      <rect x="322" y="105" width="10" height="2" rx="1" fill="rgba(255,255,255,0.1)" />
    </svg>
  );
}

/* ── role data ── */
interface RoleCard {
  icon: React.ElementType;
  role: string;
  tagline: string;
  accentColor: string;
  accentBg: string;
  accentGlow: string;
  glowHex: string;
  capabilities: string[];
  colSpan: string;
  illustration: React.FC;
}

const roles: RoleCard[] = [
  {
    icon: TrendingUp,
    role: 'Sales',
    tagline: 'Never miss a buying signal.',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentGlow: 'bg-emerald-500/5',
    glowHex: '#34d399',
    capabilities: [
      'Detect budget mentions & deal size',
      'Track competitor references',
      'Auto-log calls to CRM',
    ],
    colSpan: 'lg:col-span-1',
    illustration: SalesIllustration,
  },
  {
    icon: UserCheck,
    role: 'Recruiters',
    tagline: 'Evaluate candidates objectively.',
    accentColor: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentGlow: 'bg-sky-500/5',
    glowHex: '#38bdf8',
    capabilities: [
      'Score candidate responses',
      'Track interview patterns',
      'Generate structured feedback',
    ],
    colSpan: 'lg:col-span-1',
    illustration: RecruitersIllustration,
  },
  {
    icon: Rocket,
    role: 'Founders',
    tagline: 'Stay aligned without attending.',
    accentColor: 'text-violet-400',
    accentBg: 'bg-violet-500/10',
    accentGlow: 'bg-violet-500/5',
    glowHex: '#a78bfa',
    capabilities: [
      'Get meeting summaries instantly',
      'Track key decisions made',
      'Monitor team engagement',
    ],
    colSpan: 'lg:col-span-1',
    illustration: FoundersIllustration,
  },
  {
    icon: Briefcase,
    role: 'Consultants',
    tagline: 'Document every engagement.',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentGlow: 'bg-amber-500/5',
    glowHex: '#fbbf24',
    capabilities: [
      'Generate client reports',
      'Track deliverable discussions',
      'Log billable meeting time',
    ],
    colSpan: 'lg:col-span-1',
    illustration: ConsultantsIllustration,
  },
  {
    icon: Lightbulb,
    role: 'Product Managers',
    tagline: 'Turn feedback into features.',
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-500/10',
    accentGlow: 'bg-rose-500/5',
    glowHex: '#fb7185',
    capabilities: [
      'Extract feature requests',
      'Identify user pain points',
      'Prioritize by frequency',
    ],
    colSpan: 'lg:col-span-2',
    illustration: ProductManagersIllustration,
  },
];

/* ── component ── */
export default function Roles() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* heading */}
      <m.div className="text-center max-w-3xl mx-auto" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section font-bold text-white">
          Built for every role at the{' '}
          <span className="gradient-text">table</span>
        </h2>
        <p className="mt-6 text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          Voxa adapts its intelligence to match how you work.
        </p>
      </m.div>

      {/* bento grid */}
      <m.div
        className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {roles.map((r) => {
          const Icon = r.icon;
          const Illustration = r.illustration;
          return (
            <m.div
              key={r.role}
              variants={item}
              className={`p-8 rounded-2xl border border-white/[0.06] bg-voxa-surface1 relative overflow-hidden group hover:border-white/[0.12] transition-all ${r.colSpan}`}
            >
              {/* accent glow */}
              <div
                className={`absolute -top-12 -right-12 w-48 h-48 rounded-full ${r.accentGlow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

              {/* two-column layout */}
              <div className="flex flex-col sm:flex-row items-center gap-6">
                {/* left: text content */}
                <div className="flex-1 min-w-0">
                  {/* icon */}
                  <div
                    className={`w-11 h-11 rounded-xl ${r.accentBg} flex items-center justify-center`}
                  >
                    <Icon className={`w-5 h-5 ${r.accentColor}`} />
                  </div>

                  {/* text */}
                  <h3 className="text-xl font-semibold text-white mt-4">
                    {r.role}
                  </h3>
                  <p className="text-white/40 mt-1">{r.tagline}</p>

                  {/* capabilities */}
                  <ul className="mt-6 space-y-3">
                    {r.capabilities.map((cap) => (
                      <li
                        key={cap}
                        className="flex items-start gap-2 text-sm text-white/50"
                      >
                        <Check className="w-4 h-4 mt-0.5 text-voxa-purple flex-shrink-0" />
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* right: SVG illustration */}
                <div className="hidden sm:flex items-center justify-center shrink-0 relative">
                  {/* glow behind SVG */}
                  <div
                    className="absolute w-24 h-24 rounded-full blur-2xl opacity-30 pointer-events-none"
                    style={{ backgroundColor: r.glowHex }}
                  />
                  <div className="animate-float-slow relative">
                    <Illustration />
                  </div>
                </div>
              </div>
            </m.div>
          );
        })}
      </m.div>

    </section>
  );
}
