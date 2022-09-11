import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ISectionNotFound } from '../../types/generated/contentful';

import imageNotFound from '../../public/illustrations/page_not_found.svg';

type NotFoundProps = {
  content: ISectionNotFound;
};

function NotFound({ content }: NotFoundProps) {
  const { title, linkText } = content.fields;

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
        <Image src={imageNotFound} alt="" />
      </div>
    </>
  );
}
export default NotFound;
