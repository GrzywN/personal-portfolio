import React from 'react';
import Card from './Card';

import type {
  PortfolioFields,
  PortfolioItemFields,
} from '../../types/content/models';

type PortfolioProps = {
  id: string;
  generalContent: PortfolioFields;
  itemsContent: PortfolioItemFields;
};

function Portfolio({ id, generalContent, itemsContent }: PortfolioProps) {
  const { title, paragraph } = generalContent;

  return (
    <div
      className="
      flex h-full flex-col items-center gap-16 py-32 px-8 text-center
      md:py-48
      lg:py-64"
      id={id}
    >
      <header
        className="
        grid gap-2 font-inter
        md:gap-4
        lg:gap-6"
      >
        <h2
          className="
          text-4xl font-extrabold text-white
          sm:text-5xl
          md:text-6xl
          lg:text-7xl"
        >
          {title}
        </h2>
        <p
          className="
          text-sm text-gray-200
          sm:text-base
          md:text-lg"
        >
          {paragraph}
        </p>
      </header>
      <div className="grid gap-20">
        {itemsContent.map((item, index) => (
          <Card
            key={item.title}
            itemContent={item}
            generalContent={generalContent}
            reverseOrder={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
