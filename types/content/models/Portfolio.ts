import type { ContentfulImage } from '../ContentfulImage';

export type PortfolioFields = {
  title: string;
  paragraph: string;
};

export type PortfolioItemFields = {
  title: string;
  paragraph: string;
  image: ContentfulImage;
  liveSiteUrl: string;
  sourceUrl: string;
}[];
