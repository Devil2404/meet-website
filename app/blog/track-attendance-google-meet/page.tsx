import { AlertTriangle, Lightbulb } from 'lucide-react';

import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/seo/page-layout';
import CtaBanner from '@/components/seo/cta-banner';
import ComparisonTable from '@/components/seo/comparison-table';
import FaqSection from '@/components/seo/faq-section';

export const metadata: Metadata = {
  alternates: {
    canonical: '/blog/track-attendance-google-meet',
  },
  title: 'How to Track Attendance in Google Meet (3 Easy Methods) | Voxa',
  description:
    'Learn how to track attendance in Google Meet using Voxa, Google Workspace admin reports, or manual tracking. Step-by-step guide with comparison of all methods.',
  keywords: [
    'how to track attendance in google meet',
    'google meet attendance tracker',
    'meeting attendance',
    'attendance report google meet',
    'google meet attendance list',
    'track who joined google meet',
  ],
  openGraph: {
    title: 'How to Track Attendance in Google Meet (3 Easy Methods)',
    description:
      'A complete guide to tracking meeting attendance in Google Meet. Compare Voxa extension, Google Workspace admin, and manual methods with step-by-step instructions.',
    url: 'https://www.tryvoxa.app/blog/track-attendance-google-meet',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'How to Track Attendance in Google Meet (3 Easy Methods)',
    description:
      'Track who joins your Google Meet calls automatically. Compare 3 methods and find the best attendance tracking solution for your team.',
  },
};

const comparisonFeatures = [
  { name: 'Automatic Attendance Log', voxa: true, competitor: 'Admin only' },
  { name: 'Join & Leave Timestamps', voxa: true, competitor: 'Partial' },
  { name: 'Works for Free Google Accounts', voxa: true, competitor: false },
  { name: 'No Admin Setup Required', voxa: true, competitor: false },
  { name: 'Export as PDF', voxa: true, competitor: false },
  { name: 'Includes Meeting Recording', voxa: true, competitor: false },
  { name: 'Includes Transcript', voxa: true, competitor: false },
  { name: 'Speaker Analytics', voxa: true, competitor: false },
  { name: 'Cost', voxa: 'Free forever', competitor: 'Workspace paid plan' },
];

const faqs = [
  {
    question: 'Can you track attendance in Google Meet for free?',
    answer:
      'Yes. While Google\'s built-in attendance tracking requires a paid Workspace plan (Education Plus, Enterprise, or Business Plus), you can use the free Voxa Chrome extension to automatically track attendance in any Google Meet — including meetings on free Google accounts.',
  },
  {
    question: 'Does Google Meet have a built-in attendance tracker?',
    answer:
      'Google Meet offers attendance reports only for Google Workspace Education Plus and Enterprise editions. The organizer receives an email report after the meeting with participant names, join times, and duration. This feature is not available on free Google accounts or lower-tier Workspace plans.',
  },
  {
    question: 'How do I see who attended a Google Meet after it ends?',
    answer:
      'If you use Google Workspace Education Plus or Enterprise, you\'ll receive an attendance report via email after the meeting. With Voxa, you can view the attendance list — including join times, leave times, and participation duration — directly in the extension panel during or after any Google Meet call.',
  },
  {
    question: 'Can I track attendance for recurring Google Meet calls?',
    answer:
      'Yes. Voxa tracks attendance for every Google Meet call you join, including recurring meetings. Each session gets its own attendance log, so you can compare attendance across recurring standup meetings, classes, or team syncs over time.',
  },
  {
    question: 'How accurate is automated attendance tracking in Google Meet?',
    answer:
      'Automated attendance tracking with Voxa is highly accurate because it detects participants directly from the Google Meet session. It records the exact time each participant joins and leaves, eliminating the errors that come with manual roll calls or self-reported attendance.',
  },
  {
    question: 'Can students use Voxa to track attendance in online classes?',
    answer:
      'Yes. Voxa works on any Google Meet call, including those used for online classes. Students and educators can use Voxa to verify attendance, and the tool also provides a live transcript and recording of the lecture — making it useful for both administration and studying.',
  },
  {
    question: 'Does Voxa require admin permissions to track attendance?',
    answer:
      'No. Unlike Google Workspace attendance reports, which require admin-level configuration, Voxa is a Chrome extension that any individual user can install. There is no need for IT admin setup, domain-wide deployment, or a paid Workspace plan.',
  },
];

export default function TrackAttendanceGoogleMeetPage() {
  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: 'How to Track Attendance in Google Meet (3 Easy Methods)',
    description:
      'A complete guide to tracking meeting attendance in Google Meet using Voxa, Google Workspace admin reports, or manual tracking methods.',
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
      '@id': 'https://www.tryvoxa.app/blog/track-attendance-google-meet',
    },
    keywords:
      'how to track attendance in google meet, google meet attendance tracker, meeting attendance, attendance report google meet',
  };

  const howToSchema = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: 'How to Track Attendance in Google Meet with Voxa',
    description:
      'Step-by-step instructions for setting up automatic attendance tracking in Google Meet using the free Voxa Chrome extension.',
    totalTime: 'PT3M',
    tool: [
      {
        '@type': 'HowToTool',
        name: 'Google Chrome browser',
      },
      {
        '@type': 'HowToTool',
        name: 'Voxa Chrome extension',
      },
    ],
    step: [
      {
        '@type': 'HowToStep',
        name: 'Install the Voxa Chrome Extension',
        text: 'Visit the Chrome Web Store and search for "Voxa" or go directly to the Voxa extension page. Click "Add to Chrome" and confirm the installation.',
        url: 'https://chromewebstore.google.com/detail/voxa-record-transcribe-go/llbjaleeiopcakodaigfpfoijliachji',
      },
      {
        '@type': 'HowToStep',
        name: 'Join a Google Meet call',
        text: 'Open Google Meet and join or start a meeting as you normally would. The Voxa panel will appear automatically on the right side of the screen.',
      },
      {
        '@type': 'HowToStep',
        name: 'Enable attendance tracking',
        text: 'Voxa automatically begins tracking attendance as soon as the meeting starts. You will see a real-time list of participants with their join times in the Voxa panel.',
      },
      {
        '@type': 'HowToStep',
        name: 'Monitor attendance during the meeting',
        text: 'View the attendance panel during the meeting to see who has joined, who has left, and how long each participant has been present. Late arrivals and early departures are clearly indicated.',
      },
      {
        '@type': 'HowToStep',
        name: 'Export the attendance report',
        text: 'After the meeting, export the attendance report as a PDF. The report includes participant names, join and leave times, total duration, and overall participation metrics.',
      },
    ],
  };

  return (
    <PageLayout
      breadcrumbs={[
        { label: 'Blog', href: '/blog' },
        { label: 'Track Attendance in Google Meet', href: '/blog/track-attendance-google-meet' },
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
          How to Track Attendance in{' '}
          <span className="gradient-text">Google Meet</span>
        </h1>

        {/* Introduction */}
        <p className="text-xl text-white/60 leading-relaxed mb-4">
          Whether you&apos;re a teacher managing a virtual classroom, a team lead running daily standups,
          or an HR manager tracking participation for compliance, knowing who actually showed up to your
          Google Meet call is essential. Unfortunately, Google Meet&apos;s built-in attendance tracking
          is limited to expensive Workspace plans — leaving most users without a reliable solution.
        </p>
        <p className="text-lg text-white/50 leading-relaxed mb-8">
          In this guide, we&apos;ll walk through three practical methods for tracking attendance in
          Google Meet: using the free Voxa Chrome extension, leveraging Google Workspace admin reports,
          and manual tracking. We&apos;ll compare all three so you can choose the best approach for your
          situation.
        </p>

        {/* AI Answer Block */}
        <div className="bg-voxa-surface2 border border-voxa-purple/30 rounded-2xl p-6 my-8">
          <p className="text-voxa-purple text-sm font-semibold mb-2">Quick Answer</p>
          <p className="text-white/80 leading-relaxed">
            The easiest way to track attendance in Google Meet is to install the free{' '}
            <Link href="/#features" className="text-voxa-purple hover:underline">Voxa Chrome extension</Link>.
            It automatically logs every participant&apos;s name, join time, leave time, and total
            duration — no admin setup or paid Workspace plan required. After the meeting, you can
            export the attendance report as a PDF. Google&apos;s built-in attendance tracking is only
            available on Workspace Education Plus and Enterprise plans and requires admin configuration.
            Manual tracking with a spreadsheet works but is error-prone and time-consuming.
          </p>
        </div>

        {/* Why Attendance Tracking Matters */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Why Attendance Tracking Matters</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            Meeting attendance tracking isn&apos;t just about taking roll call. It plays a critical
            role across education, corporate environments, and compliance-driven organizations.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-purple">Education</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Schools and universities need attendance records for grading, participation tracking,
                and accreditation compliance. With the rise of hybrid and remote learning, tracking
                virtual attendance is as important as physical presence. Teachers need to verify that
                students didn&apos;t just join and walk away.
              </p>
            </div>
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-cyan">Corporate Teams</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Team leads and project managers use attendance data to understand engagement patterns.
                Are certain team members consistently missing standups? Is a key stakeholder always
                joining late? Attendance data helps identify communication gaps and improve meeting
                culture.
              </p>
            </div>
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-indigo">Compliance &amp; Auditing</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Regulated industries — including finance, healthcare, and government — often require
                documented proof that specific individuals participated in mandatory training sessions,
                policy briefings, or compliance meetings. An automatic attendance log serves as a
                verifiable record.
              </p>
            </div>
          </div>
        </section>

        {/* Method 1: Voxa */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">
            Method 1: Track Attendance with Voxa{' '}
            <span className="text-voxa-purple">(Recommended)</span>
          </h2>
          <p className="text-white/60 leading-relaxed mb-8">
            The simplest and most feature-rich way to track attendance in Google Meet is with the{' '}
            <a
              href="https://chromewebstore.google.com/detail/voxa-record-transcribe-go/llbjaleeiopcakodaigfpfoijliachji"
              className="text-voxa-purple hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              free Voxa Chrome extension
            </a>. Here&apos;s how to set it up:
          </p>

          <div className="space-y-6">
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 1:</span> Install the Voxa Chrome Extension
              </h3>
              <p className="text-white/60 leading-relaxed">
                Go to the{' '}
                <a
                  href="https://chromewebstore.google.com/detail/voxa-record-transcribe-go/llbjaleeiopcakodaigfpfoijliachji"
                  className="text-voxa-purple hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chrome Web Store
                </a>{' '}
                and search for &quot;Voxa&quot; or click the link directly. Click{' '}
                <strong className="text-white/80">&quot;Add to Chrome&quot;</strong> and confirm the
                installation. The extension will be ready to use immediately — no account creation or
                configuration required.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 2:</span> Join a Google Meet Call
              </h3>
              <p className="text-white/60 leading-relaxed">
                Open Google Meet and join or start a meeting as usual. As soon as you enter the call,
                Voxa&apos;s panel will appear on the right side of the screen. The extension integrates
                directly into the Google Meet interface — no separate app to switch between.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 3:</span> Automatic Attendance Tracking Begins
              </h3>
              <p className="text-white/60 leading-relaxed">
                Voxa automatically starts tracking attendance as soon as the meeting begins. You&apos;ll
                see a real-time list of participants with their join times. As people join and leave
                throughout the meeting, the attendance log updates continuously. Late arrivals and early
                departures are clearly marked.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 4:</span> Monitor Participation During the Meeting
              </h3>
              <p className="text-white/60 leading-relaxed">
                Beyond just who&apos;s present, Voxa&apos;s{' '}
                <Link href="/#features" className="text-voxa-purple hover:underline">speaker analytics</Link>{' '}
                show you who&apos;s actually participating. See talk time distribution, identify who hasn&apos;t
                spoken yet, and get a full picture of engagement — not just attendance.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-voxa-purple mr-2">Step 5:</span> Export the Attendance Report
              </h3>
              <p className="text-white/60 leading-relaxed">
                After the meeting ends, export the attendance report as a PDF. The report includes
                participant names, join and leave times, total duration, and participation metrics.
                Perfect for sharing with administrators, HR, or compliance teams.
              </p>
            </div>
          </div>

          <div className="bg-voxa-surface2 border border-voxa-purple/30 rounded-2xl p-6 mt-8">
            <p className="text-voxa-purple text-sm font-semibold mb-2">💡 Bonus</p>
            <p className="text-white/80 leading-relaxed">
              Voxa doesn&apos;t just track attendance — it also provides HD recording, live
              transcription, action item tagging, and decision tracking. You get a complete meeting
              productivity suite for free. Check out our{' '}
              <Link href="/blog/best-free-google-meet-recorder" className="text-voxa-purple hover:underline">
                best free Google Meet recorder guide
              </Link>{' '}
              to learn more about the recording capabilities.
            </p>
          </div>
        </section>

        {/* Method 2: Google Workspace Admin */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Method 2: Google Workspace Admin Reports</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            If your organization uses Google Workspace Education Plus, Enterprise Standard, Enterprise
            Plus, or Business Plus, meeting organizers can receive automated attendance reports via email
            after each meeting.
          </p>

          <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 1:</span> Verify Your Workspace Plan
              </h3>
              <p className="text-white/60 leading-relaxed">
                Attendance reports are only available on Google Workspace Education Plus, Enterprise
                Standard, Enterprise Plus, and Business Plus editions. Free Google accounts and lower-tier
                Workspace plans do not include this feature. Check with your IT admin to confirm your plan.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 2:</span> Enable Attendance Tracking in Admin Console
              </h3>
              <p className="text-white/60 leading-relaxed">
                Your Google Workspace admin needs to enable attendance tracking in the Admin Console
                under <strong className="text-white/80">Apps → Google Workspace → Google Meet → Meet
                settings</strong>. The admin can enable it for specific organizational units or the
                entire domain.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 3:</span> Organize a Meeting with 5+ Participants
              </h3>
              <p className="text-white/60 leading-relaxed">
                Google&apos;s attendance reports only generate for meetings with 5 or more participants
                (2 or more in Education editions). Schedule and conduct your meeting as usual through
                Google Calendar.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 4:</span> Receive the Report via Email
              </h3>
              <p className="text-white/60 leading-relaxed">
                After the meeting ends, the organizer will receive an email with a CSV attachment
                containing participant names, email addresses, join time, leaving time, and duration.
                The report is typically delivered within minutes of the meeting ending.
              </p>
            </div>
          </div>

          <div className="bg-voxa-surface2 border border-white/[0.06] rounded-2xl p-6 mt-8">
            <p className="text-white/60 text-sm font-semibold mb-2">⚠️ Limitations</p>
            <ul className="text-white/60 text-sm space-y-2">
              <li>• Requires a paid Google Workspace plan (Education Plus, Enterprise, or Business Plus)</li>
              <li>• Must be enabled by a domain admin — individual users can&apos;t turn it on</li>
              <li>• Requires minimum 5 participants (2 for Education editions)</li>
              <li>• Only the meeting organizer receives the report</li>
              <li>• No real-time attendance view during the meeting</li>
              <li>• No speaker analytics or participation metrics beyond presence</li>
            </ul>
          </div>
        </section>

        {/* Method 3: Manual Tracking */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Method 3: Manual Attendance Tracking</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            If you don&apos;t have access to Voxa or a paid Workspace plan, you can track attendance
            manually. While this method is free and requires no tools, it&apos;s time-consuming and
            error-prone.
          </p>

          <div className="space-y-6">
            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 1:</span> Prepare a Participant List
              </h3>
              <p className="text-white/60 leading-relaxed">
                Before the meeting, create a spreadsheet or document with the names of all expected
                participants. Include columns for name, join time, leave time, and notes. Google Sheets
                works well for this purpose.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 2:</span> Check the Participants Panel
              </h3>
              <p className="text-white/60 leading-relaxed">
                During the meeting, open Google Meet&apos;s built-in Participants panel (click the
                people icon at the bottom of the screen). This shows the current list of participants.
                Manually cross-reference this list with your pre-prepared roster and record join times.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 3:</span> Monitor Throughout the Meeting
              </h3>
              <p className="text-white/60 leading-relaxed">
                Periodically check the Participants panel throughout the meeting to catch late arrivals
                and early departures. This requires active attention and takes you away from the
                meeting content itself — a significant drawback for facilitators.
              </p>
            </div>

            <div className="bg-white/[0.02] border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-xl font-semibold mb-3">
                <span className="text-white/50 mr-2">Step 4:</span> Compile the Final Report
              </h3>
              <p className="text-white/60 leading-relaxed">
                After the meeting, clean up your spreadsheet and fill in any gaps. Share the attendance
                report with relevant stakeholders. For recurring meetings, maintain a running spreadsheet
                to track attendance trends over time.
              </p>
            </div>
          </div>
        </section>

        {/* Comparison Table */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-4">Voxa vs Google Workspace Attendance Tracking</h2>
          <p className="text-white/60 leading-relaxed mb-6">
            Here&apos;s how Voxa&apos;s attendance tracking compares to Google Workspace&apos;s built-in
            reporting:
          </p>
          <ComparisonTable competitorName="Google Workspace" features={comparisonFeatures} />
        </section>

        {/* All Three Methods Compared */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8">All Three Methods Compared</h2>
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="py-4 px-4 text-white/80 font-semibold">Criteria</th>
                  <th className="py-4 px-4 text-voxa-purple font-semibold">Voxa Extension</th>
                  <th className="py-4 px-4 text-voxa-cyan font-semibold">Google Workspace</th>
                  <th className="py-4 px-4 text-white/50 font-semibold">Manual Tracking</th>
                </tr>
              </thead>
              <tbody className="text-sm text-white/60">
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Cost</td>
                  <td className="py-4 px-4 text-emerald-400">Free forever</td>
                  <td className="py-4 px-4">$12-25/user/month</td>
                  <td className="py-4 px-4">Free (but labor-intensive)</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-4 px-4 font-medium text-white/80">Setup Time</td>
                  <td className="py-4 px-4">2 minutes</td>
                  <td className="py-4 px-4">Requires IT admin</td>
                  <td className="py-4 px-4">5-10 minutes per meeting</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Automatic</td>
                  <td className="py-4 px-4 text-emerald-400">Yes</td>
                  <td className="py-4 px-4">Yes (after admin setup)</td>
                  <td className="py-4 px-4">No</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-4 px-4 font-medium text-white/80">Real-time View</td>
                  <td className="py-4 px-4 text-emerald-400">Yes</td>
                  <td className="py-4 px-4">No (report after meeting)</td>
                  <td className="py-4 px-4">Manual checking only</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">Min. Participants</td>
                  <td className="py-4 px-4">No minimum</td>
                  <td className="py-4 px-4">5 (or 2 for Education)</td>
                  <td className="py-4 px-4">No minimum</td>
                </tr>
                <tr className="border-b border-white/[0.04]">
                  <td className="py-4 px-4 font-medium text-white/80">Speaker Analytics</td>
                  <td className="py-4 px-4 text-emerald-400">Yes</td>
                  <td className="py-4 px-4">No</td>
                  <td className="py-4 px-4">No</td>
                </tr>
                <tr className="border-b border-white/[0.04] bg-white/[0.02]">
                  <td className="py-4 px-4 font-medium text-white/80">PDF Export</td>
                  <td className="py-4 px-4 text-emerald-400">Yes</td>
                  <td className="py-4 px-4">CSV only</td>
                  <td className="py-4 px-4">Manual formatting</td>
                </tr>
                <tr>
                  <td className="py-4 px-4 font-medium text-white/80">Also Includes</td>
                  <td className="py-4 px-4">Recording, transcript, notes</td>
                  <td className="py-4 px-4">Attendance only</td>
                  <td className="py-4 px-4">Nothing extra</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Use Cases / Real-World Scenarios */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-8">Real-World Scenarios</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-purple">Online Classroom</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                A university professor teaches a 200-student lecture via Google Meet. Using Voxa,
                attendance is tracked automatically with exact join and leave times. Students who join
                for only 5 minutes are clearly flagged. The professor exports the PDF report and uploads
                it to the LMS for grade calculation — all without interrupting the lecture.
              </p>
              <p className="mt-3">
                <Link href="/use-cases/students" className="text-voxa-purple text-sm hover:underline">
                  Learn more about Voxa for students →
                </Link>
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-cyan">Daily Standup</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                An engineering team lead runs a 15-minute daily standup on Google Meet. Voxa tracks
                who shows up each day, revealing that two team members frequently miss Monday standups.
                The team lead uses this data to adjust the meeting schedule and improve team
                communication patterns.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-voxa-indigo">Compliance Training</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                A financial services company conducts mandatory quarterly compliance training via Google
                Meet. The compliance officer uses Voxa to generate an attendance report with exact
                timestamps, which is filed as part of the regulatory audit trail. The recording and
                transcript serve as proof that specific topics were covered.
              </p>
            </div>

            <div className="bg-voxa-surface1 border border-white/[0.06] rounded-2xl p-6">
              <h3 className="text-lg font-semibold mb-3 text-white/70">Client Meetings</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                A consulting firm tracks attendance across client meetings to ensure the right
                stakeholders are present for key decisions. When a client later claims they weren&apos;t
                informed about a scope change, the consulting team can reference the attendance log
                and meeting transcript as documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Tips for Better Attendance Tracking */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Tips for Better Attendance Tracking</h2>
          <div className="space-y-4">
            <div className="border-l-2 border-voxa-purple/50 pl-6">
              <h3 className="text-lg font-semibold mb-2">Set Clear Expectations</h3>
              <p className="text-white/60 leading-relaxed">
                Let participants know that attendance is being tracked. This improves punctuality and
                ensures people stay engaged throughout the meeting rather than just joining and leaving.
              </p>
            </div>
            <div className="border-l-2 border-voxa-purple/50 pl-6">
              <h3 className="text-lg font-semibold mb-2">Use Speaker Analytics for Engagement</h3>
              <p className="text-white/60 leading-relaxed">
                Presence doesn&apos;t equal participation. Voxa&apos;s speaker analytics show you not
                just who attended, but who actively contributed to the discussion. This is especially
                valuable for educators assessing participation grades and managers evaluating meeting
                effectiveness.
              </p>
            </div>
            <div className="border-l-2 border-voxa-purple/50 pl-6">
              <h3 className="text-lg font-semibold mb-2">Combine Attendance with Meeting Notes</h3>
              <p className="text-white/60 leading-relaxed">
                An attendance list is more useful when paired with meeting context. Voxa provides both —
                so you can see not just who attended, but what was discussed, what decisions were made,
                and what action items were assigned. This is the complete picture that standalone
                attendance tools miss.
              </p>
            </div>
            <div className="border-l-2 border-voxa-purple/50 pl-6">
              <h3 className="text-lg font-semibold mb-2">Archive Reports for Recurring Meetings</h3>
              <p className="text-white/60 leading-relaxed">
                For recurring meetings like weekly standups or monthly all-hands, keep attendance reports
                organized by date. This creates a valuable dataset for understanding attendance trends
                and identifying systemic issues.
              </p>
            </div>
          </div>
        </section>

        {/* Internal Links Section */}
        <section className="my-16">
          <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link
              href="/blog/best-free-google-meet-recorder"
              className="block p-6 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors"
            >
              <h3 className="font-semibold mb-2">Best Free Google Meet Recorder</h3>
              <p className="text-white/50 text-sm">Compare the top recording tools for Google Meet</p>
            </Link>
            <Link
              href="/use-cases/students"
              className="block p-6 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors"
            >
              <h3 className="font-semibold mb-2">Voxa for Students</h3>
              <p className="text-white/50 text-sm">Track attendance and transcribe lectures for free</p>
            </Link>
            <Link
              href="/#features"
              className="block p-6 rounded-2xl bg-voxa-surface1 border border-white/[0.06] hover:border-voxa-purple/30 transition-colors"
            >
              <h3 className="font-semibold mb-2">All Voxa Features</h3>
              <p className="text-white/50 text-sm">Explore the full Voxa feature set</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <FaqSection faqs={faqs} />

        {/* CTA */}
        <CtaBanner
          title="Track Attendance Automatically — For Free"
          description="Voxa logs every participant, join time, and leave time in your Google Meet calls. No paid plan required. No admin setup needed."
        />
      </article>
    </PageLayout>
  );
}
