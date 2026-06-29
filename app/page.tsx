import dynamic from 'next/dynamic';
import Navbar from "@/components/landing/navbar";
import Hero from "@/components/landing/hero";
import { LazyMotion, domAnimation } from 'framer-motion';

const Workflow = dynamic(() => import("@/components/landing/workflow"), { ssr: true });
const Features = dynamic(() => import("@/components/landing/features"), { ssr: true });
const SmartMarkers = dynamic(() => import("@/components/landing/smart-markers"), { ssr: true });
const Roles = dynamic(() => import("@/components/landing/roles"), { ssr: true });
const Analytics = dynamic(() => import("@/components/landing/analytics"), { ssr: true });
const CrmAutomation = dynamic(() => import("@/components/landing/crm-automation"), { ssr: true });
const Comparison = dynamic(() => import("@/components/landing/comparison"), { ssr: true });
const Testimonials = dynamic(() => import("@/components/landing/testimonials"), { ssr: true });
const Pricing = dynamic(() => import("@/components/landing/pricing"), { ssr: true });
const HomepageFaq = dynamic(() => import("@/components/landing/faq"), { ssr: true });
const FinalCta = dynamic(() => import("@/components/landing/final-cta"), { ssr: true });
const Footer = dynamic(() => import("@/components/landing/footer"), { ssr: true });

export default function Home() {
  return (
    <LazyMotion features={domAnimation}>
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
        <HomepageFaq />
        <div className="section-divider" />
        <FinalCta />
        <Footer />
      </main>
    </LazyMotion>
  );
}
