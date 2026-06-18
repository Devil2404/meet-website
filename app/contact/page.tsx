import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export const metadata = {
  title: 'Contact Us - Voxa',
  description: 'Contact the Voxa team',
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-voxa-primary hover:prose-a:text-voxa-primary/80">
          <h1 className="text-4xl md:text-5xl font-bold mb-8">
            Contact <span className="gradient-text">Us</span>
          </h1>
          
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Get in Touch</h2>
            <p className="mb-4 text-white/70 leading-relaxed">
              We'd love to hear from you. Whether you have a question about features, trials, pricing, need a demo, or anything else, our team is ready to answer all your questions.
            </p>
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4 text-white">Support & Inquiries</h2>
            <p className="mb-4 text-white/70 leading-relaxed">
              Do an email to us at:
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
