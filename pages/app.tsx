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
      path: '../../public/fonts/academy-cyrillic/academy-cyrillic-font.zip',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/academy-cyrillic/academy-cyrillic-font-italic.zip',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/adonis-cyrillic-font/adonis-cyrillic-font-bold.zip',
      weight: '650',
      style: 'bold',
    },
    {
      path: '../../public/fonts/adonis-cyrillic-font/aldine-cyrillic-font.zip',
      weight: '700',
      style: 'normal',
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
