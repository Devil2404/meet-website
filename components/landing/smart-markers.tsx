'use client';

import { m } from 'framer-motion';
import {
  FileText,
  DollarSign,
  Building2,
  CheckCircle2,
  AlertTriangle,
  CalendarCheck,
  Clock,
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

/* ── transcript line data ── */
interface TranscriptLine {
  speaker: string;
  initial: string;
  color: string;
  time: string;
  before: string;
  keyword: string;
  after: string;
  badge: string;
  badgeLabel: string;
  icon: React.ElementType;
}

const transcriptLines: TranscriptLine[] = [
  {
    speaker: 'Sarah Chen',
    initial: 'S',
    color: 'bg-violet-500',
    time: '02:14',
    before: "We've allocated a ",
    keyword: 'budget of $50,000',
    after: ' for the new campaign rollout this quarter.',
    badge: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
    badgeLabel: 'Budget',
    icon: DollarSign,
  },
  {
    speaker: 'Mike Rodriguez',
    initial: 'M',
    color: 'bg-sky-500',
    time: '04:32',
    before: 'We should ',
    keyword: 'compare to Salesforce',
    after: ' and see where our feature set stands.',
    badge: 'bg-rose-500/10 text-rose-400 border border-rose-500/20',
    badgeLabel: 'Competitor',
    icon: Building2,
  },
  {
    speaker: 'Emily Johnson',
    initial: 'E',
    color: 'bg-emerald-500',
    time: '08:45',
    before: "After evaluating both proposals, let's ",
    keyword: 'go with option B',
    after: ' — it aligns better with our roadmap.',
    badge: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
    badgeLabel: 'Decision',
    icon: CheckCircle2,
  },
  {
    speaker: 'David Park',
    initial: 'D',
    color: 'bg-amber-500',
    time: '12:18',
    before: 'There are potential ',
    keyword: 'compliance issues',
    after: ' with the EU data residency requirements.',
    badge: 'bg-orange-500/10 text-orange-400 border border-orange-500/20',
    badgeLabel: 'Risk',
    icon: AlertTriangle,
  },
  {
    speaker: 'Sarah Chen',
    initial: 'S',
    color: 'bg-violet-500',
    time: '18:03',
    before: "Let's ",
    keyword: 'reconnect next Tuesday',
    after: ' with updated numbers from the finance team.',
    badge: 'bg-sky-500/10 text-sky-400 border border-sky-500/20',
    badgeLabel: 'Follow Up',
    icon: CalendarCheck,
  },
  {
    speaker: 'Mike Rodriguez',
    initial: 'M',
    color: 'bg-sky-500',
    time: '22:51',
    before: 'Everything needs to ship by the ',
    keyword: 'end of quarter',
    after: ' or we risk losing the contract.',
    badge: 'bg-violet-500/10 text-violet-400 border border-violet-500/20',
    badgeLabel: 'Deadline',
    icon: Clock,
  },
];

/* ── marker category cards ── */
interface MarkerCategory {
  emoji: string;
  icon: React.ElementType;
  name: string;
  example: string;
}

const markerCategories: MarkerCategory[] = [
  {
    emoji: '💰',
    icon: DollarSign,
    name: 'Budget',
    example: 'Detects dollar amounts, funding, and cost references.',
  },
  {
    emoji: '🏢',
    icon: Building2,
    name: 'Competitor',
    example: 'Flags competitor names and comparisons in context.',
  },
  {
    emoji: '✅',
    icon: CheckCircle2,
    name: 'Decision',
    example: 'Catches definitive choices like "let\'s go with…"',
  },
  {
    emoji: '⚠️',
    icon: AlertTriangle,
    name: 'Risk',
    example: 'Surfaces compliance, blockers, and risk language.',
  },
  {
    emoji: '📅',
    icon: CalendarCheck,
    name: 'Follow Up',
    example: 'Identifies action items and meeting commitments.',
  },
  {
    emoji: '⏰',
    icon: Clock,
    name: 'Deadline',
    example: 'Highlights dates, time-sensitive deliverables.',
  },
];

/* ── component ── */
export default function SmartMarkers() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* heading */}
      <m.div className="text-center max-w-3xl mx-auto" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section font-bold text-white">
          Intelligence that catches what you{' '}
          <span className="gradient-text">miss</span>
        </h2>
        <p className="mt-6 text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          Smart Markers automatically detect critical keywords and moments in
          every conversation.
        </p>
      </m.div>

      {/* transcript mockup */}
      <m.div
        className="mt-20 max-w-5xl mx-auto"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.15 }}
      >
        <div className="rounded-2xl border border-white/[0.06] bg-voxa-surface1 overflow-hidden">
          {/* header */}
          <div className="flex items-center gap-3 px-6 py-4 border-b border-white/[0.06] bg-voxa-surface2/60">
            <FileText className="w-4 h-4 text-voxa-purple" />
            <span className="text-sm font-medium text-white/60">
              Meeting Transcript — Q4 Planning Review
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
              <span className="text-xs text-white/30">Live</span>
            </div>
          </div>

          {/* transcript body */}
          <div className="divide-y divide-white/[0.04]">
            {transcriptLines.map((line, i) => (
              <m.div
                key={i}
                className="flex gap-4 px-6 py-4 hover:bg-white/[0.02] transition-colors"
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.07,
                  ease: [0.25, 0.4, 0, 1] as const,
                }}
              >
                {/* avatar */}
                <div
                  className={`flex-shrink-0 w-8 h-8 rounded-full ${line.color} flex items-center justify-center text-xs font-semibold text-white`}
                >
                  {line.initial}
                </div>

                {/* content */}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-white/80">
                      {line.speaker}
                    </span>
                    <span className="text-xs text-white/20">{line.time}</span>
                    <span
                      className={`ml-auto text-[10px] px-2 py-0.5 rounded-full font-medium ${line.badge} flex items-center gap-1`}
                    >
                      <line.icon className="w-3 h-3" />
                      {line.badgeLabel}
                    </span>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {line.before}
                    <m.span
                      className={`inline-flex px-1.5 py-0.5 rounded-md text-xs font-medium mx-0.5 ${line.badge}`}
                      animate={{
                        opacity: [1, 0.7, 1],
                        boxShadow: [
                          '0 0 0px rgba(123,92,245,0)',
                          '0 0 8px rgba(123,92,245,0.3)',
                          '0 0 0px rgba(123,92,245,0)',
                        ],
                      }}
                      transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                    >
                      {line.keyword}
                    </m.span>
                    {line.after}
                  </p>
                </div>
              </m.div>
            ))}
          </div>
        </div>
      </m.div>

      {/* marker category cards */}
      <m.div
        className="mt-12 max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
      >
        {markerCategories.map((cat) => (
          <m.div
            key={cat.name}
            variants={item}
            whileHover={{ y: -2, boxShadow: '0 4px 20px rgba(123,92,245,0.15)' }}
            className="p-5 rounded-xl border border-white/[0.06] bg-voxa-surface1 hover:border-white/[0.12] transition-all cursor-default group"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded bg-white/5 flex items-center justify-center text-voxa-purple">
                <cat.icon className="w-4 h-4" />
              </div>
              <span className="font-semibold text-white">{cat.name}</span>
            </div>
            <p className="mt-2 text-sm text-white/40 leading-relaxed">
              {cat.example}
            </p>
          </m.div>
        ))}
      </m.div>
    </section>
  );
}
