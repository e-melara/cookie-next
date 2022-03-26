import { FC } from 'react';
import Head from 'next/head';

import { NavBar } from 'components/ui';

interface Props {
  title?: string;
}

export const Layout: FC<Props> = ({ children, title }) => {
  return (
    <>
      <Head>
        <title>{title || 'CookieMaster'}</title>
      </Head>
      <nav>
        <NavBar />
      </nav>
      <main style={{ padding: '20px 50px' }}>{children}</main>
    </>
  );
};
