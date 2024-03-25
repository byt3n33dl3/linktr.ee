import '@/styles/styles.css';
import type { AppProps } from 'next/app';

import { Inter, Schibsted_Grotesk } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const schibsted = Schibsted_Grotesk({
  subsets: ['latin'],
  variable: '--font-schibsted-grotesk',
});

const signifier = localFont({
  src: [
    {
      path: '../../public/fonts/Test-Signifier/test-signifier-regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Test-Signifier/test-signifier-regular-italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/Test-Signifier/test-signifier-bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Test-Signifier/test-signifier-bold-italic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-signifier',
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div
      className={`${inter.variable} ${schibsted.variable} ${signifier.variable}`}
    >
      <Component {...pageProps} />
    </div>
  );
}
