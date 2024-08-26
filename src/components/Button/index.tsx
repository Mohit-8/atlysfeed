import { ButtonWrapper } from "./styled";

interface ButtonProps {
  text: string;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  btnClassName?: string;
  type: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

const Button = (props: ButtonProps) => {
  const { text, type, btnClassName, onClick } = props;
  return (
    <ButtonWrapper type={type} className={btnClassName} onClick={onClick}>
      {text}
    </ButtonWrapper>
  );
};

export default Button;
