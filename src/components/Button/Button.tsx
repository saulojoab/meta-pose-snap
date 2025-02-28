import React from "react";
import { StyledButton } from "./Button.style";
import { ButtonProps } from "./Button.type";

const Button: React.FC<ButtonProps> = ({ variant = "solid", ...props }) => {
  return <StyledButton variant={variant} {...props} />;
};

export default Button;
