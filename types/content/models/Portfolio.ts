import type { ContentfulImage } from '../ContentfulImage';

export type PortfolioFields = {
  title: string;
  paragraph: string;
  demo: string;
  source: string;
};

export type PortfolioItemField = {
  title: string;
  paragraph: string;
  image: ContentfulImage;
  demoUrl: string;
  sourceUrl: string;
  technologiesUsed: string[];
};

export type PortfolioItemFields = PortfolioItemField[];
