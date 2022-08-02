import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Section from '../components/Section';
import Navbar from '../components/Navbar';
import Container from '../components/Container';
import About from '../components/About';

import welcoming from '../public/illustrations/welcoming.svg';
import hiking from '../public/illustrations/hiking.svg';

function Home() {
  return (
    <>
      <Head>
        <title>Karol Binkowski - Home</title>
        <meta name="description" content="description" />
      </Head>
      <Navbar />
      <Container>
        <Section className="bg-hero lg:bg-hero-lg">
          <Hero image={welcoming} />
        </Section>
        <Section className="bg-about lg:bg-about-lg">
          <About image={hiking} />
        </Section>
      </Container>
    </>
  );
}

export default Home;
