import { Globe } from 'lucide-react';

interface CtaBannerProps {
  title?: string;
  description?: string;
}

export default function CtaBanner({
  title = "Ready to stop taking notes?",
  description = "Join thousands of professionals using Voxa to automate their meetings.",
}: CtaBannerProps) {
  return (
    <section className="py-24 relative overflow-hidden rounded-3xl border border-white/[0.06] bg-voxa-surface2 mt-20 text-center">
      {/* Background Glow */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, rgba(123,92,245,0.1) 0%, transparent 70%)',
        }}
      />
      
      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
        <p className="text-white/60 text-lg mb-8">{description}</p>
        <a
          href="https://chromewebstore.google.com/detail/voxa-record-transcribe-go/llbjaleeiopcakodaigfpfoijliachji"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-voxa-purple to-voxa-indigo text-white font-semibold text-lg hover:scale-105 transition-transform"
        >
          <Globe className="w-5 h-5" />
          Add to Chrome for Free
        </a>
      </div>
    </section>
  );
}
