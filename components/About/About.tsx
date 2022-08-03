import React from 'react';
import Image from 'next/image';
import Cta from '../Cta';

import type { AboutFields } from '../../types/content/About';

type AboutProps = {
  image: {
    src: string;
    width: number;
    height: number;
  };
  content: AboutFields;
};

function About({ content, image }: AboutProps) {
  const { title, paragraph, cta } = content;
  const paragraphs = paragraph.split('\n').map((e) => e.trim());

  return (
    <div
      className="
      grid h-full max-h-[50.625rem] max-w-full place-items-center text-center
      lg:grid-cols-2 lg:gap-8 lg:text-start"
    >
      <article
        className="
        order-2 grid gap-4 font-inter
        md:gap-6
        lg:gap-8 lg:bg-transparent lg:p-0"
      >
        <h2
          className="
          text-2xl font-extrabold
          md:text-5xl
          lg:text-7xl"
        >
          <span className="text-white">{title}</span>
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
      </article>
      <div
        className="
        max-w-xs self-end
        md:max-w-md 
        lg:max-w-none lg:self-center"
      >
        <Image src={image} alt="" />
      </div>
    </div>
  );
}

export default About;
