import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import HashRedirect from '@/components/hash-redirect';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tryvoxa.app'),
  title: 'Voxa — Never take meeting notes again',
  description:
    'Voxa is a Google Meet recorder with live transcripts, meeting notes, attendance tracking, speaker analytics, and action item management. Free Chrome extension.',
  applicationName: 'Voxa',
  category: 'productivity',
  keywords: [
    'meeting recorder',
    'Google Meet',
    'AI meeting assistant',
    'meeting transcription',
    'meeting notes',
    'CRM automation',
    'speaker analytics',
    'smart markers',
    'action items',
    'meeting intelligence',
  ],
  authors: [{ name: 'Voxa' }],
  formatDetection: {
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en': 'https://www.tryvoxa.app',
      'x-default': 'https://www.tryvoxa.app',
    },
  },
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    title: 'Voxa — AI Meeting Notes, Free',
    description:
      'Record Google Meet calls with AI transcription & smart notes.',
    type: 'website',
    url: 'https://www.tryvoxa.app',
    siteName: 'Voxa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Voxa — AI meeting intelligence for Google Meet',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxa — AI Meeting Recorder & Notes for Google Meet | Free Extension',
    description:
      'Stop taking meeting notes manually. Voxa records Google Meet in HD, generates live transcripts, tracks attendance, captures action items & syncs to your CRM — completely free.',
    images: ['/og-image.png'],
  },
  verification: {
    google: '_t6Op_k_gq3lokErsqVMRah_yFFRPRmu_YHTkhoYQWU',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Voxa',
    url: 'https://www.tryvoxa.app',
    logo: 'https://www.tryvoxa.app/logo.png',
    sameAs: [
      'https://www.instagram.com/tryvoxa.app/',
      'https://www.linkedin.com/company/133134021/admin/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B%2Bco3t1nLS0GdM7SW5Ojkgw%3D%3D',
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Voxa',
    operatingSystem: 'Chrome',
    applicationCategory: 'ProductivityApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: 'https://www.tryvoxa.app',
    image: 'https://www.tryvoxa.app/logo.png',
    description: 'AI meeting intelligence for Google Meet. Record, transcribe, detect keywords, track analytics, and update your CRM automatically.',
    browserRequirements: 'Requires Chrome',
    softwareVersion: '1.0',
    screenshot: 'https://www.tryvoxa.app/og-image.png',
  };

  const webSiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Voxa',
    url: 'https://www.tryvoxa.app',
    description: 'AI meeting intelligence for Google Meet',
    publisher: { '@type': 'Organization', name: 'Voxa' },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How do I record a Google Meet?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'With Voxa installed, simply join any Google Meet. You\'ll see a small Voxa widget on the screen. Click the record button, and Voxa will automatically start capturing the audio and generating a live transcript.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I record Google Meet without a Workspace account?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes! Voxa works independently of Google Workspace\'s built-in recording feature. Even if you\'re using a free personal Google account, you can use Voxa to record and transcribe your meetings.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Voxa the best Google Meet recorder?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voxa is built specifically for Google Meet, making it incredibly fast and reliable. Unlike meeting bots that join as participants, Voxa runs silently as an extension, providing superior transcript accuracy and deep CRM integrations—all for free.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do I generate meeting notes automatically?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voxa\'s AI automatically analyzes the transcript of your meeting. After the call ends, it generates a comprehensive summary, extracts key action items, and organizes decisions without any manual effort on your part.'
        }
      },
      {
        '@type': 'Question',
        name: 'How does the attendance tracking work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voxa automatically detects who is speaking and for how long. At the end of the meeting, it provides an attendance report showing who was present and their total participation time.'
        }
      },
      {
        '@type': 'Question',
        name: 'What are speaker analytics?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Speaker analytics provide insights into the dynamics of your conversation. Voxa tracks the talk-time ratio between participants, identifies monologues, and helps ensure balanced participation in your meetings.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is Voxa really free?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Voxa is completely free to use. You get unlimited recordings, transcripts, and basic AI summaries at no cost.'
        }
      },
      {
        '@type': 'Question',
        name: 'Does Voxa work on Zoom or Microsoft Teams?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Currently, Voxa is exclusively optimized for Google Meet to provide the best, most deeply integrated experience possible on that platform.'
        }
      },
      {
        '@type': 'Question',
        name: 'Is my data secure?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Security and privacy are our highest priorities. We use industry-standard encryption, and we never use your private meeting data to train public AI models.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I export the transcripts?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, you can easily export your full meeting transcripts and AI summaries to PDF, copy them to your clipboard, or automatically push them to your connected CRM.'
        }
      },
      {
        '@type': 'Question',
        name: 'Do I need the meeting host\'s permission?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voxa operates on your browser. However, we strongly recommend informing all participants that the meeting is being recorded and transcribed, as required by local laws.'
        }
      },
      {
        '@type': 'Question',
        name: 'How accurate is the transcription?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voxa uses state-of-the-art speech-to-text models that are highly accurate, even dealing well with technical jargon, accents, and background noise.'
        }
      },
      {
        '@type': 'Question',
        name: 'What CRMs do you support?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voxa currently supports automated syncing with HubSpot and Salesforce, with more integrations being added based on user feedback.'
        }
      },
      {
        '@type': 'Question',
        name: 'How do Smart Markers work?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'During a meeting, Voxa listens for specific trigger phrases (like \'Action item\' or \'We decided\'). When detected, it automatically highlights that section of the transcript for easy review later.'
        }
      },
      {
        '@type': 'Question',
        name: 'Can I use Voxa on mobile?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Voxa is currently a Chrome extension designed for desktop use. It does not operate on mobile browsers or the standalone Google Meet mobile app.'
        }
      }
    ]
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body
        className={`${inter.className} ${inter.variable} font-sans antialiased bg-voxa-bg text-white`}
        suppressHydrationWarning
      >
        <Script
          id="microsoft-clarity"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(c,l,a,r,i,t,y){
                  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
              })(window, document, "clarity", "script", "xc36jen23j");
            `,
          }}
        />
        <HashRedirect />
        {children}
      </body>
    </html>
  );
}
