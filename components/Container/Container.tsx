import React from 'react';

type ContainerProps = {
  className: string;
  children: React.ReactNode;
};

function Container({ className, children }: ContainerProps) {
  return (
    <main
      className={`${className} 
      flex flex-col items-center justify-between gap-48
      lg:gap-64`}
    >
      {children}
    </main>
  );
}

export default Container;
