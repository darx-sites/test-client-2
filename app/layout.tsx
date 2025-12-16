import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/lib/builder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Client 2 - Professional Portfolio',
  description: 'Showcasing excellence in portfolio design and development. Discover our work and expertise.',
  keywords: 'portfolio, design, development, creative work, professional services',
  authors: [{ name: 'Test Client 2' }],
  openGraph: {
    title: 'Test Client 2 - Professional Portfolio',
    description: 'Showcasing excellence in portfolio design and development.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Client 2 - Professional Portfolio',
    description: 'Showcasing excellence in portfolio design and development.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}