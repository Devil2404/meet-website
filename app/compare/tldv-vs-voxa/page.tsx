import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import ComparisonTable from '@/components/seo/comparison-table';
import { CheckCircle2, MinusCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'tl;dv vs Voxa — Best Google Meet Recorder Alternative',
  description: 'Compare tl;dv and Voxa for Google Meet recording. See feature differences, pricing, and why teams are choosing Voxa as the best tl;dv alternative.',
  keywords: ['tldv vs voxa', 'tldv alternative', 'best google meet recorder', 'tldv pricing'],
};

const features = [
  { name: 'Google Meet Recording', voxa: true, competitor: true },
  { name: 'Live Transcription', voxa: true, competitor: true },
  { name: 'AI Summaries', voxa: true, competitor: true },
  { name: 'Speaker Analytics', voxa: true, competitor: false },
  { name: 'CRM Automation', voxa: true, competitor: 'Paid only' },
  { name: 'Native Extension', voxa: true, competitor: true },
  { name: 'Free Tier', voxa: 'Unlimited', competitor: 'Limited features' },
];

export default function TldvComparisonPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Compare', href: '/compare' },
        { label: 'tl;dv vs Voxa', href: '/compare/tldv-vs-voxa' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-white/50">tl;dv vs</span> <span className="gradient-text">Voxa</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          An objective comparison of features, pricing, and workflows to help you choose the best Google Meet recorder.
        </p>

        <ComparisonTable competitorName="tl;dv" features={features} />

        <div className="grid md:grid-cols-2 gap-12 my-20">
          <div className="bg-voxa-surface1 p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-voxa-purple w-6 h-6" />
              Why choose Voxa
            </h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Completely free:</strong> Voxa offers all its core recording, transcription, and CRM features without a paywall.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Deep Google Meet integration:</strong> Designed specifically for Google Meet, ensuring reliable, native performance.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Advanced speaker analytics:</strong> Get insights into talk time, sentiment, and participation metrics out of the box.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <MinusCircle className="text-white/40 w-6 h-6" />
              Where tl;dv wins
            </h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <span className="text-white/40 font-bold">•</span>
                <span><strong>Zoom & Teams support:</strong> If your team uses platforms other than Google Meet, tl;dv supports Zoom and MS Teams.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white/40 font-bold">•</span>
                <span><strong>Video clipping:</strong> Stronger features for creating and sharing short video snippets of meetings.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-6">
             <div className="p-6 rounded-xl border border-white/[0.06] bg-voxa-surface1">
                <h4 className="font-semibold mb-2">Best for Voxa:</h4>
                <p className="text-white/60 text-sm leading-relaxed">Sales teams and startups that live in Google Meet and need free, automated CRM updates and highly accurate meeting notes without managing another subscription.</p>
             </div>
             <div className="p-6 rounded-xl border border-white/[0.06] bg-white/[0.02]">
                <h4 className="font-semibold mb-2 text-white/80">Best for tl;dv:</h4>
                <p className="text-white/50 text-sm leading-relaxed">Cross-platform teams that use a mix of Zoom, Teams, and Meet, and rely heavily on sharing video clips across the organization.</p>
             </div>
          </div>
        </div>

        <CtaBanner 
          title="Try the best free alternative to tl;dv" 
          description="Voxa is free forever. Install the extension and start recording in seconds." 
        />
      </div>
    </PageLayout>
  );
}
