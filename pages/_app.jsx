import '@styles/globals.css'
import {
  Palanquin as Sans,
  Unna as Serif,
  Jaldi as Nav,
  Palanquin_Dark as Display
} from '@next/font/google';

const sans = Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['100', '200', '300', '400', '500', '600', '700']
});

const serif = Serif({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['400', '700'],
});

const nav = Nav({
  subsets: ['latin'],
  variable: '--font-nav',
  weight: ['400', '700']
});

const display = Display({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});


export default function App({ Component, pageProps }) {
  return (
    <main className={`${sans.variable} ${serif.variable} ${nav.variable} ${display.variable}`}>
      <Component {...pageProps} />
    </main>
  )
}