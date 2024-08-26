import React from "react";
import { PostContainerWrapper } from "./styled";

interface PostContainerProps {
  children: React.ReactNode;
}

const PostContainer = ({ children }: PostContainerProps) => {
  return <PostContainerWrapper> {children}</PostContainerWrapper>;
};

export default PostContainer;
