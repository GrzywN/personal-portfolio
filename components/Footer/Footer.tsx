import React from 'react';
import { IFooter } from '../../types/generated/contentful';

import SocialListItem from './SocialListItem';

import githubLogo from '../../public/icons/logo-github.svg';
import linkedinLogo from '../../public/icons/logo-linkedin.svg';
import twitterLogo from '../../public/icons/logo-twitter.svg';

type FooterProps = {
  content: IFooter;
};

function Footer({ content }: FooterProps) {
  const {
    text,
    githubUrl,
    githubTitle,
    githubIconAlt,
    linkedinUrl,
    linkedinTitle,
    linkedinIconAlt,
    twitterUrl,
    twitterTitle,
    twitterIconAlt,
  } = content.fields;

  return (
    <footer className="bg-darker-grey">
      <div
        className="
        mx-auto flex max-w-padding-container flex-col-reverse items-center gap-8 px-8 py-32
        md:justify-between md:gap-4 md:py-12
        lg:flex-row"
      >
        <p className="text-center font-medium text-gray-400">
          {text}
          <span className="text-gray-200"> Karol Binkowski</span>
        </p>
        <ul
          className="
          flex justify-center gap-6 text-gray-400
          lg:ml-auto"
        >
          <SocialListItem
            href={githubUrl}
            title={githubTitle}
            logo={githubLogo}
            alt={githubIconAlt}
          />
          <SocialListItem
            href={linkedinUrl}
            title={linkedinTitle}
            logo={linkedinLogo}
            alt={linkedinIconAlt}
          />
          <SocialListItem
            href={twitterUrl}
            title={twitterTitle}
            logo={twitterLogo}
            alt={twitterIconAlt}
          />
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
