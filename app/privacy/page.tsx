import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export const metadata = {
  title: 'Privacy Policy - Voxa',
  description: 'Learn how Voxa protects your privacy. Read our privacy policy to understand our data collection, security measures, and commitment to your data privacy.',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: 'Privacy Policy - Voxa',
    description: 'Learn how Voxa protects your privacy. Read our privacy policy to understand our data collection, security measures, and commitment to your data privacy.',
    url: 'https://www.tryvoxa.app/privacy',
    siteName: 'Voxa',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Voxa Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy - Voxa',
    description: 'Learn how Voxa protects your privacy. Read our privacy policy to understand our data collection, security measures, and commitment to your data privacy.',
    images: ['/og-image.png'],
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-voxa-primary hover:prose-a:text-voxa-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-sm text-white/40 mb-12">Last updated: June 18, 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">1. Introduction</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            Welcome to Voxa. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website or use our service (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">2. Data We Collect</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
          </p>
          <ul className="list-disc pl-6 mb-4 text-white/70 space-y-2">
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, products and services (including meeting metadata).</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">3. How We Use Your Data</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul className="list-disc pl-6 mb-4 text-white/70 space-y-2">
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal obligation.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Data Security</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">5. Contact Us</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            If you have any questions about this privacy policy or our privacy practices, please contact us at <a href="mailto:support@tryvoxa.app" className="text-voxa-purple hover:underline">support@tryvoxa.app</a>.
          </p>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
}
