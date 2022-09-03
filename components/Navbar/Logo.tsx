import React from 'react';
import Link from 'next/link';

type LogoProps = {
  onClick: () => void;
};

function Logo({ onClick }: LogoProps) {
  return (
    <Link href="#hero" passHref>
      <a onClick={onClick}>
        <h1
          className="
          cursor-pointer font-rounded text-lg font-bold text-white
          lg:text-xl"
        >
          Karol Binkowski
        </h1>
      </a>
    </Link>
  );
}

export default Logo;
