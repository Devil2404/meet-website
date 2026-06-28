import { Metadata } from 'next';
import PageLayout from '@/components/seo/page-layout';
import Link from 'next/link';
import { ArrowRight, BookOpen, HelpCircle } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Voxa Blog — Google Meet Recording, Transcription & Productivity',
  description: 'Comprehensive guides on Google Meet recording, meeting transcription, speaker analytics, meeting productivity, and AI note-taking. Expert tips from the Voxa team.',
  keywords: ['meeting productivity blog', 'google meet tips', 'ai meeting assistant news', 'google meet recorder guide', 'meeting transcription tips'],
  alternates: {
    canonical: '/blog',
  },
  openGraph: {
    title: 'Voxa Blog — Google Meet Recording, Transcription & Productivity',
    description: 'Expert guides on meeting recording, AI transcription, and productivity tools for Google Meet.',
    url: 'https://www.tryvoxa.app/blog',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Blog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxa Blog — Google Meet Recording, Transcription & Productivity',
    description: 'Expert guides on meeting recording, AI transcription, and productivity tools for Google Meet.',
    images: ['/og-image.png'],
  },
};

const articles = [
  {
    title: 'Best Free Google Meet Recorder in 2026',
    description: 'A comprehensive comparison of the top free Google Meet recorders, including features, pricing, and recommendations.',
    href: '/blog/best-free-google-meet-recorder',
    category: 'Guides',
    date: 'June 2026',
    featured: true,
  },
  {
    title: 'How to Record Google Meet Without Google Workspace',
    description: 'Step-by-step guide to recording Google Meet calls for free, even without a paid Workspace subscription.',
    href: '/blog/record-google-meet-without-workspace',
    category: 'How-To',
    date: 'June 2026',
    featured: true,
  },
  {
    title: 'Best tl;dv Alternative in 2026',
    description: 'Looking for a tl;dv replacement? Compare the best alternatives for Google Meet recording and transcription.',
    href: '/blog/best-tldv-alternative',
    category: 'Comparisons',
    date: 'June 2026',
  },
  {
    title: 'Best Scribbl Alternative in 2026',
    description: 'Explore the best Scribbl alternatives with superior analytics and free CRM integration.',
    href: '/blog/best-scribbl-alternative',
    category: 'Comparisons',
    date: 'June 2026',
  },
  {
    title: 'How to Take Meeting Notes Automatically',
    description: 'Five proven methods to automate your meeting notes, from AI tools to templates and beyond.',
    href: '/blog/how-to-take-meeting-notes-automatically',
    category: 'Productivity',
    date: 'June 2026',
  },
  {
    title: 'How to Generate Action Items from Meetings',
    description: 'Learn how to extract and track action items from every meeting using AI-powered tools.',
    href: '/blog/generate-action-items-from-meetings',
    category: 'Productivity',
    date: 'June 2026',
  },
  {
    title: 'Meeting Transcript vs Meeting Notes — What\'s the Difference?',
    description: 'Understand when to use full transcripts versus summarized notes, and how to get the best of both.',
    href: '/blog/meeting-transcript-vs-meeting-notes',
    category: 'Guides',
    date: 'June 2026',
  },
  {
    title: 'How to Track Attendance in Google Meet',
    description: 'Three methods to automatically track who attended your Google Meet sessions and for how long.',
    href: '/blog/track-attendance-google-meet',
    category: 'How-To',
    date: 'June 2026',
  },
  {
    title: 'Best Meeting Productivity Tools in 2026',
    description: 'A curated list of the best tools for recording, notes, project management, and collaboration in meetings.',
    href: '/blog/best-meeting-productivity-tools',
    category: 'Guides',
    date: 'June 2026',
  },
  {
    title: 'How to Improve Team Meetings',
    description: '10 actionable strategies to make your team meetings more productive, engaging, and results-driven.',
    href: '/blog/how-to-improve-team-meetings',
    category: 'Productivity',
    date: 'June 2026',
  },
];

const categoryColors: Record<string, string> = {
  'Guides': 'text-voxa-purple bg-voxa-purple/10',
  'How-To': 'text-voxa-cyan bg-voxa-cyan/10',
  'Comparisons': 'text-voxa-indigo bg-voxa-indigo/10',
  'Productivity': 'text-emerald-400 bg-emerald-400/10',
};

export default function BlogPage() {
  const featured = articles.filter(a => a.featured);
  const rest = articles.filter(a => !a.featured);

  return (
    <PageLayout breadcrumbs={[{ label: 'Blog', href: '/blog' }]}>
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            The <span className="gradient-text">Voxa</span> Blog
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Expert guides on Google Meet recording, AI transcription, meeting productivity, and building better workflows.
          </p>
        </div>

        {/* Featured Articles */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {featured.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group p-8 rounded-2xl bg-voxa-surface2 border border-white/[0.06] hover:border-voxa-purple/30 transition-all relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-voxa-gradient opacity-[0.03] group-hover:opacity-[0.06] transition-opacity" />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[article.category] || 'text-white/50 bg-white/5'}`}>
                    {article.category}
                  </span>
                  <span className="text-xs text-white/30">{article.date}</span>
                </div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-voxa-purple transition-colors">{article.title}</h2>
                <p className="text-white/60 leading-relaxed mb-6">{article.description}</p>
                <div className="flex items-center text-voxa-purple font-medium group-hover:gap-3 gap-2 transition-all text-sm">
                  Read article <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {rest.map((article) => (
            <Link
              key={article.href}
              href={article.href}
              className="group p-6 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-white/[0.12] transition-colors flex flex-col h-full"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`text-xs font-medium px-2 py-1 rounded-full ${categoryColors[article.category] || 'text-white/50 bg-white/5'}`}>
                  {article.category}
                </span>
                <span className="text-xs text-white/30">{article.date}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-voxa-purple transition-colors">{article.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-4 flex-grow">{article.description}</p>
              <div className="flex items-center text-voxa-purple text-sm font-medium group-hover:gap-2 gap-1.5 transition-all">
                Read more <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>

        {/* FAQ Database Card */}
        <Link
          href="/blog/faq"
          className="group flex items-center gap-6 p-8 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-all mb-12"
        >
          <div className="p-4 rounded-xl bg-voxa-purple/10">
            <HelpCircle className="w-8 h-8 text-voxa-purple" />
          </div>
          <div className="flex-1">
            <h2 className="text-xl font-bold mb-1 group-hover:text-voxa-purple transition-colors">FAQ Database</h2>
            <p className="text-white/50 text-sm">50+ answers to common questions about Google Meet recording, transcription, and meeting productivity.</p>
          </div>
          <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-voxa-purple transition-colors" />
        </Link>

        {/* Internal Links */}
        <div className="border-t border-white/[0.06] pt-12">
          <h2 className="text-xl font-bold mb-6">Explore Voxa</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/#features" className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-colors text-sm text-white/60 hover:text-white">
              Features
            </Link>
            <Link href="/use-cases" className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-colors text-sm text-white/60 hover:text-white">
              Use Cases
            </Link>
            <Link href="/compare" className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-colors text-sm text-white/60 hover:text-white">
              Compare Alternatives
            </Link>
            <Link href="/#pricing" className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.1] transition-colors text-sm text-white/60 hover:text-white">
              Pricing
            </Link>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
