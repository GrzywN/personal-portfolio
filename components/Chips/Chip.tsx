import React from 'react';

type ChipProps = {
  children: React.ReactNode;
};

function Chip({ children }: ChipProps) {
  return (
    <li
      className="
      inline-flex h-6 items-center gap-2 rounded-full border border-light-grey px-3 py-2 text-[0.625rem] text-light-grey
      sm:text-xs"
    >
      {children}
    </li>
  );
}

export default Chip;
