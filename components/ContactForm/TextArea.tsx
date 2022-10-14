import React, { ChangeEventHandler, FocusEventHandler } from 'react';

type TextAreaProps = {
  error: boolean;
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: FocusEventHandler<HTMLTextAreaElement>;
  id: string;
  name: string;
  placeholder?: string;
};

function TextArea(props: TextAreaProps) {
  const { error, value, onChange, onBlur, id, name, placeholder } = props;

  return (
    <textarea
      className={`${error ? 'border-red-500' : 'border-gray-200 focus-visible:border-gray-500'}
      h-32 w-full resize-none appearance-none rounded-md border bg-gray-200 py-3 px-4 leading-tight text-gray-700 transition-colors duration-400
      focus-visible:bg-white focus-visible:outline-offset-2`}
      value={value}
      onChange={onChange}
      onBlur={onBlur}
      id={id}
      name={name}
      placeholder={placeholder}
    />
  );
}

TextArea.defaultProps = {
  placeholder: '',
};

export default TextArea;
