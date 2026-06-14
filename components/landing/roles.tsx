'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  UserCheck,
  Rocket,
  Briefcase,
  Lightbulb,
  Check,
} from 'lucide-react';

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

/* ── role data ── */
interface RoleCard {
  icon: React.ElementType;
  role: string;
  tagline: string;
  accentColor: string;       // tailwind color name
  accentBg: string;          // icon circle bg
  accentGlow: string;        // radial glow color
  capabilities: string[];
  colSpan: string;
}

const roles: RoleCard[] = [
  {
    icon: TrendingUp,
    role: 'Sales',
    tagline: 'Never miss a buying signal.',
    accentColor: 'text-emerald-400',
    accentBg: 'bg-emerald-500/10',
    accentGlow: 'bg-emerald-500/5',
    capabilities: [
      'Detect budget mentions & deal size',
      'Track competitor references',
      'Auto-log calls to CRM',
    ],
    colSpan: 'lg:col-span-2',
  },
  {
    icon: UserCheck,
    role: 'Recruiters',
    tagline: 'Evaluate candidates objectively.',
    accentColor: 'text-sky-400',
    accentBg: 'bg-sky-500/10',
    accentGlow: 'bg-sky-500/5',
    capabilities: [
      'Score candidate responses',
      'Track interview patterns',
      'Generate structured feedback',
    ],
    colSpan: '',
  },
  {
    icon: Rocket,
    role: 'Founders',
    tagline: 'Stay aligned without attending.',
    accentColor: 'text-violet-400',
    accentBg: 'bg-violet-500/10',
    accentGlow: 'bg-violet-500/5',
    capabilities: [
      'Get meeting summaries instantly',
      'Track key decisions made',
      'Monitor team engagement',
    ],
    colSpan: '',
  },
  {
    icon: Briefcase,
    role: 'Consultants',
    tagline: 'Document every engagement.',
    accentColor: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    accentGlow: 'bg-amber-500/5',
    capabilities: [
      'Generate client reports',
      'Track deliverable discussions',
      'Log billable meeting time',
    ],
    colSpan: 'lg:col-span-2',
  },
  {
    icon: Lightbulb,
    role: 'Product Managers',
    tagline: 'Turn feedback into features.',
    accentColor: 'text-rose-400',
    accentBg: 'bg-rose-500/10',
    accentGlow: 'bg-rose-500/5',
    capabilities: [
      'Extract feature requests',
      'Identify user pain points',
      'Prioritize by frequency',
    ],
    colSpan: '',
  },
];

/* ── component ── */
export default function Roles() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* heading */}
      <motion.div className="text-center max-w-3xl mx-auto" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section font-bold text-white">
          Built for every role at the{' '}
          <span className="gradient-text">table</span>
        </h2>
        <p className="mt-6 text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          Voxa adapts its intelligence to match how you work.
        </p>
      </motion.div>

      {/* bento grid */}
      <motion.div
        className="mt-16 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {roles.map((r) => {
          const Icon = r.icon;
          return (
            <motion.div
              key={r.role}
              variants={item}
              className={`p-8 rounded-2xl border border-white/[0.06] bg-voxa-surface1 relative overflow-hidden group hover:border-white/[0.12] transition-all ${r.colSpan}`}
            >
              {/* accent glow */}
              <div
                className={`absolute -top-12 -right-12 w-48 h-48 rounded-full ${r.accentGlow} blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none`}
              />

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
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}
