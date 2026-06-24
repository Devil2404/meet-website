import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import FaqSection from '@/components/seo/faq-section';
import { Target, CheckCircle2, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/use-cases/sales-teams',
  },
  title: 'Google Meet Recorder for Sales Teams — Voxa',
  description: 'The best Google Meet recorder for sales. Automate sales meeting notes, track action items, and sync directly to your CRM. Free forever.',
  keywords: ['google meet recorder for sales', 'sales meeting notes', 'sales call recording', 'CRM automation for meetings'],
};

const faqs = [
  {
    question: "How does Voxa help sales teams?",
    answer: "Voxa automatically records and transcribes your Google Meet sales calls, extracts key action items and next steps, and can automatically sync these details directly into your CRM. This lets your reps focus on selling instead of typing."
  },
  {
    question: "Do I need the prospect's permission to record?",
    answer: "Voxa operates within Google Meet. It's best practice and often legally required to inform participants that a call is being recorded. Voxa's visible presence helps ensure transparency."
  },
  {
    question: "Is Voxa actually free for sales teams?",
    answer: "Yes, Voxa is completely free forever. There are no limits on the number of sales meetings you can record or transcribe."
  }
];

export default function SalesTeamsPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Sales Teams', href: '/use-cases/sales-teams' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          The AI Google Meet Recorder for <span className="gradient-text">Sales Teams</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Stop losing deals because of lost notes. Voxa automatically captures your sales conversations and syncs them to your CRM.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Focus on the prospect, not the notes</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              When you're trying to close a deal, every second of eye contact and active listening matters. 
              Manual note-taking distracts you from picking up on crucial buying signals. 
              Voxa acts as your silent AI co-pilot, capturing everything perfectly.
            </p>
            <ul className="space-y-4">
              {['Never miss a follow-up action item', 'Automatically update CRM records', 'Share call intelligence with your team'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-voxa-surface2 border border-white/[0.06] rounded-2xl p-8 relative overflow-hidden">
            <div className="absolute inset-0 bg-voxa-gradient opacity-5 mix-blend-overlay" />
            <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <Target className="w-8 h-8 text-voxa-purple" />
                <div>
                  <div className="font-semibold text-sm">Action Item Detected</div>
                  <div className="text-xs text-white/50">"Send the proposal by Friday"</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <TrendingUp className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="font-semibold text-sm">CRM Synced</div>
                  <div className="text-xs text-white/50">Deal stage updated to: Proposal</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqSection faqs={faqs} />
        <CtaBanner 
          title="Close more deals with AI" 
          description="Join the fastest growing sales teams using Voxa to automate their workflow." 
        />
      </div>
    </PageLayout>
  );
}
