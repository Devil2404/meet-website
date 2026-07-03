'use client';

import { m } from 'framer-motion';
import dynamic from 'next/dynamic';

const HeroVideo = dynamic(() => import('./hero-video'), { ssr: false });

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

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 40%, rgba(123,92,245,0.08) 0%, transparent 70%)',
        }}
      />
      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none bg-grid-subtle" />

      {/* Floating animated orbs */}
      <m.div
        className="absolute top-[10%] left-[15%] w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,92,245,0.07)', filter: 'blur(100px)' }}
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
          opacity: [0.07, 0.1, 0.05, 0.07],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        className="absolute top-[55%] right-[10%] w-[280px] h-[280px] rounded-full pointer-events-none"
        style={{ background: 'rgba(79,106,250,0.06)', filter: 'blur(100px)' }}
        animate={{
          x: [0, -35, 25, 0],
          y: [0, 25, -35, 0],
          scale: [1, 0.9, 1.1, 1],
          opacity: [0.06, 0.08, 0.05, 0.06],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        className="absolute top-[30%] right-[25%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'rgba(28,196,232,0.04)', filter: 'blur(120px)' }}
        animate={{
          x: [0, 30, -40, 0],
          y: [0, -40, 15, 0],
          scale: [1, 1.1, 0.9, 1],
          opacity: [0.04, 0.06, 0.03, 0.04],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />
      <m.div
        className="absolute bottom-[15%] left-[30%] w-[240px] h-[240px] rounded-full pointer-events-none"
        style={{ background: 'rgba(123,92,245,0.05)', filter: 'blur(80px)' }}
        animate={{
          x: [0, -20, 30, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.12, 0.88, 1],
          opacity: [0.05, 0.08, 0.04, 0.05],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <m.div {...stagger} className="relative z-10 w-full px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <m.div {...staggerChild} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-white/50 text-sm">
              Free forever · No credit card required
            </span>
          </m.div>

          {/* Headline */}
          <m.h1
            {...staggerChild}
            className="text-hero-mobile md:text-hero text-white text-center"
          >
            Never take meeting
            <br />
            notes again.
          </m.h1>

          {/* Subheadline */}
          <m.p
            {...staggerChild}
            className="text-xl text-white/40 max-w-3xl mx-auto text-center mt-6"
          >
            Record Google Meet in HD, generate live transcripts, track attendance, capture action items, and export professional meeting notes—all in one powerful free extension.
          </m.p>

          {/* CTA Buttons */}
          <m.div
            {...staggerChild}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <m.a
              href="https://chromewebstore.google.com/detail/voxa-record-transcribe-go/llbjaleeiopcakodaigfpfoijliachji"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-voxa-purple to-voxa-indigo text-white font-medium text-base relative overflow-hidden"
            >
              <span className="relative z-10">Add to Chrome</span>
              <span
                className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.12) 45%, rgba(255,255,255,0.12) 55%, transparent 70%)',
                  animation: 'shimmer 2.5s infinite',
                }}
              />
            </m.a>
          </m.div>
        </div>

        {/* Animated Product Demo Video */}
        <m.div {...staggerChild}>
          <HeroVideo />
        </m.div>
      </m.div>
    </section>
  );
}
