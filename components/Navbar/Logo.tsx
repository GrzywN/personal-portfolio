import React from 'react';
import Link from 'next/link';

function Logo() {
  return (
    <Link href="#hero">
      <h1
        className="
        cursor-pointer font-rounded text-lg font-bold text-white 
        lg:text-xl"
      >
        Karol Binkowski
      </h1>
    </Link>
  );
}

export default Logo;
