import React from 'react';
import Link from 'next/link';

type LogoProps = {
  onClick: () => void;
};

function Logo({ onClick }: LogoProps) {
  return (
    <Link href="#hero" passHref>
      <a
        className="
        cursor-pointer text-white
          transition-colors duration-400 hover:text-sky-blue focus-visible:text-sky-blue"
        onClick={onClick}
      >
        <h1
          className="
          font-rounded text-lg font-bold
          lg:text-xl"
        >
          Karol Binkowski
        </h1>
      </a>
    </Link>
  );
}

export default Logo;
