import React from 'react';
import { twMerge } from 'tailwind-merge';

const ButtonTw = ({ children,className }) => {
  return (
    
     
      <button
      className={twMerge("block text-base p-4 border border-gray-200 rounded-md bg-teal-500 transition duration-200 ease-in-out focus:outline-none focus:bg-teal-500 focus:shadow focus:shadow-teal-300 hover:bg-teal-400 hover:shadow hover:shadow-teal-300",className)}
      >
        {children}
      </button>

    
  );
};

export default ButtonTw;
