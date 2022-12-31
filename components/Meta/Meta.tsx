import React from 'react';
import Head from 'next/head';
import { LOCALE_CODE } from '../../types/generated/contentful';

type MetaProps = {
  title: string;
  locale: LOCALE_CODE;
};

function Meta({ title, locale }: MetaProps) {
  return (
    <Head>
      {locale === 'en-US' && (
        <>
          <meta
            name="description"
            content="I am a web developer with a genuine passion for developing aesthetically pleasing and user-friendly applications. I am currently seeking for nice people to work with and from whom I can learn a lot."
          />
          <meta name="language" content="English" />
        </>
      )}
      {locale === 'pl-PL' && (
        <>
          <meta
            name="description"
            content="Jestem web developerem z prawdziwą pasją do tworzenia estetycznych i przyjaznych dla użytkownika aplikacji. Obecnie szukam miłych ludzi, z którymi mógłbym współpracować i od których mógłbym się wiele nauczyć."
          />
          <meta name="language" content="Polish" />
        </>
      )}
      <meta
        name="keywords"
        content="karol, binkowski, frontend, front, end, web, developer, dev, applications, apps, portfolio, projects, IT, programista, aplikacje, internetowe, projekty"
      />
      <meta name="title" content="Karol Binkowski | Front-end developer" />
      <meta name="author" content="Karol Binkowski" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content="index, follow" />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />

      <title>{title}</title>
    </Head>
  );
}

export default Meta;
