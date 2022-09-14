import React from 'react';
import Link from 'next/link';

type CtaProps = {
  text: string;
  destination: string;
  className?: string;
};

function Cta({ text, destination, className = '' }: CtaProps) {
  return (
    <Link href={destination} passHref>
      <a
        className={`${className} 
        rounded border-2 border-sky-blue bg-sky-blue py-2 px-4
          text-xs font-bold text-white transition-colors duration-400
        hover:bg-transparent focus-visible:bg-transparent
        md:text-base`}
      >
        {text}
      </a>
    </Link>
  );
}

Cta.defaultProps = {
  className: '',
};

export default Cta;
