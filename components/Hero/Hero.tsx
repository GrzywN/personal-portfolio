import React from 'react';
import Image from 'next/image';
import Cta from '../Cta';

import imageWelcoming from '../../public/illustrations/welcoming.svg';

import type { HeroFields } from '../../types/content/models';

type HeroProps = {
  id: string;
  content: HeroFields;
};

function Hero({ id, content }: HeroProps) {
  const { title, paragraph, cta } = content;
  const splitTitles = title.split('.', 2).map((e) => `${e.trim()}.`);

  return (
    <section
      className="
      mt-4 grid h-full max-w-padding-container place-items-center px-8 text-center
      md:gap-16
      lg:grid-cols-2 lg:gap-4 lg:text-start"
      id={id}
      title={splitTitles[0]}
    >
      <div
        className="
        order-2 grid gap-4 font-inter
        md:gap-6
        lg:order-none lg:gap-8"
      >
        <h2
          className="
          text-2xl font-extrabold
          md:text-5xl"
        >
          <span className="text-white">{splitTitles[0]}</span>
          <br />
          <span className="text-sky-blue">{splitTitles[1]}</span>
        </h2>
        <p
          className="
          max-w-[50ch] text-sm leading-relaxed text-gray-300 
          md:text-lg"
        >
          {paragraph}
        </p>
        <Cta
          className="
          mx-auto w-fit
          lg:mx-0"
          destination="#contact"
          text={cta}
        />
      </div>
      <div
        className="
        max-w-xs self-end 
        rounded-blob-hero bg-light-grey p-4
        md:max-w-md lg:max-w-none"
      >
        <Image src={imageWelcoming} alt="" />
      </div>
    </section>
  );
}

export default Hero;
