import React from 'react';

type ContainerProps = {
  children: React.ReactNode;
};

function Container({ children }: ContainerProps) {
  return (
    <div className="min-h-screen w-full">
      <main className="mx-auto flex flex-col items-center justify-between gap-48">
        {children}
      </main>
    </div>
  );
}

export default Container;
