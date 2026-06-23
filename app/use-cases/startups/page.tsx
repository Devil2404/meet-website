import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import FaqSection from '@/components/seo/faq-section';
import { Rocket, CheckCircle2, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Meeting Recorder for Startups — Voxa',
  description: 'The best free meeting recorder for lean startups. Capture investor meetings, team standups, and customer discovery calls. Free forever.',
  keywords: ['free meeting recorder', 'startup meeting notes', 'investor meeting recording', 'lean team tools'],
};

const faqs = [
  {
    question: "Is Voxa really free forever?",
    answer: "Yes! We believe foundational AI tools should be accessible. Voxa's core recording, transcription, and meeting intelligence features are completely free for startups to use."
  },
  {
    question: "Can I share recordings with investors?",
    answer: "Absolutely. You can easily share meeting notes, action items, or the full transcript with investors to keep them updated on your progress without writing manual updates."
  },
  {
    question: "Is our startup's data secure?",
    answer: "Security and privacy are our top priorities. Voxa processes data securely and does not train public models on your private meeting data."
  }
];

export default function StartupsPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Startups', href: '/use-cases/startups' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          The Free AI Meeting Assistant for <span className="gradient-text">Startups</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Lean teams move fast. Voxa ensures everyone stays aligned without the overhead of manual documentation.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 bg-voxa-surface2 border border-white/[0.06] rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-voxa-gradient opacity-5 mix-blend-overlay" />
             <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <Rocket className="w-8 h-8 text-emerald-400" />
                <div>
                  <div className="font-semibold text-sm">Investor Update Captured</div>
                  <div className="text-xs text-white/50">"Our MRR grew by 15% this month."</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <Zap className="w-8 h-8 text-amber-400" />
                <div>
                  <div className="font-semibold text-sm">Fast Alignment</div>
                  <div className="text-xs text-white/50">Meeting notes instantly shared to Slack.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Do more with less</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              When you're building a startup, you wear many hats. You shouldn't have to be the designated note-taker too.
              Voxa is a free, powerful AI assistant that handles meeting documentation so you can focus on growth.
            </p>
            <ul className="space-y-4">
              {['Completely free — no credit card needed', 'Perfect for customer discovery calls', 'Keep distributed teams in sync asynchronously'].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0" />
                  <span className="text-white/80">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FaqSection faqs={faqs} />
        <CtaBanner 
          title="Move faster with Voxa" 
          description="Join thousands of lean startups using Voxa to scale their productivity." 
        />
      </div>
    </PageLayout>
  );
}
