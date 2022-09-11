import React from 'react';
import NavItem from './NavItem';

import { INavbar } from '../../types/generated/contentful';

type NavProps = {
  onClick: () => void;
  isOpen: boolean;
  content: INavbar;
};

function Nav({ onClick, isOpen, content }: NavProps) {
  const { about, blog, skills, portfolio } = content.fields;

  return (
    <nav
      className={`
      ${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} 
      fixed inset-x-8 bottom-4 top-24 grid place-items-center rounded-md bg-light-grey/90 duration-400 ease-in-out
      lg:static lg:ml-8 lg:scale-x-100 lg:bg-transparent lg:opacity-100 lg:transition-none`}
      id="primary-navigation"
    >
      <ul
        className="
        flex flex-col gap-8 text-xl text-white 
        sm:text-2xl 
        lg:flex-row lg:text-sm"
      >
        <NavItem
          onClick={onClick}
          title={about}
          destination="/#about"
          index="01"
        />
        <NavItem
          onClick={onClick}
          title={skills}
          destination="/#skills"
          index="02"
        />
        <NavItem
          onClick={onClick}
          title={portfolio}
          destination="/#portfolio"
          index="03"
        />
        <NavItem
          onClick={onClick}
          title={blog}
          destination="/blog#blog"
          index="04"
        />
      </ul>
    </nav>
  );
}

export default Nav;
