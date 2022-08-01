import React from 'react'

type CtaProps = {
  text: string
  destination: string
  className?: string
}

function Cta({ text, destination, className = '' }: CtaProps) {
  return (
    <a
      href={destination}
      className={`${className} 
      ml-auto hidden rounded-md bg-sky-400 py-2 px-3 text-sm text-dark-grey
      md:inline`}
    >
      {text}
    </a>
  )
}

Cta.defaultProps = {
  className: '',
}

export default Cta
