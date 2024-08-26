import React, { useState } from "react";
import { SignInWrapper } from "./styled";
import Button from "components/Button";
import Input from "components/Input";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useAuth } from "context/AuthContext";

interface SignInProps {
  onRegister: () => void;
}

const SignIn = ({ onRegister }: SignInProps) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const { setUser, closeLoginModal, showModal } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      password: e.target.value,
    }));
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) return;

    const userData = {
      email: loginData.email,
      username: "Jane",
    };

    if (typeof setUser === "function" && setUser(userData)) {
      navigate(ROUTES.POSTS);
    }
    if (showModal) {
      closeLoginModal && closeLoginModal();
    }
  };

  return (
    <SignInWrapper>
      <form>
        <Input
          label="Email or Username"
          placeholder="Enter your email or username"
          type="text"
          name="email"
          value={loginData.email}
          onChange={(e) => {
            handleEmailChange(e);
          }}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={(e) => {
            handlePasswordChange(e);
          }}
          showForgotPassword
        />
        <Button
          text="Login now"
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
        />
      </form>
      <div className="not-register">
        <p className="text">Not registered yet?</p>
        <p onClick={onRegister} className="action-cta">
          Register →
        </p>
      </div>
    </SignInWrapper>
  );
};

export default SignIn;
