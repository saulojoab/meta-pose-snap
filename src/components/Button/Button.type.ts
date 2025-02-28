export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "solid" | "outlined";
}

export interface IButtonStyle {
  variant: "solid" | "outlined";
}
