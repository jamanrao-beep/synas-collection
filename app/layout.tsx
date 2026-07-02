import type { Metadata } from 'next';
import { Marcellus, Cormorant_Garamond, Raleway, Playfair_Display, Cinzel } from 'next/font/google';
import SiteHeader from '@/components/SiteHeader';
import './globals.css';

const marcellus = Marcellus({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-marcellus',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-raleway',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
});

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-cinzel',
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
      <body className={`${marcellus.variable} ${cormorant.variable} ${raleway.variable} ${playfair.variable} ${cinzel.variable}`}>
        <SiteHeader />
        {children}
      </body>
    </html>
  );
}