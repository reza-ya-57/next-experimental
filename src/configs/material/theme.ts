// src/theme.ts

import { createTheme } from '@mui/material/styles';
import { green } from '@mui/material/colors';
import IranSansFont from "../../../public/fonts/IRANSans.woff2";

const theme = createTheme({
  direction: "rtl",
  typography: {
    fontFamily: "iransans",
  },
  palette: {
    primary: {
      main: green.A700,
    },
    secondary: {
      main: '#ff6666',
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'iransans';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: local('iransans'), local('iransans'), url(${IranSansFont}) format('woff2');
        }
      `,
    },
  },
});

export default theme;
