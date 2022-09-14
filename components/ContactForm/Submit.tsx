import React from 'react';

type SubmitProps = {
  children: React.ReactNode;
};

function Submit({ children }: SubmitProps) {
  return (
    <button
      type="submit"
      className="
      mx-auto w-1/2 cursor-pointer rounded border-2 border-sky-blue bg-sky-blue
        py-2 px-4 font-bold text-white transition-colors duration-400
      hover:bg-transparent focus-visible:bg-transparent focus-visible:outline-offset-2"
    >
      {children}
    </button>
  );
}

export default Submit;
