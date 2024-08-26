import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext<{
  isLoggedIn: boolean;
  setUser?: (data: { email: string; username?: string }) => boolean;
  removeUser: () => void;
  showModal: boolean;
  setLoginModal?: () => void;
  closeLoginModal?: () => void;
}>({
  isLoggedIn: false,
  removeUser: () => {},
  showModal: false,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const setUser = (data: { email: string; username?: string }) => {
    localStorage.setItem("user", JSON.stringify(data));
    setIsLoggedIn(true);
    return true;
  };

  const removeUser = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  const setLoginModal = () => {
    setShowModal(true);
  };
  const closeLoginModal = () => {
    setShowModal(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setUser,
        removeUser,
        showModal,
        setLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
