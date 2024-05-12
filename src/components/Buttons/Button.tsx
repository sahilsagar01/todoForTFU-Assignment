// ButtonComponent.tsx
import React from "react";
import "./Button.css"

interface ButtonProps {
  variant: "small" | "large";
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonProps> = ({ variant, onClick }) => {
  return (
    <button
    className={variant === "small" ? "button-small" : "button-large"}
      onClick={onClick}
      style={{ padding: variant === "small" ? "5px 10px" : "10px 20px" }}
    >
      {variant === "small" ? "X" : "Add"}
    </button>
  );
};

export default ButtonComponent;
