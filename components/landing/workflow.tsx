'use client';

import { motion } from 'framer-motion';
import { Mic, FileText, Sparkles, CheckSquare, Database } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface WorkflowStep {
  icon: LucideIcon;
  label: string;
  color: string;
}

const steps: WorkflowStep[] = [
  { icon: Mic, label: 'Meeting', color: '#7B5CF5' },
  { icon: FileText, label: 'Transcript', color: '#6364FA' },
  { icon: Sparkles, label: 'Insights', color: '#4F6AFA' },
  { icon: CheckSquare, label: 'Action Items', color: '#339AE1' },
  { icon: Database, label: 'CRM Updated', color: '#1CC4E8' },
];

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

function ConnectorLine({ color }: { color: string }) {
  return (
    <div className="flex items-center justify-center md:w-16 w-px md:h-px h-10">
      <div
        className="w-full h-full"
        style={{
          background: `linear-gradient(to right, ${color}33, ${color}66, ${color}33)`,
          maskImage:
            'repeating-linear-gradient(90deg, transparent, transparent 3px, black 3px, black 8px)',
          WebkitMaskImage:
            'repeating-linear-gradient(90deg, transparent, transparent 3px, black 3px, black 8px)',
        }}
      />
    </div>
  );
}

export default function Workflow() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <motion.div {...fadeUp} className="text-center mb-20">
          <h2 className="text-section-mobile md:text-section text-white">
            From conversation to action
          </h2>
          <p className="text-subtitle text-white/40 mt-4 max-w-xl mx-auto">
            Every meeting flows through Voxa&apos;s intelligent pipeline.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          {...stagger}
          className="flex flex-col md:flex-row items-center md:items-start justify-center gap-0"
        >
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.label}
                className="flex flex-col md:flex-row items-center md:items-start gap-0"
              >
                <motion.div
                  {...staggerChild}
                  className="flex flex-col items-center gap-3 group"
                >
                  <motion.div
                    whileHover={{
                      scale: 1.08,
                      boxShadow: `0 0 24px ${step.color}22`,
                    }}
                    transition={{ duration: 0.25 }}
                    className="w-14 h-14 rounded-2xl border border-white/[0.06] bg-voxa-surface1 flex items-center justify-center transition-colors group-hover:border-white/[0.12]"
                    style={{
                      background: `linear-gradient(135deg, #111119, ${step.color}11)`,
                    }}
                  >
                    <Icon size={22} style={{ color: step.color }} />
                  </motion.div>
                  <span className="text-xs text-white/50 font-medium tracking-wide">
                    {step.label}
                  </span>
                </motion.div>

                {/* Connector */}
                {i < steps.length - 1 && (
                  <div className="md:mx-2 my-2 md:my-0 md:mt-7">
                    <ConnectorLine color={step.color} />
                  </div>
                )}
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
