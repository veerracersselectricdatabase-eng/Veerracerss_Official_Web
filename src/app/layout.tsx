import type { Metadata } from 'next';
import { Layout } from '../components/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'VeerRacerss Electric | VSSUT Formula Student Team',
    template: '%s | VeerRacerss Electric'
  },
  description: 'Official Formula Student team of Veer Surendra Sai University of Technology, Burla. Designing, building, and manufacturing cutting-edge formula racing cars.',
  keywords: ['VeerRacerss', 'Formula Student', 'VSSUT', 'Electric Vehicle', 'SAE India', 'Formula Bharat', 'AETHER', 'Racing'],
  authors: [{ name: 'Team VeerRacerss' }],
  creator: 'VeerRacerss Electric',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://veerracerss-official-web.vercel.app',
    title: 'VeerRacerss Electric | VSSUT Formula Student Team',
    description: 'Official Formula Student team of VSSUT, Burla. Innovate with intention, Design with precision, Manufacture with excellence.',
    siteName: 'VeerRacerss Electric',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VeerRacerss Electric | VSSUT Formula Student Team',
    description: 'Official Formula Student team of VSSUT, Burla. Innovate with intention, Design with precision, Manufacture with excellence.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
