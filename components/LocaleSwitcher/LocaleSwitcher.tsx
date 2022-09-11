import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import LocaleListItem from './LocaleListItem';

import iconEarth from '../../public/icons/earth-outline.svg';
import iconFlagUnitedKingdom from '../../public/icons/flags/gb.svg';
import iconFlagPoland from '../../public/icons/flags/pl.svg';

function LocaleSwitcher() {
  const [isOpen, setIsOpen] = useState(false);

  const clickHandler = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button
        className="
        grid h-8 w-8 place-items-center rounded bg-white shadow-2xl transition-colors duration-400 hover:bg-gray-300
        sm:h-9 sm:w-9
        md:h-10 md:w-10"
        type="button"
        onClick={clickHandler}
        aria-expanded={isOpen}
        aria-label="Language / Język"
      >
        <Image src={iconEarth} width={20} height={20} alt="" />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className="
            absolute -top-2 right-0 w-max origin-top -translate-y-full rounded bg-white py-3 text-sm shadow-2xl
            md:left-0 md:right-auto
            lg:inset-x-0 lg:top-auto lg:-bottom-2 lg:w-auto lg:translate-y-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            <LocaleListItem
              locale="en-US"
              icon={iconFlagUnitedKingdom}
              alt="Flag of the United Kingdom"
              languageName="English"
            />
            <LocaleListItem
              locale="pl-PL"
              icon={iconFlagPoland}
              alt="Flaga Polski"
              languageName="Polski"
            />
          </motion.ul>
        )}
      </AnimatePresence>
    </>
  );
}

export default LocaleSwitcher;
