import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import theme from '../theme/theme';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
// material rtl

import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';
import { wrapper } from '../store/store';
import Head from 'next/head';




function MyApp(props: AppProps) {
  // Create rtl cache
  const cacheRtl = createCache({
    key: 'muirtl',
    stylisPlugins: [prefixer, rtlPlugin],
  });
  const { Component, pageProps } = props;
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement!.removeChild(jssStyles);
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
          <CacheProvider value={cacheRtl} >
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </CacheProvider>
      </ThemeProvider>
    </>
  );
}

//withRedux wrapper that passes the store to the App Component
<<<<<<< HEAD
export default MyApp;



=======
export default wrapper.withRedux(MyApp);
>>>>>>> 4b594d17aa606d105b4bb2c6c377876f1ea118d6
