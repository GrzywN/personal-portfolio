import React from 'react';

type SubmitProps = {
  children: React.ReactNode;
};

function Submit({ children }: SubmitProps) {
  return (
    <button
      type="submit"
      className="
      mx-auto w-1/2 cursor-pointer rounded-md border-2 border-sky-blue bg-sky-blue py-2 px-4 font-medium text-white shadow transition-colors duration-400
        hover:bg-transparent focus:bg-transparent focus:shadow-lg focus:outline-none"
    >
      {children}
    </button>
  );
}

export default Submit;
