import React, { useState } from "react";
import PostContainer from "components/PostContainer";
import { CreatePostWrapper } from "./styled";
import EmojiWrapper from "components/EmojiWrapper";
import Button from "components/Button";
import { EMOJIS } from "constants/emojis";

interface CreatePostProps {
  onPost: (desc: string) => void;
}

const CreatePost = ({ onPost }: CreatePostProps) => {
  const [postDesc, setPostDesc] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setPostDesc(e.target.value);
  };

  const handleOnPost = () => {
    onPost(postDesc);
    setPostDesc("");
  };

  return (
    <PostContainer>
      <CreatePostWrapper>
        <p className="create-heading">Create post</p>
        <div className="text-container">
          <EmojiWrapper emoji={EMOJIS.TEXT} />
          <textarea
            placeholder="How are you feeling today?"
            value={postDesc}
            onChange={(e) => handleChange(e)}
          ></textarea>
        </div>
        <div className="create-action">
          <div className="button-container">
            <Button text="Post" type="button" onClick={handleOnPost} />
          </div>
        </div>
      </CreatePostWrapper>
    </PostContainer>
  );
};

export default CreatePost;
