import '../../styles/globals.css';
import React from 'react';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import theme from '../configs/material/theme';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/index';

// material rtl
import rtlPlugin from 'stylis-plugin-rtl';
import { CacheProvider } from '@emotion/react';
import createCache from '@emotion/cache';

// Create rtl cache
const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [rtlPlugin],
});

function MyApp(props: AppProps) {
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
      <Provider store={store}>
        <CacheProvider value={cacheRtl} >
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CacheProvider>
      </Provider>
    </>
  );
}

//withRedux wrapper that passes the store to the App Component
export default MyApp;
