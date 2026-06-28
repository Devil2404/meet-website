import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Feedback - Voxa',
  description: 'Provide feedback and shape the future of Voxa. Vote on feature requests, suggest improvements, and see what we are building next.',
  alternates: {
    canonical: '/feedback',
  },
  openGraph: {
    title: 'Feedback - Voxa',
    description: 'Provide feedback and shape the future of Voxa. Vote on feature requests, suggest improvements, and see what we are building next.',
    url: 'https://www.tryvoxa.app/feedback',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Feedback' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feedback - Voxa',
    description: 'Provide feedback and shape the future of Voxa. Vote on feature requests, suggest improvements, and see what we are building next.',
    images: ['/og-image.png'],
  },
};

export default function FeedbackLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
