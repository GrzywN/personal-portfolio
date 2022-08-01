import React from 'react'
import Head from 'next/head'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Navbar from '../components/Navbar'
import Container from '../components/Container'

import welcoming from '../public/illustrations/welcoming.svg'

function Home() {
  return (
    <>
      <Head>
        <title>Karol Binkowski - Home</title>
        <meta name="description" content="description" />
      </Head>
      <Navbar />
      <Container>
        <Section>
          <Hero image={welcoming} />
        </Section>
      </Container>
    </>
  )
}

export default Home
