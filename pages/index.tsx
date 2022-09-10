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

import { IHomeFields } from '../types/generated/contentful';

type HomeProps = {
  content: IHomeFields;
};

function Home({ content }: HomeProps) {
  return (
    <>
      <Meta />
      <Navbar content={content.navbar} />
      <Container className="lg:bg-container lg:bg-no-repeat">
        <Section id="hero">
          <Hero content={content.hero} />
        </Section>
        <Section id="about" className="bg-about">
          <About content={content.about} />
        </Section>
        <Section id="skills">
          <Skills content={content.skills} />
        </Section>
        <Section id="portfolio" skew skewedBgClassName="bg-sky-blue">
          <Portfolio
            generalContent={content.portfolio}
            itemsContent={content.portfolioItems}
          />
        </Section>
        <Section id="contact">
          <Contact content={content.contact} />
        </Section>
      </Container>
      <Footer content={content.footer} />
    </>
  );
}

async function getStaticProps({ locale }: { locale: string }) {
  const space = process.env.CONTENTFUL_SPACE_ID!;
  const accessToken = process.env.CONTENTFUL_ACCESS_TOKEN!;

  const client = createClient({ space, accessToken });

  const entries = await client.getEntries({ content_type: 'home', locale });
  const content = entries.items[0].fields as IHomeFields;

  return {
    props: {
      content,
    },
  };
}

export { getStaticProps };
export default Home;
