import React from 'react';
import Image from 'next/image';

type SocialListItemProps = {
  href: string;
  title: string;
  logo: string;
  alt: string;
};

function SocialListItem({ href, title, logo, alt }: SocialListItemProps) {
  return (
    <li>
      <a href={href} title={title}>
        <Image src={logo} alt={alt} width={24} height={24} />
      </a>
    </li>
  );
}

export default SocialListItem;
