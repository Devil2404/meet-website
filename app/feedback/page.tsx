import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export const metadata = {
  title: 'Feedback - Voxa',
  description: 'Provide feedback and shape the future of Voxa. Let us know what you think of our AI meeting recorder.',
  alternates: {
    canonical: '/feedback',
  },
  openGraph: {
    title: 'Feedback - Voxa',
    description: 'Provide feedback and shape the future of Voxa. Let us know what you think of our AI meeting recorder.',
    url: 'https://www.tryvoxa.app/feedback',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Feedback' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Feedback - Voxa',
    description: 'Provide feedback and shape the future of Voxa. Let us know what you think of our AI meeting recorder.',
    images: ['/og-image.png'],
  },
};

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 px-6 flex flex-col items-center">
        <div className="max-w-3xl w-full text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            We Value Your <span className="gradient-text">Feedback</span>
          </h1>
          <p className="text-lg text-white/60">
            Tell us about your experience using Voxa. Your feedback helps us build a better tool.
          </p>
        </div>
        
        <div className="w-full max-w-[640px] bg-white/5 p-4 md:p-8 rounded-3xl border border-white/10 flex justify-center shadow-2xl">
          <iframe 
            src="https://docs.google.com/forms/d/e/1FAIpQLSfe5oLowysMcidmLlJuADK72Sgk_u051UkquWNLt4pFV9AAQQ/viewform?embedded=true" 
            width="640" 
            height="1200" 
            frameBorder="0" 
            marginHeight={0} 
            marginWidth={0}
            className="w-full max-w-full rounded-xl bg-transparent"
          >
            Loading…
          </iframe>
        </div>
      </div>
      <Footer />
    </div>
  );
}
