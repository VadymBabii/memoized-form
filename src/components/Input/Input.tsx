import React from "react";
import "./style.css";

type InputProps = {
  name: string;
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
};

const Input = React.memo(({ name, onChange }: InputProps): JSX.Element => {
  return (
    <input
      className="input"
      type="text"
      name={name}
      onChange={onChange}
      placeholder={name}
    />
  );
});

export default Input;
