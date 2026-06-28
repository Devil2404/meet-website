import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export const metadata = {
  title: 'Terms of Service - Voxa',
  description: 'Read the Voxa Terms of Service. Understand the rules, guidelines, and agreements for using our AI meeting intelligence platform.',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: 'Terms of Service - Voxa',
    description: 'Read the Voxa Terms of Service. Understand the rules, guidelines, and agreements for using our AI meeting intelligence platform.',
    url: 'https://www.tryvoxa.app/terms',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Terms of Service' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service - Voxa',
    description: 'Read the Voxa Terms of Service. Understand the rules, guidelines, and agreements for using our AI meeting intelligence platform.',
    images: ['/og-image.png'],
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-voxa-primary hover:prose-a:text-voxa-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Terms of <span className="gradient-text">Service</span>
        </h1>
        <p className="text-sm text-white/40 mb-12">Last updated: June 18, 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Acceptance of Terms</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            By accessing or using Voxa, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our service.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Use License</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            Permission is granted to temporarily download one copy of the materials (information or software) on Voxa's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
          </p>
          <ul className="list-disc pl-6 mb-4 text-white/70 space-y-2">
            <li>modify or copy the materials;</li>
            <li>use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>attempt to decompile or reverse engineer any software contained on Voxa's website;</li>
            <li>remove any copyright or other proprietary notations from the materials; or</li>
            <li>transfer the materials to another person or "mirror" the materials on any other server.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. Disclaimer</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            The materials on Voxa's website are provided on an 'as is' basis. Voxa makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Limitations</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            In no event shall Voxa or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Voxa's website, even if Voxa or a Voxa authorized representative has been notified orally or in writing of the possibility of such damage.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Revisions and Errata</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            The materials appearing on Voxa's website could include technical, typographical, or photographic errors. Voxa does not warrant that any of the materials on its website are accurate, complete, or current. Voxa may make changes to the materials contained on its website at any time without notice.
          </p>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
}
