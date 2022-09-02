import React from 'react';
import SocialListItem from './SocialListItem';

import githubLogo from '../../public/icons/logo-github.svg';
import linkedinLogo from '../../public/icons/logo-linkedin.svg';
import twitterLogo from '../../public/icons/logo-twitter.svg';

import type { FooterFields } from '../../types/content/models';

type FooterProps = {
  content: FooterFields;
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
  } = content;

  return (
    <footer className="bg-darker-grey">
      <div
        className="
        mx-auto flex max-w-padding-container flex-col-reverse items-center gap-y-4 py-12 px-8
        md:justify-between 
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
