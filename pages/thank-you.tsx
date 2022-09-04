import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import Meta from '../components/Meta';
import Container from '../components/Container';
import Section from '../components/Section';

import imageAppreciateIt from '../public/illustrations/appreciate_it.svg';

function ThankYou() {
  return (
    <>
      <Meta />
      <Container>
        <Section className="grid place-items-center" id="thank-you">
          <header className="text-center">
            <h1
              className="
              text-3xl font-extrabold tracking-tight text-white 
              sm:text-4xl"
            >
              Thank you!
            </h1>
            <p
              className="
              mt-3 text-sm text-gray-400 
              sm:mt-4 sm:text-base
              md:text-lg
              lg:text-xl"
            >
              Your message has been successfully sent. I&apos;ll make sure to
              reply to this message to your email.
            </p>
            <Link href="/" passHref>
              <a
                className="
                mt-6 text-sm text-white underline 
                sm:text-base
                md:text-lg
                lg:text-xl"
              >
                Click here to go back to the home page.
              </a>
            </Link>
          </header>
          <div className="w-96">
            <Image src={imageAppreciateIt} alt="" />
          </div>
        </Section>
      </Container>
    </>
  );
}

export default ThankYou;
