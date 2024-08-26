import styled from "styled-components";

export const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;

  form {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .not-register {
    display: flex;
    gap: 4px;
    margin-top: 12px;
    align-items: center;
    p {
      margin: 0;
    }
    .text {
      color: #6b6c70;
      font-size: 14px;
    }
    .action-cta {
      color: #c5c7ca;
      cursor: pointer;
    }
  }
`;
