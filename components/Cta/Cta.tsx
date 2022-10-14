import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

enum CtaVariants {
  filled,
  outline,
}

type CtaProps = {
  text: string;
  destination: string;
  className?: string;
  variant?: CtaVariants;
  animateScale?: boolean;
};

function Cta({
  text,
  destination,
  className = '',
  variant = CtaVariants.filled,
  animateScale = true,
}: CtaProps) {
  const variants = {
    [CtaVariants.filled]: (
      <Link href={destination} passHref>
        <motion.a
          className={`${className} 
          ${
            animateScale ||
            'transition-colors duration-300 hover:bg-transparent focus-visible:bg-transparent'
          }
          rounded border-2 border-sky-blue bg-sky-blue
           py-2 px-4 text-xs font-bold text-white
          md:text-base`}
          whileHover={animateScale ? { scale: 1.1 } : {}}
          whileFocus={animateScale ? { scale: 1.1 } : {}}
          whileTap={animateScale ? { scale: 0.9 } : {}}
        >
          {text}
        </motion.a>
      </Link>
    ),
    [CtaVariants.outline]: (
      <Link href={destination} passHref>
        <motion.a
          className={`${className} 
          rounded border-2 border-sky-blue py-2 px-4 text-xs font-bold text-white
          md:text-base`}
          whileHover={animateScale ? { scale: 1.1 } : {}}
          whileFocus={animateScale ? { scale: 1.1 } : {}}
          whileTap={animateScale ? { scale: 0.9 } : {}}
        >
          {text}
        </motion.a>
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
