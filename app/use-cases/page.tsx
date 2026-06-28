import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import Link from 'next/link';
import { Users, Briefcase, Code, Rocket, GraduationCap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Voxa Use Cases — AI Meeting Notes for Every Role',
  description: 'See how Voxa helps sales teams, product managers, engineers, startups, and students automate their meeting notes and focus on the conversation.',
  alternates: {
    canonical: '/use-cases',
  },
  openGraph: {
    title: 'Voxa Use Cases — AI Meeting Notes for Every Role',
    description: 'See how Voxa helps sales teams, product managers, engineers, startups, and students automate their meeting notes and focus on the conversation.',
    url: 'https://www.tryvoxa.app/use-cases',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Use Cases' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxa Use Cases — AI Meeting Notes for Every Role',
    description: 'See how Voxa helps sales teams, product managers, engineers, startups, and students automate their meeting notes and focus on the conversation.',
    images: ['/og-image.png'],
  },
};

const useCases = [
  {
    title: 'Sales Teams',
    description: 'Auto-sync meeting notes to your CRM, track next steps, and close deals faster.',
    icon: Briefcase,
    href: '/use-cases/sales-teams',
    color: 'text-voxa-purple',
  },
  {
    title: 'Product Managers',
    description: 'Capture feature requests, document decisions, and keep stakeholders aligned.',
    icon: Users,
    href: '/use-cases/product-managers',
    color: 'text-voxa-cyan',
  },
  {
    title: 'Engineering Teams',
    description: 'Record standups, extract action items, and focus on coding instead of typing.',
    icon: Code,
    href: '/use-cases/engineering-teams',
    color: 'text-voxa-indigo',
  },
  {
    title: 'Startups',
    description: 'A free meeting recorder for lean teams that need to move fast and stay aligned.',
    icon: Rocket,
    href: '/use-cases/startups',
    color: 'text-emerald-400',
  },
  {
    title: 'Students',
    description: 'Record lectures, get searchable transcripts, and never miss an important point.',
    icon: GraduationCap,
    href: '/use-cases/students',
    color: 'text-amber-400',
  },
];

export default function UseCasesPage() {
  return (
    <PageLayout breadcrumbs={[{ label: 'Use Cases', href: '/use-cases' }]}>
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          How teams use <span className="gradient-text">Voxa</span>
        </h1>
        <p className="text-xl text-white/60">
          Discover how different roles leverage AI meeting intelligence to save time and stay focused.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {useCases.map((useCase) => (
          <Link
            key={useCase.href}
            href={useCase.href}
            className="group p-8 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-white/[0.12] transition-colors"
          >
            <useCase.icon className={`w-8 h-8 mb-6 ${useCase.color}`} />
            <h2 className="text-2xl font-semibold mb-3 group-hover:text-voxa-purple transition-colors">
              {useCase.title}
            </h2>
            <p className="text-white/60 leading-relaxed">
              {useCase.description}
            </p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
