import React from 'react';
import Head from 'next/head';
import { createClient } from 'contentful';

import Hero from '../components/Hero';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import About from '../components/About';
import Projects from '../components/Projects';

import welcoming from '../public/illustrations/welcoming.svg';
import hiking from '../public/illustrations/hiking.svg';

import type { NavbarFields } from '../types/content/Navbar';
import type { HeroFields } from '../types/content/Hero';
import type { AboutFields } from '../types/content/About';

enum ContentType {
  NAVBAR,
  HERO,
  ABOUT,
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
          <Hero content={content[ContentType.HERO]} image={welcoming} />
        </Section>
        <Section className="bg-about lg:bg-about-lg">
          <About content={content[ContentType.ABOUT]} image={hiking} />
        </Section>
        <Section className="bg-portfolio pt-[30rem]">
          <Projects />
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

  const [navbar, hero, about] = await Promise.all([
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
  ]);

  const content = [];
  content[ContentType.NAVBAR] = navbar.items[0].fields as NavbarFields;
  content[ContentType.HERO] = hero.items[0].fields as HeroFields;
  content[ContentType.ABOUT] = about.items[0].fields as AboutFields;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };
export default Home;
