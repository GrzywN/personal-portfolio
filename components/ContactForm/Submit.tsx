import React from 'react';
import { motion } from 'framer-motion';

type SubmitProps = {
  children: React.ReactNode;
};

function Submit({ children }: SubmitProps) {
  return (
    <motion.button
      type="submit"
      className="
      mx-auto w-1/2 cursor-pointer rounded border-2 border-sky-blue
       bg-sky-blue py-2 px-4 font-bold text-white"
      whileHover={{ scale: 1.1 }}
      whileFocus={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      {children}
    </motion.button>
  );
}

export default Submit;
