import React from 'react';
import Head from 'next/head';
import { createClient, EntryCollection } from 'contentful';

import Hero from '../components/Hero';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

import type * as CmsModels from '../types/content/models';

type ContentType = {
  navbar: CmsModels.NavbarFields;
  hero: CmsModels.HeroFields;
  about: CmsModels.AboutFields;
  portfolio: CmsModels.PortfolioFields;
  contact: CmsModels.ContactFields;

  portfolioItems: CmsModels.PortfolioItemFields;
};

type HomeProps = {
  content: ContentType;
};

function Home({ content }: HomeProps) {
  const { navbar, hero, about, portfolio, portfolioItems, contact } = content;

  return (
    <>
      <Head>
        <title>Karol Binkowski - Home</title>
      </Head>
      <Navbar content={navbar} />
      <Container>
        <Section className="bg-hero">
          <Hero content={hero} id="hero" />
        </Section>
        <Section>
          <About content={about} id="about" />
        </Section>
        <Section skew skewedBgClass="bg-sky-blue">
          <Portfolio
            generalContent={portfolio}
            itemsContent={portfolioItems}
            id="portfolio"
          />
        </Section>
        <Section>
          <Contact content={contact} id="contact" />
        </Section>
      </Container>
    </>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const contentModels = [
    'navbar',
    'hero',
    'about',
    'portfolio',
    'portfolioItem',
    'contact',
  ];

  const entries = await Promise.all(
    contentModels.map((model) =>
      client.getEntries({
        content_type: model,
        locale,
      })
    )
  );

  const [navbar, hero, about, portfolio, portfolioItems, contact] = entries;

  const getSingleContentField = (entry: EntryCollection<unknown>) => {
    return entry.items[0].fields;
  };

  const getMultipleContentFields = (entry: EntryCollection<unknown>) => {
    return entry.items.map((item) => item.fields);
  };

  const content = {
    navbar: getSingleContentField(navbar) as CmsModels.NavbarFields,
    hero: getSingleContentField(hero) as CmsModels.HeroFields,
    about: getSingleContentField(about) as CmsModels.AboutFields,
    portfolio: getSingleContentField(portfolio) as CmsModels.PortfolioFields,
    contact: getSingleContentField(contact) as CmsModels.ContactFields,

    portfolioItems: getMultipleContentFields(
      portfolioItems
    ) as CmsModels.PortfolioItemFields,
  };

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };
export default Home;
