'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

type CellValue = 'check' | 'x' | string;

interface FeatureRow {
  feature: string;
  voxa: CellValue;
  tldv: CellValue;
  fireflies: CellValue;
}

const features: FeatureRow[] = [
  { feature: 'Smart Markers', voxa: 'check', tldv: 'x', fireflies: 'x' },
  { feature: 'Role-Based Intelligence', voxa: 'check', tldv: 'x', fireflies: 'x' },
  { feature: 'CRM Automation', voxa: 'check', tldv: 'Paid', fireflies: 'Paid' },
  { feature: 'Speaker Analytics', voxa: 'check', tldv: 'Limited', fireflies: 'Limited' },
  { feature: 'Live Transcript', voxa: 'check', tldv: 'check', fireflies: 'check' },
  { feature: 'AI Summary', voxa: 'check', tldv: 'check', fireflies: 'check' },
  { feature: 'Action Items', voxa: 'check', tldv: 'check', fireflies: 'check' },
  { feature: 'Meeting Recording', voxa: 'check', tldv: 'check', fireflies: 'check' },
  { feature: 'Google Meet Support', voxa: 'check', tldv: 'check', fireflies: 'check' },
  { feature: 'Free Forever', voxa: 'check', tldv: 'Freemium', fireflies: 'Freemium' },
];

function CellContent({
  value,
  isVoxa = false,
}: {
  value: CellValue;
  isVoxa?: boolean;
}) {
  if (value === 'check') {
    return (
      <Check
        className={`w-5 h-5 mx-auto ${
          isVoxa ? 'text-voxa-purple' : 'text-emerald-500'
        }`}
      />
    );
  }
  if (value === 'x') {
    return <X className="w-5 h-5 mx-auto text-white/15" />;
  }
  return <span className="text-sm text-white/30">{value}</span>;
}

export default function Comparison() {
  return (
    <section id="compare" className="py-32 px-6">
      <motion.div className="text-center" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section text-white">
          See the full picture
        </h2>
        <p className="text-subtitle text-white/40 mt-4 max-w-xl mx-auto">
          Compare Voxa with other meeting tools.
        </p>
      </motion.div>

      <motion.div
        className="mt-16 max-w-4xl mx-auto rounded-2xl border border-white/[0.06] bg-voxa-surface1 overflow-hidden"
        {...fadeUp}
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/[0.06]">
              <th className="p-4 text-left text-sm font-medium text-white/40">
                Feature
              </th>
              <th className="p-4 text-center relative bg-voxa-purple/5">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-voxa-purple to-voxa-indigo" />
                <span className="gradient-text font-bold text-sm">Voxa</span>
              </th>
              <th className="p-4 text-center text-sm font-medium text-white/40">
                tl;dv
              </th>
              <th className="p-4 text-center text-sm font-medium text-white/40">
                Fireflies
              </th>
            </tr>
          </thead>
          <tbody>
            {features.map((row, i) => (
              <motion.tr
                key={row.feature}
                className={`border-b border-white/[0.04] ${
                  i % 2 === 1 ? 'bg-white/[0.01]' : ''
                }`}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{
                  duration: 0.4,
                  ease: [0.25, 0.4, 0, 1] as const,
                  delay: i * 0.05,
                }}
              >
                <td className="p-4 text-sm text-white/70">{row.feature}</td>
                <td className="p-4 text-center bg-voxa-purple/[0.03]">
                  <CellContent value={row.voxa} isVoxa />
                </td>
                <td className="p-4 text-center">
                  <CellContent value={row.tldv} />
                </td>
                <td className="p-4 text-center">
                  <CellContent value={row.fireflies} />
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </motion.div>
    </section>
  );
}
