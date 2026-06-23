import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import ComparisonTable from '@/components/seo/comparison-table';
import { CheckCircle2, MinusCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Fireflies.ai vs Voxa — Best AI Meeting Assistant',
  description: 'Compare Fireflies.ai against Voxa. See how a native Google Meet extension compares to a meeting bot, and which is right for your team.',
  keywords: ['fireflies vs voxa', 'fireflies alternative', 'fireflies.ai alternative', 'meeting bot alternative'],
};

const features = [
  { name: 'Google Meet Integration', voxa: 'Native Extension', competitor: 'Join Bot' },
  { name: 'Transcription Quality', voxa: 'High', competitor: 'High' },
  { name: 'Pricing', voxa: 'Free Forever', competitor: 'Starts at $10/mo' },
  { name: 'Multi-platform (Zoom, Teams)', voxa: false, competitor: true },
  { name: 'Visible to Participants', voxa: 'Subtle Extension UI', competitor: 'Bot listed as participant' },
  { name: 'Setup Time', voxa: '5 seconds', competitor: 'Requires calendar connection' },
];

export default function FirefliesComparisonPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Compare', href: '/compare' },
        { label: 'Fireflies vs Voxa', href: '/compare/fireflies-vs-voxa' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          <span className="text-white/50">Fireflies.ai vs</span> <span className="gradient-text">Voxa</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Meeting bot vs native extension. Discover the right approach for your team's workflow and budget.
        </p>

        <ComparisonTable competitorName="Fireflies" features={features} />

        <div className="grid md:grid-cols-2 gap-12 my-20">
          <div className="bg-voxa-surface1 p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <CheckCircle2 className="text-voxa-purple w-6 h-6" />
              Why choose Voxa
            </h3>
            <ul className="space-y-4 text-white/70">
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>No intrusive bots:</strong> Voxa operates as a browser extension, meaning there is no awkward "Fireflies Notetaker" joining your calls as a participant.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>Completely Free:</strong> Fireflies requires a paid subscription for essential CRM features and unlimited recording. Voxa is free forever.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong>No calendar access required:</strong> Voxa works on-demand in the browser without needing broad permissions to read your calendar.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white/[0.02] p-8 rounded-2xl border border-white/[0.06]">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
              <MinusCircle className="text-white/40 w-6 h-6" />
              Where Fireflies wins
            </h3>
            <ul className="space-y-4 text-white/60">
              <li className="flex gap-3">
                <span className="text-white/40 font-bold">•</span>
                <span><strong>Multi-platform support:</strong> If you use Zoom, Webex, and Teams in addition to Meet, Fireflies covers them all via calendar invites.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-white/40 font-bold">•</span>
                <span><strong>Voice commands:</strong> Fireflies offers extensive voice commands to trigger specific actions during the meeting.</span>
              </li>
            </ul>
          </div>
        </div>

        <CtaBanner 
          title="Ditch the meeting bots" 
          description="Record seamlessly with a native Google Meet extension. Free forever." 
        />
      </div>
    </PageLayout>
  );
}
