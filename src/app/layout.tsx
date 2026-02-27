import type { Metadata } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import CustomCursor from '@/components/CustomCursor';

export const metadata: Metadata = {
  title: 'Lakshay Manchanda — Software Engineer',
  description:
    'Full-stack Software Engineer at AI Squared. Building scalable products, contributing to open source, and organising developer communities across India.',
  keywords: ['Software Engineer', 'React', 'Next.js', 'Node.js', 'Portfolio', 'Lakshay Manchanda'],
  authors: [{ name: 'Lakshay Manchanda', url: 'https://github.com/lakshayman' }],
  openGraph: {
    title: 'Lakshay Manchanda — Software Engineer',
    description: 'Full-stack Software Engineer at AI Squared.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CustomCursor />
        <div className="noise" />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
