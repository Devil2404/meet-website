import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Changelog - Voxa',
  description: 'Explore the latest updates, features, and improvements to Voxa. See what\'s new in our AI meeting recorder.',
  alternates: {
    canonical: '/changelog',
  },
  openGraph: {
    title: 'Changelog - Voxa',
    description: 'Explore the latest updates, features, and improvements to Voxa. See what\'s new in our AI meeting recorder.',
    url: 'https://www.tryvoxa.app/changelog',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Changelog' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog - Voxa',
    description: 'Explore the latest updates, features, and improvements to Voxa. See what\'s new in our AI meeting recorder.',
    images: ['/og-image.png'],
  },
};

export default function ChangelogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
