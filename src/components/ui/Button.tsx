import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "primary" | "secondary" | "text";
  children: ReactNode;
}

export function Button({
  kind = "primary",
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button className={`button button--${kind} ${className}`} {...props}>
      {children}
    </button>
  );
}
