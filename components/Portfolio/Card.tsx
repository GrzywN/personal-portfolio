import React from 'react';
import Image from 'next/image';

import { ChipList } from '../Chips';
import { DemoButton, GitHubButton } from '../Buttons';

import type {
  PortfolioFields,
  PortfolioItemField,
} from '../../types/content/models';

type CardProps = {
  generalContent: PortfolioFields;
  itemContent: PortfolioItemField;
  reverseOrder: boolean;
};

function Card({ generalContent, itemContent, reverseOrder }: CardProps) {
  const { title, paragraph, image, liveSiteUrl, sourceUrl, technologiesUsed } =
    itemContent;
  const { demo, source } = generalContent;

  const imageSrc = `https:${image.fields.file.url}`;
  const imageWidth = image.fields.file.details.image.width;
  const imageHeight = image.fields.file.details.image.height;

  return (
    <section
      className={`
      ${reverseOrder ? 'lg:flex-row-reverse' : 'lg:flex-row'}
      grid max-w-md gap-8 rounded-2xl bg-white p-4 shadow-xl
      md:p-8
      lg:flex lg:max-w-full lg:flex-row lg:gap-16 lg:p-12`}
      title={title}
    >
      <Image
        className="rounded"
        src={imageSrc}
        width={imageWidth}
        height={imageHeight}
      />
      <div
        className="
        flex w-full flex-col gap-4 text-start
        md:gap-6 lg:gap-8"
      >
        <h3
          className="
          text-3xl font-extrabold tracking-tight text-dark-grey
          sm:text-4xl
          md:text-5xl"
        >
          {title}
        </h3>
        <ChipList items={technologiesUsed} />
        <p
          className="
          text-sm font-normal text-light-grey
          sm:text-base
          lg:text-lg"
        >
          {paragraph}
        </p>
        <ul className="mt-auto flex gap-4 pt-8">
          <li>
            <DemoButton href={liveSiteUrl} text={demo} />
          </li>
          <li>
            <GitHubButton href={sourceUrl} text={source} />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Card;
