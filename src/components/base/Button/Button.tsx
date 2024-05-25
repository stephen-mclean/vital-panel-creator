import classNames from "classnames";
import { Tooltip } from "react-tooltip";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent" | "error" | "ghost";
  tooltip?: string;
}

export const Button = ({
  variant = "secondary",
  children,
  id,
  tooltip,
  disabled,
  className,
  ...buttonProps
}: ButtonProps) => {
  const tooltipId = `${id}-btn-tooltip`;
  return (
    <>
      <button
        className={classNames(
          "px-4 py-2 rounded font-sans transition-colors flex gap-2 items-center",
          {
            "bg-gray-100 text-gray-600 disabled:bg-gray-50 disabled:text-gray-200 hover:text-gray-700":
              variant === "secondary",
            "bg-primary-500 text-primary-50 hover:text-primary-100 disabled:bg-primary-50 disabled:text-primary-200":
              variant === "primary",
            "bg-accent-500 text-accent-50 hover:text-accent-100 disabled:bg-accent-50 disabled:text-accent-200":
              variant === "accent",
            "bg-error-500 text-error-50 hover:text-error-100 disabled:bg-error-50 disabled:text-error-200":
              variant === "error",
            "bg-transparent text-primary-500 hover:text-primary-600 disabled:text-primary-100":
              variant === "ghost",
          },
          className
        )}
        id={id}
        disabled={disabled}
        {...buttonProps}
        data-tooltip-id={tooltipId}
        data-tooltip-content={tooltip}
      >
        {children}
      </button>
      {tooltip && <Tooltip id={tooltipId} />}
    </>
  );
};
