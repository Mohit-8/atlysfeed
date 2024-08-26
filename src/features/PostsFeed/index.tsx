import Post from "components/Post";
import React, { useEffect, useRef, useState } from "react";
import { PostsFeedContainer } from "./styled";
import CreatePost from "./CreatePost";
import { SAMPLE_DATA } from "constants/sampleData";
import { EMOJIS } from "constants/emojis";
import Button from "components/Button";
import { useAuth } from "context/AuthContext";

const PostsFeed = () => {
  const [posts, setPosts] = useState(SAMPLE_DATA);
  const ref = useRef(SAMPLE_DATA[SAMPLE_DATA.length - 1].id + 1);
  const { removeUser, isLoggedIn, setLoginModal } = useAuth();

  useEffect(() => {
    setPosts(posts);
  }, []);

  const onClickPost = (desc: string) => {
    if (!isLoggedIn) {
      setLoginModal && setLoginModal();
      return;
    }
    const newPost = {
      id: ref.current++,
      description: desc || "If text is not provided then some default text",
      emoji: EMOJIS.TEXT,
      createdAt: new Date().toISOString(),
      name: "Jane Doe",
      imgSrc: "/images/femaleuser.svg",
      comments: 0,
    };
    setPosts((prev) => [newPost, ...prev]);
  };

  const handleLogout = () => {
    removeUser();
  };

  return (
    <PostsFeedContainer>
      {isLoggedIn && (
        <div className="logout-btn">
          <Button text="Logout" type="button" onClick={handleLogout} />
        </div>
      )}
      <div className="post-main">
        <h1>Hello Jane</h1>
        <p className="subheader">
          How are you doing today? Would you like to share something with the
          community 🤗
        </p>
        <CreatePost onPost={onClickPost} />
        {posts.map((post) => (
          <Post
            key={post.id}
            name={post.name}
            imgSrc={post.imgSrc}
            createdAt={post.createdAt}
            description={post.description}
            emoji={post.emoji}
            comments={post.comments}
          />
        ))}
      </div>
    </PostsFeedContainer>
  );
};

export default PostsFeed;
