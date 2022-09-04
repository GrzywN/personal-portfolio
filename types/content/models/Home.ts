import type { NavbarFields } from './Navbar';
import type { HeroFields } from './Hero';
import type { AboutFields } from './About';
import type { SkillsFields } from './Skills';
import type {
  PortfolioFields,
  PortfolioItemField,
  PortfolioItemFields,
} from './Portfolio';
import type { ContactFields } from './Contact';
import type { FooterFields } from './Footer';

export type HomeFields = {
  navbar: { fields: NavbarFields };
  hero: { fields: HeroFields };
  about: { fields: AboutFields };
  skills: { fields: SkillsFields };
  portfolio: { fields: PortfolioFields };
  contact: { fields: ContactFields };
  footer: { fields: FooterFields };

  portfolioItems: { fields: PortfolioItemField }[];
};

export type HomeContent = {
  navbar: NavbarFields;
  hero: HeroFields;
  about: AboutFields;
  skills: SkillsFields;
  portfolio: PortfolioFields;
  contact: ContactFields;
  footer: FooterFields;

  portfolioItems: PortfolioItemFields;
};
