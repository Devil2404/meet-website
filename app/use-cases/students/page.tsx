import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import FaqSection from '@/components/seo/faq-section';
import { GraduationCap, CheckCircle2, Search } from 'lucide-react';

export const metadata: Metadata = {
  alternates: {
    canonical: '/use-cases/students',
  },
  title: 'Google Meet Recorder for Students — Voxa',
  description: 'Record online classes and lectures on Google Meet. Get searchable transcripts and focus on learning instead of taking notes. Free for students.',
  keywords: ['google meet recorder for students', 'lecture recording', 'class notes AI', 'study group recorder'],
};

const faqs = [
  {
    question: "Do I need my professor's permission to record?",
    answer: "It is strongly recommended and often required by school policy to ask your professor or instructor before recording a lecture or class."
  },
  {
    question: "How can I find specific topics from a lecture?",
    answer: "Voxa provides a fully searchable transcript. You can easily search for a keyword, concept, or term mentioned during the class to jump straight to that part of the lecture."
  },
  {
    question: "Is Voxa free for students?",
    answer: "Yes! Voxa is completely free to use. There are no limits on how many classes or study sessions you can record."
  }
];

export default function StudentsPage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Use Cases', href: '/use-cases' },
        { label: 'Students', href: '/use-cases/students' },
      ]}
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
          The Ultimate Lecture Recorder for <span className="gradient-text">Students</span>
        </h1>
        <p className="text-xl text-white/60 text-center mb-16 max-w-2xl mx-auto">
          Stop frantically typing during online classes. Voxa records lectures and generates searchable notes for you.
        </p>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Focus on understanding, not writing</h2>
            <p className="text-white/60 mb-6 leading-relaxed">
              When you're trying to copy every word the professor says, you miss the actual meaning of the lesson.
              Voxa acts as your personal AI note-taker, capturing the lecture perfectly so you can participate, ask questions, and actually learn.
            </p>
            <ul className="space-y-4">
              {['Get fully searchable lecture transcripts', 'Record study group sessions', 'Review complex topics at your own pace'].map((item, i) => (
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
                <GraduationCap className="w-8 h-8 text-amber-400" />
                <div>
                  <div className="font-semibold text-sm">Lecture Captured</div>
                  <div className="text-xs text-white/50">"The exam will cover chapters 4 through 7."</div>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-voxa-surface1 p-4 rounded-xl border border-white/[0.04]">
                <Search className="w-8 h-8 text-voxa-cyan" />
                <div>
                  <div className="font-semibold text-sm">Searchable Transcripts</div>
                  <div className="text-xs text-white/50">Find exactly when the professor explained 'mitosis'.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <FaqSection faqs={faqs} />
        <CtaBanner 
          title="Ace your next exam" 
          description="Get the AI note-taker that thousands of students trust." 
        />
      </div>
    </PageLayout>
  );
}
