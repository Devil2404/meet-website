'use client';

import { useRef } from 'react';
import { motion, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { Play, FileText } from 'lucide-react';

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

const participants = [
  { initial: 'S', name: 'Sarah', gradient: 'linear-gradient(135deg, #7B5CF5, #4F6AFA)' },
  { initial: 'M', name: 'Mark', gradient: 'linear-gradient(135deg, #4F6AFA, #1CC4E8)' },
  { initial: 'J', name: 'James', gradient: 'linear-gradient(135deg, #1CC4E8, #339AE1)' },
  { initial: 'A', name: 'Alex', gradient: 'linear-gradient(135deg, #7B5CF5, #1CC4E8)' },
];

const transcriptMessages = [
  {
    speaker: 'Sarah',
    initial: 'S',
    color: '#7B5CF5',
    time: '10:02',
    text: 'Let me share the quarterly metrics we discussed.',
    tag: null,
  },
  {
    speaker: 'Mark',
    initial: 'M',
    color: '#4F6AFA',
    time: '10:03',
    text: 'The conversion rate improved by 23% this quarter.',
    tag: null,
  },
  {
    speaker: 'James',
    initial: 'J',
    color: '#1CC4E8',
    time: '10:05',
    text: 'We should allocate more budget to the paid ads channel.',
    tag: { label: 'Action Item', bgClass: 'bg-emerald-500/10', textClass: 'text-emerald-400' },
  },
  {
    speaker: 'Alex',
    initial: 'A',
    color: '#339AE1',
    time: '10:06',
    text: 'Agreed — let\'s finalize the Q3 budget by Friday.',
    tag: { label: 'Decision', bgClass: 'bg-voxa-purple/10', textClass: 'text-voxa-purple' },
  },
];

function ProductMockup() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), {
    stiffness: 150,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), {
    stiffness: 150,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, perspective: 1200 }}
      className="mt-20 w-full max-w-5xl mx-auto"
    >
      <div className="border border-white/[0.06] rounded-2xl overflow-hidden shadow-2xl bg-voxa-surface2 relative">
        {/* Recording Indicator */}
        <div className="absolute top-4 right-4 z-10 flex items-center gap-2 px-2.5 py-1 rounded-full bg-red-500/10 border border-red-500/20">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
          </span>
          <span className="text-[10px] text-red-400 font-medium">Recording</span>
        </div>

        {/* Browser Top Bar */}
        <div className="bg-voxa-surface1 border-b border-white/[0.06] flex items-center px-4 py-3">
          <div className="flex items-center gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 text-center">
            <span className="text-xs text-white/20">meet.google.com/abc-defg-hij</span>
          </div>
          <div className="w-[52px]" />
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row min-h-[360px]">
          {/* Left — Participants Grid */}
          <div className="flex-1 p-4">
            <div className="grid grid-cols-2 gap-3 h-full">
              {participants.map((p) => (
                <div
                  key={p.name}
                  className="aspect-video rounded-lg flex items-center justify-center relative overflow-hidden"
                  style={{ background: `${p.gradient.replace('linear-gradient', 'linear-gradient')}` }}
                >
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'radial-gradient(circle at center, transparent 30%, rgba(8,8,15,0.5) 100%)',
                    }}
                  />
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center z-10 border border-white/10">
                    <span className="text-white font-semibold text-lg">{p.initial}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Transcript Sidebar */}
          <div className="w-full md:w-80 border-t md:border-t-0 md:border-l border-white/[0.06] bg-voxa-surface1 p-5">
            <div className="flex items-center gap-2 mb-5">
              <FileText size={14} className="text-voxa-purple" />
              <span className="text-xs font-medium text-white/60 tracking-wide uppercase">
                Live Transcript
              </span>
            </div>
            <div className="space-y-4">
              {transcriptMessages.map((msg, i) => (
                <div key={i} className="flex gap-2.5">
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: msg.color }}
                  >
                    <span className="text-[9px] text-white font-bold">{msg.initial}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[11px] font-medium text-white/70">
                        {msg.speaker}
                      </span>
                      <span className="text-[10px] text-white/20">{msg.time}</span>
                      {msg.tag && (
                        <span
                          className={`${msg.tag.bgClass} ${msg.tag.textClass} text-[10px] px-1.5 py-0.5 rounded font-medium`}
                        >
                          {msg.tag.label}
                        </span>
                      )}
                    </div>
                    <p className="text-[11px] text-white/40 mt-0.5 leading-relaxed">
                      {msg.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

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

      <motion.div {...stagger} className="relative z-10 w-full px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div {...staggerChild} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.03] text-white/50 text-sm">
              Free forever · No credit card required
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            {...staggerChild}
            className="text-hero-mobile md:text-hero text-white text-center"
          >
            Never take meeting
            <br />
            notes again.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            {...staggerChild}
            className="text-xl text-white/40 max-w-2xl mx-auto text-center mt-6"
          >
            Voxa listens, understands, highlights what matters, and updates your CRM automatically.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            {...staggerChild}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10"
          >
            <motion.a
              href="#"
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
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-7 py-3.5 rounded-xl border border-white/[0.1] bg-white/[0.03] text-white/70 font-medium text-base flex items-center gap-2"
            >
              <Play size={16} />
              Watch Demo
            </motion.a>
          </motion.div>
        </div>

        {/* Product Mockup */}
        <motion.div {...staggerChild}>
          <ProductMockup />
        </motion.div>
      </motion.div>
    </section>
  );
}
