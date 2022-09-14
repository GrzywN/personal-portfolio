import React from 'react';
import { createClient } from 'contentful';
import { IHome, LOCALE_CODE } from '../types/generated/contentful';

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

type HomeProps = {
  content: IHome;
  locale: LOCALE_CODE;
};

function Home({ content, locale }: HomeProps) {
  const {
    title,
    navbar,
    hero,
    about,
    skills,
    portfolio,
    portfolioItems,
    contact,
    footer,
  } = content.fields;

  return (
    <>
      <Meta title={`Karol Binkowski - ${title}`} locale={locale} />
      <Navbar content={navbar} />
      <Container className="bg-container bg-no-repeat">
        <Section id="hero">
          <Hero content={hero} />
        </Section>
        <Section
          className="
          before:absolute before:inset-x-0 before:-inset-y-16 before:border-y-4 before:border-light-grey before:bg-about before:opacity-75 before:content-['']
          md:before:-inset-y-24
          lg:before:-inset-y-32"
          id="about"
        >
          <About content={about} />
        </Section>
        <Section
          className="before:absolute before:inset-x-0 before:-inset-y-16 before:-z-10 before:bg-skills before:content-['']"
          id="skills"
        >
          <Skills content={skills} />
        </Section>
        <Section id="portfolio" skew skewedBgClassName="bg-sky-blue">
          <Portfolio generalContent={portfolio} itemsContent={portfolioItems} />
        </Section>
        <Section id="contact">
          <Contact content={contact} />
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

  const entries = await client.getEntries({ content_type: 'home', locale });
  const content = entries.items[0] as IHome;

  return {
    props: {
      content,
      locale,
    },
  };
}

export { getStaticProps };
export default Home;
