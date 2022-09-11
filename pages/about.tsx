import React from 'react';
import { createClient } from 'contentful';
import { IPageAbout, LOCALE_CODE } from '../types/generated/contentful';

import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Section from '../components/Section';
import { Article } from '../components/Article';
import Footer from '../components/Footer';

type AboutPageProps = {
  content: IPageAbout;
  locale: LOCALE_CODE;
};

function AboutPage({ content, locale }: AboutPageProps) {
  const { navbar, title, content: aboutContent, footer } = content.fields;

  return (
    <>
      <Meta title={`Karol Binkowski - ${title}`} locale={locale} />
      <Navbar content={navbar} />
      <Container className="px-8 pt-48 lg:pb-48">
        <Section className="grid place-items-center" id="thank-you">
          <Article title={title} content={aboutContent} />
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
    content_type: 'pageAbout',
    locale,
  });
  const content = entries.items[0] as IPageAbout;

  return {
    props: {
      content,
      locale,
    },
    revalidate: 1200,
  };
}

export { getStaticProps };
export default AboutPage;
