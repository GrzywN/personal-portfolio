import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import iconDesktopOutline from '../../public/icons/desktop-outline.svg';

type DemoButtonProps = {
  href: string;
  text: string;
};

function DemoButton({ href, text }: DemoButtonProps) {
  return (
    <motion.a
      href={href}
      className="
      inline-flex items-center gap-4 rounded-lg border border-dark-grey 
        bg-white py-2 px-3 text-center text-sm font-medium text-light-grey"
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Image src={iconDesktopOutline} width={24} height={24} alt="" />
      {text}
    </motion.a>
  );
}

export default DemoButton;
