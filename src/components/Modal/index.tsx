import React, { useEffect, useState } from "react";
import { ModalWrapper } from "./styled";

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 100);

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "scroll";
    };
  }, []);

  return <ModalWrapper visible={visible}>{children}</ModalWrapper>;
};

export default Modal;
