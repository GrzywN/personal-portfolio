/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import type { AppProps } from 'next/app';
import Script from 'next/script';

import '../styles/globals.css';

function Website({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Script
        strategy="lazyOnload"
        src="https://www.googletagmanager.com/gtag/js?id=G-W8E2XK1Q7X"
      />
      <Script strategy="lazyOnload" id="gtag">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-W8E2XK1Q7X');
        `}
      </Script>
      <div key={router.route}>
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default Website;
