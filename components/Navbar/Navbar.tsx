import React, { useState } from 'react';
import { Twirl as Hamburger } from 'hamburger-react';

import Nav from './Nav';
import Logo from './Logo';
import Cta from '../Cta';

import useScroll from '../../hooks/useScroll';

import { INavbar } from '../../types/generated/contentful';

type NavbarProps = {
  content: INavbar;
};

function Navbar({ content }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const { cta } = content.fields;

  const { scrollDirection } = useScroll();

  const clickHandler = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`
      ${
        scrollDirection === 'down'
          ? 'lg:opacity-100'
          : 'lg:-translate-y-full lg:opacity-0'
      }
      fixed top-4 z-50 grid w-full place-items-center px-8 transition duration-400`}
    >
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
