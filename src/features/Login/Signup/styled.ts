import styled from "styled-components";

export const SignupWrapper = styled.div`
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
    font-size: 14px;
    text-align: center;
    p {
      margin: 0;
    }
    .text {
      color: #6b6c70;
    }
    .action-cta {
      color: #c5c7ca;
      cursor: pointer;
    }
  }
`;
