import React from 'react';
import { createClient, EntryCollection } from 'contentful';

import Meta from '../components/Meta';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import About from '../components/About';
import Skills from '../components/Skills';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

import type * as CmsModels from '../types/content/models';

type ContentType = {
  navbar: CmsModels.NavbarFields;
  hero: CmsModels.HeroFields;
  about: CmsModels.AboutFields;
  skills: CmsModels.SkillsFields;
  portfolio: CmsModels.PortfolioFields;
  contact: CmsModels.ContactFields;
  footer: CmsModels.FooterFields;

  portfolioItems: CmsModels.PortfolioItemFields;
};

type HomeProps = {
  content: ContentType;
};

function Home({ content }: HomeProps) {
  const {
    navbar,
    hero,
    about,
    skills,
    portfolio,
    portfolioItems,
    contact,
    footer,
  } = content;

  return (
    <>
      <Meta />
      <Navbar content={navbar} />
      <Container className="lg:bg-container lg:bg-no-repeat">
        <Section className="bg-hero">
          <Hero content={hero} id="hero" />
        </Section>
        <Section className="bg-about">
          <About content={about} id="about" />
        </Section>
        <Section className="">
          <Skills content={skills} />
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
      <Footer content={footer} />
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
    'skills',
    'portfolio',
    'portfolioItem',
    'contact',
    'footer',
  ];

  const entries = await Promise.all(
    contentModels.map((model) =>
      client.getEntries({
        content_type: model,
        locale,
      })
    )
  );

  const [
    navbar,
    hero,
    about,
    skills,
    portfolio,
    portfolioItems,
    contact,
    footer,
  ] = entries;

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
    skills: getSingleContentField(skills) as CmsModels.SkillsFields,
    portfolio: getSingleContentField(portfolio) as CmsModels.PortfolioFields,
    contact: getSingleContentField(contact) as CmsModels.ContactFields,
    footer: getSingleContentField(footer) as CmsModels.FooterFields,

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
