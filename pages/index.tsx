import React from 'react';
import { createClient } from 'contentful';

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

import type { HomeFields, HomeContent } from '../types/content/models';

type HomeProps = {
  content: HomeContent;
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
        <Section id="hero">
          <Hero content={hero} />
        </Section>
        <Section id="about" className="bg-about">
          <About content={about} />
        </Section>
        <Section id="skills">
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
  const homeFields = entries.items[0].fields as HomeFields;

  const navbar = homeFields.navbar.fields;
  const hero = homeFields.hero.fields;
  const about = homeFields.about.fields;
  const skills = homeFields.skills.fields;
  const portfolio = homeFields.portfolio.fields;
  const contact = homeFields.contact.fields;
  const footer = homeFields.footer.fields;

  const portfolioItems = homeFields.portfolioItems.map((item) => item.fields);

  return {
    props: {
      content: {
        navbar,
        hero,
        about,
        skills,
        portfolio,
        portfolioItems,
        contact,
        footer,
      },
    },
  };
}

export { getStaticProps };
export default Home;
