import React from "react";
import { EmojiStyledWrapper } from "./styled";

interface EmojiProps {
  emoji: string;
}

const EmojiWrapper = ({ emoji }: EmojiProps) => {
  return <EmojiStyledWrapper>{emoji}</EmojiStyledWrapper>;
};

export default EmojiWrapper;
