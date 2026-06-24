import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export const metadata = {
  alternates: {
    canonical: '/help',
  },
  title: 'Help Center - Voxa',
  description: 'Voxa Help Center',
};

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-voxa-primary hover:prose-a:text-voxa-primary/80">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Help <span className="gradient-text">Center</span>
          </h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">How can we help you?</h2>
            <p className="mb-4 text-white/70 leading-relaxed">
              Welcome to the Voxa Help Center. If you're experiencing issues, have questions about your account, or want to learn more about how to use Voxa, our support team is here to assist you.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Contact Support</h2>
            <p className="mb-4 text-white/70 leading-relaxed">
              For any support inquiries or technical assistance, please do an email to us at:
            </p>
            <p className="text-xl">
              <a href="mailto:support@tryvoxa.app" className="text-voxa-purple hover:underline">
                support@tryvoxa.app
              </a>
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
}
