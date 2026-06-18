import React from 'react';
import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';

export const metadata = {
  title: 'Security - Voxa',
  description: 'Voxa Security Practices',
};

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      <div className="flex-1 pt-32 pb-20 px-6">
      <div className="max-w-3xl mx-auto prose prose-invert prose-p:text-white/70 prose-headings:text-white prose-a:text-voxa-primary hover:prose-a:text-voxa-primary/80">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          Security <span className="gradient-text">Practices</span>
        </h1>
        <p className="text-sm text-white/40 mb-12">Last updated: June 18, 2026</p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Enterprise-Grade Security</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            At Voxa, security is not an afterthought; it's the foundation of everything we build. We understand that your meeting data is highly sensitive, and we employ industry-leading security practices to ensure your information remains confidential and protected at all times.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Data Encryption</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            Your data is encrypted both in transit and at rest.
          </p>
          <ul className="list-disc pl-6 mb-4 text-white/70 space-y-2">
            <li><strong>In Transit:</strong> All data sent to or from Voxa is encrypted using TLS 1.3 or higher.</li>
            <li><strong>At Rest:</strong> All data stored in our databases is encrypted using AES-256 encryption.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Infrastructure Security</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            We partner with leading cloud providers to host our services in secure, SOC 2 Type II and ISO 27001 compliant data centers. Our infrastructure is continuously monitored for vulnerabilities, and we employ automated intrusion detection systems.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Access Control</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            We follow the principle of least privilege. Access to production systems is strictly limited to authorized personnel who require it to perform their job duties. All access is logged and routinely audited. Multi-factor authentication (MFA) is required for all administrative access.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">Vulnerability Management</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            We conduct regular security assessments, including automated scanning and manual penetration testing by independent third-party security firms. Any identified vulnerabilities are prioritized and remediated according to their severity.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-white">4. Reporting Vulnerabilities</h2>
          <p className="mb-4 text-white/70 leading-relaxed">
            If you believe you have found a security vulnerability in Voxa, we encourage you to report it to us immediately at <a href="mailto:security@tryvoxa.app" className="text-voxa-purple hover:underline">security@tryvoxa.app</a>. We ask that you do not disclose the vulnerability publicly until we have had an opportunity to address it.
          </p>
        </section>
      </div>
      </div>
      <Footer />
    </div>
  );
}
