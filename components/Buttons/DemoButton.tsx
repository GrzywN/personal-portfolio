import React from 'react';
import Image from 'next/image';

import iconDesktopOutline from '../../public/icons/desktop-outline.svg';

type DemoButtonProps = {
  href: string;
  text: string;
};

function DemoButton({ href, text }: DemoButtonProps) {
  return (
    <a
      href={href}
      className="
      inline-flex items-center gap-4 rounded-lg border border-dark-grey 
        bg-white py-2 px-3 text-center text-sm font-medium text-light-grey transition-shadow duration-400
      hover:shadow-xl focus-visible:shadow-xl focus-visible:outline-offset-2"
    >
      <Image src={iconDesktopOutline} width={24} height={24} alt="" />
      {text}
    </a>
  );
}

export default DemoButton;
