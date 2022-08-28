import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';

import Hero from '../components/Hero';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

import welcoming from '../public/illustrations/welcoming.svg';
import hiking from '../public/illustrations/hiking.svg';

import type { NavbarFields } from '../types/content/Navbar';
import type { HeroFields } from '../types/content/Hero';
import type { AboutFields } from '../types/content/About';
import type {
  PortfolioFields,
  PortfolioItemFields,
} from '../types/content/Portfolio';
import type { ContactFields } from '../types/content/Contact';

enum ContentType {
  NAVBAR,
  HERO,
  ABOUT,
  PORTFOLIO,
  PORTFOLIO_ITEMS,
  CONTACT,
}

function Home({ content }: any) {
  return (
    <>
      <Head>
        <title>Karol Binkowski - Home</title>
        <meta name="description" content="description" />
      </Head>
      <Navbar content={content[ContentType.NAVBAR]} />
      <Container>
        <Section className="bg-hero lg:bg-hero-lg">
          <Hero
            content={content[ContentType.HERO]}
            image={welcoming}
            id="hero"
          />
        </Section>
        <Section className="bg-about lg:bg-about-lg">
          <About
            content={content[ContentType.ABOUT]}
            image={hiking}
            id="about"
          />
        </Section>
        <Section className="md:bg-portfolio">
          <Portfolio
            headerContent={content[ContentType.PORTFOLIO]}
            itemsContent={content[ContentType.PORTFOLIO_ITEMS]}
            id="portfolio"
          />
        </Section>
        <Section>
          <Contact content={content[ContentType.CONTACT]} id="contact" />
        </Section>
      </Container>
    </>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  });

  const [navbar, hero, about, portfolio, portfolioItems, contact] =
    await Promise.all([
      client.getEntries({
        content_type: 'navbar',
        locale,
      }),
      client.getEntries({
        content_type: 'hero',
        locale,
      }),
      client.getEntries({
        content_type: 'about',
        locale,
      }),
      client.getEntries({
        content_type: 'portfolio',
        locale,
      }),
      client.getEntries({
        content_type: 'portfolioItem',
        locale,
      }),
      client.getEntries({
        content_type: 'contact',
        locale,
      }),
    ]);

  const content = [];
  content[ContentType.NAVBAR] = navbar.items[0].fields as NavbarFields;
  content[ContentType.HERO] = hero.items[0].fields as HeroFields;
  content[ContentType.ABOUT] = about.items[0].fields as AboutFields;
  content[ContentType.PORTFOLIO] = portfolio.items[0].fields as PortfolioFields;
  content[ContentType.PORTFOLIO_ITEMS] = portfolioItems.items.map(
    (e) => e.fields
  ) as PortfolioItemFields[];
  content[ContentType.CONTACT] = contact.items[0].fields as ContactFields;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };
export default Home;
