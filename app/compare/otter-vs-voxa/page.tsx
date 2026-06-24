import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import ComparisonTable from '@/components/seo/comparison-table';
import { CheckCircle2, MinusCircle } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/compare/otter-vs-voxa',
  },
  title: 'Otter.ai vs Voxa — Best Transcription Tool',
  description: 'Compare Otter.ai and Voxa. See which tool offers the best transcription, meeting notes, and value for Google Meet users.',
  keywords: ['otter vs voxa', 'otter.ai alternative', 'best transcription software', 'otter pilot alternative'],
};

const features = [
  { name: 'Live Transcription', voxa: true, competitor: true },
  { name: 'Google Meet Support', voxa: 'Native Extension', competitor: 'OtterPilot Bot' },
  { name: 'CRM Sync', voxa: 'Free', competitor: 'Enterprise Only' },
  { name: 'Speaker Analytics', voxa: true, competitor: false },
  { name: 'Audio Import', voxa: false, competitor: true },
  { name: 'Pricing', voxa: 'Free Forever', competitor: 'Freemium ($8.33/mo)' },
];

export default function OtterComparisonPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Compare', href: '/compare' },
        { label: 'Otter vs Voxa', href: '/compare/otter-vs-voxa' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-white/50">Otter.ai vs</span> <span className="gradient-text">Voxa</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Comparing the industry veteran Otter with the modern, Google Meet-native Voxa.
        </p>

        <ComparisonTable competitorName="Otter.ai" features={features} />

        <div className="grid md:grid-cols-2 gap-12 my-20">
          <div className="bg-voxa-surface1 p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-voxa-purple w-6 h-6" />
              Why choose Voxa
            </h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Built for Google Meet:</strong> Voxa is heavily optimized specifically for Google Meet, offering a cleaner, more integrated experience than Otter's bot.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>No paywalls for CRM:</strong> To get CRM integration with Otter, you need their expensive Enterprise plan. Voxa provides it for free.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Focus on Action:</strong> While Otter focuses heavily on the transcript itself, Voxa focuses on extracting action items and automating the next steps.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <MinusCircle className="text-white/40 w-6 h-6" />
              Where Otter wins
            </h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <span className="text-white/40 font-bold">•</span>
                <span><strong>In-person meetings:</strong> Otter has an excellent mobile app for recording in-person lectures or meetings.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white/40 font-bold">•</span>
                <span><strong>File uploads:</strong> Otter allows you to upload existing audio or video files for transcription.</span>
              </li>
            </ul>
          </div>
        </div>

        <CtaBanner 
          title="The modern alternative to Otter" 
          description="Experience native Google Meet integration and free CRM sync." 
        />
      </div>
    </PageLayout>
  );
}
