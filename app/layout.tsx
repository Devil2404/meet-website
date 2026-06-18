import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
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
    siteName: 'Voxa',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxa — Never take meeting notes again',
    description:
      'AI meeting intelligence for Google Meet. Record, transcribe, detect keywords, track analytics, and update your CRM. Free forever.',
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
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-sans antialiased bg-voxa-bg text-white`}
      >
        {children}
      </body>
    </html>
  );
}
