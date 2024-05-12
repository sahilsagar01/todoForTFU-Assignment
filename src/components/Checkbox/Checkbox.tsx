// CheckboxComponent.tsx
import React from "react";
import "./Checkbox.css"

interface CheckboxProps {
  label: string;
}

const CheckboxComponent: React.FC<CheckboxProps> = ({ label }) => {
  return (
    <div className="checkbox_cont">
      <input type="checkbox" id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  );
};

export default CheckboxComponent;
