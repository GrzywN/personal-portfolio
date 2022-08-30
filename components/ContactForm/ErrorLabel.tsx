import React from 'react';

type ErrorLabelProps = {
  children: React.ReactNode;
};

function ErrorLabel({ children }: ErrorLabelProps) {
  return (
    <strong
      className={`${children == null ? 'opacity-0' : 'opacity-100'} 
      absolute left-1/2 bottom-0 w-full -translate-x-1/2 translate-y-[calc(100%+0.25rem)] text-xs italic text-red-500 transition-opacity duration-400`}
    >
      {children}
    </strong>
  );
}

export default ErrorLabel;
