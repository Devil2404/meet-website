'use client';

import Navbar from '@/components/landing/navbar';
import Footer from '@/components/landing/footer';
import Breadcrumbs from './breadcrumbs';

interface PageLayoutProps {
  children: React.ReactNode;
  breadcrumbs?: { label: string; href: string }[];
}

export default function PageLayout({ children, breadcrumbs }: PageLayoutProps) {
  return (
    <div className="min-h-screen bg-voxa-bg flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-16 px-6 max-w-7xl mx-auto w-full">
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        {children}
      </main>
      <Footer />
    </div>
  );
}
