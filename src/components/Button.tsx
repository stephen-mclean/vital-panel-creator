import classNames from "classnames";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "error" | "ghost";
}

export const Button = ({
  variant = "secondary",
  children,
  ...buttonProps
}: ButtonProps) => {
  return (
    <button
      className={classNames("px-4 py-2 rounded font-sans transition-colors", {
        "bg-gray-100 text-gray-600 hover:text-gray-700":
          variant === "secondary",
        "bg-primary-500 text-primary-50 hover:text-primary-100":
          variant === "primary",
        "bg-accent-500 text-accent-50 hover:text-accent-100":
          variant === "accent",
        "bg-error-500 text-error-50 hover:text-error-100": variant === "error",
        "bg-transparent text-primary-500 hover:text-primary-600":
          variant === "ghost",
      })}
      {...buttonProps}
    >
      {children}
    </button>
  );
};
