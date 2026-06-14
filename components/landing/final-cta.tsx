'use client';

import { motion } from 'framer-motion';
import { Sparkles, Zap, Shield, Globe } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

const trustSignals = [
  { icon: Sparkles, text: 'Free forever' },
  { icon: Zap, text: '5-second install' },
  { icon: Shield, text: 'Privacy first' },
];

export default function FinalCta() {
  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background radial gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(123,92,245,0.06) 0%, transparent 60%)',
        }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />

      {/* Content */}
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-[3rem] md:text-[3.5rem] font-bold text-white leading-[1.1] tracking-tight"
          {...fadeUp}
        >
          Stop losing what matters in meetings.
        </motion.h2>

        <motion.p
          className="text-xl text-white/40 mt-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0, 1] as const, delay: 0.1 }}
        >
          Join thousands of professionals who never take manual meeting notes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0, 1] as const, delay: 0.2 }}
          className="mt-10"
        >
          <motion.button
            className="px-10 py-5 rounded-xl bg-gradient-to-r from-voxa-purple to-voxa-indigo text-white font-semibold text-lg inline-flex items-center gap-2 cursor-pointer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Globe className="w-5 h-5" />
            Add Voxa to Chrome
          </motion.button>
        </motion.div>

        <motion.div
          className="mt-8 flex gap-6 justify-center flex-wrap"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.25, 0.4, 0, 1] as const, delay: 0.3 }}
        >
          {trustSignals.map((signal) => {
            const Icon = signal.icon;
            return (
              <div
                key={signal.text}
                className="flex items-center gap-1.5 text-sm text-white/30"
              >
                <Icon className="w-4 h-4" />
                <span>{signal.text}</span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
