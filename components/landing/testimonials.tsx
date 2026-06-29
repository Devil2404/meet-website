'use client';

import { m, useMotionValue, useSpring } from 'framer-motion';
import { Star } from 'lucide-react';
import { useRef, MouseEvent } from 'react';

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarBg: string;
  avatarText: string;
}

const testimonials: Testimonial[] = [
  {
    name: 'Alex Chen',
    role: 'Sales Manager',
    company: 'TechCorp',
    quote:
      'Voxa saves me 2 hours every week. The smart markers catch budget mentions I would have missed.',
    avatarBg: 'bg-purple-500/20',
    avatarText: 'text-purple-400',
  },
  {
    name: 'Sarah Johnson',
    role: 'Engineering Lead',
    company: 'StartupXYZ',
    quote:
      'Finally, a meeting tool that actually understands context. The transcript accuracy is remarkable.',
    avatarBg: 'bg-indigo-500/20',
    avatarText: 'text-indigo-400',
  },
  {
    name: 'Michael Park',
    role: 'Founder',
    company: 'DevStudio',
    quote:
      "Can't believe this is free. It replaced tools we were paying $300/month for.",
    avatarBg: 'bg-cyan-500/20',
    avatarText: 'text-cyan-400',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Product Manager',
    company: 'ScaleUp',
    quote:
      'The action item detection is a game changer. Nothing falls through the cracks anymore.',
    avatarBg: 'bg-emerald-500/20',
    avatarText: 'text-emerald-400',
  },
  {
    name: 'David Kim',
    role: 'CTO',
    company: 'InnovateTech',
    quote:
      'We rolled this out to 50 people in a day. Everyone was productive in minutes.',
    avatarBg: 'bg-violet-500/20',
    avatarText: 'text-violet-400',
  },
  {
    name: 'Jessica Wang',
    role: 'Head of Sales',
    company: 'GrowthCo',
    quote:
      'The CRM automation alone is worth it. My team saves 10 hours a week on data entry.',
    avatarBg: 'bg-rose-500/20',
    avatarText: 'text-rose-400',
  },
];

function TestimonialCard({ t, i }: { t: Testimonial; i: number }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const rotateX = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 150, damping: 20 });
  const shineX = useMotionValue(50);
  const shineY = useMotionValue(50);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -3;
    const tiltY = ((x - centerX) / centerX) * 3;
    rotateX.set(tiltX);
    rotateY.set(tiltY);
    shineX.set((x / rect.width) * 100);
    shineY.set((y / rect.height) * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    shineX.set(50);
    shineY.set(50);
  }

  return (
    <div style={{ perspective: 800 }}>
      <m.div
        ref={cardRef}
        className="p-6 rounded-2xl border border-white/[0.06] bg-voxa-surface1 hover:border-white/[0.12] transition-all duration-300 group relative overflow-hidden"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.4, 0, 1] as const,
          delay: i * 0.1,
        }}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Gradient shine overlay */}
        <m.div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(123,92,245,0.08), transparent 60%)`,
          }}
        />

        {/* Stars */}
        <div className="flex gap-1">
          {Array.from({ length: 5 }).map((_, starIdx) => (
            <Star
              key={starIdx}
              className="w-4 h-4 text-amber-400 fill-amber-400"
            />
          ))}
        </div>

        {/* Quote */}
        <p className="text-white/60 text-sm leading-relaxed mt-4">
          &ldquo;{t.quote}&rdquo;
        </p>

        {/* Author */}
        <div className="mt-6 flex items-center gap-3">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${t.avatarBg} ${t.avatarText}`}
          >
            {t.name[0]}
          </div>
          <div>
            <p className="text-sm font-medium text-white">{t.name}</p>
            <p className="text-xs text-white/40">
              {t.role} at {t.company}
            </p>
          </div>
        </div>
      </m.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-32 px-6">
      <m.div className="text-center" {...fadeUp}>
        <h2 className="text-section-mobile md:text-section text-white">
          Loved by teams who run on meetings
        </h2>
        <p className="text-subtitle text-white/40 mt-4 max-w-2xl mx-auto">
          Join thousands who never take manual meeting notes again.
        </p>
      </m.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16 max-w-6xl mx-auto">
        {testimonials.map((t, i) => (
          <TestimonialCard key={t.name} t={t} i={i} />
        ))}
      </div>
    </section>
  );
}
