'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Compare', href: '/#compare' },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.6, ease: [0.25, 0.4, 0, 1] as const },
};

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      {...fadeUp}
      className={`fixed top-0 left-0 right-0 z-50 h-16 transition-all duration-500 ${
        scrolled
          ? 'bg-[#111119]/80 backdrop-blur-xl border-b border-white/[0.06]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-between px-6">
        {/* Logo */}
        <a href="/" className="inline-block">
          <img src="/logo.png" alt="Voxa Logo" className="w-[115px] h-auto" />
        </a>

        {/* Center Nav Links — Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/50 hover:text-white transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right — CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:inline-flex relative overflow-hidden group bg-white text-voxa-bg text-sm font-medium px-4 py-2 rounded-lg hover:bg-white/90 transition-colors"
          >
            <span className="relative z-10">Add to Chrome</span>
            <span
              className="absolute inset-0 z-0"
              style={{
                background:
                  'linear-gradient(105deg, transparent 30%, rgba(123,92,245,0.4) 45%, rgba(79,106,250,0.5) 50%, rgba(123,92,245,0.4) 55%, transparent 70%)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 5s infinite',
              }}
            />
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-white/60 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.4, 0, 1] as const }}
            className="md:hidden bg-[#111119]/95 backdrop-blur-xl border-b border-white/[0.06] overflow-hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-white/50 hover:text-white transition-colors py-2.5"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 inline-flex justify-center bg-white text-voxa-bg text-sm font-medium px-4 py-2.5 rounded-lg hover:bg-white/90 transition-colors"
              >
                Add to Chrome
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
