import React from 'react';
import NavItem from './NavItem';

type NavProps = {
  isOpen: boolean;
};

function Nav({ isOpen }: NavProps) {
  return (
    <nav
      className={`${isOpen ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'} 
          fixed inset-x-8 bottom-4 top-24 grid place-items-center rounded-md bg-light-grey/90 duration-400 ease-in-out
          md:static md:ml-8 md:scale-x-100 md:bg-transparent md:opacity-100 md:transition-none`}
      id="primary-navigation"
    >
      <ul className="flex flex-col gap-8 text-xl text-white sm:text-3xl md:flex-row md:text-base">
        <NavItem title="About" destination="#about" index="01" />
        <NavItem title="Projects" destination="#projects" index="02" />
        <NavItem title="Blog" destination="#blog" index="03" />
      </ul>
    </nav>
  );
}

export default Nav;
