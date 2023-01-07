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
    <AnimatePresence exitBeforeEnter>
      <motion.div
        key={router.route}
        initial='initialState'
        animate='animateState'
        exit='exitState'
        transition={{
          duration: 0.75,
        }}
        variants={{
          initialState: {
            opacity: 0,
          },
          animateState: {
            opacity: 1,
          },
          exitState: {},
        }}
      >
        <main className={inconsolata.className}>
          <Component {...pageProps} />
          <Analytics />
        </main>
      </motion.div>
    </AnimatePresence>
  );
}
