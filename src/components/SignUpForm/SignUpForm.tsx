import React, { useState } from "react";
import Input from "../Input/Input";
import "./style.css";

type FormValues = {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;
  phoneNumber: string;
};

type ConfigType = {
  name: keyof FormValues;
  label: string;
};

const config: ConfigType[] = [
  { name: "firstName", label: "First Name" },
  { name: "lastName", label: "Last Name" },
  { name: "dateOfBirth", label: "Date of Birth" },
  { name: "email", label: "Email" },
  { name: "phoneNumber", label: "Phone Number" },
];

const SignUpForm = (): JSX.Element => {
  const [values, setValues] = useState<FormValues>({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
  });

  const onChange = React.useCallback((e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    setValues((prev) => Object({ ...prev, [target.name]: target.value }));
  }, []);

  const onSubmit = React.useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      console.log(values);
    },
    [values]
  );
  console.log("form render");
  return (
    <form className="form">
      {config.map((value) => (
        <div key={value.name}>
          <label>{value.label}</label>
          <Input name={value.name} onChange={onChange} />
        </div>
      ))}
      <button type="submit" onClick={onSubmit} className="button">
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
