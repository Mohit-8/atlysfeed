import styled from "styled-components";

export const ModalWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: opacity 0.8s ease, backdrop-filter 0.8s ease;
  ${({ visible }) =>
    visible &&
    `
    opacity: 1;
    backdrop-filter: blur(2px);
  `}
`;
