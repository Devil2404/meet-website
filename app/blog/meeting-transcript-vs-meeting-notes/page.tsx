import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import FaqSection from '@/components/seo/faq-section';

export const metadata: Metadata = {
  title: 'Meeting Transcript vs Meeting Notes — What's the Difference? | Voxa',
  description:
    'Understand the key differences between a meeting transcript and meeting notes. Learn when to use each, how they complement one another, and how Voxa gives you both automatically.',
  keywords: [
    'meeting transcript vs meeting notes',
    'meeting transcript',
    'meeting notes',
    'transcription vs notes',
    'meeting documentation',
    'automatic meeting notes',
    'meeting transcription tool',
  ],
  openGraph: {
    title: 'Meeting Transcript vs Meeting Notes — What's the Difference?',
    description:
      'A comprehensive guide explaining the difference between meeting transcripts and meeting notes, when to use each, and how to get both automatically with Voxa.',
    url: 'https://www.tryvoxa.app/blog/meeting-transcript-vs-meeting-notes',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meeting Transcript vs Meeting Notes — What's the Difference?',
    description:
      'Learn the difference between meeting transcripts and meeting notes, plus how Voxa generates both automatically in Google Meet.',
  },
};

const faqs = [
  {
    question: 'What is the main difference between a meeting transcript and meeting notes?',
    answer:
      'A meeting transcript is a complete, word-for-word record of everything said during a meeting, while meeting notes are a condensed summary that captures key points, decisions, and action items. Transcripts preserve every detail; notes distill meetings into what matters most.',
  },
  {
    question: 'Can I get both meeting transcripts and notes automatically?',
    answer:
      'Yes. Tools like Voxa for Google Meet generate a live transcript during the meeting and then produce organized meeting notes with action items, decisions, and key topics — all without any manual effort.',
  },
  {
    question: 'Are meeting transcripts legally admissible?',
    answer:
      'Meeting transcripts can serve as supporting documentation in legal and compliance contexts, especially when they are timestamped and attributed to specific speakers. However, whether they are formally admissible depends on your jurisdiction and the specific legal proceeding. Always consult with legal counsel for official matters.',
  },
  {
    question: 'Do meeting notes replace the need for a full transcript?',
    answer:
      'Not always. Meeting notes are ideal for quick reference and sharing with stakeholders, but a full transcript is essential when you need exact quotes, compliance records, or the ability to search for specific topics discussed. Using both gives you the best of both worlds.',
  },
  {
    question: 'How accurate are AI-generated meeting transcripts?',
    answer:
      'Modern AI transcription tools like Voxa achieve high accuracy rates, especially when audio quality is good and speakers enunciate clearly. Accuracy improves with features like speaker identification and noise cancellation. Most tools reach 90-95%+ accuracy in typical meeting conditions.',
  },
  {
    question: 'Should students use transcripts or notes for lectures?',
    answer:
      'Students benefit from both. Transcripts let you revisit the exact wording of an explanation, which is great for complex subjects. Notes help you study efficiently by focusing on key concepts, formulas, and takeaways. Using a tool that provides both — like Voxa — means you can review notes for quick study and dive into the transcript when you need deeper understanding.',
  },
  {
    question: 'How long does it take to create meeting notes manually vs automatically?',
    answer:
      'Manually writing meeting notes typically takes 15-30 minutes per one-hour meeting, and creating a full transcript from a recording can take 4-6 hours. With an automatic tool like Voxa, both are generated in real time during the meeting — zero extra time required.',
  },
];

export default function MeetingTranscriptVsNotesPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'Meeting Transcript vs Meeting Notes — What's the Difference?',
    description:
      'A comprehensive guide explaining the key differences between meeting transcripts and meeting notes, when to use each format, and how to get both automatically.',
    author: {
      '@type': 'Organization',
      name: 'Voxa',
      url: 'https://www.tryvoxa.app',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Voxa',
      url: 'https://www.tryvoxa.app',
    },
    datePublished: '2026-06-23',
    dateModified: '2026-06-23',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://www.tryvoxa.app/blog/meeting-transcript-vs-meeting-notes',
    },
    keywords: 'meeting transcript vs meeting notes, meeting transcript, meeting notes, transcription vs notes',
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Decide Between Meeting Transcripts and Meeting Notes',
    description:
      'A step-by-step guide for choosing between meeting transcripts and meeting notes, and how to generate both automatically with Voxa.',
    step: [
      {
        '@type': 'HowToStep',
        name: 'Identify your purpose',
        text: 'Determine whether you need a verbatim record for compliance and legal purposes (transcript) or a concise summary for action and communication (notes).',
      },
      {
        '@type': 'HowToStep',
        name: 'Consider your audience',
        text: 'If the output will be shared with executives or stakeholders, notes are usually more appropriate. If it is for legal review or detailed analysis, a transcript is better.',
      },
      {
        '@type': 'HowToStep',
        name: 'Evaluate searchability needs',
        text: 'Transcripts are fully searchable for specific keywords and phrases. If you need to locate exact quotes or topics, transcripts are essential.',
      },
      {
        '@type': 'HowToStep',
        name: 'Install Voxa to get both',
        text: 'Install the free Voxa Chrome extension to automatically generate both a live transcript and structured meeting notes during any Google Meet call.',
      },
      {
        '@type': 'HowToStep',
        name: 'Review and export',
        text: 'After the meeting, review your transcript for full context and your notes for quick action items. Export either format as a PDF to share with your team.',
      },
    ],
  };

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Blog', href: '/blog' },
        { label: 'Meeting Transcript vs Meeting Notes', href: '/blog/meeting-transcript-vs-meeting-notes' },
      ]}
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <article className="max-w-4xl mx-auto">
        {/* H1 Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Meeting Transcript vs Meeting Notes —{' '}
          <span className="gradient-text">What&apos;s the Difference?</span>
        </h1>

        {/* Introduction */}
        <p className="text-xl text-white/60 leading-relaxed mb-4">
          If you&apos;ve ever left a meeting wondering whether you should have written detailed notes or just
          recorded the whole thing, you&apos;re not alone. Meeting transcripts and meeting notes serve
          different purposes, and understanding those differences can dramatically improve how your
          team captures, shares, and acts on meeting content.
        </p>
        <p className="text-lg text-white/50 leading-relaxed mb-8">
          A <strong className="text-white/80">meeting transcript</strong> is a complete, word-for-word
          record of everything said during a meeting. <strong className="text-white/80">Meeting notes</strong>,
          on the other hand, are a condensed, curated summary highlighting key decisions, action items,
          and takeaways. Both are valuable — but for different reasons.
        </p>

        {/* AI Answer Block */}
        <div className="bg-voxa-surface2 border border-voxa-purple/30 rounded-2xl p-6 my-8">
          <p className="text-voxa-purple text-sm font-semibold mb-2">Quick Answer</p>
          <p className="text-white/80 leading-relaxed">
            A <strong>meeting transcript</strong> is a verbatim, word-for-word record of an entire
            meeting — every sentence, every speaker, timestamped and searchable. <strong>Meeting
            notes</strong> are a distilled summary that captures only the key points: decisions made,
            action items assigned, and important discussion topics. Transcripts are best for
            compliance, legal documentation, and deep review. Notes are best for quick reference,
            team alignment, and follow-up. Modern tools like{' '}
            <Link href="/#features" className="text-voxa-purple hover:underline">Voxa</Link>{' '}
            can generate both automatically during Google Meet calls, so you never have to choose one
            over the other.
          </p>
        </div>

        {/* Comparison Table */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8">Transcript vs Notes: Side-by-Side Comparison</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="py-4 px-4 text-white/80 font-semibold">Criteria</th>
                  <th className="py-4 px-4 text-voxa-purple font-semibold">Meeting Transcript</th>
                  <th className="py-4 px-4 text-voxa-cyan font-semibold">Meeting Notes</th>
                </tr>
              </thead>
              <tbody className="text-sm text-white/60">
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Detail Level</td>
                  <td className="py-4 px-4">Complete, word-for-word</td>
                  <td className="py-4 px-4">Summarized key points</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-4 px-4 font-medium text-white/80">Format</td>
                  <td className="py-4 px-4">Sequential dialogue with speaker labels</td>
                  <td className="py-4 px-4">Bullet points, headers, action items</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Primary Use Case</td>
                  <td className="py-4 px-4">Legal, compliance, detailed review</td>
                  <td className="py-4 px-4">Quick reference, team alignment, follow-up</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-4 px-4 font-medium text-white/80">Searchability</td>
                  <td className="py-4 px-4">Highly searchable — every word indexed</td>
                  <td className="py-4 px-4">Searchable for key topics only</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Typical Length</td>
                  <td className="py-4 px-4">10-30+ pages per hour</td>
                  <td className="py-4 px-4">1-2 pages per hour</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-4 px-4 font-medium text-white/80">Creation Time (Manual)</td>
                  <td className="py-4 px-4">4-6× the meeting length</td>
                  <td className="py-4 px-4">0.5-1× the meeting length</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Creation Time (Voxa)</td>
                  <td className="py-4 px-4">Real-time, automatic</td>
                  <td className="py-4 px-4">Real-time, automatic</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-4 px-4 font-medium text-white/80">Speaker Attribution</td>
                  <td className="py-4 px-4">Yes — every line attributed</td>
                  <td className="py-4 px-4">Usually only for action items</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Best For</td>
                  <td className="py-4 px-4">Legal teams, researchers, compliance</td>
                  <td className="py-4 px-4">Managers, students, quick syncs</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to Use Each */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">When Should You Use a Transcript vs Notes?</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            The choice between a transcript and notes depends on your goals, your audience, and what you
            plan to do with the information after the meeting. Here&apos;s a step-by-step guide to
            making the right call.
          </p>

          <div className="space-y-6">
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 1:</span> Identify Your Purpose
              </h3>
              <p className="text-white/60 leading-relaxed">
                Ask yourself: do I need an exact record of what was said, or do I need a summary of what
                was decided? If accuracy and completeness matter — for example, in a legal deposition,
                board meeting, or regulatory review — you need a transcript. If you&apos;re looking to
                share outcomes with your team and track follow-ups, notes are the better choice.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 2:</span> Consider Your Audience
              </h3>
              <p className="text-white/60 leading-relaxed">
                A 30-page transcript isn&apos;t ideal for a CEO who wants a two-minute update. Meeting
                notes, structured with clear headers and action items, are what executives and
                stakeholders need. On the other hand, if your compliance team needs to audit a
                conversation, they&apos;ll want the full transcript with timestamps.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 3:</span> Evaluate Searchability Needs
              </h3>
              <p className="text-white/60 leading-relaxed">
                Need to find the exact moment someone mentioned a specific feature, budget number, or
                deadline? Transcripts are fully searchable — every word is indexed and timestamped. Notes,
                while useful for high-level search, won&apos;t contain the exact phrasing of every comment.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 4:</span> Use Voxa to Get Both Automatically
              </h3>
              <p className="text-white/60 leading-relaxed">
                Here&apos;s the good news: you don&apos;t have to choose. With{' '}
                <Link href="/#features" className="text-voxa-purple hover:underline">Voxa&apos;s free Chrome extension</Link>,
                you get a live transcript during the meeting <em>and</em> automatically structured meeting
                notes with action items, decisions, and key discussion topics — all generated in real time.
                No manual work required.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 5:</span> Review, Export, and Share
              </h3>
              <p className="text-white/60 leading-relaxed">
                After the meeting, review the transcript for full context and use the notes for quick
                follow-ups. Voxa lets you export both as a PDF, making it easy to attach to project
                management tools, share via email, or archive for compliance purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Real-World Examples */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8">Real-World Examples: Who Needs What?</h2>
          <p className="text-white/60 leading-relaxed mb-8">
            Different roles have different documentation needs. Here&apos;s how various professionals
            use transcripts and notes in practice.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-purple">Product Managers</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <strong className="text-white/80">Primary need: Notes.</strong> PMs use meeting notes to
                track feature decisions, stakeholder feedback, and sprint priorities. They share condensed
                notes with engineering and design teams.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white/80">When they need transcripts:</strong> During user
                interviews and customer discovery calls, PMs need verbatim transcripts to capture exact
                customer language, pain points, and feature requests for later analysis.
              </p>
              <p className="mt-3">
                <Link href="/use-cases/product-managers" className="text-voxa-purple text-sm hover:underline">
                  See how PMs use Voxa →
                </Link>
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-cyan">Sales Teams</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <strong className="text-white/80">Primary need: Both.</strong> Sales reps rely on notes
                for quick CRM updates and follow-up tasks. But they also reference transcripts to recall
                specific objections, pricing discussions, and competitor mentions.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white/80">Key benefit:</strong> Having a full transcript means
                a sales manager can coach reps based on actual conversations rather than secondhand summaries.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-indigo">Students &amp; Educators</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <strong className="text-white/80">Primary need: Transcripts.</strong> Students benefit
                enormously from full lecture transcripts. They can search for specific concepts, review
                complex explanations, and study at their own pace.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white/80">When they need notes:</strong> For study sessions and
                exam prep, concise notes with highlighted key concepts are far more efficient than
                re-reading an entire transcript.
              </p>
              <p className="mt-3">
                <Link href="/use-cases/students" className="text-voxa-purple text-sm hover:underline">
                  See how students use Voxa →
                </Link>
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-white/70">Legal &amp; Compliance Teams</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <strong className="text-white/80">Primary need: Transcripts.</strong> Legal teams require
                verbatim records for contract discussions, compliance audits, and dispute resolution. Every
                word matters when legal liability is on the line.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white/80">Supporting role of notes:</strong> Notes help legal
                teams quickly locate the relevant sections of a longer transcript and track which
                decisions have been formally documented.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-purple">Engineering Teams</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <strong className="text-white/80">Primary need: Notes.</strong> Engineers want clear
                action items, technical decisions, and specs — not a 30-page transcript of a planning
                meeting. Structured notes with tagged action items keep engineering workflows efficient.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white/80">When they need transcripts:</strong> During architecture
                reviews or incident post-mortems, the exact wording of discussions can be crucial for
                understanding technical reasoning.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-cyan">Startup Founders</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-3">
                <strong className="text-white/80">Primary need: Both.</strong> Founders wear many hats.
                They need quick notes from daily standups and investor updates, but also full transcripts
                from board meetings and partnership negotiations.
              </p>
              <p className="text-white/60 text-sm leading-relaxed">
                <strong className="text-white/80">Key benefit:</strong> Having both formats means founders
                can share concise updates with investors while keeping detailed records for due diligence.
              </p>
            </div>
          </div>
        </section>

        {/* The Best of Both Worlds */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">The Best of Both Worlds: Automatic Transcripts + Notes</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            Historically, teams had to choose between the effort of creating detailed transcripts and
            the convenience of quick meeting notes. Manual transcription is prohibitively time-consuming
            — a one-hour meeting can take 4-6 hours to transcribe word-for-word. And even well-organized
            notes miss nuances and exact phrasing.
          </p>
          <p className="text-white/60 leading-relaxed mb-6">
            AI-powered meeting tools have eliminated this trade-off entirely. With{' '}
            <Link href="/#features" className="text-voxa-purple hover:underline">Voxa</Link>, both a
            live transcript and structured meeting notes are generated automatically during every Google
            Meet call. The transcript captures every word with speaker attribution, while the notes
            surface action items, decisions, and key topics in a clean, shareable format.
          </p>

          <div className="bg-voxa-surface2 border border-white/[0.06] rounded-2xl p-8 my-8">
            <h3 className="text-xl font-semibold mb-4">What Voxa Provides Automatically</h3>
            <ul className="space-y-3 text-white/60">
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong className="text-white/80">Live Transcript:</strong> Real-time, speaker-labeled transcription you can follow during the meeting</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong className="text-white/80">Action Item Tagging:</strong> Automatically detected tasks and assignments, attributed to the right person</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong className="text-white/80">Decision Tracking:</strong> Key decisions highlighted and separated from general discussion</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong className="text-white/80">Speaker Analytics:</strong> Data on who spoke, for how long, and participation balance</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong className="text-white/80">PDF Export:</strong> Export both transcript and notes as polished PDF documents for sharing and archival</span>
              </li>
              <li className="flex gap-3">
                <span className="text-voxa-purple font-bold">•</span>
                <span><strong className="text-white/80">HD Recording:</strong> Full video recording alongside your transcript and notes for complete meeting documentation</span>
              </li>
            </ul>
          </div>

          <p className="text-white/60 leading-relaxed">
            If you&apos;re currently taking meeting notes manually, you might also want to check out our
            guide on{' '}
            <Link href="/blog/how-to-take-meeting-notes-automatically" className="text-voxa-purple hover:underline">
              how to take meeting notes automatically
            </Link>
            . It walks through the setup process and best practices for getting the most out of automated
            note-taking.
          </p>
        </section>

        {/* Common Mistakes */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Common Mistakes When Choosing Between Transcripts and Notes</h2>
          <div className="space-y-6">
            <div className="border-l-2 border-voxa-purple/50 pl-6">
              <h3 className="text-lg font-semibold mb-2">Mistake 1: Treating Them as Interchangeable</h3>
              <p className="text-white/60 leading-relaxed">
                The most common mistake is assuming meeting notes can substitute for a transcript (or
                vice versa). They serve fundamentally different purposes. Notes are an interpretation;
                transcripts are a record. Using notes where a transcript is needed — like in compliance
                reviews — creates risk.
              </p>
            </div>
            <div className="border-l-2 border-voxa-purple/50 pl-6">
              <h3 className="text-lg font-semibold mb-2">Mistake 2: Over-relying on Manual Notes</h3>
              <p className="text-white/60 leading-relaxed">
                Manual note-taking is inherently biased. The note-taker decides what&apos;s important, which
                means details get lost. This is especially problematic in multi-stakeholder meetings where
                different people care about different details. Automated transcription removes this bias.
              </p>
            </div>
            <div className="border-l-2 border-voxa-purple/50 pl-6">
              <h3 className="text-lg font-semibold mb-2">Mistake 3: Not Documenting Meetings at All</h3>
              <p className="text-white/60 leading-relaxed">
                Surprisingly common, especially in fast-moving startups. Without any documentation,
                meetings become expensive conversations with no accountability. Even basic automated notes
                dramatically improve team alignment and follow-through.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/blog/how-to-take-meeting-notes-automatically"
              className="block p-6 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors"
            >
              <h3 className="font-semibold mb-2">How to Take Meeting Notes Automatically</h3>
              <p className="text-white/50 text-sm">Set up automated note-taking in Google Meet</p>
            </Link>
            <Link
              href="/use-cases/product-managers"
              className="block p-6 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors"
            >
              <h3 className="font-semibold mb-2">Voxa for Product Managers</h3>
              <p className="text-white/50 text-sm">Capture every user insight and product decision</p>
            </Link>
            <Link
              href="/use-cases/students"
              className="block p-6 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors"
            >
              <h3 className="font-semibold mb-2">Voxa for Students</h3>
              <p className="text-white/50 text-sm">Never miss a lecture detail again</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection faqs={faqs} />

        {/* CTA */}
        <CtaBanner
          title="Get Both Transcripts and Notes — Automatically"
          description="Voxa generates live transcripts and structured meeting notes for every Google Meet call. Completely free, forever."
        />
      </article>
    </PageLayout>
  );
}
