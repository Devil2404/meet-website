'use client';

import Link from 'next/link';

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const columns: FooterColumn[] = [
  {
    title: 'Product',
    links: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/#pricing' },
      { label: 'Compare', href: '/#compare' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Security', href: '/security' },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Help Center', href: '/help' },
      { label: 'Contact', href: '/contact' },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-voxa-bg">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <a href="/" className="inline-block">
              <img src="/logo.png" alt="Voxa Logo" className="w-[115px] h-auto" />
            </a>
            <p className="text-white/30 text-sm mt-4 max-w-xs">
              AI meeting intelligence for Google Meet. Free forever.
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-medium text-white/60 mb-4">
                {col.title}
              </h4>
              <div className="space-y-3">
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-sm text-white/30 hover:text-white/60 transition-colors block"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-sm">
            © 2025 Voxa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
