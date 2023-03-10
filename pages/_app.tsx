import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inconsolata } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={inconsolata.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
