import React from 'react';

interface InputProps {
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

// eslint-disable-next-line react/function-component-definition
const Input: React.FC<InputProps> = ({ value, onChange }) => (
  <input type="text" value={value} onChange={onChange} />
);

export default Input;
