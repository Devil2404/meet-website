'use client';

import { motion } from 'framer-motion';
import { Video, Sparkles, Database, CheckSquare, Mail } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

const steps = [
  {
    icon: Video,
    title: 'Meeting Ends',
    description: 'Your Google Meet session wraps up',
  },
  {
    icon: Sparkles,
    title: 'Voxa Processes',
    description: 'AI analyzes transcript and extracts data',
  },
  {
    icon: Database,
    title: 'CRM Updated',
    description: 'Fields populated automatically in your CRM',
  },
  {
    icon: CheckSquare,
    title: 'Tasks Created',
    description: 'Action items assigned to team members',
  },
  {
    icon: Mail,
    title: 'Follow-up Generated',
    description: 'Personalized follow-up email drafted',
  },
];

const crmFields = [
  { label: 'Contact', value: 'Sarah Chen — VP Engineering' },
  {
    label: 'Deal Stage',
    value: 'Proposal Sent',
    dot: true,
  },
  { label: 'Next Steps', value: 'Send technical documentation by Friday' },
  { label: 'Meeting Notes', value: 'Discussed pricing for enterprise tier...' },
  { label: 'Follow-up', value: 'Scheduled for June 20, 2025' },
];

export default function CrmAutomation() {
  return (
    <section className="py-32 px-6">
      <motion.div className="text-center" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section text-white">
          Your CRM fills itself
        </h2>
        <p className="text-subtitle text-white/40 mt-4 max-w-xl mx-auto">
          You run the meeting. Voxa handles the data entry.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mt-16 max-w-6xl mx-auto">
        {/* Left column — Workflow Pipeline */}
        <div>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div key={step.title}>
                <motion.div
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.4, 0, 1] as const,
                    delay: i * 0.15,
                  }}
                >
                  <div className="w-12 h-12 rounded-xl border border-white/[0.06] bg-voxa-surface1 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-voxa-purple" />
                  </div>
                  <div>
                    <p className="font-medium text-white">{step.title}</p>
                    <p className="text-sm text-white/40">{step.description}</p>
                  </div>
                </motion.div>

                {i < steps.length - 1 && (
                  <div className="w-px h-8 bg-gradient-to-b from-voxa-purple/30 to-voxa-indigo/30 ml-6" />
                )}
              </div>
            );
          })}
        </div>

        {/* Right column — CRM Card Mockup */}
        <motion.div
          className="rounded-2xl border border-white/[0.06] bg-voxa-surface1 p-6"
          {...fadeUp}
        >
          <div className="flex items-center gap-3 mb-6">
            <Database className="w-5 h-5 text-voxa-purple" />
            <h3 className="font-semibold text-white">
              Deal Updated — Acme Corp
            </h3>
          </div>

          {crmFields.map((field, i) => (
            <div
              key={field.label}
              className={`flex items-start justify-between py-4 ${
                i < crmFields.length - 1 ? 'border-b border-white/[0.06]' : ''
              }`}
            >
              <span className="text-sm text-white/40 shrink-0 w-28">
                {field.label}
              </span>
              <span className="text-sm text-white/70 text-right flex items-center gap-2">
                {field.dot && (
                  <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                )}
                {field.value}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
