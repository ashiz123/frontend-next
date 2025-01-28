import React from "react";

interface buttonProps {
  title: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  classname?: string;
  onClick?: () => void; //dont return value
}

const CustomButton: React.FC<buttonProps> = ({ title, classname, onClick }) => {
  return (
    <button className={classname} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;
