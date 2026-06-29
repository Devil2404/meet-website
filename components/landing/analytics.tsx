'use client';

import { m } from 'framer-motion';
import { Mic, Users, Timer, Activity } from 'lucide-react';

/* ── animation variants ── */
const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

/* ── chart data ── */
const speakerData = [
  { name: 'Sarah Chen', value: 35, color: '#7B5CF5' },
  { name: 'Mike Rodriguez', value: 28, color: '#4F6AFA' },
  { name: 'Emily Johnson', value: 22, color: '#1CC4E8' },
  { name: 'David Park', value: 15, color: '#8B5CF6' },
];

/* ── stat cards ── */
interface StatCard {
  label: string;
  value: string;
  sub: string;
  icon: React.ElementType;
}

const stats: StatCard[] = [
  { label: 'Talk Ratio', value: '58:42', sub: 'Host vs Participants', icon: Mic },
  { label: 'Interruptions', value: '3', sub: 'During this meeting', icon: Users },
  { label: 'Avg Response', value: '2.4s', sub: 'Average response time', icon: Timer },
  { label: 'Engagement', value: '94%', sub: 'Active participation', icon: Activity },
];

/* ── timeline segments ── */
const timeline = [
  { speaker: 'Sarah Chen', color: '#7B5CF5', width: '18%' },
  { speaker: 'Mike Rodriguez', color: '#4F6AFA', width: '12%' },
  { speaker: 'Sarah Chen', color: '#7B5CF5', width: '8%' },
  { speaker: 'Emily Johnson', color: '#1CC4E8', width: '14%' },
  { speaker: 'David Park', color: '#8B5CF6', width: '6%' },
  { speaker: 'Mike Rodriguez', color: '#4F6AFA', width: '10%' },
  { speaker: 'Sarah Chen', color: '#7B5CF5', width: '9%' },
  { speaker: 'Emily Johnson', color: '#1CC4E8', width: '8%' },
  { speaker: 'David Park', color: '#8B5CF6', width: '4%' },
  { speaker: 'Mike Rodriguez', color: '#4F6AFA', width: '11%' },
];

/* ── donut chart constants ── */
const DONUT_SIZE = 220;
const CENTER = DONUT_SIZE / 2;
const STROKE_WIDTH = 28;
const RADIUS = (DONUT_SIZE - STROKE_WIDTH) / 2;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function buildArcs() {
  let cumulativePercent = 0;
  return speakerData.map((speaker, i) => {
    const percent = speaker.value / 100;
    const dashArray = CIRCUMFERENCE * percent;
    const dashOffset = -CIRCUMFERENCE * cumulativePercent;
    cumulativePercent += percent;
    return {
      ...speaker,
      dashArray,
      dashOffset,
      index: i,
    };
  });
}

const arcs = buildArcs();

/* ── component ── */
export default function Analytics() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* heading */}
      <m.div className="text-center max-w-3xl mx-auto" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section font-bold text-white">
          Understand every{' '}
          <span className="gradient-text">conversation</span>
        </h2>
        <p className="mt-6 text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          Real-time speaker analytics and participation insights.
        </p>
      </m.div>

      {/* main grid */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* left — donut chart */}
        <m.div
          className="lg:col-span-3 rounded-2xl border border-white/[0.06] bg-voxa-surface1 p-6"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          <span className="text-sm font-medium text-white/60">
            Speaking Distribution
          </span>

          <div className="mt-6 flex flex-col sm:flex-row items-center justify-evenly gap-8">
            {/* SVG donut */}
            <div className="relative">
              <svg width={0} height={0} className="absolute">
                <defs>
                  {speakerData.map((s, i) => (
                    <filter key={i} id={`glow-${i}`} x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="4" result="blur" />
                      <feFlood floodColor={s.color} floodOpacity="0.6" />
                      <feComposite in2="blur" operator="in" />
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  ))}
                </defs>
              </svg>

              <svg
                width={DONUT_SIZE + 80}
                height={DONUT_SIZE}
                viewBox={`0 0 ${DONUT_SIZE} ${DONUT_SIZE}`}
                className="-rotate-90"
              >
                {/* bg ring */}
                <circle
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke="rgba(255,255,255,0.04)"
                  strokeWidth={STROKE_WIDTH}
                />

                {/* arcs */}
                {arcs.map((arc) => (
                  <m.circle
                    key={arc.name}
                    cx={CENTER}
                    cy={CENTER}
                    r={RADIUS}
                    fill="none"
                    stroke={arc.color}
                    strokeWidth={STROKE_WIDTH}
                    strokeLinecap="butt"
                    strokeDasharray={`${arc.dashArray} ${CIRCUMFERENCE - arc.dashArray}`}
                    strokeDashoffset={arc.dashOffset}
                    initial={{ opacity: 0, strokeDasharray: `0 ${CIRCUMFERENCE}` }}
                    whileInView={{
                      opacity: 1,
                      strokeDasharray: `${arc.dashArray} ${CIRCUMFERENCE - arc.dashArray}`,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: 0.2 + arc.index * 0.15,
                      ease: [0.25, 0.4, 0, 1],
                    }}
                    className="transition-[filter] duration-300 hover:drop-shadow-[0_0_8px_var(--glow)]"
                    style={{ '--glow': arc.color } as React.CSSProperties}
                  />
                ))}
              </svg>

              {/* center stat */}
              <m.div
                className="absolute inset-0 flex flex-col items-center justify-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <span className="text-2xl font-bold text-white">45:00</span>
                <span className="text-[11px] text-white/40 mt-0.5">Total Time</span>
              </m.div>
            </div>

            {/* legend */}
            <div className="flex flex-col gap-3">
              {speakerData.map((s) => (
                <div key={s.name} className="flex items-center gap-3">
                  <span
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: s.color }}
                  />
                  <div className="flex flex-col">
                    <span className="text-sm text-white/80 font-medium">{s.name}</span>
                    <span className="text-xs text-white/40">{s.value}%</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </m.div>

        {/* right — stats */}
        <m.div
          className="lg:col-span-2 grid grid-cols-2 gap-4"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
        >
          {stats.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.label}
                className="p-5 rounded-xl border border-white/[0.06] bg-voxa-surface1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-white/40">{s.label}</span>
                  <Icon className="w-4 h-4 text-white/20" />
                </div>
                <div className="mt-3">
                  <span className="text-2xl font-bold text-white">
                    {s.value}
                  </span>
                  <p className="text-xs text-white/30 mt-1">{s.sub}</p>
                </div>
              </div>
            );
          })}
        </m.div>
      </div>

      {/* participation timeline */}
      <m.div
        className="mt-6 max-w-6xl mx-auto rounded-2xl border border-white/[0.06] bg-voxa-surface1 p-6"
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.3 }}
      >
        <span className="text-sm font-medium text-white/60">
          Participation Timeline
        </span>

        {/* timeline bar */}
        <div className="mt-5 flex h-8 rounded-lg overflow-hidden gap-px">
          {timeline.map((seg, i) => (
            <div
              key={i}
              className="h-full rounded-sm transition-opacity hover:opacity-80 relative group"
              style={{ width: seg.width, backgroundColor: seg.color }}
            >
              {/* tooltip */}
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-[10px] text-white bg-voxa-surface2 rounded border border-white/[0.08] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {seg.speaker}
              </span>
            </div>
          ))}
        </div>

        {/* time markers */}
        <div className="flex justify-between mt-2">
          {['0:00', '15:00', '30:00', '45:00'].map((t) => (
            <span key={t} className="text-[10px] text-white/20">
              {t}
            </span>
          ))}
        </div>

        {/* legend */}
        <div className="flex flex-wrap gap-4 mt-4">
          {speakerData.map((s) => (
            <div key={s.name} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: s.color }}
              />
              <span className="text-xs text-white/40">{s.name}</span>
            </div>
          ))}
        </div>
      </m.div>
    </section>
  );
}
