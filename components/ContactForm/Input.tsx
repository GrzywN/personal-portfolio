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
  autoComplete: string;
};

function Input(props: InputProps) {
  const { error, value, onChange, onBlur, id, name, type, placeholder, autoComplete } = props;

  return (
    <input
      className={`${error ? 'border-red-500' : 'border-gray-200 focus-visible:border-gray-500'}
      block w-full appearance-none rounded-md border bg-gray-200 py-3 px-4 leading-tight text-gray-700 transition-colors duration-300
      focus-visible:bg-white focus-visible:outline-offset-2`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      autoComplete={autoComplete}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
