import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  index: string;
  title: string;
  destination: string;
};

function NavItem({ index, title, destination }: NavItemProps) {
  return (
    <Link href={destination}>
      <li className="cursor-pointer">
        <span className="mr-1 font-rounded font-bold" aria-hidden="true">
          {index}
        </span>
        {title}
      </li>
    </Link>
  );
}

export default NavItem;
