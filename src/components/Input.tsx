import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: boolean;
  fullWidth?: boolean;
}

export const Input = ({
  label,
  error,
  fullWidth,
  id,
  ...inputProps
}: InputProps) => {
  return (
    <div
      className={classNames("flex flex-col gap-1 font-sans", {
        "w-full": fullWidth,
      })}
    >
      {label && (
        <label htmlFor={id} className="text-gray-600 font-medium text-sm">
          {label}
        </label>
      )}
      <input
        {...inputProps}
        id={id}
        className={classNames(
          "bg-gray-50 text-gray-500 focus:outline-none  rounded px-2 py-1 transition-colors placeholder:text-gray-300",
          {
            "border border-gray-100 focus:border-gray-300 hover:border-gray-300":
              !error,
            "border border-error-500": error,
            "w-full": fullWidth,
          }
        )}
      />
    </div>
  );
};
