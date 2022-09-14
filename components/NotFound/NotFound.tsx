import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { ISectionNotFound } from '../../types/generated/contentful';

import imageNotFound from '../../public/illustrations/page_not_found.svg';

type NotFoundProps = {
  content: ISectionNotFound;
};

function NotFound({ content }: NotFoundProps) {
  const { title, paragraph, linkText } = content.fields;

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 4000);
  });

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
            mt-3 text-sm text-white underline
            sm:text-base
            md:text-lg
            lg:text-xl"
          >
            {linkText}
          </a>
        </Link>
      </header>
      <div className="max-w-sm">
        <Image src={imageNotFound} alt="" />
      </div>
    </>
  );
}

export default NotFound;
