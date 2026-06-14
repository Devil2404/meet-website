'use client';

import { motion } from 'framer-motion';
import {
  FileText,
  Sparkles,
  Highlighter,
  CheckSquare,
  BarChart3,
  RefreshCw,
  ArrowRight,
  Check,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

/* ─── Animation helpers ───────────────────────────────────────────── */

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

const stagger = {
  initial: 'hidden' as const,
  whileInView: 'visible' as const,
  viewport: { once: true, margin: '-80px' },
  variants: { visible: { transition: { staggerChildren: 0.08 } } },
};

const staggerChild = {
  variants: {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.25, 0.4, 0, 1] as const },
    },
  },
};

/* ─── Feature data ────────────────────────────────────────────────── */

interface Feature {
  label: string;
  labelColor: string;
  icon: LucideIcon;
  title: string;
  description: string;
  benefits: string[];
}

const features: Feature[] = [
  {
    label: 'Transcription',
    labelColor: '#7B5CF5',
    icon: FileText,
    title: 'Live Transcript',
    description:
      'Every word captured in real-time with speaker identification. Never miss a detail even in fast-paced conversations.',
    benefits: [
      '99% accuracy with custom vocabulary',
      'Supports 30+ languages natively',
      'Auto-detects speaker changes',
    ],
  },
  {
    label: 'Intelligence',
    labelColor: '#4F6AFA',
    icon: Sparkles,
    title: 'AI Summary',
    description:
      'Get structured summaries the moment your meeting ends. Key topics, decisions, and next steps distilled automatically.',
    benefits: [
      'Delivered within 30 seconds of meeting end',
      'Structured by topic and priority',
      'Shareable with one click',
    ],
  },
  {
    label: 'Markers',
    labelColor: '#1CC4E8',
    icon: Highlighter,
    title: 'Smart Markers',
    description:
      'Critical mentions are automatically tagged and highlighted — budgets, competitors, deadlines, and commitments.',
    benefits: [
      'Auto-detects financial figures',
      'Highlights competitor mentions',
      'Flags dates and deadlines',
    ],
  },
  {
    label: 'Tasks',
    labelColor: '#22C55E',
    icon: CheckSquare,
    title: 'Action Items',
    description:
      'Action items are extracted from natural conversation and assigned to the right people with due dates.',
    benefits: [
      'Auto-assigned to mentioned team members',
      'Syncs with Jira, Asana, and Linear',
      'Smart deadline inference',
    ],
  },
  {
    label: 'Analytics',
    labelColor: '#F59E0B',
    icon: BarChart3,
    title: 'Speaker Analytics',
    description:
      'Understand meeting dynamics with detailed talk-time breakdowns, interruption tracking, and participation scores.',
    benefits: [
      'Talk-time distribution per speaker',
      'Engagement scoring',
      'Historical trend analysis',
    ],
  },
  {
    label: 'Integration',
    labelColor: '#EC4899',
    icon: RefreshCw,
    title: 'CRM Sync',
    description:
      'Meeting insights flow directly into your CRM. Contacts, notes, and follow-ups update automatically after every call.',
    benefits: [
      'Salesforce, HubSpot, and Pipedrive',
      'Bi-directional sync',
      'Zero manual data entry',
    ],
  },
];

/* ─── Feature Mockups ─────────────────────────────────────────────── */

function TranscriptMockup() {
  const lines = [
    { speaker: 'Sarah K.', time: '10:02', text: 'Let me walk through the Q3 pipeline numbers.', highlight: false },
    { speaker: 'Mark R.', time: '10:03', text: 'Revenue is up 34% compared to last quarter.', highlight: true },
    { speaker: 'Sarah K.', time: '10:04', text: 'The enterprise segment drove most of that growth.', highlight: false },
    { speaker: 'James T.', time: '10:05', text: 'We need to double down on mid-market too.', highlight: true },
    { speaker: 'Alex W.', time: '10:06', text: 'Agreed. Let\'s review the mid-market playbook.', highlight: false },
  ];

  return (
    <div className="space-y-3">
      {lines.map((line, i) => (
        <div
          key={i}
          className={`flex gap-3 p-2.5 rounded-lg transition-colors ${
            line.highlight ? 'bg-voxa-purple/5 border border-voxa-purple/10' : ''
          }`}
        >
          <div className="w-7 h-7 rounded-full bg-voxa-surface2 flex items-center justify-center flex-shrink-0">
            <span className="text-[9px] text-white/50 font-semibold">
              {line.speaker.split(' ').map((n) => n[0]).join('')}
            </span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-medium text-white/60">{line.speaker}</span>
              <span className="text-[10px] text-white/20">{line.time}</span>
            </div>
            <p className="text-xs text-white/40 mt-0.5 leading-relaxed">{line.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

function SummaryMockup() {
  const topics = ['Pipeline Review', 'Q3 Revenue', 'Mid-Market Strategy'];
  const decisions = [
    'Increase mid-market sales headcount by 3',
    'Adopt new lead scoring model by end of Q3',
  ];
  const nextSteps = [
    'Sarah to share updated pipeline report by Friday',
    'Mark to schedule follow-up with enterprise team',
  ];

  return (
    <div className="space-y-5">
      <div>
        <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-2">
          Key Topics
        </h4>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-voxa-indigo/10 text-voxa-indigo text-[11px] font-medium"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
      <div>
        <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-2">
          Decisions Made
        </h4>
        <ul className="space-y-1.5">
          {decisions.map((d) => (
            <li key={d} className="flex items-start gap-2 text-xs text-white/40">
              <span className="w-1 h-1 rounded-full bg-voxa-purple mt-1.5 flex-shrink-0" />
              {d}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-2">
          Next Steps
        </h4>
        <ul className="space-y-1.5">
          {nextSteps.map((s) => (
            <li key={s} className="flex items-start gap-2 text-xs text-white/40">
              <span className="w-1 h-1 rounded-full bg-voxa-cyan mt-1.5 flex-shrink-0" />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function MarkersMockup() {
  const lines = [
    {
      text: 'The total budget is',
      marker: 'Budget: $50K',
      markerBg: 'bg-amber-500/10',
      markerText: 'text-amber-400',
      suffix: 'for this initiative.',
    },
    {
      text: 'Main competitor to watch is',
      marker: 'Competitor: Salesforce',
      markerBg: 'bg-red-500/10',
      markerText: 'text-red-400',
      suffix: 'in the enterprise space.',
    },
    {
      text: 'We need to hit this by',
      marker: 'Deadline: Q2',
      markerBg: 'bg-voxa-purple/10',
      markerText: 'text-voxa-purple',
      suffix: 'at the latest.',
    },
  ];

  return (
    <div className="space-y-4">
      {lines.map((line, i) => (
        <div key={i} className="p-3 rounded-lg bg-voxa-surface2/50">
          <p className="text-xs text-white/40 leading-relaxed">
            {line.text}{' '}
            <span
              className={`inline-flex px-1.5 py-0.5 rounded ${line.markerBg} ${line.markerText} text-[10px] font-medium`}
            >
              {line.marker}
            </span>{' '}
            {line.suffix}
          </p>
        </div>
      ))}
    </div>
  );
}

function ActionItemsMockup() {
  const items = [
    {
      text: 'Share updated pipeline report',
      assignee: 'SK',
      due: 'Jun 20',
      done: true,
      color: '#7B5CF5',
    },
    {
      text: 'Schedule enterprise team sync',
      assignee: 'MR',
      due: 'Jun 22',
      done: false,
      color: '#4F6AFA',
    },
    {
      text: 'Review mid-market playbook',
      assignee: 'JT',
      due: 'Jun 25',
      done: false,
      color: '#1CC4E8',
    },
  ];

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-3 p-3 rounded-lg bg-voxa-surface2/50 border border-white/[0.04]"
        >
          <div
            className={`w-4.5 h-4.5 rounded flex items-center justify-center flex-shrink-0 ${
              item.done
                ? 'bg-emerald-500/20 border border-emerald-500/40'
                : 'border border-white/[0.1] bg-transparent'
            }`}
            style={{ width: 18, height: 18 }}
          >
            {item.done && <Check size={10} className="text-emerald-400" />}
          </div>
          <span
            className={`text-xs flex-1 ${
              item.done ? 'text-white/25 line-through' : 'text-white/50'
            }`}
          >
            {item.text}
          </span>
          <div
            className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: item.color }}
          >
            <span className="text-[7px] text-white font-bold">{item.assignee}</span>
          </div>
          <span className="text-[10px] text-white/20 flex-shrink-0">{item.due}</span>
        </div>
      ))}
    </div>
  );
}

function AnalyticsMockup() {
  const speakers = [
    { name: 'Sarah K.', pct: 35, color: '#7B5CF5' },
    { name: 'Mark R.', pct: 28, color: '#4F6AFA' },
    { name: 'James T.', pct: 22, color: '#1CC4E8' },
    { name: 'Alex W.', pct: 15, color: '#339AE1' },
  ];

  return (
    <div className="space-y-4">
      {speakers.map((s) => (
        <div key={s.name} className="space-y-1.5">
          <div className="flex items-center justify-between">
            <span className="text-xs text-white/50">{s.name}</span>
            <span className="text-xs text-white/30 font-medium">{s.pct}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-voxa-surface2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${s.pct}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.25, 0.4, 0, 1] as const, delay: 0.2 }}
              className="h-full rounded-full"
              style={{ background: s.color }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

function CrmSyncMockup() {
  const meetingFields = [
    { label: 'Meeting', value: 'Q3 Pipeline Review' },
    { label: 'Duration', value: '45 min' },
    { label: 'Action Items', value: '3 items' },
    { label: 'Next Steps', value: '2 follow-ups' },
  ];
  const crmFields = [
    { label: 'Deal Stage', value: 'Negotiation' },
    { label: 'Last Activity', value: 'Just now' },
    { label: 'Notes', value: 'Updated' },
    { label: 'Tasks', value: '3 created' },
  ];

  return (
    <div className="flex items-stretch gap-3">
      {/* Meeting data */}
      <div className="flex-1 rounded-xl bg-voxa-surface2/50 border border-white/[0.04] p-3.5">
        <h5 className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-3">
          Meeting Data
        </h5>
        <div className="space-y-2.5">
          {meetingFields.map((f) => (
            <div key={f.label} className="flex items-center justify-between">
              <span className="text-[10px] text-white/30">{f.label}</span>
              <span className="text-[10px] text-white/50 font-medium">{f.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Arrow */}
      <div className="flex items-center justify-center">
        <div className="w-8 h-8 rounded-full bg-voxa-purple/10 border border-voxa-purple/20 flex items-center justify-center">
          <ArrowRight size={12} className="text-voxa-purple" />
        </div>
      </div>

      {/* CRM fields */}
      <div className="flex-1 rounded-xl bg-voxa-surface2/50 border border-white/[0.04] p-3.5">
        <h5 className="text-[10px] uppercase tracking-widest text-white/30 font-medium mb-3">
          CRM Fields
        </h5>
        <div className="space-y-2.5">
          {crmFields.map((f) => (
            <div key={f.label} className="flex items-center justify-between">
              <span className="text-[10px] text-white/30">{f.label}</span>
              <span className="text-[10px] text-emerald-400 font-medium">{f.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mockupComponents: Record<number, React.FC> = {
  0: TranscriptMockup,
  1: SummaryMockup,
  2: MarkersMockup,
  3: ActionItemsMockup,
  4: AnalyticsMockup,
  5: CrmSyncMockup,
};

/* ─── Main Component ──────────────────────────────────────────────── */

export default function Features() {
  return (
    <section id="features" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-24">
          <h2 className="text-section-mobile md:text-section text-white">
            Everything you need.
            <br className="hidden md:block" /> Nothing you don&apos;t.
          </h2>
          <p className="text-subtitle text-white/40 mt-4 max-w-xl mx-auto">
            Powerful features designed to make every meeting count.
          </p>
        </motion.div>

        {/* Feature Rows */}
        <div className="space-y-32">
          {features.map((feature, i) => {
            const MockupComponent = mockupComponents[i];
            const isEven = i % 2 === 1;
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.label}
                {...fadeUp}
                className={`flex flex-col gap-10 md:gap-16 items-center ${
                  isEven ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* Text side */}
                <div className="flex-1 max-w-lg">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-medium mb-5"
                    style={{
                      color: feature.labelColor,
                      background: `${feature.labelColor}12`,
                      border: `1px solid ${feature.labelColor}20`,
                    }}
                  >
                    <Icon size={12} />
                    {feature.label}
                  </span>
                  <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                  <p className="text-lg text-white/40 mt-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {feature.benefits.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2.5 text-sm text-white/50"
                      >
                        <span
                          className="w-4 h-4 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: `${feature.labelColor}20` }}
                        >
                          <Check size={9} style={{ color: feature.labelColor }} />
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Mockup side */}
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.3, ease: [0.25, 0.4, 0, 1] as const }}
                  className="flex-1 w-full"
                >
                  <div className="rounded-2xl border border-white/[0.06] bg-voxa-surface1 p-6 overflow-hidden">
                    {MockupComponent && <MockupComponent />}
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
