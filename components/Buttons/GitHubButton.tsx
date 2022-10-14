import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import iconLogoGithub from '../../public/icons/logo-github.svg';

type GitHubButtonProps = {
  href: string;
  text: string;
};

function GitHubButton({ href, text }: GitHubButtonProps) {
  return (
    <motion.a
      href={href}
      className="
      inline-flex items-center gap-4 rounded-lg border border-dark-grey
       bg-dark-grey py-2 px-3 text-center text-sm font-medium text-white"
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={iconLogoGithub} width={24} height={24} alt="" />
      {text}
    </motion.a>
  );
}

export default GitHubButton;
