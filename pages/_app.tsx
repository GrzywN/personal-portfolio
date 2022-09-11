/* eslint-disable react/jsx-props-no-spreading */

import React from 'react';
import type { AppProps } from 'next/app';
import { motion } from 'framer-motion';

import '../styles/globals.css';

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <motion.div
      key={router.route}
      initial="pageInitial"
      animate="pageAnimate"
      variants={{
        pageInitial: {
          opacity: 0,
        },
        pageAnimate: {
          opacity: 1,
        },
      }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
