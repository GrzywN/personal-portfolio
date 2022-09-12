import React from 'react';
import Image from 'next/image';
import ScrollToTop from 'react-scroll-to-top';

import LocaleSwitcher from '../LocaleSwitcher';

import iconArrow from '../../public/icons/arrow-up-outline.svg';

type ContainerProps = {
  className?: string;
  children: React.ReactNode;
};

function Container({ className, children }: ContainerProps) {
  return (
    <main
      className={`${className} 
      flex flex-col items-center justify-between gap-48 pb-48
      lg:gap-64 lg:pb-64`}
    >
      {children}
      <ScrollToTop
        className="
        !invisible
        md:!visible md:!right-6 md:!bottom-6 md:!rounded md:!bg-light-grey md:!p-2 md:!shadow-md"
        smooth
        component={<Image src={iconArrow} alt="" />}
      />
      <div
        className="
        fixed bottom-6 right-6 z-50
        md:left-6 md:right-auto
        lg:hidden"
      >
        <LocaleSwitcher />
      </div>
    </main>
  );
}

Container.defaultProps = {
  className: '',
};

export default Container;
