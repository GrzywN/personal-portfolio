import React from 'react';
import Image from 'next/image';

import iconLogoGithub from '../../public/icons/logo-github.svg';

type GitHubButtonProps = {
  href: string;
  text: string;
};

function GitHubButton({ href, text }: GitHubButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-4 rounded-lg bg-dark-grey py-2 px-3 text-center text-sm font-medium text-white"
    >
      <Image src={iconLogoGithub} width={24} height={24} alt="" />
      {text}
    </a>
  );
}

export default GitHubButton;
