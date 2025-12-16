import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/lib/builder';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Test Client 2 | Professional Portfolio',
  description: 'Showcasing exceptional work and expertise in portfolio. Discover our projects, services, and creative solutions.',
  keywords: 'portfolio, professional services, creative work, projects, expertise',
  authors: [{ name: 'Test Client 2' }],
  openGraph: {
    title: 'Test Client 2 | Professional Portfolio',
    description: 'Showcasing exceptional work and expertise in portfolio',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Test Client 2 | Professional Portfolio',
    description: 'Showcasing exceptional work and expertise in portfolio',
  },
  robots: {
    index: true,
    follow: true,
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