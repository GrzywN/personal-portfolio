import React from 'react';
import { createClient } from 'contentful';

import Meta from '../components/Meta';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import Section from '../components/Section';
import ThankYou from '../components/ThankYou';
import Footer from '../components/Footer';

import { IPageThankYou } from '../types/generated/contentful';

type ThankYouProps = {
  content: IPageThankYou;
};

function ThankYouPage({ content }: ThankYouProps) {
  const { navbar, sectionThankYou, footer } = content.fields;
  const { title } = sectionThankYou.fields;

  return (
    <>
      <Meta title={`Karol Binkowski - ${title}`} />
      <Navbar content={navbar} />
      <Container>
        <Section className="grid place-items-center" id="thank-you">
          <ThankYou content={sectionThankYou} />
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
    content_type: 'pageThankYou',
    locale,
  });
  const content = entries.items[0] as IPageThankYou;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };
export default ThankYouPage;
