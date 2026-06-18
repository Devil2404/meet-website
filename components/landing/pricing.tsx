'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

const features = [
  'Unlimited meetings',
  'HD recording',
  'Live transcription',
  'AI summaries',
  'Smart markers',
  'Action item detection',
  'Speaker analytics',
  'CRM integration',
  'PDF export',
  'Priority support',
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-32 px-6">
      <motion.div className="text-center" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section text-white">
          Simple pricing. Actually simple.
        </h2>
        <p className="text-subtitle text-white/40 mt-4 max-w-xl mx-auto">
          One plan. Everything included. Free forever.
        </p>
      </motion.div>

      <div className="mt-16 max-w-lg mx-auto relative">
        {/* Glow aura behind the card */}
        <div
          className="absolute -inset-4 rounded-3xl pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at 50% 40%, rgba(123,92,245,0.12) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />

        <motion.div
          className="rounded-2xl border border-white/[0.06] bg-voxa-surface1 p-10 relative overflow-hidden"
          {...fadeUp}
          animate={{ y: [0, -6, 0] }}
          transition={{
            y: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          {/* Gradient top border */}
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-voxa-purple to-transparent" />

          {/* Animated shimmer sweep */}
          <motion.div
            className="absolute top-0 left-0 h-[2px] w-[60%] pointer-events-none"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(123,92,245,0.6), rgba(99,102,241,0.6), transparent)',
            }}
            animate={{ x: ['-60%', '200%'] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
              repeatDelay: 1,
            }}
          />

          {/* Plan name & price */}
          <p className="text-2xl font-bold text-white">Free Forever</p>
          <div className="mt-2 flex items-baseline gap-1">
            <span className="text-6xl font-bold gradient-text">$0</span>
            <span className="text-lg text-white/30">/month</span>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] my-8" />

          {/* Feature checklist */}
          <div className="space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-voxa-purple shrink-0" />
                <span className="text-sm text-white/60">{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <motion.button
            className="w-full py-4 rounded-xl bg-gradient-to-r from-voxa-purple to-voxa-indigo text-white font-medium text-base mt-8 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Add to Chrome &mdash; It&apos;s Free
          </motion.button>

          <p className="text-center text-sm text-white/30 mt-4">
            No credit card &middot; No trial &middot; No limits
          </p>
        </motion.div>
      </div>
    </section>
  );
}
