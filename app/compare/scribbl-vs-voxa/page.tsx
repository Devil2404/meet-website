import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import ComparisonTable from '@/components/seo/comparison-table';
import { CheckCircle2, MinusCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Scribbl vs Voxa — Best Google Meet Transcriber',
  description: 'Compare Scribbl and Voxa. See why teams prefer Voxa for superior speaker analytics, free CRM integration, and accurate Google Meet transcripts.',
  keywords: ['scribbl vs voxa', 'scribbl alternative', 'google meet transcription', 'free transcription tool'],
};

const features = [
  { name: 'Google Meet Support', voxa: true, competitor: true },
  { name: 'Automated Notes', voxa: true, competitor: true },
  { name: 'Speaker Analytics', voxa: true, competitor: false },
  { name: 'Action Item Extraction', voxa: true, competitor: true },
  { name: 'CRM Integration', voxa: 'Free', competitor: 'Paid tiers only' },
  { name: 'UI / UX', voxa: 'Modern Dark Mode', competitor: 'Standard' },
];

export default function ScribblComparisonPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Compare', href: '/compare' },
        { label: 'Scribbl vs Voxa', href: '/compare/scribbl-vs-voxa' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-white/50">Scribbl vs</span> <span className="gradient-text">Voxa</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          An objective look at how Voxa compares to Scribbl for transcription and meeting intelligence on Google Meet.
        </p>

        <ComparisonTable competitorName="Scribbl" features={features} />

        <div className="grid md:grid-cols-2 gap-12 my-20">
          <div className="bg-voxa-surface1 p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-voxa-purple w-6 h-6" />
              Why choose Voxa
            </h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>CRM Integrations are Free:</strong> While Scribbl charges for advanced CRM sync, Voxa offers this natively for free.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Advanced Speaker Analytics:</strong> Voxa provides deep insights into participation, talk ratios, and sentiment that Scribbl lacks.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Premium Aesthetics:</strong> Voxa offers a beautiful, modern interface that teams love to use.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <MinusCircle className="text-white/40 w-6 h-6" />
              Where Scribbl wins
            </h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <span className="text-white/40 font-bold">•</span>
                <span><strong>Simplicity:</strong> Scribbl offers a very bare-bones experience which might appeal to users who want only basic transcription without extra analytics.</span>
              </li>
            </ul>
          </div>
        </div>

        <CtaBanner 
          title="Upgrade your meeting notes" 
          description="Get superior analytics and CRM automation for free with Voxa." 
        />
      </div>
    </PageLayout>
  );
}
