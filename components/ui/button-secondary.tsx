import React from "react";

interface ButtonSecondaryProps {
  children: React.ReactNode;
  className?: string;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`rounded-3xl border border-amber-400 px-10 py-3 font-medium text-amber-400 transition duration-300 hover:bg-amber-400 hover:text-black ${className}`}
    >
      {children}
    </div>
  );
};

export default ButtonSecondary;
