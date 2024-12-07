import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "default";
  disabled?: boolean;
}

export const Button = ({
  onClick,
  className,
  children,
  variant = "default",
  disabled,
}: ButtonProps) => {
  const baseClasses =
    "text-sm font-semibold inline-flex rounded-xl py-1.5 px-4 ";
  const variantClasses = {
    primary:
      "border border-green-500 bg-[#00aa45] text-white shadow-10 hover:shadow-15",
    default: "border border-gray-200 text-gray-1k shadow-5 hover:shadow-10",
  };
  return (
    <button
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};