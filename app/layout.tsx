import type { Metadata } from 'next';
import { Marcellus, Cormorant_Garamond } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-cormorant',
});

export const metadata: Metadata = {
  title: "Syna 'S CoLection — Handcrafted Heritage",
  description:
    "Heritage reimagined and handcrafted with soul. Syna 'S CoLection — antique silver, 24K gold foil artistry, and rare fusions of old-world elements with contemporary design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${marcellus.variable} ${cormorant.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}