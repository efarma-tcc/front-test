import React from 'react';
import { twMerge } from 'tailwind-merge';

const InputTw = ({ label, type, name, value, onChange, error, onBlur,className }) => {
  return (
    <div className="mb-4 w-full">
      <label htmlFor={name} className="block text-sm">
        {label}
      </label>
      <input
        id={name}
        name={name}
        className={twMerge("block p-4 border border-gray-200 rounded-md bg-gray-100 transition duration-200 ease-in-out focus:outline-none focus:border-teal-500 focus:bg-white focus:shadow focus:shadow-teal-300 hover:border-teal-500 hover:bg-white hover:shadow hover:shadow-teal-300",className)}
        
        type={type}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default InputTw;
