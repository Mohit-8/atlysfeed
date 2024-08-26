import React, { useState } from "react";
import Button from "components/Button";
import Input from "components/Input";
import { SignupWrapper } from "./styled";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "constants/routes";
import { useAuth } from "context/AuthContext";

interface SignUpProps {
  onLogin: () => void;
}

const Signup = ({ onLogin }: SignUpProps) => {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    username: "",
    password: "",
  });
  const { setUser, closeLoginModal, showModal } = useAuth();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      email: e.target.value,
    }));
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData((prev) => ({
      ...prev,
      username: e.target.value,
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

    if (!loginData.email || !loginData.password || !loginData.username) return;

    const userData = {
      email: loginData.email,
      username: loginData.username,
    };

    if (typeof setUser === "function" && setUser(userData))
      navigate(ROUTES.POSTS);

    if (showModal) {
      closeLoginModal && closeLoginModal();
    }
  };

  return (
    <SignupWrapper>
      <form>
        <Input
          label="Email"
          placeholder="Enter your email"
          type="email"
          name="email"
          value={loginData.email}
          onChange={(e) => {
            handleEmailChange(e);
          }}
        />
        <Input
          label="Username"
          placeholder="Choose a preferred username"
          type="text"
          name="username"
          value={loginData.username}
          onChange={(e) => {
            handleUsernameChange(e);
          }}
        />
        <Input
          label="Password"
          placeholder="Choose a strong password"
          type="password"
          name="password"
          value={loginData.password}
          onChange={(e) => {
            handlePasswordChange(e);
          }}
        />
        <Button text="Continue" type="submit" onClick={handleSubmit} />
      </form>
      <div className="not-register">
        <p className="text">Already have an account?</p>
        <p className="action-cta" onClick={onLogin}>
          Login →
        </p>
      </div>
    </SignupWrapper>
  );
};

export default Signup;
