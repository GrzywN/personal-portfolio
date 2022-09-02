import React from 'react';
import NavItem from './NavItem';

import type { NavbarFields } from '../../types/content/models';

type NavProps = {
  onClick: () => void;
  isOpen: boolean;
  content: NavbarFields;
};

function Nav({ onClick, isOpen, content }: NavProps) {
  const { about, blog, skills, portfolio } = content;

  return (
    <nav
      className={`
      ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} 
      fixed inset-x-8 bottom-4 top-24 grid place-items-center rounded-md bg-light-grey/90 duration-400 ease-in-out
      md:static md:ml-8 md:scale-x-100 md:bg-transparent md:opacity-100 md:transition-none`}
      id="primary-navigation"
    >
      <ul className="flex flex-col gap-8 text-xl text-white sm:text-3xl md:flex-row md:text-base">
        <NavItem
          onClick={onClick}
          title={about}
          destination="#about"
          index="01"
        />
        <NavItem
          onClick={onClick}
          title={skills}
          destination="#skills"
          index="02"
        />
        <NavItem
          onClick={onClick}
          title={portfolio}
          destination="#portfolio"
          index="03"
        />
        <NavItem
          onClick={onClick}
          title={blog}
          destination="/blog"
          index="04"
        />
      </ul>
    </nav>
  );
}

export default Nav;
