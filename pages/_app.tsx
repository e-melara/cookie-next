import { useEffect, useState } from 'react';

import type { AppProps } from 'next/app';
import { CssBaseline, Theme, ThemeProvider } from '@mui/material';
import Cookie from 'js-cookie';

import '../styles/globals.css';
import { custom, dark, ligth } from 'themes';

function MyApp({ Component, pageProps }: AppProps) {
  const [currentTheme, setCurrentTheme] = useState<Theme>(ligth);

  useEffect(() => {
    const cookie = Cookie.get('theme') || 'light';
    const selected =
      cookie === 'light' ? ligth : cookie === 'dark' ? dark : custom;
    setCurrentTheme(selected);
  }, []);

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
