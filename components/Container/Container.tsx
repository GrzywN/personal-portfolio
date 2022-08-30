import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <main
      className="
      flex flex-col items-center justify-between gap-48
      lg:gap-64"
    >
      {children}
    </main>
  );
}

export default Container;
