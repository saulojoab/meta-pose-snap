import styled from "styled-components";
import { IButtonStyle } from "./Button.type";

export const StyledButton = styled.button<IButtonStyle>`
  font-family: var(--font-geist-mono);
  display: inline-block;
  padding: 10px 20px;
  border-radius: 0;
  font-size: 16px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${({ variant }) => (variant === "solid" ? "#fff" : "#000")};
  background-color: ${({ variant }) =>
    variant === "solid" ? "#000" : "transparent"};
  border: ${({ variant }) => (variant === "solid" ? "none" : "1px solid #000")};

  &:hover {
    background-color: ${({ variant }) =>
      variant === "solid" ? "#333" : "#000"};
    color: #fff;
  }
`;
