import React from 'react';
import Image from 'next/image';
import Cta from '../Cta';

import imageFeelingProud from '../../public/illustrations/feeling_proud.svg';

import type { AboutFields } from '../../types/content/models';

type AboutProps = {
  content: AboutFields;
};

function About({ content }: AboutProps) {
  const { title, paragraph, cta } = content;
  const paragraphs = paragraph.split('\n').map((e) => e.trim());

  return (
    <div
      className="
      grid max-w-padding-container place-items-center px-8 text-center
      md:gap-16
      lg:grid-cols-2 lg:gap-24 lg:text-start"
    >
      <div
        className="
        order-2 grid gap-4
        font-inter
        md:gap-6 lg:gap-8 lg:p-0"
      >
        <h2
          className="
          text-2xl font-extrabold text-white
          sm:text-3xl
          md:text-4xl
          lg:text-5xl"
        >
          {title}
        </h2>
        <p
          className="
          grid max-w-[50ch] gap-4 text-sm leading-relaxed text-gray-400 
          md:text-lg
          lg:text-base"
        >
          {paragraphs.map((span) => (
            <span key={span}>{span}</span>
          ))}
        </p>
        <Cta
          className="
          mx-auto w-fit
          lg:mx-0"
          text={cta}
          destination="/about"
        />
      </div>
      <Image src={imageFeelingProud} alt="" />
    </div>
  );
}

export default About;
