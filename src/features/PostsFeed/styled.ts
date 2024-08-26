import styled from "styled-components";

export const PostsFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;

  .logout-btn {
    position: absolute;
    left: 10px;
    top: 10px;
  }

  .post-main {
    width: 700px;
  }

  h1 {
    font-weight: 500;
    color: #c5c7ca;
    font-size: 20px;
    margin-top: 0;
    margin-bottom: 12px;
  }
  .subheader {
    width: 570px;
    font-weight: 400;
    line-height: 24px;
    color: #7f8084;
    font-size: 16px;
    margin-bottom: 40px;
  }
`;

export const CreatePostWrapper = styled.div`
  .create-heading {
    font-size: 18px;
    font-weight: 500;
    margin: 0;
    color: #c5c7ca;
  }
  .text-container {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 16px 29px 16px 16px;
    background: #191920;
    border-radius: 8px;
    margin: 16px 0;
    color: #7f8084;
    textarea {
      background: none;
      border: none;
      outline: none;
      color: white;
      display: flex;
      flex-grow: 1;
      resize: none;
    }
  }
  .create-action {
    display: flex;
    justify-content: flex-end;

    .button-container {
      width: 111px;
    }
  }
`;
