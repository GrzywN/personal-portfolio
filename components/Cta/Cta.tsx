import React from 'react';
import Link from 'next/link';

enum CtaVariants {
  filled,
  subtle,
}

type CtaProps = {
  text: string;
  destination: string;
  className?: string;
  variant?: CtaVariants;
};

function Cta({ text, destination, className = '', variant = CtaVariants.filled }: CtaProps) {
  const variants = {
    [CtaVariants.filled]: (
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
    ),
    [CtaVariants.subtle]: (
      <Link href={destination} passHref>
        <a
          className={`${className} 
          py-2 px-4 text-xs text-white transition-colors duration-400
          hover:text-white/75 focus-visible:text-white/75
          md:text-base`}
        >
          {text}
        </a>
      </Link>
    ),
  };

  return variants[variant];
}

Cta.defaultProps = {
  className: '',
  CtaVariants,
};

export default Cta;

export { CtaVariants };
