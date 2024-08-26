import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .label-container {
    display: flex;
    justify-content: space-between;
  }
  label {
    font-weight: 500;
    font-size: 14px;
    color: #c5c7ca;
    margin-bottom: 10px;
  }
  input {
    border-radius: 4px;
    border: 1.5px solid #35373b;
    padding: 12px;
    background: none;
    outline: none;
    color: #ffffff;
    font-size: 16px;
  }
  .forgot-btn {
    font-size: 12px;
    color: #c5c7ca;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
  }
`;
