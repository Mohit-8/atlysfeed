import styled from "styled-components";

export const FormWrapper = styled.div`
  border: 2px solid #969696;
  background-color: #27292d;
  border-radius: 8px;
  width: 431px;
  padding: 40px 16px;
  position: relative;
  margin-bottom: 16px;
  .login-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    .form-header {
      font-weight: 500;
      color: #6b6c70;
      font-size: 14px;
      margin-top: 0;
      margin-bottom: 8px;
    }
    .form-subheader {
      font-weight: 600;
      color: #ffffff;
      font-size: 18px;
      margin-top: 0;
      margin-bottom: 45px;
    }
  }
  .close-icon {
    position: absolute;
    right: 16px;
    top: 16px;
    cursor: pointer;
  }
`;
