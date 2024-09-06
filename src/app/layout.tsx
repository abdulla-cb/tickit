import type { Metadata } from 'next';
import { NEXT_PUBLIC_URL } from '../config';

import './global.css';
import '@coinbase/onchainkit/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import dynamic from 'next/dynamic';

import Footer from 'src/components/Footer';
import Header from 'src/components/Header';

const OnchainProviders = dynamic(
  () => import('src/components/OnchainProviders'),
  {
    ssr: false,
  },
);

export const viewport = {
  width: 'device-width',
  initialScale: 1.0,
};

export const metadata: Metadata = {
  title: 'TickIt',
  description: 'Buy tickets with your friends',
  openGraph: {
    title: 'TickIt',
    description: 'Buy tickets with your friends',
    images: [`${NEXT_PUBLIC_URL}/vibes/vibes-19.png`],
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center">
        <OnchainProviders>
          <div className="flex h-full w-96 max-w-full flex-col px-1 md:w-[720px] m-4">
            <Header />
            <section className="flex w-full flex-col items-center justify-center gap-4 rounded-xl px-2 py-4 md:grow">
              {children}
            </section>
            <Footer />
          </div>
        </OnchainProviders>
      </body>
    </html>
  );
}
