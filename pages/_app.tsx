import '../styles/globals.scss';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const a = 'sujay';
  if (a === 'sujay') console.log('h');
  return <Component {...pageProps} />;
}

export default MyApp;
