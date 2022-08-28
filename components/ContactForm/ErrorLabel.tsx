import React from 'react';

type ErrorLabelProps = {
  children: React.ReactNode;
};

function ErrorLabel({ children }: ErrorLabelProps) {
  return <p className="mt-3 text-xs italic text-red-500">{children}</p>;
}

export default ErrorLabel;
