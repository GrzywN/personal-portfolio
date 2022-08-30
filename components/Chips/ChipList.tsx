import React from 'react';
import Chip from './Chip';

type ChipListProps = {
  items: string[];
};

function ChipList({ items }: ChipListProps) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Chip key={item}>{item}</Chip>
      ))}
    </ul>
  );
}

export default ChipList;
