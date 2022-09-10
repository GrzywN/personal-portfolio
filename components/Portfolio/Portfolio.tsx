import React from 'react';
import Card from './Card';

import { IPortfolio, IPortfolioItem } from '../../types/generated/contentful';

type PortfolioProps = {
  generalContent: IPortfolio;
  itemsContent: IPortfolioItem[];
};

function Portfolio({ generalContent, itemsContent }: PortfolioProps) {
  const { title, paragraph } = generalContent.fields;

  return (
    <div
      className="
      flex h-full flex-col items-center gap-16 px-8 py-32 text-center"
    >
      <header
        className="
        grid gap-2
        md:gap-4
        lg:gap-6"
      >
        <h2
          className="
          text-3xl font-extrabold text-white
          sm:text-4xl
          md:text-5xl
          lg:text-6xl"
        >
          {title}
        </h2>
        <p
          className="
          text-gray-200
          sm:text-lg
          md:text-xl"
        >
          {paragraph}
        </p>
      </header>
      <div className="grid gap-20">
        {itemsContent.map(
          (item, index) =>
            item.fields && (
              <Card
                key={item.fields.title}
                generalContent={generalContent}
                itemContent={item}
                reverseOrder={index % 2 === 1}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Portfolio;
