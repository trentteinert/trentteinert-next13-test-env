import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Inconsolata } from '@next/font/google';
import { Analytics } from '@vercel/analytics/react';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

const inconsolata = Inconsolata({
  subsets: ['latin'],
  weight: ['400'],
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <main className={inconsolata.className}>
      <Component {...pageProps} />
      <Analytics />
    </main>
  );
}
