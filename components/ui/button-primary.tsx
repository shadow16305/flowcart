import React from "react";

interface ButtonPrimaryProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`rounded-3xl bg-amber-400 px-10 py-3 font-medium text-black transition duration-300 hover:bg-amber-200 ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonPrimary;
