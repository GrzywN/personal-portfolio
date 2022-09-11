import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';
import { INavbar } from '../../types/generated/contentful';

import Nav from './Nav';
import Logo from './Logo';
import Cta from '../Cta';

type NavbarProps = {
  content: INavbar;
};

function Navbar({ content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen(false);
  };

  const { cta } = content.fields;

  return (
    <header className="fixed top-4 z-50 grid w-full place-items-center px-8">
      <div
        className="
        flex h-16 w-full max-w-padding-container items-center
          justify-between rounded-md bg-light-grey/90 px-8 py-2 shadow-md backdrop-blur-xl"
      >
        <Logo onClick={clickHandler} />
        <Nav onClick={clickHandler} isOpen={isOpen} content={content} />
        <Cta
          className="
          ml-auto hidden
          lg:inline"
          destination="/#contact"
          text={cta}
        />
        <div className="lg:hidden">
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
