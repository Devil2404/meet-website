import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import FaqSection from '@/components/seo/faq-section';
import { Lightbulb, CheckCircle2, MessageSquare } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/use-cases/product-managers',
  },
  title: 'Meeting Notes for Product Managers — Voxa',
  description: 'The ultimate product meeting recorder. Capture user feedback, document feature decisions, and keep engineering aligned with AI meeting notes.',
  keywords: ['meeting notes for product managers', 'product meeting recorder', 'product management AI assistant', 'user interview recorder'],
};

const faqs = [
  {
    question: "Can I use Voxa for user interviews?",
    answer: "Absolutely. Voxa is perfect for user research. It records the session and provides a searchable transcript, allowing you to focus completely on the user's feedback without worrying about taking notes."
  },
  {
    question: "How does it help with engineering handoffs?",
    answer: "Voxa captures all technical requirements and decisions made during planning meetings. You can share the exact transcript segment with your engineering team to eliminate ambiguity."
  },
  {
    question: "Does Voxa capture decisions automatically?",
    answer: "Yes, using Smart Markers, Voxa's AI can automatically identify and tag decisions made during the call, compiling them into an easy-to-review list afterward."
  }
];

export default function ProductManagersPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Product Managers', href: '/use-cases/product-managers' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          Perfect Meeting Notes for <span className="gradient-text">Product Managers</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Capture every piece of user feedback and document every product decision automatically.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 md:order-1 bg-voxa-surface2 border border-white/[0.06] rounded-2xl p-8 relative overflow-hidden">
             <div className="absolute inset-0 bg-voxa-gradient opacity-5 mix-blend-overlay" />
             <div className="relative z-10 flex flex-col gap-6">
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <MessageSquare className="w-8 h-8 text-voxa-cyan" />
                <div>
                  <div className="font-semibold text-sm">User Feedback Captured</div>
                  <div className="text-xs text-white/50">"The new navigation is much faster."</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <Lightbulb className="w-8 h-8 text-amber-400" />
                <div>
                  <div className="font-semibold text-sm">Decision Tagged</div>
                  <div className="text-xs text-white/50">Ship the beta feature on Tuesday.</div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold mb-6">Keep stakeholders perfectly aligned</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              Product Managers spend hours in meetings gathering requirements, interviewing users, and aligning teams. 
              Voxa ensures that no feature request or strategic decision ever falls through the cracks.
            </p>
            <ul className="space-y-4">
              {['Record and transcribe user interviews', 'Document product decisions automatically', 'Share context easily with engineering'].map((item, i) => (
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
          title="Build better products faster" 
          description="Let AI handle the documentation so you can focus on strategy." 
        />
      </div>
    </PageLayout>
  );
}
