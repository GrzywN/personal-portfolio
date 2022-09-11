import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ISectionThankYou } from '../../types/generated/contentful';

import imageAppreciateIt from '../../public/illustrations/appreciate_it.svg';

type ThankYouProps = {
  content: ISectionThankYou;
};

function ThankYou({ content }: ThankYouProps) {
  const { title, paragraph, linkText } = content.fields;

  return (
    <>
      <header className="text-center">
        <h1
          className="
          text-3xl font-extrabold tracking-tight text-white 
          sm:text-4xl"
        >
          {title}
        </h1>
        <p
          className="
          mt-3 text-sm text-gray-400 
          sm:mt-4 sm:text-base
          md:text-lg
          lg:text-xl"
        >
          {paragraph}
        </p>
        <Link href="/" passHref>
          <a
            className="
            mt-6 text-sm text-white underline 
            sm:text-base
            md:text-lg
            lg:text-xl"
          >
            {linkText}
          </a>
        </Link>
      </header>
      <div className="max-w-[24rem]">
        <Image src={imageAppreciateIt} alt="" />
      </div>
    </>
  );
}

export default ThankYou;
