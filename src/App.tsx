import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PostsFeed from "features/PostsFeed";
import { ROUTES } from "./constants/routes";
import LoginPage from "features/Login";
import { useAuth } from "context/AuthContext";
import Modal from "components/Modal";
import LoginBox from "features/Login/LoginBox";

function App() {
  const { showModal, closeLoginModal } = useAuth();
  return (
    <BrowserRouter basename="/">
      <div className="App">
        <Routes>
          <Route path={ROUTES.POSTS} element={<PostsFeed />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path="*" element={<Navigate to={ROUTES.LOGIN} />} />
        </Routes>
        {showModal && (
          <Modal>
            <LoginBox onClose={closeLoginModal} showClose />
          </Modal>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
