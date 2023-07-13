import { ChangeEventHandler } from "react";
import styled, { css } from "styled-components";

interface MyInputProps {
  InputSize?: "large" | "medium" | "small";
  color?: string;
}

const MyInput = styled.input<MyInputProps>`
  ${(props) => {
    switch (props.color) {
      case "white":
        return css`
          border: 1px solid #fff;
          height: 40px;
          color: #fff;
          &::placeholder {
            color: #fff;
          }
        `;
      case "black":
        return css`
          border: 1px solid rgb(51, 51, 51);
          height: 60px;
          color: #000;
          &::placeholder {
            color: #000;
          }
        `;
      default:
        return css`
          border: 1px solid rgb(51, 51, 51);
          height: 40px;
          color: #000;
          &::placeholder {
            color: #000;
          }
        `;
    }
  }}
  width: ${(prop) => (prop.InputSize === "large" ? "300" : "200")}px;
  outline: none;
  background-color: transparent;
  border-radius: 8px;
  padding-left: 12px;
  padding-right: 12px;

  &:focus {
    outline: auto;
  }
`;
interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  InputSize?: "large" | "medium" | "small";
  value: string;
  type?: "default" | "price";
  placeholder?: string;
  id?: string;
  color: "black" | "white";
}
const Input: React.FC<InputProps> = (props) => {
  const {
    color = "black",
    id,
    onChange,
    InputSize = "medium",
    value,
    type = "default",
    placeholder,
  } = props;
  return (
    <>
      <MyInput
        id={id}
        color={color}
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        InputSize={InputSize}
        value={type === "default" ? value : value || "0"}
      />
    </>
  );
};
export default Input;
