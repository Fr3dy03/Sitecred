import './globals.css';
import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '@/components/site-shell';

export const metadata: Metadata = {
  title: 'SiteCred | Facility Assurance Passport',
  description: 'Facility assurance and verification for distributed compute infrastructure.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-site-background text-site-text">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
