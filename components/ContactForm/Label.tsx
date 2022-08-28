import React from 'react';

type LabelProps = {
  htmlFor: string;
  children: React.ReactNode;
};

function Label({ htmlFor, children }: LabelProps) {
  return (
    <label
      className="mb-2 block text-xs font-bold uppercase tracking-wide text-white"
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
}

export default Label;
