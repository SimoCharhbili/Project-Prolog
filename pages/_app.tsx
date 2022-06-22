import type { AppProps } from 'next/app';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import '../styles/globals.css';
import { NextPageWithLayout } from './page';

interface AppPropsWithLayout extends AppProps {
  Component: NextPageWithLayout;
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <>
      <PrimaryLayout>
        <Component {...pageProps} />
      </PrimaryLayout>
    </>
  );
}

export default MyApp;
