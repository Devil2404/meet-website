import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Voxa - Your meetings work for you now',
  description: 'Record, transcribe, tag, analyze and export every Google Meet meeting completely free. The smartest way to use Google Meet.',
  openGraph: {
    title: 'Voxa - Your meetings work for you now',
    description: 'Record, transcribe, tag, analyze and export every Google Meet meeting completely free.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Voxa - Your meetings work for you now',
    description: 'Record, transcribe, tag, analyze and export every Google Meet meeting completely free.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#0e0e16] text-white`}>
        {children}
      </body>
    </html>
  );
}
