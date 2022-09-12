import React from 'react';
import crypto from 'crypto';
import { Html, Head, Main, NextScript, DocumentProps } from 'next/document';

const cspHashOf = (text: string) => {
  const hash = crypto.createHash('sha256');
  hash.update(text);
  return `'sha256-${hash.digest('base64')}'`;
};

export default function Document(props: DocumentProps) {
  let csp = `default-src 'self'; script-src 'self' ${cspHashOf(
    NextScript.getInlineScriptSource(props)
  )}`;

  if (process.env.NODE_ENV !== 'production') {
    csp = `style-src 'self' 'unsafe-inline'; font-src 'self' data:; default-src 'self'; script-src 'unsafe-eval' 'self' ${cspHashOf(
      NextScript.getInlineScriptSource(props)
    )}`;
  }

  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Security-Policy" content={csp} />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800&family=M+PLUS+Rounded+1c:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
