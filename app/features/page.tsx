import Navbar from '@/components/landing/navbar';
import FeaturesComponent from '@/components/landing/features';
import Footer from '@/components/landing/footer';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Features | Voxa',
  description: 'Explore the powerful features of Voxa: AI Meeting Intelligence, Auto-Transcription, Smart Markers, CRM Sync, and more.',
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'Features | Voxa',
    description: 'Explore the powerful features of Voxa: AI Meeting Intelligence, Auto-Transcription, Smart Markers, CRM Sync, and more.',
    url: 'https://www.tryvoxa.app/features',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Features' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features | Voxa',
    description: 'Explore the powerful features of Voxa: AI Meeting Intelligence, Auto-Transcription, Smart Markers, CRM Sync, and more.',
    images: ['/og-image.png'],
  },
};

export default function FeaturesPage() {
  return (
    <main className="min-h-screen bg-voxa-bg">
      <Navbar />
      <div className="pt-16">
        <FeaturesComponent />
      </div>
      <Footer />
    </main>
  );
}
