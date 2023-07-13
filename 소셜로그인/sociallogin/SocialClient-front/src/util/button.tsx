import styled from "styled-components";

interface StyledButtonProps {
  color: "red" | "green" | "white";
  size: "large" | "small" | "medium";
}
export interface ButtonProps extends StyledButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  title: JSX.Element;
  type?: "button" | "submit" | "reset";
}

const MyButton = styled.button<StyledButtonProps>`
  background-color: ${(props: StyledButtonProps) =>
    props?.size === "large"
      ? "#fff"
      : props.color === "green"
      ? "rgb(85, 239, 196)"
      : "rgb(250, 177, 160)"};
  border-radius: 8px;
  color: ${(props: StyledButtonProps) =>
    props.color === "green" ? "black" : "rgb(214, 48, 49)" || "black"};
  &:active {
    background-color: ${(props: StyledButtonProps) =>
      props?.size === "large"
        ? "rgb(238, 238, 238)"
        : props.color === "green"
        ? "rgb(0, 184, 148)"
        : "rgb(225, 112, 85)"};
  }
  padding: 10px;
  border: ${(props: StyledButtonProps) => (props?.size === "large" ? "3px solid" : "none")};
  border-color: ${(props: StyledButtonProps) =>
    props?.color === "green" ? "#4dff5f" : "rgb(250, 177, 160)" || "black"};

  height: ${(props: StyledButtonProps) =>
    props?.size === "large"
      ? "50px"
      : props?.size === "medium"
      ? "45px"
      : props?.size === "small"
      ? "40px"
      : "auto"};
  width: ${(props: StyledButtonProps) =>
    props?.size === "large"
      ? "200px"
      : props?.size === "medium"
      ? "130px"
      : props?.size === "small"
      ? "100px"
      : "auto"};
  font-weight: ${(props: StyledButtonProps) => (props?.size === "large" ? "600" : "400")};
`;

const Button: React.FC<ButtonProps> = (props) => {
  const { onClick, title, type, color, size } = props;

  return (
    <MyButton onClick={onClick} color={color} size={size} type={type}>
      {title}
    </MyButton>
  );
};
export default Button;
