import React from 'react';
import Image from 'next/image';
import Cta from '../Cta';

import imageHiking from '../../public/illustrations/hiking.svg';

import type { AboutFields } from '../../types/content/models';

type AboutProps = {
  id: string;
  content: AboutFields;
};

function About({ id, content }: AboutProps) {
  const { title, paragraph, cta } = content;
  const paragraphs = paragraph.split('\n').map((e) => e.trim());

  return (
    <div
      className="
      grid max-w-padding-container items-center px-8 text-center
      md:gap-16
      lg:grid-cols-2 lg:gap-4 lg:text-start"
      id={id}
    >
      <div
        className="
        order-2 grid gap-4 font-inter
        md:gap-6
        lg:gap-8 lg:bg-transparent lg:p-0"
      >
        <h2
          className="
          text-2xl font-extrabold text-white
          md:text-5xl
          lg:text-7xl"
        >
          {title}
        </h2>
        <p
          className="
          grid max-w-[50ch] gap-4 text-sm leading-relaxed text-gray-300 
          md:text-lg"
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
      <div
        className="
        max-w-xs self-end
        rounded-blob-hero bg-light-grey
        p-4 md:max-w-md lg:max-w-none lg:self-center"
      >
        <Image src={imageHiking} alt="" />
      </div>
    </div>
  );
}

export default About;
