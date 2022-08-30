import React from 'react';
import Image from 'next/image';

type DemoButtonProps = {
  href: string;
  text: string;
};

function DemoButton({ href, text }: DemoButtonProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-4 rounded-lg border border-dark-grey bg-white py-2 px-3 text-center text-sm font-medium text-light-grey"
    >
      <Image src="/icons/icon-demo.svg" width={24} height={24} />
      {text}
    </a>
  );
}

export default DemoButton;
