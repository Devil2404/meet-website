import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import FaqSection from '@/components/seo/faq-section';
import { Terminal, CheckCircle2, GitBranch } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/use-cases/engineering-teams',
  },
  title: 'Engineering Standup Recorder — Voxa',
  description: 'Record daily standups, sprint planning, and architecture reviews. Voxa captures technical discussions and action items automatically.',
  keywords: ['engineering standup recorder', 'sprint meeting notes', 'developer meeting notes', 'technical meeting recorder'],
};

const faqs = [
  {
    question: "Does Voxa understand technical jargon?",
    answer: "Yes, Voxa's AI transcription model is highly accurate and capable of understanding technical terms, acronyms, and programming language names commonly used in engineering meetings."
  },
  {
    question: "Can I use Voxa for async standups?",
    answer: "Absolutely. Team members can review the meeting recording and transcript on their own time, making it perfect for distributed engineering teams across different time zones."
  },
  {
    question: "Does Voxa capture code shared on screen?",
    answer: "Voxa primarily captures the audio conversation and generates a transcript. Any code discussed verbally will be transcribed."
  }
];

export default function EngineeringTeamsPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Engineering Teams', href: '/use-cases/engineering-teams' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          The Meeting Recorder for <span className="gradient-text">Engineering Teams</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Spend less time taking notes in standups and sprint planning, and more time shipping code.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Stop context switching</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Every minute an engineer spends taking notes is a minute they aren't writing code.
              Voxa silently runs during your standups, sprint reviews, and architecture meetings,
              capturing every technical detail and action item so your team doesn't have to.
            </p>
            <ul className="space-y-4">
              {['Automate standup notes', 'Extract Jira/Linear action items', 'Build a searchable knowledge base of decisions'].map((item, i) => (
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
                <Terminal className="w-8 h-8 text-voxa-indigo" />
                <div>
                  <div className="font-semibold text-sm">Action Item Extracted</div>
                  <div className="text-xs text-white/50">"I'll fix the memory leak in the auth service today."</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <GitBranch className="w-8 h-8 text-voxa-cyan" />
                <div>
                  <div className="font-semibold text-sm">Decision Documented</div>
                  <div className="text-xs text-white/50">We agreed to migrate the database to Postgres next sprint.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqSection faqs={faqs} />
        <CtaBanner 
          title="Stay in the flow state" 
          description="Let Voxa handle the documentation while you build." 
        />
      </div>
    </PageLayout>
  );
}
