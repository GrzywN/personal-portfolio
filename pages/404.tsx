import React from 'react';
import { createClient } from 'contentful';
import { IPageNotFound, LOCALE_CODE } from '../types/generated/contentful';

import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Section from '../components/Section';
import NotFound from '../components/NotFound';
import Footer from '../components/Footer';

type NotFoundPageProps = {
  content: IPageNotFound;
  locale: LOCALE_CODE;
};

function NotFoundPage({ content, locale }: NotFoundPageProps) {
  const { navbar, sectionNotFound, footer } = content.fields;
  const { title } = sectionNotFound.fields;

  return (
    <>
      <Meta title={`Karol Binkowski - ${title}`} locale={locale} />
      <Navbar content={navbar} />
      <Container className="px-8 py-24 lg:pb-24">
        <Section className="grid place-items-center" id="not-found">
          <NotFound content={sectionNotFound} />
        </Section>
      </Container>
      <Footer content={footer} />
    </>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({
    content_type: 'pageNotFound',
    locale,
  });
  const content = entries.items[0] as IPageNotFound;

  return {
    props: {
      content,
      locale,
    },
  };
}

export { getStaticProps };
export default NotFoundPage;
