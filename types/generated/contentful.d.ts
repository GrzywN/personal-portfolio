// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful';
import { Document } from '@contentful/rich-text-types';

export interface IAboutFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** cta */
  cta: string;
}

export interface IAbout extends Entry<IAboutFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'about';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IBlogPostsFields {
  /** Title */
  title: string;

  /** Slug */
  slug: string;

  /** Content */
  content: Document;
}

export interface IBlogPosts extends Entry<IBlogPostsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'blogPosts';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IContactFields {
  /** title */
  title: string;

  /** fullName */
  fullName: string;

  /** fullNamePlaceholder */
  fullNamePlaceholder: string;

  /** email */
  email: string;

  /** emailPlaceholder */
  emailPlaceholder: string;

  /** message */
  message: string;

  /** messagePlaceholder */
  messagePlaceholder: string;

  /** submit */
  submit: string;

  /** onEmptyField */
  onEmptyField: string;

  /** onInvalidEmail */
  onInvalidEmail: string;

  /** Thank you URL */
  thankYouUrl: string;
}

export interface IContact extends Entry<IContactFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'contact';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IFooterFields {
  /** text */
  text: string;

  /** githubUrl */
  githubUrl: string;

  /** githubTitle */
  githubTitle: string;

  /** githubIconAlt */
  githubIconAlt: string;

  /** linkedinUrl */
  linkedinUrl: string;

  /** linkedinTitle */
  linkedinTitle: string;

  /** linkedinIconAlt */
  linkedinIconAlt: string;

  /** twitterUrl */
  twitterUrl: string;

  /** twitterTitle */
  twitterTitle: string;

  /** twitterIconAlt */
  twitterIconAlt: string;
}

export interface IFooter extends Entry<IFooterFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'footer';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHeroFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** cta */
  cta: string;
}

export interface IHero extends Entry<IHeroFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'hero';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IHomeFields {
  /** Title */
  title: string;

  /** Navbar */
  navbar: INavbar;

  /** Hero */
  hero: IHero;

  /** About */
  about: IAbout;

  /** Skills */
  skills: ISkills;

  /** Portfolio */
  portfolio: IPortfolio;

  /** Portfolio Items */
  portfolioItems: IPortfolioItem[];

  /** Contact */
  contact: IContact;

  /** Footer */
  footer: IFooter;
}

export interface IHome extends Entry<IHomeFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'home';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface INavbarFields {
  /** about */
  about: string;

  /** portfolio */
  portfolio: string;

  /** blog */
  blog: string;

  /** skills */
  skills: string;

  /** cta */
  cta: string;
}

export interface INavbar extends Entry<INavbarFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'navbar';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPageBlogFields {
  /** Navbar */
  navbar: INavbar;

  /** Section - Blog */
  sectionBlog: ISectionBlog;

  /** Blog Posts */
  blogPosts: IBlogPosts[];

  /** Footer */
  footer: IFooter;
}

export interface IPageBlog extends Entry<IPageBlogFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'pageBlog';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPageBlogPostFields {
  /** Navbar */
  navbar: INavbar;

  /** Footer */
  footer: IFooter;
}

export interface IPageBlogPost extends Entry<IPageBlogPostFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'pageBlogPost';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPageThankYouFields {
  /** Section - Thank you */
  sectionThankYou: ISectionThankYou;

  /** Footer */
  footer: IFooter;
}

export interface IPageThankYou extends Entry<IPageThankYouFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'pageThankYou';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPortfolioFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** demo */
  demo: string;

  /** source */
  source: string;
}

export interface IPortfolio extends Entry<IPortfolioFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'portfolio';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface IPortfolioItemFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;

  /** image */
  image: Asset;

  /** Demo URL */
  demoUrl: string;

  /** Source URL */
  sourceUrl: string;

  /** technologiesUsed */
  technologiesUsed: string[];
}

export interface IPortfolioItem extends Entry<IPortfolioItemFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'portfolioItem';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionBlogFields {
  /** Title */
  title: string;

  /** Paragraph */
  paragraph: string;

  /** Cta */
  cta: string;
}

export interface ISectionBlog extends Entry<ISectionBlogFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionBlog';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISectionThankYouFields {
  /** Title */
  title: string;

  /** Paragraph */
  paragraph: string;

  /** Link text */
  linkText: string;
}

export interface ISectionThankYou extends Entry<ISectionThankYouFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'sectionThankYou';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export interface ISkillsFields {
  /** title */
  title: string;

  /** paragraph */
  paragraph: string;
}

export interface ISkills extends Entry<ISkillsFields> {
  sys: {
    id: string;
    type: string;
    createdAt: string;
    updatedAt: string;
    locale: string;
    contentType: {
      sys: {
        id: 'skills';
        linkType: 'ContentType';
        type: 'Link';
      };
    };
  };
}

export type CONTENT_TYPE =
  | 'about'
  | 'blogPosts'
  | 'contact'
  | 'footer'
  | 'hero'
  | 'home'
  | 'navbar'
  | 'pageBlog'
  | 'pageBlogPost'
  | 'pageThankYou'
  | 'portfolio'
  | 'portfolioItem'
  | 'sectionBlog'
  | 'sectionThankYou'
  | 'skills';

export type LOCALE_CODE = 'en-US' | 'pl-PL';

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US';
