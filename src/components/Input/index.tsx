import React from "react";
import { InputContainer } from "./styled";

interface InputProps {
  type: React.HTMLInputTypeAttribute;
  value: string;
  name: string;
  placeholder: string;
  label?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  showForgotPassword?: boolean;
}

const Input = (props: InputProps) => {
  const {
    type,
    value,
    placeholder,
    label,
    name,
    onChange,
    showForgotPassword,
  } = props;
  return (
    <InputContainer>
      {label && (
        <div className="label-container">
          <label>{props.label}</label>
          {showForgotPassword && <p className="forgot-btn">Forgot password?</p>}
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </InputContainer>
  );
};

export default Input;
