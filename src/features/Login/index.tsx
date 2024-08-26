import React from "react";
import logo from "assets/images/logo.svg";
import { LoginPageContainer } from "./styled";
import LoginBox from "./LoginBox";

const LoginPage = () => {
  return (
    <LoginPageContainer>
      <img src={logo} alt="main-logo" className="main-logo" />
      <LoginBox />
    </LoginPageContainer>
  );
};

export default LoginPage;
