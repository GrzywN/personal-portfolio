import React from 'react';
import Link from 'next/link';

type NavItemProps = {
  destination: string;
  onClick: () => void;
  index: string;
  title: string;
};

function NavItem({ destination, onClick, index, title }: NavItemProps) {
  return (
    <li className="cursor-pointer">
      <Link href={destination} passHref>
        <a onClick={onClick}>
          <span className="mr-1 font-rounded font-bold" aria-hidden="true">
            {index}
          </span>
          {title}
        </a>
      </Link>
    </li>
  );
}

export default NavItem;
