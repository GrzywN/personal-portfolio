import React from 'react';

type SubmitProps = {
  children: React.ReactNode;
};

function Submit({ children }) {
  return (
    <button
      type="submit"
      className="mx-auto w-1/2 cursor-pointer rounded-md border-2 border-sky-blue bg-sky-blue py-2 px-4 font-bold text-white shadow focus:shadow-lg focus:outline-none"
    >
      {children}
    </button>
  );
}

export default Submit;
