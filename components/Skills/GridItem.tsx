import React from 'react';
import Image from 'next/image';

type GridItemProps = {
  src: string;
  name: string;
};

function GridItem({ src, name }: GridItemProps) {
  return (
    <Image
      src={src}
      title={name}
      alt={name}
      width={80}
      height={80}
      objectFit="contain"
    />
  );
}

export default GridItem;
