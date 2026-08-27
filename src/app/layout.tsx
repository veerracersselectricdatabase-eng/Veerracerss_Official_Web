import type { Metadata } from 'next';
import { Layout } from '../components/Layout';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://veerracerss-official-web.vercel.app'),
  title: {
    default: 'VeerRacerss Electric | VSSUT Formula Student Team | EV Racing Odisha',
    template: '%s | VeerRacerss Electric'
  },
  description: 'VeerRacerss Electric is the official Formula Student team of VSSUT, Burla. We designed and manufactured AETHER, the first EV made by an engineering college in Odisha. Pushing boundaries in SAE India, Formula Bharat, and Formula Imperial.',
  keywords: [
    'VeerRacerss', 'Formula Student', 'VSSUT', 'Electric Vehicle', 
    'SAE India', 'Formula Bharat', 'AETHER', 'Formula Imperial', 
    'Odisha Engineering', 'EV Racing India', 'VSSUT Burla Team'
  ],
  authors: [{ name: 'Team VeerRacerss' }],
  creator: 'VeerRacerss Electric',
  publisher: 'VSSUT Burla',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://veerracerss-official-web.vercel.app',
    title: 'VeerRacerss Electric | VSSUT Formula Student Team',
    description: 'Official Formula Student team of VSSUT, Burla. Builders of AETHER - the first EV by an engineering college in Odisha. Innovate with intention, Design with precision, Manufacture with excellence.',
    siteName: 'VeerRacerss Electric',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1614026480209-cd9934144671?q=80&w=2070&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'VeerRacerss Electric Formula Student Car AETHER',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VeerRacerss Electric | VSSUT Formula Student Team',
    description: 'Official Formula Student team of VSSUT, Burla. Builders of AETHER - the first EV by an engineering college in Odisha.',
    images: ['https://images.unsplash.com/photo-1614026480209-cd9934144671?q=80&w=2070&auto=format&fit=crop'],
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
  verification: {
    google: 'YOUR_GOOGLE_SEARCH_CONSOLE_TAG', // Placeholder for actual GSC tag
  },
};

// Advanced JSON-LD Schema for Generative Engine Optimization (GEO) & SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "SportsTeam",
      "name": "VeerRacerss Electric",
      "sport": "Formula Student Electric Racing",
      "memberOf": {
        "@type": "CollegeOrUniversity",
        "name": "Veer Surendra Sai University of Technology (VSSUT)",
        "location": {
          "@type": "Place",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Burla",
            "addressRegion": "Odisha",
            "postalCode": "768018",
            "addressCountry": "IN"
          }
        }
      },
      "description": "VeerRacerss Electric is the official Formula Student team of VSSUT, Burla. Builders of AETHER, the first electric vehicle (EV) made by an engineering college in Odisha.",
      "url": "https://veerracerss-official-web.vercel.app",
      "logo": "https://veerracerss-official-web.vercel.app/VRE%20Logo.png",
      "foundingDate": "2018",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Sponsorship & Technical Inquiry",
        "email": "tech@veerracerss.org",
        "telephone": "+91-9967624731"
      }
    },
    {
      "@type": "Organization",
      "name": "VeerRacerss Electric",
      "alternateName": ["VRE", "VSSUT Formula Student Team"],
      "url": "https://veerracerss-official-web.vercel.app",
      "sameAs": [
        "https://www.linkedin.com/company/veerracerss",
        "https://www.instagram.com/veerracerss_vssut"
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
