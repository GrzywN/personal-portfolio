import type { FooterFields } from './Footer';

export type SectionThankYouFields = {
  title: string;
  paragraph: string;
  linkText: string;
};

export type ThankYouFields = {
  sectionThankYou: { fields: SectionThankYouFields };
  footer: { fields: FooterFields };
};

export type ThankYouContent = {
  sectionThankYou: SectionThankYouFields;
  footer: FooterFields;
};
