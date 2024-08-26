import React, { useState } from "react";
import FormContainer from "components/FormContainer";
import SignIn from "features/Login/SignIn";
import Signup from "features/Login/Signup";

interface LoginBoxProps {
  showClose?: boolean;
  onClose?: () => void;
}

const LoginBox = ({ showClose, onClose }: LoginBoxProps) => {
  const [isSignin, setSignin] = useState(true);

  return (
    <FormContainer
      header={isSignin ? "WELCOME BACK" : "SIGN UP"}
      subheader={
        isSignin ? "Log into your account" : "Create an account to continue"
      }
      showClose={showClose}
      onClose={onClose}
    >
      {isSignin ? (
        <SignIn onRegister={() => setSignin(false)} />
      ) : (
        <Signup onLogin={() => setSignin(true)} />
      )}
    </FormContainer>
  );
};

export default LoginBox;
