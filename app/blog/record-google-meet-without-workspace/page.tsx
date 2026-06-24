import { GraduationCap, Rocket, Mic, AlertTriangle, Trophy, Monitor, Clapperboard, Clock, Briefcase } from 'lucide-react';

import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import FaqSection from '@/components/seo/faq-section';

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/record-google-meet-without-workspace',
  },
  title: 'How to Record Google Meet Without Google Workspace (2026) | Voxa',
  description:
    'Learn how to record Google Meet without a Google Workspace subscription. 3 proven methods: Voxa extension, screen recording, and OBS — step-by-step guide.',
  keywords: [
    'record google meet without workspace',
    'google meet recording free account',
    'how to record google meet',
    'meeting recorder chrome extension',
    'google meet recording without business account',
  ],
  openGraph: {
    title: 'How to Record Google Meet Without Google Workspace (2026)',
    description:
      'You don\'t need a paid Google Workspace account to record Google Meet. Here are 3 free methods with step-by-step instructions.',
    url: 'https://www.tryvoxa.app/blog/record-google-meet-without-workspace',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Record Google Meet Without Google Workspace (2026)',
    description:
      'You don\'t need a paid Google Workspace account to record Google Meet. Here are 3 free methods with step-by-step instructions.',
  },
};

const faqs = [
  {
    question: 'Why can\'t I record on Google Meet?',
    answer:
      'Google Meet\'s built-in recording feature is restricted to Google Workspace Business Standard, Business Plus, Enterprise, and Education Plus plans. If you\'re on a free Gmail account or Workspace Starter/Business Starter plan, the "Record" button simply doesn\'t appear. You\'ll need a third-party tool like Voxa to record.',
  },
  {
    question: 'Can I record Google Meet with a free Gmail account?',
    answer:
      'Yes — but not with Google\'s built-in recorder. You can use a Chrome extension like Voxa to record Google Meet calls on any account type, including free Gmail accounts. Voxa provides HD recording, live transcription, and speaker analytics at no cost.',
  },
  {
    question: 'Does the Voxa extension notify other participants when recording?',
    answer:
      'Voxa operates as a Chrome extension within your browser, so it does not trigger Google Meet\'s built-in recording notification. However, we always recommend informing meeting participants that you are recording, in compliance with local laws and company policies.',
  },
  {
    question: 'Is screen recording a good way to record Google Meet?',
    answer:
      'Screen recording (using built-in OS tools like Windows Game Bar or macOS Screenshot) captures the video and audio of your meeting. However, you won\'t get transcription, speaker labels, action items, or searchable notes. It\'s a basic fallback that works but misses the productivity benefits of a dedicated tool like Voxa.',
  },
  {
    question: 'Can I use OBS to record Google Meet?',
    answer:
      'Yes, OBS Studio is a free, open-source tool that can record your screen, including Google Meet calls. It offers advanced settings for video quality and audio sources. However, OBS has a steep learning curve, produces large files, and doesn\'t provide transcription or analytics. It\'s best suited for users who need granular control over recording settings.',
  },
  {
    question: 'What\'s the easiest way to record Google Meet without Workspace?',
    answer:
      'The easiest method is to install the Voxa Chrome extension. It takes under 30 seconds to set up, works automatically inside Google Meet, and provides HD recording, live transcription, speaker analytics, and action item tagging — all for free. No account configuration, no bots, no limits.',
  },
  {
    question: 'Will Google ever make recording free for all accounts?',
    answer:
      'Google has not announced plans to make recording available on free or Workspace Starter accounts. Recording remains a premium feature reserved for higher-tier Workspace plans. For free recording, third-party tools like Voxa remain the best option.',
  },
];

const articleSchema = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'How to Record Google Meet Without Google Workspace (2026)',
  description:
    'A step-by-step guide covering 3 methods to record Google Meet without a paid Google Workspace subscription.',
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
    '@id': 'https://www.tryvoxa.app/blog/record-google-meet-without-workspace',
  },
};

const howToSchema = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'How to Record Google Meet Without Google Workspace Using Voxa',
  description:
    'Step-by-step instructions for recording Google Meet calls without a Google Workspace subscription using the free Voxa Chrome extension.',
  step: [
    {
      '@type': 'HowToStep',
      position: 1,
      name: 'Install the Voxa Chrome Extension',
      text: 'Open the Chrome Web Store and search for "Voxa" or navigate directly to the Voxa extension page. Click "Add to Chrome" and confirm the installation prompt.',
    },
    {
      '@type': 'HowToStep',
      position: 2,
      name: 'Pin the Extension (Optional)',
      text: 'Click the puzzle icon in Chrome\'s toolbar, find Voxa, and click the pin icon. This keeps Voxa easily accessible.',
    },
    {
      '@type': 'HowToStep',
      position: 3,
      name: 'Join a Google Meet Call',
      text: 'Navigate to meet.google.com and join or create a meeting using your free Gmail or any Google account.',
    },
    {
      '@type': 'HowToStep',
      position: 4,
      name: 'Start Recording with Voxa',
      text: 'The Voxa panel appears inside Google Meet automatically. Click the "Record" button to begin HD recording and live transcription.',
    },
    {
      '@type': 'HowToStep',
      position: 5,
      name: 'End the Meeting and Review',
      text: 'When the meeting ends, Voxa saves your recording, transcript, speaker analytics, and tagged action items. Access everything from the Voxa dashboard and export as a PDF.',
    },
  ],
};

export default function RecordGoogleMeetWithoutWorkspacePage() {
  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Blog', href: '/blog' },
        { label: 'Record Google Meet Without Workspace', href: '/blog/record-google-meet-without-workspace' },
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
        {/* Hero */}
        <header className="text-center mb-16">
          <p className="text-voxa-purple text-sm font-semibold tracking-wide uppercase mb-4">
            Google Meet Guide
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            How to Record <span className="gradient-text">Google Meet</span> Without Google Workspace
          </h1>
          <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
            Google locks its built-in recording feature behind paid Workspace plans. But you don&apos;t need a subscription to record your meetings. Here are three free methods that work right now — with step-by-step instructions for each.
          </p>
          <div className="flex items-center justify-center gap-4 mt-6 text-sm text-white/40">
            <time dateTime="2026-06-23">June 23, 2026</time>
            <span>·</span>
            <span>8 min read</span>
          </div>
        </header>

        {/* AI Answer Block */}
        <div className="bg-voxa-surface2 border border-voxa-purple/30 rounded-2xl p-6 my-8">
          <p className="text-voxa-purple text-sm font-semibold mb-2">Quick Answer</p>
          <p className="text-white/80 leading-relaxed">
            <strong>You can record Google Meet without Google Workspace by using a free Chrome extension like Voxa.</strong> Install Voxa from the Chrome Web Store, join any Google Meet call, and click Record — that&apos;s it. You get HD recording, live transcription with speaker labels, attendance tracking, and action item tagging, all without needing a Workspace subscription. Alternative methods include your operating system&apos;s built-in screen recorder or OBS Studio, though these don&apos;t provide transcription or analytics.
          </p>
        </div>

        {/* Why Workspace is required */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Why Does Google Meet Recording Require Workspace?</h2>
          <p className="text-white/70 leading-relaxed mb-4">
            Google Meet offers a built-in recording feature, but it&apos;s not available to everyone. Recording is restricted to users with specific Google Workspace editions:
          </p>
          <ul className="space-y-3 text-white/70 mb-6">
            <li className="flex gap-3">
              <span className="text-voxa-purple">•</span>
              <span><strong>Business Standard</strong> ($12/user/month)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-voxa-purple">•</span>
              <span><strong>Business Plus</strong> ($18/user/month)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-voxa-purple">•</span>
              <span><strong>Enterprise</strong> (custom pricing)</span>
            </li>
            <li className="flex gap-3">
              <span className="text-voxa-purple">•</span>
              <span><strong>Education Plus</strong> (for eligible institutions)</span>
            </li>
          </ul>
          <p className="text-white/70 leading-relaxed mb-4">
            If you&apos;re using a <strong>free Gmail account</strong>, a <strong>Google Workspace Starter plan</strong>, or a <strong>Business Starter plan</strong>, the &quot;Record meeting&quot; option simply doesn&apos;t appear in the three-dot menu. There&apos;s no toggle to enable it — it&apos;s a hard restriction tied to your account tier.
          </p>
          <p className="text-white/70 leading-relaxed mb-4">
            Google positions recording as a premium feature to drive Workspace upgrades. Even when available, the built-in recorder only saves a video file to Google Drive — there are no transcripts, no speaker identification, no action items, and no analytics. It&apos;s a bare-bones screen capture dressed up as a feature.
          </p>
          <p className="text-white/70 leading-relaxed">
            For <Link href="/use-cases/students" className="text-voxa-purple hover:underline">students</Link>, freelancers, <Link href="/use-cases/startups" className="text-voxa-purple hover:underline">startups</Link>, and small teams, paying $12–$18 per user per month just to record meetings isn&apos;t practical. The good news? You have better — and free — alternatives.
          </p>
        </section>

        {/* Three methods overview */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">3 Ways to Record Google Meet Without Workspace</h2>
          <p className="text-white/70 leading-relaxed mb-8">
            We&apos;ll walk through three methods, ranked by ease of use and feature completeness. Each one works with any Google account — free Gmail included.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-voxa-surface1 border border-voxa-purple/20 rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-lg font-bold mb-2">Method 1</h3>
              <p className="text-voxa-purple font-semibold text-sm mb-2">Voxa Chrome Extension</p>
              <p className="text-white/50 text-xs">Best overall — HD recording, transcription, analytics, free forever</p>
            </div>
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🖥️</div>
              <h3 className="text-lg font-bold mb-2">Method 2</h3>
              <p className="text-white/80 font-semibold text-sm mb-2">Built-in Screen Recorder</p>
              <p className="text-white/50 text-xs">Quick and simple — Windows Game Bar or macOS Screenshot</p>
            </div>
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6 text-center">
              <div className="text-3xl mb-3">🎬</div>
              <h3 className="text-lg font-bold mb-2">Method 3</h3>
              <p className="text-white/80 font-semibold text-sm mb-2">OBS Studio</p>
              <p className="text-white/50 text-xs">Advanced — full control over recording quality and sources</p>
            </div>
          </div>
        </section>

        {/* Method 1: Voxa */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-2">Method 1: Record with Voxa (Recommended)</h2>
          <p className="text-voxa-purple text-sm font-medium mb-6">⏱ Setup time: Under 30 seconds</p>
          <p className="text-white/70 leading-relaxed mb-8">
            Voxa is a free Chrome extension built specifically for Google Meet. It records meetings in HD, generates live transcripts with speaker identification, tracks attendance, tags action items and decisions, and provides detailed speaker analytics. No Workspace subscription is required — it works with any Google account.
          </p>

          <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">Step-by-Step: Recording with Voxa</h3>
            <ol className="space-y-6">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-voxa-purple/20 text-voxa-purple font-bold flex items-center justify-center text-sm">1</span>
                <div>
                  <strong className="text-white">Install the Voxa Chrome Extension</strong>
                  <p className="text-white/60 text-sm mt-1">
                    Open the <a href="https://chromewebstore.google.com/detail/voxa-record-transcribe-go/llbjaleeiopcakodaigfpfoijliachji" className="text-voxa-purple hover:underline" target="_blank" rel="noopener noreferrer">Voxa page on the Chrome Web Store</a> and click &quot;Add to Chrome.&quot; Confirm the permissions prompt. The extension installs in seconds.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-voxa-purple/20 text-voxa-purple font-bold flex items-center justify-center text-sm">2</span>
                <div>
                  <strong className="text-white">Pin the Extension (Optional but Recommended)</strong>
                  <p className="text-white/60 text-sm mt-1">
                    Click the puzzle piece icon in Chrome&apos;s toolbar, find Voxa in the list, and click the pin icon. This keeps the Voxa button visible and easy to access.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-voxa-purple/20 text-voxa-purple font-bold flex items-center justify-center text-sm">3</span>
                <div>
                  <strong className="text-white">Join a Google Meet Call</strong>
                  <p className="text-white/60 text-sm mt-1">
                    Navigate to <strong>meet.google.com</strong> and join or create a meeting using your free Gmail account or any Google account. No Workspace plan needed.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-voxa-purple/20 text-voxa-purple font-bold flex items-center justify-center text-sm">4</span>
                <div>
                  <strong className="text-white">Start Recording</strong>
                  <p className="text-white/60 text-sm mt-1">
                    The Voxa panel appears automatically inside the Google Meet interface. Click the &quot;Record&quot; button. HD recording and live transcription with speaker labels start immediately. No bot joins the call — everything runs natively in your browser.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-voxa-purple/20 text-voxa-purple font-bold flex items-center justify-center text-sm">5</span>
                <div>
                  <strong className="text-white">End the Meeting and Review</strong>
                  <p className="text-white/60 text-sm mt-1">
                    When the call ends (or you click Stop), Voxa automatically saves your recording, transcript, speaker analytics, attendance data, and tagged action items. Open the Voxa dashboard to review everything, or export the entire meeting as a PDF.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-voxa-surface2 border border-white/[0.06] rounded-xl p-6">
            <h4 className="text-sm font-semibold text-voxa-purple mb-3">What You Get with Voxa (Free)</h4>
            <div className="grid sm:grid-cols-2 gap-3 text-sm text-white/60">
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> HD meeting recording</div>
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> Live transcription with speaker labels</div>
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> Speaker analytics (talk time, participation)</div>
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> Attendance tracking</div>
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> Action item and decision tagging</div>
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> PDF export</div>
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> Focus Mode and Silent Join</div>
              <div className="flex gap-2"><span className="text-voxa-purple">✓</span> No bot — native Chrome extension</div>
            </div>
          </div>
        </section>

        {/* Method 2: Screen Recording */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-2">Method 2: Use Your OS Built-in Screen Recorder</h2>
          <p className="text-white/50 text-sm font-medium mb-6">⏱ Setup time: None (already installed)</p>
          <p className="text-white/70 leading-relaxed mb-8">
            Every modern operating system includes a screen recorder. It&apos;s the simplest fallback option — no installation, no sign-ups. However, you get a raw video file with no transcription, no speaker labels, and no analytics.
          </p>

          <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">On Windows (Game Bar)</h3>
            <ol className="space-y-4 text-white/70">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">1</span>
                <p>Join your Google Meet call in Chrome or Edge.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">2</span>
                <p>Press <strong>Win + G</strong> to open the Xbox Game Bar overlay.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">3</span>
                <p>Click the <strong>Capture</strong> widget, then click the <strong>Record</strong> button (circle icon), or press <strong>Win + Alt + R</strong>.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">4</span>
                <p>When the meeting ends, press <strong>Win + Alt + R</strong> again to stop. Your recording saves to <code className="text-xs bg-white/[0.06] px-2 py-0.5 rounded">Videos\Captures</code>.</p>
              </li>
            </ol>
          </div>

          <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">On macOS (Screenshot Toolbar)</h3>
            <ol className="space-y-4 text-white/70">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">1</span>
                <p>Join your Google Meet call in Chrome or Safari.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">2</span>
                <p>Press <strong>Cmd + Shift + 5</strong> to open the Screenshot toolbar.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">3</span>
                <p>Select <strong>Record Entire Screen</strong> or <strong>Record Selected Portion</strong>. Click <strong>Options</strong> to ensure your microphone is selected for audio.</p>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">4</span>
                <p>Click <strong>Record</strong>. When done, click the <strong>Stop</strong> button in the menu bar. The recording saves to your Desktop by default.</p>
              </li>
            </ol>
          </div>

          <div className="bg-red-500/5 border border-red-400/20 rounded-xl p-5">
            <p className="text-red-300/80 text-sm font-semibold mb-1">⚠ Limitations of Screen Recording</p>
            <ul className="text-white/50 text-sm space-y-1">
              <li>• No transcription or speaker identification</li>
              <li>• No action items, decisions, or analytics</li>
              <li>• Large file sizes (especially for long meetings)</li>
              <li>• Audio may not capture system sound by default on macOS</li>
              <li>• You must manually start and stop recording</li>
            </ul>
          </div>
        </section>

        {/* Method 3: OBS */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-2">Method 3: Record with OBS Studio</h2>
          <p className="text-white/50 text-sm font-medium mb-6">⏱ Setup time: 5–10 minutes</p>
          <p className="text-white/70 leading-relaxed mb-8">
            OBS Studio (Open Broadcaster Software) is a free, open-source tool designed for screen recording and live streaming. It offers granular control over video quality, audio sources, and recording formats. It&apos;s overkill for most meeting recordings, but if you need precise control over output quality, it&apos;s an option.
          </p>

          <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-semibold mb-6">Step-by-Step: Recording with OBS</h3>
            <ol className="space-y-4 text-white/70">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">1</span>
                <div>
                  <p><strong>Download and install OBS Studio</strong> from <a href="https://obsproject.com" className="text-voxa-purple hover:underline" target="_blank" rel="noopener noreferrer">obsproject.com</a>. It&apos;s available for Windows, macOS, and Linux.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">2</span>
                <div>
                  <p><strong>Add a Display Capture or Window Capture source.</strong> In the Sources panel, click +, select &quot;Display Capture&quot; (full screen) or &quot;Window Capture&quot; (just the browser), and confirm.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">3</span>
                <div>
                  <p><strong>Configure audio sources.</strong> Under Settings → Audio, set your Desktop Audio (to capture meeting sound) and Mic/Auxiliary Audio (to capture your own voice). Test levels before the meeting.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">4</span>
                <div>
                  <p><strong>Set output format.</strong> Go to Settings → Output. Choose MKV or MP4 format. For meetings, 1080p at 30fps is sufficient. Set the output path to a folder with enough storage.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-white/[0.06] text-white/50 font-bold flex items-center justify-center text-sm">5</span>
                <div>
                  <p><strong>Join your Google Meet call</strong> and click &quot;Start Recording&quot; in OBS. When the meeting ends, click &quot;Stop Recording.&quot; Your file is saved to the output folder you configured.</p>
                </div>
              </li>
            </ol>
          </div>

          <div className="bg-red-500/5 border border-red-400/20 rounded-xl p-5">
            <p className="text-red-300/80 text-sm font-semibold mb-1">⚠ Limitations of OBS</p>
            <ul className="text-white/50 text-sm space-y-1">
              <li>• Steep learning curve for first-time users</li>
              <li>• No transcription, speaker labels, or analytics</li>
              <li>• File sizes can be very large</li>
              <li>• Can impact system performance during meetings</li>
              <li>• Requires manual audio configuration</li>
            </ul>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Comparison: 3 Methods Side by Side</h2>
          <p className="text-white/60 text-center mb-8">
            Here&apos;s how the three methods compare across the features that matter most.
          </p>

          <div className="w-full overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left py-4 px-4 font-semibold text-white/80 text-sm">Feature</th>
                  <th className="text-center py-4 px-4 font-semibold text-voxa-purple text-sm">Voxa Extension</th>
                  <th className="text-center py-4 px-4 font-semibold text-white/50 text-sm">Screen Recorder</th>
                  <th className="text-center py-4 px-4 font-semibold text-white/50 text-sm">OBS Studio</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-3 px-4 text-white/70">Setup Time</td>
                  <td className="py-3 px-4 text-center text-white/80">30 seconds</td>
                  <td className="py-3 px-4 text-center text-white/60">None</td>
                  <td className="py-3 px-4 text-center text-white/60">5–10 min</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-white/70">HD Recording</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-3 px-4 text-white/70">Live Transcription</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-white/70">Speaker Identification</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-3 px-4 text-white/70">Speaker Analytics</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-white/70">Action Item Tagging</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-3 px-4 text-white/70">Attendance Tracking</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-white/70">PDF Export</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                  <td className="py-3 px-4 text-center text-white/20">✗</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-3 px-4 text-white/70">No Bot Participant</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                  <td className="py-3 px-4 text-center text-emerald-400">✓</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-3 px-4 text-white/70">Recording Quality Control</td>
                  <td className="py-3 px-4 text-center text-white/60">Automatic</td>
                  <td className="py-3 px-4 text-center text-white/60">Basic</td>
                  <td className="py-3 px-4 text-center text-emerald-400">Advanced</td>
                </tr>
                <tr className="bg-white/[0.02]">
                  <td className="py-3 px-4 text-white/70 font-semibold">Price</td>
                  <td className="py-3 px-4 text-center text-voxa-purple font-semibold">Free forever</td>
                  <td className="py-3 px-4 text-center text-white/60">Free (built-in)</td>
                  <td className="py-3 px-4 text-center text-white/60">Free (open source)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* When to use each method */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8">Which Method Should You Use?</h2>

          <div className="space-y-6">
            <div className="bg-voxa-surface1 border border-voxa-purple/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">🏆 Use Voxa If...</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li className="flex gap-2"><span className="text-voxa-purple">→</span> You want recording <strong>and</strong> transcription, speaker analytics, action items, and attendance tracking</li>
                <li className="flex gap-2"><span className="text-voxa-purple">→</span> You attend meetings regularly and need searchable, structured meeting notes</li>
                <li className="flex gap-2"><span className="text-voxa-purple">→</span> You&apos;re on a free Gmail account or Workspace Starter plan</li>
                <li className="flex gap-2"><span className="text-voxa-purple">→</span> You don&apos;t want a bot joining your call</li>
                <li className="flex gap-2"><span className="text-voxa-purple">→</span> You want to export meeting summaries as PDFs</li>
              </ul>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">🖥️ Use Screen Recording If...</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li className="flex gap-2"><span className="text-white/40">→</span> You need a quick, one-time recording and don&apos;t need transcription</li>
                <li className="flex gap-2"><span className="text-white/40">→</span> You can&apos;t install Chrome extensions (e.g., managed corporate device)</li>
                <li className="flex gap-2"><span className="text-white/40">→</span> You just need a visual reference of what was shared on screen</li>
              </ul>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">🎬 Use OBS If...</h3>
              <ul className="text-white/60 text-sm space-y-2">
                <li className="flex gap-2"><span className="text-white/40">→</span> You need fine-grained control over video resolution, bitrate, and audio sources</li>
                <li className="flex gap-2"><span className="text-white/40">→</span> You&apos;re also using OBS for streaming or content creation</li>
                <li className="flex gap-2"><span className="text-white/40">→</span> You&apos;re comfortable with technical setup and don&apos;t need transcription</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Real-world scenarios */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8">Real-World Examples</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">🎓 Student Recording a Lecture</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Maria uses a free Gmail account and attends three Google Meet lectures per day. She installs Voxa once and gets automatic transcripts of every lecture with speaker labels, so she can search for specific topics during exam prep. Read more about how <Link href="/use-cases/students" className="text-voxa-purple hover:underline">students use Voxa</Link>.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">🚀 Startup Founder on a Budget</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                James runs a 5-person startup and uses free Google Workspace. Every dollar matters, so paying $12/user/month for recording isn&apos;t an option. With Voxa, his entire team records investor calls, standups, and customer interviews for free. Learn how <Link href="/use-cases/startups" className="text-voxa-purple hover:underline">startups use Voxa</Link>.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">💼 Freelancer on Client Calls</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Priya takes client briefs over Google Meet. She needs to capture requirements accurately but can&apos;t install extensions on her client&apos;s managed device. She uses Windows Game Bar as a fallback for screen recording, then reviews the video later.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3">🎙️ Content Creator</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Alex interviews guests on Google Meet and publishes the recordings as podcast episodes. He uses OBS for maximum control over audio quality and video resolution, then edits the footage in post-production.
              </p>
            </div>
          </div>
        </section>

        {/* Tips section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Tips for Better Google Meet Recordings</h2>
          <div className="space-y-4 text-white/70">
            <div className="flex gap-3">
              <span className="text-voxa-purple font-bold">1.</span>
              <p><strong>Use a wired connection or stable Wi-Fi.</strong> Dropped connections lead to gaps in both video and transcription. Wired ethernet is ideal for important meetings.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-voxa-purple font-bold">2.</span>
              <p><strong>Use a quality microphone.</strong> Built-in laptop mics pick up background noise. A USB headset or external mic dramatically improves transcription accuracy.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-voxa-purple font-bold">3.</span>
              <p><strong>Close unnecessary tabs.</strong> Chrome performance matters. Close tabs you don&apos;t need to ensure smooth recording and transcription.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-voxa-purple font-bold">4.</span>
              <p><strong>Inform participants.</strong> Always let meeting attendees know when you&apos;re recording, regardless of which method you use. It&apos;s good practice and often legally required.</p>
            </div>
            <div className="flex gap-3">
              <span className="text-voxa-purple font-bold">5.</span>
              <p><strong>Test before important meetings.</strong> Run a quick test recording before a high-stakes call. Make sure audio is capturing correctly and your tool is working.</p>
            </div>
          </div>
        </section>

        {/* Related reading */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Related Reading</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/blog/best-free-google-meet-recorder" className="block p-5 rounded-xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors">
              <p className="font-semibold text-sm">Best Free Google Meet Recorder in 2026</p>
              <p className="text-white/50 text-xs mt-1">Top 5 recorders compared</p>
            </Link>
            <Link href="/use-cases/students" className="block p-5 rounded-xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors">
              <p className="font-semibold text-sm">Voxa for Students</p>
              <p className="text-white/50 text-xs mt-1">Record lectures and study smarter</p>
            </Link>
            <Link href="/use-cases/startups" className="block p-5 rounded-xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors">
              <p className="font-semibold text-sm">Voxa for Startups</p>
              <p className="text-white/50 text-xs mt-1">Free meeting tools for growing teams</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection faqs={faqs} />

        {/* CTA */}
        <CtaBanner
          title="Record Google Meet — No Workspace Required"
          description="Voxa gives you HD recording, live transcription, and speaker analytics on any Google account. Free forever."
        />
      </article>
    </PageLayout>
  );
}
