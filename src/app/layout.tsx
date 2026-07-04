import type { Metadata } from 'next';
import { Layout } from '../components/Layout';
import './globals.css';

export const metadata: Metadata = {
  title: 'Veerracerss Formula Student Team',
  description: 'Welcome to Veerracerss, the official Formula Student team.',
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
