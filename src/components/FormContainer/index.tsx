import React from "react";
import { FormWrapper } from "./styled";
import closemark from "assets/images/closemark.svg";

interface FormContainerProps {
  header: string;
  subheader: string;
  children: React.ReactNode;
  showClose?: boolean;
  onClose?: () => void;
}

const FormContainer = ({
  header,
  subheader,
  children,
  showClose,
  onClose,
}: FormContainerProps) => {
  return (
    <FormWrapper>
      <div className="login-header">
        {showClose && (
          <img
            className="close-icon"
            src={closemark}
            alt="close-icon"
            onClick={onClose}
          />
        )}
        <p className="form-header">{header}</p>
        <p className="form-subheader">{subheader}</p>
      </div>
      {children}
    </FormWrapper>
  );
};

export default FormContainer;
