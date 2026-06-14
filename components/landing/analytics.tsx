'use client';

import { motion } from 'framer-motion';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Cell,
} from 'recharts';
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
  { name: 'Sarah Chen', value: 35 },
  { name: 'Mike Rodriguez', value: 28 },
  { name: 'Emily Johnson', value: 22 },
  { name: 'David Park', value: 15 },
];

const barColors = ['#7B5CF5', '#4F6AFA', '#1CC4E8', '#8B5CF6'];

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

/* ── component ── */
export default function Analytics() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* heading */}
      <motion.div className="text-center max-w-3xl mx-auto" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section font-bold text-white">
          Understand every{' '}
          <span className="gradient-text">conversation</span>
        </h2>
        <p className="mt-6 text-xl text-white/40 max-w-2xl mx-auto leading-relaxed">
          Real-time speaker analytics and participation insights.
        </p>
      </motion.div>

      {/* main grid */}
      <div className="mt-16 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* left — chart */}
        <motion.div
          className="lg:col-span-3 rounded-2xl border border-white/[0.06] bg-voxa-surface1 p-6"
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
        >
          <span className="text-sm font-medium text-white/60">
            Speaking Distribution
          </span>

          <div className="mt-6" style={{ width: '100%', height: 250 }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={speakerData}
                layout="vertical"
                margin={{ top: 0, right: 24, left: 0, bottom: 0 }}
                barCategoryGap="28%"
              >
                <XAxis
                  type="number"
                  domain={[0, 40]}
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v: number) => `${v}%`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: 'rgba(255,255,255,0.3)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={120}
                />
                <Bar dataKey="value" radius={[0, 4, 4, 0]} maxBarSize={28}>
                  {speakerData.map((_, i) => (
                    <Cell key={i} fill={barColors[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* right — stats */}
        <motion.div
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
        </motion.div>
      </div>

      {/* participation timeline */}
      <motion.div
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
          {speakerData.map((s, i) => (
            <div key={s.name} className="flex items-center gap-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: barColors[i] }}
              />
              <span className="text-xs text-white/40">{s.name}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
