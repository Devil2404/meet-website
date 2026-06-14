"use client";

import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import Workflow from "@/components/landing/workflow";
import Features from "@/components/landing/features";
import SmartMarkers from "@/components/landing/smart-markers";
import Roles from "@/components/landing/roles";
import Analytics from "@/components/landing/analytics";
import CrmAutomation from "@/components/landing/crm-automation";
import Comparison from "@/components/landing/comparison";
import Testimonials from "@/components/landing/testimonials";
import Pricing from "@/components/landing/pricing";
import FinalCta from "@/components/landing/final-cta";
import Footer from "@/components/landing/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-voxa-bg">
      <Navbar />
      <Hero />
      <div className="section-divider" />
      <Workflow />
      <div className="section-divider" />
      <Features />
      <div className="section-divider" />
      <SmartMarkers />
      <div className="section-divider" />
      <Roles />
      <div className="section-divider" />
      <Analytics />
      <div className="section-divider" />
      <CrmAutomation />
      <div className="section-divider" />
      <Comparison />
      <div className="section-divider" />
      <Testimonials />
      <div className="section-divider" />
      <Pricing />
      <div className="section-divider" />
      <FinalCta />
      <Footer />
    </main>
  );
}
