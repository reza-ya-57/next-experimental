import React from 'react';
import { ThemeProvider } from '@mui/styles';
import { CssBaseline } from '@mui/material';
import theme from '../configs/material/theme';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '../store/index'

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
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}

//withRedux wrapper that passes the store to the App Component
export default MyApp;
