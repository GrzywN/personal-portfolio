import React from 'react';

type CtaProps = {
  text: string;
  destination: string;
  className?: string;
};

function Cta({ text, destination, className = '' }: CtaProps) {
  return (
    <a
      href={destination}
      className={`${className} 
      rounded border-2 border-sky-blue bg-sky-400 py-2 px-4 text-xs text-white
        transition-colors duration-400  
        hover:bg-transparent
        focus-visible:bg-transparent
      lg:text-sm`}
    >
      {text}
    </a>
  );
}

Cta.defaultProps = {
  className: '',
};

export default Cta;
