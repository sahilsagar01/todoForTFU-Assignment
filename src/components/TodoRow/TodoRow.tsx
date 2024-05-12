import React from "react";
import Button from "../Buttons/Button.tsx";
import Checkbox from "../Checkbox/Checkbox.tsx";
import './TodoRow.css'

interface RowProps {
  label: string;
  onDelete: () => void;
}

const RowComponent: React.FC<RowProps> = ({ label, onDelete }) => {
  return (
    <div className="row-container">
      <Checkbox label={label} />
      <Button variant="small" onClick={onDelete} />
    </div>
  );
};

export default RowComponent;
