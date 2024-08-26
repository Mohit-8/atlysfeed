import React from "react";
import { PostWrapper } from "./styled";
import PostContainer from "components/PostContainer";
import EmojiWrapper from "components/EmojiWrapper";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import chatbubble from "assets/images/chatbubble.svg";

dayjs.extend(relativeTime);

interface PostProps {
  imgSrc: string;
  name: string;
  createdAt: string;
  emoji: string;
  description: string;
  comments?: number;
}

const Post = ({
  name,
  createdAt,
  description,
  emoji,
  comments,
  imgSrc,
}: PostProps) => {
  return (
    <PostContainer>
      <PostWrapper>
        <div className="post-header">
          <div className="post-avatar">
            <img src={imgSrc} alt="user-avatar" />
            <div className="post-info">
              <h4>{name}</h4>
              <p>{dayjs(createdAt).fromNow()} </p>
            </div>
          </div>
          <div>. . .</div>
        </div>
        <div className="desc-section">
          <EmojiWrapper emoji={emoji} />
          <p>{description}</p>
        </div>
        <div className="comments-section">
          <img src={chatbubble} alt="comments icon" />
          <div>{comments} comments</div>
        </div>
      </PostWrapper>
    </PostContainer>
  );
};

export default Post;
