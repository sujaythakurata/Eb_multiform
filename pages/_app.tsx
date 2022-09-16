import { Provider } from 'react-redux';
import { AppPropsWithLayout } from '../types/nextPageLayout';
import Layout from '../components/layout';
import '../styles/globals.scss';
import { store } from '../states/store';

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const pageLayout = (page: JSX.Element) => <Layout>{page}</Layout>;
  const getLayout = Component.getLayout ?? pageLayout;
  return getLayout(
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>,
  );
}

export default MyApp;
