import React, { ChangeEventHandler, FocusEventHandler } from 'react';

type InputProps = {
  error: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onBlur: FocusEventHandler<HTMLInputElement>;
  id: string;
  name: string;
  type?: string;
  placeholder?: string;
};

function Input(props: InputProps) {
  const { error, value, onChange, onBlur, id, name, type, placeholder } = props;

  return (
    <input
      className={`${
        error ? 'border-red-500' : 'border-gray-200 focus:border-gray-500'
      } 
      block w-full appearance-none rounded-md border bg-gray-200 py-3 px-4 leading-tight text-gray-700 focus:bg-white focus:outline-none`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
