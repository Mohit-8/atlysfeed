import styled from "styled-components";

export const PostWrapper = styled.div`
  .post-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .post-avatar {
      display: flex;
      align-items: flex-start;
      gap: 16px;
      img {
        height: 44px;
        width: 44px;
      }
      .post-info {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 4px;
        h4 {
          margin: 0;
          font-size: 16px;
          color: #c5c7ca;
          font-weight: 500;
        }
        p {
          margin: 0;
          color: #7f8084;
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
  }
  .desc-section {
    display: flex;
    gap: 16px;
    padding: 16px 29px 16px 16px;
    background: #191920;
    border-radius: 8px;
    margin-top: 20px;
    margin-bottom: 14px;
    color: #7f8084;
    .emoji-wrapper {
    }
    p {
      margin: 0;
      font-weight: 400;
      filter: blur(0.4px);
      text-align: left;
      line-height: 24px;
    }
  }
  .comments-section {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #7f8084;
  }
`;
