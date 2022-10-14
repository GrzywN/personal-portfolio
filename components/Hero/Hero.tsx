import React from 'react';
import Image from 'next/image';
import { IHero } from '../../types/generated/contentful';

import Cta, { CtaVariants } from '../Cta';

import imageWelcoming from '../../public/illustrations/welcoming.svg';

type HeroProps = {
  content: IHero;
};

function Hero({ content }: HeroProps) {
  const { title, paragraph, ctaWork, ctaAbout } = content.fields;
  const splitTitles = title.split('.', 2).map((e) => `${e.trim()}.`);

  return (
    <section
      className="
      mt-4 grid h-full max-w-padding-container place-items-center px-8 text-center
      md:gap-16
      lg:grid-cols-2 lg:gap-4 lg:text-start"
      title={splitTitles[0]}
    >
      <div
        className="
        order-2 grid gap-4
        md:gap-6
        lg:order-none lg:gap-8"
      >
        <h2
          className="
          text-2xl font-extrabold
          sm:text-3xl
          md:text-5xl"
        >
          <span className="text-white">{splitTitles[0]}</span>
          <br />
          <span className="bg-gradient-to-r from-sky-500 to-sky-blue bg-clip-text text-transparent">
            {splitTitles[1]}
          </span>
        </h2>
        <p
          className="
          max-w-[50ch] text-sm leading-relaxed text-gray-400
          md:text-lg"
        >
          {paragraph}
        </p>
        <div
          className="
          mx-auto flex items-center gap-4
          lg:mx-0"
        >
          <Cta className="w-fit" destination="#portfolio" text={ctaWork} />
          <Cta
            className="w-fit"
            destination="#about"
            text={ctaAbout}
            variant={CtaVariants.outline}
          />
        </div>
      </div>
      <div
        className="
        max-w-xs self-end p-4
        md:max-w-md
        lg:max-w-none"
      >
        <Image src={imageWelcoming} alt="" />
      </div>
    </section>
  );
}

export default Hero;
