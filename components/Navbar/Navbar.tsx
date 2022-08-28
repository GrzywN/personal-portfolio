import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import Nav from './Nav';
import Logo from './Logo';
import Cta from '../Cta';

import type { NavbarFields } from '../../types/content/Navbar';

type NavbarProps = {
  content: NavbarFields;
};

function Navbar({ content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { cta } = content;

  return (
    <header className="fixed top-4 z-50 grid w-full place-items-center px-8">
      <div
        className="
        flex h-16 w-full max-w-padding-container items-center justify-between rounded-md bg-light-grey/90 px-8 py-2 shadow-md
        backdrop-blur-xl"
      >
        <Logo />
        <Nav isOpen={isOpen} content={content} />
        <Cta
          className="ml-auto hidden md:inline"
          destination="#contact"
          text={cta}
        />
        <div className="md:hidden">
          <Hamburger
            rounded
            color="white"
            toggled={isOpen}
            toggle={setIsOpen}
            label="Show menu"
          />
        </div>
      </div>
    </header>
  );
}

export default Navbar;