import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Compare Voxa Alternatives — Best AI Meeting Recorders',
  description: 'Compare Voxa against other AI meeting recorders like tl;dv, Scribbl, Fireflies, and Otter. Find the best tool for your Google Meet recordings.',
  alternates: {
    canonical: '/compare',
  },
  openGraph: {
    title: 'Compare Voxa Alternatives — Best AI Meeting Recorders',
    description: 'Compare Voxa against other AI meeting recorders like tl;dv, Scribbl, Fireflies, and Otter. Find the best tool for your Google Meet recordings.',
    url: 'https://www.tryvoxa.app/compare',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Compare Voxa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Voxa Alternatives — Best AI Meeting Recorders',
    description: 'Compare Voxa against other AI meeting recorders like tl;dv, Scribbl, Fireflies, and Otter. Find the best tool for your Google Meet recordings.',
    images: ['/og-image.png'],
  },
};

const comparisons = [
  {
    title: 'tl;dv vs Voxa',
    description: 'See why teams choose Voxa for seamless Google Meet integration and free forever pricing.',
    href: '/compare/tldv-vs-voxa',
  },
  {
    title: 'Scribbl vs Voxa',
    description: 'Compare transcript quality, speaker analytics, and CRM automation capabilities.',
    href: '/compare/scribbl-vs-voxa',
  },
  {
    title: 'Fireflies vs Voxa',
    description: 'Multi-platform bots vs Google Meet native extension. Which is right for your team?',
    href: '/compare/fireflies-vs-voxa',
  },
  {
    title: 'Otter vs Voxa',
    description: 'Compare real-time transcription, search features, and pricing structures.',
    href: '/compare/otter-vs-voxa',
  },
];

export default function ComparePage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Compare', href: '/compare' }]}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Compare <span className="gradient-text">Voxa</span> Alternatives
        </h1>
        <p className="text-xl text-white/60">
          Objective comparisons to help you choose the best AI meeting recorder for your workflow.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {comparisons.map((compare) => (
          <Link
            key={compare.href}
            href={compare.href}
            className="group p-8 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col h-full"
          >
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-voxa-purple transition-colors">
              {compare.title}
            </h2>
            <p className="text-white/60 leading-relaxed mb-8 flex-grow">
              {compare.description}
            </p>
            <div className="flex items-center text-voxa-purple font-medium group-hover:gap-3 gap-2 transition-all">
              Read comparison <ArrowRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
