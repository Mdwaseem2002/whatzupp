import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WhatZupp — Enterprise WhatsApp Engagement Platform',
  description:
    'Turn WhatsApp into your most powerful customer engagement channel. Run campaigns, send transactional messages, and engage customers in real-time — directly from Salesforce Marketing Cloud.',
  keywords: [
    'WhatsApp marketing',
    'SFMC integration',
    'Salesforce Marketing Cloud',
    'enterprise messaging',
    'WhatsApp campaigns',
    'WhatZupp',
  ],
  openGraph: {
    title: 'WhatZupp — Enterprise WhatsApp Engagement Platform',
    description:
      'Native Salesforce Marketing Cloud integration. Run campaigns, send transactional messages and engage customers in real-time.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'WhatZupp — Enterprise WhatsApp Engagement',
    description: 'Turn WhatsApp into your most powerful customer engagement channel.',
  },
  robots: { index: true, follow: true },
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <ThemeProvider attribute="data-theme" defaultTheme="dark">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
