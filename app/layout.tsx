import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tryvoxa.app'),
  title: 'Voxa — Never take meeting notes again',
  description:
    'Voxa is an AI meeting intelligence platform for Google Meet. Record, transcribe, detect smart keywords, track speaker analytics, generate action items, and update your CRM automatically. Free forever.',
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
  openGraph: {
    title: 'Voxa — Never take meeting notes again',
    description:
      'AI meeting intelligence for Google Meet. Record, transcribe, detect keywords, track analytics, and update your CRM. Free forever.',
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
    title: 'Voxa — Never take meeting notes again',
    description:
      'AI meeting intelligence for Google Meet. Record, transcribe, detect keywords, track analytics, and update your CRM. Free forever.',
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
      'https://twitter.com/tryvoxa',
      'https://www.linkedin.com/company/voxa',
    ],
  };

  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Voxa',
    operatingSystem: 'Chrome OS, Windows, macOS, Linux',
    applicationCategory: 'BusinessApplication',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD',
    },
    url: 'https://www.tryvoxa.app',
    image: 'https://www.tryvoxa.app/logo.png',
    description: 'AI meeting intelligence for Google Meet. Record, transcribe, detect keywords, track analytics, and update your CRM automatically.',
  };

  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased bg-voxa-bg text-white`}
      >
        {children}
      </body>
    </html>
  );
}
