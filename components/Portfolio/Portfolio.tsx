import React from 'react';
import Card from './Card';

import type {
  PortfolioFields,
  PortfolioItemFields,
} from '../../types/content/Portfolio';

type PortfolioProps = {
  headerContent: PortfolioFields;
  itemsContent: PortfolioItemFields[];
};

function Portfolio({ headerContent, itemsContent }: PortfolioProps) {
  const { title, paragraph } = headerContent;

  return (
    <div
      className="
      flex h-full min-h-[200vh] max-w-padding-container flex-col items-center justify-center gap-16 px-8 text-center"
    >
      <article
        className="
        grid gap-2 font-inter
        md:gap-4
        lg:gap-6"
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
          text-sm leading-relaxed text-gray-300 
          md:text-lg"
        >
          {paragraph}
        </p>
      </article>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {itemsContent.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            paragraph={item.paragraph}
            image={item.image}
            liveSiteUrl={item.liveSiteUrl}
            sourceUrl={item.sourceUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
